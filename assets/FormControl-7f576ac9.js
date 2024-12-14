import{o,c as b,a2 as w,E as c,D as F,t as y,a7 as k,a8 as E,l as r,O as p,a9 as B,p as v,a4 as V,a5 as q,z as R,aa as C,ab as D,N as M}from"./index-41d0ffd1.js";const U={__name:"FormControlIcon",props:{icon:{type:String,default:null},h:{type:String,default:null}},setup(e){return(g,a)=>(o(),b(w,{path:e.icon,w:"w-10",h:e.h,class:"absolute top-0 left-0 z-10 pointer-events-none text-gray-500 dark:text-slate-400"},null,8,["path","h"]))}},z={class:"relative"},K=["id","name"],L=["value"],N=["id","name","maxlength","placeholder","required"],A=["id","name","maxlength","inputmode","autocomplete","required","placeholder","type"],I={__name:"FormControl",props:{name:{type:String,default:null},id:{type:String,default:null},autocomplete:{type:String,default:null},maxlength:{type:String,default:null},placeholder:{type:String,default:null},inputmode:{type:String,default:null},icon:{type:String,default:null},options:{type:Array,default:null},type:{type:String,default:"text"},modelValue:{type:[String,Number,Boolean,Array,Object],default:""},required:Boolean,borderless:Boolean,transparent:Boolean,ctrlKFocus:Boolean},emits:["update:modelValue","setRef"],setup(e,{emit:g}){const a=e,s=g,u=c({get:()=>a.modelValue,set:n=>{s("update:modelValue",n)}}),m=c(()=>{const n=["px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full","dark:placeholder-gray-400",i.value==="textarea"?"h-24":"h-12",a.borderless?"border-0":"border",a.transparent?"bg-transparent":"bg-white dark:bg-slate-800"];return a.icon&&n.push("pl-10"),n}),i=c(()=>a.options?"select":a.type),S=c(()=>a.type==="textarea"?"h-full":"h-12"),f=F(),h=y(null),x=y(null),d=y(null);if(k(()=>{h.value?s("setRef",h.value):x.value?s("setRef",x.value):s("setRef",d.value)}),a.ctrlKFocus){const n=t=>{t.ctrlKey&&t.key==="k"?(t.preventDefault(),d.value.focus()):t.key==="Escape"&&d.value.blur()};k(()=>{f.isFieldFocusRegistered||(window.addEventListener("keydown",n),f.isFieldFocusRegistered=!0)}),E(()=>{window.removeEventListener("keydown",n),f.isFieldFocusRegistered=!1})}return(n,t)=>(o(),r("div",z,[i.value==="select"?p((o(),r("select",{key:0,id:e.id,"onUpdate:modelValue":t[0]||(t[0]=l=>u.value=l),name:e.name,class:v(m.value)},[(o(!0),r(V,null,q(e.options,l=>(o(),r("option",{key:l.id??l,value:l},R(l.label??l),9,L))),128))],10,K)),[[B,u.value]]):i.value==="textarea"?p((o(),r("textarea",{key:1,id:e.id,"onUpdate:modelValue":t[1]||(t[1]=l=>u.value=l),class:v(m.value),name:e.name,maxlength:e.maxlength,placeholder:e.placeholder,required:e.required},null,10,N)),[[C,u.value]]):p((o(),r("input",{key:2,id:e.id,ref_key:"inputEl",ref:d,"onUpdate:modelValue":t[2]||(t[2]=l=>u.value=l),name:e.name,maxlength:e.maxlength,inputmode:e.inputmode,autocomplete:e.autocomplete,required:e.required,placeholder:e.placeholder,type:i.value,class:v(m.value)},null,10,A)),[[D,u.value]]),e.icon?(o(),b(U,{key:3,icon:e.icon,h:S.value},null,8,["icon","h"])):M("",!0)]))}};export{I as _};