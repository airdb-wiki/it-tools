import{m as f,d as y,A as x,i as _,c as l,f as d,g as p,a1 as k,w as g,b as i,a2 as w,a0 as b,e as U,o as h,t as m,F as I,j as L}from"./index-a65f26d9.js";function C(t){const[s,e]=t.toString().split("e"),n=Number.parseFloat(s),o=n%1===0?n.toLocaleString():n.toFixed(2);return e?`${o}e${e}`:o}function F({seconds:t}){if(t<=.001)return"Instantly";if(t<=1)return"Less than a second";const s=[{unit:"millenium",secondsInUnit:31536e6,format:C,plural:"millennia"},{unit:"century",secondsInUnit:31536e5,plural:"centuries"},{unit:"decade",secondsInUnit:31536e4,plural:"decades"},{unit:"year",secondsInUnit:31536e3,plural:"years"},{unit:"month",secondsInUnit:2592e3,plural:"months"},{unit:"week",secondsInUnit:604800,plural:"weeks"},{unit:"day",secondsInUnit:86400,plural:"days"},{unit:"hour",secondsInUnit:3600,plural:"hours"},{unit:"minute",secondsInUnit:60,plural:"minutes"},{unit:"second",secondsInUnit:1,plural:"seconds"}];return f.chain(s).map(({unit:e,secondsInUnit:n,plural:o,format:a=f.identity})=>{const r=Math.floor(t/n);return t%=n,r<=0?void 0:`${a(r)} ${r>1?o:e}`}).compact().take(2).join(", ").value()}function N({password:t,guessesPerSecond:s=1e9}){const e=D({password:t}),n=t.length,o=t===""?0:Math.log2(e)*n,a=2**o/s,r=F({seconds:a}),c=Math.min(o/128,1);return{entropy:o,charsetLength:e,passwordLength:n,crackDurationFormatted:r,secondsToCrack:a,score:c}}function D({password:t}){const s=/[a-z]/.test(t),e=/[A-Z]/.test(t),n=/\d/.test(t),o=/\W|_/.test(t);let a=0;return s&&(a+=26),e&&(a+=26),n&&(a+=10),o&&(a+=32),a}const E={flex:"","flex-col":"","gap-3":""},M=i("div",{"op-60":""}," Duration to crack this password with brute force ",-1),S={"text-2xl":"","data-test-id":"crack-duration"},T={"flex-1":"","text-right":"","op-60":""},$={"flex-1":"","text-left":""},B=i("div",{"op-70":""},[i("span",{"font-bold":""},"Note: "),U(" The computed strength is based on the time it would take to crack the password using a brute force approach, it does not take into account the possibility of a dictionary attack. ")],-1),V=y({__name:"password-strength-analyser",setup(t){const s=x(""),e=_(()=>N({password:s.value})),n=_(()=>[{label:"Password length:",value:e.value.passwordLength},{label:"Entropy:",value:Math.round(e.value.entropy*100)/100},{label:"Character set size:",value:e.value.charsetLength},{label:"Score:",value:`${Math.round(e.value.score*100)} / 100`}]);return(o,a)=>{const r=w,c=b;return h(),l("div",E,[d(r,{value:p(s),"onUpdate:value":a[0]||(a[0]=u=>k(s)?s.value=u:null),type:"password",placeholder:"Enter a password...",clearable:"",autofocus:"","raw-text":"","test-id":"password-input"},null,8,["value"]),d(c,{"text-center":""},{default:g(()=>[M,i("div",S,m(p(e).crackDurationFormatted),1)]),_:1}),d(c,null,{default:g(()=>[(h(!0),l(I,null,L(p(n),({label:u,value:v})=>(h(),l("div",{key:u,flex:"","gap-3":""},[i("div",T,m(u),1),i("div",$,m(v),1)]))),128))]),_:1}),B])}}});export{V as default};
