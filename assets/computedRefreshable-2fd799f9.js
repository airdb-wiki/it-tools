import{A as s,bf as n,ag as l,i as r,bg as d}from"./index-a65f26d9.js";function p(a,{throttle:c}={}){const e=s(!0);let t;const u=()=>e.value=!0;return c?n(a,u,{throttle:c}):l(a,u),[r(()=>(e.value&&(t=a(),e.value=!1),t)),u]}function i(a,c){const e=s(!0);let t;const u=()=>e.value=!0;return l(a,u),[d(async()=>(e.value&&(t=await a(),e.value=!1),t),c),u]}export{i as a,p as c};
