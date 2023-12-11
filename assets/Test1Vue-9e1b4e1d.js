import{_ as j,r as p,a as g,o as n,c as o,b as u,w as i,F as x,d as t,e as b,v as B,n as y,f as D,g as c,h as E,p as J,i as O,j as U,t as k}from"./index-1fee325f.js";const w=r=>(J("data-v-b1546f55"),r=r(),O(),r),A=w(()=>t("h1",{class:"text-center my-8"},"購物車清單",-1)),F={class:"mb-5 d-flex flex-row justify-space-between"},K={key:0},M={class:"d-flex flex-row flex-row-reverse mb-6",style:{"list-style":"none"}},$=["onUpdate:modelValue"],q={class:"ms-2 text-green-lighten-2 text-body-2"},G={key:1},H=w(()=>t("p",{class:"text-center mb-3"},"購物車清單為空",-1)),P=[H],Q={__name:"Test1Vue",setup(r){let S=0;const e=p([]);let C=JSON.parse(sessionStorage.getItem("data"))||[];e.value=C;const l=p(""),v=p(!1);function I(s){if(s==0)return"input-normal";if(s==1)return"input-error";if(s>=2)return"input-success"}function m(){if(l.value.length){if(l.value.length<2){l.value="";return}l.value.length>=2&&(e.value.push({id:S++,buyItem:l.value,done:!1}),sessionStorage.setItem("data",JSON.stringify(e.value)),l.value="")}}function d(){sessionStorage.setItem("data",JSON.stringify(e.value))}function V(){v.value=!v.value,v.value===!0?e.value.forEach(s=>{s.done=!0,d()}):e.value.forEach(s=>{s.done=!1,d()})}function L(){d()}function N(){e.value=[],sessionStorage.removeItem("data")}function z(s){e.value=e.value.filter(_=>_!==s),d()}return(s,_)=>{const f=g("v-btn"),T=g("v-card");return n(),o(x,null,[A,u(T,{"max-width":"500",class:"py-8 px-5 mx-auto"},{default:i(()=>[t("div",F,[b(t("input",{"onUpdate:modelValue":_[0]||(_[0]=a=>l.value=a),class:y(["w-100 me-3 ps-2",I(l.value.length)]),onKeyup:D(m,["enter"]),placeholder:"請輸入購物清單"},null,34),[[B,l.value,void 0,{trim:!0}]]),u(f,{size:"small",class:"mt-2",onClick:m},{default:i(()=>[c("新增")]),_:1})]),e.value.length?(n(),o("div",K,[t("ul",M,[t("li",null,[u(f,{size:"small",class:"ms-3 bg-red",onClick:N},{default:i(()=>[c("全部刪除")]),_:1})]),t("li",null,[u(f,{size:"small",class:"bg-green",onClick:V},{default:i(()=>[c("批次勾選")]),_:1})])]),t("ul",null,[(n(!0),o(x,null,E(e.value,a=>(n(),o("li",{key:a.id,class:"d-flex flex-row justify-space-between my-2"},[t("label",{class:y({"text-decoration-line-through":a.done})},[b(t("input",{type:"checkbox",id:"checkbox",class:"me-2","onUpdate:modelValue":h=>a.done=h,onChange:L},null,40,$),[[U,a.done]]),c(k(a.buyItem),1),t("span",q,k(a.done?"已完成":"未完成"),1)],2),u(f,{size:"small",class:"ms-3 bg-red-lighten-4",onClick:h=>z(a)},{default:i(()=>[c("刪除")]),_:2},1032,["onClick"])]))),128))])])):(n(),o("div",G,P))]),_:1})],64)}}},W=j(Q,[["__scopeId","data-v-b1546f55"]]);export{W as default};
