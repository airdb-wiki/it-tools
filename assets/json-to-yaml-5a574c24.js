import{_ as n}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-e3a3ba74.js";import{d as i,k as m,o as p,am as r}from"./index-a65f26d9.js";import{J as t}from"./index-d4e515d0.js";import{i as l}from"./boolean-c7e7c785.js";import{w as u}from"./defaults-4d6daddf.js";import"./TextareaCopyable-07f62fca.js";import"./Copy-5117ae8c.js";import"./Scrollbar-84272eca.js";const S=i({__name:"json-to-yaml",setup(f){const a=o=>u(()=>r(t.parse(o)),""),e=[{validator:o=>o===""||l(()=>r(t.parse(o))),message:"Provided JSON is not valid."}];return(o,c)=>{const s=n;return p(),m(s,{"input-label":"Your JSON","input-placeholder":"Paste your JSON here...","output-label":"YAML from your JSON","output-language":"yaml","input-validation-rules":e,transformer:a})}}});export{S as default};
