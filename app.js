const I={home:'<path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',meal:'<path d="M7 2v7a3 3 0 0 0 3 3v10M4 2v6M10 2v6M18 22V2c-2 1-3 4-3 8s1 5 3 5"/>',pill:'<path d="M10.5 20.5l-7-7a4.9 4.9 0 0 1 7-7l7 7a4.9 4.9 0 0 1-7 7zM8.5 8.5l7 7"/>',chart:'<path d="M3 3v18h18M7 15l4-4 3 3 5-6"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',check:'<path d="M5 12l5 5 9-10"/>',heart:'<path fill="currentColor" stroke="none" d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/>',flame:'<path fill="currentColor" stroke="none" d="M12.5 2.5c.4 3-1.6 4.6-3 6.4C8.200 10.600 7 12 7 14.500a5 5 0 0 0 10 0c0-2-1-3.300-2-4.400-.2 1-.7 1.800-1.500 2.200.600-3-.1-6-1-9.800z"/>',drop:'<path fill="currentColor" stroke="none" d="M12 2.7s7 7 7 12a7 7 0 0 1-14 0c0-5 7-12 7-12z"/>',chevr:'<path d="M9 6l6 6-6 6"/>',chev:'<path d="M6 9l6 6 6-6"/>'};
const ic=(n,s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[n]}</svg>`;
// nutrient vector: kcal, protein, carbs, fat, fibre, calcium, iron, magnesium, potassium, vitamin C (estimates)
const NU=[["Calories","kcal","#ff6a2a"],["Protein","g","#b4ff00"],["Carbs","g","#1ee0f0"],["Fat","g","#bf5af2"],["Fibre","g","#30d158"],["Calcium","mg","#0a84ff"],["Iron","mg","#ff453a"],["Magnesium","mg","#64d2ff"],["Potassium","mg","#ff375f"],["Vitamin C","mg","#ffd60a"]];
const T0=[[2500,2600],[118,125],[325,350],[72,80],[30,45],[1000,2500],[17,45],[400,600],[3500,6000],[90,1000]];
const M0=[["Pre-workout",450,[["Banana","1 medium",[105,1,27,0,3,6,.3,32,422,10]],["Whole-wheat bread","2 slices",[160,6,28,2,4,60,1.6,50,160,0]],["Peanut butter","10 g",[59,3,2,5,1,1,.1,17,65,0]]]],
["Post-workout breakfast",570,[["Rolled oats","40 g",[150,5,27,3,4,21,1.7,55,150,0]],["Milk","200 ml",[120,6,10,6,0,240,.1,24,300,2]],["Banana","½ medium",[52,1,13,0,1.5,3,.2,16,211,5]],["Whey protein","½ scoop",[50,12,1,1,0,60,.1,10,60,0]],["Chia seeds","5 g",[24,1,2,2,2,31,.4,17,22,0]],["Ground flaxseed","5 g",[27,1,1,2,1.4,13,.3,20,41,0]],["Whole eggs","2",[143,13,1,10,0,56,1.8,12,138,0]],["Cooked vegetables","small serving",[30,2,6,0,2.5,30,.6,15,200,15]]]],
["Mid-morning snack",690,[["Boiled sweet potato","100 g",[86,2,20,0,3,30,.6,25,337,2.4]],["Guava or apple","1 small",[60,1,14,0,3,8,.2,7,150,8]]]],
["Lunch",810,[["Cooked rice","200 g",[260,5,56,.5,1,20,.4,24,70,0]],["Cooked dal","1 cup",[200,12,32,3,8,50,3,60,500,2]],["Curd","150 g",[90,5,7,5,0,170,.1,15,200,.5]],["Cooked vegetables","150 g",[60,3,12,.5,5,50,1.2,25,350,25]],["Ghee","1 tsp",[40,0,0,5,0,0,0,0,0,0]]]],
["Evening snack",1020,[["Whole-wheat bread","2 slices",[160,6,28,2,4,60,1.6,50,160,0]],["Paneer","50 g",[130,9,1,10,0,230,.1,10,40,0]],["Pomegranate","½ cup",[72,1.5,16,1,3.5,9,.3,9,205,9]]]],
["Dinner",1200,[["Chapati","2 medium",[210,7,40,3,5,20,2,40,150,0]],["Cooked vegetables","150 g",[60,3,12,.5,5,50,1.2,25,350,25]],["Cooked dal","½ cup",[100,6,16,1.5,4,25,1.5,30,250,1]],["Curd","100 g",[60,3.5,4.7,3.3,0,110,.1,10,130,.3]]]],
["Before bed",1320,[["Warm milk","150 ml",[92,5,7,5,0,180,.1,18,225,1.5]]]]];
const SP0=[["wh","Whey protein","½ scoop",570,"With breakfast"],["cr","Creatine monohydrate","3–5 g",585,"Confirm kidney function with your clinician first"],["mv","Multivitamin","Label dose",585,"Only if needed for dietary gaps"],["fo","Fish oil","Label dose",825,"Optional omega-3"],["as","Ashwagandha","Label dose",0,"Can cause stomach upset; rarely liver injury. Set a time and review with your clinician."]];
const K='personal-tracking-v2',$=s=>document.querySelector(s),uid=()=>Math.random().toString(36).slice(2,8);
const esc=s=>String(s??'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
const fm=m=>{const h=Math.floor(m/60);return`${h%12||12}:${String(m%60).padStart(2,'0')} ${h<12?'AM':'PM'}`};
const tv=m=>m?`${String(m/60|0).padStart(2,'0')}:${String(m%60).padStart(2,'0')}`:'';
const fv=v=>v>=100?Math.round(v):Math.round(v*10)/10;
const dk=()=>new Date().toLocaleDateString('en-CA');
let S={};try{S=JSON.parse(localStorage.getItem(K)||'{}')}catch(e){}
if(!S.w)try{S.w=JSON.parse(localStorage.getItem('personal-tracking-v1')||'{}').w}catch(e){}
S.days||={};S.w||=[];S.water||=3000;S.fired||={};
S.meals||=M0.map(m=>({id:uid(),name:m[0],t:m[1],items:m[2].map(x=>({id:uid(),name:x[0],q:x[1],s:1,n:x[2]}))}));
S.sp||=SP0.map(s=>({id:s[0],name:s[1],dose:s[2],t:s[3],note:s[4]}));
S.tg||=T0.map(([t,mx])=>({t,mx}));
S.n||={on:false,meal:true,lead:0,sup:true,water:true,wi:2,eod:true,et:1290,alert:true};
const save=()=>localStorage.setItem(K,JSON.stringify(S));
const D=()=>S.days[dk()]||={x:{},s:{},water:0};
let tab='home',opn=new Set(),sh=null;
const totD=d=>{const r=Array(10).fill(0);S.meals.forEach(m=>m.items.forEach(x=>{if(d.x[x.id])x.n.forEach((v,i)=>r[i]+=v*(x.s||1))}));return r},tot=()=>totD(D());
const mdone=m=>m.items.filter(x=>D().x[x.id]).length;
const msum=(m,i)=>m.items.reduce((a,x)=>a+x.n[i]*(x.s||1),0);
const nowM=()=>{const n=new Date();return n.getHours()*60+n.getMinutes()};
const alerts=()=>{const t=tot(),a=[];t.forEach((v,i)=>{const g=S.tg[i];if(v>g.mx)a.push(['r',`${NU[i][0]} is over your limit: ${fv(v)} of ${g.mx} ${NU[i][1]}`]);else if(nowM()>=S.n.et&&v<g.t*.8)a.push(['',`${NU[i][0]} is low today: ${fv(v)} of ${g.t} ${NU[i][1]}`])});return a};
const ring=(v,max,sz=150)=>{const r=sz/2-10,c=2*Math.PI*r,p=Math.min(v/max,1);return`<svg width="${sz}" height="${sz}"><circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="var(--bd)" stroke-width="11"/><circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="url(#g)" stroke-width="11" stroke-linecap="round" stroke-dasharray="${c*p} ${c}" transform="rotate(-90 ${sz/2} ${sz/2})" style="transition:stroke-dasharray .5s"/></svg>`};
const nb=(i,v)=>{const g=S.tg[i];return`<div class="mac"><div class="row sp"><span>${NU[i][0]}</span><span class="mu"><b style="color:var(--tx)">${fv(v)}</b> / ${g.t} ${NU[i][1]}</span></div><div class="bar"><i style="width:${Math.min(v/g.t*100,100)}%;background:${v>g.mx?'#ef4444':NU[i][2]}"></i></div></div>`};
const sw=(k,on,ex='')=>`<label class="sw"><input type="checkbox" data-nk="${k}" ${on?'checked':''}><i></i></label>`;
const fld=(l,f,v,ty='txt')=>`<label class="f"><span>${l}</span><input data-f="${f}" data-ty="${ty}" type="${ty=='num'?'number':ty=='time'?'time':'text'}" ${ty=='num'?'inputmode="decimal" step="any"':''} value="${esc(ty=='time'?tv(v):v)}"></label>`;
const rings=(t,sz=108)=>`<svg width="${sz}" height="${sz}" style="flex:none">${['#ff2d55','#b4ff00','#1ee0f0'].map((c,k)=>{const r=sz/2-8-k*14,q=2*Math.PI*r,p=Math.min(t[k]/S.tg[k].t,1);return`<circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="${c}" stroke-opacity=".25" stroke-width="12"/><circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="${c}" stroke-width="12" stroke-linecap="round" stroke-dasharray="${q*p} ${q}" transform="rotate(-90 ${sz/2} ${sz/2})" style="transition:stroke-dasharray .5s"/>`}).join('')}</svg>`;
const ch=(c,i,t,r='')=>`<div class="ch"><b style="color:${c}">${ic(i,20)}<span>${t}</span></b><span>${r}${ic('chevr',16)}</span></div>`;
function home(){const t=tot(),d=D(),al=alerts(),sorted=[...S.meals].sort((a,b)=>a.t-b.t),nx=sorted.find(m=>m.t>=nowM()-30&&mdone(m)<m.items.length),g=S.tg,
st=(l,i,c)=>`<div class="stat" style="color:${c}">${l}<div class="big" style="color:var(--tx)">${fv(t[i])} <small>/ ${g[i].t} ${NU[i][1]}</small></div></div>`,
wk=[6,5,4,3,2,1,0].map(k=>{const y=S.days[new Date(Date.now()-k*864e5).toLocaleDateString('en-CA')];return y?totD(y)[0]:0}),mk=Math.max(...wk,g[0].t);
return`${al.map(a=>`<div class="note ${a[0]}">${a[1]}</div>`).join('')}<div class="sec"><h2>Pinned</h2><button class="lnk" data-v="settings">Edit</button></div>
<div class="card">${ch('var(--k)','flame','Nutrition',fm(nowM()))}<div class="row sp" style="margin-top:18px"><div>${st('Calories',0,'#ff2d55')}${st('Protein',1,'var(--p)')}${st('Carbs',2,'var(--c)')}</div>${rings(t)}</div></div>
<div class="card">${ch('var(--k)','flame','Calories','Last 7 days')}<div class="row sp" style="margin-top:22px;align-items:flex-end"><div class="big">${Math.round(t[0])} <small>kcal</small></div><div class="bars">${wk.map((v,i)=>`<i style="height:${Math.max(v/mk*100,8)}%;${i==6?'background:var(--k)':''}"></i>`).join('')}</div></div></div>
<div class="card">${ch('#32ade6','drop','Water','Today')}<div class="big" style="margin-top:18px">${(d.water/1000).toFixed(2)} <small>of ${(S.water/1000).toFixed(1)} L</small></div><div class="bar" style="margin:14px 0"><i style="width:${Math.min(d.water/S.water*100,100)}%;background:#32ade6"></i></div><div class="row"><button class="pill" data-a="wat" data-n="250">+250 ml</button><button class="pill" data-a="wat" data-n="500">+500 ml</button><button class="pill" data-a="wat" data-n="-250" style="background:var(--s2);color:var(--mu)">Undo</button></div></div>
<div class="card">${ch('#7d7aff','meal','Up next',nx?fm(nx.t):'Today')}${!nx?'<div class="big" style="margin-top:18px">All done</div>':`<div class="big" style="margin-top:18px;font-size:26px">${esc(nx.name)}</div><div class="mu" style="margin-top:4px">${nx.items.slice(0,3).map(x=>esc(x.name)).join(', ')}</div><button class="btn" data-a="open" data-id="${nx.id}">Review</button>`}</div>
<div class="card">${ch('var(--f)','heart','Macros')}${[1,2,3].map(i=>nb(i,t[i])).join('')}</div>
<div class="card">${ch('#30d158','heart','Fibre and micronutrients')}${[4,5,6,7,8,9].map(i=>nb(i,t[i])).join('')}<div class="mu" style="font-size:12px">Food values are estimates. Edit targets in Settings.</div></div>`}
function meals(){const d=D();return S.meals.map((m,i)=>[m,i]).sort((a,b)=>a[0].t-b[0].t).map(([m,i])=>{const dn=mdone(m),n=m.items.length;
return`<div class="card meal ${opn.has(m.id)?'open':''}"><button class="mh" data-a="acc" data-id="${m.id}"><span class="badge">${ic('meal')}</span><span class="t"><b>${esc(m.name)}</b><span class="mu">${fm(m.t)} · ${Math.round(msum(m,0))} kcal · ${Math.round(msum(m,1))} g protein</span><div class="bar" style="margin-top:8px"><i style="width:${n?dn/n*100:0}%;background:linear-gradient(90deg,#14b8a6,#84cc16)"></i></div></span><span class="chev">${ic('chev')}</span></button>
<div class="mb">${m.items.map(x=>`<button class="it ${d.x[x.id]?'on':''}" data-a="tog" data-id="${x.id}"><span class="cb">${ic('check',16)}</span><span class="nm">${esc(x.name)}</span><span class="q">${esc(x.q)}${x.s!=1?' ×'+x.s:''}</span></button>`).join('')||'<p class="mu">No foods yet. Add some in Settings.</p>'}${n?`<button class="btn alt" data-a="all" data-i="${i}">${dn==n?'Clear meal':'Mark whole meal done'}</button>`:''}</div></div>`}).join('')+`<p class="mu" style="text-align:center">Edit meals in Settings. Nutrition values are estimates.</p>`}
function supps(){const d=D();return`<div class="note"><b>Kidney stone history:</b> confirm kidney function with your clinician before regular creatine. Avoid high-dose vitamin C unless prescribed. Go easy on high-oxalate nuts and seeds until your stone type is known.</div><div class="card">${S.sp.map(s=>`<div class="it ${d.s[s.id]?'on':''}"><button class="in" data-a="sup" data-id="${s.id}"><span class="cb">${ic('check',16)}</span><span class="nm"><b>${esc(s.name)}</b><div class="mu" style="font-size:13px">${s.t?fm(s.t)+' · ':'No set time · '}${esc(s.dose)}${s.note?' · '+esc(s.note):''}</div></span></button><button class="ed" data-a="es" data-id="${s.id}">Edit</button></div>`).join('')}<button class="btn alt" data-a="as">+ Add supplement</button></div><p class="mu">Supplement use is provisional, not a confirmed prescription.</p>`}
function prog(){const w=S.w.slice(-14),last=S.w.at(-1);let ch='';if(w.length>1){const mn=Math.min(...w.map(x=>x.w),60)-1,mx=Math.max(...w.map(x=>x.w),70)+1,X=i=>20+i*(300/(w.length-1)),Y=v=>130-(v-mn)/(mx-mn)*120;
ch=`<svg viewBox="0 0 340 140" width="100%"><rect x="20" y="${Y(70)}" width="300" height="${Y(65)-Y(70)}" rx="8" fill="var(--soft)"/><polyline fill="none" stroke="url(#g)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" points="${w.map((p,i)=>X(i)+','+Y(p.w)).join(' ')}"/>${w.map((p,i)=>`<circle cx="${X(i)}" cy="${Y(p.w)}" r="4" fill="var(--a)"/>`).join('')}</svg><div class="mu" style="font-size:12px">Shaded band = 65–70 kg target</div>`}
return`<div class="card"><div class="row sp"><div><div class="mu">Current</div><b style="font-size:32px">${last?last.w:'—'}</b> kg</div><div style="text-align:right"><div class="mu">Target</div><b style="font-size:22px">65–70</b> kg</div></div>${ch}</div><div class="card"><h2>Log today's weight</h2><div class="row"><input type="number" id="wi" inputmode="decimal" step="0.1" placeholder="60.0" style="flex:1"><button class="pill" data-a="svw">Save weight</button></div></div>`}
function sett(){const n=S.n,P='Notification' in window?Notification.permission:'unsupported',std=matchMedia('(display-mode: standalone)').matches||navigator.standalone;
const nr=(l,k)=>`<div class="f row sp" style="border-top:1px solid var(--bd);padding:8px 0"><span>${l}</span>${sw(k,n[k])}</div>`;
return`<div class="card"><h2>Meal plan</h2>${[...S.meals].sort((a,b)=>a.t-b.t).map(m=>`<button class="it" data-a="em" data-i="${S.meals.indexOf(m)}"><span class="nm"><b>${esc(m.name)}</b><div class="mu" style="font-size:13px">${fm(m.t)} · ${m.items.length} foods</div></span><span class="q">Edit</span></button>`).join('')}<button class="btn alt" data-a="nm">+ New meal</button></div>
<div class="card"><h2>Notifications</h2><div class="mu" style="margin-bottom:6px">Permission: <b>${P}</b>${std?'':'. On iPhone, add the app to your Home Screen first (iOS 16.4+).'}</div><div class="f row sp" style="border-top:1px solid var(--bd);padding:8px 0"><span><b>Enable notifications</b></span>${sw('on',n.on)}</div>${nr('Meal reminders','meal')}<label class="f"><span>Remind before meal (min)</span><input type="number" data-nk="lead" value="${n.lead}"></label>${nr('Supplement reminders','sup')}${nr('Water reminders','water')}<label class="f"><span>Water every (hours)</span><input type="number" data-nk="wi" value="${n.wi}"></label>${nr('End-of-day dashboard check','eod')}<label class="f"><span>Check time</span><input type="time" data-nk="et" value="${tv(n.et)}"></label>${nr('Nutrient over/low alerts','alert')}<button class="btn alt" data-a="test">Send test notification</button><p class="mu" style="font-size:12px">Reminders fire while the app is open or recently in the background. Reminders on a locked phone need a push server (not included).</p></div>
<div class="card"><h2>Daily targets and limits</h2><div class="row sp mu" style="font-size:12px"><span></span><span style="width:104px;text-align:right">Target</span><span style="width:104px;text-align:right">Alert above</span></div>${NU.map((u,i)=>`<div class="f row sp" style="border-top:1px solid var(--bd);padding:6px 0"><span style="flex:1">${u[0]} <span class="mu">${u[1]}</span></span><input type="number" style="width:96px" data-tg="${i}" data-w="t" value="${S.tg[i].t}"><input type="number" style="width:96px;margin-left:8px" data-tg="${i}" data-w="mx" value="${S.tg[i].mx}"></div>`).join('')}<label class="f"><span>Water target (ml)</span><input type="number" data-wt="1" value="${S.water}"></label></div>
<div class="card"><h2>Data</h2><button class="btn alt" data-a="exp">Export backup</button><button class="btn alt" data-a="imp">Import backup</button><button class="btn alt" data-a="rst">Reset today</button><button class="btn dng" data-a="clr">Delete all data</button></div><p class="mu" style="text-align:center">Data is stored on this device only.</p>`}
const cur=()=>sh.t=='meal'?S.meals[sh.i]:sh.t=='item'?S.meals[sh.i].items[sh.j]:S.sp.find(s=>s.id==sh.id);
function shr(){const e=$('#sh');if(!sh){e.innerHTML='';return}const o=cur();let h='';
if(sh.t=='meal')h=`<div class="row sp"><h2>Edit meal</h2><button class="pill" data-a="cls">Done</button></div>${fld('Name','name',o.name)}${fld('Time','t',o.t,'time')}<h2 style="margin-top:16px">Foods</h2>${o.items.map((x,j)=>`<button class="it" data-a="ei" data-j="${j}"><span class="nm">${esc(x.name)}</span><span class="q">${esc(x.q)}${x.s!=1?' ×'+x.s:''}</span></button>`).join('')}<button class="btn alt" data-a="ai">+ Add food</button><button class="btn dng" data-a="dm">Delete meal</button>`;
else if(sh.t=='item')h=`<div class="row sp"><h2>Edit food</h2><button class="pill" data-a="back">Back</button></div>${fld('Name','name',o.name)}${fld('Quantity label','q',o.q)}${fld('Servings ×','s',o.s,'num')}<p class="mu" style="font-size:13px">Nutrients for one serving as labelled. Servings × scales them.</p><div class="g2">${NU.map((u,i)=>`<label>${u[0]} (${u[1]})<input data-f="n${i}" data-ty="num" type="number" inputmode="decimal" step="any" value="${o.n[i]}"></label>`).join('')}</div><button class="btn dng" data-a="di">Remove food</button>`;
else h=`<div class="row sp"><h2>Edit supplement</h2><button class="pill" data-a="cls">Done</button></div>${fld('Name','name',o.name)}${fld('Dose','dose',o.dose)}${fld('Time (blank = none)','t',o.t,'time')}${fld('Note','note',o.note)}<button class="btn dng" data-a="ds">Delete supplement</button>`;
e.innerHTML=`<div class="bk" data-a="cls"></div><div class="sheet">${h}</div>`}
const V={home,meals,supps,prog,settings:sett},N=[['home','Summary','heart'],['meals','Meals','meal'],['supps','Supps','pill'],['prog','Progress','chart']],TT={home:'Summary',meals:'Meals',supps:'Supplements',prog:'Progress',settings:'Settings'};
function render(){const n=new Date(),h=n.getHours();$('#dt').textContent=n.toLocaleDateString(undefined,{weekday:'long',day:'numeric',month:'long'});$('#hi').textContent=TT[tab];$('#gear').innerHTML=ic('gear');$('#v').innerHTML=V[tab]();$('#nav').innerHTML=N.map(([k,l,i])=>`<button data-v="${k}" class="${tab==k?'act':''}">${ic(i)}${l}</button>`).join('')}
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)};
async function perm(){if(!('Notification' in window)){toast('Notifications not supported here');return false}return Notification.permission=='granted'||(await Notification.requestPermission())=='granted'}
async function notify(t,b,tag){toast(t+': '+b);if(!('Notification' in window)||Notification.permission!='granted')return;try{const r=await navigator.serviceWorker.ready;r.showNotification(t,{body:b,icon:'icon-192.png',badge:'icon-192.png',tag})}catch(e){new Notification(t,{body:b,icon:'icon-192.png'})}}
function chk(){const n=S.n;if(!n.on||!('Notification' in window)||Notification.permission!='granted')return;const d=D(),now=nowM(),f=S.fired[dk()]||(S.fired={[dk()]:{}})[dk()];
const go=(k,at,t,b)=>{if(!f[k]&&now>=at&&now<at+45){f[k]=1;notify(t,b,k)}};
if(n.meal)S.meals.forEach(m=>{if(m.items.length&&mdone(m)<m.items.length)go('m'+m.id,m.t-n.lead,m.name,(n.lead?`Starts at ${fm(m.t)}. `:'')+'Time to eat.')});
if(n.sup)S.sp.forEach(s=>{if(s.t&&!d.s[s.id])go('s'+s.id,s.t,s.name,s.dose||'Time for your supplement')});
if(n.water)for(let t=540;t<=1260;t+=Math.max(n.wi,.5)*60)if(d.water<S.water*(t-540)/720)go('w'+t,t,'Drink water',`${d.water} of ${S.water} ml so far`);
const t=tot();
if(n.eod)go('eod',n.et,'Check your dashboard',`${Math.round(t[0])} kcal, ${Math.round(t[1])} g protein today`);
if(n.alert)t.forEach((v,i)=>{const g=S.tg[i];if(v>g.mx&&!f['o'+i]){f['o'+i]=1;notify(NU[i][0]+' over limit',`${fv(v)} of ${g.mx} ${NU[i][1]}`,'o'+i)}else if(v<g.t*.8)go('l'+i,n.et,NU[i][0]+' is low',`${fv(v)} of ${g.t} ${NU[i][1]} so far`)});save()}
document.addEventListener('click',e=>{const v=e.target.closest('[data-v]');if(v){tab=v.dataset.v;sh=null;render();shr();scrollTo(0,0);return}
const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a,d=D(),i=+b.dataset.i,id=b.dataset.id;
if(a=='acc'||a=='open'){if(a=='open'){opn=new Set([id]);tab='meals'}else opn.has(id)?opn.delete(id):opn.add(id)}
else if(a=='tog')d.x[id]=!d.x[id];
else if(a=='all'){const m=S.meals[i],f=mdone(m)<m.items.length;m.items.forEach(x=>d.x[x.id]=f)}
else if(a=='sup')d.s[id]=!d.s[id];
else if(a=='wat')d.water=Math.max(0,d.water+ +b.dataset.n);
else if(a=='svw'){const x=parseFloat($('#wi').value);if(!(x>20&&x<300))return toast('Enter a valid weight');S.w=S.w.filter(r=>r.d!=dk());S.w.push({d:dk(),w:x});toast('Weight saved')}
else if(a=='em')sh={t:'meal',i};
else if(a=='nm'){S.meals.push({id:uid(),name:'New meal',t:720,items:[]});sh={t:'meal',i:S.meals.length-1}}
else if(a=='ei')sh={t:'item',i:sh.i,j:+b.dataset.j};
else if(a=='ai'){const it=S.meals[sh.i].items;it.push({id:uid(),name:'New food',q:'1 serving',s:1,n:Array(10).fill(0)});sh={t:'item',i:sh.i,j:it.length-1}}
else if(a=='back')sh={t:'meal',i:sh.i};
else if(a=='di'){if(!confirm('Remove this food?'))return;S.meals[sh.i].items.splice(sh.j,1);sh={t:'meal',i:sh.i}}
else if(a=='dm'){if(!confirm('Delete this meal?'))return;S.meals.splice(sh.i,1);sh=null}
else if(a=='as'){const s={id:uid(),name:'New supplement',dose:'',t:0,note:''};S.sp.push(s);sh={t:'sup',id:s.id}}
else if(a=='es')sh={t:'sup',id};
else if(a=='ds'){if(!confirm('Delete this supplement?'))return;S.sp=S.sp.filter(s=>s.id!=sh.id);sh=null}
else if(a=='cls')sh=null;
else if(a=='test'){perm().then(ok=>{if(ok)notify('Personal Tracking','Notifications are working.','test');render()});return}
else if(a=='exp'){const u=URL.createObjectURL(new Blob([JSON.stringify(S)],{type:'application/json'})),l=document.createElement('a');l.href=u;l.download='personal-tracking-'+dk()+'.json';l.click();return}
else if(a=='imp'){$('#imp').click();return}
else if(a=='rst'){if(confirm("Reset today's tracking?"))delete S.days[dk()]}
else if(a=='clr'){if(confirm('Delete ALL data? This cannot be undone.')){S={};localStorage.removeItem(K);location.reload();return}}
save();render();shr();chk()});
document.addEventListener('change',async e=>{const t=e.target,ds=t.dataset;
if(t.closest('#sh')&&ds.f){const o=cur(),y=ds.ty;let v=y=='num'?parseFloat(t.value)||0:y=='time'?(t.value?+t.value.slice(0,2)*60+ +t.value.slice(3):0):t.value;if(/^n\d$/.test(ds.f))o.n[+ds.f[1]]=v;else o[ds.f]=v;if(ds.f=='s'&&!v)o.s=1}
else if(ds.nk){const k=ds.nk;S.n[k]=t.type=='checkbox'?t.checked:t.type=='time'?(+t.value.slice(0,2)*60+ +t.value.slice(3)):parseFloat(t.value)||0;if(k=='on'&&t.checked&&!(await perm())){S.n.on=false;toast('Permission not granted')}}
else if(ds.tg){const x=parseFloat(t.value);if(x>0)S.tg[+ds.tg][ds.w]=x}
else if(ds.wt){const x=parseFloat(t.value);if(x>0)S.water=x}
else return;save();render();toast('Saved')});
$('#imp').addEventListener('change',e=>{const f=e.target.files[0];if(!f)return;f.text().then(t=>{try{const j=JSON.parse(t);if(!j.days||!j.meals)throw 0;S=j;save();location.reload()}catch(x){toast('Invalid backup file')}})});
render();setInterval(chk,30000);document.addEventListener('visibilitychange',()=>{if(!document.hidden){render();chk()}});
if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js'));
