import{d as y,A as l,bS as h,c as w,f,w as s,b as m,g as c,k as g,a0 as x,n as D,o as _,t as R,e as u,a6 as $}from"./index-a65f26d9.js";function b(a){const e=a%1e3,t=(a-e)/1e3%60,n=((a-e)/1e3-t)/60%60,o=(((a-e)/1e3-t)/60-n)/60;return`${o>0?`${o.toString().padStart(2,"0")}:`:""}${n.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}.${e.toString().padStart(3,"0")}`}const C={class:"duration"},B={"mt-5":"",flex:"","justify-center":"","gap-3":""},N=y({__name:"chronometer",setup(a){const e=l(!1),t=l(0);let n=Date.now();const{pause:o,resume:i}=h(()=>{const p=Date.now()-n;n=Date.now(),t.value+=p},{immediate:!1});function S(){n=Date.now(),i(),e.value=!0}function v(){o(),e.value=!1}return(p,d)=>{const k=x,r=D;return _(),w("div",null,[f(k,null,{default:s(()=>[m("div",C,R(c(b)(c(t))),1)]),_:1}),m("div",B,[c(e)?(_(),g(r,{key:1,type:"warning",onClick:v},{default:s(()=>[u(" Stop ")]),_:1})):(_(),g(r,{key:0,type:"primary",onClick:S},{default:s(()=>[u(" Start ")]),_:1})),f(r,{onClick:d[0]||(d[0]=V=>t.value=0)},{default:s(()=>[u(" Reset ")]),_:1})])])}}});const j=$(N,[["__scopeId","data-v-3e03ad8b"]]);export{j as default};
