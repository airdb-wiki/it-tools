import{d as r,a9 as l,$ as u,i as _,o as f,k as d,w as m,b as C,t as x,g as o,bp as y}from"./index-a65f26d9.js";const b="Copy to clipboard",T=r({__name:"SpanCopyable",props:{value:{default:""}},setup(s){const a=s,{value:t}=l(a),{copy:n,isJustCopied:p}=u({source:t,createToast:!1}),c=_(()=>p.value?"Copied!":b);return(k,e)=>{const i=y;return f(),d(i,{tooltip:o(c)},{default:m(()=>[C("span",{"cursor-pointer":"","font-mono":"",onClick:e[0]||(e[0]=v=>o(n)())},x(o(t)),1)]),_:1},8,["tooltip"])}}});export{T as _};
