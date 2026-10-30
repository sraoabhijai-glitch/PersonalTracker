const I={home:'<path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',meal:'<path d="M7 2v7a3 3 0 0 0 3 3v10M4 2v6M10 2v6M18 22V2c-2 1-3 4-3 8s1 5 3 5"/>',pill:'<path d="M10.5 20.5l-7-7a4.9 4.9 0 0 1 7-7l7 7a4.9 4.9 0 0 1-7 7zM8.5 8.5l7 7"/>',chart:'<path d="M3 3v18h18M7 15l4-4 3 3 5-6"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',drop:'<path d="M12 2.7s7 7 7 12a7 7 0 0 1-14 0c0-5 7-12 7-12z"/>',check:'<path d="M5 12l5 5 9-10"/>',chev:'<path d="M6 9l6 6 6-6"/>'};
const ic=(n,s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[n]}</svg>`;
// Meals: [name, time(min), items[name, qty, kcal, protein, carbs, fat]]  (values are estimates)
const M=[
["Pre-workout",450,[["Banana","1 medium",105,1,27,0],["Whole-wheat bread","2 slices",160,6,28,2],["Peanut butter","10 g",59,3,2,5]]],
["Post-workout breakfast",570,[["Rolled oats","40 g",150,5,27,3],["Milk","200 ml",120,6,10,6],["Banana","½ medium",52,1,13,0],["Whey protein","½ scoop",50,12,1,1],["Chia seeds","5 g",24,1,2,2],["Ground flaxseed","5 g",27,1,1,2],["Whole eggs","2",143,13,1,10],["Cooked vegetables","small serving",30,2,6,0]]],
["Mid-morning snack",690,[["Boiled sweet potato","100 g",86,2,20,0],["Guava or apple","1 small",60,1,14,1]]],
["Lunch",810,[["Cooked rice","200 g",260,5,56,1],["Cooked dal","1 cup",200,12,32,3],["Curd","150 g",90,5,7,5],["Cooked vegetables","150 g",60,3,12,1],["Ghee","1 tsp",40,0,0,5]]],
["Evening snack",1020,[["Whole-wheat bread","2 slices",160,6,28,2],["Paneer","50 g",130,9,1,10],["Pomegranate","½ cup",72,2,16,1]]],
["Dinner",1200,[["Chapati","2 medium",210,7,40,3],["Cooked vegetables","150 g",60,3,12,1],["Cooked dal","½ cup",100,6,16,2],["Curd","100 g",60,4,5,3]]],
["Before bed",1320,[["Warm milk","150 ml",92,5,7,5]]]];
const SP=[["wh","Whey protein","½ scoop",570,"With breakfast"],["cr","Creatine monohydrate","3–5 g",585,"Check kidney function with your clinician first","flag"],["mv","Multivitamin","Label dose",585,"Only if needed for dietary gaps","opt"],["fo","Fish oil","Label dose",825,"Optional omega-3","opt"],["as","Ashwagandha","Not scheduled",0,"On hold until suitability is reviewed","hold"]];
const K='personal-tracking-v1',$=s=>document.querySelector(s);
const fm=m=>{const h=Math.floor(m/60);return`${h%12||12}:${String(m%60).padStart(2,'0')} ${h<12?'AM':'PM'}`};
const dk=()=>new Date().toLocaleDateString('en-CA');
let S={};try{S=JSON.parse(localStorage.getItem(K)||'{}')}catch(e){}
S.days||={};S.w||=[];S.t||={kcal:2500,p:118,c:325,f:72,water:3000};
const save=()=>localStorage.setItem(K,JSON.stringify(S));
const D=()=>S.days[dk()]||={x:{},s:{},water:0};
let tab='home',opn=new Set();
const tot=()=>{const d=D(),r={k:0,p:0,c:0,f:0};M.forEach((m,i)=>m[2].forEach((x,j)=>{if(d.x[i+'-'+j]){r.k+=x[2];r.p+=x[3];r.c+=x[4];r.f+=x[5]}}));return r};
const mdone=i=>{const d=D();return M[i][2].filter((_,j)=>d.x[i+'-'+j]).length};
const ring=(v,max,sz=150)=>{const r=sz/2-10,c=2*Math.PI*r,p=Math.min(v/max,1);return`<svg width="${sz}" height="${sz}"><circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="var(--bd)" stroke-width="11"/><circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="url(#g)" stroke-width="11" stroke-linecap="round" stroke-dasharray="${c*p} ${c}" transform="rotate(-90 ${sz/2} ${sz/2})" style="transition:stroke-dasharray .5s"/></svg>`};
const mac=(l,v,t,col)=>`<div class="mac"><div class="row sp"><span>${l}</span><span class="mu"><b style="color:var(--tx)">${Math.round(v)}</b> / ${t} g</span></div><div class="bar"><i style="width:${Math.min(v/t*100,100)}%;background:${col}"></i></div></div>`;
function home(){const t=tot(),T=S.t,d=D(),n=new Date(),now=n.getHours()*60+n.getMinutes(),
nx=M.findIndex((m,i)=>m[1]>=now-30&&mdone(i)<m[2].length),all=M.reduce((a,m,i)=>a+(mdone(i)==m[2].length),0);
return`<div class="card"><div class="hero"><div class="ringw">${ring(t.k,T.kcal)}<div><b>${Math.round(t.k)}</b><span class="mu">of ${T.kcal} kcal</span></div></div><div style="flex:1"><div class="mu">Left today</div><b style="font-size:24px">${Math.max(T.kcal-Math.round(t.k),0)}</b> <span class="mu">kcal</span><div class="mu" style="margin-top:8px">${all}/${M.length} meals done</div></div></div></div>
<div class="card">${mac('Protein',t.p,T.p,'var(--p)')}${mac('Carbs',t.c,T.c,'var(--c)')}${mac('Fat',t.f,T.f,'var(--f)')}</div>
<div class="card"><div class="row sp"><h2 style="margin:0">Water</h2><span class="mu"><b style="color:var(--tx)">${(d.water/1000).toFixed(2)}</b> / ${(T.water/1000).toFixed(1)} L</span></div><div class="bar" style="margin:12px 0"><i style="width:${Math.min(d.water/T.water*100,100)}%;background:#0ea5e9"></i></div><div class="row"><button class="pill" data-a="wat" data-n="250">+250 ml</button><button class="pill" data-a="wat" data-n="500">+500 ml</button><button class="pill" data-a="wat" data-n="-250" style="background:var(--bd);color:var(--mu)">Undo</button></div></div>
<div class="card"><div class="mu">Up next</div>${nx<0?'<h2 style="margin:4px 0 0">All meals done 🎉</h2>':`<h2 style="margin:4px 0">${M[nx][0]}</h2><div class="mu">${fm(M[nx][1])} · ${M[nx][2].map(x=>x[0]).slice(0,3).join(', ')}</div><button class="btn alt" data-a="open" data-i="${nx}">Open meal</button>`}</div>`}
function meals(){return M.map((m,i)=>{const k=m[2].reduce((a,x)=>a+x[2],0),p=m[2].reduce((a,x)=>a+x[3],0),dn=mdone(i),d=D();
return`<div class="card meal ${opn.has(i)?'open':''}"><button class="mh" data-a="acc" data-i="${i}"><span class="badge">${ic('meal')}</span><span class="t"><b>${m[0]}</b><span class="mu">${fm(m[1])} · ${k} kcal · ${p} g protein</span><div class="bar" style="margin-top:8px"><i style="width:${dn/m[2].length*100}%;background:linear-gradient(90deg,#14b8a6,#84cc16)"></i></div></span><span class="chev">${ic('chev')}</span></button>
<div class="mb">${m[2].map((x,j)=>`<button class="it ${d.x[i+'-'+j]?'on':''}" data-a="tog" data-id="${i}-${j}"><span class="cb">${ic('check',16)}</span><span class="nm">${x[0]}</span><span class="q">${x[1]}</span></button>`).join('')}<button class="btn alt" data-a="all" data-i="${i}">${dn==m[2].length?'Clear meal':'Mark whole meal done'}</button></div></div>`}).join('')+`<p class="mu" style="text-align:center">Nutrition values are estimates.</p>`}
function supps(){const d=D();return`<div class="note"><b>Kidney stone history:</b> confirm kidney function with your clinician before regular creatine. Avoid high-dose vitamin C unless prescribed. Go easy on high-oxalate nuts and seeds until your stone type is known.</div><div class="card">${SP.map(s=>`<button class="it ${d.s[s[0]]?'on':''}" data-a="sup" data-id="${s[0]}" ${s[5]=='hold'?'disabled style="opacity:.5"':''}><span class="cb">${ic('check',16)}</span><span class="nm"><b>${s[1]}</b><div class="mu" style="font-size:13px">${s[3]?fm(s[3])+' · ':''}${s[4]}</div></span><span class="q">${s[2]}</span></button>`).join('')}</div><p class="mu">Supplement use is provisional, not a confirmed prescription.</p>`}
function prog(){const w=S.w.slice(-14),last=S.w.at(-1);let ch='';if(w.length>1){const mn=Math.min(...w.map(x=>x.w),60)-1,mx=Math.max(...w.map(x=>x.w),70)+1,X=i=>20+i*(300/(w.length-1)),Y=v=>130-(v-mn)/(mx-mn)*120;
ch=`<svg viewBox="0 0 340 140" width="100%"><rect x="20" y="${Y(70)}" width="300" height="${Y(65)-Y(70)}" rx="8" fill="var(--soft)"/><polyline fill="none" stroke="url(#g)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" points="${w.map((p,i)=>X(i)+','+Y(p.w)).join(' ')}"/>${w.map((p,i)=>`<circle cx="${X(i)}" cy="${Y(p.w)}" r="4" fill="var(--a)"/>`).join('')}</svg><div class="mu" style="font-size:12px">Shaded band = 65–70 kg target</div>`}
return`<div class="card"><div class="row sp"><div><div class="mu">Current</div><b style="font-size:32px">${last?last.w:'—'}</b> kg</div><div style="text-align:right"><div class="mu">Target</div><b style="font-size:22px">65–70</b> kg</div></div>${ch}</div><div class="card"><h2>Log today's weight</h2><div class="row"><input type="number" id="wi" inputmode="decimal" step="0.1" placeholder="60.0" style="flex:1;width:auto"><button class="pill" data-a="svw">Save weight</button></div></div>`}
function sett(){const T=S.t;return`<div class="card"><h2>Daily targets</h2>${[['kcal','Calories (kcal)'],['p','Protein (g)'],['c','Carbs (g)'],['f','Fat (g)'],['water','Water (ml)']].map(([k,l])=>`<label class="f"><span>${l}</span><input type="number" data-k="${k}" value="${T[k]}"></label>`).join('')}</div><div class="card"><h2>Data</h2><button class="btn alt" data-a="exp">Export backup</button><button class="btn alt" data-a="imp">Import backup</button><button class="btn alt" data-a="rst">Reset today</button><button class="btn dng" data-a="clr">Delete all data</button></div><p class="mu" style="text-align:center">Data is stored on this device only.</p>`}
const V={home,meals,supps,prog,settings:sett},N=[['home','Today','home'],['meals','Meals','meal'],['supps','Supps','pill'],['prog','Progress','chart']],TT={home:'Today',meals:'Meals',supps:'Supplements',prog:'Progress',settings:'Settings'};
function render(){const n=new Date(),h=n.getHours();$('#dt').textContent=n.toLocaleDateString(undefined,{weekday:'long',day:'numeric',month:'long'});$('#hi').textContent=tab=='home'?(h<12?'Good morning':h<17?'Good afternoon':'Good evening'):TT[tab];$('#gear').innerHTML=ic('gear');
$('#v').innerHTML=V[tab==='supps'?'supps':tab]();$('#nav').innerHTML=N.map(([k,l,i])=>`<button data-v="${k}" class="${tab==k?'act':''}">${ic(i)}${l}</button>`).join('')}
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)};
document.addEventListener('click',e=>{const v=e.target.closest('[data-v]');if(v){tab=v.dataset.v;render();scrollTo(0,0);return}
const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a,d=D(),i=+b.dataset.i;
if(a=='acc'){opn.has(i)?opn.delete(i):opn.add(i)}
else if(a=='open'){opn=new Set([i]);tab='meals'}
else if(a=='tog'){d.x[b.dataset.id]=!d.x[b.dataset.id]}
else if(a=='all'){const f=mdone(i)<M[i][2].length;M[i][2].forEach((_,j)=>d.x[i+'-'+j]=f)}
else if(a=='sup'){d.s[b.dataset.id]=!d.s[b.dataset.id]}
else if(a=='wat'){d.water=Math.max(0,d.water+ +b.dataset.n)}
else if(a=='svw'){const x=parseFloat($('#wi').value);if(!(x>20&&x<300))return toast('Enter a valid weight');S.w=S.w.filter(r=>r.d!=dk());S.w.push({d:dk(),w:x});toast('Weight saved')}
else if(a=='exp'){const u=URL.createObjectURL(new Blob([JSON.stringify(S)],{type:'application/json'})),l=document.createElement('a');l.href=u;l.download='personal-tracking-'+dk()+'.json';l.click();return}
else if(a=='imp'){$('#imp').click();return}
else if(a=='rst'){if(confirm("Reset today's tracking?"))delete S.days[dk()]}
else if(a=='clr'){if(confirm('Delete ALL data? This cannot be undone.')){S={};localStorage.removeItem(K);location.reload();return}}
save();render()});
document.addEventListener('change',e=>{const k=e.target.dataset.k;if(k){const x=+e.target.value;if(x>0){S.t[k]=x;save();toast('Saved')}}});
$('#imp').addEventListener('change',e=>{const f=e.target.files[0];if(!f)return;f.text().then(t=>{try{const j=JSON.parse(t);if(!j.days||!j.t)throw 0;S=j;save();render();toast('Backup imported')}catch(x){toast('Invalid backup file')}})});
render();
if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js'));
