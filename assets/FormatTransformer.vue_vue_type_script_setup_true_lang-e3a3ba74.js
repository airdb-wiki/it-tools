import{T as h}from"./TextareaCopyable-07f62fca.js";import{d as x,m as y,a9 as L,A as u,i as R,c as w,f as n,g as e,a1 as F,a2 as V,b as o,t as k,F as B,o as D}from"./index-a65f26d9.js";const E={"mb-5px":""},N=x({__name:"FormatTransformer",props:{transformer:{type:Function,default:y.identity},inputValidationRules:{default:()=>[]},inputLabel:{default:"Input"},inputPlaceholder:{default:"Input..."},inputDefault:{default:""},outputLabel:{default:"Output"},outputLanguage:{default:""}},setup(p){const s=p,{transformer:i,inputValidationRules:r,inputLabel:f,outputLabel:d,outputLanguage:c,inputPlaceholder:m,inputDefault:_}=L(s),a=u(),t=u(_.value),g=R(()=>i.value(t.value));return(T,l)=>{const v=h;return D(),w(B,null,[n(V,{ref_key:"inputElement",ref:a,value:e(t),"onUpdate:value":l[0]||(l[0]=b=>F(t)?t.value=b:null),placeholder:e(m),label:e(f),rows:"20",autosize:"","raw-text":"",multiline:"","test-id":"input","validation-rules":e(r),monospace:""},null,8,["value","placeholder","label","validation-rules"]),o("div",null,[o("div",E,k(e(d)),1),n(v,{value:e(g),language:e(c),"follow-height-of":e(a)?.inputWrapperRef},null,8,["value","language","follow-height-of"])])],64)}}});export{N as _};
