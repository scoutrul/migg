import{s as e,n as t,_ as n,a as r,b as s,c as a,i as o,d as i,S as c,e as u,t as l,f,g as p,h,j as v,k as m,l as g,m as d,o as $,p as b,q as x,r as y,u as w,v as S,w as E,x as k,y as _,z as R,A as P,B as A,C as L,D as C,E as j,F as U,G as q}from"./index.8c63406d.js";import{_ as N,a as O}from"./asyncToGenerator.6a45e00d.js";function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,s=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){s=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(s)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var D=[];function H(n){var r,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,a=[];function o(t){if(e(n,t)&&(n=t,r)){for(var s=!D.length,o=0;o<a.length;o+=1){var i=a[o];i[1](),D.push(i,n)}if(s){for(var c=0;c<D.length;c+=2)D[c][0](D[c+1]);D.length=0}}}return{set:o,update:function(e){o(e(n))},subscribe:function(e){var i=[e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:t];return a.push(i),1===a.length&&(r=s(o)||t),e(n),function(){var e=a.indexOf(i);-1!==e&&a.splice(e,1),0===a.length&&(r(),r=null)}}}}var T={},B=function(){return{}};function J(e){var n,r,s,a,o,i,c,x,y,w,S,E,k,_,R,P;return{c:function(){n=u("nav"),r=u("ul"),s=u("li"),a=u("a"),o=l("home"),c=f(),x=u("li"),y=u("a"),w=l("about"),E=f(),k=u("li"),_=u("a"),R=l("blog"),this.h()},l:function(e){n=p(e,"NAV",{class:!0},!1);var t=h(n);r=p(t,"UL",{class:!0},!1);var i=h(r);s=p(i,"LI",{class:!0},!1);var u=h(s);a=p(u,"A",{class:!0,href:!0},!1);var l=h(a);o=v(l,"home"),l.forEach(m),u.forEach(m),c=v(i,"\n\t\t"),x=p(i,"LI",{class:!0},!1);var f=h(x);y=p(f,"A",{class:!0,href:!0},!1);var g=h(y);w=v(g,"about"),g.forEach(m),f.forEach(m),E=v(i,"\n\n\t\t\n\t\t"),k=p(i,"LI",{class:!0},!1);var d=h(k);_=p(d,"A",{rel:!0,class:!0,href:!0},!1);var $=h(_);R=v($,"blog"),$.forEach(m),d.forEach(m),i.forEach(m),t.forEach(m),this.h()},h:function(){g(a,"class",i=d(void 0===e.segment?"selected":"")+" svelte-11kwxiv"),g(a,"href","."),g(s,"class","svelte-11kwxiv"),g(y,"class",S=d("about"===e.segment?"selected":"")+" svelte-11kwxiv"),g(y,"href","about"),g(x,"class","svelte-11kwxiv"),g(_,"rel","prefetch"),g(_,"class",P=d("blog"===e.segment?"selected":"")+" svelte-11kwxiv"),g(_,"href","blog"),g(k,"class","svelte-11kwxiv"),g(r,"class","svelte-11kwxiv"),g(n,"class","svelte-11kwxiv")},m:function(e,t){$(e,n,t),b(n,r),b(r,s),b(s,a),b(a,o),b(r,c),b(r,x),b(x,y),b(y,w),b(r,E),b(r,k),b(k,_),b(_,R)},p:function(e,t){e.segment&&i!==(i=d(void 0===t.segment?"selected":"")+" svelte-11kwxiv")&&g(a,"class",i),e.segment&&S!==(S=d("about"===t.segment?"selected":"")+" svelte-11kwxiv")&&g(y,"class",S),e.segment&&P!==(P=d("blog"===t.segment?"selected":"")+" svelte-11kwxiv")&&g(_,"class",P)},i:t,o:t,d:function(e){e&&m(n)}}}function V(e,t,n){var r=t.segment;return e.$set=function(e){"segment"in e&&n("segment",r=e.segment)},{segment:r}}var G=function(t){function u(t){var n;return r(this,u),n=s(this,a(u).call(this)),o(i(n),t,V,J,e,["segment"]),n}return n(u,c),u}();function K(e){var t,n,r,s=new G({props:{segment:e.segment}}),a=e.$$slots.default,o=x(a,e,null);return{c:function(){s.$$.fragment.c(),t=f(),n=u("main"),o&&o.c(),this.h()},l:function(e){s.$$.fragment.l(e),t=v(e,"\n\n"),n=p(e,"MAIN",{class:!0},!1);var r=h(n);o&&o.l(r),r.forEach(m),this.h()},h:function(){g(n,"class","svelte-1uhnsl8")},m:function(e,a){y(s,e,a),$(e,t,a),$(e,n,a),o&&o.m(n,null),r=!0},p:function(e,t){var n={};e.segment&&(n.segment=t.segment),s.$set(n),o&&o.p&&e.$$scope&&o.p(w(a,t,e,null),S(a,t,null))},i:function(e){r||(E(s.$$.fragment,e),E(o,e),r=!0)},o:function(e){k(s.$$.fragment,e),k(o,e),r=!1},d:function(e){_(s,e),e&&(m(t),m(n)),o&&o.d(e)}}}function z(e,t,n){var r=t.segment,s=t.$$slots,a=void 0===s?{}:s,o=t.$$scope;return e.$set=function(e){"segment"in e&&n("segment",r=e.segment),"$$scope"in e&&n("$$scope",o=e.$$scope)},{segment:r,$$slots:a,$$scope:o}}var F=function(t){function u(t){var n;return r(this,u),n=s(this,a(u).call(this)),o(i(n),t,z,K,e,["segment"]),n}return n(u,c),u}();function M(e){var t,n,r=e.error.stack;return{c:function(){t=u("pre"),n=l(r)},l:function(e){t=p(e,"PRE",{},!1);var s=h(t);n=v(s,r),s.forEach(m)},m:function(e,r){$(e,t,r),b(t,n)},p:function(e,t){e.error&&r!==(r=t.error.stack)&&R(n,r)},d:function(e){e&&m(t)}}}function W(e){var n,r,s,a,o,i,c,d,x,y=e.error.message;document.title=n=e.status;var w=e.dev&&e.error.stack&&M(e);return{c:function(){r=f(),s=u("h1"),a=l(e.status),o=f(),i=u("p"),c=l(y),d=f(),w&&w.c(),x=P(),this.h()},l:function(t){r=v(t,"\n\n"),s=p(t,"H1",{class:!0},!1);var n=h(s);a=v(n,e.status),n.forEach(m),o=v(t,"\n\n"),i=p(t,"P",{class:!0},!1);var u=h(i);c=v(u,y),u.forEach(m),d=v(t,"\n\n"),w&&w.l(t),x=P(),this.h()},h:function(){g(s,"class","svelte-8od9u6"),g(i,"class","svelte-8od9u6")},m:function(e,t){$(e,r,t),$(e,s,t),b(s,a),$(e,o,t),$(e,i,t),b(i,c),$(e,d,t),w&&w.m(e,t),$(e,x,t)},p:function(e,t){e.status&&n!==(n=t.status)&&(document.title=n),e.status&&R(a,t.status),e.error&&y!==(y=t.error.message)&&R(c,y),t.dev&&t.error.stack?w?w.p(e,t):((w=M(t)).c(),w.m(x.parentNode,x)):w&&(w.d(1),w=null)},i:t,o:t,d:function(e){e&&(m(r),m(s),m(o),m(i),m(d)),w&&w.d(e),e&&m(x)}}}function X(e,t,n){var r=t.status,s=t.error;return e.$set=function(e){"status"in e&&n("status",r=e.status),"error"in e&&n("error",s=e.error)},{status:r,error:s,dev:!1}}var Y=function(t){function u(t){var n;return r(this,u),n=s(this,a(u).call(this)),o(i(n),t,X,W,e,["status","error"]),n}return n(u,c),u}();function Q(e){var t,n,r=[e.level1.props],s=e.level1.component;function a(e){for(var t={},n=0;n<r.length;n+=1)t=A(t,r[n]);return{props:t}}if(s)var o=new s(a());return{c:function(){o&&o.$$.fragment.c(),t=P()},l:function(e){o&&o.$$.fragment.l(e),t=P()},m:function(e,r){o&&y(o,e,r),$(e,t,r),n=!0},p:function(e,n){var i=e.level1?L(r,[n.level1.props]):{};if(s!==(s=n.level1.component)){if(o){j();var c=o;k(c.$$.fragment,1,0,function(){_(c,1)}),U()}s?((o=new s(a())).$$.fragment.c(),E(o.$$.fragment,1),y(o,t.parentNode,t)):o=null}else s&&o.$set(i)},i:function(e){n||(o&&E(o.$$.fragment,e),n=!0)},o:function(e){o&&k(o.$$.fragment,e),n=!1},d:function(e){e&&m(t),o&&_(o,e)}}}function Z(e){var t,n=new Y({props:{error:e.error,status:e.status}});return{c:function(){n.$$.fragment.c()},l:function(e){n.$$.fragment.l(e)},m:function(e,r){y(n,e,r),t=!0},p:function(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),n.$set(r)},i:function(e){t||(E(n.$$.fragment,e),t=!0)},o:function(e){k(n.$$.fragment,e),t=!1},d:function(e){_(n,e)}}}function ee(e){var t,n,r,s,a=[Z,Q],o=[];function i(e){return e.error?0:1}return t=i(e),n=o[t]=a[t](e),{c:function(){n.c(),r=P()},l:function(e){n.l(e),r=P()},m:function(e,n){o[t].m(e,n),$(e,r,n),s=!0},p:function(e,s){var c=t;(t=i(s))===c?o[t].p(e,s):(j(),k(o[c],1,1,function(){o[c]=null}),U(),(n=o[t])||(n=o[t]=a[t](s)).c(),E(n,1),n.m(r.parentNode,r))},i:function(e){s||(E(n),s=!0)},o:function(e){k(n),s=!1},d:function(e){o[t].d(e),e&&m(r)}}}function te(e){for(var t,n=[{segment:e.segments[0]},e.level0.props],r={$$slots:{default:[ee]},$$scope:{ctx:e}},s=0;s<n.length;s+=1)r=A(r,n[s]);var a=new F({props:r});return{c:function(){a.$$.fragment.c()},l:function(e){a.$$.fragment.l(e)},m:function(e,n){y(a,e,n),t=!0},p:function(e,t){var r=e.segments||e.level0?L(n,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(r.$$scope={changed:e,ctx:t}),a.$set(r)},i:function(e){t||(E(a.$$.fragment,e),t=!0)},o:function(e){k(a.$$.fragment,e),t=!1},d:function(e){_(a,e)}}}function ne(e,t,n){var r=t.stores,s=t.error,a=t.status,o=t.segments,i=t.level0,c=t.level1,u=void 0===c?null:c;return C(T,r),e.$set=function(e){"stores"in e&&n("stores",r=e.stores),"error"in e&&n("error",s=e.error),"status"in e&&n("status",a=e.status),"segments"in e&&n("segments",o=e.segments),"level0"in e&&n("level0",i=e.level0),"level1"in e&&n("level1",u=e.level1)},{stores:r,error:s,status:a,segments:o,level0:i,level1:u}}var re,se=function(t){function u(t){var n;return r(this,u),n=s(this,a(u).call(this)),o(i(n),t,ne,te,e,["stores","error","status","segments","level0","level1"]),n}return n(u,c),u}(),ae=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],oe=[{js:function(){return import("./index.fbccbef5.js")},css:["legacy/index.fbccbef5.css"]},{js:function(){return import("./about.7a372115.js")},css:[]},{js:function(){return import("./index.5bc1c224.js")},css:["legacy/index.5bc1c224.css"]},{js:function(){return import("./[slug].850072da.js")},css:["legacy/[slug].850072da.css"]}],ie=(re=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:function(e){return{slug:re(e[1])}}}]}]);function ce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},n=Re(new URL(e,document.baseURI));return n?(Ee[t.replaceState?"replaceState":"pushState"]({id:ye},"",e),Ae(n,null).then(function(){})):(location.href=e,new Promise(function(e){}))}var ue,le,fe,pe,he,ve="undefined"!=typeof __SAPPER__&&__SAPPER__,me=!1,ge=[],de="{}",$e={page:H({}),preloading:H(null),session:H(ve&&ve.session)};$e.session.subscribe(function(){var e=N(O.mark(function e(t){var n,r,s,a,o,i;return O.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(pe=t,me){e.next=3;break}return e.abrupt("return");case 3:return he=!0,n=Re(new URL(location.href)),r=le={},e.next=8,qe(n);case 8:if(s=e.sent,a=s.redirect,o=s.props,i=s.branch,r===le){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,Ce(a,i,o,n.page);case 16:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());var be,xe=null;var ye,we=1;var Se,Ee="undefined"!=typeof history?history:{pushState:function(e,t,n){},replaceState:function(e,t,n){},scrollRestoration:""},ke={};function _e(e){var t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(function(e){var n=I(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),r=n[1],s=n[2],a=void 0===s?"":s;"string"==typeof t[r]&&(t[r]=[t[r]]),"object"===q(t[r])?t[r].push(a):t[r]=a}),t}function Re(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ve.baseUrl))return null;var t=e.pathname.slice(ve.baseUrl.length);if(""===t&&(t="/"),!ae.some(function(e){return e.test(t)}))for(var n=0;n<ie.length;n+=1){var r=ie[n],s=r.pattern.exec(t);if(s){var a=_e(e.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},c={host:location.host,path:t,query:a,params:i};return{href:e.href,route:r,match:s,page:c}}}}function Pe(){return{x:pageXOffset,y:pageYOffset}}function Ae(e,t,n,r){return Le.apply(this,arguments)}function Le(){return(Le=N(O.mark(function e(t,n,r,s){var a,o,i,c,u,l,f,p,h;return O.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n?ye=n:(a=Pe(),ke[ye]=a,n=ye=++we,ke[ye]=r?a:{x:0,y:0}),ye=n,ue&&$e.preloading.set(!0),o=xe&&xe.href===t.href?xe.promise:qe(t),xe=null,i=le={},e.next=8,o;case 8:if(c=e.sent,u=c.redirect,l=c.props,f=c.branch,i===le){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,Ce(u,f,l,t.page);case 16:document.activeElement&&document.activeElement.blur(),r||(p=ke[n],s&&(h=document.getElementById(s.slice(1)))&&(p={x:0,y:h.getBoundingClientRect().top}),ke[ye]=p,p&&scrollTo(p.x,p.y));case 18:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Ce(e,t,n,r){return je.apply(this,arguments)}function je(){return(je=N(O.mark(function e(t,n,r,s){var a,o;return O.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",ce(t.location,{replaceState:!0}));case 2:if($e.page.set(s),$e.preloading.set(!1),!ue){e.next=8;break}ue.$set(r),e.next=17;break;case 8:return r.stores={page:{subscribe:$e.page.subscribe},preloading:{subscribe:$e.preloading.subscribe},session:$e.session},e.next=11,fe;case 11:if(e.t0=e.sent,r.level0={props:e.t0},a=document.querySelector("#sapper-head-start"),o=document.querySelector("#sapper-head-end"),a&&o){for(;a.nextSibling!==o;)De(a.nextSibling);De(a),De(o)}ue=new se({target:be,props:r,hydrate:!0});case 17:ge=n,de=JSON.stringify(s.query),me=!0,he=!1;case 21:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Ue(e,t,n,r){if(r!==de)return!0;var s=ge[e];return!!s&&(t!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0))}function qe(e){return Ne.apply(this,arguments)}function Ne(){return(Ne=N(O.mark(function e(t){var n,r,s,a,o,i,c,u,l,f,p;return O.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,s=r.path.split("/").filter(Boolean),a=null,o={error:null,status:200,segments:[s[0]]},i={fetch:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){return fetch(e,t)}),redirect:function(e,t){if(a&&(a.statusCode!==e||a.location!==t))throw new Error("Conflicting redirects");a={statusCode:e,location:t}},error:function(e,t){o.error="string"==typeof t?new Error(t):t,o.status=e}},fe||(fe=ve.preloaded[0]||B.call(i,{host:r.host,path:r.path,query:r.query,params:{}},pe)),u=1,e.prev=7,l=JSON.stringify(r.query),f=n.pattern.exec(r.path),p=!1,e.next=13,Promise.all(n.parts.map(function(){var e=N(O.mark(function e(n,a){var c,h,v,m,g,d;return O.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c=s[a],Ue(a,c,f,l)&&(p=!0),o.segments[u]=s[a+1],n){e.next=5;break}return e.abrupt("return",{segment:c});case 5:if(h=u++,he||p||!ge[a]||ge[a].part!==n.i){e.next=8;break}return e.abrupt("return",ge[a]);case 8:return p=!1,e.next=11,Ie(oe[n.i]);case 11:if(v=e.sent,m=v.default,g=v.preload,!me&&ve.preloaded[a+1]){e.next=25;break}if(!g){e.next=21;break}return e.next=18,g.call(i,{host:r.host,path:r.path,query:r.query,params:n.params?n.params(t.match):{}},pe);case 18:e.t0=e.sent,e.next=22;break;case 21:e.t0={};case 22:d=e.t0,e.next=26;break;case 25:d=ve.preloaded[a+1];case 26:return e.abrupt("return",o["level".concat(h)]={component:m,props:d,segment:c,match:f,part:n.i});case 27:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()));case 13:c=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),o.error=e.t0,o.status=500,c=[];case 21:return e.abrupt("return",{redirect:a,props:o,branch:c});case 22:case"end":return e.stop()}},e,null,[[7,16]])}))).apply(this,arguments)}function Oe(e){var t="client/".concat(e);if(!document.querySelector('link[href="'.concat(t,'"]')))return new Promise(function(e,n){var r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=function(){return e()},r.onerror=n,document.head.appendChild(r)})}function Ie(e){var t="string"==typeof e.css?[]:e.css.map(Oe);return t.unshift(e.js()),Promise.all(t).then(function(e){return e[0]})}function De(e){e.parentNode.removeChild(e)}function He(e){var t=Re(new URL(e,document.baseURI));if(t)return xe&&e===xe.href||function(e,t){xe={href:e,promise:t}}(e,qe(t)),xe.promise}function Te(e){clearTimeout(Se),Se=setTimeout(function(){Be(e)},20)}function Be(e){var t=Ve(e.target);t&&"prefetch"===t.rel&&He(t.href)}function Je(e){if(1===function(e){return null===e.which?e.button:e.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var t=Ve(e.target);if(t&&t.href){var n="object"===q(t.href)&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r!==location.href){if(!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")&&(n?!t.target.baseVal:!t.target)){var s=new URL(r);if(s.pathname!==location.pathname||s.search!==location.search){var a=Re(s);if(a)Ae(a,null,t.hasAttribute("sapper-noscroll"),s.hash),e.preventDefault(),Ee.pushState({id:ye},"",s.href)}}}else location.hash||e.preventDefault()}}}function Ve(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Ge(e){if(ke[ye]=Pe(),e.state){var t=Re(new URL(location.href));t?Ae(t,e.state.id):location.href=location.href}else(function(e){ye=e})(we=we+1),Ee.replaceState({id:ye},"",location.href)}!function(e){var t;"scrollRestoration"in Ee&&(Ee.scrollRestoration="manual"),t=e.target,be=t,addEventListener("click",Je),addEventListener("popstate",Ge),addEventListener("touchstart",Be),addEventListener("mousemove",Te),Promise.resolve().then(function(){var e=location,t=e.hash,n=e.href;Ee.replaceState({id:we},"",n);var r,s,a,o,i,c,u,l,f=new URL(location.href);if(ve.error)return r=location,s=r.host,a=r.pathname,o=r.search,i=ve.session,c=ve.preloaded,u=ve.status,l=ve.error,fe||(fe=c&&c[0]),void Ce(null,[],{error:l,status:u,session:i,level0:{props:fe},level1:{props:{status:u,error:l},component:Y},segments:c},{host:s,path:a,query:_e(o),params:{}});var p=Re(f);return p?Ae(p,we,!0,t):void 0})}({target:document.querySelector("#sapper")});