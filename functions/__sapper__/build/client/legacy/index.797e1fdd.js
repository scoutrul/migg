import{_ as l,a as e,b as r,c,i as n,s as a,d as t,S as o,e as s,t as $,f,g as i,h as g,j as m,k as u,l as v,H as h,o as b,p,z as d,n as w,r as E,w as C,x as S,y as _,B as y,C as I}from"./index.8cfbbb07.js";function k(l){var e,r,c,n,a,t;return{c:function(){e=s("div"),r=s("div"),c=$(l.label),n=f(),a=s("div"),t=$(l.score),this.h()},l:function(o){e=i(o,"DIV",{class:!0,style:!0},!1);var s=g(e);r=i(s,"DIV",{class:!0},!1);var $=g(r);c=m($,l.label),$.forEach(u),n=m(s,"\n    "),a=i(s,"DIV",{class:!0},!1);var f=g(a);t=m(f,l.score),f.forEach(u),s.forEach(u),this.h()},h:function(){v(r,"class","cell__label svelte-1bircw5"),v(a,"class","cell__score svelte-1bircw5"),v(e,"class","cell__container svelte-1bircw5"),h(e,"background-color",l.color)},m:function(l,o){b(l,e,o),p(e,r),p(r,c),p(e,n),p(e,a),p(a,t)},p:function(l,r){l.label&&d(c,r.label),l.score&&d(t,r.score),l.color&&h(e,"background-color",r.color)},i:w,o:w,d:function(l){l&&u(e)}}}function B(l,e,r){var c=e.label,n=void 0===c?"label":c,a=e.score,t=void 0===a?"0":a,o=e.color,s=void 0===o?"grey":o;return l.$set=function(l){"label"in l&&r("label",n=l.label),"score"in l&&r("score",t=l.score),"color"in l&&r("color",s=l.color)},{label:n,score:t,color:s}}var D=function(s){function $(l){var o;return e(this,$),o=r(this,c($).call(this)),n(t(o),l,B,k,a,["label","score","color"]),o}return l($,o),$}();function V(l){var e,r,c,n,a,t=new D({props:{label:l.label1,score:l.score1,color:l.findColorByScore(l.score1,l.score2)}}),o=new D({props:{label:l.label2,score:l.score2,color:l.findColorByScore(l.score2,l.score1)}});return{c:function(){e=s("div"),r=s("div"),t.$$.fragment.c(),c=f(),n=s("div"),o.$$.fragment.c(),this.h()},l:function(l){e=i(l,"DIV",{class:!0},!1);var a=g(e);r=i(a,"DIV",{class:!0},!1);var s=g(r);t.$$.fragment.l(s),s.forEach(u),c=m(a,"\n    "),n=i(a,"DIV",{class:!0},!1);var $=g(n);o.$$.fragment.l($),$.forEach(u),a.forEach(u),this.h()},h:function(){v(r,"class","cellcell__cell svelte-1cpf8p3"),v(n,"class","cellcell__cell svelte-1cpf8p3"),v(e,"class","cellcell__container svelte-1cpf8p3")},m:function(l,s){b(l,e,s),p(e,r),E(t,r,null),p(e,c),p(e,n),E(o,n,null),a=!0},p:function(l,e){var r={};l.label1&&(r.label=e.label1),l.score1&&(r.score=e.score1),(l.findColorByScore||l.score1||l.score2)&&(r.color=e.findColorByScore(e.score1,e.score2)),t.$set(r);var c={};l.label2&&(c.label=e.label2),l.score2&&(c.score=e.score2),(l.findColorByScore||l.score2||l.score1)&&(c.color=e.findColorByScore(e.score2,e.score1)),o.$set(c)},i:function(l){a||(C(t.$$.fragment,l),C(o.$$.fragment,l),a=!0)},o:function(l){S(t.$$.fragment,l),S(o.$$.fragment,l),a=!1},d:function(l){l&&u(e),_(t),_(o)}}}function N(l,e,r){var c,n=e.label1,a=e.label2,t=e.score1,o=e.score2;return l.$set=function(l){"label1"in l&&r("label1",n=l.label1),"label2"in l&&r("label2",a=l.label2),"score1"in l&&r("score1",t=l.score1),"score2"in l&&r("score2",o=l.score2)},r("findColorByScore",c=function(l,e){return l>e?"chartreuse":l<e?"darksalmon":"lemonchiffon"}),{label1:n,label2:a,score1:t,score2:o,findColorByScore:c}}var O=function(s){function $(l){var o;return e(this,$),o=r(this,c($).call(this)),n(t(o),l,N,V,a,["label1","label2","score1","score2"]),o}return l($,o),$}();function T(l){for(var e,r,c,n,a,t,o,$,h,d,w,k,B,D,V,N,T,x,j,z,H=[l.cellcell1],q={},A=0;A<H.length;A+=1)q=y(q,H[A]);var F=new O({props:q}),G=[l.cellcell2],J={};for(A=0;A<G.length;A+=1)J=y(J,G[A]);var K=new O({props:J}),L=[l.cellcell3],M={};for(A=0;A<L.length;A+=1)M=y(M,L[A]);var P=new O({props:M}),Q=[l.cellcell1],R={};for(A=0;A<Q.length;A+=1)R=y(R,Q[A]);var U=new O({props:R}),W=[l.cellcell2],X={};for(A=0;A<W.length;A+=1)X=y(X,W[A]);var Y=new O({props:X}),Z=[l.cellcell3],ll={};for(A=0;A<Z.length;A+=1)ll=y(ll,Z[A]);var el=new O({props:ll}),rl=[l.cellcell1],cl={};for(A=0;A<rl.length;A+=1)cl=y(cl,rl[A]);var nl=new O({props:cl}),al=[l.cellcell2],tl={};for(A=0;A<al.length;A+=1)tl=y(tl,al[A]);var ol=new O({props:tl}),sl=[l.cellcell1],$l={};for(A=0;A<sl.length;A+=1)$l=y($l,sl[A]);var fl=new O({props:$l}),il=[l.cellcell2],gl={};for(A=0;A<il.length;A+=1)gl=y(gl,il[A]);var ml=new O({props:gl}),ul=[l.cellcell3],vl={};for(A=0;A<ul.length;A+=1)vl=y(vl,ul[A]);var hl=new O({props:vl}),bl=[l.cellcell1],pl={};for(A=0;A<bl.length;A+=1)pl=y(pl,bl[A]);var dl=new O({props:pl}),wl=[l.cellcell1],El={};for(A=0;A<wl.length;A+=1)El=y(El,wl[A]);var Cl=new O({props:El}),Sl=[l.cellcell2],_l={};for(A=0;A<Sl.length;A+=1)_l=y(_l,Sl[A]);var yl=new O({props:_l}),Il=[l.cellcell1],kl={};for(A=0;A<Il.length;A+=1)kl=y(kl,Il[A]);var Bl=new O({props:kl});return{c:function(){e=s("section"),r=s("section"),F.$$.fragment.c(),c=f(),K.$$.fragment.c(),n=f(),P.$$.fragment.c(),a=f(),U.$$.fragment.c(),t=f(),Y.$$.fragment.c(),o=f(),el.$$.fragment.c(),$=f(),nl.$$.fragment.c(),h=f(),ol.$$.fragment.c(),d=f(),w=s("section"),fl.$$.fragment.c(),k=f(),ml.$$.fragment.c(),B=f(),hl.$$.fragment.c(),D=f(),dl.$$.fragment.c(),V=f(),N=s("section"),Cl.$$.fragment.c(),T=f(),yl.$$.fragment.c(),x=f(),j=s("section"),Bl.$$.fragment.c(),this.h()},l:function(l){e=i(l,"SECTION",{class:!0},!1);var s=g(e);r=i(s,"SECTION",{class:!0},!1);var f=g(r);F.$$.fragment.l(f),c=m(f,"\n\t\t"),K.$$.fragment.l(f),n=m(f,"\n\t\t"),P.$$.fragment.l(f),a=m(f,"\n\t\t"),U.$$.fragment.l(f),t=m(f,"\n\t\t"),Y.$$.fragment.l(f),o=m(f,"\n\t\t"),el.$$.fragment.l(f),$=m(f,"\n\t\t"),nl.$$.fragment.l(f),h=m(f,"\n\t\t"),ol.$$.fragment.l(f),f.forEach(u),d=m(s,"\n\t"),w=i(s,"SECTION",{class:!0},!1);var v=g(w);fl.$$.fragment.l(v),k=m(v,"\n\t\t"),ml.$$.fragment.l(v),B=m(v,"\n\t\t"),hl.$$.fragment.l(v),D=m(v,"\n\t\t"),dl.$$.fragment.l(v),v.forEach(u),V=m(s,"\n\t"),N=i(s,"SECTION",{class:!0},!1);var b=g(N);Cl.$$.fragment.l(b),T=m(b,"\n\t\t"),yl.$$.fragment.l(b),b.forEach(u),x=m(s,"\n\t"),j=i(s,"SECTION",{class:!0},!1);var p=g(j);Bl.$$.fragment.l(p),p.forEach(u),s.forEach(u),this.h()},h:function(){v(r,"class","grid grid--column svelte-3awki1"),v(w,"class","grid grid--column svelte-3awki1"),v(N,"class","grid grid--column svelte-3awki1"),v(j,"class","grid grid--column svelte-3awki1"),v(e,"class","grid grid--row svelte-3awki1")},m:function(l,s){b(l,e,s),p(e,r),E(F,r,null),p(r,c),E(K,r,null),p(r,n),E(P,r,null),p(r,a),E(U,r,null),p(r,t),E(Y,r,null),p(r,o),E(el,r,null),p(r,$),E(nl,r,null),p(r,h),E(ol,r,null),p(e,d),p(e,w),E(fl,w,null),p(w,k),E(ml,w,null),p(w,B),E(hl,w,null),p(w,D),E(dl,w,null),p(e,V),p(e,N),E(Cl,N,null),p(N,T),E(yl,N,null),p(e,x),p(e,j),E(Bl,j,null),z=!0},p:function(l,e){var r=l.cellcell1?I(H,[e.cellcell1]):{};F.$set(r);var c=l.cellcell2?I(G,[e.cellcell2]):{};K.$set(c);var n=l.cellcell3?I(L,[e.cellcell3]):{};P.$set(n);var a=l.cellcell1?I(Q,[e.cellcell1]):{};U.$set(a);var t=l.cellcell2?I(W,[e.cellcell2]):{};Y.$set(t);var o=l.cellcell3?I(Z,[e.cellcell3]):{};el.$set(o);var s=l.cellcell1?I(rl,[e.cellcell1]):{};nl.$set(s);var $=l.cellcell2?I(al,[e.cellcell2]):{};ol.$set($);var f=l.cellcell1?I(sl,[e.cellcell1]):{};fl.$set(f);var i=l.cellcell2?I(il,[e.cellcell2]):{};ml.$set(i);var g=l.cellcell3?I(ul,[e.cellcell3]):{};hl.$set(g);var m=l.cellcell1?I(bl,[e.cellcell1]):{};dl.$set(m);var u=l.cellcell1?I(wl,[e.cellcell1]):{};Cl.$set(u);var v=l.cellcell2?I(Sl,[e.cellcell2]):{};yl.$set(v);var h=l.cellcell1?I(Il,[e.cellcell1]):{};Bl.$set(h)},i:function(l){z||(C(F.$$.fragment,l),C(K.$$.fragment,l),C(P.$$.fragment,l),C(U.$$.fragment,l),C(Y.$$.fragment,l),C(el.$$.fragment,l),C(nl.$$.fragment,l),C(ol.$$.fragment,l),C(fl.$$.fragment,l),C(ml.$$.fragment,l),C(hl.$$.fragment,l),C(dl.$$.fragment,l),C(Cl.$$.fragment,l),C(yl.$$.fragment,l),C(Bl.$$.fragment,l),z=!0)},o:function(l){S(F.$$.fragment,l),S(K.$$.fragment,l),S(P.$$.fragment,l),S(U.$$.fragment,l),S(Y.$$.fragment,l),S(el.$$.fragment,l),S(nl.$$.fragment,l),S(ol.$$.fragment,l),S(fl.$$.fragment,l),S(ml.$$.fragment,l),S(hl.$$.fragment,l),S(dl.$$.fragment,l),S(Cl.$$.fragment,l),S(yl.$$.fragment,l),S(Bl.$$.fragment,l),z=!1},d:function(l){l&&u(e),_(F),_(K),_(P),_(U),_(Y),_(el),_(nl),_(ol),_(fl),_(ml),_(hl),_(dl),_(Cl),_(yl),_(Bl)}}}function x(l){return{cellcell1:{label1:"label1",score1:"1",label2:"label2",score2:"2"},cellcell2:{score1:"4",score2:"1"},cellcell3:{}}}export default(function(s){function $(l){var o;return e(this,$),o=r(this,c($).call(this)),n(t(o),l,x,T,a,[]),o}return l($,o),$}());
