import{S as t,i as s,s as o,a,e,t as n,d as i,c as r,b as p,f as c,g as l,j as u,k as h,v as f,n as m}from"./index.73bc19e3.js";function d(t){var s,o,d,g,v,x,j=t.post.title,b=t.post.html;return document.title=s=t.post.title,{c(){o=a(),d=e("h1"),g=n(j),v=a(),x=e("div"),this.h()},l(t){o=i(t,"\n\n"),d=r(t,"H1",{},!1);var s=p(d);g=i(s,j),s.forEach(c),v=i(t,"\n\n"),x=r(t,"DIV",{class:!0},!1),p(x).forEach(c),this.h()},h(){l(x,"class","content svelte-gnxal1")},m(t,s){u(t,o,s),u(t,d,s),h(d,g),u(t,v,s),u(t,x,s),x.innerHTML=b},p(t,o){t.post&&s!==(s=o.post.title)&&(document.title=s),t.post&&j!==(j=o.post.title)&&f(g,j),t.post&&b!==(b=o.post.html)&&(x.innerHTML=b)},i:m,o:m,d(t){t&&(c(o),c(d),c(v),c(x))}}}async function g({params:t,query:s}){const o=await this.fetch(`blog/${t.slug}.json`),a=await o.json();if(200===o.status)return{post:a};this.error(o.status,a.message)}function v(t,s,o){let{post:a}=s;return t.$set=(t=>{"post"in t&&o("post",a=t.post)}),{post:a}}export default class extends t{constructor(t){super(),s(this,t,v,d,o,["post"])}}export{g as preload};