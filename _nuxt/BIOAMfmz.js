import{_ as I,a as b,q as w}from"./DpKWtsdP.js";import{r as E,z as x,A,B as h,C as S,D,d as $,s as C,E as L,G as R,H as j,I as p,c as k,g as K,f as N,v as B,l as q,K as P,i as T}from"./BIGMtg16.js";import{u as V}from"./ClqhUT8Z.js";const z=/^[^-]+.*-.*[^-]+$/,F=/^[^_]+.*_.*[^_]+$/;function H(g,u={}){const l=E([]),o=()=>{l.value.splice(0,l.value.length)},m=x(o,u.chainDelay??800),r=A(),v=e=>{if(!e.key)return;const t=/^[a-z]{1}$/i.test(e.key);let a;if(l.value.push(e.key),l.value.length>=2){a=l.value.slice(-2).join("-");for(const n of d.value.filter(s=>s.chained))if(n.key===a){n.enabled&&(e.preventDefault(),n.handler(e)),o();return}}for(const n of d.value.filter(s=>!s.chained))if(e.key.toLowerCase()===n.key&&e.metaKey===n.metaKey&&e.ctrlKey===n.ctrlKey&&!(t&&e.shiftKey!==n.shiftKey)){n.enabled&&(e.preventDefault(),n.handler()),o();return}m()},_=h(()=>{var n,s,c;const e=(n=r.value)==null?void 0:n.tagName,t=(s=r.value)==null?void 0:s.contentEditable;return e==="INPUT"||e==="TEXTAREA"||t==="true"||t==="plaintext-only"?((c=r.value)==null?void 0:c.name)||!0:!1}),d=h(()=>Object.entries(S(g)).map(([e,t])=>{var c,f;if(!t)return null;let a;e.includes("-")&&e!=="-"&&!((c=e.match(z))!=null&&c.length)&&console.trace(`[Shortcut] Invalid key: "${e}"`),e.includes("_")&&e!=="_"&&!((f=e.match(F))!=null&&f.length)&&console.trace(`[Shortcut] Invalid key: "${e}"`);const n=e.includes("-")&&e!=="-";if(n)a={key:e.toLowerCase(),metaKey:!1,ctrlKey:!1,shiftKey:!1,altKey:!1};else{const i=e.toLowerCase().split("_").map(y=>y);a={key:i.filter(y=>!["meta","command","ctrl","shift","alt","option"].includes(y)).join("_"),metaKey:i.includes("meta")||i.includes("command"),ctrlKey:i.includes("ctrl"),shiftKey:i.includes("shift"),altKey:i.includes("alt")||i.includes("option")}}if(a.chained=n,typeof t=="function"?a.handler=t:typeof t=="object"&&(a={...a,handler:t.handler}),!a.handler)return console.trace("[Shortcut] Invalid value"),null;let s=!0;return t.usingInput?typeof t.usingInput=="string"&&(s=_.value===t.usingInput):s=!_.value,a.enabled=s,a}).filter(Boolean));return D("keydown",v)}const M={key:0},X=$({__name:"[...slug]",async setup(g){let u,l;const o=C(),{locale:m,localeProperties:r,t:v}=L(),_=h(()=>Array.isArray(o.params.slug)?o.params.slug:[o.params.slug]),d=h(()=>B(q(m.value,..._.value))),e=h(()=>`content_${m.value}`),{data:t}=([u,l]=R(async()=>V(d.value,async()=>await w(e.value).path(d.value).first(),"$vHqkxevve1")),u=await u,l(),u);if(!t.value)throw j({statusCode:404,statusMessage:"Page not found"});return H({meta_o:{usingInput:!0,handler:()=>{P.success(v("global.email_copied"))}}}),(a,n)=>{var f;const s=I,c=b;return p(t)?(T(),k("div",M,[K(s,{page:p(t),"is-writing":p(o).path.includes("/articles/")},null,8,["page","is-writing"]),K(c,{dir:((f=p(r))==null?void 0:f.dir)??"ltr",value:p(t)},null,8,["dir","value"])])):N("",!0)}}});export{X as default};
