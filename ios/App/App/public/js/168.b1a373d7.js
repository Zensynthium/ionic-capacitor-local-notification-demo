"use strict";(self["webpackChunknotification_testing_i5vue"]=self["webpackChunknotification_testing_i5vue"]||[]).push([[168],{3168:function(t,e,n){n.r(e),n.d(e,{startTapClick:function(){return i}});var o=n(6587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const i=t=>{let e,n,i,v,f=10*-u,p=0;const L=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),m=new WeakMap,h=()=>void 0!==e&&null!==e.parentElement,E=t=>{f=(0,o.q)(t),b(t)},w=t=>{f=(0,o.q)(t),S(t)},g=t=>{const e=(0,o.q)(t)-u;f<e&&b(t)},k=t=>{const e=(0,o.q)(t)-u;f<e&&S(t)},q=t=>{S(t)},T=()=>{clearTimeout(v),v=void 0,n&&(y(!1),n=void 0)},b=t=>{n||h()||(e=void 0,C(s(t),t))},S=t=>{C(void 0,t)},C=(t,e)=>{if(t&&t===n)return;clearTimeout(v),v=void 0;const{x:i,y:s}=(0,o.p)(e);if(n){if(m.has(n))throw new Error("internal error");n.classList.contains(c)||R(n,i,s),y(!0)}if(t){const e=m.get(t);e&&(clearTimeout(e),m.delete(t));const n=a(t)?0:d;t.classList.remove(c),v=setTimeout((()=>{R(t,i,s),v=void 0}),n)}n=t},R=(t,e,n)=>{p=Date.now(),t.classList.add(c);const o=L&&r(t);o&&o.addRipple&&(_(),i=o.addRipple(e,n))},_=()=>{void 0!==i&&(i.then((t=>t())),i=void 0)},y=t=>{_();const e=n;if(!e)return;const o=l-Date.now()+p;if(t&&o>0&&!a(e)){const t=setTimeout((()=>{e.classList.remove(c),m.delete(e)}),l);m.set(e,t)}else e.classList.remove(c)},x=document;x.addEventListener("ionScrollStart",(t=>{e=t.target,T()})),x.addEventListener("ionScrollEnd",(()=>{e=void 0})),x.addEventListener("ionGestureCaptured",T),x.addEventListener("touchstart",E,!0),x.addEventListener("touchcancel",w,!0),x.addEventListener("touchend",w,!0),x.addEventListener("mousedown",g,!0),x.addEventListener("mouseup",k,!0),x.addEventListener("contextmenu",q,!0)},s=t=>{if(!t.composedPath)return t.target.closest(".ion-activatable");{const e=t.composedPath();for(let t=0;t<e.length-2;t++){const n=e[t];if(n.classList&&n.classList.contains("ion-activatable"))return n}}},a=t=>t.classList.contains("ion-activatable-instant"),r=t=>{if(t.shadowRoot){const e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},c="ion-activated",d=200,l=200,u=2500}}]);
//# sourceMappingURL=168.b1a373d7.js.map