import{d as _,A as i,k as p,w as f,a0 as m,o as B,f as l,g as t,a1 as d,b as x,a2 as v}from"./index-a65f26d9.js";import{_ as g}from"./Statistic-14fc8849.js";function h(n){return new TextEncoder().encode(n).buffer.byteLength}function b(n,e=2){if(n===0)return"0 Bytes";const u=1024,o=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],a=Math.floor(Math.log(n)/Math.log(u));return`${Number.parseFloat((n/u**a).toFixed(e))} ${o[a]}`}const k={"mt-5":"",flex:""},M=_({__name:"text-statistics",setup(n){const e=i("");return(u,o)=>{const a=v,s=g,r=m;return B(),p(r,null,{default:f(()=>[l(a,{value:t(e),"onUpdate:value":o[0]||(o[0]=c=>d(e)?e.value=c:null),multiline:"",placeholder:"Your text...",rows:"5"},null,8,["value"]),x("div",k,[l(s,{label:"Character count",value:t(e).length,"flex-1":""},null,8,["value"]),l(s,{label:"Word count",value:t(e)===""?0:t(e).split(/\s+/).length,"flex-1":""},null,8,["value"]),l(s,{label:"Line count",value:t(e)===""?0:t(e).split(/\r\n|\r|\n/).length,"flex-1":""},null,8,["value"]),l(s,{label:"Byte size",value:t(b)(t(h)(t(e))),"flex-1":""},null,8,["value"])])]),_:1})}}});export{M as default};
