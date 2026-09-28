(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}})();/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=([e,t,o])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(r=>{n.setAttribute(r,String(t[r]))}),o!=null&&o.length&&o.forEach(r=>{const c=x(r);n.appendChild(c)}),n},N=(e,t={})=>{const n={...C,...t};return x(["svg",n,e])};/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=(...e)=>e.filter((t,o,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===o).join(" ").trim();/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=e=>{let t="",o=!1;for(const n of e){if(n==="-"||n==="_"||n<=" "){o=t.length>0;continue}t.length===0?t+=n.toLowerCase():t+=o?n.toUpperCase():n,o=!1}return t};/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=e=>{const t=j(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=e=>Array.from(e.attributes).reduce((t,o)=>(t[o.name]=o.value,t),{}),h=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",g=(e,{nameAttr:t,icons:o,attrs:n})=>{var m;const r=e.getAttribute(t);if(r==null)return;const c=k(r),s=o[c];if(!s)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const i=T(e),S=$(i)?{}:{"aria-hidden":"true"},f={...C,"data-lucide":r,...S,...n,...i},O=h(i),q=h(n),p=P("lucide",`lucide-${r}`,...O,...q);p&&Object.assign(f,{class:p});const I=N(s,f);return(m=e.parentNode)==null?void 0:m.replaceChild(I,e)};/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m11 13.73-4 6.93"}],["path",{d:"M12 22v-2"}],["path",{d:"M12 2v2"}],["path",{d:"M14 12h8"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["circle",{cx:"12",cy:"12",r:"2"}],["circle",{cx:"12",cy:"12",r:"8"}]];/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48"}],["path",{d:"M15 6h1v4"}],["path",{d:"m6.134 14.768.866-.5 2 3.464"}],["circle",{cx:"16",cy:"8",r:"6"}]];/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]];/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]];/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];/**
 * @license lucide v1.48.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=({icons:e={},nameAttr:t="data-lucide",attrs:o={},root:n=document,inTemplates:r}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof n>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(n.querySelectorAll(`[${t}]`)).forEach(s=>g(s,{nameAttr:t,icons:e,attrs:o})),r&&Array.from(n.querySelectorAll("template")).forEach(i=>M({icons:e,nameAttr:t,attrs:o,root:i.content,inTemplates:r})),t==="data-lucide"){const s=n.querySelectorAll("[icon-name]");s.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(s).forEach(i=>g(i,{nameAttr:"icon-name",icons:e,attrs:o})))}};M({icons:{ShieldCheck:D,Cog:R,Camera:H,Timer:G,Coins:B,Globe:F,Mail:U,Phone:W,MapPin:z,Menu:V,X:Y},attrs:{"stroke-width":1.8}});const l=document.querySelector(".navbar"),v=document.querySelector(".hero"),y=document.querySelector(".hero-bg"),w=document.querySelector(".floating-demo"),a=document.querySelector(".nav-toggle"),L=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function d(){!l||!a||(l.classList.remove("is-open"),a.setAttribute("aria-expanded","false"),a.setAttribute("aria-label","Open navigation"))}l&&a&&(a.addEventListener("click",()=>{const e=a.getAttribute("aria-expanded")==="true";l.classList.toggle("is-open",!e),a.setAttribute("aria-expanded",String(!e)),a.setAttribute("aria-label",e?"Open navigation":"Close navigation")}),document.querySelectorAll(".nav-menu a").forEach(e=>{e.addEventListener("click",d)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&d()}),window.addEventListener("resize",()=>{window.innerWidth>968&&d()}));document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{const o=document.querySelector(e.getAttribute("href"));if(!o)return;t.preventDefault();const n=o.getBoundingClientRect().top+window.scrollY-l.offsetHeight-12;window.scrollTo({top:n,behavior:L?"auto":"smooth"})})});let u=!1;window.addEventListener("scroll",()=>{u||(u=!0,requestAnimationFrame(()=>{const e=window.scrollY;l.classList.toggle("is-scrolled",e>24),!L&&v&&y&&e<v.offsetHeight&&y.style.setProperty("--hero-shift",`${e*.12}px`),u=!1}))},{passive:!0});document.querySelectorAll(".viewer-controls .view-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".viewer-controls .view-btn").forEach(t=>t.classList.remove("active")),e.classList.add("active")})});const Z=document.querySelector(".contact-form");function K(e){const t=e.get("name").trim(),o=e.get("email").trim(),n=e.get("company").trim(),r=e.get("message").trim(),c=encodeURIComponent(`Website inquiry from ${t}`),s=encodeURIComponent([`Name: ${t}`,`Email: ${o}`,`Company: ${n||"Not provided"}`,"",r].join(`
`));return`mailto:aogpspl@arhamoil.com?subject=${c}&body=${s}`}Z.addEventListener("submit",function(e){e.preventDefault(),window.location.href=K(new FormData(this))});const b=document.querySelectorAll(".section-header, .feature-card, .application-card, .stat-item, .product-viewer, .specifications, .contact-info, .contact-form");if("IntersectionObserver"in window){const e=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&(o.target.classList.add("is-visible"),e.unobserve(o.target))})},{threshold:.12,rootMargin:"0px 0px -36px 0px"});b.forEach((t,o)=>{t.classList.add("scroll-reveal"),t.style.setProperty("--reveal-delay",`${o%3*90}ms`),e.observe(t)})}else b.forEach(e=>e.classList.add("is-visible"));w&&"IntersectionObserver"in window&&new IntersectionObserver(([t])=>{w.classList.toggle("is-hidden",t.isIntersecting)},{threshold:.12}).observe(document.querySelector("#contact"));function Q(e,t,o=2e3){const r=t/(o/16);let c=0;const s=setInterval(()=>{c+=r,c>=t?(e.textContent=t,clearInterval(s)):e.textContent=Math.floor(c)},16)}const A=document.querySelector(".stats");let E=!1;const X=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&!E&&(E=!0,document.querySelectorAll(".stat-number").forEach((n,r)=>{const c=n.textContent;if(!isNaN(c)&&c!=="Zone-0"&&c!=="Zero"){const s=parseInt(c);Q(n,s,2e3+r*200)}}))})},{threshold:.3});A&&X.observe(A);
