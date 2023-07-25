import{_,h,p as M}from"./hooks.module.7cc4e70a.js";import{u as G}from"./use-team-id.3d0ab368.js";import{a as D}from"./http.82ebf0f1.js";import{p as z}from"./page.c1a8a472.js";import{D as B}from"./index.es.ebad3893.js";import{S as F}from"./Spinner.95905af5.js";/* empty css                       */import{u as V}from"./use-outside-click.85d1a62f.js";import{u as q}from"./use-keydown.41d75069.js";import{a as C}from"./resource-progress.b09662c1.js";import{C as J}from"./close.3a539829.js";import{u as L}from"./use-toast.fb52de5d.js";import{o as e}from"./jsxRuntime.module.afbf92fe.js";import{k as S}from"./preact.module.7b19fc78.js";import{u as K}from"./index.c54070cf.js";import{b as O}from"./team.12f2469e.js";import{g as U,s as Y}from"./browser.bcc09af3.js";import{E as H}from"./external-link.a7a2cda9.js";import{u as Q}from"./use-auth.13ac07ad.js";import"./jwt.f0e0aa9c.js";import"./index.a98c85f5.js";import"./toast.1fe7142d.js";function A(d){const{resourceId:r,member:p,resourceType:o,teamId:l,onClose:c}=d,n=_(null),m=_(null),[a,i]=h(),[v,t]=h(!0),N=L();let s="https://roadmap.sh";o==="roadmap"?s+=`/${r}.json`:s+=`/best-practices/${r}.json`;async function g(f,P,k,I){const{error:T,response:$}=await D(`https://api.roadmap.sh/v1-get-member-resource-progress/${f}/${P}?resourceType=${k}&resourceId=${I}`);if(T||!$){N.error(T?.message||"Failed to get member progress");return}return i($),$}async function b(f){const k=await(await fetch(f)).json(),I=await B(k,{fontURL:"/fonts/balsamiq.woff2"});n.current?.replaceChildren(I)}q("Escape",()=>{c()}),V(m,()=>{c()}),M(()=>{!n.current||!s||!r||!o||!l||Promise.all([b(s),g(l,p._id,o,r)]).then(([f,P={}])=>{const{removed:k=[],done:I=[],learning:T=[],skipped:$=[]}=P;I.forEach(y=>C(y,"done")),T.forEach(y=>C(y,"learning")),$.forEach(y=>C(y,"skipped")),k.forEach(y=>C(y,"removed"))}).catch(f=>{console.error(f),N.error(f?.message||"Something went wrong. Please try again!")}).finally(()=>{t(!1)})},[]);const u=p.progress.find(f=>f.resourceId===r),x=u?.done||0,w=u?.learning||0,R=u?.skipped||0,j=u?.total||0,E=Math.round(x/j*100);return e("div",{class:"fixed left-0 right-0 top-0 z-50 h-full items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain bg-black/50",children:e("div",{class:"relative mx-auto h-full w-full max-w-4xl p-4 md:h-auto",children:e("div",{ref:m,class:"popup-body relative rounded-lg bg-white shadow",children:[e("div",{className:"p-4",children:[e("div",{className:"mb-5 mt-0 text-left md:mt-4 md:text-center",children:[e("h2",{className:"mb-1 text-lg font-bold md:text-2xl",children:[p.name,"'s Progress"]}),e("p",{className:"hidden text-xs text-gray-500 sm:text-sm md:block md:text-base",children:["You are looking at ",p.name,"'s progress."," ",e("a",{target:"_blank",href:`/${r}?t=${l}`,className:"text-blue-600 underline",children:"View your progress"}),"."]}),e("p",{className:"block text-gray-500 md:hidden",children:["View your progress ",e("a",{target:"_blank",href:`/${r}?t=${l}`,className:"text-blue-600 underline",children:"on the roadmap page."})]})]}),e("p",{class:"-mx-4 mb-3 flex items-center justify-start border-b border-t py-2 text-sm sm:hidden px-4",children:[e("span",{class:"mr-2.5 block rounded-sm bg-yellow-200 px-1 py-0.5 text-xs font-medium uppercase text-yellow-900",children:[e("span",{children:E}),"% Done"]}),e("span",{children:[e("span",{children:x})," of ",e("span",{children:j})," done"]})]}),e("p",{class:"-mx-4 mb-3 hidden items-center justify-center border-b border-t py-2 text-sm sm:flex",children:[e("span",{class:"mr-2.5 block rounded-sm bg-yellow-200 px-1 py-0.5 text-xs font-medium uppercase text-yellow-900",children:[e("span",{children:E}),"% Done"]}),e("span",{children:[e("span",{children:x})," completed"]}),e("span",{class:"mx-1.5 text-gray-400",children:"·"}),e("span",{children:[e("span",{"data-progress-learning":"",children:w})," in progress"]}),R>0&&e(S,{children:[e("span",{class:"mx-1.5 text-gray-400",children:"·"}),e("span",{children:[e("span",{"data-progress-skipped":"",children:R})," ","skipped"]})]}),e("span",{class:"mx-1.5 text-gray-400",children:"·"}),e("span",{children:[e("span",{"data-progress-total":"",children:j})," Total"]})]})]}),e("div",{ref:n,className:"px-4 pb-2"}),v&&e("div",{class:"flex w-full justify-center",children:e(F,{isDualRing:!1,className:"mb-4 mt-2 h-4 w-4 animate-spin fill-blue-600 text-gray-200 sm:h-8 sm:w-8"})}),e("button",{type:"button",className:"popup-close absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 sm:hidden",onClick:c,children:[e("img",{src:J,className:"h-4 w-4"}),e("span",{class:"sr-only",children:"Close modal"})]})]})})})}function W(d){const{member:r,teamId:p}=d,o=r?.progress?.sort((a,i)=>i.done-a.done),[l,c]=h(null),[n,m]=h(!1);return e(S,{children:[l&&e(A,{member:r,teamId:p,resourceId:l,resourceType:"roadmap",onClose:()=>{c(null)}}),e("div",{className:"flex h-full min-h-[270px] flex-col rounded-md border",children:[e("div",{className:"flex items-center gap-3 border-b p-3",children:[e("img",{src:r.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${r.avatar}`:"/images/default-avatar.png",alt:r.name||"",className:"h-8 w-8 rounded-full"}),e("div",{className:"inline-grid",children:[e("h3",{className:"truncate font-medium",children:r.name}),e("p",{className:"truncate text-sm text-gray-500",children:r.email})]})]}),e("div",{className:"relative flex grow flex-col space-y-2 p-3",children:[(n?o:o.slice(0,4)).map(a=>e("button",{onClick:()=>c(a.resourceId),className:"group relative overflow-hidden rounded-md border p-2 hover:border-gray-300 hover:text-black focus:outline-none",children:[e("span",{className:"relative z-10 flex items-center justify-between text-sm",children:[e("span",{className:"inline-grid",children:e("span",{className:"truncate",children:a.resourceTitle})}),e("span",{className:"text-xs text-gray-400 shrink-0 ml-1.5",children:[a.done," / ",a.total]})]}),e("span",{className:"absolute inset-0 bg-gray-100 group-hover:bg-gray-200",style:{width:`${a.done/a.total*100}%`}})]},a.resourceId)),o.length>4&&!n&&e("button",{onClick:()=>m(!0),className:"text-sm text-gray-400 underline",children:["+ ",o.length-4," more"]}),n&&e("button",{onClick:()=>m(!1),className:"text-sm text-gray-400 underline",children:"- Show less"}),o.length===0&&e("div",{className:"text-sm text-gray-500",children:"No progress"})]})]},r._id)]})}function X(d){const{members:r,resourceTitle:p,resourceId:o}=d.roadmap,{t:l}=U(),[c,n]=h(!1),[m,a]=h(null),[i,v]=h(null);return e(S,{children:[m&&e(A,{member:i,teamId:l,resourceId:m,resourceType:"roadmap",onClose:()=>{a(null),v(null)}}),e("div",{className:"flex h-full min-h-[270px] flex-col rounded-md border",children:[e("div",{className:"flex items-center gap-3 border-b p-3",children:e("div",{className:"flex min-w-0 flex-grow items-center justify-between",children:[e("h3",{className:"truncate font-medium",children:p}),e("a",{href:`/${o}?t=${l}`,className:"group mb-0.5 flex shrink-0 items-center justify-between text-base font-medium leading-none text-black",target:"_blank",children:e("img",{alt:"link",src:H,className:"ml-2 h-4 w-4 opacity-20 transition-opacity group-hover:opacity-100"})})]})}),e("div",{className:"relative flex grow flex-col space-y-2 p-3",children:[(c?r:r.slice(0,4)).map(t=>t.progress?e("button",{className:"group relative w-full overflow-hidden rounded-md border p-2 hover:border-gray-300 hover:text-black focus:outline-none",onClick:()=>{a(t?.progress?.resourceId),v(t.member)},children:[e("span",{className:"relative z-10 flex items-center justify-between gap-1 text-sm",children:[e("span",{className:"inline-grid grid-cols-[20px_auto] gap-2",children:[e("img",{src:t.member.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${t.member.avatar}`:"/images/default-avatar.png",alt:t.member.name||"",className:"h-5 w-5 shrink-0 rounded-full"}),e("span",{className:"truncate",children:t?.member?.name})]}),e("span",{className:"shrink-0 text-xs text-gray-400",children:[t?.progress?.done," / ",t?.progress?.total]})]}),e("span",{className:"absolute inset-0 bg-gray-100 group-hover:bg-gray-200",style:{width:`${t?.progress?.done/t?.progress?.total*100}%`}})]},t?.member._id):null),r.length>4&&!c&&e("button",{onClick:()=>n(!0),className:"text-sm text-gray-400 underline",children:["+ ",r.length-4," more"]}),c&&e("button",{onClick:()=>n(!1),className:"text-sm text-gray-400 underline",children:"- Show less"}),r.length===0&&e("div",{className:"text-sm text-gray-500",children:"No progress"})]})]})]})}const Z=[{label:"Members",value:"member"},{label:"Roadmaps",value:"roadmap"}];function we(){const{teamId:d}=G(),{gb:r}=U(),[p,o]=h(!0),l=L(),c=K(O),n=Q(),[m,a]=h([]),[i,v]=h(r||"member");async function t(){const{response:s,error:g}=await D(`https://api.roadmap.sh/v1-get-team-progress/${d}`);if(g||!s){l.error(g?.message||"Failed to get team progress");return}const b=s.find(w=>w.email===n?.email),u=s.filter(w=>w.email!==n?.email),x=b?[b,...u]:u;a(x)}if(M(()=>{d&&t().finally(()=>{z.set(""),o(!1)})},[d]),p)return null;if(!d){window.location.href="/";return}M(()=>{i&&Y({gb:i})},[i]);const N=[];for(const s of c?.roadmaps||[]){const g=[];for(const b of m){const u=b.progress.find(x=>x.resourceId===s);u&&g.push({member:b,progress:u})}g.length&&N.push({resourceId:s,resourceTitle:g?.[0].progress?.resourceTitle||"",resourceType:"roadmap",members:g})}return e("div",{children:[e("div",{className:"flex items-center gap-2",children:Z.map(s=>e("button",{className:`rounded-md border p-1 px-2 text-sm ${i===s.value?" border-gray-400 bg-gray-200 ":""}`,onClick:()=>v(s.value),children:s.label}))}),e("div",{className:"mt-6",children:[i==="roadmap"&&e("div",{className:"grid gap-4 sm:grid-cols-2",children:N.map(s=>e(X,{roadmap:s},s.resourceId))}),i==="member"&&e("div",{className:"grid gap-4 sm:grid-cols-2",children:m.map(s=>e(W,{teamId:d,member:s}))})]})]})}export{we as TeamProgressPage};
