(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function $(){}function R(e){return e()}function I(){return Object.create(null)}function q(e){e.forEach(R)}function z(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let S;function K(e,t){return S||(S=document.createElement("a")),S.href=t,e===S.href}function ee(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function G(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function j(e){return document.createTextNode(e)}function w(){return j(" ")}function te(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ne(e){return Array.from(e.childNodes)}function re(e,t){t=""+t,e.data!==t&&(e.data=t)}let B;function E(e){B=e}const y=[],T=[];let v=[];const F=[],oe=Promise.resolve();let k=!1;function se(){k||(k=!0,oe.then(J))}function M(e){v.push(e)}const N=new Set;let g=0;function J(){if(g!==0)return;const e=B;do{try{for(;g<y.length;){const t=y[g];g++,E(t),le(t.$$)}}catch(t){throw y.length=0,g=0,t}for(E(null),y.length=0,g=0;T.length;)T.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];N.has(n)||(N.add(n),n())}v.length=0}while(y.length);for(;F.length;)F.pop()();k=!1,N.clear(),E(e)}function le(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}function ie(e){const t=[],n=[];v.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),v=t}const A=new Set;let ce;function Q(e,t){e&&e.i&&(A.delete(e),e.i(t))}function ue(e,t,n,r){if(e&&e.o){if(A.has(e))return;A.add(e),ce.c.push(()=>{A.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}const fe=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...fe];function ae(e){e&&e.c()}function U(e,t,n,r){const{fragment:o,after_update:s}=e.$$;o&&o.m(t,n),r||M(()=>{const i=e.$$.on_mount.map(R).filter(z);e.$$.on_destroy?e.$$.on_destroy.push(...i):q(i),e.$$.on_mount=[]}),s.forEach(M)}function W(e,t){const n=e.$$;n.fragment!==null&&(ie(n.after_update),q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(e,t){e.$$.dirty[0]===-1&&(y.push(e),se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,r,o,s,i,f=[-1]){const d=B;E(e);const l=e.$$={fragment:null,ctx:[],props:s,update:$,not_equal:o,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:I(),dirty:f,skip_bound:!1,root:t.target||d.$$.root};i&&i(l.root);let b=!1;if(l.ctx=n?n(e,t.props||{},(a,x,...m)=>{const h=m.length?m[0]:x;return l.ctx&&o(l.ctx[a],l.ctx[a]=h)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](h),b&&de(e,a)),x}):[],l.update(),b=!0,q(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const a=ne(t.target);l.fragment&&l.fragment.l(a),a.forEach(P)}else l.fragment&&l.fragment.c();t.intro&&Q(e.$$.fragment),U(e,t.target,t.anchor,t.customElement),J()}E(d)}class Y{$destroy(){W(this,1),this.$destroy=$}$on(t,n){if(!z(n))return $;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const pe="/assets/svelte-a39f39b7.svg",he="/vite.svg";function me(e){let t,n,r,o,s;return{c(){t=p("button"),n=j("count is "),r=j(e[0])},m(i,f){G(i,t,f),c(t,n),c(t,r),o||(s=te(t,"click",e[1]),o=!0)},p(i,[f]){f&1&&re(r,i[0])},i:$,o:$,d(i){i&&P(t),o=!1,s()}}}function _e(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class ge extends Y{constructor(t){super(),X(this,t,_e,me,D,{})}}function ye(e){let t,n,r,o,s,i,f,d,l,b,a,x,m,h,V,C,H,L,O;return h=new ge({}),{c(){t=p("main"),n=p("div"),r=p("a"),o=p("img"),i=w(),f=p("a"),d=p("img"),b=w(),a=p("h1"),a.textContent="Vite + Svelte",x=w(),m=p("div"),ae(h.$$.fragment),V=w(),C=p("p"),C.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',H=w(),L=p("p"),L.textContent="MERHABA!!!",K(o.src,s=he)||u(o,"src",s),u(o,"class","logo svelte-11cv5lq"),u(o,"alt","Vite Logo"),u(r,"href","https://vitejs.dev"),u(r,"target","_blank"),u(r,"rel","noreferrer"),K(d.src,l=pe)||u(d,"src",l),u(d,"class","logo svelte svelte-11cv5lq"),u(d,"alt","Svelte Logo"),u(f,"href","https://svelte.dev"),u(f,"target","_blank"),u(f,"rel","noreferrer"),u(m,"class","card"),u(L,"class","read-the-docs svelte-11cv5lq")},m(_,Z){G(_,t,Z),c(t,n),c(n,r),c(r,o),c(n,i),c(n,f),c(f,d),c(t,b),c(t,a),c(t,x),c(t,m),U(h,m,null),c(t,V),c(t,C),c(t,H),c(t,L),O=!0},p:$,i(_){O||(Q(h.$$.fragment,_),O=!0)},o(_){ue(h.$$.fragment,_),O=!1},d(_){_&&P(t),W(h)}}}class ve extends Y{constructor(t){super(),X(this,t,null,ye,D,{})}}new ve({target:document.getElementById("app")});
