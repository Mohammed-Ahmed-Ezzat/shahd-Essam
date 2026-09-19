var Ee=(d,s)=>()=>(s||d((s={exports:{}}).exports,s),s.exports);import{a as Re,g as Me,r as u,j as e,A as oe,m as w,L as De,R as Te}from"./vendor-CYOoJq99.js";import{M as ue,S as be,W as He,T as We,F as Y,c as fe,a as Pe,P as Le,b as ye,d as L,e as se,I as je,f as X,g as ze,X as ie,L as Ie,h as Oe,i as Ge,C as ve,A as $e,j as Q,R as Ve,k as Ze,E as ae,l as Ce,m as Ne,n as ke,V as Ue,o as Z,p as _e,q as Ye,r as Ke,s as Se,t as Xe,Q as Qe,u as Fe,v as qe}from"./icons-DFhTEGkF.js";var _t=Ee((At,ee)=>{(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function i(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=i(n);fetch(n.href,l)}})();var q={},we;function Je(){if(we)return q;we=1;var d=Re();return q.createRoot=d.createRoot,q.hydrateRoot=d.hydrateRoot,q}var et=Je();const tt=Me(et);function nt({onLoaded:d}){const[s,i]=u.useState(0),[r,n]=u.useState(!1),[l,p]=u.useState(!1);return u.useEffect(()=>{let g=0;const m=setInterval(()=>{g+=Math.random()*25+10,g>=100?(g=100,i(100),clearInterval(m),setTimeout(()=>{n(!0),setTimeout(()=>{p(!0),d&&d()},400)},300)):i(Math.floor(g))},100),t=setTimeout(()=>{i(100),n(!0),setTimeout(()=>{p(!0),d&&d()},400)},2200);return()=>{clearInterval(m),clearTimeout(t)}},[d]),l?null:e.jsx("div",{className:`preloader ${r?"hidden":""}`,id:"preloader","aria-hidden":r,children:e.jsxs("div",{className:"preloader__inner",children:[e.jsx("div",{className:"preloader__logo",children:e.jsx("span",{className:"preloader__text","data-text":"shahd.ic",children:"shahd.ic"})}),e.jsx("div",{className:"preloader__bar",children:e.jsx("span",{style:{width:`${s}%`}})})]})})}function st({theme:d="light"}){const s=u.useRef(null),i=d==="dark";return u.useEffect(()=>{const r=s.current;if(!r)return;const n=r.getContext("2d");if(!n)return;let l,p=r.width=window.innerWidth,g=r.height=window.innerHeight;const m=()=>{r&&(p=r.width=window.innerWidth,g=r.height=window.innerHeight)};window.addEventListener("resize",m);let t=p/2,R=g/2,E=p/2,A=g/2;const T=o=>{E=o.clientX,A=o.clientY};window.addEventListener("mousemove",T,{passive:!0});const j=Array.from({length:i?180:80},()=>{const o=Math.random()*.8+.2;return{x:Math.random()*p,y:Math.random()*g,size:Math.random()*1.8*o+.5,vx:(Math.random()*.2+.06)*o,vy:(Math.random()*.1-.03)*o,depth:o,baseAlpha:Math.random()*.45+(i?.35:.15),alpha:Math.random(),twinkleSpeed:Math.random()*.03+.012,twinkleOffset:Math.random()*Math.PI*2,color:o>.75?"#FFFFFF":o>.45?Math.random()>.5?"#7DD3FC":"#BAE6FD":Math.random()>.5?"#FEF08A":"#C4B5FD"}}),k=[];let H=Date.now()+Math.random()*3500+1500;const S=()=>{const o=Math.random()*p*.75+p*.1,x=Math.random()*g*.35,h=Math.PI/4+(Math.random()*.2-.1),c=Math.random()*14+16,F=Math.random()*100+70;k.push({x:o,y:x,vx:Math.cos(h)*c,vy:Math.sin(h)*c,length:F,life:1,decay:Math.random()*.025+.018,color:Math.random()>.4?"#38BDF8":"#FFFFFF"})};let C=0;const z=()=>{n.clearRect(0,0,p,g),C+=1,t+=(E-t)*.04,R+=(A-R)*.04;const o=(t-p/2)*.015,x=(R-g/2)*.015;for(let h=0;h<j.length;h++){const c=j[h];c.x+=c.vx,c.y+=c.vy,c.x>p+10&&(c.x=-10),c.x<-10&&(c.x=p+10),c.y>g+10&&(c.y=-10),c.y<-10&&(c.y=g+10);const F=c.x-o*c.depth,B=c.y-x*c.depth,W=Math.max(.08,Math.min(1,c.baseAlpha+Math.sin(C*c.twinkleSpeed+c.twinkleOffset)*.38));n.fillStyle=c.color,n.globalAlpha=W,n.beginPath(),n.arc(F,B,c.size,0,Math.PI*2),n.fill(),i&&c.size>1.4&&W>.6&&(n.beginPath(),n.arc(F,B,c.size*2.4,0,Math.PI*2),n.fillStyle="rgba(56, 189, 248, 0.18)",n.fill())}if(i){Date.now()>H&&(S(),H=Date.now()+Math.random()*5e3+3e3);for(let h=k.length-1;h>=0;h--){const c=k[h];if(c.x+=c.vx,c.y+=c.vy,c.life-=c.decay,c.life<=0||c.x>p+100||c.y>g+100){k.splice(h,1);continue}const F=c.x-c.vx/18*c.length,B=c.y-c.vy/18*c.length,W=n.createLinearGradient(c.x,c.y,F,B);W.addColorStop(0,c.color),W.addColorStop(.3,`rgba(56, 189, 248, ${c.life*.85})`),W.addColorStop(1,"rgba(255, 255, 255, 0)"),n.globalAlpha=c.life,n.strokeStyle=W,n.lineWidth=2,n.beginPath(),n.moveTo(c.x,c.y),n.lineTo(F,B),n.stroke(),n.fillStyle="#FFFFFF",n.beginPath(),n.arc(c.x,c.y,2,0,Math.PI*2),n.fill()}}n.globalAlpha=1,l=requestAnimationFrame(z)};return z(),()=>{window.removeEventListener("resize",m),window.removeEventListener("mousemove",T),cancelAnimationFrame(l)}},[i]),e.jsxs("div",{className:`sky ${i?"sky--dark":"sky--light"}`,id:"sky","aria-hidden":"true",children:[e.jsx("canvas",{ref:s,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1}}),e.jsx("div",{className:"sky__glow"}),e.jsxs("div",{className:"sky__clouds-layer",children:[e.jsx("div",{className:"sky-floating-cloud sky-floating-cloud--1"}),e.jsx("div",{className:"sky-floating-cloud sky-floating-cloud--2"}),e.jsx("div",{className:"sky-floating-cloud sky-floating-cloud--3"})]}),e.jsx("div",{className:`sky-3d-backdrop ${i?"sky-3d--dark":"sky-3d--day"}`,"aria-hidden":"true",children:i?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-3d-element bg-3d-element--top-left",children:e.jsxs("div",{className:"bg-3d-cosmic-cube",children:[e.jsx("div",{className:"cube-face cube-face--front"}),e.jsx("div",{className:"cube-face cube-face--back"}),e.jsx("div",{className:"cube-face cube-face--right"}),e.jsx("div",{className:"cube-face cube-face--left"}),e.jsx("div",{className:"cube-face cube-face--top"}),e.jsx("div",{className:"cube-face cube-face--bottom"}),e.jsx("div",{className:"cube-glow-core"})]})}),e.jsx("div",{className:"bg-3d-element bg-3d-element--bottom-left",children:e.jsxs("div",{className:"bg-3d-saturn",children:[e.jsx("div",{className:"saturn-body"}),e.jsx("div",{className:"saturn-ring saturn-ring--1"}),e.jsx("div",{className:"saturn-ring saturn-ring--2"})]})}),e.jsx("div",{className:"bg-3d-element bg-3d-element--mid-left",children:e.jsxs("div",{className:"bg-3d-astral-prism",children:[e.jsx("div",{className:"prism-facet prism-facet--top"}),e.jsx("div",{className:"prism-facet prism-facet--bottom"})]})})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-3d-element bg-3d-element--top-left",children:e.jsxs("div",{className:"bg-3d-day-crystal",children:[e.jsx("div",{className:"crystal-face crystal-face--1"}),e.jsx("div",{className:"crystal-face crystal-face--2"}),e.jsx("div",{className:"crystal-face crystal-face--3"}),e.jsx("div",{className:"crystal-face crystal-face--4"}),e.jsx("div",{className:"crystal-face crystal-face--5"}),e.jsx("div",{className:"crystal-face crystal-face--6"}),e.jsx("div",{className:"crystal-core"})]})}),e.jsx("div",{className:"bg-3d-element bg-3d-element--bottom-left",children:e.jsxs("div",{className:"bg-3d-day-solar",children:[e.jsx("div",{className:"solar-body"}),e.jsx("div",{className:"solar-ring solar-ring--1"}),e.jsx("div",{className:"solar-ring solar-ring--2"}),e.jsx("div",{className:"solar-glow"})]})}),e.jsx("div",{className:"bg-3d-element bg-3d-element--mid-left",children:e.jsxs("div",{className:"bg-3d-day-gem",children:[e.jsx("div",{className:"gem-face gem-face--top"}),e.jsx("div",{className:"gem-face gem-face--bottom"}),e.jsx("div",{className:"gem-face gem-face--glow"})]})})]})})]})}function it(){const[d,s]=u.useState(0);return u.useEffect(()=>{const i=()=>{const r=window.scrollY||document.documentElement.scrollTop,n=document.documentElement.scrollHeight-document.documentElement.clientHeight;if(n>0){const l=Math.min(100,Math.max(0,r/n*100));s(l)}};return window.addEventListener("scroll",i,{passive:!0}),i(),()=>window.removeEventListener("scroll",i)},[]),e.jsx("div",{className:"scroll-progress",id:"scrollProgress",style:{width:`${d}%`}})}function at(){const[d,s]=u.useState(!1);u.useEffect(()=>{const r=()=>{s(window.scrollY>400)};return window.addEventListener("scroll",r,{passive:!0}),r(),()=>window.removeEventListener("scroll",r)},[]);const i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsx("button",{className:`back-to-top ${d?"visible":""}`,id:"backToTop","aria-label":"Back to top",onClick:i,children:e.jsx("i",{className:"fa-solid fa-arrow-up"})})}function ot({isLoaded:d,theme:s="light",onToggleTheme:i}){const[r,n]=u.useState(!1),[l,p]=u.useState("home"),[g,m]=u.useState(!1);u.useEffect(()=>{const E=()=>{m(window.scrollY>30);const A=["home","about","services","process","contact"],T=window.scrollY+180;for(let _=A.length-1;_>=0;_--){const j=document.getElementById(A[_]);if(j){const k=j.offsetTop;if(T>=k){p(A[_]);break}}}};return window.addEventListener("scroll",E,{passive:!0}),E(),()=>window.removeEventListener("scroll",E)},[]);const t=()=>n(E=>!E),R=()=>n(!1);return e.jsxs(e.Fragment,{children:[e.jsx("nav",{className:`navbar ${d?"nav-visible":""} ${g?"nav-scrolled backdrop-blur-xl":""}`,id:"navbar",children:e.jsxs("div",{className:"container nav-container",children:[e.jsxs("a",{href:"#home",className:"nav-logo group",onClick:R,children:[e.jsx("span",{className:"nav-logo__mark transition-transform group-hover:scale-105 inline-block",children:"shahd"}),e.jsx("span",{className:"nav-logo__dot",children:".ic"})]}),e.jsxs("ul",{className:`nav-links ${r?"active open":""}`,id:"navLinks",children:[["home","about","services","process","contact"].map(E=>e.jsx("li",{children:e.jsx("a",{href:`#${E}`,className:`nav-link capitalize ${l===E?"active":""}`,onClick:R,children:E==="home"?"Home":E==="about"?"About":E==="services"?"Services":E==="process"?"Process":"Contact"})},E)),e.jsx("li",{className:"nav-mobile-theme-row",children:e.jsxs("button",{type:"button",onClick:()=>{i()},className:"w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold text-xs transition-all cursor-pointer",children:[e.jsxs("span",{className:"flex items-center gap-2",children:[s==="dark"?e.jsx(ue,{className:"w-4 h-4 text-sky-400"}):e.jsx(be,{className:"w-4 h-4 text-amber-400"}),e.jsx("span",{children:s==="dark"?"Night Mode (وضع ليلي)":"Day Mode (وضع نهاري)"})]}),e.jsx("span",{className:"text-[11px] font-bold text-sky-300 bg-sky-500/20 border border-sky-500/30 px-2.5 py-1 rounded-full",children:s==="dark"?"Switch to Day ☀️":"Switch to Dark 🌙"})]})}),e.jsx("li",{className:"nav-mobile-cta",children:e.jsxs("a",{href:"https://wa.me/201092916162",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn--nav-mobile flex items-center justify-center gap-2",onClick:R,children:[e.jsx("i",{className:"bi bi-whatsapp"}),e.jsx("span",{children:"Chat on WhatsApp"})]})})]}),e.jsxs("div",{className:"nav-actions flex items-center gap-2.5",children:[e.jsx("button",{onClick:i,className:"theme-toggle-btn w-9 h-9 rounded-full flex items-center justify-center transition-all bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white shadow-sm hover:scale-105 active:scale-95 cursor-pointer",title:s==="dark"?"Switch to Day Mode":"Switch to Dark Mode","aria-label":s==="dark"?"Switch to Day Mode":"Switch to Dark Mode",children:e.jsx(oe,{mode:"wait",children:s==="dark"?e.jsx(w.div,{initial:{rotate:-90,scale:.6,opacity:0},animate:{rotate:0,scale:1,opacity:1},exit:{rotate:90,scale:.6,opacity:0},transition:{duration:.2},children:e.jsx(ue,{className:"w-4 h-4 text-sky-300"})},"moon"):e.jsx(w.div,{initial:{rotate:90,scale:.6,opacity:0},animate:{rotate:0,scale:1,opacity:1},exit:{rotate:-90,scale:.6,opacity:0},transition:{duration:.2},children:e.jsx(be,{className:"w-4 h-4 text-amber-300"})},"sun")})}),e.jsx("a",{href:"https://wa.me/201092916162",target:"_blank",rel:"noopener noreferrer",className:"nav-social hover:scale-110 active:scale-95 transition-transform","data-platform":"whatsapp","aria-label":"WhatsApp",children:e.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6-.1.49-.3 1.47-1.2 1.68-1.66.21-.46.21-.86.15-.98-.06-.13-.23-.2-.48-.32z"})})})]}),e.jsxs("button",{className:`nav-toggle ${r?"active":""}`,id:"navToggle","aria-label":"Toggle navigation menu","aria-expanded":r,onClick:t,children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})}),e.jsx("div",{className:`nav-overlay ${r?"active":""}`,id:"navOverlay","aria-hidden":!r,onClick:R})]})}function rt({onOpenFolder:d}){const s=u.useRef(null),i=u.useRef(null),r=l=>{var t;s.current&&(s.current.classList.remove("knocking"),s.current.offsetWidth,s.current.classList.add("knocking"),setTimeout(()=>{s.current&&s.current.classList.remove("knocking")},900));const p=(t=i.current)==null?void 0:t.getBoundingClientRect(),g=p?(p.left+p.width/2)/window.innerWidth:.5,m=p?(p.top+p.height/2)/window.innerHeight:.5;fe({origin:{x:g,y:m},particleCount:45,spread:80,startVelocity:30,gravity:.65,ticks:200,scalar:1.2,shapes:["star","circle"],colors:["#38BDF8","#F43F5E","#FBBF24","#34D399","#C084FC","#FFFFFF"]}),setTimeout(()=>{fe({origin:{x:g,y:m-.05},particleCount:20,spread:60,startVelocity:22,scalar:.9,shapes:["star"],colors:["#FEF08A","#FDE68A","#7DD3FC"]})},120)},n=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),r())};return e.jsx("section",{className:"hero",id:"home",children:e.jsxs("div",{className:"container hero__layout",children:[e.jsxs(w.div,{className:"hero__content",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.16,1,.3,1]},children:[e.jsxs(w.div,{className:"hero__badge",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.2,duration:.6},children:[e.jsx("span",{className:"hero__badge-dot"}),e.jsx("span",{children:"Available for Strategic Growth & Collaborations"})]}),e.jsxs(w.h1,{className:"hero__title",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3,duration:.8},children:["I craft ",e.jsx("span",{className:"gradient-text hero-highlight",children:"scroll‑stopping"})," content & viral growth."]}),e.jsxs(w.p,{className:"hero__intro",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.45,duration:.8},children:["I'm ",e.jsx("strong",{children:"Shahd Essam"})," — Freelance Social Media Specialist & Content Creator helping ambitious brands build a strong online presence through creative content, strategy development, and audience-focused communication."]}),e.jsxs(w.div,{className:"hero__tags-bar",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6,duration:.8},children:[e.jsxs("span",{className:"hero__tag-item",children:[e.jsx(He,{className:"w-4 h-4 text-sky-300 inline-block mr-1.5"})," Viral Video Scripting"]}),e.jsxs("span",{className:"hero__tag-item",children:[e.jsx(We,{className:"w-4 h-4 text-emerald-400 inline-block mr-1.5"})," Acquisition Funnels"]}),e.jsxs("span",{className:"hero__tag-item",children:[e.jsx(Y,{className:"w-4 h-4 text-amber-400 inline-block mr-1.5"})," High-Retention Hooks"]})]}),e.jsxs("div",{className:"hero__scroll",children:[e.jsx("span",{children:"Scroll to Explore"}),e.jsx("div",{className:"hero__scroll-line",children:e.jsx("span",{})})]})]}),e.jsxs("div",{className:"hero__visual",children:[e.jsx("div",{className:"hero-floating-stage",id:"heroFloatingStage",children:e.jsxs(w.div,{className:"hero-figure-wrapper cursor-pointer",id:"heroFigureWrapper",ref:i,role:"button",tabIndex:0,"aria-label":"Shahd Essam — Wait... I have an idea. (Click for Magic Stars)",onClick:r,onKeyDown:n,whileHover:{scale:1.03},whileTap:{scale:.98},children:[e.jsxs("div",{className:"hero-wood-swing",id:"heroWoodSwing",ref:s,children:[e.jsx("div",{className:"hero-figure-sheen","aria-hidden":"true"}),e.jsx("img",{src:"/shahd.ic/image/shahd_idea_nobg.png",alt:"Shahd Essam — Wait... I have an idea.",className:"hero-floating-img",id:"heroFloatingImg",loading:"eager"}),e.jsxs("div",{className:"hero-figure-sparkles","aria-hidden":"true",children:[e.jsx("span",{className:"hero-spark hero-spark--1",children:"✦"}),e.jsx("span",{className:"hero-spark hero-spark--2",children:"⭐"}),e.jsx("span",{className:"hero-spark hero-spark--3",children:"✧"}),e.jsx("span",{className:"hero-spark hero-spark--4",children:"✨"}),e.jsx("span",{className:"hero-spark hero-spark--5",children:"★"}),e.jsx("span",{className:"hero-spark hero-spark--6",children:"💫"})]})]}),e.jsx("div",{className:"hero-ground-shadow","aria-hidden":"true"})]})}),e.jsxs("div",{className:"hero-xp-folders","aria-hidden":"false",children:[e.jsxs("button",{type:"button",className:"xp-folder hero-sector-folder xp-folder--1 xp-folder--pink cursor-pointer",title:"01_Healthcare_Medical (5 Dossiers)",onClick:l=>{l.stopPropagation(),d("medical")},children:[e.jsxs("div",{className:"xp-folder__icon-box",children:[e.jsxs("svg",{className:"xp-folder__svg",viewBox:"0 0 64 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4 8C4 5.79 5.79 4 8 4H24L30 10H56C58.21 10 60 11.79 60 14V44C60 46.21 58.21 48 56 48H8C5.79 48 4 46.21 4 44V8Z",fill:"url(#xpBack1)",stroke:"#B38006",strokeWidth:"1.2"}),e.jsx("rect",{x:"10",y:"8",width:"44",height:"20",rx:"2",fill:"#FFFFFF",opacity:"0.95"}),e.jsx("line",{x1:"14",y1:"12",x2:"32",y2:"12",stroke:"#FDA4AF",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("line",{x1:"14",y1:"16",x2:"44",y2:"16",stroke:"#CBD5E1",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M2 18L6 45.5C6.3 47.5 8 49 10 49H54C56 49 57.7 47.5 58 45.5L62 18C62.3 16 60.5 14 58.5 14H5.5C3.5 14 1.7 16 2 18Z",fill:"url(#xpFront1)",stroke:"#B38006",strokeWidth:"1.2"}),e.jsx("path",{d:"M6 16.5H58",stroke:"#FFF7C2",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.9"}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"xpBack1",x1:"4",y1:"4",x2:"60",y2:"48",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#FFDF5D"}),e.jsx("stop",{offset:"0.5",stopColor:"#F5B800"}),e.jsx("stop",{offset:"1",stopColor:"#D99B00"})]}),e.jsxs("linearGradient",{id:"xpFront1",x1:"2",y1:"14",x2:"62",y2:"49",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#FFF18E"}),e.jsx("stop",{offset:"0.3",stopColor:"#FFD738"}),e.jsx("stop",{offset:"0.8",stopColor:"#F2A900"}),e.jsx("stop",{offset:"1",stopColor:"#C78200"})]})]})]}),e.jsx("span",{className:"xp-folder__mini-pill xp-folder__mini-pill--pink",children:e.jsx("i",{className:"fa-solid fa-heart-pulse"})})]}),e.jsx("span",{className:"xp-folder__text",children:"01_Medical_Sector.dir"})]}),e.jsxs("button",{type:"button",className:"xp-folder hero-sector-folder xp-folder--2 xp-folder--cyan cursor-pointer",title:"02_Commercial_Retail (3 Dossiers)",onClick:l=>{l.stopPropagation(),d("commercial")},children:[e.jsxs("div",{className:"xp-folder__icon-box",children:[e.jsxs("svg",{className:"xp-folder__svg",viewBox:"0 0 64 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4 8C4 5.79 5.79 4 8 4H24L30 10H56C58.21 10 60 11.79 60 14V44C60 46.21 58.21 48 56 48H8C5.79 48 4 46.21 4 44V8Z",fill:"url(#xpBack2)",stroke:"#B38006",strokeWidth:"1.2"}),e.jsx("rect",{x:"10",y:"8",width:"44",height:"20",rx:"2",fill:"#FFFFFF",opacity:"0.95"}),e.jsx("line",{x1:"14",y1:"12",x2:"30",y2:"12",stroke:"#7DD3FC",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("line",{x1:"14",y1:"16",x2:"42",y2:"16",stroke:"#CBD5E1",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M2 18L6 45.5C6.3 47.5 8 49 10 49H54C56 49 57.7 47.5 58 45.5L62 18C62.3 16 60.5 14 58.5 14H5.5C3.5 14 1.7 16 2 18Z",fill:"url(#xpFront2)",stroke:"#B38006",strokeWidth:"1.2"}),e.jsx("path",{d:"M6 16.5H58",stroke:"#FFF7C2",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.9"}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"xpBack2",x1:"4",y1:"4",x2:"60",y2:"48",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#FFDF5D"}),e.jsx("stop",{offset:"0.5",stopColor:"#F5B800"}),e.jsx("stop",{offset:"1",stopColor:"#D99B00"})]}),e.jsxs("linearGradient",{id:"xpFront2",x1:"2",y1:"14",x2:"62",y2:"49",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#FFF18E"}),e.jsx("stop",{offset:"0.3",stopColor:"#FFD738"}),e.jsx("stop",{offset:"0.8",stopColor:"#F2A900"}),e.jsx("stop",{offset:"1",stopColor:"#C78200"})]})]})]}),e.jsx("span",{className:"xp-folder__mini-pill xp-folder__mini-pill--cyan",children:e.jsx("i",{className:"fa-solid fa-cart-shopping"})})]}),e.jsx("span",{className:"xp-folder__text",children:"02_Commercial_Retail.dir"})]}),e.jsxs("button",{type:"button",className:"xp-folder hero-sector-folder xp-folder--3 xp-folder--gold cursor-pointer",title:"03_Food_Dining (4 Dossiers)",onClick:l=>{l.stopPropagation(),d("food")},children:[e.jsxs("div",{className:"xp-folder__icon-box",children:[e.jsxs("svg",{className:"xp-folder__svg",viewBox:"0 0 64 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4 8C4 5.79 5.79 4 8 4H24L30 10H56C58.21 10 60 11.79 60 14V44C60 46.21 58.21 48 56 48H8C5.79 48 4 46.21 4 44V8Z",fill:"url(#xpBack3)",stroke:"#B38006",strokeWidth:"1.2"}),e.jsx("rect",{x:"10",y:"8",width:"44",height:"20",rx:"2",fill:"#FFFFFF",opacity:"0.95"}),e.jsx("line",{x1:"14",y1:"12",x2:"28",y2:"12",stroke:"#FDE68A",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("line",{x1:"14",y1:"16",x2:"40",y2:"16",stroke:"#CBD5E1",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M2 18L6 45.5C6.3 47.5 8 49 10 49H54C56 49 57.7 47.5 58 45.5L62 18C62.3 16 60.5 14 58.5 14H5.5C3.5 14 1.7 16 2 18Z",fill:"url(#xpFront3)",stroke:"#B38006",strokeWidth:"1.2"}),e.jsx("path",{d:"M6 16.5H58",stroke:"#FFF7C2",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.9"}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"xpBack3",x1:"4",y1:"4",x2:"60",y2:"48",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#FFDF5D"}),e.jsx("stop",{offset:"0.5",stopColor:"#F5B800"}),e.jsx("stop",{offset:"1",stopColor:"#D99B00"})]}),e.jsxs("linearGradient",{id:"xpFront3",x1:"2",y1:"14",x2:"62",y2:"49",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#FFF18E"}),e.jsx("stop",{offset:"0.3",stopColor:"#FFD738"}),e.jsx("stop",{offset:"0.8",stopColor:"#F2A900"}),e.jsx("stop",{offset:"1",stopColor:"#C78200"})]})]})]}),e.jsx("span",{className:"xp-folder__mini-pill xp-folder__mini-pill--gold",children:e.jsx("i",{className:"fa-solid fa-utensils"})})]}),e.jsx("span",{className:"xp-folder__text",children:"03_Food_Dining.dir"})]}),e.jsxs("button",{type:"button",className:"xp-folder hero-sector-folder xp-folder--4 xp-folder--purple cursor-pointer",title:"04_Brand_Strategy_RealEstate (Dossier)",onClick:l=>{l.stopPropagation(),d("realestate")},children:[e.jsxs("div",{className:"xp-folder__icon-box",children:[e.jsxs("svg",{className:"xp-folder__svg",viewBox:"0 0 64 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M4 8C4 5.79 5.79 4 8 4H24L30 10H56C58.21 10 60 11.79 60 14V44C60 46.21 58.21 48 56 48H8C5.79 48 4 46.21 4 44V8Z",fill:"url(#xpBack4)",stroke:"#B38006",strokeWidth:"1.2"}),e.jsx("rect",{x:"10",y:"8",width:"44",height:"20",rx:"2",fill:"#FFFFFF",opacity:"0.95"}),e.jsx("line",{x1:"14",y1:"12",x2:"34",y2:"12",stroke:"#C4B5FD",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("line",{x1:"14",y1:"16",x2:"42",y2:"16",stroke:"#CBD5E1",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M2 18L6 45.5C6.3 47.5 8 49 10 49H54C56 49 57.7 47.5 58 45.5L62 18C62.3 16 60.5 14 58.5 14H5.5C3.5 14 1.7 16 2 18Z",fill:"url(#xpFront4)",stroke:"#B38006",strokeWidth:"1.2"}),e.jsx("path",{d:"M6 16.5H58",stroke:"#FFF7C2",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.9"}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"xpBack4",x1:"4",y1:"4",x2:"60",y2:"48",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#FFDF5D"}),e.jsx("stop",{offset:"0.5",stopColor:"#F5B800"}),e.jsx("stop",{offset:"1",stopColor:"#D99B00"})]}),e.jsxs("linearGradient",{id:"xpFront4",x1:"2",y1:"14",x2:"62",y2:"49",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#FFF18E"}),e.jsx("stop",{offset:"0.3",stopColor:"#FFD738"}),e.jsx("stop",{offset:"0.8",stopColor:"#F2A900"}),e.jsx("stop",{offset:"1",stopColor:"#C78200"})]})]})]}),e.jsx("span",{className:"xp-folder__mini-pill xp-folder__mini-pill--purple",children:e.jsx("i",{className:"fa-solid fa-chess-knight"})})]}),e.jsx("span",{className:"xp-folder__text",children:"04_Brand_Strategy.dir"})]})]})]})]})})}function lt(){return e.jsx("section",{className:"section about",id:"about",children:e.jsxs("div",{className:"container",children:[e.jsxs(w.div,{className:"section-head",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},children:[e.jsx("span",{className:"section-tag",children:"01 — WHO AM I ?"}),e.jsxs("h2",{className:"section-title",children:["YOUR BRAND. ",e.jsx("span",{className:"gradient-text",children:"MY STRATEGY."})]})]}),e.jsxs("div",{className:"about__triptych",children:[e.jsx(w.div,{className:"about__pillar-col about__pillar-col--left",initial:{opacity:0,x:-35},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8,delay:.1},children:e.jsx("div",{className:"about__pillar-card hover:scale-[1.02] transition-transform duration-300",children:e.jsxs("div",{className:"about__pillar-frame",children:[e.jsx("img",{src:"/shahd.ic/image/shahd_strategy.jpg",alt:"Shahd Essam — Strategy Creates Clarity",className:"about__pillar-img",loading:"eager"}),e.jsxs("div",{className:"about__pillar-badge about__pillar-badge--blue",children:[e.jsx("i",{className:"fa-solid fa-chess"})," ",e.jsx("span",{children:"Strategy"})]}),e.jsx("div",{className:"about__pillar-quote-box",children:e.jsxs("span",{className:"about__pillar-quote",children:[e.jsx("i",{className:"fa-solid fa-heart about__heart--blue"})," Strategy Creates Clarity."]})})]})})}),e.jsx(w.div,{className:"about__center-col",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:e.jsxs("div",{className:"about__bio-card backdrop-blur-xl border border-sky-400/30 hover:border-sky-400/50 transition-colors",children:[e.jsx("span",{className:"about__subtitle-badge",children:"Freelance Social Media Specialist & Content Creator"}),e.jsxs("div",{className:"about__bio-paragraphs",children:[e.jsxs("p",{className:"about__bio-p",children:["I specialize in ",e.jsx("strong",{className:"text-highlight",children:"content creation"}),","," ",e.jsx("strong",{className:"text-highlight",children:"strategy development"}),", and"," ",e.jsx("strong",{className:"text-highlight",children:"social media management"}),"."]}),e.jsxs("p",{className:"about__bio-p",children:["I help brands build a strong online presence through"," ",e.jsx("strong",{className:"text-highlight",children:"creative content"})," and"," ",e.jsx("strong",{className:"text-highlight",children:"audience-focused communication"}),"."]}),e.jsxs("p",{className:"about__bio-p",children:["Driven by ",e.jsx("strong",{className:"text-highlight",children:"creativity"}),","," ",e.jsx("strong",{className:"text-highlight",children:"adaptability"}),", and"," ",e.jsx("strong",{className:"text-highlight",children:"continuous learning"}),", I create content that delivers real impact."]})]}),e.jsxs("div",{className:"about__center-meta",children:[e.jsx("h3",{className:"about__creator-name",children:"SHAHD ESSAM"}),e.jsx("p",{className:"about__creator-role",children:"Freelance Social Media Specialist & Content Creator"})]})]})}),e.jsx(w.div,{className:"about__pillar-col about__pillar-col--right",initial:{opacity:0,x:35},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8,delay:.1},children:e.jsx("div",{className:"about__pillar-card hover:scale-[1.02] transition-transform duration-300",children:e.jsxs("div",{className:"about__pillar-frame",children:[e.jsx("img",{src:"/shahd.ic/image/shahd_content.jpg",alt:"Shahd Essam — Content Connects People",className:"about__pillar-img",loading:"eager"}),e.jsxs("div",{className:"about__pillar-badge about__pillar-badge--pink",children:[e.jsx("i",{className:"fa-solid fa-wand-magic-sparkles"})," ",e.jsx("span",{children:"Content"})]}),e.jsx("div",{className:"about__pillar-quote-box",children:e.jsxs("span",{className:"about__pillar-quote",children:[e.jsx("i",{className:"fa-solid fa-heart about__heart--pink"})," Content Connects People."]})})]})})})]})]})})}const dt=[{icon:"fa-solid fa-bullhorn",title:"Social Media Management",desc:"Full-channel growth, calendars & active community engagement."},{icon:"fa-solid fa-clapperboard",title:"Content Creation",desc:"Scroll-stopping visuals, dynamic graphics & viral video content."},{icon:"fa-solid fa-chess",title:"Content Strategy",desc:"Data-driven roadmaps tuned to audience psychology & algorithms."},{icon:"fa-solid fa-rocket",title:"Creative Campaigns",desc:"Bold, unconventional campaigns from concept to measurable impact."},{icon:"fa-solid fa-film",title:"Reels / Short-form Content",desc:"High-retention reels & shorts built for hooks, virality & reach."},{icon:"fa-solid fa-fingerprint",title:"Personal Branding",desc:"Magnetic positioning, distinct voice & memorable visual identity."}];function ct(){return e.jsxs("section",{className:"section services",id:"services",children:[e.jsx("svg",{width:"0",height:"0",style:{position:"absolute",pointerEvents:"none"},"aria-hidden":"true",children:e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"cloudBgGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#FFFFFF"}),e.jsx("stop",{offset:"68%",stopColor:"#F8FAFC"}),e.jsx("stop",{offset:"100%",stopColor:"#E2EDF8"})]}),e.jsxs("linearGradient",{id:"cloudBgGradHover",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#FFFFFF"}),e.jsx("stop",{offset:"70%",stopColor:"#F0F9FF"}),e.jsx("stop",{offset:"100%",stopColor:"#D9EEFD"})]}),e.jsxs("linearGradient",{id:"cloudBorderGrad",x1:"20%",y1:"0%",x2:"80%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#FFFFFF"}),e.jsx("stop",{offset:"40%",stopColor:"rgba(186, 230, 253, 0.95)"}),e.jsx("stop",{offset:"100%",stopColor:"rgba(125, 211, 252, 0.7)"})]}),e.jsxs("linearGradient",{id:"cloudBorderGradAmber",x1:"20%",y1:"0%",x2:"80%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#FFFFFF"}),e.jsx("stop",{offset:"45%",stopColor:"rgba(251, 191, 36, 0.95)"}),e.jsx("stop",{offset:"100%",stopColor:"rgba(245, 158, 11, 0.75)"})]}),e.jsxs("linearGradient",{id:"cloudBgGradDark",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#1B2D4F"}),e.jsx("stop",{offset:"50%",stopColor:"#111D35"}),e.jsx("stop",{offset:"100%",stopColor:"#0A1224"})]}),e.jsxs("linearGradient",{id:"cloudBgGradDarkHover",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#253D6B"}),e.jsx("stop",{offset:"50%",stopColor:"#172748"}),e.jsx("stop",{offset:"100%",stopColor:"#0E1931"})]}),e.jsxs("linearGradient",{id:"cloudBorderGradDark",x1:"20%",y1:"0%",x2:"80%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"rgba(125, 211, 252, 0.85)"}),e.jsx("stop",{offset:"45%",stopColor:"rgba(56, 189, 248, 0.65)"}),e.jsx("stop",{offset:"100%",stopColor:"rgba(129, 140, 248, 0.45)"})]})]})}),e.jsxs("div",{className:"container",children:[e.jsxs(w.div,{className:"section-head",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},children:[e.jsx("span",{className:"section-tag",children:"02 — Services"}),e.jsxs("h2",{className:"section-title",children:["What I ",e.jsx("span",{className:"gradient-text",children:"do best."})]})]}),e.jsx("div",{className:"services__grid",children:dt.map((d,s)=>e.jsxs(w.article,{className:"service-card cursor-pointer",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:s*.08},whileHover:{scale:1.03,y:-6},children:[e.jsx("svg",{className:"service-card__cloud-svg",viewBox:"0 0 400 260",preserveAspectRatio:"none","aria-hidden":"true",children:e.jsx("path",{className:"service-card__cloud-path",d:"M 140,50 C 155,18 245,18 260,50 C 295,45 345,60 345,95 C 375,110 395,135 385,160 C 385,195 360,235 325,235 C 285,242 240,242 200,238 C 160,242 115,242 75,235 C 40,235 15,195 15,160 C 5,135 25,110 55,95 C 55,60 105,45 140,50 Z"})}),e.jsxs("div",{className:"service-card__inner",children:[e.jsx("div",{className:"service-card__icon-box",children:e.jsx("i",{className:`${d.icon} service-card__icon`})}),e.jsx("h3",{children:d.title}),e.jsx("p",{children:d.desc})]})]},s))})]})]})}const pt=[{num:"01",icon:"fa-solid fa-lightbulb",title:"Idea",desc:"Every great piece starts with a spark — brainstorming concepts that align with your brand and audience."},{num:"02",icon:"fa-solid fa-chess-knight",title:"Strategy",desc:"Mapping the concept to platform, timing, format, and audience psychology for maximum impact."},{num:"03",icon:"fa-solid fa-pen-ruler",title:"Creation",desc:"Production — shooting, editing, designing. Where the idea becomes tangible, polished content."},{num:"04",icon:"fa-solid fa-paper-plane",title:"Publishing",desc:"Strategic release — timing, captions, hashtags, and distribution engineered for reach."},{num:"05",icon:"fa-solid fa-chart-line",title:"Results",desc:"Tracking, analyzing, and optimizing. Real numbers, real growth, real ROI."}];function ht(){const d=u.useRef(null),[s,i]=u.useState(0);return u.useEffect(()=>{const r=()=>{if(!d.current)return;const n=d.current.getBoundingClientRect(),l=window.innerHeight;if(n.top<=l*.75&&n.bottom>=l*.25){const p=Math.min(1,Math.max(0,(l*.75-n.top)/(n.height*.75)));i(p*100)}else n.top>l*.75?i(0):i(100)};return window.addEventListener("scroll",r,{passive:!0}),r(),()=>window.removeEventListener("scroll",r)},[]),e.jsx("section",{className:"section process",id:"process",children:e.jsxs("div",{className:"container",children:[e.jsxs(w.div,{className:"section-head",initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7},children:[e.jsx("span",{className:"section-tag",children:"03 — Process"}),e.jsxs("h2",{className:"section-title",children:["How the ",e.jsx("span",{className:"gradient-text",children:"magic"})," happens."]})]}),e.jsxs("div",{className:"process__track",id:"processTrack",ref:d,children:[e.jsxs("div",{className:"process__line",id:"processLine",children:[e.jsx("div",{className:"process__line-bg"}),e.jsx("div",{className:"process__line-fill transition-all duration-300 ease-out",id:"processLineFill",style:{width:`${s}%`}})]}),pt.map((r,n)=>e.jsxs(w.div,{className:`process-step ${n===0?"process-step--idea":""} cursor-pointer`,"data-step":n+1,role:"button",tabIndex:0,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:n*.1},whileHover:{scale:1.05,y:-4},children:[e.jsx("div",{className:"process-step__num",children:r.num}),e.jsxs("div",{className:"process-step__icon-wrap",children:[e.jsx("i",{className:r.icon}),e.jsx("span",{className:"process-step__ring"})]}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.desc})]},n))]})]})})}function xt(){return e.jsx("section",{className:"section contact",id:"contact",children:e.jsx("div",{className:"container",children:e.jsxs(w.div,{className:"contact__center",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[e.jsx("span",{className:"section-tag",children:"04 — Contact"}),e.jsxs("h2",{className:"section-title",children:["Let's create something ",e.jsx("span",{className:"gradient-text",children:"unforgettable."})]}),e.jsx("p",{className:"contact__text",children:"Have a project in mind? Let's talk. I work with brands and healthcare leaders who want to stand out — not blend in."}),e.jsxs("div",{className:"contact__info flex flex-wrap justify-center gap-4",children:[e.jsxs(w.a,{href:"mailto:shahdessam537@gmail.com",className:"contact-info group hover:border-sky-400/50 hover:bg-sky-500/10 transition-all",whileHover:{scale:1.04,y:-2},whileTap:{scale:.98},children:[e.jsx(Pe,{className:"w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform"}),e.jsx("span",{children:"shahdessam537@gmail.com"})]}),e.jsxs(w.a,{href:"tel:+201092916162",className:"contact-info group hover:border-sky-400/50 hover:bg-sky-500/10 transition-all",whileHover:{scale:1.04,y:-2},whileTap:{scale:.98},children:[e.jsx(Le,{className:"w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform"}),e.jsx("span",{children:"+20 10 9291 6162"})]})]}),e.jsx("div",{className:"contact__socials mt-6",children:e.jsx(w.a,{href:"https://wa.me/201092916162",target:"_blank",rel:"noopener noreferrer",className:"contact-social","data-platform":"whatsapp","aria-label":"WhatsApp",whileHover:{scale:1.15,rotate:5},whileTap:{scale:.95},children:e.jsx("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6-.1.49-.3 1.47-1.2 1.68-1.66.21-.46.21-.86.15-.98-.06-.13-.23-.2-.48-.32z"})})})})]})})})}function gt(){const d=new Date().getFullYear();return e.jsx("footer",{className:"footer",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"footer__content",children:[e.jsxs("p",{className:"footer__copy",children:["© ",d," ",e.jsx("span",{className:"footer__brand-highlight",children:"shahd.ic"})," · All rights reserved."]}),e.jsxs("p",{className:"footer__dev",children:[e.jsx("span",{children:"Designed & Developed by"}),e.jsx("a",{href:"https://wa.me/201125296350",target:"_blank",rel:"noopener noreferrer",className:"footer__dev-link",title:"Chat with Mohamed Ahmed Ezzat on WhatsApp",children:e.jsx("span",{children:"Mohamed Ahmed Ezzat"})})]})]})})})}const K={badr_reel1:{id:"badr_reel1",client:"بدر الشام · سوهاج",title:"تجهيز تورتة الشاورما 🎂",badge:"ريل 01",duration:"30 - 35 ثانية",hook:"خلاص.. زمن التورتة اللي بالكريمة انتهى! عيد ميلادك الجاي.. الشاورما هي البطل.",audio:"أول 3 ثواني: هدوء مع صوت نفخ الشمعة وصوت 'تشش' خفيف. بعد الـ Hook: تدخل مزيكا حماسية وسريعة (Hip-hop Beat أو Syrian Modern Beats). مع التركيز على مؤثرات الـ ASMR (صوت قرمشة العيش، صوت نزول الشاورما ع الطبق).",cta:"منشن لصاحبك اللي عيد ميلاده الشهر ده، وقوله الهدية وصلت!",scenes:[{num:"المشهد 01 | الـ Hook (إطفاء الشمعة)",visual:`الكاميرا بتبدأ قريبة جداً على شمعة منورة، فجأة الشيف بينفخ فيها يطفيها، والكاميرا بترجع لورا (Zoom out) بتبين إنه واقف ورا تورتة شاورما ضخمة وبيتكلم بثقة وحماس.
• حركة الكاميرا: Close-up ⬅ Zoom out سريع ⬅ Medium Shot.`,dialogue:"خلاص.. زمن التورتة اللي بالكريمة انتهى! عيد ميلادك الجاي.. الشاورما هي البطل.",sfx:"صوت نفخ الشمعة وصوت تشش خفيف ثم انطلاق المزيكا الحماسية."},{num:"المشهد 02 | بداية التحضير (The Body)",visual:`لقطة بطيئة جداً للشيف وهو بيقطع الفراخ/اللحمة من على السيخ، والسكينة بتنزل بانسيابية، والدخان طالع من الشاورما.
• حركة الكاميرا: Macro Shot + Slow Motion (Focus على تقطيع اللحمة).`,dialogue:"في بدر الشام، مابنعملش كيكة.. احنا بنبني طبقات من السعادة.",sfx:"صوت انسياب سكينة الشيف على سيخ الشاورما مع تصاعد البخار."},{num:"المشهد 03 | تفاصيل البناء والتغميس",visual:`لقطات سريعة ورا بعض (تزامناً مع المزيكا الحماسية): فرش طبقة عيش سوري ⬅ غرقانة تومية كريمي ⬅ رشة خيار مخلل مقرمش ⬅ ونزول جبل الشاورما فوقهم.
• حركة الكاميرا: Dynamic Cuts (لقطات سريعة متتالية قريبة جداً Extreme Close-up).`,dialogue:"عيش سوري محمص، تومية غرقانة، ومكس مخلل وبطاطس.. مع شاورما متغرقه في التتبيلة السرية.",sfx:"ASMR قرمشة العيش ونزول طبقات الشاورما والتومية."},{num:"المشهد 04 | التقفيل والجمال",visual:`الشيف بيمسك صوص الرمان أو صوص الثومية وبيعمل بيه خطوط زجزاج تجميلية على الوش، وبعدين بيقطع مثلث من التورتة بالسكينة وبيرفعه لفوق قدام الكاميرا، والطبقات باينة وبتنزل صوص.
• حركة الكاميرا: Top View (من فوق) ثم Push In (تقريب) على القطعة المرفوعة.`,dialogue:"المثلث ده كفيل ينسيك أي حلو دوقته في حياتك.. هنا الجريمة كاملة!",sfx:"صوت انسياب الصوص وسحب قطعة التورتة الغرقانة."},{num:"المشهد 05 | الختام والـ CTA",visual:`الشيف واقف مبتسم، شال تورتة الشاورما كاملة على إيده وبيقدمها للكاميرا (كأنه بيعزم على المشاهد)، وبيشاور بإصبعه للكاميرا بحماس.
• حركة الكاميرا: Hero Shot (كادر نظيف، الإضاءة ممتازة، اللوجو باين في الخلفية).`,dialogue:"تورتة الشاورما من بدر الشام.. احتفل صح وبطعم مبيتنسيش! منشن لصاحبك اللي عيد ميلاده الشهر ده، وقوله الهدية وصلت.",sfx:"نغمة ختامية مع ظهور اللوجو والبيانات."}]},badr_reel2:{id:"badr_reel2",client:"بدر الشام · سوهاج",title:"البروستد المقرمش 🍗",badge:"ريل 02",duration:"25 - 30 ثانية",hook:"لو البروستد ملوش صوت.. يبقى لسه مدوقتش بروستد! السر مش بس في القرمشة الخارجية.. السر في اللي جوه.",audio:"أول 3 ثواني: تضخيم صوت قرمشة الفراخ وهي بتتقسم (ASMR قوي جداً صوت 'كراااك') بدون أي مزيكا. بعد الـ Hook: تدخل مزيكا حماسية، حديثة وسريعة تناسب حركة التقطيع والتقديم السريعة.",cta:"أنا عملت اللي عليا وجوعتك.. الباقي عليك! منيو بدر الشام مستنيك في البايو، اطلبها حالا.",scenes:[{num:"المشهد 01 | الـ Hook (صوت كراااك)",visual:`الكاميرا تبدأ قريبة جداً (Macro) على قطعة بروستد لونها دهبي وجميل. إيد الشيف بتكسرها نصين، صوت القرمشة قوي، والبخار بيطلع واللحمة بيضا ونضيفة جداً من جوه. الشيف بيبص للكاميرا بابتسامة ثقة.
• حركة الكاميرا: Extreme Close-up (على القطعة) ⬅ Zoom out سريع ⬅ Medium Shot (على الشيف).`,dialogue:"لو البروستد ملوش صوت.. يبقى لسه مدوقتش بروستد! السر مش بس في القرمشة الخارجية.. السر في اللي جوه.",sfx:"ASMR قوي ومضخم جداً لصوت كراااك كسر البروستد بدون مزيكا."},{num:"المشهد 02 | سر النظافة والتتبيلة (The Body)",visual:`لقطة سينمائية بطيئة للفراخ وهي بتطلع من زيت القلي الدهبي النضيف، الزيت بيصفي منها، ولونها دهبي يفتح النفس.
• حركة الكاميرا: Close-up + Slow Motion (تركيز على الفراخ وهي بتترفع من القلاية).`,dialogue:"في بدر الشام، الفراخ فريش، متبلة لغاية العضم، وبتستوي على الرايق عشان تطلع لك باللون الدهبي ده.",sfx:"صوت تصفية الزيت الساخن ومزيكا حماسية تنطلق بقوة."},{num:"المشهد 03 | التقديم والتفاصيل السحرية",visual:`لقطات سريعة ومتتالية (Cuts): الشيف بيرص قطع البروستد في الوجبة ⬅ بينزل جنبها البطاطس المحمرة المقرمشة ⬅ وبيرش رشة بهارات خفيفة ⬅ ومعاهم علب التومية الكريمية والكول سلو.
• حركة الكاميرا: Dynamic Cuts (لقطات سريعة متتالية قريبة جداً).`,dialogue:"قرمشة من بره، فراخ دايبة من جوه، ومعاهم التومية السوري اللي بتكمل الحكاية.",sfx:"إيقاع سريع مع رص القطع ونزول البطاطس."},{num:"المشهد 04 | اللقمة المثالية والتغميس",visual:`الشيف بياخد قطعة بروستد، بيغمسها غطس كامل في علبة التومية لغاية ما تتغرق، ويرفعها للكاميرا وهي بتنقط تومية.
• حركة الكاميرا: Macro Shot + Push In (تقريب على قطعة البروستد المغمسة بالتومية).`,dialogue:"كل لقمة هنا معمولة بمزاج، عشان تفضل مقرمشة من أول قطعة.. لآخر قطعة.",sfx:"صوت تغميس القطعة في صوص الثومية الكريمي."},{num:"المشهد 05 | الختام وتحدي الجوع (CTA)",visual:`الشيف واقف ماسك وجبة البروستد كاملة ومقدمها للكاميرا بحماس، واللوجو بتاع 'بدر الشام' واضح وراه في المطبخ، بيقرب الوجبة للكاميرا ويغمز بحماس.
• حركة الكاميرا: Hero Shot (كادر نظيف، إضاءة ممتازة تعكس جودة الأكل).`,dialogue:"بروستد بدر الشام.. طعم يقرمش في الدماغ. أنا عملت اللي عليا وجوعتك.. الباقي عليك! منيو بدر الشام مستنيك في البايو، اطلبها حالا.",sfx:"شعار بدر الشام ونغمة سريعة مشوقة للطلب."}]},badr_reel3:{id:"badr_reel3",client:"بدر الشام · سوهاج",title:"التندوري السوري 🌶️",badge:"ريل 03",duration:"25 - 30 ثانية",hook:"الفراخ دي مش للدايت.. دي معمولة للمزاج!",audio:"بيبدأ بصوت خبطة السكينة القوية (تنبيه للمشاهد)، يليها صوت 'تشش' الشوي ع الفحم، وبعدين مزيكا 'درامز' حماسية وسريعة جداً تزيد من ضربات القلب والحماس مع التقطيعات.",cta:"لو جوعك مبيتأجلش.. اكتب 'جعان' في الكومنتات والأوردر هيجيلك حالا!",scenes:[{num:"المشهد 01 | الـ Hook (خبطة السكينة والتفصيص)",visual:`خبطة السكينة، تليها لقطة سريعة للشيف وهو بيفصص حتة تندوري حمراء بتدخن وبيقربها جداً للشاشة.
• حركة الكاميرا: Medium Shot ⬅ Fast Cut ⬅ Extreme Close-up.`,dialogue:"الفراخ دي مش للدايت.. دي معمولة للمزاج!",sfx:"صوت خبطة السكينة القوية المفاجئة لتنبيه المشاهد."},{num:"المشهد 02 | سر الصنعة والشواء ع الفحم",visual:`لقطة سينمائية للفراخ التندوري وهي مرصوصة على الفحم والنار طالعة خفيفة تحتها، واللون الأحمر مشوي ومقرمش من الحواف.
• حركة الكاميرا: Macro Shot + Slow Motion.`,dialogue:"تندوري بدر الشام.. واخد لون الشوي الصح وريحة الفحم السوري الأصيل.",sfx:"صوت تشش الشوي على الفحم ولهيب النار الخفيف."},{num:"المشهد 03 | الانفجار وتقطيع الفراخ",visual:`لقطة سريعة من فوق (Top View) لسكين الشيف وهي بتقطع الفراخ ترنشات، واللحم من جوه باين إنه شارب التتبيلة لآخر فتلة.
• حركة الكاميرا: Top View + Quick Cuts.`,dialogue:"كل حتة فيها دايبة، وواخدة التتبيلة السرية لغاية العضم.",sfx:"صوت تقطيع سريع ومتتابع مع إيقاع الدرامز الحماسي."},{num:"المشهد 04 | التجهيز النهائي والرز المبهر",visual:`لقطة سريعة للرز البسمتي الأصفر وهو بيتغرف في العلبة، وبتنزل فوقه قطع التندوري الحمراء ومعاها صوص الثومية الحار.
• حركة الكاميرا: Close-up.`,dialogue:"بتنزل على طبق الرز المبهر، عشان تظبط يومك.",sfx:"صوت غرف الرز وسكب الصوص الحار."},{num:"المشهد 05 | الـ CTA والمبيعات",visual:`الشيف بيقفل العلبة بحسم، بيبص للكاميرا وبيبتسم وهو بيقدمها للمشاهد.
• حركة الكاميرا: Hero Shot.`,dialogue:"لو جوعك مبيتأجلش.. اكتب 'جعان' في الكومنتات والأوردر هيجيلك حالا!",sfx:"صوت إغلاق البوكس بحسم مع نغمة ختامية."}]},badr_reel4:{id:"badr_reel4",client:"بدر الشام · سوهاج",title:"فتة شاورما الفراخ (نسخة الـ 3 علامات) ⭐",badge:"ريل 04",duration:"30 ثانية",hook:"3 علامات تقولك إن فتة شاورما اللي قدامك دي معمولة على أصولها.. ركز معايا عشان تعرف السر!",audio:"مع كل علامة بيقولها الشيف (1، 2، 3) يكون في صوت تأثير صوتي قوي مثل الجرس أو خبطة خفيفة لتنبيه العين، مع إبراز صوت قرمشة العيش ونزول التومية ASMR وخلفية مزيكا سريعة ومودرن.",cta:"لو فتتك مفيهاش العلامات دي يبقى مكلتش فتة! اكتب 'جعان' في الكومنتات و سيب الباقي علينا.",scenes:[{num:"المشهد 01 | الـ Hook (سر العلامات الثلاث)",visual:`تقريب سريع على طبق الفتة وهو بيتحرك بحماس في إيد الشيف والدخان طالع منه يجنن.
• حركة الكاميرا: Medium Shot ⬅ Fast Push In ⬅ Close-up.`,dialogue:"3 علامات تقولك إن فتة الشاورما اللي قدامك دي معمولة على أصولها.. ركز معايا عشان تعرف السر!",sfx:"صوت Push In سريع وتأثير صوتي تنبيهي مشوق."},{num:"المشهد 02 | العلامة الأولى (العيش السوري المقرمش)",visual:`لقطة قريبة وبطيئة جداً لإيد الشيف وهي بترش العيش السوري المتحمص المقرمش في قاع الطبق وصوته واضح.
• حركة الكاميرا: Macro Shot + Slow Motion.`,dialogue:"العلامة الأولى: قرمشة العيش السوري الصح.",sfx:"رنين جرس تنبيهي [العلامة 1] + ASMR قوي لصوت تكسير العيش المحمص."},{num:"المشهد 03 | العلامة الثانية (الرز المفلفل المبهر)",visual:`الشيف بينزل بغرفتين من الرز البسمتي الأصفر وهو مفلفل وبيدخن فوق العيش.
• حركة الكاميرا: Close-up + Steam effect.`,dialogue:"الثانية: دفا الرز المبهر والمفرول اللي ريحته بتجيب من آخر الشارع.",sfx:"رنين جرس تنبيهي [العلامة 2] + صوت نزول الرز وتصاعد البخار."},{num:"المشهد 04 | العلامة الثالثة (شلال الفراخ والتومية)",visual:`لقطة سريعة لسكينة الشيف وهي بتنزل الفراخ المحمرة من السيخ فوق الرز وفوقيها شلال الثومية الكريمي الغزير.
• حركة الكاميرا: Dynamic Action Cut.`,dialogue:"والثالثة والأهم: شلال الفراخ الغرقان تومية و واخده لسعة شوي السيخ المظبوطة.",sfx:"رنين جرس تنبيهي [العلامة 3] + صوت شلال الثومية وسكب الشاورما."},{num:"المشهد 05 | الـ CTA والمبيعات",visual:`الشيف بياخد لقمة سريعة بالمعلقة تجمع كل الطبقات وبعدها يقفل علبة الوجبة ويقدمها للكاميرا بابتسامة صايعة.
• حركة الكاميرا: Hero Shot.`,dialogue:"لو فتتك مفيهاش العلامات دي يبقى مكلتش فتة! اكتب 'جعان' في الكومنتات و سيب الباقي علينا.",sfx:"صوت إغلاق العلبة بحماس مع نغمة موسيقية مرحة وجذابة."}]},badr_sheet1:{id:"badr_sheet1",client:"بدر الشام · سوهاج",title:"محتوى شهر 8 (18 بوست + 12 ريل)",badge:"المحتوى المعتمد",type:"approved_posts",summary:"نصوص المنشورات المعتمدة وقائمة الـ 12 ريلز بلقطات التصوير.",posts:[{title:"بوست 01 · الافتتاحية والترحيب",caption:`لما تشتاق للطعم السوري الأصلي، يبقى مفيش غير وجهة واحدة بس بسوهاج.. بدر الشام! 🇸🇾
من أول الشاورما السيخ المتبلة لآخر قطمة في فتة التومية، الطعم معمول بحب وإتقان.

📍 سوهاج - شارع المحطة
📞 01018882582`,direction:"صورة فوتوغرافية لسيخ الشاورما مع البخار واللوجو."},{title:"بوست 02 · تورتة الشاورما للمناسبات",caption:`عيد ميلاد صاحبك قرب ومحتار تجيب إيه؟ 🎂
انسى التورتة التقليدية وفاجئه بتورتة الشاورما من بدر الشام! طبقات عيش محمص وشاورما وتومية تكفي كل الشلة.

اطلبها قبل مناسبتك بساعة وهتوصلك سخنة وبأجمل تقديم! 🔥`,direction:"صورة لتورتة الشاورما مضاءة بشمعة احتفالية."},{title:"بوست 03 · قرمشة البروستد الذهبي",caption:`الصوت لوحده كفيل يجوعك! 🍗
وجبة بروستد بدر الشام: 4 قطع فراخ ذهبية فريش 100% + بطاطس مقرمشة + كولسلو + تومية كريمي + عيش سوري.

اطلب دليفري على 01018882582`,direction:"صورة قريبة لقطعة البروستد الذهبية مع التومية."},{title:"بوست 04 · فتة الشاورما السورية",caption:`الفتة مش مجرد أكلة.. الفتة مزاج! ✨
طبقات الرز البسمتي المبهر مع العيش المقرمش وشاورما الفراخ الغرقانة تومية ودبس رمان.

مين هيعزمك النهاردة على فتة بدر الشام؟ منشن وورطه!`,direction:"صورة بزاوية علوية لطبق الفتة مع تزيين الصوصات."}]},badr_sheet2:{id:"badr_sheet2",client:"بدر الشام · سوهاج",title:"بلان بدر الشام لشهر 8",badge:"بلان شهر 8",type:"sheet_plan",headers:["اليوم / التاريخ","نوع المحتوى","عنوان الفكرة والهدف","المنصة","الحالة"],rows:[["الأسبوع 1 · السبت","بوست براندينج","تاريخ وقصة المذاق السوري الأصيل في سوهاج","فيس بوك + إنستجرام","معتمد ومجدول"],["الأسبوع 1 · الإثنين","ريل فيديو 01","فيديو تورتة الشاورما لأعياد الميلاد والمناسبات","ريلز + تيك توك","تم التصوير والمونتاج"],["الأسبوع 1 · الأربعاء","بوست تفاعلي","منشن صاحبك اللي مستعد يخلص ساندوتش الشاورما الصاروخ","فيس بوك","معتمد ومجدول"],["الأسبوع 1 · الجمعة","ريل فيديو 02","ASMR بروستد مقرمش مع الثومية السورية الكريمية","ريلز + تيك توك","تم التصوير والمونتاج"],["الأسبوع 2 · الأحد","بوست منتج","عظمة فتة الشاورما بالفراخ ودبس الرمان","فيس بوك + إنستجرام","معتمد ومجدول"],["الأسبوع 2 · الثلاثاء","ريل فيديو 03","التندوري السوري الحار المشوي على الفحم","ريلز + تيك توك","تم التصوير والمونتاج"],["الأسبوع 2 · الخميس","بوست عرض الويك إند","صينية لمة الصحاب والعائلات بخصم خاص للصالات","فيس بوك","معتمد ومجدول"],["الأسبوع 3 · السبت","ريل فيديو 04","سر فتة الشاورما في 3 خطوات سحرية","ريلز + تيك توك","تم التصوير والمونتاج"]]},badr_trends:{id:"badr_trends",client:"بدر الشام · سوهاج",title:"بنك أفكار وتريندات الريلز (23 مرجع)",badge:"23 تريند معتمد",type:"trends_library",trends:[{num:"01",title:"إنستجرام 01 · فكرة إبداعية لتصوير وتقديم الشاورما السورية",link:"https://www.instagram.com/reel/DZacMvEoEq9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},{num:"02",title:"إنستجرام 02 · تكنيك تصوير سينمائي لعرض وجبات الشاورما والبروستد",link:"https://www.instagram.com/reel/DbQ3lYKNMoi/?igsh=MTR4ZGpxamF0cjJucQ=="},{num:"03",title:"إنستجرام 03 · حركة الكاميرا والتقطيع السريع على تفاصيل الأكل",link:"https://www.instagram.com/reel/DbTcUQCtSKk/?igsh=MXUxanA5Ym5xdGExcA=="},{num:"04",title:"إنستجرام 04 · استعراض تورتة الشاورما والبوكسات العائلية الضخمة",link:"https://www.instagram.com/reel/DbOQAiNMM2a/?igsh=ZzRzMnZ3ZDB5dnFi"},{num:"05",title:"إنستجرام 05 · أسلوب الهوك البصري الخاطف لجذب انتباه المشاهدين",link:"https://www.instagram.com/reel/DVEckK6Cl6O/?igsh=ZHdzdWloNTd2bnFq"},{num:"06",title:"إنستجرام 06 · تصوير نزول الصوصات وشلال الثومية ودبس الرمان",link:"https://www.instagram.com/reel/DVOe7ivjN8d/?igsh=MTFuNmJxcHFjdW45Yg=="},{num:"07",title:"إنستجرام 07 · تفجير الشهية بقرمشة البروستد والقطع الذهبية",link:"https://www.instagram.com/reel/DbOEey4MRPw/?igsh=MXhwYmZ4cTR1bWxsZw=="},{num:"08",title:"إنستجرام 08 · فكرة تفاعلية لدعوة المتابعين للتعليق والطلب الفوري",link:"https://www.instagram.com/reel/DbOi9v-RBUy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},{num:"09",title:"إنستجرام 09 · عرض لقطات الشواء المباشر على الفحم ونار الجريل",link:"https://www.instagram.com/reel/DasYyA2Imzg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},{num:"10",title:"إنستجرام 10 · كواليس الشيف في المطبخ وسر التتبيلة السورية",link:"https://www.instagram.com/reel/DaIxn7AMBuN/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="},{num:"11",title:"تيك توك 01 · تريند تقطيع وتغليف وجبات الشاورما بحماس وسرعة",link:"https://vt.tiktok.com/ZS4d4S3Fn/"},{num:"12",title:"تيك توك 02 · تريند القرمشة السريعة وصوت الأكل ASMR",link:"https://vt.tiktok.com/ZS4d4yW6j/"},{num:"13",title:"تيك توك 03 · فكرة ريل لتجربة وجبة البروستد الساخنة وتصاعد الدخان",link:"https://vt.tiktok.com/ZS4d4rGNC/"},{num:"14",title:"تيك توك 04 · تريند الميكس السوري (فتة + شاورما + شلال تومية)",link:"https://vt.tiktok.com/ZS4d4Bnfo/"},{num:"15",title:"تيك توك 05 · أسلوب إبراز حجم الوجبة وتحدي الشبع والجوع",link:"https://vt.tiktok.com/ZS4d4xP98/"},{num:"16",title:"تيك توك 06 · حركة سريعة للسكينة وتقديم الساندوتش المحمص",link:"https://vt.tiktok.com/ZS4d4yxWu/"},{num:"17",title:"تيك توك 07 · فكرة مسابقة وتفاعل واختيار عشوائي للزبائن",link:"https://vt.tiktok.com/ZS4dVUkaS/"},{num:"18",title:"تيك توك 08 · تصوير لحظة فتح البوكس وتصاعد البخار الحار",link:"https://vt.tiktok.com/ZS4dV3xcT/"},{num:"19",title:"تيك توك 09 · حركة الشيف الاستعراضية مع سيخ الشاورما",link:"https://vt.tiktok.com/ZS4dVKWvp/"},{num:"20",title:"تيك توك 10 · تريند كوميدي وتفاعل عفوي مع طلبات الأكل",link:"https://vt.tiktok.com/ZS4dVnTKB/"},{num:"21",title:"تيك توك 11 · تريند أساسي للمطعم (⭐ ريل إجباري: لازم تعمل ده!)",link:"https://vt.tiktok.com/ZS4dqXM85/"},{num:"22",title:"تيك توك 12 · تصوير الصوصات وتغميسة التومية الإدمانية",link:"https://vt.tiktok.com/ZS4dbasK8/"},{num:"23",title:"تيك توك 13 · لقطات ختامية سريعة مع اللوجو وأرقام الدليفري",link:"https://vt.tiktok.com/ZS4dbyMPQ/"}]},khalat_reel1:{id:"khalat_reel1",client:"الخلاط بيور · طهطا",title:"اسكريبت الريل الأول: ليه الخلاط وليه بالذات بيور",badge:"ريل 01",hook:"سألت نفسك قبل كده ليه تختار الخلاط وليه بالذات بيور؟",duration:"25 - 30 ثانية",goal:"توضيح هوية المكان (عصير طبيعي 100% بدون إضافات) والحلويات المتنوعة وأجواء الترويق وفصلان اليوم.",cta:"خلاصة الكلام الخلاط بيور هو المكان الصح لما تعوز تدلع نفسك. تعال وجرب بنفسك.",scenes:[{num:"اللقطة 01",visual:"المتحدث يدخل من باب المحل أو يتحرك بين الطاولات وهو بيكلم الكاميرا بعفوية.",dialogue:"سألت نفسك قبل كده ليه تختار الخلاط وليه بالذات بيور."},{num:"اللقطة 02",visual:"تقطيعات سريعة على أنواع مختلفة من الفاكهة وعصائر بألوان متعدده بتتصب في الكوبايات.",dialogue:"عشان هتلاقي عنده كل انواع العصاير اللي تخطر على بالك والاقل تقليدية اللي متخطرش على بالك."},{num:"اللقطة 03",visual:"زاوية قريبة جدا على قوام العصير الثقيل وهو ينزل في الكوباية بدون ماء أو ثلج زيادة.",dialogue:"وبيور يعني عصير طبيعي مية في المية طعم الفاكهة الأصلي وقوام ثقيل بجد."},{num:"اللقطة 04",visual:"المتحدث يتحرك في الصالة وبيشاور على القعدة والترابيزات.",dialogue:"ده غير إن القعدة هنا مريحة وحلوة جدا للترويق وفصلان اليوم."},{num:"اللقطة 05",visual:"لقطات سينمائية سريعة لقفل الوافل وصوص الشوكولاتة وهو ينزل على السينابون والدوناتس والكرواسون.",dialogue:"ومش بس عصاير هتلاقي حلويات تظبط المود زي السينابون والدوناتس والكرواسون والوافل وحركات تانية كتير."},{num:"اللقطة 06",visual:"المتحدث ياخد رشفة ويشاور بالكوباية للكاميرا ابتسامة واسعة.",dialogue:"خلاصة الكلام الخلاط بيور هو المكان الصح لما تعوز تدلع نفسك. تعال وجرب بنفسك."}]},khalat_reel2:{id:"khalat_reel2",client:"الخلاط بيور · طهطا",title:"اسكريبت الريل الثاني: أنا عارف أنا عايز إيه",badge:"ريل 02",hook:"معظم الناس لما بتيجي هنا بتقعد تقلب في المنيو محتارة، أنا بقى باجي على هدف واحد بس.",duration:"25 - 30 ثانية",audio:"أصوات المكان والتحضير الحقيقية فقط (SFX).",goal:"إبراز سرعة الخدمة، ثبات جودة العصير الطبيعي المركز، وثقة العميل في اختياره المفضل.",cta:"جربه في الخلاط بيور وقولي رأيك.",scenes:[{num:"اللقطة 01",visual:"المتحدث بيدخل المحل وهو بيكلم الكاميرا بعفوية من غير تمثيل.",dialogue:"معظم الناس لما بتيجي هنا بتقعد تقلب في المنيو محتارة، أنا بقى باجي على هدف واحد بس."},{num:"اللقطة 02",visual:"المتحدث بيوصل للكاونتر ويطلب بابتسامة بسيطة.",dialogue:"جهزلي المشروب بتاعي (اسم المشروب) لو سمحت."},{num:"اللقطة 03",visual:"تقطيع فاكهة فريش وشغل الخلاط، وقوام العصير ينزل تقيل في الكوباية.",dialogue:"الفكرة إن العصير هنا بيور بجد، فاكهة متقطعة قدامك، وطعم مركز وتقيل من غير ما يتخف بمية.",sfx:"صوت التقطيع + صب العصير."},{num:"اللقطة 04",visual:"المتحدث بيستلم الكوباية، بياخد منها رشفة، ويهز رأسه باستحسان طبيعي.",dialogue:"الطعم المظبوط ده هو اللي بيخليني أرجع كل مرة."},{num:"اللقطة 05",visual:"كادر أخير المتحدث بيشاور بالكوباية للكاميرا ويمشي.",dialogue:"جربه في الخلاط بيور وقولي رأيك."}]},khalat_reel3:{id:"khalat_reel3",client:"الخلاط بيور · طهطا",title:"اسكريبت الريل الثالث: اختارلي حاجة على ذوقك",badge:"ريل 03",hook:"بقولك إيه.. أنا زهقت من التقليدي، اعملي ميكس على ذوقك بس يكون 'بيور' بجد.",duration:"20 - 25 ثانية",audio:"أصوات تحضير حقيقية قوية (SFX).",goal:"كسر روتين المنيو وإبراز براعة وخبرة الباريستا في ابتكار ميكسات حصرية.",cta:"المرة الجاية سيب المنيو، وقولهم 'على ذوقك' في الخلاط بيور.",scenes:[{num:"اللقطة 01",visual:"كادر متوسط (Mid Shot). المتحدث واقف قدام الكاونتر علطول، بيكلم الموظف بعفوية تامة وبدون مبالغة في الابتسام.",dialogue:'بقولك إيه.. أنا زهقت من التقليدي، اعملي ميكس على ذوقك بس يكون "بيور" بجد.'},{num:"اللقطة 02",visual:`لقطات سريعة جداً (Rapid Cuts) وبزوايا قريبة (Macro shots) لإبداع الموظف:
• يد بتقطع فاكهة مش معتادة (مثلاً كيوي أو أناناس).
• صب نوعين عصير مختلفين فوق بعض (طبقات).
• رشة مكسرات أو توبنج بسيط على الوش.`,dialogue:"نشوف بقى المكس ده حكايته إيه..",sfx:"أصوات تقطيع، خلاط، وصب قوية وواضحة."},{num:"اللقطة 03",visual:"الموظف بيمد إيده بالكوباية للمتحدث. شكل الكوباية ميكس ألوانه حلوة.",dialogue:"جرب ده وادعيلي."},{num:"اللقطة 04",visual:"زاوية قريبة على وجه المتحدث وهو بياخد رشفة. تعبير وجهه بيتغير من الفضول للرضا التام، ويهز رأسه ببطء.",dialogue:"طلع فاهم فعلاً! الطعم حكاية والميكس مظبوط بالملي.",sfx:"صوت رشفة قوية (Slurp)."},{num:"اللقطة 05",visual:"المتحدث يلف للكاميرا ويبتسم بصدق، ويرفع الكوباية كأنه بيحيي المشاهد.",dialogue:'المرة الجاية سيب المنيو، وقولهم "على ذوقك" في الخلاط بيور.'}]},khalat_reel4:{id:"khalat_reel4",client:"الخلاط بيور · طهطا",title:"اسكريبت الريل الرابع: لو بتحب المانجا اسمع دي",badge:"ريل 04",hook:"لو أنت من عشاق المانجا يبقى لازم تركز معايا الـ 30 ثانية دول.",duration:"30 ثانية",audio:"أصوات التحضير الفريش والانتعاش SFX.",goal:"استعراض أصناف وميكسات المانجا الـ 5 (مانجا، مانجا كنتالوب، لاكاسا، مانجا خوخ، منجاوي).",cta:"تعال الخلاط بيور وجرب ملكة الفاكهة على أصولها.",scenes:[{num:"اللقطة 01",visual:"كادر متوسط المتحدث واقف في المحل بيبص للكاميرا بابتسامة وماسك في إيده مانجاية فريش شكلها حلو ومستوي.",dialogue:"لو أنت من عشاق المانجا يبقى لازم تركز معايا الـ 30 ثانية دول.",sfx:"صوت حركة خفيف في المكان."},{num:"اللقطة 02",visual:"لقطة سينمائية بزاوية منخفضة لصب مانجا بيور ثقيلة جدا وغنية في الكوباية.",dialogue:"عشان هنا في الخلاط بيور إحنا بنتعامل مع المانجا باحترام طبيعي 100% ومن غير إضافات.",sfx:"صوت صب مانجا ثقيل."},{num:"اللقطة 03",visual:`لقطات سريعة جدا لأفضل اختيارات المانجا:
1: مانجا
2: مانجا كنتالوب
3: لاكاسا
4: مانجا خوخ
5: منجاوي`,dialogue:"هتلاقي عنده مانجا ومانجا كنتالوب ولاكاسا ومانجا خوخ وكمان المنجاوي.",sfx:"أصوات تقطيع فريش مع صب العصير."},{num:"اللقطة 04",visual:"كادر قريب للمتحدث وهو بياخد رشفة من المشروب وبيبتسم براحة وانتعاش.",dialogue:"الطعم مركز وقوام ثقيل يظبط المزاج بجد.",sfx:"صوت رشفة قوية وتناهيد انتعاش."},{num:"اللقطة 05",visual:"المتحدث بيشاور بالكوباية للكاميرا ويمشي بابتسامة.",dialogue:"تعال الخلاط بيور وجرب ملكة الفاكهة على أصولها."}]},khalat_reel5:{id:"khalat_reel5",client:"الخلاط بيور · طهطا",title:"اسكريبت الريل الخامس: عروض افتتاح الخلاط بيور",badge:"ريل 05",hook:"بمناسبة الافتتاح عملنالك عروض جبارة تخليك تجيب صحابك وتيجي!",duration:"20 - 25 ثانية",audio:"أصوات تحضير فريش وحماسية SFX.",goal:"إعلان عروض الافتتاح الكبرى بأسعار تنافسية غير مسبوقة في طهطا.",cta:"مستني إيه تعال جرب عروض الافتتاح في الخلاط بيور.",scenes:[{num:"اللقطة 01",visual:"كادر متوسط المتحدث بيدخل الكادر بعفوية وبيشاور بيده بابتسامة حماسية.",dialogue:"بمناسبة الافتتاح عملنالك عروض جبارة تخليك تجيب صحابك وتيجي.",sfx:"صوت حركة سريعة حماسية."},{num:"اللقطة 02",visual:"لقطات سريعة جدا لصب العصائر وتجميع العروض ورص الكوبايات جنب بعضها.",dialogue:"ركز معايا في الأسعار دي.",sfx:"أصوات صب ثقيل وتقطيع فريش."},{num:"اللقطة 03",visual:`تقطيعات سريعة وقريبة جدا تظهر فيها الكوبايات والعصائر وهي بتجهز:
1: 4 مانجو
2: 4 مانجو كنتالوب
3: 4 مانجو خوخ
4: 2 مانجاوي أو 2 لاكاسا
5: 4 بطيخ`,dialogue:"4 مانجو بـ 100 بدل 160.. 4 مانجو كنتالوب بـ 100 بدل 200.. 4 مانجو خوخ بـ 120 بدل 200.. 2 مانجاوي أو 2 لاكاسا بـ 100 بدل 120.. و 4 بطيخ بـ 100 بدل 160.",sfx:"أصوات ثلج مع صب العصير متناسقة مع إيقاع الكلام."},{num:"اللقطة 04",visual:"المتحدث بياخد رشفة من واحدة من الكوبايات ويهز رأسه باستحسان ورضا.",dialogue:"عصير بيور ثقيل وبأسعار ما تتقارنش.",sfx:"صوت رشفة قوية وتناهيد انتعاش."},{num:"اللقطة 05",visual:"المتحدث بيشاور بالكوباية للكاميرا بابتسامة.",dialogue:"مستني إيه تعال جرب عروض الافتتاح في الخلاط بيور."}]},khalat_pdf_test:{id:"khalat_pdf_test",client:"الخلاط بيور · طهطا",title:"سكريبت ريل الخلاط (test)",badge:"ريل تجريبي",type:"concepts",hook:"فكرتان إبداعيتان للاختبار: تجربة الحواس الصوتية الفائقة (ASMR) ومطاردة المانجا البطلة مع الانتقالات السينمائية السريعة.",concepts:[{id:"idea_1",num:"الفكرة رقم 1",title:"The Sound of Freshness · الصوت اللي يخليك تحس بالطعم",badge:"ASMR & Sound Effects",duration:"20 - 25 ثانية",style:"الفيديو كله هيعتمد على الـ Sound Effects و ASMR.",scenes:[{num:"المشهد الأول (0:00)",visual:"لقطة مانجا على ترابيزة.",dialogue:"—",sfx:"صوت المانجا وهي بتتحط على الرخامة."},{num:"المشهد الثاني",visual:"سكينة بتقطع المانجا (كلوز أب).",dialogue:"—",sfx:"تك... تك... تك..."},{num:"المشهد الثالث",visual:"المانجا بتنزل في الخلاط.",dialogue:"—",sfx:"طط..."},{num:"المشهد الرابع",visual:"نزول قطع الثلج المكعبة.",dialogue:"—",sfx:"Clink... Clink..."},{num:"المشهد الخامس",visual:"العصير بيتصب بالحركة البطيئة (Slow Motion).",dialogue:"—",sfx:"Gluuuuush..."},{num:"المشهد السادس",visual:"Splash قوي للعصير (كلوز أب).",dialogue:"—",sfx:"Splash"},{num:"المشهد السابع",visual:"الكوب بيتحط على الترابيزة بثبات.",dialogue:"—",sfx:"Tok"},{num:"المشهد الثامن",visual:"الشفاطة تدخل في الكوب.",dialogue:"—",sfx:"Pop"},{num:"المشهد التاسع",visual:"تكثيف قطرات الماء الباردة على الكوب (Drops).",dialogue:"—",sfx:"قطرات مية."},{num:"النهاية",visual:"كلوز أب أخير وظهور النص الختامي على الشاشة.",dialogue:'النص يظهر: "لو مانجا... يبقى من الخلاط."',sfx:"نغمة هادئة واستقرار."}]},{id:"idea_2",num:"الفكرة رقم 2",title:"المطاردة | The Chase",badge:"سرد بصري وانتقالات حركية",duration:"20 - 25 ثانية",style:"المانجا هي البطلة.. مش بنعرض عصير، إحنا بنخلي المشاهد يجري ورا المانجا.",hook:'شاشة سودا... صوت... "طخ!" مانجا تقع على الترابيزة، الكاميرا تهتز Shake بسيط، ثم Jump Cut.. المانجا اختفت! لقطة لإيد بتحاول تمسكها لكن المانجا بتتدحرج Rolling... Rolling... Rolling... المشاهد هيقول: هي رايحة فين؟ وده هو الـ Hook.',transitionsChain:[{step:"1",action:"المانجا تقع",transition:"تدخل في Transition ⬅ نلاقيها على لوح التقطيع تتقطع"},{step:"2",action:"تتقطع المانجا",transition:"Transition سريع"},{step:"3",action:"تقع في الخلاط",transition:"Transition حركي مع السقوط"},{step:"4",action:"يتصب اللبن",transition:"Transition انسكاب"},{step:"5",action:"نزول الثلج",transition:"Transition مع حركة المكعبات"},{step:"6",action:"تشغيل الخلاط",transition:"Transition دوامي"},{step:"7",action:"صب العصير",transition:"Transition مع تدفق القوام الثقيل"},{step:"8",action:"استقرار الكوب",transition:"Transition ختامي"}],keyRule:"كل Transition سببه حركة المانجا. يعني المانجا هي اللي بتقود الفيلم.",ending:'الكوب يتحط.. كل حاجة تسكت.. ثانيتين صمت تام (Silence).. الإيد تشرب.. ثم يظهر النص: "كانت رحلة تستحق." ثم يظهر اللوجو: "الخلاط".'}]},khalat_launch:{id:"khalat_launch",client:"الخلاط بيور · طهطا",title:"Store Launch Plan 2 الخلاط",badge:"خطة افتتاح الفرع",type:"launch_plan",strategy:"خطة إطلاق وتصوير شاملة مقسمة يومياً بمراحلها الثلاث: قبل الافتتاح (Pre-Launch)، يوم الافتتاح الكبير (Launch Day)، ومرحلة ما بعد الافتتاح (Post-Launch)، مع توزيع المهام التنفيذية للمصور، مصمم الجرافيك، المونتير، وإدارة السوشيال ميديا.",days:[{id:"sunday",dayName:"الأحد · Pre-Launch (قبل الافتتاح)",phase:"المرحلة الأولى: قبل الافتتاح",goal:"خلق فضول بدون ما نكشف كل حاجة (Reel Teaser + Story Countdown).",badge:"تشويق وفضول",mainContent:{type:"Reel Teaser",duration:"8–10 ثوانٍ",concept:"رحلة المانجا تبدأ من الطبيعة... وتنتهي برسالة تشويقية عن اقتراب الافتتاح.",scenes:[{num:"المشهد الأول | Hook (0:00 – 0:02)",visual:"لقطة سينمائية لشجرة مانجا مع حركة أوراقها، ثم سقوط ثمرة مانجا بـ Slow Motion.",sfx:"صوت الرياح، أصوات عصافير، صوت سقوط المانجا.",text:"ليست كل مانجا... تنتهي بنفس الحكاية."},{num:"المشهد الثاني (0:02 – 0:05)",visual:"لقطات سريعة: المانجا تدور، رذاذ مياه، Splash مانجا، انتقالات سريعة.",sfx:"Water Splash, Whoosh."},{num:"المشهد الثالث (0:05 – 0:08)",visual:"لقطة سينمائية لكوب مانجا فاخر، تكثيف على الكوب، قطرات مياه، إضاءة صيفية."},{num:"النهاية (0:08 – 0:10)",visual:"خلفية سوداء، يظهر اللوجو، ثم النص الختامي.",text:"قريبًا... افتتاح الخلاط."}]},tasks:{designer:["Story 01: شيء مختلف يقترب... خلفية صيفية بألوان المانجا.","Story 02: Countdown Sticker — النص: العد التنازلي بدأ...",'Reel Cover: عنوان "قريبًا..." بألوان هوية الخلاط (أصفر + برتقالي + أخضر).'],editor:{style:"Cinematic, Fast Cuts, Dynamic Transitions, Speed Ramping, Motion Blur.",audio:"Sound Design فقط (بدون موسيقى).",tools:"AI Video, Motion Graphics, Sound Effects."}}},{id:"monday",dayName:"الاثنين · Behind The Scenes (التعريف بالمكان)",phase:"المرحلة الأولى: قبل الافتتاح",goal:"التعريف بالمكان وتجهيزات الافتتاح وتجهيز العصائر وكواليس التحضير.",badge:"كواليس وتفاصيل",mainContent:{type:"Reel | Behind The Scenes",duration:"20–30 ثانية",concept:'"كل تفصيلة بتتجهز علشان أول زيارة ليك تكون تجربة تستحق." الفيديو مش بيعرض المحل كامل، لكنه بيوري الجمهور إن كل حاجة بتتجهز بعناية.',scenes:[{num:"المشهد الأول | Hook (0:00 - 0:03)",visual:"لقطات سريعة جدًا: فتح باب المحل، تشغيل الإضاءة، تشغيل ماكينة الخلاط.",text:"البداية... بتبدأ من التفاصيل."},{num:"المشهد الثاني (تجهيز المكان)",visual:"تنظيف الكاونتر، ترتيب الكوبايات، تجهيز الفواكه، ترتيب المنيو والثلاجات، تعليق آخر لمسات الديكور."},{num:"المشهد الثالث (تحضير المنتجات)",visual:"غسل المانجا، تقطيع الفاكهة، تجهيز المكونات، ترتيب العبوات."},{num:"المشهد الرابع (الكادر الواسع)",visual:"لقطة واسعة للمحل (بدون كشف كل التفاصيل لو حابين يفضل في عنصر مفاجأة)."},{num:"النهاية",visual:"ظهور اللوجو والنص التشويقي لموعد الافتتاح.",text:"باقي 3 أيام..."}]},tasks:{videographer:["المكان: واجهة المحل، اللوحة، الكاونتر، الثلاجات، الديكور، تفاصيل الهوية البصرية.","الكواليس: تنظيف المكان، ترتيب الأدوات، تجهيز الفواكه، ترتيب الكوبايات، تشغيل الأجهزة.","التفاصيل (Detail Shots): لوجو على الكوب، ماكينة الخلاط، الثلج، الفواكه، المنيو (لقطات جزئية)."],designer:['Story 01: صورة من داخل المحل مع النص: "كل تفصيلة بتتجهز... علشان نستقبلكم بأفضل شكل."',"Story 02: Countdown Sticker — باقي 3 أيام.",'Post (اختياري): صورة للمحل مع تعليق: "الاستعدادات مستمرة... والموعد اقترب."'],editor:{style:"Cinematic, Smooth Transitions, Speed Ramping, Slow Motion في بعض اللقطات.",audio:"Sound Design خفيف (أصوات المكان، تشغيل الأجهزة، ترتيب الأدوات) بدون موسيقى صاخبة أو بموسيقى هادئة جدًا."}}},{id:"tuesday",dayName:"الثلاثاء · Mango Experience (التشويق للمنتجات)",phase:"المرحلة الأولى: قبل الافتتاح",goal:"التشويق للمنتجات، ريل احترافي للمانجا، صور المنتجات، واستطلاع رأي (Poll) في الستوري.",badge:"عشق المانجا",mainContent:{type:"Reel | Mango Experience",duration:"20–30 ثانية",concept:'مش فيديو بيوري العصير... فيديو يخلي المشاهد "يسمع" و"يحس" بالمانجا، معتمد على Close-up و Slow Motion و Sound Effects و Color Grading دافئ (بدون كلام وبدون موسيقى).',scenes:[{num:"المشهد الأول | Hook (0:00 - 0:03)",visual:"لقطة سريعة لسكينة وهي تقطع مانجا ناضجة (SFX صوت تقطيع المانجا)، ثم مباشرة لقطة عصير مانجا بيتصب بـ Slow Motion.",text:"موسم المانجا... بدأ."},{num:"المشهد الثاني (سلسلة التحضير)",visual:"لقطات متتابعة: مانجا Fresh، مكعبات تلج، صب اللبن، تشغيل الخلاط، دوران العصير، Close-up للقوام الكثيف."},{num:"المشهد الثالث (المنتج النهائي)",visual:"لقطات المنتج النهائي: قطرات على الكوب، تكثيف، تفاصيل اللوجو، لمسة نهائية احترافية."},{num:"النهاية",visual:"ظهور المنتجات بشكل سريع ومبهر، ثم الإعلان عن يوم الخميس.",text:"مستنيينكم الخميس."}]},tasks:{videographer:["تصوير المنتجات: مانجا كاملة، تقطيع المانجا، وضع المكونات داخل الخلاط، تشغيل الخلاط، صب العصير، تفاصيل الكوب، تكثيف الكوب، Splash إن أمكن.","Detail Shots: اللوجو على الكوب، يد ماسكة الكوب، قوام العصير، قطع المانجا بجانب المنتج."],designer:['Story 01: صورة منتج مع نص: "أول كوب هتجربه هيكون إيه؟"',"Story 02 (Poll): هتبدأ بإيه؟ (مانجاوي / لاكاسا / شيكر / قشطوطة بالمانجا).",'Story 03: صورة مقربة للمنتج مع نص: "باقي يومين".','Post (Carousel): صور احترافية للمنتج تحت عنوان: "لأن موسم المانجا يستحق بداية مختلفة."'],editor:{style:"Premium Food Commercial, Fast Cuts, Slow Motion, Macro Shots, Color Grading دافئ يبرز لون المانجا الطبيعي.",audio:"Sound Design فقط: تقطيع المانجا، سقوط الثلج، صب اللبن، تشغيل الخلاط، صب العصير، وضع الكوب على الطاولة."}}},{id:"wednesday",dayName:"الأربعاء · Tomorrow is the Day (الإحساس بالاستعجال)",phase:"المرحلة الأولى: قبل الافتتاح",goal:"خلق حالة ترقب حماسية واستعجال (Countdown 24H، تجهيزات آخر يوم، وفيديو إعلان موعد الغد).",badge:"باقي 24 ساعة",mainContent:{type:"Reel | Tomorrow is the Day",duration:"15–20 ثانية",concept:"عرض آخر لمسات التجهيز بإيقاع سريع وحماسي، وكأن المحل يستعد لاستقبال أول زواره في الصباح الباكر.",scenes:[{num:"المشهد الأول | Hook (0:00 – 0:03)",visual:"شاشة سوداء يظهر عليها رقم كبير (24H) مع صوت عداد الوقت Tick... Tick... Tick... ثم Cut خاطف سريع.",text:"غدًا تبدأ الحكاية."},{num:"المشهد الثاني (اللمسات الأخيرة)",visual:"لقطات سريعة: تشغيل الإضاءة، ترتيب الكوبايات، تجهيز الفاكهة، تنظيف الكاونتر، وضع آخر لمسات على المكان."},{num:"المشهد الثالث (منتجات فريش)",visual:"لقطات للمنتجات: مانجا Fresh، العصير بيتصب بقوام ثقيل، الكوب بيتحط على الكاونتر بثقة."},{num:"النهاية",visual:"ظهور واجهة المحل كاملة، ثم اللوجو مع النص الحاسم.",text:"📍 غدًا... ننتظركم."}]},tasks:{videographer:["لقطات المكان: الواجهة كاملة، اللوحة، الديكور النهائي، الكاونتر بعد التجهيز، المنيو (لقطات سريعة).","لقطات الكواليس: ترتيب المنتجات، تجهيز الفواكه، ملء الثلاجات، آخر لمسات قبل الافتتاح.","لقطات المنتجات: الكوب النهائي، تفاصيل المانجا، صب العصير، لقطة Hero لكل منتج أساسي."],designer:['Story 01: خلفية بسيطة مع نص: "⏳ باقي 24 ساعة."','Story 02: Countdown Sticker مع نص: "بكرة البداية."','Story 03: صورة المنتج مع نص: "جاهزين لأول كوب؟"','Post: تصميم إعلاني أنيق بعنوان: "غدًا... نفتح أبوابنا ونستقبلكم."'],editor:{style:"Fast Pace, Cinematic, Dynamic Cuts, Speed Ramping, Sound Design احترافي.",audio:"مؤثرات: Tick Clock، فتح الباب، تشغيل الإضاءة، تشغيل الخلاط، صب العصير، وضع الكوب على الطاولة."}}},{id:"thursday",dayName:"الخميس · Launch Day (يوم الافتتاح الكبير)",phase:"المرحلة الثانية: يوم الافتتاح الكبير",goal:"أهم يوم تصوير وتغطية: الزحمة، أول عميل، أول أوردر، ردود فعل الناس، الكواليس، تصوير المحل والمنتجات، ومقابلات سريعة.",badge:"يوم الافتتاح الكبير 🔥",mainContent:{type:"Reel 01 | Grand Opening",duration:"30–45 ثانية",concept:"يبدأ الريل بمشهد هادئ للمحل، ثم يتحول تدريجيًا إلى أجواء الافتتاح، الزحام، تحضير الطلبات بسرعة، وينتهي بابتسامات ورضا العملاء.",scenes:[{num:"المشهد الأول | Hook (0:00 - 0:03)",visual:"باب المحل وهو بيتفتح، أول إضاءة تشتغل، لقطة اللوحة المضيئة في الصباح.",text:"أخيرًا... اليوم المنتظر."},{num:"المشهد الثاني (الضربة الأولى)",visual:"دخول أول عميل، تسجيل أول طلب، وخروج أول كوب عصير طازج من يد الباريستا."},{num:"المشهد الثالث (أجواء الزحام)",visual:"الزحمة في المحل، الناس بتستلم أوردراتها، تحضير الطلبات بسرعة وخفة، الكاشير وفريق العمل يداً واحدة."},{num:"المشهد الرابع (لقطات سينمائية للمنتجات)",visual:"صب العصير، Close-up مركز، Slow Motion، وتفاصيل الأكواب والتوبينج الفاخر."},{num:"المشهد الخامس (سعادة العملاء)",visual:"ردود فعل العملاء العفوية: ضحكة، أول رشفة استمتاع، وهز الرأس برضا كامل."},{num:"النهاية",visual:"لقطة جماعية واسعة للمحل، ظهور اللوجو وشكر الجمهور.",text:"شكرًا لكل اللي شاركونا البداية. ❤️"}]},tasks:{videographer:["المكان: واجهة المحل نهارًا وليلاً، اللوحة، الديكور، المنيو، الكاونتر، منطقة التحضير.","المنتجات: تصوير كل منتج بـ Hero Shot و Close-up و Top View و Side View و Slow Motion أثناء الصب وتفاصيل المكونات والكوب النهائي.","فريق العمل: استقبال العملاء، تحضير الطلبات، تشغيل الخلاط، تسليم الأوردر، والتعامل الراقي مع الحضور.","العملاء: أول عميل يدخل، أول عملية شراء، أول استلام، أول رشفة، ابتسامات، أطفال، وتجمعات الأصحاب.","الكواليس: تجهيز الطلبات، ترتيب المنتجات، ضغط الشغل الإيجابي، الحركة السريعة داخل المحل، والتعاون المثمر بين الفريق."],testimonials:{title:"مقابلات سريعة مع الزوار (Customer Testimonials)",duration:"10–15 ثانية لكل عميل",questions:["1. إيه أول منتج اخترته وجربته النهاردة؟","2. إيه أكتر حاجة لفتت انتباهك في المكان والعصير؟","3. إيه تقييمك الحقيقي والصادق للطعم والقوام؟","4. هترشح الخلاط بيور لمين من صحابك وعيلتك؟"],note:"مهم جدًا: تكون الإجابات عفوية وطبيعية تماماً، بدون أي تلقين أو حفظ مسبق."},designer:["Stories تنشر على مدار اليوم: 🎉 النهارده الافتتاح · المحل جاهز لاستقبالكم · أول عميل دخل · أول أوردر بيطلع · أجواء الافتتاح والزحمة · شكرًا لكل اللي حضر.",'Post رئيسي: "البداية كانت معاكم... وشكرًا لكل حد شاركنا أول يوم. ❤️"'],editor:{reels:["Reel 01: ملخص يوم الافتتاح الحماسي (30–45 ثانية).","Reel 02: فيديو ردود فعل وآراء العملاء (Testimonials).","Reel 03: لقطات سينمائية للمنتجات الفريش (Cinematic Product Shots).","Reel 04 (اختياري): كواليس وتجهيزات الفريق وضغط اليوم (Behind The Scenes)."]}}},{id:"post_launch",dayName:"بعد الافتتاح · Post-Launch (شكر وترسيخ المحتوى)",phase:"المرحلة الثالثة: ما بعد الافتتاح",goal:"تثبيت النجاح، نشر بوست الشكر، ريل الهايلايتس، وتفعيل محتوى العملاء ومشاركاتهم (UGC).",badge:"شكر وترسيخ النجاح",tasks:{designer:[`Thank You Post: بوست شكر رسمي مع الكوبي المعتمد: "شكرًا لكل حد شاركنا أول يوم.. وجودكم كان أفضل بداية لرحلة 'الخلاط' ومستنينكم كل يوم مع تجربة منعشة ومنتجات بجودة تستحقها."`,'2 تصميم Story: "شكرًا لكل اللي حضروا الافتتاح" + صورة عالية الجودة من أجواء اليوم الحاشدة.'],editor:{reelTitle:"Reel | Opening Highlights",duration:"30–45 ثانية",content:'أفضل لقطات الافتتاح، الزحمة والبهجة، تحضير العصائر الكثيفة، جمال المنتجات، ضحكات العملاء، أول رشفة منعشة، وتفاصيل المكان.. والختام: "البداية كانت معاكم ❤️".'},socialMedia:["إعادة نشر محتوى العملاء (UGC): إعادة نشر أي Story أو صورة أو Reel ينزله العملاء ويعملوا فيه Mention لحساب الخلاط بيور.",'تشجيع الجمهور على التفاعل والمشاركة: نشر Story تفاعلية بعنوان: "صورت تجربتك؟ اعمل لنا منشن... ويمكن تكون موجود في الستوري الجاية!"',"المحتوى المعتمد للنشر والتغذية البصرية: صور العملاء، صور المنتجات، فيديوهات الافتتاح، ردود أفعال الناس، وكواليس فريق العمل."]}}]},khalat_august:{id:"khalat_august",client:"الخلاط بيور · طهطا",title:"بلان شهر 8",badge:"بلان شهر 8",type:"sheet_plan",headers:["الأسبوع","نوع المحتوى","الموضوع","الهدف"],rows:[["الأسبوع الأول","ريل فيديو","ليه الخلاط وليه بالذات بيور","ترسيخ الهوية الطبيعية"],["الأسبوع الثاني","بوست تفاعلي","منيو المانجا وميكسات الصيف","تنشيط الطلب على المانجا"],["الأسبوع الثالث","ريل ASMR","صوت الانتعاش وقرمشة الوافل","تحفيز الحواس وتجربة المكان"],["الأسبوع الرابع","بوست عروض","خدمة الدليفري السريع بطهطا","زيادة طلبات المنازل"]]},khalat_pdf:{id:"khalat_pdf",client:"الخلاط بيور · طهطا",title:"كامبين افتتاح الخلاط بيور",badge:"ملف الكامبين",type:"pdf_deck",images:["image/campaign/page-01.jpg","image/campaign/page-02.jpg","image/campaign/page-03.jpg","image/campaign/page-04.jpg","image/campaign/page-05.jpg","image/campaign/page-06.jpg","image/campaign/page-07.jpg","image/campaign/page-08.jpg","image/campaign/page-09.jpg","image/campaign/page-10.jpg","image/campaign/page-11.jpg","image/campaign/page-12.jpg"]},pold_reel1:{id:"pold_reel1",client:"مطعم بولد · Pold",title:"ريل آراء الناس في الشارع 🎤",badge:"ريل 01",type:"script",duration:"40 – 50 ثانية",hook:"جبنا ساندوتشات Pold الجديدة للشارع… وقلنا الناس هي اللي تحكم.",audio:"موسيقى شارع حماسية وتفاعلية سريعة (Street Beats) تتناغم مع ردود الأفعال العفوية وأصوات الـ ASMR للقرمشة.",cta:"جرّب الجديد من Pold ، وقولنا رأيك بنفسك!",scenes:[{num:"المشهد 1 | الـ Hook (أول 3 ثواني)",visual:`لقطات سينمائية سريعة وClose-ups لناس في الشارع وهم بياخدوا أول قضمة مع حركات انبهار طبيعية.
• حركة الكاميرا: Quick Montage Cuts ⬅ Medium Shot على المذيع وهو بيخاطب الكاميرا مباشرة.`,dialogue:'المقدم للكاميرا: "جبنا ساندوتشات Pold الجديدة للشارع… وقلنا الناس هي اللي تحكم!"',sfx:"صوت قرمشة سريعة مع انطلاق بيت المزيكا الحماسي."},{num:"المشهد 2 | قبل التجربة واختبار المعرفة",visual:`المقدم يقف مع أشخاص في الشارع، يسألهم بعفوية، ثم يخرج ساندوتش من الساندوتشات الـ 4 الجديدة ويسلمه للشخص بابتسامة تشويق.
• حركة الكاميرا: Over-the-shoulder ⬅ Two-Shot.`,dialogue:`المقدم يسأل شخص: "جربت Pold قبل كده؟"
• لو قال: "آه" ⬅ "طب إيه أكتر حاجة بتحبها فيه؟"
• لو قال: "لأ" ⬅ "يبقى النهارده هتجربه لأول مرة!"
(ثم يسلمه ساندوتش من الجديد).`},{num:"المشهد 3 | لحظة التذوق والانبهار (First Bite)",visual:`لقطات Close-up مقربة جداً على أول قضمة مع صوص بيسيل وتعبيرات وجه عفوية وردود فعل فورية بدون أي تمثيل.
• حركة الكاميرا: Extreme Close-up على القضمة ⬅ Reaction Shot على الوجه.`,dialogue:`المقدم: "أول رأي جه في دماغك؟"
ردود سريعة ومتنوعة من أكثر من شخص:
• "جامد!"
• "الصوص مختلف."
• "ده أحلى حاجة جربتها."
• "أنا محتاج واحد تاني 😂"`,sfx:"ASMR صوت أول قضمة مع ردود فعل وضحكات طبيعية."},{num:"المشهد 4 | سؤال المفاجأة (بولد في كلمة واحدة)",visual:`بعد ما نجمع ردود الأفعال، المقدم يسأل السؤال المفاجئ، ونقطع بين الأشخاص بسرعة فائقة (Jump Cuts).
• حركة الكاميرا: Fast Cuts متتالية بين وجوه مختلفة في الشارع.`,dialogue:`المقدم: "طب لو هتوصف Pold في كلمة واحدة؟"
(تقطيع سريع بين الناس وكل شخص يقول كلمة مختلفة).`},{num:"المشهد 5 | النهاية وحكم الجمهور",visual:`لقطات Hero Shot جمالية ومغرية للساندوتشات الأربعة الجديدة مع أفضل Reaction عفوي ومتحمس من الجمهور.
• لقطة ختامية: Packshot سينمائي للمنتجات مع إعلان اسم البراند.`,dialogue:'Voice Over: "إحنا عملنا الساندوتشات… لكن الحكم في الآخر ليكم."',cta:"جرّب الجديد من Pold ، وقولنا رأيك بنفسك!"}]},pold_reel2:{id:"pold_reel2",client:"مطعم بولد · Pold",title:"ريل رحلة الأوردر من المطبخ للعميل 🛵",badge:"ريل 02",type:"script",duration:"40 – 45 ثانية",hook:"الأوردر ده لسه خارج من هنا… بعد كام دقيقة هيكون في إيد صاحبه, تعالوا نمشي معاه الرحلة.",audio:"إيقاع سريع وتصاعدي متناسق مع خطوات تجهيز الطلب وانطلاق الدليفري، مع تركيز دقيق على المؤثرات الصوتية (ASMR المطبخ والشارع).",cta:"مستني ايه؟ … اطلب حالا من Pold.",scenes:[{num:"المشهد 1 | الـ Hook (نقطة الانطلاق)",visual:`لقطة مقربة جداً وديناميكية لأوردر ساخن يخرج فوراً من شباك المطبخ في يد الكاشير/المسؤول.
• حركة الكاميرا: Tracking Shot سريع للأوردر.`,dialogue:'صوت الراوي / المذيع: "الأوردر ده لسه خارج من هنا… بعد كام دقيقة هيكون في إيد صاحبه, تعالوا نمشي معاه الرحلة!"',sfx:"صوت جرس الأوردر + صوت تغليف الكيس السريع."},{num:"المشهد 2 | بداية الحكاية واستقبال الطلب",visual:`شاشة الكاشير / رنين الهاتف ⬅ تذكرة الأوردر تنطبع وتدخل المطبخ ⬅ الشيف يستلم ويبدأ فوراً في تجهيز قطع الفراخ الطازجة.
• حركة الكاميرا: Whip Pan من شاشة الطلب إلى طاولة الشيف.`,dialogue:'"كل حاجة بدأت بمكالمة… وأول ما الأوردر وصل، يبدأ الشغل."',sfx:"صوت طابعة الفواتير + لهيب الشواية وأصوات المطبخ الحيّة."},{num:"المشهد 3 | فن التحضير والتفاصيل الدقيقة",visual:`مونتاج سينمائي سريع: الفراخ المقرمشة الذهبية وهي تخرج من القلاية ⬅ صوصات Pold الغنية تتوزع بسلاسة ⬅ تركيب طبقات الساندوتش الفاخر بإتقان.
• حركة الكاميرا: Macro Shots مقربة على الصوص وتناسق المكونات.`,dialogue:'"الفراخ اتجهزت، الساندوتش اتعمل، وكل تفصيلة أخدت مكانها."',sfx:"صوت القرمشة الفورية + طشة الصوص ووضع غطاء الخبز."},{num:"المشهد 4 | التغليف والانطلاق الصاروخي",visual:`تغليف الساندوتش والبوكس بإحكام وعناية ⬅ تسليم الباج للدليفري بابتسامة وسرعة ⬅ الدليفري يشغل الموتوسيكل وينطلق في شوارع المدينة.
• حركة الكاميرا: Follow Shot للدليفري وهو يتحرك بالدراجة.`,dialogue:'"وبمجرد ما بقى جاهز… اتحرك على طول لصاحبه."',sfx:"صوت لصق استيكر البولد + صوت محرك الموتوسيكل وهو ينطلق."},{num:"المشهد 5 | لحظة الوصول وأول قضمة (النهاية)",visual:`الدليفري يسلم الأوردر للعميل عند الباب ⬅ العميل يفتح البوكس بحماس ويخرج البخار الشهي ⬅ أول قضمة وسعادة واضحة على وجهه.
• حركة الكاميرا: Eye-level Shot على وجه العميل وسعادته بالطعم الساخن.`,dialogue:'"ومن أول مكالمة… لأول قضمة, دي كانت رحلة أوردر Pold."',cta:"مستني ايه؟ … اطلب حالا من Pold!"}]},pold_reel3:{id:"pold_reel3",client:"مطعم بولد · Pold",title:"كواليس تجهيز الساندوتشات الجديدة 👨‍🍳",badge:"ريل 03",type:"script",duration:"40 – 50 ثانية",hook:"شايفين الـ4 ساندوتشات الجديدة؟ طب تعرفوا كام مرة غيرناهم قبل ما يوصلوا بالشكل ده؟",audio:"موسيقى وثائقية خفيفة وعصرية تدمج بين إيقاع التركيز وصوت العمل المطبخي والمؤثرات الإبداعية.",cta:"دلوقتي إحنا عرفناهم… ناقص إنتم تجربوهم. أنهي واحد هيكون أول اختيارك؟",scenes:[{num:"المشهد 1 | الـ Hook (0 – 4 ثواني)",visual:`لقطات سريعة جداً وخاطفة: مكونات طازجة مفرودة على الترابيزة + شيف محترف يدقق ويجهز + لقطة Teaser سريعة جداً لساندوتش أسطوري بدون ما يظهر كامل.
• حركة الكاميرا: Rapid Flash Cuts.`,dialogue:'"شايفين الـ4 ساندوتشات الجديدة؟ طب تعرفوا كام مرة غيرناهم قبل ما يوصلوا بالشكل ده؟"',sfx:"أصوات حركة سريعة Whoosh متتالية."},{num:"المشهد 2 | بداية الحكاية والفكرة (4 – 12 ثانية)",visual:`تجهيز مكونات فريدة، تجربة درجات حرارة، صب وتجربة صوصات جديدة، شيف وفريق التطوير يقفون ويدققون ويعدلون مكون في الوصفة.
• حركة الكاميرا: Slow Dolly In نحو طاولة التجارب والتذوق.`,dialogue:'"الموضوع ماكانش مجرد إننا نحط مكونات جديدة بين عيش وخلاص… كل واحد فيهم بدأ بفكرة."',sfx:"أصوات التحضير والمناقشة الاحترافية الهادئة."},{num:"المشهد 3 | معمل التجارب والتعديل (12 – 25 ثانية)",visual:`سلسلة من التجارب المكثفة: تغيير أنواع الخبز، إضافة صوص سري مختلف، تبديل ترتيب طبقات المكونات، زوايا Close-up دقيقة على التفاصيل وإعادة التحضير.
• حركة الكاميرا: Dynamic Macro Shots بزوايا إبداعية متعددة.`,dialogue:'"نجرب… نغيّر… ونرجع نجرب تاني. مكونات بتدخل، ومكونات بتطلع، وطعم لسه محتاج حاجة."',sfx:"أصوات خفق، قرمشة تجريبية، ومؤثرات تحول وانتقال."},{num:"المشهد 4 | لحظة القرار والاعتماد (25 – 37 ثانية)",visual:`جلسة تذوق جماعية من أكثر من شخص في الفريق ⬅ نظرات تركيز ⬅ ابتسامات انبهار ورضا تام ⬅ اعتماد الوصفة وتجهيز النسخة النهائية بكل فخر.
• حركة الكاميرا: Reaction Shots مركزة على تعابير الوجه والإيماءة بالموافقة.`,dialogue:'"لحد ما وصلنا للحظة اللي قلنا فيها… أيوه، كده ينفع يدخل المنيو!"',sfx:"نغمة تصاعدية إيجابية وتأكيدية."},{num:"المشهد 5 | الـ Reveal الكبير والشخصيات (37 – 45 ثانية)",visual:`لقطات Hero سينمائية باهرة ومضاءة باحترافية لكل ساندوتش على حدة، مع حركة كاميرا دائرية وظهور اسم كل ساندوتش بتصميم جرافيك أنيق على الشاشة.
• حركة الكاميرا: 360 Turntable / Orbiting Shot لكل ساندوتش.`,dialogue:'"ومن هنا… بدأت الحكاية. 4 ساندوتشات جديدة… وكل واحد فيهم له شخصيته وطعمه!"',textOnScreen:"أسماء الـ 4 ساندوتشات تظهر تباعاً بحركات Typography عصرية."},{num:"المشهد 6 | الخاتمة والـ CTA (45 – 50 ثانية)",visual:`لقطة Hero Packshot تجمع الـ 4 ساندوتشات مع بعض في كادر واحد متكامل ومبهر، مع ظهور عروضهم ولوجو بولد.
• حركة الكاميرا: Steady Wide Hero Shot متقنة.`,dialogue:'"دلوقتي إحنا عرفناهم… ناقص إنتم تجربوهم. أنهي واحد هيكون أول اختيارك؟"',cta:"أنهي واحد هيكون أول اختيارك من تشكيلة بولد الجديدة؟"}]},pold_reel4:{id:"pold_reel4",client:"مطعم بولد · Pold",title:"مش كل اللي بيتقال عليه بولد… بولد 👑",badge:"ريل 04",type:"script",duration:"45 – 55 ثانية",hook:"تعالوا أحكيلكم إزاي الناس طلبت أكل من بولد... بس الأكل ماكانش من بولد أصلًا.",audio:"موسيقى Storytelling غموضية وتشويقية خفيفة تتحول تدريجياً لبيت إيقاعي واثق وقوي يعبر عن أصالة وقوة البراند.",cta:"طب ايه ؟ تعالى اطلب من بولد الحقيقي بقا!",scenes:[{num:"المشهد 1 | الـ Hook والبداية المشوقة",visual:`شخص من فريق بولد أو المتحدث داخل المطبخ، يجهز ساندوتش بطريقة احترافية وطبيعية جداً، يتحدث بعفوية وألفة بدون النظر للكاميرا طوال الوقت.
• حركة الكاميرا: Medium Shot مع حركة طبيعية تتتبع يديه والمكونات.`,dialogue:'"تعالوا أحكيلكم إزاي الناس طلبت أكل من بولد... بس الأكل ماكانش من بولد أصلًا!"',sfx:"أصوات تحضير الساندوتش الطبيعية ولمسات الصوص."},{num:"المشهد 2 | خلفية القصة وما حدث",visual:`Cut إلى زاوية أقرب أثناء تجهيز الساندوتش ⬅ لقطات B-roll سريعة من المطبخ: الصوصات، التغليف، وتجهيز الطلبات.
• حركة الكاميرا: Over-the-shoulder Close-up.`,dialogue:'"في فترة كنا قافلين فيها عشان بنجدد المكان ونعمل ريبراندنج كامل لبولد، اتفتح مطعم جديد جنبنا… وكان في ناس من الاستاف اللي كانوا شغالين معانا راحوا يشتغلوا هناك."'},{num:"المشهد 3 | لحظة سوء التفاهم والمواجهة",visual:`المتحدث يكمل تجهيز الأوردر وهو يروي الموقف بابتسامة وتأثر حقيقي ⬅ لقطة Reaction سريعة ومفاجئة للشخص.
• حركة الكاميرا: Cut سريع إلى وجه المتحدث.`,dialogue:`"في يوم، واحد جه لنا متضايق جدًا وبيقول: 'إيه اللي حصل في الأكل؟ ده مش الأكل اللي إحنا متعودين عليه منكم!!!'
فاستغربنا... وقلنا له: 'إنت جبت منين؟ إحنا أصلًا قافلين!!'
قال لنا: 'من بولد... الفرع التاني بتاعكم!!'"`,sfx:"سكتة صوتية مفاجئة (Record scratch أو Dramatic Hit خفيف)."},{num:"المشهد 4 | كشف الحقيقة والمفارقة",visual:`مونتاج حركي: لقطة سريعة للساندوتش الفاخر الحقيقي ⬅ لقطة للمكان وتفاصيل الهوية الأصلية ⬅ تعبير فهم للموقف.
• حركة الكاميرا: Whip Pan سريع وديناميكي.`,dialogue:`"وساعتها فهمنا إن الناس افتكرت إن المطعم ده فرع تاني لبولد... بسبب إن الاستاف كان شغال معانا والمطعم جنبنا.
فوضحنا له الحقيقة... إن ده مش فرع بولد، وإحنا وقتها أصلًا كنا قافلين للتجديد."`},{num:"المشهد 5 | القفلة الأصيلة وإثبات الهوية (النهاية)",visual:`المتحدث يقفل الساندوتش بإتقان أو يضعه في بوكس التغليف الأنيق، ويرفع رأسه وينظر للكاميرا مباشرة بثقة تامة ⬅ لقطة Hero للساندوتش النهائي المكتمل + ظهور لوجو Pold الذهبي الفاخر.
• حركة الكاميرا: Slow Push In على المتحدث ⬅ Hero Close-up على الساندوتش واللوجو.`,dialogue:'القفلة: "ومن يومها عرفنا إن مش كل حاجة عليها نفس الاستاف ونفس المنطقة... تبقى بولد!"',cta:"طب ايه ؟ تعالى اطلب من بولد الحقيقي بقا!"}]},pold_trends:{id:"pold_trends",client:"مطعم بولد · Pold",title:"أفكار وتريندات ريلز بولد 🔥",badge:"تريندات وسلوجانز",type:"trends_library",hook:"السلوجنز الرسمية المعتمدة لبراند بولد ومكتبة المراجع البصرية لأقوى أفكار الريلز على انستجرام.",trends:[{title:"سلوجان 01 · Pold... الطعم في Gold."},{title:"سلوجان 02 · Pold... Born Bold."},{title:"سلوجان 03 · Pold... لما الطعم يبقى Bold."},{title:"سلوجان 04 · Pold... Eat Bold."},{title:"فيديو مرجعي 01 (انستجرام)",link:"https://www.instagram.com/reel/DYNw1f3OJsK/?igsh=bDNhYWZzY2x3MGh5"},{title:"فيديو مرجعي 02 (انستجرام)",link:"https://www.instagram.com/reel/DaEib-qohZw/?igsh=MWRqZ2p6MjB6MTZnZQ"},{title:"فيديو مرجعي 03 (انستجرام)",link:"https://www.instagram.com/reel/DVjGMLJgkQ0/?igsh=MWM0dmIyeHE4NDY3bw"},{title:"فيديو مرجعي 04 (انستجرام)",link:"https://www.instagram.com/reel/DXebx_3uPiO/?igsh=MTd4cHdncXFrMjZ1dA"},{title:"فيديو مرجعي 05 (انستجرام)",link:"https://www.instagram.com/reel/DZ2yHTssr-D/?igsh=a2l2YzNueHMxM2Fv"},{title:"فيديو مرجعي 06 (انستجرام)",link:"https://www.instagram.com/reel/DXcOW9PCso8/?igsh=cTNqeW13cnl5cW10"},{title:"فيديو مرجعي 07 (انستجرام)",link:"https://www.instagram.com/p/DPkLuQ4ANVT/?igsh=MXAyYnV6cGg5ODdobg"},{title:"فيديو مرجعي 08 (انستجرام)",link:"https://www.instagram.com/reel/DY49Zn7o81m/?igsh=azRlampnY3VjaHp6"},{title:"فيديو مرجعي 09 (انستجرام)",link:"https://www.instagram.com/reel/DU8iwgZkToU/?igsh=NGZqajNrajJic2Z2"},{title:"فيديو مرجعي 10 (انستجرام)",link:"https://www.instagram.com/reel/DXutk5WkU3e/?igsh=YmJibmFrZDM2OXkw"},{title:"فيديو مرجعي 11 (انستجرام)",link:"https://www.instagram.com/reel/DXw1CnODxPf/?igsh=cTUxNTV6eWN0dGVu"},{title:"فيديو مرجعي 12 (انستجرام)",link:"https://www.instagram.com/reel/DZInIt9oPRn/?igsh=OXFhdWY2MTJnNXhi"},{title:"فيديو مرجعي 13 (انستجرام)",link:"https://www.instagram.com/p/DZiIbGbCgAS/?igsh=bGNqbDR5eWhmajJ6"},{title:"فيديو مرجعي 14 (انستجرام)",link:"https://www.instagram.com/reel/DZFw1PTMmNg/?igsh=MWdwaWpzbjJiMTV5Mw"},{title:"فيديو مرجعي 15 (انستجرام)",link:"https://www.instagram.com/reel/DY2ORJCsKCt/?igsh=MW84YnczOTI1Z292ag"},{title:"فيديو مرجعي 16 (انستجرام)",link:"https://www.instagram.com/reel/DZIWpyztSjw/?igsh=MTZhOXQyMTY3cW5seA"}]},pold_plan:{id:"pold_plan",client:"مطعم بولد · Pold",title:"بلان محتوى مطعم بولد",badge:"بلان المحتوى",type:"sheet_plan",hook:"خطة النشر وتوزيع الريلز والمنشورات التفاعلية وعروض الكومبو والتوصيل على مدار الشهر.",branchInfo:{location:"مطعم بولد · قسم البرجر والوجبات السريعة الفاخرة",phone:"خدمة الطلبات والتوصيل السريع",specialty:"Gourmet Burgers & Fast Casual Dining"},tables:[{title:"مصفوفة النشر وتوزيع البوستات والريلز (Pold Content Schedule)",headers:["نوع المحتوى","عنوان الحملة / المنشور","الهدف التسويقي","الرسالة الرئيسية"],rows:[["ريل فيروزي","آراء الناس في الشارع وتحدي التذوق","Social Proof & بناء ثقة","Pold... في الطعم Gold"],["بوست تفاعلي","مين صاحبك اللي مبيشبعش من ساندوتش واحد؟","زيادة التعليقات والمنشن","منشن لعشاق الدبل برجر"],["ريل ASMR","كواليس تجهيز الساندوتش وصوت الشواء","إثارة الشهية والطلب المباشر","Pold... Eat Bold"],["بوست عرض","عرض كومبو الويك إند (ساندوتش + بطاطس + كانز)","زيادة مبيعات نهاية الأسبوع","وفر واستمتع بالطعم الحقيقي"],["ريل دليفري","رحلة الأوردر من المطبخ لحد باب بيتك في دقائق","تعزيز ثقة خدمة الدليفري","سخن وبيقرمش واصلك لحد عندك"]]}]},omar_episodes:{id:"omar_episodes",client:"د/ عمر أبو الدهب · جراحة التجميل والترميم",title:"سلسلة نحت القوام (5 فيديوهات)",badge:"5 فيديوهات",type:"episodes",hook:"سلسلة حلقات طبية سينمائية يجيب فيها د. عمر أبو الدهب على تساؤلات المرضى حول شفط الدهون ونحت القوام والحمل وثبات الوزن.",episodes:[{title:"Episode 01 — إيه كمية الدهون اللي ينفع تتشفط؟",hook:"كل ما نشيل دهون أكتر... النتيجة هتبقى أحسن؟ لا طبعًا.",script:`Episode 01 | إيه كمية الدهون اللي ينفع تتشفط؟
Hook
كل ما نشيل دهون أكتر... النتيجة هتبقى أحسن؟  لا طبعًا.
Intro
أنا د. عمر أبو الدهب ، أخصائي جراحة التجميل.
Body
من أكتر الأسئلة اللي بتتسأل : هتشفطلي كام لتر دهون؟
والإجابة إن مفيش رقم ثابت يناسب كل الناس.
كمية الدهون اللي ينفع تتشال بتتحدد حسب وزنك ، حالتك الصحية ، ونسبة الدهون في جسمك ، والأهم إنها تكون كمية آمنة.
لأن الهدف مش إننا نشيل أكبر كمية دهون ، الهدف إننا نوصل لأفضل نتيجة بأعلى درجة من الأمان.
Conclusion Line
في جراحة التجميل ، الأمان أهم من كمية الدهون اللي بتتشال.
CTA
ابعتلنا صور حالتك ، وبعد التقييم هنحدد إذا كنت مرشح لشفط الدهون، وإيه الكمية الآمنة المناسبة ليك.
واستنوا الحلقة الجاية من سلسلة "أكتر سؤال بيتسأل".
For Editor (Opening)
أكتر سؤال بيتسأل
Episode 01
ملاحظة للمونتير
يظهر الـ Opening لمدة ثانية واحدة قبل بداية الهوك.
أثناء سؤال: "هتشفطلي كام لتر دهون؟" يظهر Text Highlight على الشاشة.
عند جملة "الأمان أهم من كمية الدهون اللي بتتشال." اعمل تكبير بسيط للنص لأنها الرسالة الأساسية في الريل.`},{title:"Episode 02 — لو تخنت تاني... الدهون هترجع؟",hook:"أكبر كذبة عن شفط الدهون... إن الدهون بترجع تاني.",script:`Episode 02 | لو تخنت تاني... الدهون هترجع؟
Hook
أكبر كذبة عن شفط الدهون... إن الدهون بترجع تاني.
Intro
أنا د. عمر أبو الدهب، أخصائي جراحة التجميل.
Body
من أكتر الأسئلة اللي بتتسأل : لو تخنت بعد شفط الدهون... الدهون هترجع؟
الإجابة ببساطه : ممكن الوزن يزيد ، لكن الدهون اللي اتشالت أثناء العملية مبتترجعش تاني.
اللي ممكن يحصل إن الخلايا الدهنية الموجودة في أماكن تانية أو المتبقية في نفس المنطقة تكبر مع زيادة الوزن.
علشان كده ، نتيجة شفط الدهون بتعيش معاك لو حافظت على وزنك ونظام حياتك.
Conclusion Line
شفط الدهون بينحت القوام... لكنه مش بديل للأكل الصحي أو الرياضة.
CTA
ابعتلنا صور حالتك ، واعرف إذا كنت مرشح لشفط الدهون ، وإزاي تحافظ على أفضل نتيجة بعد العملية.
واستنوا الحلقة الجاية من سلسلة "أكتر سؤال بيتسأل".
For Editor (Opening)
أكتر سؤال بيتسأل
Episode 02
ملاحظة طبية: السكريبت دقيق علميًا؛ لأن الخلايا الدهنية التي تُزال بالشفط لا تعود ، لكن الخلايا الدهنية المتبقية يمكن أن تكبر إذا زاد الوزن ، لذلك الحفاظ على الوزن هو العامل الأساسي لاستمرار النتيجة.`},{title:"Episode 03 — لو خلفتي تاني... نتيجة شد البطن هتبوظ؟",hook:"لو حملتي بعد شد البطن... هل هتخسري نتيجة العملية؟",script:`Episode 03 | لو خلفتي تاني... نتيجة شد البطن هتبوظ؟
Hook
لو حملتي بعد شد البطن... هل هتخسري نتيجة العملية؟
Intro
أنا د. عمر أبو الدهب ، أخصائي جراحة التجميل.
Body
من أكتر الأسئلة اللي بتتسأل : لو حملت بعد شد البطن ، النتيجة هتبوظ؟
الإجابة إن الحمل ممكن يأثر على نتيجة شد البطن بسبب تمدد الجلد وعضلات البطن مرة تانية.
لكن ده مش معناه إن العملية راحت أو كانت ملهاش لازمة.
درجة التأثير بتختلف من سيدة للتانية ، وده بيعتمد على طبيعة الحمل ، وزيادة الوزن ، ومرونة الجلد.
ولو حصل ترهل أو انفصال في عضلات البطن مرة تانية ، ممكن تحتاجي تقييم جديد ، لكن ده مش معناه إن كل الحالات هتحتاج إعادة العملية.
Conclusion Line
علشان كده ، أهم خطوة هي اختيار التوقيت المناسب للعملية ، مع تقييم طبي صحيح لحالتك.
CTA
ابعتيلنا حالتك ، واعرفي هل شد البطن هو الإجراء المناسب ليكي ، وإمتى أفضل وقت تعمليه.
واستنوا الحلقة الجاية من سلسلة "أكتر سؤال بيتسأل".
For Editor (Opening)
💬 أكتر سؤال بيتسأل
Episode 03`},{title:"Episode 04 — كل جروح العملية بتسيب أثر ولا بيختفي؟",hook:"أوعى تعمل العملية لو مستني الجرح يختفي 100%.",script:`Episode 04 | كل جروح العملية بتسيب أثر ولا بيختفي؟
Hook
أوعى تعمل العملية لو مستني الجرح يختفي 100%.
Intro
أنا د. عمر أبو الدهب ، أخصائي جراحة التجميل.
Body
من أكتر الأسئلة اللي بتتسأل : كل جروح العملية بتسيب أثر؟
الإجابة ببساطه : أي جرح بيسيب ندبة ، لكن مش كل الندبات بتكون واضحة.
شكل الندبة بيختلف من شخص للتاني ، وبيتأثر بعوامل زي طبيعة الجلد ، مكان الجرح ، وطريقة الالتزام بتعليمات العناية بعد العملية.
ودور جراح التجميل إنه يختار مكان الجرح بعناية ، ويستخدم تقنيات تقلل ظهور الندبة قدر الإمكان ، لكن مفيش حد يقدر يقول إن الأثر هيختفي نهائيًا.
Conclusion Line
الهدف مش إن ميكونش فيه ندبة... الهدف إنها تكون أقل ظهورًا وبأفضل شكل ممكن.
CTA
ابعتلنا حالتك، واعرف إيه النتيجة المتوقعة في حالتك ، وإزاي نقلل ظهور الندبة لأكبر درجة ممكنة.
واستنوا الحلقة الجاية من سلسلة "أكتر سؤال بيتسأل".
For Editor (Opening)
أكتر سؤال بيتسأل
Episode 04`},{title:"Episode 05 — إيه أهم التعليمات بعد شفط الدهون؟",hook:"أكبر غلطة ممكن تضيع نتيجة شفط الدهون... بتحصل بعد العملية مش قبلها.",script:`Episode 05 | إيه أهم التعليمات بعد شفط الدهون؟
Hook
أكبر غلطة ممكن تضيع نتيجة شفط الدهون... بتحصل بعد العملية مش قبلها.
Intro
أنا د. عمر أبو الدهب، أخصائي جراحة التجميل.
Body
من أكتر الأسئلة اللي بتتسأل : إيه أهم التعليمات بعد شفط الدهون؟
أهم حاجة إنك تلتزم بتعليمات الدكتور، لأن نجاح العملية مش بيعتمد على الجراحة بس.
لازم تلبس المشد للمدة اللي يحددها الدكتور ، وتلتزم بالحركة الخفيفة، وتشرب كمية كافية من المياه ، وتحضر مواعيد المتابعة.
والأهم... متستعجلش النتيجة ، لأن التورم بيقل تدريجيًا ، والنتيجة النهائية بتظهر مع الوقت.
Conclusion Line
التزامك بعد العملية... هو اللي بيحافظ على أفضل نتيجة.
CTA
ابعتلنا حالتك، واعرف كل التعليمات المناسبة ليك قبل وبعد شفط الدهون.
واستنوا الحلقة الجاية من سلسلة "أكتر سؤال بيتسأل".
For Editor (Opening)
أكتر سؤال بيتسأل
Episode 05`}]},omar_qa:{id:"omar_qa",client:"د/ عمر أبو الدهب · جراحة التجميل والترميم",title:"أكتر أسئلة التجميل (10 مواضيع)",badge:"10 مواضيع",type:"reels",hook:"إجابات طبية مباشرة وموثوقة من د. عمر أبو الدهب على أهم تساؤلات المرضى في جراحات التجميل والترميم وعلاج الندبات والطوارئ.",reels:[{title:"س 1 · مين ينفع يعمل عملية نحت أو تنسيق قوام؟",hook:"أكبر غلطة إنك تفتكر إن نحت الجسم ينفع لأي حد.",answer:`س 1 د عمر ابو الدهب (مين ينفع يعمل عملية نحت أو تنسيق قوام؟)
Hook
أكبر غلطة إنك تفتكر إن نحت الجسم ينفع لأي حد.
Intro
أنا دكتور عمر أبو الدهب ، أخصائي جراحة التجميل.
والحقيقة إن نحت الجسم مش عملية للتخسيس ، ومش أي شخص هيكون مرشح مناسب ليها.
Body
المرشح المناسب غالبًا بيكون وزنه قريب من الوزن المثالي ، وعنده دهون موضعية مش بتستجيب للدايت أو الرياضة ، وكمان جلده يتمتع بمرونة مناسبة ، وحالته الصحية تسمح بإجراء العملية.
أما لو هدفك إنك تخس عدد كبير من الكيلوجرامات ، أو وزنك لسه بيتغير باستمرار، فغالبًا نحت الجسم مش هيكون هو الحل المناسب ليك في المرحلة دي.
وعلشان كده،
القرار مش بيتاخد بناءً على الرغبة في العملية، لكن بعد تقييم حالتك بشكل كامل.
Conclusion Line
اختيار الحالة المناسبة هو أول خطوة لنتيجة طبيعية وآمنة.
CTA
ابعتلنا حالتك واعرف إذا كنت مرشح للعملية ولا لأ.`},{title:"س 2 · علاج الندبات",hook:"أكبر غلطة إنك تتعامل مع كل الندبات بنفس الطريقة.",answer:`س 2 د عمر ابو الدهب (علاج الندبات)
Hook
أكبر غلطة إنك تتعامل مع كل الندبات بنفس الطريقة.
Intro
أنا دكتور عمر أبو الدهب ، أخصائي جراحة التجميل.
فيه ناس كتير فاكرة إن الندبة بعد ما تظهر خلاص مفيش حل ليها ، لكن الحقيقة غير كده.
Body
أول حاجة لازم نعرفها إن مش كل الندبات زي بعض ، وعلشان كده مش كل الندبات ليها نفس العلاج.
فيه ندبات ناتجة عن جراحة ، أو حروق ، أو جروح  ، أو حتى حب الشباب ، وكل نوع بيتقيم بطريقة مختلفة.
وعلى حسب شكل الندبة ، وحجمها ، ومكانها ، ومدة وجودها... بنحدد أنسب وسيلة للعلاج ، سواء كانت أدوية ، أو حقن ، أو ليزر، أو تدخل جراحي في بعض الحالات.
علشان كده،
تشخيص نوع الندبة هو أهم خطوة قبل اختيار العلاج.
Conclusion Line
علاج الندبة بيبدأ من التشخيص الصحيح... مش من تجربة أي منتج أو وصفة.
CTA
لو عندك ندبة وعايز تعرف أفضل طريقة لعلاجها، ابعتلنا رسالة.`},{title:"س 3 · استقبال حالات الطوارئ",hook:"أكبر غلطة بعد الإصابة... إنك تستنى.",answer:`س 3 د عمر ابو الدهب (استقبال حالات الطوارئ)
Hook
أكبر غلطة بعد الإصابة... إنك تستنى
Intro
أنا دكتور عمر أبو الدهب ، أخصائي جراحة التجميل.
فيه حالات كتير بتوصلنا متأخرة ، مع إن التدخل بدري كان ممكن يفرق في العلاج بشكل كبير.
Body
مش كل إصابة ينفع تستنى أو تتعالج في البيت.
إصابات زي الحروق ، وإصابات الأوتار ، وكسور الوجه والفكين ، والجروح المعقدة محتاجة تقييم طبي سريع ، لأن الوقت بيساعدنا نحدد أنسب خطة علاج ويقلل من فرص حدوث مضاعفات.
وعلشان أوضح نقطة مهمة... سرعة التوجه للطبيب مش معناها إن كل الحالات هتحتاج عملية ، لكنها بتضمن إن الحالة تتقيم صح ، ويتاخد القرار المناسب في الوقت المناسب.
Conclusion Line
في حالات الطوارئ... القرار السريع ممكن يفرق في رحلة العلاج بالكامل.
CTA
لو عندك حالة طارئة تواصل معانا فورًا.`},{title:"س 4 · شد أو تكبير أو تصغير الثدي",hook:"القرار مش شد ولا تكبير... القرار يبدأ بالتقييم.",answer:`س 4 د عمر ابو الدهب (شد أو تكبير أو تصغير الثدي)
Hook
القرار مش شد ولا تكبير... القرار يبدأ بالتقييم.
Intro
أنا دكتور عمر أبو الدهب ، أخصائي جراحة التجميل.
ومن أكتر الأسئلة اللي بتتكرر " أحتاج شد؟ ولا تكبير؟ ولا تصغير؟ "
Body
الإجابة بتختلف من حالة للتانية ، لأن كل إجراء ليه هدف مختلف.
شد الثدي بيكون مناسب في حالات الترهل ، أما التكبير فيهدف لاستعادة أو زيادة الحجم ، والتصغير بيساعد في التخلص من كبر حجم الثدي لما يسبب ألم أو يؤثر على الحركة وجودة الحياة.
علشان كده
القرار مش بيتاخد بناءً على الرغبة أو الصور اللي بنشوفها على السوشيال ميديا ، لكن بعد تقييم شكل الثدي ، وجودة الجلد ، واحتياجات كل حالة.
Conclusion Line
الإجراء المناسب هو اللي يناسب حالتك... مش اللي يناسب غيرك.
CTA
احجزي استشارتك واعرفي أنسب إجراء لحالتك.`},{title:"س 5 · تعدد الأصابع عند الأطفال",hook:"مش كل صباع زيادة... يبقى مجرد شكل.",answer:`س 5 د عمر ابو الدهب (تعدد الأصابع عند الأطفال)
Hook
مش كل صباع زيادة... يبقى مجرد شكل
Intro
أنا دكتور عمر أبو الدهب ، أخصائي جراحة التجميل.
فيه أهالي كتير بيفتكروا إن تعدد الأصابع مجرد مشكلة شكلية ، لكن في بعض الحالات بيكون ليها تأثير على وظيفة اليد أو القدم مع نمو الطفل.
Body
علشان كده،
أول خطوة هي تقييم الحالة بشكل دقيق ، لأن مش كل حالات تعدد الأصابع بتكون متشابهة.
بنشوف مكان الإصبع الزائد ، ومدى ارتباطه بالعظام أو الأوتار أو الأعصاب ، وعلى أساس التقييم بنحدد أنسب وقت وطريقة للتدخل ، بما يحقق أفضل نتيجة وظيفية وشكلية للطفل.
والتشخيص المبكر بيساعد في وضع خطة العلاج المناسبة في الوقت المناسب.
Conclusion Line
كل ما بدأنا بالتقييم الصحيح بدري... كانت فرصة الوصول لأفضل نتيجة أكبر.
CTA
لو عندك أي استفسار بخصوص حالة طفلك ابعتلنا رسالة.`},{title:"س 7 · ليه دكتور التجميل هو اللي بيعالج الجروح المعقدة؟",hook:"أكبر غلطة بعد الجرح... إنك تفتكر إن كل الجروح بتتعالج بنفس الطريقة.",answer:`س 7 ليه دكتور التجميل هو اللي بيعالج الجروح المعقدة؟
Hook
أكبر غلطة بعد الجرح... إنك تفتكر إن كل الجروح بتتعالج بنفس الطريقة
Intro
أنا دكتور عمر أبو الدهب أخصائي جراحة التجميل.
كتير من الناس بيفتكروا إن أي جرح يكفيه كام غرزة وخلاص ، لكن الحقيقة إن مش كل الجروح بتتعامل بنفس الطريقة.
Body
لو الجرح عميق، أو في الوجه، أو قريب من الأوتار أو الأعصاب ، فطريقة التعامل معاه من البداية بتفرق في النتيجة.
دور جراح التجميل مش مجرد قفل الجرح، لكن الحفاظ على وظيفة الجزء المصاب قدر الإمكان، وتحقيق أفضل نتيجة شكلية ممكنة حسب طبيعة كل حالة.
علشان كده، التقييم الصحيح من أول لحظة هو اللي بيحدد أفضل طريقة للعلاج.
Conclusion Line
في الجروح المعقدة... أول قرار هو أهم قرار.
CTA
لو عندك جرح معقد أو إصابة وعايز تعرف أنسب طريقة للتعامل معاها، ابعتلنا رسالة واحجز استشارتك.`},{title:"س 8 · إيه الفرق بين الجراحة التجميلية والجراحة الترميمية؟",hook:"ممكن تكون بتكشف عند الدكتور الغلط.",answer:`س 8 إيه الفرق بين الجراحة التجميلية والجراحة الترميمية؟
Hook
ممكن تكون بتكشف عند الدكتور الغلط.
Intro
أنا دكتور عمر أبو الدهب أخصائي جراحة التجميل.
وكتير من الناس متعرفش إن جراح التجميل مش بيقتصر دوره على عمليات التجميل وبس.
Body
إحنا بنستقبل حالات زي الحروق، والجروح المعقدة، وإصابات الوجه والفكين، والتشوهات الخلقية، بالإضافة إلى جراحات التجميل وتنسيق القوام.
علشان كده، اختيار التخصص المناسب من البداية بيساعدك توصل للتشخيص الصحيح وخطة العلاج المناسبة من أول مرة.
Conclusion
أول خطوة في العلاج... هي إنك توصل للطبيب المناسب.
CTA
لو مش متأكد حالتك من تخصص جراحة التجميل ولا لأ، ابعتلنا رسالة واحنا هنساعدك.`},{title:"س 9 · ليه الكشف أهم من العملية؟",hook:"ليه الكشف أهم من العملية؟",answer:`س 9 ليه الكشف أهم من العملية؟
Hook
ليه الكشف أهم من العملية؟
Intro
أنا دكتور عمر أبو الدهب أخصائي جراحة التجميل.
وكتير من الناس بتفتكر إن أهم خطوة هي العملية، لكن الحقيقة إن أهم خطوة بتكون قبلها.
Body
في الكشف بنحدد إذا كانت حالتك محتاجة عملية فعلًا، ولا فيه حل تاني أنسب.
وبنراجع تاريخك المرضي، ونقيّم حالتك، ونشرحلك كل الخيارات المتاحة، علشان نوصل لأفضل قرار يناسبك.
مش كل مريض بيكون مرشح للعملية، وعلشان كده التقييم الصحيح هو أساس العلاج الناجح.
Conclusion Line
العلاج الصح بيبدأ بكشف صح.
CTA
احجز استشارتك واعرف أنسب حل لحالتك.`},{title:"إصابات الأوتار",hook:"إصابة الوتر لا تحتمل التأجيل.",answer:`إصابات الأوتار
Hook
أوعى تتجاهل العلامة دي بعد أي جرح في إيدك.
Intro
أنا دكتور عمر أبو الدهب أخصائي جراحة التجميل.
لو لاحظت إن صباعك مش بيتحرك طبيعي بعد الجرح ، فده ممكن يكون مؤشر على إصابة في الوتر، ودي من الحالات اللي محتاجة تقييم سريع.
Body
إصابات الأوتار مش دايمًا بتكون واضحة ، وعلشان كده ناس كتير بتفتكر إن الجرح بسيط طالما وقف نزيفه أو اتخاط.
لكن الحقيقة إن وظيفة الوتر هي تحريك الأصابع ، وأي تأخير في تشخيص الإصابة أو علاجها ممكن يأثر على استعادة الحركة بشكل طبيعي.
علشان كده ، لو بعد أي إصابة لاحظت صعوبة أو ضعف في حركة صوابعك، متستناش إن الموضوع يتحسن لوحده، واعمل تقييم طبي في أسرع وقت.
Conclusion Line
في إصابات الأوتار... الوقت بيفرق.
CTA
لو عندك إصابة أو شك إن في إصابة في الوتر، تواصل معانا فورًا عشان نقيّم حالتك ونحدد أنسب خطوة للعلاج.`},{title:"إصابات الوجه والفكين",hook:"أوعى تسيب إصابة في وشك من غير تقييم متخصص.",answer:`إصابات الوجه والفكين
Hook
أوعى تسيب إصابة في وشك من غير تقييم متخصص..
Intro
أنا د. عمر أبو الدهب ، أخصائي جراحة التجميل.
Body
كتير من الناس بتفتكر إن أي إصابة في الوجه محتاجة خياطة وبس.
لكن الحقيقة إن إصابات الوجه والفكين بتحتاج تقييم دقيق ، لأن الهدف مش قفل الجرح فقط ، لكن الحفاظ على الشكل والوظيفة في نفس الوقت.
وفي بعض الحالات ، التدخل المبكر واختيار طريقة العلاج المناسبة بيفرق بشكل كبير في النتيجة النهائية ، وبيساعد على تقليل المضاعفات وتحسين شكل الندبة.
Conclusion Line
في إصابات الوجه... التقييم الصح من البداية بيصنع الفرق.
CTA
لو تعرضت لإصابة في الوجه أو الفك ، ابعتلنا حالتك أو تواصل معانا ، علشان نحدد أنسب طريقة للتعامل معاها في الوقت المناسب.`}]},omar_plan:{id:"omar_plan",client:"د/ عمر أبو الدهب · جراحة التجميل والترميم",title:"بلان محتوى شهر 9",badge:"بلان شهر 9",type:"sheet_plan",hook:"خطة تسويق طبي ممنهجة توازن بين التوعية بجراحات نحت القوام، والترميم، والتعامل مع الطوارئ والإصابات المعقدة.",branchInfo:{location:"عيادات د. عمر أبو الدهب لجراحة التجميل والترميم ونحت القوام",phone:"حجز الاستشارات والكشف الطبي المسبق",specialty:"Plastic, Reconstructive & Body Contouring Surgery"},tables:[{title:"جدول منشورات وريلز عيادة د. عمر أبو الدهب (September Matrix)",headers:["التاريخ / اليوم","نوع المحتوى","عنوان الموضوع الطبي","الهدف التسويقي","الزاوية التوعوية"],rows:[["الأحد (أسبوع 1)","ريل توعوي","إيه كمية الدهون اللي ينفع تتشفط؟","تثقيف وأمان المريض","معايير الأمان الدولية لشفط الدهون"],["الثلاثاء (أسبوع 1)","بوست إنفوجرافيك","الفرق بين الجراحة التجميلية والترميمية","بناء السلطة العلمية","استعراض تخصصات الجراحة المتقدمة"],["الخميس (أسبوع 1)","ريل سؤال وجواب","س 1: مين ينفع يعمل عملية نحت القوام؟","تأهيل العملاء المحتملين","شروط الترشح لعمليات التنسيق والنحت"],["الأحد (أسبوع 2)","ريل توعوي","لو تخنت تاني بعد العملية.. الدهون هتروح فين؟","الإجابة على المخاوف","تفسير الخلايا الدهنية وطرق ثبات الوزن"],["الأربعاء (أسبوع 2)","بوست كيس ستادي","علاج الندبات المتقدمة وآثار العمليات","إبراز نتائج الحالات","تقنيات تحسين مظهر الجلد والندبات القديمة"]]}]},maysa_podcast:{id:"maysa_podcast",client:"د/ مايسا · استشارات وعلاقات إنسانية",title:"بودكاست الوعي النفسي (3 حلقات)",badge:"بودكاست 3 حلقات",type:"episodes",hook:"سلسلة بودكاست حوارية معمقة تناقش الخلافات الزوجية، الخيانة واستعادة الثقة، والتعلق المرضي.",episodes:[{title:"بودكاست 1 — العلاقات (الخلاف في العلاقة)",hook:"هو إحنا فعلًا بنختلف بسبب الموقف اللي حصل؟ ولا أوقات كتير الموقف بيكون مجرد شرارة... لكن وراه حاجات متراكمة؟",script:`بودكاست 1 — العلاقات
الفكرة العامة:
نبدأ بموقف زوجي بسيط جدًا لكنه مألوف: سوء فهم يتحول لخلاف، ثم نكتشف إن المشكلة مش في الموقف نفسه، لكن في طريقة تعامل الطرفين مع بعض.
المشهد التمثيلي — 20–30 ثانية
المشهد: زوج وزوجة في البيت.
الزوج يدخل/يرجع من بره، والزوجة تسأله عن حاجة كان المفروض يعملها، فيرد باختصار أو بحدة بسبب ضغطه.
هي تفسر رده إنه تجاهل أو عدم اهتمام، فيبدأ خلاف بسيط.
المهم:
المشهد مايبقاش خناقة أو صويت. عايزينه واقعي جدًا، زي موقف ممكن يحصل في أي بيت.
للمصور والمونتير:
الأفضل يكون تمثيل حقيقي لو متاح، عشان المشهد يطلع طبيعي ومش إعلاني.
لو مفيش ممثلين، يتعمل B-roll تمثيلي بلقطات قريبة: إيد بتقفل الموبايل، نظرة بين الطرفين، شخص بيقوم من مكانه، كوب بيتحط بعصبية على الترابيزة.
بدون حوار واضح أو يكون الحوار غير مسموع؛ الهدف إننا نفهم الإحساس مش تفاصيل الكلام.
ألوان وإضاءة طبيعية وهادية.
آخر لقطة: الطرفين في نفس المكان لكن كل واحد بعيد عن التاني/صمت بينهم.
Cut مفاجئ من المشهد إلى د. مايسا وجوزها في البودكاست.
الانترو:
بعد الـCut مباشرة، د. مايسا تبدأ:
هو إحنا فعلًا بنختلف بسبب الموقف اللي حصل؟
ولا أوقات كتير الموقف بيكون مجرد شرارة... لكن وراه حاجات متراكمة؟
ثم الزوج يدخل:
وإمتى الخلاف بين اتنين طبيعي وصحي... وإمتى يبدأ يهد العلاقة نفسها؟
د. مايسا:
وده اللي هنتكلم عنه النهارده...
وبعدها يبدأ الحوار الطبيعي بينهم.
أثناء الحوار
مش هنديهم Script، لكن للمخرج/المحتوى نجهز محاور فقط:
هل الخلافات الكتير معناها إن العلاقة غير صحية؟
هل المشكلة في طريقة الخلاف ولا سبب الخلاف؟
إمتى السكوت يكون هدوء وإمتى يكون عقاب؟
إزاي كل طرف يعبر عن احتياجه بدون هجوم؟
هل الاعتذار كفاية بعد كل خلاف؟
إيه الحاجات الصغيرة اللي بتتراكم وتفسد العلاقة؟
إيه شكل العلاقة الصحية وقت الاختلاف؟
ويُفضل إن الزوجين يختلفوا في بعض النقاط أثناء الحوار؛ ده هيخلي الحلقة Podcast حقيقي مش محاضرة.
النهاية
بدل ما نختم فجأة بـ"متنسوش تعملوا Follow"، نخلي النهاية ترجع لأول مشهد:
د. مايسا:
يمكن بعد كل اللي اتكلمنا فيه... المشكلة مش إننا نختلف، لأن مفيش علاقة من غير اختلاف."
الزوج:
"المهم... إحنا بنختلف إزاي؟"
د. مايسا:
"لأن العلاقة الصحية مش علاقة مفيهاش خلافات...
العلاقة الصحية هي اللي تقدروا تختلفوا فيها، من غير ما تخسروا بعض."
ثم سؤال مباشر للجمهور:
"إنت شايف... إيه أكتر حاجة ممكن تفسد العلاقة: طريقة الخلاف، ولا الحاجات اللي بنسكت عنها؟"
On Screen:
اكتب رأيك في الكومنتات 👇
ثم آخر لقطة قصيرة لهم مع بعض، وظهور اسم البودكاست/اللوجو.
CTA التجاري يظهر على الشاشة فقط في آخر 3–4 ثواني:
لو حابب تفهم علاقتك بشكل أعمق، احجز جلستك أونلاين مع د. مايسا.
الرابط في البايو`},{title:"بودكاست 2 — الخيانة واستعادة الثقة",hook:"ليه الخيانة بتهد العلاقة من جذورها؟ وهل بعد كل الوجع ده... ممكن الثقة ترجع تاني؟",script:`بودكاست 2 — الخيانة
الفكرة العامة:
الحلقة تبدأ بمشهد قصير يوصل إحساس الشك واكتشاف الخيانة من غير ما نكشف كل حاجة من أول ثانية، وبعدها ننتقل للحوار عن الخيانة: أسبابها، تأثيرها، وهل ممكن الثقة ترجع بعدها؟
المشهد التمثيلي — 20–30 ثانية
المشهد: زوج وزوجة في البيت.
الزوجة تلاحظ إن زوجها بيتعامل مع موبايله بشكل مختلف: يقفل الشاشة بسرعة، ياخده معاه في كل مكان، أو توصله رسالة وتظهر عليه علامات توتر.
هي تسأله سؤال بسيط:
"مين؟"
يرد بشكل مختصر:
"ولا حد."
تسكت، لكن نظرتها تتغير.
بعدها تلاحظ موقف تاني يخلي شكها يزيد، وتحصل مواجهة قصيرة جدًا من غير صراخ.
آخر لقطة:
الزوجة قاعدة لوحدها، ماسكة الموبايل أو باصة قدامها، والزوج في مكان تاني.
Cut.
للمصور والمونتير
الأفضل تمثيل حقيقي لو متاح، لأن التعبيرات ونظرات العين مهمة جدًا هنا.
لو مفيش ممثلين، يتعمل B-roll تمثيلي Close-ups.
التركيز على التفاصيل: الموبايل، إغلاق الشاشة، النظرات، المسافة بين الطرفين.
الحوار في المشهد يكون قليل جدًا، وممكن جزء منه يبقى غير مسموع.
ممنوع مبالغة أو خيانة مباشرة بشكل صريح؛ نخلي المشاهد يستنتج.
الموسيقى تكون هادئة ومتوترة تدريجيًا.
آخر لقطة يكون فيها صمت لمدة ثانية أو ثانيتين قبل الـCut للبودكاست.
الانترو
بعد المشهد مباشرة، Cut على د. مايسا وزوجها.
د. مايسا:
"أصعب حاجة في الخيانة... هي الخيانة نفسها؟ ولا كل الأسئلة اللي بتيجي بعدها؟"
الزوج:
"هل اللي حصل كان بسبب مشكلة في العلاقة؟ ولا قرار من الشخص نفسه؟ وهل ممكن الثقة ترجع بعد ما اتكسرت؟"
د. مايسا:
"والأهم... لو حصلت خيانة، هل كل علاقة لازم تنتهي؟ ولا فيه علاقات ممكن تبدأ من جديد بشكل مختلف؟"
ثم:
"خلونا نتكلم عن الخيانة... مش بس كحدث، لكن كأثر بيغير شكل العلاقة بعده."
وبعدها يبدأ الحوار الطبيعي.
محاور الحوار
مش Script، مجرد أسئلة تساعدهم يفتحوا النقاش:
هل الخيانة دائمًا معناها إن العلاقة كانت سيئة؟
هل وجود مشاكل في العلاقة يبرر الخيانة؟
هل الخيانة قرار لحظي ولا غالبًا بتكون نتيجة تراكمات؟
إيه الفرق بين تفسير سبب الخيانة وتبريرها؟
ليه الخيانة بتأثر على ثقة الشخص في نفسه؟
هل ممكن الشخص يسامح من غير ما يرجع يكمل العلاقة؟
هل الثقة ممكن ترجع بعد الخيانة؟
إيه اللي لازم يحصل عشان إعادة بناء الثقة تكون ممكنة؟
إمتى الاستمرار يكون محاولة لإصلاح العلاقة، وإمتى يكون استنزاف؟
هل كل خيانة معناها إن العلاقة انتهت؟
مهم جدًا:
خلي د. مايسا وجوزها مش متفقين 100%. وجود وجهتي نظر مختلفتين هيخلي الحلقة أكثر واقعية ويخلق نقاش في الكومنتات.
النهاية
نرجع لنفس فكرة المشهد الأول:
د. مايسا:
"يمكن الخيانة بتكسر حاجة مهمة جدًا في العلاقة..."
الزوج:
"الثقة."
د. مايسا:
"لكن السؤال مش بس: هل الثقة ممكن ترجع؟"
ثم تنظر للكاميرا:
"السؤال الأهم: هل العلاقة بعد الخيانة تقدر تبقى علاقة صحية فعلًا؟"
ثم:
"مفيش إجابة واحدة تناسب كل الناس... لأن كل علاقة، وكل شخص، وكل موقف له ظروفه."
CTA التفاعلي
لو كنت مكان الشخص اللي اتعرض للخيانة... إيه الأصعب بالنسبة لك: الخيانة نفسها، ولا فقدان الثقة؟
On Screen:
اكتب رأيك في الكومنتات 👇
CTA البيعي
آخر 3–4 ثواني:
لو بتواجه موقف مشابه ومحتاج مساحة آمنة تفهم فيها مشاعرك وخطوتك الجاية، تقدر تحجز جلستك أونلاين مع د. مايسا.
الرابط في البايو`},{title:"بودكاست 3 — التعلّق المرضي مقابل الحب الحقيقي",hook:"هو ده حب... ولا تعلق وخوف من الوحدة؟ إمتى العلاقة تتحول لسجن من غير ما تحس؟",script:`بودكاست 3 — التعلّق
الفكرة العامة:
نبدأ بمشهد بسيط جدًا ومألوف: شخص مستني رسالة أو مكالمة من الطرف الآخر، وكل دقيقة تأخير بتأثر على مزاجه. المشهد يوصل فكرة التعلق من غير ما نقولها صراحة.
المشهد التمثيلي — 20–30 ثانية
المشهد:
زوجة قاعدة مع زوجها، وكل واحد مشغول بحاجته.
الزوج يمسك موبايله ويرد على رسالة، ثم يرجع يكمل اللي بيعمله.
بعد شوية، الزوجة تبعت له رسالة وهو قدامها، لكنه لا يرد فورًا.
تبدأ تبص للموبايل كل شوية.
تدخل على الـChat وتشوف إنه Online.
تبعث رسالة تانية:
"إنت زعلان مني؟"
مفيش رد.
ملامحها تتغير، وتبدأ تفسر الموقف في دماغها.
الزوج يرجع ويتعامل معاها بشكل طبيعي، فتسأله:
"إنت كنت متضايق مني؟"
يرد باستغراب:
"لا... كنت مشغول."
Cut.
للمصور والمونتير
الأفضل تمثيل المشهد بشكل طبيعي جدًا، من غير مبالغة.
التركيز على الموبايل + تعبيرات الوجه + الانتظار.
Close-up على الـChat وظهور "Online" بدون إظهار أسماء أو محادثات حقيقية.
استخدموا مونتاج سريع نسبيًا مع تكرار نظرة الشخص للموبايل عشان نحس بالانتظار.
ممكن نستخدم صوت إشعار في البداية، وبعدها صمت.
آخر لقطة تكون على تعبير الوجه قبل الـCut للبودكاست.
المشهد كله يوصل فكرة: "ليه عدم الرد قدر يغير حالتي؟"
الانترو
Cut من المشهد إلى د. مايسا وزوجها.
د. مايسا:
"هو أنا بحب الشخص... ولا بقيت محتاج وجوده عشان أبقى كويس؟"
الزوج:
"يعني إيه الفرق بين إنك تحب حد، وإنك تكون متعلق بيه؟"
د. مايسا:
"وإمتى الاهتمام الطبيعي يتحول لاحتياج يخليك طول الوقت مستني، قلقان، وبتفسر كل تصرف؟"
ثم:
"خلونا نتكلم عن التعلق... وإزاي نعرف الفرق بين الحب والاحتياج."
وبعدها يبدأ الحوار الطبيعي.
محاور الحوار
من غير كتابة إجابات، هما يتناقشوا بحرية في:
إيه الفرق بين الحب والتعلق؟
هل الاحتياج للطرف الآخر طبيعي؟
إمتى الاهتمام يتحول لاعتماد عاطفي؟
ليه عدم الرد ممكن يسبب قلق شديد عند بعض الناس؟
هل التعلق مرتبط بالخوف من الفقد؟
ليه بعض الناس بيحاولوا يرضوا الطرف الآخر بأي شكل؟
هل الاستقلال العاطفي معناه إننا منحتاجش بعض؟
إزاي أعرف إن العلاقة فيها حب صحي ولا تعلق؟
هل الشخص المتعلق بيحب الشخص نفسه، ولا بيحب الإحساس اللي بياخده منه؟
إزاي نبدأ نبني أمان داخلي بدل ما يكون مرتبط بشخص تاني؟
ومهم جدًا هنا إن الحوار مايبقاش ضد التعلق أو يصوره كعيب؛ الهدف إنهم يوضحوا الفرق بين الارتباط الصحي والاعتماد اللي ممكن يسبب معاناة.
النهاية
نرجع لفكرة المشهد الأول.
الزوج:
"يعني لو أنا بحبك... المفروض ماحتاجكيش؟"
د. مايسا:
"لا طبعًا... الاحتياج مش عيب."
ثم:
"الفرق إن وجود الشخص في حياتك يضيف لك... مش يكون هو المصدر الوحيد لأمانك وراحتك."
الزوج:
"يعني نحب بعض... من غير ما نفقد نفسنا؟"
د. مايسا:
"بالضبط."
ثم تنظر للكاميرا:
"الحب الصحي بيقربنا من بعض... من غير ما يخلينا نضيع نفسنا."
CTA التفاعلي
إنت شايف إيه الفرق بين إنك تحب شخص... وإنك تكون متعلق بيه؟
On Screen:
اكتب رأيك في الكومنتات 👇
CTA البيعي
ولو حاسس إن التعلق مأثر على علاقتك أو على راحتك النفسية، ممكن تبدأ تفهم نفسك بشكل أعمق في جلسة مع د. مايسا.
احجز جلستك أونلاين من الرابط في البايو.
كده التلات حلقات يبقوا لهم نفس البناء لكن كل واحدة لها شخصية مختلفة:
العلاقات = الخلاف → الخيانة = فقدان الثقة → التعلق = الخوف من الفقد.`}]},maysa_plan:{id:"maysa_plan",client:"د/ مايسا · Life Coaching & Consultation",title:"بلان شهري 8 و 9",badge:"بلان شهرين",type:"sheet_plan",hook:"جدول متكامل للمنشورات التوعوية والريلز القصيرة وحلقات البودكاست لتعزيز الوعي النفسي وتوليد طلب الاستشارات الفردية.",branchInfo:{location:"جلسات استشارات أونلاين وحضورية",phone:"حجز الجلسات والاستشارات المباشرة",specialty:"Life Coaching, Relationship Therapy & Mental Wellness"},tables:[{title:"مصفوفة محتوى كوتش مايسا (Relationship & Coaching Matrix)",headers:["نوع المحتوى","الموضوع والمحور","الهدف","الرسالة الجوهرية"],rows:[["حلقة بودكاست","بودكاست 1: العلاقات الصحية والحدود النفسية","بناء ثقة وسلطة ملهمة","كيف تحمي مساحتك النفسية بدون شعور بالذنب"],["ريل قصير (Hook)","3 تصرفات بتكشف التعلق المرضي في بدايته","انتشار فيروسي وحفظ","لو بتعمل الحاجات دي.. لازم تقف مع نفسك"],["بوست كاروسيل","خطوات استعادة الثقة بالنفس بعد الانفصال","تفاعل ومشاركة واسعة","التعافي رحلة تبدأ بقرارك بالحب والرحمة بذاتك"],["حلقة بودكاست","بودكاست 2: سيكولوجية الخيانة والتعافي من الصدمة","عمق نفسي ومعالجة ألم","أنت لست السبب في خيانة أحدهم لك"]]}]},shereen_reels:{id:"shereen_reels",client:"أ/ شيرين سمير · استشارات واستثمار عقاري",title:"12 سكريبت ريلز عقاري",badge:"12 سكريبت",type:"reels",hook:"سلسلة 12 سكريبت ريلز تكسر الصورة النمطية للسماسرة وتبني الثقة كمستشارة استثمار عقاري موثوقة.",reels:[{title:"س 1 · أنا مش سمسارة",hook:"أنا مش سمسارة.. أنا دوري أخليك تشتري الصح، حتى لو مش هتشتري معايا.",answer:`س 1 · د. شيرين سمير
أنا مش سمسارة... أنا دوري أخليك تشتري الصح، حتى لو مش هتشتري معايا.

HOOK
لو كل اللي همه يبيعلك، يبقى مين هيحمي فلوسك؟

INTRO
أنا د. شيرين سمير — Investment & Real Estate Consultant

BODY
ناس كتير أول ما تقرر تشتري عقار بتبدأ تدور على مشروع أو تسأل عن الأسعار.
لكن في الحقيقة دي مش أول خطوة.
أول خطوة إنك تلاقي حد يفهم احتياجك قبل ما يرشحلك أي مشروع.
علشان كده أنا مش دوري أبيعلك أي وحدة.
- دوري أفهم أنت بتشتري ليه؟
- هل هدفك سكن ولا استثمار؟
- ميزانيتك كام؟
- إيه أولوياتك؟
- وبناءً على ده أرشحلك الأنسب.
وممكن جداً أقولك المشروع ده مش مناسب ليك، حتى لو ده معناه إنك مش هتشتري من خلالي، لأن هدفي إنك تاخد القرار الصح مش مجرد قرار سريع.

CTA
لو بتفكر تشتري عقار قريب، اكتبلي في الكومنتات هدفك سكن ولا استثمار.

END LINE
القرار الصح بيبدأ باستشارة صح.`},{title:"س 2 · مين شيرين؟",hook:"قبل ما تشتري أي عقار اسأل نفسك سؤال واحد: مين الشخص اللي هتستشيره؟",answer:`س 2 · د. شيرين سمير
مين شيرين؟ وليه الناس بتستشيرني قبل ما تشتري أي عقار؟

HOOK
قبل ما تشتري أي عقار اسأل نفسك سؤال واحد: مين الشخص اللي هتستشيره؟

INTRO
أنا د. شيرين سمير — Investment & Real Estate Consultant

BODY
أنا مؤمنة إن شراء عقار مش مجرد اختيار شقة.
ده قرار ممكن يأثر على حياتك واستثمارك لسنين.
وعلشان كده دوري مش إني أقولك اشتري المشروع ده وخلاص.
- أنا الأول بفهم هدفك.
- بتدور على سكن مناسب؟
- ولا استثمار يحققلك عائد؟
- بعدها بقارن بين المشاريع والمطورين وأنظمة السداد.
- وأرشحلك اللي يناسب احتياجاتك وميزانيتك.
- حتى لو كان الاختيار ده مش هيكون من خلالي.
لأن بالنسبة لي نجاحي الحقيقي، إنك تاخد قرار وتكون مطمن له.
وده السبب اللي بيخلي ناس كتير تفضل تستشيرني قبل ما تشتري أي عقار.

CTA
لو لسه محتار تبدأ منين، ابعت كلمة "استشارة" وأنا هساعدك تحدد أنسب اختيار ليك.

END LINE
القرار الصح بيبدأ باستشارة صح.`},{title:"س 3 · لو هتشتري أول شقة",hook:"90% من الناس بتغلط قبل ما تشوف أول شقة.",answer:`س 3 · د. شيرين سمير
لو هتشتري أول شقة... متبدأش تدور قبل الخطوة دي.

HOOK
90% من الناس بتغلط قبل ما تشوف أول شقة.

INTRO
أنا د. شيرين سمير — Investment & Real Estate Consultant

BODY
لو هتشتري أول شقة في حياتك، متبدأش بالسؤال:
"أشتري فين؟"
ابدأ بالسؤال:
"أنا بشتري ليه؟"
اسأل نفسك 3 أسئلة مهمين:
1. هل هدفك سكن ولا استثمار؟
2. إيه ميزانيتك الحقيقية؟ مش اللي تتمنى تدفعها، لكن اللي تقدر تلتزم بيها من غير ضغط.
3. إيه أولوياتك؟
- المكان؟
- المساحة؟
- الاستلام؟
- ولا نظام السداد؟
لما تجاوب على الأسئلة دي، ساعتها اختيار المشروع هيكون أسهل بكتير.
لأن مفيش مشروع هو الأفضل لكل الناس، فيه مشروع هو الأفضل ليك أنت.

CTA
لو لسه محتار تبدأ منين، ابعت كلمة "استشارة" وهساعدك تحدد أول خطوة صح.

END LINE
القرار الصح بيبدأ باستشارة صح.`},{title:"س 4 · لو معاك 3 مليون جنيه",hook:"لو معاك 3 مليون جنيه متقولش أشتري فين... اسأل هتستثمر إزاي؟",answer:`س 4 · د. شيرين سمير
لو معاك 3 مليون جنيه... هتشتري فين؟

HOOK
لو معاك 3 مليون جنيه متقولش أشتري فين... اسأل هتستثمر إزاي؟

INTRO
أنا د. شيرين سمير — Investment & Real Estate Consultant

BODY
لو معاك 3 مليون جنيه، فأول سؤال لازم تسأله لنفسك مش:
"أشتري فين؟"
لكن:
"أنا بشتري ليه؟"
لأن الإجابة هي اللي هتحدد كل حاجة بعد كده:
• لو هدفك السكن:
يبقى هنركز على جودة الحياة والخدمات والمكان اللي يناسب احتياجاتك.
• لو هدفك الاستثمار:
فهدور على منطقة فرص نموها أعلى وقيمتها متوقع تزيد مع الوقت.
• لو هدفك دخل من الإيجار:
فهنا هنختار وحدة عليها طلب حقيقي وتحقق عائد كويس.
وعشان كده، نفس الـ 3 مليون جنيه ممكن يجيبوا أكتر من فرصة، لكن الاختيار الصح بيعتمد على هدفك، مش على اسم المنطقة.

CTA
اكتب في الكومنتات ميزانيتك وهدفك من الشراء، وهارشحلك أنسب اختيار في فيديو جاي.

END LINE
القرار الصح بيبدأ باستشارة صح.`},{title:"س 5 · التجمع الخامس ولا الشيخ زايد؟",hook:"التجمع الخامس ولا الشيخ زايد؟ الإجابة هتفاجئك.",answer:`س 5 · د. شيرين سمير
التجمع الخامس ولا الشيخ زايد؟

HOOK
التجمع الخامس ولا الشيخ زايد؟ الإجابة هتفاجئك.

INTRO
أنا د. شيرين سمير — Investment & Real Estate Consultant

BODY
الناس دايماً بتسأل:
أنهي أفضل... التجمع الخامس ولا الشيخ زايد؟
لكن الحقيقة مفيش منطقة أفضل بشكل مطلق، فيه منطقة أنسب ليك حسب احتياجاتك:
• لو شغلك أو حياتك اليومية في القاهرة الجديدة أو مدينة نصر أو مصر الجديدة، فغالباً التجمع الخامس هيكون الاختيار العملي ليك.
• أما لو شغلك أو حياتك في غرب القاهرة زي المهندسين أو أكتوبر أو زايد، فالشيخ زايد هتوفر عليك وقت ومجهود في التنقل.
• لو بتدور على سكن: بص على جودة الحياة والخدمات وقرب المشروع من الأماكن اللي بتتعامل معاها كل يوم.
• ولو هدفك الاستثمار: متبصش لاسم المنطقة بس، بص على المشروع نفسه، المطور، مرحلة التنفيذ، وخطة التنمية في المنطقة، لأن دول هما اللي بيأثروا على قيمة استثمارك.
في النهاية، مش المنطقة هي اللي بتحدد إذا كان قرارك صح أو غلط، اللي بيحدد ده هو اختيار المشروع المناسب لهدفك.

CTA
لو محتار بين منطقتين، اكتبهم في الكومنتات وهعمل مقارنة بينهم في فيديو جاي.

END LINE
القرار الصح بيبدأ باستشارة صح.`},{title:"س 6 · جالي عميل قاللي... هستنى الأسعار تنزل",hook:"هستنى الأسعار تنزل... دي أكتر جملة بسمعها، وده اللي حصل.",answer:`س 6 · د. شيرين سمير
جالي عميل كان مستني الأسعار تنزل... وده اللي حصل.

HOOK
هستنى الأسعار تنزل... دي أكتر جملة بسمعها، وده اللي حصل.

INTRO
أنا د. شيرين سمير — Investment & Real Estate Consultant

BODY
ومن فترة جالي عميل قالي نفس الجملة:
"هستنى الأسعار تنزل وبعدها هشتري."
فسألته سؤال واحد:
"إيه اللي مستنيه يحصل؟"
وساعتها اكتشف إنه معندوش إجابة واضحة.
الحقيقة إن قرار الشراء مينفعش يتبني على توقعات، لازم يتبني على حقائق.
قبل ما تقرر تستنى، اسأل نفسك 3 أسئلة:
• أولاً: هل الوحدة اللي لقيتها مناسبة لاحتياجاتك وميزانيتك؟
• ثانياً: هل المشروع مناسب لهدفك، سواء كان سكن أو استثمار؟
• ثالثاً: لو استنيت... إيه خطتك؟ وهل عندك سبب حقيقي للتأجيل، ولا مجرد أمل إن الأسعار تتغير؟
لأن القرار الصح مش إنك تشتري بسرعة، ولا إنك تستنى...
القرار الصح إنك تشتري في الوقت المناسب ليك بناءً على دراسة، مش توقع.

CTA
لو محتار هل الوقت مناسب للشراء ولا لأ، ابعت كلمة "استشارة" وهنساعدك تقيم قرارك بناءً على هدفك وميزانيتك.

END LINE
القرار الصح بيبدأ باستشارة صح.`},{title:"س 7 · ليه ناس بتكسب ملايين من العقارات وناس بتخسر؟",hook:"مش كل اللي بيشتري عقار بيكسب... السر في التوقيت والنوع.",answer:`س 7 · د. شيرين سمير
ليه ناس بتكسب ملايين من العقارات وناس بتخسر؟

HOOK
مش كل اللي بيشتري عقار بيكسب... السر في التوقيت والنوع.

INTRO
أنا د. شيرين سمير — Investment & Real Estate Consultant

BODY
ناس كتير فاكرة إن مجرد شراء عقار معناه استثمار ناجح.
لكن الحقيقة غير كده.
الفرق بين اللي بيكسب واللي بيخسر غالباً بيكون في طريقة الاختيار.
الناس اللي بتكسب بتسأل نفسها:
• مين المطور اللي ورا المشروع؟
• المنطقة دي مستقبلها إيه؟
• هل السعر مناسب لقيمة المشروع؟
• وهل الوحدة مناسبة لهدفي، سكن ولا استثمار؟
أما الناس اللي بتخسر، فبتشتري لمجرد إن فيه خصم، أو أطول فترة تقسيط، أو لأن حد رشحلهم المشروع من غير دراسة.
افتكر دايماً: الاستثمار العقاري مش بيعتمد على الحظ، بيعتمد على اختيار صح مبني على معلومات وتحليل.
وعشان كده، قبل ما تشتري أي وحدة، اسأل وتأكد وادرس قرارك كويس.

CTA
لو هدفك الاستثمار، ابعت كلمة "استشارة" وهنساعدك تختار مشروع يناسب هدفك وميزانيتك.

END LINE
القرار الصح بيبدأ باستشارة صح.`},{title:"س 8 · إزاي أقيّم أي كمبوند وأنا ماشي جواه؟",hook:"أنا أول ما بدخل أي كمبوند ببص على 5 حاجات بس.",answer:`س 8 · د. شيرين سمير
إزاي أقيّم أي كمبوند وأنا ماشي جواه؟

HOOK
أنا أول ما بدخل أي كمبوند ببص على 5 حاجات بس.

INTRO
أنا د. شيرين سمير — Investment & Real Estate Consultant

BODY
أغلب الناس أول ما تدخل أي كمبوند بتنبهر بشكل المباني، أو اللاندسكيب، أو الكلوب هاوس.
لكن بالنسبة لي دي مش أول حاجات أقيّم بيها المشروع.
أنا ببص على 5 حاجات:
• أول حاجة: الموقع — هل قريب من الطرق والمحاور الرئيسية؟ وهل المنطقة دي عندها فرصة نمو فعلية؟
• تاني حاجة: المطور العقاري — مين المطور وسابقة أعماله عاملة إزاي؟ لأن اسم المطور بيفرق جداً في أي قرار شراء.
• تالت حاجة: الماستر بلان — هل توزيع المباني والخدمات مدروس، ولا فيه استغلال مبالغ فيه للمساحات؟
• رابع حاجة: الخدمات — هل الخدمات هتتنفذ فعلاً؟ وهل مناسبة لحجم المشروع وعدد السكان؟
• خامس وأهم حاجة: هل المشروع مناسب لهدف العميل؟ لأن المشروع الممتاز مش شرط يكون هو المشروع المناسب ليك.

CTA
لو بتفكر تشتري في أي كمبوند، ابعت كلمة "استشارة" وهنساعدك تختار المشروع المناسب لهدفك.

END LINE
القرار الصح بيبدأ باستشارة صح.`},{title:"س 9 · مش كل تقسيط يعتبر صفقة كويسة",hook:"متفرحش بالتقسيط قبل ما تعرف الكلام ده.",answer:`س 9 · د. شيرين سمير
مش كل تقسيط يعتبر صفقة كويسة.

HOOK
متفرحش بالتقسيط قبل ما تعرف الكلام ده.

INTRO
أنا د. شيرين سمير — Investment & Real Estate Consultant

BODY
كتير من الناس أول ما تسمع "مقدم قليل وتقسيط على سنين" بتحس إنها لقت أفضل صفقة.
لكن الحقيقة، التقسيط لوحده عمره ما كان معيار للحكم على أي مشروع.
قبل ما تفرح بنظام السداد، اتأكد من 4 حاجات:
• أولاً: السعر النهائي للوحدة — لأن ممكن القسط يكون مريح، لكن في النهاية تدفع مبلغ أكبر بكتير من قيمة الوحدة الحقيقية.
• ثانياً: قدرتك على الالتزام بالأقساط — اختار قسط يناسب دخلك، مش قسط يضغط عليك كل شهر.
• ثالثاً: قيمة المشروع — هل السعر مناسب للموقع والمطور والخدمات؟ ولا أنت بتدفع زيادة مقابل نظام السداد الطويل؟
• رابعاً: هدفك من الشراء — لأن المشروع المناسب للاستثمار مش شرط يكون هو الأفضل للسكن.
افتكر دايماً: التقسيط وسيلة للدفع، مش دليل إنك عملت صفقة ناجحة.

CTA
لو قدامك أكتر من مشروع ومحتار بينهم، ابعت كلمة "استشارة" وهنساعدك تقارن بينهم بالطريقة الصح.

END LINE
القرار الصح بيبدأ باستشارة صح.`},{title:"س 10 · أشتري دلوقتي ولا أستنى الأسعار تنزل؟",hook:"لو مستني الأسعار تنزل... اسمعني 30 ثانية.",answer:`س 10 · د. شيرين سمير
أشتري دلوقتي ولا أستنى الأسعار تنزل؟

HOOK
لو مستني الأسعار تنزل... اسمعني 30 ثانية.

INTRO
أنا د. شيرين سمير — Investment & Real Estate Consultant

BODY
السؤال ده من أكتر الأسئلة اللي بتتكرر:
"أشتري دلوقتي ولا أستنى الأسعار تنزل؟"
والإجابة مفيهاش نعم أو لأ، لكن فيها 3 عوامل لازم تبص عليهم:
• أولاً: هل لقيت وحدة مناسبة لهدفك؟ لأن الوحدة المناسبة مش بتكون متاحة طول الوقت.
• ثانياً: هل تقدر تلتزم بالمقدم والأقساط؟ لو ظروفك المالية مناسبة، يبقى توقيتك الشخصي أهم من انتظار السوق.
• ثالثاً: هل المشروع بيقدم قيمة حقيقية من حيث الموقع، المطور، ونظام السداد؟ لأن قرار الشراء بيتبني على قيمة المشروع مش على توقعات السوق.
افتكر: محدش يقدر يحدد إمتى السوق هيتغير، لكن تقدر تختار الوقت المناسب ليك بناءً على ظروفك وهدفك.

CTA
لو محتار إذا كان الوقت مناسب ليك ولا لأ، ابعت كلمة "استشارة" وهنساعدك تقيم موقفك.

END LINE
القرار الصح بيبدأ باستشارة صح.`},{title:"س 11 · مش بتشتري شقة... إنت بتختار الحياة اللي هتعيشها",hook:"محدش بيشتري شقة علشان الشقة... إنت بتختار المستقبل.",answer:`س 11 · د. شيرين سمير
مش بتشتري شقة... إنت بتختار الحياة اللي هتعيشها.

HOOK
محدش بيشتري شقة علشان الشقة... إنت بتختار المستقبل.

INTRO
أنا د. شيرين سمير — Investment & Real Estate Consultant

BODY
لما تيجي تختار بيتك، متبصش بس على عدد الأوض أو مساحة الريسبشن.
اسأل نفسك:
أنا عايز أعيش إزاي؟
• هل مهم بالنسبالك الهدوء؟
• هل وجود نادي أو مساحات خضراء هيفرق معاك؟
• هل المدارس والخدمات قريبة من بيتك؟
• هل وقت الطريق للشغل هيكون مناسب؟
• وهل المكان يناسب أسلوب حياتك بعد 5 أو 10 سنين؟
لأن في النهاية، إنت مش بتشتري أربع حيطان... إنت بتختار المكان اللي هتعيش فيه كل يوم.
وعشان كده، اختيار المشروع الصح بيبدأ باختيار الحياة اللي تناسبك.

CTA
قولّي في الكومنتات: إيه أهم حاجة بالنسبالك في المكان اللي هتعيش فيه؟

END LINE
القرار الصح بيبدأ باستشارة صح.`},{title:"س 12 · أكتر سؤال اتسألته الشهر ده",hook:"أكتر سؤال اتسألته الشهر ده... وإجابته هتوفر عليك آلاف الجنيهات.",answer:`س 12 · د. شيرين سمير
أكتر سؤال اتسألته الشهر ده... وإجابته هتوفر عليك آلاف الجنيهات.

HOOK
أكتر سؤال اتسألته الشهر ده... وإجابته ممكن توفر عليك آلاف الجنيهات.

INTRO
أنا د. شيرين سمير — Investment & Real Estate Consultant

BODY
أكتر سؤال وصلني كان:
"أشتري من الشركة مباشرة، ولا أشتري عن طريق مستشار عقاري؟"
والإجابة:
لو المستشار شاطر، فهو مش بيزود عليك أي تكلفة، لكن بيوفر عليك وقت ومجهود كبير، وبيساعدك تقارن بين مشاريع مختلفة بدل ما كل شركة تعرض عليك مشروعها بس.
كمان بيساعدك:
- تفهم تفاصيل أنظمة السداد.
- تقارن الأسعار الحقيقية.
- وتختار المشروع اللي يناسب هدفك، مش المشروع اللي عليه أكبر حملة دعاية.
علشان كده، دور المستشار العقاري الحقيقي مش إنه يبيعلك، دوره إنه يساعدك تاخد قرار صح.

CTA
لو عندك أي سؤال عن السوق العقاري، ابعت كلمة "استشارة" وهجاوبك عليه في الفيديوهات الجاية.

END LINE
القرار الصح بيبدأ باستشارة صح.`}]},shereen_plan:{id:"shereen_plan",client:"أ/ شيرين سمير · استشارات واستثمار عقاري",title:"بلان محتوى شهر 9",badge:"بلان شهر 9",type:"sheet_plan",hook:"خطة شاملة لشهر سبتمبر تضم 12 ريلز استثماري، 10 بوستات وكاروسيل، وميكس الخلاصة للساحل الشمالي ورأس الحكمة والعاصمة.",tables:[{title:"مصفوفة محتوى شهر 9 الاستثمارية (شيرين سمير)",headers:["نوع المحتوى","عنوان الفكرة / المحور","الهدف والتصنيف","الرسالة الجوهرية"],rows:[["ريل استثماري 01","رأس الحكمة بعد كل التطوير ده... الاستثمار فيها لسه يستاهل؟","Market Analysis","تحليل الفرص الاستثمارية الحقيقية بمصداقية"],["ريل استثماري 02","لو معاك 5 مليون جنيه... هتشتري ولا تستثمر؟","Investment Education","الفرق الجوهري بين شراء السكن وعائد الاستثمار"],["ريل استثماري 03","3 حاجات لو مش موجودين في المشروع... هقولك بلاش تشتري","Trust & Authority","معايير شيرين قبل ترشيح أي مشروع للمستثمر"],["ريل استثماري 04","ليه نفس المنطقة فيها وحدات سعرها بيزيد ووحدات تانية لأ؟","Market Education","تأثير الموقع والمطور والنوع على نمو رأس المال"],["ريل استثماري 05","لو المطور بيقولك 'أعلى عائد'... تسأله إيه؟","Myth Busting","الفرق بين الوعود التسويقية والأرقام المحللة فعلياً"],["ريل استثماري 06","رأس الحكمة ولا الساحل القديم؟ القرار مش بالاسم","Comparison","المقارنة الموضوعية حسب هدف المشتري وميزانيته"],["بوست كاروسيل 01","7 حاجات أقارن بينهم قبل ما أقولك المشروع ده مناسب ليك","Saves & Authority","الهدف، الموقع، المطور، السعر، السداد، الاستلام، الـ Resale"],["بوست كاروسيل 02","رأس الحكمة في 2026... إيه اللي اتغير فعلًا؟","SIS Analysis","التطوير، البنية التحتية، المشروعات، الضيافة، والاستثمار"],["بوست كاروسيل 03","قبل ما تقول 'السعر غالي'... قارن الـ 5 حاجات دول","Education","سعر المتر، الموقع، نوع الوحدة، المطور، وخطة السداد"],["بوست ستاتيك 04","العقار الأرخص مش دايمًا هو الصفقة الأفضل","Value vs Price","تقييم الصفقة بالقيمة المضافة وليس فقط بالرقم الأقل"],["بوست تحليلي 05","ROI مش مجرد رقم مكتوب في بروشور","Financial Awareness","كيفية قراءة وتحليل العائد الاستثماري على الأصول العقارية"],["بوست مشروع 06","Project Spotlight: SALT Marina Analysis","Spotlight","تحليل شامل لمشروع واحد بدلاً من الإعلانات العشوائية"]]}]},nasr_pharma_reels:{id:"nasr_pharma_reels",client:"صيدلية النصر · بإشراف د/ أحمد العربي",title:"ريلز بدائل الأدوية والكوزماتكس",badge:"7 ريلز طبية",type:"reels",hook:"سكريبتات توعوية دوائية وتجميلية يقدمها د. أحمد العربي عن بدائل النواقص، تصحيح الأخطاء، وكشف أسرار الكوزماتكس والإندومي.",reels:[{title:"ريل 1 · بدائل الـ OTC (الدواء الناقص)",hook:"أوعى تمشي قبل ما تعرف المعلومة دي!",answer:`ريل: الدواء اللي بتدور عليه مش موجود؟
Hook
أوعى تمشي قبل ما تعرف المعلومة دي! دخلت صيدلية ولقيت دواءك ناقص؟...
Intro
أنا دكتور/صيدلي...
كتير من الناس أول ما تسمع إن الدواء مش موجود، تفتكر إن العلاج وقف أو تبدأ تدور على أي بديل من ترشيحات الإنترنت أو كلام الناس.
وده ممكن يكون غلط.
Body
في أدوية كتير ليها أكتر من اسم تجاري ، لكن بتحتوي على نفس المادة الفعالة وبنفس التركيز، وساعتها يقدر الصيدلي يرشح بديل مناسب.
لكن في المقابل، مش كل دواء ليه بديل ينفع لأي شخص، لأن الاختيار بيتحدد حسب:
المادة الفعالة.
التركيز.
الشكل الدوائي (أقراص - شراب - نقط...).
عمر المريض وحالته الصحية.
علشان كده مينفعش تغير الدواء من نفسك، حتى لو حد قالك: "أنا جربته وكان كويس."
Conclusion
البديل الصح مش مجرد اسم تاني...
البديل الصح هو اللي يناسب حالتك ويحقق نفس الهدف العلاجي بأمان.
CTA
مش لاقي دواءك؟ ابعتلنا اسمه في رسالة، وإحنا هنراجع توافره أو نساعدك في اختيار بديل مناسب مع الصيدلي.`},{title:"ريل 2 · متاخدش ترشيحات الأدوية من السوشيال ميديا",hook:"أخطر روشتة... هي اللي بتاخدها من الكومنتات.",answer:`🎬 ريل 2: متاخدش ترشيحات الأدوية من السوشيال ميديا
Hook
أخطر روشتة... هي اللي بتاخدها من الكومنتات
Intro
أنا د. أحمد العربي.
كل يوم بدخل الصيدلية بلاقي حد بيقول:
"شوفت الدوا ده على فيسبوك."
أو
"واحد صاحبي جربه وقال إنه ممتاز."
لكن الحقيقة إن دي من أكتر الأخطاء اللي بنشوفها.
Body
خليني أسألك سؤال...
لو اتنين عندهم صداع...
هل لازم ياخدوا نفس الدواء؟
الإجابة: لا.
لأن نفس العرض ممكن يكون سببه مختلف من شخص للتاني.
غير كده، اختيار الدواء بيتأثر بـ:
سنك.
حالتك الصحية.
الأمراض المزمنة.
الأدوية اللي بتاخدها.
ولو في حمل أو رضاعة.
حتى أدوية الـ OTC مش معناها إنها مناسبة لكل الناس.
علشان كده، متخليش ترشيح من فيديو أو كومنت يبقى هو قرار علاجك.
Conclusion
العلاج الصح مش اللي الناس كلها بتتكلم عنه... العلاج الصح هو اللي يناسب حالتك أنت.
CTA
قبل ما تشتري أي دواء بناءً على ترشيح من السوشيال ميديا... ابعتلنا أو تعالى اسأل د. أحمد العربي في صيدلية النصر، وهتلاقي ترشيح مبني على حالتك، مش على التريند.`},{title:"ريل 3 · بدائل الكوزماتكس",hook:"هقولك سر شركات الكوزماتكس اللي ناس كتير متعرفوش.",answer:`س 3 صيدلية النصر: بدائل الكوزماتكس
Hook
هقولك سر شركات الكوزماتكس اللي ناس كتير متعرفوش.
Intro
أنا د. أحمد العربي.
كتير من الناس أول ما المنتج بتاعها يخلص ، تفضل تدور على نفس البراند، ولو ملقتوش تشتريه بأي سعر أو تلف على كذا مكان عشان تلاقيه.
لكن الحقيقة غير كده.
Body
في عالم الكوزماتكس، اسم البراند مش هو اللي بيحدد إذا كان المنتج مناسب ليك ولا لأ.
اللي بيفرق فعلًا هو:
المادة الفعالة.
تركيزها.
نوع بشرتك.
والمشكلة اللي المنتج معمول علشان يعالجها.
وعشان كده، ممكن تلاقي منتج تاني بنفس الفاعلية، وسعره أقل، ويكون مناسب لبشرتك بنفس الكفاءة.
وده سبب إننا في الصيدلية لما بنرشح بديل، بنبص على مكونات المنتج واحتياجات بشرتك، مش على اسم البراند.
Conclusion
اختيار البديل الصح مش معناه تشتري نفس الاسم...
معناه تختار المنتج اللي يناسب بشرتك ويحقق نفس النتيجة.
CTA
لو المنتج اللي بتستخدميه مش موجود أو سعره زاد، ابعتلنا اسمه ونوع بشرتك، ود. أحمد العربي هيرشحلك بديل مناسب ليكي بناءً على احتياج بشرتك، مش على اسم البراند`},{title:"ريل 4 · أغلى منتج مش دايمًا هو الأفضل",hook:"كل ما المنتج سعره أعلى... يبقى أكيد أحسن؟ الحقيقة لأ.",answer:`س 4 صيدلية النصر: أغلى منتج مش دايمًا هو الأفضل
Hook
كل ما المنتج سعره أعلى... يبقى أكيد أحسن؟ الحقيقة لأ.
Intro
أنا د. أحمد العربي.
من أكتر الحاجات اللي بشوفها في الصيدلية إن ناس كتير بتختار منتجات العناية على أساس السعر، وبتفتكر إن الأغلى هو اللي هيجيب أفضل نتيجة.
لكن الحقيقة إن السعر لوحده عمره ما كان دليل على جودة المنتج أو إنه مناسب ليك.
Body
المنتج اللي ناسب غيرك، أو المنتج الأغلى في السوق، مش شرط يكون الأنسب لبشرتك.
لأن اختيار منتج العناية بيعتمد على:
نوع بشرتك.
المشكلة اللي بتعاني منها.
المكونات الفعالة الموجودة في المنتج.
فيه منتجات سعرها أقل، لكن مكوناتها مناسبة لبشرتك أكتر، وبالتالي ممكن تديك نتيجة أفضل من منتج أغلى بكتير.
علشان كده، متخليش السعر هو اللي يحدد اختيارك... خلي احتياج بشرتك هو اللي يحدد.
Conclusion
المنتج المناسب هو اللي يحقق النتيجة لبشرتك، مش اللي سعره أعلى.
CTA
قبل ما تشتري أي منتج عناية، ابعتلنا نوع بشرتك والمشكلة اللي بتواجهها، ود. أحمد العربي هيساعدك تختار المنتج الأنسب ليك، ويوفر عليك فلوس ممكن تدفعها في منتج مش مناسب.`},{title:"ريل 5 · بدائل أدوية الحموضة (جافيسكون بـ 144 ج vs تلت أدوية بـ 140 ج)",hook:"ليه تشتري جافيسكون بـ 144 جنيه لما ممكن بـ 140 جنيه تاخد تلت أدوية مع بعض؟",answer:`ريل الادويه بالمعلومات
الهوك : هنبدا علطول ف الاسكريبت و هنقول ليه تشتري و نكمل الاسكريبت
ليه تشتري شراب جافيسكون دبل أكشن بـ 144 جنيه عشان الحموضة. لما ممكن بـ 140 جنيه بس تاخد تلت أدوية مع بعض : شراب توبانوكس اللي بيعادل حموضة المعدة بسرعة ومعه أقراص دايجستولين المنظمة للهضم المتقلص ومعه أعشاب سيكم لاكسي الطبيعية المنظمة لحركة القولون والملينة الطبيعية.
ال CTA :
وفر فلوسك وريح جهازك الهضمي كله بذكاء. كل أدوية التحدي دي موجودة في الصيدلية جاهز , دلوقتي اكتب في الكومنتات إيه أكتر مشكلة تعباك  في بطنك وهبعتلك علاجها الأوفر فوراً.
____
من غير معلومات :
ليه تشتري شراب جافيسكون دبل أكشن بـ 144 جنيه
. لما ممكن بـ 140 جنيه بس تاخد تلت أدوية مع بعض : شراب توبانوكس ومعه أقراص دايجستولين ومعه أعشاب سيكم لاكسي.
ال CTA :
وفر فلوسك وريح بطنك بذكاء. كل أدوية التحدي دي موجودة في الصيدلية جاهزة دلوقتي اكتب في الكومنتات إيه أكتر مشكلة تعباك في بطنك وهبعتلك علاجها الأوفر فوراً.`},{title:"ريل 6 · تحدي الكوزمو (ليف-إن ليفز بـ 300 ج vs روتين كامل بـ 250 ج)",hook:"هثبت لكِ في أقل من دقيقة إن منتج واحد غالي مش هيعمل اللي هتعمله مجموعة كاملة بنفس السعر ويمكن أقل.",answer:`ريل الكوزمو بعد التعديل
الهوك : هثبت لكِ في أقل من دقيقة إن منتج واحد غالي مش هيعمل اللي هتعمله مجموعة كاملة بنفس السعر ويمكن أقل.
1 ليه تجيبي ليف-إن ليفز بـ 300 جنيه. لما ممكن بـ 250 بس تاخدي شامبو بليس ومعاه حمام كريم بايو سوفت.
2 وليه تجيبي صن بلوك بوباي جيل بـ 350 جنيه. لما بنفس الـ 350 جنيه تقدري تاخدي صن بلوك ميلا تايم ومعه كريم النهار إيفا ناتشورال جلو.
3 وليه تشتري مويست-1 بادي ميلك بـ 300 جنيه. لما ممكن بالـ 300 دول تاخدي لوشن كليو ومعه لوشن البابايا RDL.
4 وليه تدفعي في كريم أليجون يوريا 350 جنيه. لما بـ 300 جنيه بس تاخدي 3 منتجات مع بعض: لوشن كليو ومقشر القدمين وكريم هيبتا كارباميد 20%.
5 وأخيراً ليه تجيبي غسول LB بـ 300 جنيه. لما بنفس الـ 300 جنيه تقدري تاخدي غسول إيفا الأزرق ومعاه جل شاين فير.
ال CTA :
الحسبة واضحة الروتين الذكي والاقتصادي دايماً بيكسب. كل مجموعات التحدي دي موجودة عندنا في الصيدلية سيبولي في الكومنتات إيه مشكلتك الأساسية وهقولك الروتين الأوفر ليها.`},{title:"ريل 7 · سكريبت الإندومي الطبي الشامل",hook:"إندومي؟ مشهد تمثيلي بين أم وابنها مع د. أحمد العربي وتوضيح الحقيقة الطبية.",answer:`ريل 1 | الإندومي
الفكرة : نبدأ بمشهد تمثيلي بسيط بين أم وابنها، وبعدها ندخل على د. أحمد العربي يوضح الحقيقة بشكل طبي وبسيط ، وفي النهاية نرجع للمشهد مرة تانية.
—-----------------
المدة : 50–60 ثانية تقريبًا.
المشهد الأول | B-Roll + Voice Over
التصوير: الأم في المطبخ بتحضر الإندومي، والابن مستني ومستعجل. لقطات قريبة للإندومي، البهارات، والطبق وهو بيتحضر.
Voice Over:
كلنا تقريبًا عدينا على المرحلة دي... ترجع من المدرسة أو الجامعة جعان، وأسرع حل يخطر في بالك؟ الإندومي.
Cut على الابن وهو بيبدأ ياكل.
الأم:
بس مش كل يوم يا حبيبي.
الابن:
ليه؟ ما أنا بحبه
المشهد الثاني | د. أحمد العربي
التصوير: الدكتور في الصيدلية، يبدأ الكلام مباشرة للكاميرا.
د. أحمد العربي:
طب هو الإندومي فعلًا مضر؟ ولا المشكلة في الطريقة اللي بناكله بيها؟
الحقيقة إن أكل الإندومي مرة من وقت للتاني مش معناه إنه خطر، لكن المشكلة لما يتحول لوجبة أساسية بشكل متكرر.
لأن بعض أنواع الإندومي بتكون عالية في الصوديوم والدهون، وفي نفس الوقت الوجبة نفسها مش بتوفر التنوع الغذائي اللي جسمك محتاجه.
ولو هتاكله ، ممكن تخليه وجبة أفضل بإضافة مصدر بروتين زي البيض، ومعاه خضار، وكمان تقلل كمية التتبيلة حسب المنتج.
المشهد الثالث | رجوع للأم والابن
التصوير: الأم بتحط جنب طبق الإندومي بيضة وخضار، والابن يبصلها باستغراب.
الابن:
هو أنا طلبت إندومي ولا وجبة كاملة؟
الأم:
ما إحنا هنأكلك صح بقى.
لقطة ضحكة بسيطة بينهم.
المشهد الأخير | د. أحمد العربي
الخلاصة؟ الإندومي مش وجبة ممنوعة، لكن مينفعش يكون هو وجبتك الأساسية كل يوم. التنوع في أكلك هو اللي يفرق.
CTA:
ولو عندك سؤال عن أكلك أو عاداتك الغذائية، اسأل د. أحمد العربي وخليك دايمًا واعي باختياراتك."`}]},nasr_mother_child:{id:"nasr_mother_child",client:"صيدلية النصر · نصايح النصر",title:"سلسلة الأم والطفل (5 ريلز)",badge:"5 ريلز أمهات",type:"reels",hook:"دليل عملي للأمهات بإشراف د. أحمد العربي من صيدلية النصر: الطوارئ، السخونة، روتين الاستحمام، شنطة الحضانة، والبعوض.",reels:[{title:"س 1 · طفلك سخن؟ إيه اللي لازم يبقى عندك في البيت؟",hook:"أهم 3 حاجات لازم يكونوا موجودين عندك في البيت لو طفلك سخن… قبل ما الحرارة تعلى.",answer:`طفلك سخن؟ إيه اللي لازم يبقى عندك في البيت؟
الهوك:
أهم 3 حاجات لازم يكونوا موجودين عندك في البيت لو طفلك سخن… قبل ما الحرارة تعلى
الانترو :
أنا دكتور/ احمد من صيدلية النصر، وخليني أقولك إيه اللي لازم يبقى عندك.
البادي :
أول حاجة : ترمومتر رقمي، عشان تعرفي درجة الحرارة بدقة ومتعتمديش على إحساس إيدك.
تاني حاجة : خافض حرارة مناسب للأطفال، والجرعة لازم تتحدد حسب وزن الطفل وتوجيه الطبيب أو الصيدلي.
وتالت حاجة : سرنجة مدرجة لقياس جرعة الدواء بدقة، لأن معلقة البيت مش وسيلة دقيقة للقياس.
ولو الحرارة مستمرة أو عالية جدًا، أو الطفل حالته مش طبيعية، متعتمديش على العلاج المنزلي واستشيري الطبيب.
CTA :
ودي كانت نصيحة النهارده من صيدلية النصر… تابعي سلسلة نصايح النصر، عشان كل معلومة صح توصلك في وقتها.`},{title:"س 2 · شنطة الطوارئ لكل أم",hook:"شنطة الطوارئ لكل أم… إيه اللي لازم يكون موجود فيها؟",answer:`شنطة الطوارئ لكل ام
الهوك :
شنطة الطوارئ لكل أم… إيه اللي لازم يكون موجود فيها؟
الانترو :
أنا دكتور أحمد من صيدلية النصر، والنهارده هقولك إيه أهم الحاجات اللي لازم تكون جاهزة في شنطة الطوارئ.
البادي :
أول حاجة : مستلزمات الجروح البسيطة، زي المطهر المناسب، الشاش، واللاصق الطبي.
تاني حاجة : محلول ملحي للأنف، وده ممكن تحتاجيه في حالات البرد وانسداد الأنف.
تالت حاجة : كمادات باردة ، عشان تبقى جاهزة في حالة الاحتياج.
ورابع حاجة : الترمومتر، عشان تتابعي درجة حرارة طفلك بدقة.
ولو طفلك بياخد أدوية بشكل منتظم، خلي أدويته الأساسية موجودة في الشنطة، مع التأكد من صلاحيتها.
CTA:
اعملي حسابك و جهزي شنطة الطوارئ من دلوقتي ، ودي كانت نصيحة نصايح النصر. تابعي النصر عشان كل معلومة صح توصلك في وقتها.`},{title:"س 3 · روتين استحمام الطفل: إيه الأساسي وإيه الزيادة؟",hook:"روتين استحمام طفلك مش محتاج 10 منتجات… إيه الأساسي وإيه الزيادة؟",answer:`روتين استحمام الطفل: إيه الأساسي وإيه الزيادة؟
الهوك :
روتين استحمام طفلك مش محتاج 10 منتجات… إيه الأساسي وإيه الزيادة؟
الانترو :
أنا دكتور أحمد من صيدلية النصر، والنهارده هقولك إيه اللي طفلك محتاجه فعلًا في روتين الاستحمام، وإيه ممكن تستغني عنه.
البادي :
نبدأ بالأساسيات : غسول لطيف ومناسب لبشرة الأطفال ، وشامبو مخصص للأطفال ، وبعد الاستحمام مرطب مناسب لبشرته ، خصوصًا لو بشرته جافة.
ولو الطفل لسه صغير، اختاري المنتجات الخالية من العطور القوية والمكونات اللي ممكن تهيّج البشرة.
أما المنتجات الزيادة ، زي السكربات، العطور، وكثرة المنتجات من غير احتياج… مش معناها إن روتين طفلك أحسن ، بالعكس ممكن تسبب جفاف أو تهيج للبشرة.
الأهم مش عدد المنتجات… الأهم إنها تكون مناسبة لسن الطفل ونوع بشرته.
CTA:
خلي روتين طفلك أبسط وأصح… ودي كانت نصيحة من سلسلة نصايح النصر. تابعي النصر عشان كل معلومة صح توصلك في وقتها.`},{title:"س 4 · إيه اللي يتحط في شنطة الحضانة؟",hook:"إيه اللي لازم في شنطة الحضانة؟",answer:`إيه اللي يتحط في شنطة الحضانة؟
الهوك :
إيه اللي لازم في شنطة الحضانة؟
الانترو:
أنا دكتور أحمد من صيدلية النصر، وخليني أقولك أهم حاجات فعلًا لازم تكون موجودة.
البادي :
أول حاجة : مناديل مبللة مناسبة لبشرة الأطفال، ويفضل تكون خالية من العطور القوية لتقليل تهيج البشرة.
ولو طفلك بيستخدم حفاضات ، خلي معاه عدد زيادة، ومعاها كريم مناسب لمنطقة الحفاض.
كمان زجاجة مياه مكتوب عليها اسمه ، وتكون سهلة الاستخدام عشان يعرف يستخدمها بنفسه.
ولو طفلك عنده حساسية أو بياخد دواء بشكل منتظم ، لازم الحضانة تكون عارفة ، ومعاها تعليمات واضحة من الطبيب عن الدواء وطريقة استخدامه.
وفي الآخر، كيس للهدوم المتسخة وطقم هدوم إضافي… عشان أي موقف مفاجئ.
CTA:
جهزي شنطة طفلك صح من قبل ما يحتاجها… ودي كانت نصيحة من سلسلة نصايح النصر. تابعي النصر عشان كل معلومة صح توصلك في وقتها.`},{title:"س 5 · لو ابنك بيصحى كل شوية بسبب البعوض",hook:"لو ابنك بيصحى كل شوية بسبب البعوض… ركزي في اللي جاي.",answer:`لو ابنك بيصحى كل شوية بسبب البعوض
الهوك :
لو ابنك بيصحى كل شوية بسبب البعوض… ركزي في اللي جاي
الانترو:
أنا دكتور أحمد من صيدلية النصر، وخليني أقولك إزاي تحمي طفلك من البعوض بطريقة آمنة.
البادي:
أول حاجة ، لو طفلك صغير، ناموسية السرير من أبسط وأأمن طرق الحماية أثناء النوم.
ولو هتستخدمي طارد للبعوض ، اختاري منتج مخصص للأطفال ومناسب لعمره، ومتستخدميهوش قبل ما تتأكدي من تعليمات الاستخدام على العبوة.
وفي الصيدلية هتلاقي أكتر من اختيار للحماية من البعوض، لكن مش كل منتج مناسب لكل طفل… السن وطريقة الاستخدام بيفرقوا.
ومتستخدميش أي زيت أو خلطة منزلية على جلد طفلك لمجرد إنها طبيعية، لأن ممكن تسبب تهيج للبشرة.
ولو حصلت لدغ ة، متخليش الطفل يحكها عشان متسببش التهاب، ولو ظهر تورم شديد أو أعراض غير طبيعية، استشيري الطبيب."
CTA:
عايزة تختاري وسيلة الحماية المناسبة لطفلك؟ اسألي صيدلية النصر، وهنساعدك تختاري الأنسب حسب سنه.
ودي كانت نصيحة من سلسلة نصايح النصر… تابعي النصر عشان كل معلومة صح توصلك في وقتها.`}]},nasr_plan:{id:"nasr_plan",client:"صيدلية النصر · طهطا",title:"بلان شهري 8 و 9",badge:"بلان شهرين",type:"sheet_plan",hook:"أكبر مصفوفة محتوى صيدلاني وتجميلي تتضمن نشرات الأدوية، عروض العناية بالبشرة، خدمة التوصيل المنزلي، وبدائل الـ OTC.",branchInfo:{location:"طهطا - أمام موقف شطورة - أمام المزلقان المقفول",phone:"خدمة التوصيل السريع للمنازل: 01212137434",specialty:"Pharmacy, Cosmeceuticals, Pediatric Care & Home Delivery"},tables:[{title:"مصفوفة محتوى صيدلية النصر (Pharma & Cosmo Marketing Plan)",headers:["القسم / الباقة","الموضوع / الحملة","الهدف التسويقي","أرقام التوصيل"],rows:[["ريلز دوائية","بدائل الـ OTC ونواقص الأدوية الأكثر طلباً","تثقيف المرضى وبناء الثقة","ديليفري: 01212137434"],["ريلز كوزماتكس","بدائل منتجات العناية بالبشرة والشعر الاقتصادية","تنشيط مبيعات قسم الكوزمو","ديليفري: 01212137434"],["سلسلة الأم والطفل","شنطة الطوارئ وسخونة الأطفال وروتين الرضع","جذب الأمهات وبناء ولاء العائلة","ديليفري: 01212137434"],["عروض التوصيل","طلب الروشتة عبر الواتساب وتوصيل مجاني فوري","زيادة طلبات الدليفري السريعة","واتساب: 01212137434"]]}]},sondos_posts:{id:"sondos_posts",client:"كشري سندس · طهطا",title:"بوستات كشري سندس",badge:"4 بوستات معتمدة",type:"approved_posts",hook:"محتوى بوستات سوشيال ميديا الرسمي لمطعم كشري سندس (طهطا) — معتمد وجاهز للنشر.",posts:[{topic:"بوست 01 · للأكيلة بس 😋",title:"للأكيلة بس 😋",caption:`لو شايف إن طبق كشري واحد مش كفاية يبقى المكان ده معمول علشانك 🍲
في سندس هتلاقي الطعم الأصيل والخلطة اللي تخليك تستمتع بكل لقمة

قولنا في الكومنتات إيه أكتر إضافة مابتقدرش تاكل الكشري من غيرها 👇

📍 العنوان: طهطا – شارع صلاح سالم أمام مجلس المدينة
📞 01101020091
📞 01095676867`},{topic:"بوست 02 · وقت الكشري رجع 🍲",title:"وقت الكشري رجع 🍲",caption:`ولما يرجع يبقى لازم يكون بطعم يرضيك من أول لقمة لآخر معلقة
رز ومكرونة وعدس وصوصات وبصل محمر متحضرين علشان تعيش تجربة كشري تستحقها

مستنيين طلبك أو زيارتك النهارده ❤️

📍 العنوان: طهطا – شارع صلاح سالم أمام مجلس المدينة
📞 01101020091
📞 01095676867`},{topic:"بوست 03 · كمّل السهرة بطعم يستاهل 🌙",title:"كمّل السهرة بطعم يستاهل 🌙",caption:`سواء خارج مع أصحابك أو راجع من مشوار طويل طبق كشري من سندس هو الاختيار اللي هيكمل يومك بأحلى طعم 🍲

مين هيشاركك طبق الكشري النهارده اعمله منشن 👇

📍 العنوان: طهطا – شارع صلاح سالم أمام مجلس المدينة
📞 01101020091
📞 01095676867`},{topic:"بوست 04 · كشري ولا طاجن 🤔",title:"كشري ولا طاجن 🤔",caption:`اختيار صعب لأن كل واحد ليه طعمه اللي ملوش منافس
سواء نفسك في طبق كشري أصيل أو طاجن بطعم شرقي هتلاقي اللي يرضيك في سندس 🍲

اكتب اختيارك في الكومنتات وقولنا فريق الكشري ولا فريق الطواجن 👇

📍 العنوان: طهطا – شارع صلاح سالم أمام مجلس المدينة
📞 01101020091
📞 01095676867`}]},signorita_reel:{id:"signorita_reel",client:"سينيوريتا · أزياء وعبايات نسائية فاخرة",title:"Reel 2 — عيد ميلادنا… وهداياه ليكي 🎁",badge:"ريل المسابقة",type:"script",duration:"40 – 45 ثانية",concept:"Reveal المسابقة والجوائز — الكشف التشويقي عن الهدايا الكبرى بمناسبة عيد ميلاد سينيوريتا.",goal:"Awareness — تعريف أكبر عدد من الناس بالمسابقة وتشجيعهم على الشراء والمشاركة.",hook:"عندنا خبر حلو… وإنتِ ممكن تكوني صاحبة واحدة من الهدايا دي!",audio:"موسيقى احتفالية حماسية وإيقاعية سريعة تتناغم مع كشف الهدايا والمؤثرات الصوتية السريعة (Fast Swooshes & Dings).",campaignLine:"عيد ميلادنا… وهداياه ليكي",cta:"تعالي سنيوريتا ، خدي قسيمتك… وسيبي الباقي على الحظ ✨",scenes:[{num:"المشهد 1 — الـ HOOK | (00 – 04 ثواني)",visual:`البنت تدخل الكادر بسرعة وحيوية، وفي إيدها Gift Box أنيق، وتفتحه ناحية الكاميرا بحماس وابتسامة تشويق.
• حركة الكاميرا: Dynamic Entry ⬅ Push In سريع على الصندوق المفتوح.`,dialogue:"عندنا خبر حلو… وإنتِ ممكن تكوني صاحبة واحدة من الهدايا دي!",textOnScreen:"سنيوريتا عندها هدايا ليكي 🎁",sfx:"صوت Whoosh سريع عند فتح الصندوق وانطلاق المزيكا الاحتفالية المبهجة."},{num:"المشهد 2 | مناسبة الاحتفال (04 – 10 ثواني)",visual:`لقطات سريعة سينمائية من داخل المحل مع زينة عيد الميلاد (Birthday decorations) وتفاصيل أناقة المعروضات.
• حركة الكاميرا: Pan سريع ⬅ Medium Shot على البنت وسط الديكورات.`,dialogue:"بمناسبة عيد ميلاد سنيوريتا ، قررنا إن الهدايا السنة دي تكون من نصيبكم إنتوا.",textOnScreen:"عيد ميلادنا… وهداياه ليكي ✨",sfx:"تصاعد الإيقاع الموسيقي الاحتفالي مع أجواء البهجة."},{num:"المشهد 3 — طريقة الدخول والسحب (10 – 18 ثانية)",visual:`البنت تمسك قسيمة السحب وتوضحها للكاميرا (Close-up واضح على القسيمة)، متبوعة بلقطة سريعة لتشكيلة من أحدث عبايات ومنتجات المحل.
• حركة الكاميرا: Close-up على القسيمة ⬅ Cut على المنتجات.`,dialogue:"بكل بساطة ، أي مشتريات بـ500 جنيه من سنيوريتا ، هتاخدي معاها قسيمة تدخلك السحب.",textOnScreen:"مشتريات بـ 500 جنيه = قسيمة سحب 🎟️",sfx:"صوت ختم القسيمة (Stamp Effect) أو صوت كاشير خفيف."},{num:"المشهد 4 — استعراض وكشف الجوائز Reveal (18 – 34 ثانية)",visual:`كل جائزة تظهر في Shot منفصل خاطف للعين مع Reaction وتعبيرات حماسية مبهجة من البنت:
1. 🥇 iPhone 11 (التركيز البصري الأبرز وإضاءة مبهرة).
2. 🥈 كبة كهربائية للمنزل والمطبخ.
3. 🥉 مروحة عصرية.
4. 🎧 سماعات إلكترونية أنيقة.
5. 🎟️ 10 قسائم مشتريات (Vouchers) من مطعم بدر الشام.
• حركة الكاميرا: Fast Cuts متتالية متزامنة مع النطق والمؤثر الصوتي.`,dialogue:`والجوائز؟
(Cut) iPhone 11!
(Cut) كبة!
(Cut) مروحة!
(Cut) وسماعات!
(Montage سريع) وكمان 10 Vouchers من بدر الشام!`,textOnScreen:"🥇 iPhone 11 | 🥈 كبة | 🥉 مروحة | 🎧 سماعات | 🎟️ 10 Vouchers بدر الشام",sfx:"Fast Swooshes + Dings رنين مع ظهور كل جائزة واسمها على الشاشة."},{num:"المشهد 5 — الـ CTA والختام (34 – 45 ثانية)",visual:`البنت تقف وسط المحل والجوائز/صورها ظاهرة في الخلفية، ثم تقرب للكاميرا بابتسامة تشجيعية وتوجه الدعوة للجمهور.
• حركة الكاميرا: Medium Shot ⬅ Push In قريب ودافئ ⬅ ظهور الشعار والبيانات.`,dialogue:"يعني بدل ما عيد ميلاد سنيوريتا يعدّي عادي… ممكن ترجعي من عندنا بجايزة! جهزي مشترياتك ، وصليها لـ500 جنيه ، وخدي قسيمتك… يمكن المرة الجاية اللي هنقول اسمها تكوني إنتِ!",textOnScreen:"اشتري بـ 500 جنيه 🎟️ وادخلي السحب 🎁",sfx:"موسيقى ختامية حماسية مع ظهور لوجو سينيوريتا وشعار الحملة."}],notes:["الـ iPhone 11 لازم يكون أول وأبرز جائزة بصرياً في الكادر مع إضاءة جذابة.","كل جائزة لها لقطة واضحة وسريعة بدون أي إطالة للحفاظ على رتم الريل السريع.","استخدام Fast Cuts احترافي في جزء استعراض الجوائز تزامناً مع الإيقاع الموسيقي.","تصوير تفاصيل وخامات المنتجات والعبايات داخل المحل بين الجمل حتى يفضل البراند حاضراً في وعي المشاهد.","Subtitles كبيرة وملونة وواضحة جداً للعين تظهر مع الكلام لحظياً.","عند نطق كل جائزة، يظهر اسمها والأيقونة على الشاشة في نفس اللحظة بالضبط.","نهاية الفيديو تثبيت الـ Campaign Line الرسمي: «عيد ميلادنا… وهداياه ليكي»."]},signorita_plan:{id:"signorita_plan",client:"سينيوريتا · Fashion & Abayas",title:"بلان محتوى سينيوريتا",badge:"بلان المحتوى",type:"sheet_plan",hook:"استراتيجية النشر للأزياء النسائية الفاخرة، تنسيق الإطلالات الموسمية، وإعلانات المناسبات والأعياد.",branchInfo:{location:"فروع سينيوريتا للأزياء والعبايات الخليجية الراقية",phone:"خدمة العملاء والطلب أونلاين",specialty:"Luxury Women Abayas & Haute Couture Fashion"},tables:[{title:"مصفوفة منشورات وإطلالات سينيوريتا (Signorita Fashion Schedule)",headers:["نوع المحتوى","عنوان الحملة / المنشور","الهدف","نوع التصميم"],rows:[["ريل تريندي","عيد ميلادنا وهداياه ليكي (Celebration Reel)","زيادة الزيارات والمبيعات","تصوير سينمائي داخل الفرع"],["كاروسيل فاشون","تنسيق العباية السوداء للمناسبات الرسمية","إبراز تفاصيل التطريز والخامات","جلسة تصوير موديل احترافية"],["بوست تفاعلي","اختاري إطلالتك المفضلة: الكلاسيك ولا المودرن؟","زيادة التفاعل والتعليقات","مقارنة تصميمين بجودة عالية"],["ريل ستايلينج","3 طرق مختلفة لارتداء الشيلة والأكسسوارات","تثقيف وإلهام المتابعات","ريل سريع بخطوات التنسيق"]]}]},raed_plan:{id:"raed_plan",client:"معامل الرائد · للتحاليل الطبية والتشخيص",title:"باقات وعروض معمل الرائد",badge:"باقات الفحص",type:"sheet_plan",hook:"خطة تسويق خدمات التحاليل الدقيقة، باقات الفحص الدوري الشامل، وخدمة سحب العينات المجانية من المنازل.",branchInfo:{location:"فروع معامل الرائد للتحاليل الطبية والتشخيص المخبري",phone:"خدمة سحب العينات المنزلية وحجز الفحوصات",specialty:"Clinical Pathology & Comprehensive Health Packages"},tables:[{title:"باقات الفحص الشامل والتحاليل الدورية (Al-Raed Diagnostic Packages)",headers:["اسم الباقة","التحاليل المشمولة","الفائدة الطبية","الجمهور المستهدف"],rows:[["باقة الفحص الشامل","صورة دم كاملة CBC + وظائف كبد وكلى + سكر صائم + دهون","اطمئنان عام على الصحة الحيوية","الجميع سنوياً"],["باقة السكر والضغط","سكر تراكمي HbA1c + وظائف كلى + يوريك أسيد + شحوم ثلاثية","متابعة دقيقة ومستمرة لأصحاب الأمراض المزمنة","مرضى السكري والضغط"],["باقة صحة المرأة","صورة دم + مخزون حديد Ferritin + فيتامين D + هرمونات الغدة TSH","علاج تساقط الشعر والإرهاق ومشاكل البشرة","السيدات والفتيات"],["باقة الأطفال والنمو","صورة دم + كالسيوم + تحليل براز وبول + هرمون النمو","متابعة النمو وعلاج الأنيميا وضعف التركيز","الأطفال وطلاب المدارس"]]}]},rehab_posts:{id:"rehab_posts",client:"هايبر الرحاب · تجزئة وسوبرماركت",title:"أفكار وبوستات عروض شهر 9",badge:"عروض 12 قسماً",type:"approved_posts",hook:"بنك أفكار وعروض شهر سبتمبر المعتمدة لكافة أقسام هايبر الرحاب (110 فكرة مقسمة على 12 قسماً ترويجياً).",posts:[{topic:"قسم البقالة والمواد الغذائية",title:"قسم البقالة والمواد الغذائية (أساسيات البيت والمطبخ)",caption:`عروض سبتمبر على أساسيات البيت: كل اللي بيتكرر في قائمة مشترياتك بسعر أفضل
"بتجيبهم كل شهر؟ يبقى استغل عرضهم" — تجميعة من المنتجات الأساسية
Bundle أساسيات المطبخ بسعر خاص
"املّي دولابك من غير ما تفضّي محفظتك" — مجموعة منتجات بخصومات
عروض على منتجات الفطار: حبوب إفطار + عسل + مربى + مشروبات
"مشتريات البيت للأسبوع؟ خلصها مرة واحدة" — تجميعة أسبوعية
عروض على المنتجات الأكثر استخدامًا في البيت
"لو هتعمل Stock للبيت.. ابدأ من هنا" — منتجات تستحق التخزين وقت العرض
اختيارات اقتصادية من نفس الفئة: المنتج الأساسي + البديل الأرخص
"3 حاجات لو ناقصين عندك في البيت هتحتاج تنزل مخصوص" مع عرضهم`,direction:"التركيز على التوفير في السلع الاستهلاكية المتكررة وباقات التخزين العائلية"},{topic:"قسم المشروبات",title:"قسم المشروبات والعصائر",caption:`"جهّز التلاجة لشهر سبتمبر" — عروض على المشروبات الأساسية
Bundle مشروبات للعيلة بسعر خاص
"اختار مشروبك.. وخلي السعر يختارك" — أكثر من اختيار بسعر مختلف
عروض على مشروبات اللانش والجامعة والشغل
"للخروجة.. للبيت.. للضيوف" — 3 اختيارات حسب المناسبة
عروض على الكميات: اشتري أكتر ووفر أكتر
"التلاجة ناقصها إيه؟" — مجموعة مشروبات بعروض
مقارنة بين اختيارات مشروبات مختلفة حسب الـ budget`,direction:"عروض مجمعة للكراتين والكميات مع التركيز على مشروبات العمل والدراسة"},{topic:"قسم السناكس والحلويات",title:"قسم السناكس والحلويات والتسالي",caption:`"لو عندك سناك تايم كل يوم.. العرض ده ليك"
Snack Bundle: اختار أكتر من نوع بسعر خاص
"فيلم + سناك = محتاج إيه تاني؟" — تجميعة سناكس للسهرة
عروض على الشوكولاتة والبسكويت والويفر
"اختيارات تحت X جنيه" — سناكس بأسعار مناسبة
"مش هتقدر تختار واحد بس" — مجموعة Best Sellers بعروض
عروض Mix & Match للسناكس
"حطهم في شنطتك قبل ما تنزل" — سناكس للجامعة والشغل`,direction:"باندلز سهرات الويكند وتسالي اللانش بوكس ومجموعات Best Sellers"},{topic:"قسم الألبان والجبن",title:"قسم الألبان والأجبان الطازجة",caption:`"فطار البيت يبدأ من هنا" — Bundle فطار
عروض على الجبن الأكثر طلبًا
"اختار فطارك على مزاجك" — 3 تجميعات مختلفة
عروض Milk + Cheese + Yogurt
"لو بتشتريهم كل أسبوع.. العرض ده هيفرق معاك"
Bundle عائلي من منتجات الألبان
"فطار اقتصادي.. من غير ما تستغنى عن اللي بتحبه"
عروض على المنتجات المناسبة للـ Lunch Box`,direction:"تجميعات الفطار اليومي الطازج وسندوتشات المدارس بأسعار تنافسية"},{topic:"قسم المنظفات",title:"قسم المنظفات ورعاية المنزل",caption:`"وقت تجديد مخزون البيت"
عروض على منظفات الغسيل
Bundle تنظيف كامل للبيت
"كل ركن في البيت له منتج.. جمعناهم لك في عرض"
عروض على منتجات المطبخ والحمام
"اشتري احتياجات التنظيف الأساسية في مشوار واحد"
مقارنة Bundle اقتصادي vs Bundle شامل
"لو المنظف خلص.. متستناش لآخر لحظة" — عروض على الأساسيات
عروض كميات للمنتجات اللي بتخلص بسرعة`,direction:"مقارنات بين الباندل الشامل والاقتصادي لتجديد مخزون الشهر"},{topic:"قسم العناية الشخصية",title:"قسم العناية الشخصية والجمال",caption:`"روتينك اليومي بسعر أحسن"
عروض على منتجات العناية بالجسم
Bundle Hair Care
Bundle Body Care
"اختاري روتينك حسب احتياجك" — 3 Bundles مختلفة
عروض على مزيلات العرق والعطور ومنتجات العناية
"كل اللي محتاجاه في شنطتك اليومية" — مجموعة منتجات بعرض
"منتجاتك الأساسية في مكان واحد" — Personal Care Bundle
عروض على المنتجات المناسبة للجامعة والشغل`,direction:"باقات الروتين اليومي المتكاملة وحقيبة العناية السريعة للجامعة والعمل"},{topic:"قسم مستلزمات الأطفال",title:"قسم مستلزمات الأطفال والبيبي",caption:`"كل اللي البيبي محتاجه.. بعرض واحد"
عروض على الحفاضات
Bundle Baby Care
"لو بتشتريها باستمرار.. وفر في الكمية"
عروض على منتجات الاستحمام والعناية بالطفل
"جهزي احتياجات الشهر" — تجميعة Baby Essentials
عروض على Baby Food حسب المتاح
"اختيارات للأمهات حسب الـ Budget" — 3 مستويات سعرية
عروض على مستلزمات الأطفال الأكثر استخدامًا`,direction:"توفير عبوات الحفاضات الاقتصادية وتجميعات العناية الشهرية الشاملة"},{topic:"قسم الأدوات المنزلية",title:"قسم الأدوات والتجهيزات المنزلية",caption:`"حاجات صغيرة.. بتفرق في البيت"
عروض على أدوات المطبخ اليومية
Bundle Kitchen Essentials
"لو بتجهزي مطبخك.. ابدئي من هنا"
عروض على أدوات التخزين والتنظيم
"3 حاجات هتسهّل يومك في المطبخ" مع عرض خاص
Mix & Match لأدوات المطبخ
"بدل ما تشتري قطعة.. كمّلي الطقم بعرض"`,direction:"تنظيم المطبخ وأطقم التخزين الذكية وعروض استكمال الأطقم الناقصة"},{topic:"قسم الأجهزة والأدوات الكهربائية",title:"قسم الأجهزة الكهربائية والإلكترونيات المنزلية",caption:`"لو جهازك القديم بيعمل مشاكل.. وقت التغيير"
عروض على الأجهزة الصغيرة
"جهاز واحد.. واستخدامات كتير" مع سعر العرض
مقارنة بين اختيارين حسب الـ Budget
عروض تجهيز البيت
"Upgrade بسيط لبيتك" — جهاز/أداة بعرض
Bundle أجهزة صغيرة للاستخدام اليومي`,direction:"عروض ترقية أجهزة المطبخ اليومية (كبات، خلاطات، غلايات) بضمان معتمد"},{topic:"قسم مستلزمات الجامعة والمدرسة",title:"قسم مستلزمات الجامعة والمدرسة (Back to Study 🎒)",caption:`"الجامعة بدأت.. ناقصك إيه؟" — عروض على المستلزمات
Back to University Bundle
"شنطة الجامعة من الألف للياء"
عروض على Lunch Box & Water Bottles
"كل اللي هتحتاجيه في أول أسبوع جامعة"
عروض على المنتجات المناسبة للطلبة
"جهّز يومك الدراسي بأقل تكلفة"
Student Budget Picks — اختيارات بأسعار مختلفة
"مشتريات أول الشهر للجامعة" — تجميعة كاملة`,direction:"موسم سبتمبر الأساسي: عروض اللانش بوكس والأدوات المكتبية وحقائب الجامعة"},{topic:"قسم العروض والـ Mega Deals",title:"قسم العروض الكبرى والـ Mega Deals (سلسلة الأسبوع 🔥)",caption:`Deal of the Week
"عرض يستاهل تنزل عشانه"
"لقطة الأسبوع"
"السعر ده مش هيستناك"
"لو هتشتري حاجة واحدة الأسبوع ده.. خليها دي"
"أقوى 5 عروض الأسبوع"
"اختياراتنا ليك من عروض الأسبوع"
"وفر أكتر لما تشتري أكتر"
"آخر فرصة على العرض"
"العرض قرب يخلص"`,direction:"سلسلة دورية ثابتة أسبوعياً لخلق حالة ترقب وحث المستهلك على الزيارة السريعة"},{topic:"أفكار Sales عامة تشتغل على أي قسم",title:"أفكار وهوكات Sales عامة (صالحة لكافة أقسام الهايبر 💡)",caption:`"معاك X جنيه؟ هاتلك إيه من الرحاب؟"
"لو ميزانيتك X جنيه.. دي اختياراتنا ليك"
"اشتري احتياجاتك الشهرية بذكاء"
"3 اختيارات.. 3 أسعار.. اختار اللي يناسبك"
"إيه اللي يستاهل تشتريه وقت العروض؟"
"أكتر منتجات عليها طلب دلوقتي"
"الـ Best Sellers عندنا.. وعليهم عروض"
"بدل ما تشتريهم منفصل.. خدهم Bundle"
"لو أول مرة تشتري المنتج ده.. ابدأ بالاختيار ده"
"مشترياتك المعتادة.. بس بسعر أوفر"
"عروض للبيت كله في مكان واحد"
"من أول الشهر لآخره.. عروض مستمرة"
"مش عرض على منتج.. عرض على احتياج كامل"
"اختار احتياجك وإحنا نرشحلك العرض المناسب"
"عروض سبتمبر اللي مينفعش تفوتك"`,direction:"قوالب تسويقية مرنة ومجربة لتحفيز الشراء السريع وزيادة متوسط السلة"}]},rehab_plan:{id:"rehab_plan",client:"هايبر الرحاب · سوبرماركت وتجزئة",title:"بلان عروض ومحتوى شهر 9",badge:"بلان شهر 9",type:"sheet_plan",sheetUrl:"https://docs.google.com/spreadsheets/d/10ujTHzbdoyQdkmVkRrUeenYRxZLMote6wP2DPzykQ9k/edit?gid=0#gid=0",hook:"توزيع النشر لـ 12 بوست أسبوعي وشهري يغطي كافة أقسام الهايبر ومجلة العروض الدورية.",branchInfo:{location:"فروع هايبر الرحاب للتسوق العائلي ومستلزمات البيت",phone:"خدمة توصيل الطلبات للمنازل والطلبات الهاتفية",specialty:"Supermarket, Groceries, School Supplies & Meat Market"},tables:[{title:"مصفوفة عروض وتخفيضات هايبر الرحاب (Hyper El-Rehab Weekly Calendar)",headers:["القسم","العرض الأسبوعي","الخصم / الميزة","فترة العرض"],rows:[["مستلزمات المدارس","عرض اللانش بوكس والأدوات المدرسية والجبن","خصومات تصل إلى 25%","طوال شهر 9"],["قسم البقالة","بندل الزيت والسمن والأرز والمكرونة والسكر","سعر خاص مجمع للكرتونة","عروض نهاية الأسبوع"],["قسم الألبان والجبن","كيلو رومي قديم + كيلو شيدر + لانشون فريش","سعر تنافسي طازج","يومياً طازة"],["قسم المنظفات","مسحوق الغسيل الأوتوماتيك + منعم الملابس والمطهرات","عبوة مجانية إضافية","عروض منتصف الشهر"]]}]},baraka_plan:{id:"baraka_plan",client:"هايبر بركه · سلسلة التجزئة والسوبرماركت",title:"بلان عروض ومواسم هايبر بركه",badge:"بلان 3 شهور",type:"sheet_plan",hook:"تغطية شاملة للحملات الصيفية وموسم كأس العالم ومهرجان التوفير وموسم المدارس عبر 3 أشهر متتالية بـ 8 بوستات + 2 ريل شهرياً.",branchInfo:{location:"سلسلة فروع هايبر البركة للمواد الغذائية والاستهلاكية",phone:"الخط الساخن وخدمة توصيل الطلبات",specialty:"Retail Chain, Hypermarket, Mega Deals & FMCG"},tables:[{title:"سجل الحملات والمواسم في هايبر بركة (3-Month Campaign Matrix)",headers:["الشهر","اسم الكامبين / الثيم","نوع الباقة","التركيز الإعلاني"],rows:[["شهر 7 (يوليو)","أجواء كاس العالم ومهرجان الصيف","10 بوستات + 2 ريلز","80% قوة التصميم الجذاب + 20% كابشن مشوق وسناكس المباريات"],["شهر 8 (أغسطس)","مهرجان التوفير الصيفي وأساسيات المنزل","8 بوستات + 2 ريلز","عروض اللحوم، الدواجن، الزيوت، ومسابقات تفاعلية للجمهور"],["شهر 9 (سبتمبر)","موسم المدارس... في بركة!","8 بوستات + 2 ريلز","توفير مستلزمات اللانش بوكس، الأجبان، العصائر، والخصومات المدرسية"]]}]},maysa_month9:{id:"maysa_month9",client:"د/ مايسا · استشارات وعلاقات إنسانية",title:"أفكار وبوستات شهر 9",badge:"أفكار ومحتوى",type:"approved_posts",hook:"أفكار المحتوى المعتمدة لشهر 9: إمتى تحتاج كوتشينج، مشاكل بلا اسم، العلاقات، الثقة، والقرارات.",posts:[{topic:"إمتى أنت محتاج Coaching؟",title:"إمتى أنت محتاج Coaching؟",caption:`إمتى تعرف إنك محتاج حد يساعدك ترتب أفكارك؟
مش كل مشكلة محتاجة حل... أوقات محتاجة حد يساعدك تشوفها بوضوح.
5 مواقف ممكن تكون فيها محتاج Coaching من غير ما تكون واخد بالك.
إزاي تعرف إنك واقف مكانك... رغم إنك بتحاول؟
لما تبقى عارف الحل... بس مش قادر تنفذه.
إمتى التفكير لوحدك مش بيكون كفاية؟
هل فعلًا محتاج نصيحة؟ ولا محتاج حد يساعدك توصل لإجابتك بنفسك؟
لو بتقول "أنا عارف المفروض أعمل إيه"... اسمع دي.
مش لازم تكون في أزمة عشان تبدأ جلسة Coaching.
إيه اللي يخليك تقول: يمكن أنا محتاج جلسة؟`},{topic:"مشاكل بنعيشها ومش بنعرف نسميها",title:"مشاكل بنعيشها ومش بنعرف نسميها",caption:`ليه بتحس إنك تايه رغم إن كل حاجة في حياتك شكلها تمام؟
لما كل الاختيارات تبقى متاحة... ليه بنحتار أكتر؟
ليه ساعات بنبقى عارفين إحنا عايزين إيه... بس مش عارفين نوصل له؟
لما تبقى محتاج تغيير بس مش عارف تبدأ منين.
ليه بعض القرارات الصغيرة بتاخد من طاقتك أكتر من اللازم؟
لما تحس إنك بتلف في نفس الدايرة مهما حاولت.
إحساس إنك "متأخر عن نفسك"... بييجي منين؟
لما تكون حياتك ماشية... بس مش حاسس إنك ماشي في الاتجاه الصح.
ليه ساعات بنحتاج نفهم نفسنا قبل ما نحل المشكلة؟
لما تبقى محتار بين اللي أنت عايزه واللي المفروض تعمله.`},{topic:"العلاقات والتعامل مع الآخرين",title:"العلاقات والتعامل مع الآخرين",caption:`إزاي تعرف إنك بتتنازل عن نفسك عشان تحافظ على العلاقة؟
ليه بعض العلاقات بتخلينا نشك في نفسنا؟
إزاي تتعامل مع شخص بيستنزف طاقتك من غير ما تدخل في صراع؟
هل الخلافات المتكررة معناها إن العلاقة غلط؟
إمتى يكون التمسك بالعلاقة... على حسابك أنت؟
ليه بنخاف نخسر أشخاص حتى لما العلاقة مبقتش مريحة؟
إزاي تعبر عن احتياجاتك من غير ما تحس إنك بتطلب كتير؟
هل كل تنازل في العلاقة صحي؟
لما تكون دايمًا الشخص اللي بيفهم... مين بيفهمك؟
إزاي تعرف إنك محتاج تراجع طريقة تعاملك في علاقاتك؟`},{topic:"الثقة بالنفس والصورة الذاتية",title:"الثقة بالنفس والصورة الذاتية",caption:`ليه رأي شخص واحد فيك ممكن يهز صورتك عن نفسك؟
إزاي تعرف إنك بتقيس قيمتك برأي الناس؟
ليه بنقلل من نفسنا حتى لما نكون عارفين إننا كويسين؟
لما تكون خايف تغلط... فتختار متجربش أصلًا.
ليه بنحتاج إثبات من الآخرين عشان نصدق نفسنا؟
إزاي تتعامل مع النقد من غير ما يتحول لهجوم على نفسك؟
هل أنت فعلًا مش واثق... ولا خايف من حكم الناس؟
ليه مقارنة نفسك بغيرك بتخليك تنسى أنت وصلت لفين؟
لما الإنجاز يبقى هو المصدر الوحيد لإحساسك بقيمتك.
إزاي تبني علاقة أهدى مع نفسك؟`},{topic:"القرارات والحيرة",title:"القرارات والحيرة",caption:`إزاي تعرف إن القرار اللي قدامك مناسب ليك فعلًا؟
لما يكون عندك اختيارين... وإنت مش عارف تسمع صوتك.
ليه بنخاف ناخد قرار حتى وإحنا عارفين إنه صح؟
إزاي تفرق بين "أنا مش عايز" و"أنا خايف"؟
قبل ما تاخد قرار كبير... اسأل نفسك الأسئلة دي.
هل الحيرة معناها إنك مش عارف؟ ولا إنك عارف ومش قادر تختار؟
إزاي تعرف إنك بتأجل قرار لأنك محتاج وقت... ولا لأنك خايف؟
لما رأي كل اللي حواليك يبقى أعلى من صوتك.
قرارك لازم يكون مفهوم للناس؟ ولا مناسب ليك؟
إزاي تبطل تستنى القرار المثالي؟`},{topic:"التطور الشخصي وتحقيق الأهداف",title:"التطور الشخصي وتحقيق الأهداف",caption:`عندك هدف... بس كل مرة بتقف قبل ما توصل؟
ليه بعض الأهداف بتفضل مجرد "نفسي أعملها"؟
إزاي تحول الحاجة اللي نفسك فيها لخطة واضحة؟
هل هدفك فعلًا هدفك... ولا حاجة الناس متوقعاها منك؟
إيه اللي واقف بينك وبين الخطوة اللي بعدها؟
لما تكون عارف إنك قادر على أكتر... بس مش بتتحرك.
إزاي تعرف إنك محتاج تغير الخطة... مش الهدف؟
ليه بنبدأ بحماس ونختفي في النص؟
إيه اللي بيخلي شخص يبدأ كتير ومش بيكمل؟
لو حياتك الحالية مش شبه اللي نفسك فيها... تبدأ التغيير منين؟`},{topic:"من داخل جلسة الـ Coaching",title:"من داخل جلسة الـ Coaching",caption:`أول 10 دقايق في جلسة الـ Coaching بيحصل فيهم إيه؟
هل لازم تدخل الجلسة وأنت عارف مشكلتك؟
إيه نوع الأسئلة اللي ممكن تتسأل في جلسة Coaching؟
لو أول مرة تحجز جلسة... إيه اللي تتوقعه؟
هل جلسة الـ Coaching مجرد إنك تحكي؟
إيه الفرق بين إنك تحكي لصاحبك وإنك تتكلم مع Coach؟
هل لازم تكون عندك مشكلة كبيرة عشان تحجز جلسة؟
إزاي نعرف إن الموضوع اللي بنتكلم فيه هو أصل المشكلة؟
إيه اللي تقدر تشتغل عليه خلال جلسات الـ Coaching؟
أسئلة الناس بتخاف تسألها قبل أول جلسة Coaching.`},{topic:"اعتراضات تمنع الناس من الحجز",title:"اعتراضات تمنع الناس من الحجز",caption:`"أنا أقدر أحل مشاكلي لوحدي"... طيب إمتى طلب المساعدة بيكون خطوة قوة؟
"أنا مش عارف أقول إيه في الجلسة"... وده طبيعي.
"يمكن مشكلتي مش كبيرة كفاية"... مين قال إن لازم تستنى؟
"أنا جربت أغير قبل كده ومفيش فايدة"... نبدأ منين؟
"هحجز لما أبقى محتاج فعلًا"... إيه معنى محتاج فعلًا؟
"مش عارف الجلسة هتفيدني ولا لأ"... إزاي تعرف؟
"أنا مش بحب أتكلم عن مشاكلي"... وهل لازم تحكي كل حاجة؟
"مش عارف إذا كان الـCoaching مناسب ليا"... تعالى نعرف.
هل لازم تكون مستعد 100% قبل ما تبدأ؟
3 أفكار بتخلي ناس كتير تأجل حجز أول جلسة.`},{topic:"قيمة جلسة الـ Coaching",title:"قيمة جلسة الـ Coaching",caption:`إيه اللي ممكن يتغير لما تبدأ تفهم نفسك بشكل أوضح؟
من "أنا تايه" لـ "أنا عارف خطوتي الجاية".
ليه الوضوح أحيانًا أهم من النصيحة؟
لما يكون عندك مساحة تتكلم من غير أحكام.
إيه الفرق بين إنك تفكر في المشكلة وإنك تشتغل عليها؟
جلسة Coaching مش هتعيش حياتك مكانك... لكنها ممكن تساعدك تشوفها أوضح.
إيه اللي ممكن تكتشفه عن نفسك لما تاخد وقت تفكر بوعي؟
مش هدف الجلسة إنها تقولك تعمل إيه... لكن تساعدك تعرف إنت عايز إيه وليه.`},{topic:"بوستات Conversion مباشرة",title:"بوستات Conversion مباشرة",caption:`مستني إيه عشان تبدأ؟
يمكن الجلسة اللي مأجلها... هي الخطوة اللي محتاجها دلوقتي.
لو في حاجة شاغلة بالك بقالها فترة... تعالى نتكلم عنها.
مش لازم تكمل كل حاجة لوحدك.
خد خطوة لنفسك... واحجز جلستك.
لو نفسك تفهم اللي بيحصل جواك أكتر... الجلسة ممكن تكون نقطة بداية.
مساحتك للكلام، التفكير، والوضوح.
جاهز تبدأ تشتغل على نفسك بشكل مختلف؟`}]},omar_month9:{id:"omar_month9",client:"د/ عمر أبو الدهب · جراحة التجميل والترميم",title:"أفكار وبوستات شهر 9",badge:"أفكار شهر 9",type:"approved_posts",hook:"مصفوفة أفكار وعناوين عيادة التجميل لشهر 9: تنسيق القوام، شد البطن، الثدي، الندبات، إصابات اليد، والأطفال.",posts:[{topic:"1. تنسيق القوام وشفط الدهون",title:"1. تنسيق القوام وشفط الدهون",caption:`عندك دهون مش بتروح رغم الدايت والرياضة؟
إمتى يكون شفط الدهون حل مناسب؟
الكرش مش دايمًا سببه الدهون
3 أسباب ممكن تخلي شكل البطن محتاج تدخل مختلف.
عايزة جسم أمتن من غير ما تخسي وزن كبير؟
الفرق بين خسارة الوزن وتنسيق القوام.
هل شفط الدهون مناسب ليكي؟
علامات تساعدك تعرفي إنك ممكن تكوني مرشحة للإجراء.
بعد الحمل والولادة... هل الدايت كفاية؟
إمتى نحتاج شد بطن أو تنسيق قوام؟
مش كل جسم محتاج نفس تقنية شفط الدهون
ليه تقييم الحالة قبل الإجراء مهم؟`},{topic:"2. شد البطن",title:"2. شد البطن",caption:`بطنك لسه بارزة رغم إن وزنك مناسب؟
إمتى يكون شد البطن هو الحل؟
الجلد الزائد بعد الحمل مش دايمًا بيروح بالتمرين
إمتى نحتاج تدخل جراحي؟
شد البطن مش عملية تخسيس
مين يستفيد منها فعلًا؟
هل شد البطن مناسب ليكي؟
أهم العوامل اللي الدكتور بيقيمها قبل القرار.
لو خسيتِ كتير ولسه عندك جلد زائد...
إيه الخيارات المتاحة؟
شد البطن ولا شفط الدهون؟
اختيار الإجراء الصح يبدأ من المشكلة نفسها.`},{topic:"3. جراحات وتجميل الثدي",title:"3. جراحات وتجميل الثدي",caption:`الحجم الأكبر مش دايمًا النتيجة الأفضل
إزاي بيتحدد الحجم المناسب؟
الثدي فقد شكله بعد الحمل والرضاعة؟
إمتى يكون الشد أنسب من التكبير؟
تكبير ولا شد ولا تصغير؟
إزاي نحدد الإجراء المناسب لكل حالة؟
هل كل سيدة تقدر تعمل تكبير للثدي؟
مين تكون مرشحة مناسبة؟
الثدي الكبير مسببلك ألم ومشاكل في الحركة؟
إمتى يكون تصغير الثدي حلًا مناسبًا؟
عايزة نتيجة طبيعية مش مجرد حجم أكبر؟
أهم حاجة في اختيار مقاس حشوة الثدي.`},{topic:"4. الندبات والجروح المعقدة",title:"4. الندبات والجروح المعقدة",caption:`الندبة اللي مضايقاكي... هل ممكن تتحسن؟
إمتى علاج الندبات يكون ممكن؟
مش كل ندبة تتعالج بنفس الطريقة
إزاي بيتم تحديد العلاج المناسب؟
جرح قديم ولسه أثره واضح؟
إمتى تحتاج الحالة تدخل جراحي؟
أثر جرح في الوجه مضايقك؟
هل ممكن تحسين شكله؟
جرح اتخيط قبل كده وساب أثر واضح؟
إيه الخيارات المتاحة؟
ليه مكان وطريقة إغلاق الجرح بيفرقوا في شكل الندبة؟`},{topic:"5. إصابات الوجه والفكين والحروق",title:"5. إصابات الوجه والفكين والحروق",caption:`أوعى تستهين بإصابة في وشك
إمتى الإصابة تحتاج تقييم متخصص؟
جرح الوجه مش مجرد خياطة
إيه اللي بيحدد طريقة التعامل مع الإصابة؟
اتعرضت لحرق؟ أول قرار ممكن يفرق في النتيجة
إمتى لازم تروح للطبيب؟
إصابة في الوجه وسايبة أثر؟
إيه إمكانيات تحسين الندبات بعد الالتئام؟
مش كل جرح ينفع يتقفل بنفس الطريقة
ليه إصابات الوجه لها تعامل خاص؟`},{topic:"6. جراحات اليد والإصابات",title:"6. جراحات اليد والإصابات",caption:`صباعك مش بيتحرك بعد الجرح؟ متستناش
إمتى الإصابة ممكن تكون في وتر؟
جرح صغير... لكن صباعك مش طبيعي؟
ليه لازم تقييم الحركة بعد بعض الإصابات؟
قطع في اليد مش مجرد جرح
إمتى الإصابة تحتاج تدخل متخصص؟
إصابة في وتر اليد؟ الوقت ممكن يفرق
ليه التقييم المبكر مهم؟
بعد الخياطة لسه الحركة مش طبيعية؟
إمتى تحتاج مراجعة متخصصة؟`},{topic:"7. جراحات الأطفال",title:"7. جراحات الأطفال",caption:`طفلك عنده صباع زيادة؟
إمتى يتم التدخل وإيه الهدف منه؟
صباعين لازقين في بعض عند الطفل؟
هل كل الحالات تحتاج عملية؟
علامات في يد طفلك من الولادة ومش عارفة تتعاملوا معاها؟
إمتى تحتاج تقييم جراحي؟
هل كل عيب خلقي محتاج تدخل فورًا؟
إمتى نقرر الوقت المناسب؟`},{topic:"8. أفكار Sales مباشرة جدًا",title:"8. أفكار Sales مباشرة جدًا",caption:`هل أنت مرشح للعملية أصلًا؟
5 عوامل الدكتور بيقيمها قبل الموافقة على أي إجراء.
إجراء مناسب لغيرك مش شرط يكون مناسب ليك.
ليه الكشف أهم من اختيار العملية؟
محتار بين أكتر من إجراء؟
القرار يبدأ بتحديد المشكلة مش اختيار العملية.
3 علامات تقول إنك محتاج استشارة مش مجرد معلومات من الإنترنت.
قبل ما تحجز العملية... اسأل نفسك الـ 5 أسئلة دول.
إيه اللي بيحصل في أول استشارة مع د. عمر؟
من التقييم لتحديد الإجراء المناسب.
هل العملية فعلًا هتحقق النتيجة اللي في بالك؟
ليه توقعات المريض جزء أساسي من قرار الجراحة.`}]},nasr_month9:{id:"nasr_month9",client:"صيدلية النصر · بإشراف د/ أحمد العربي",title:"أفكار وبوستات شهر 9",badge:"أفكار وبوستات",type:"approved_posts",hook:"أفكار تصوير البوستات والمنتجات مع د. أحمد العربي: العناية، البشرة، الشعر، الفيتامينات، ومستلزمات الطوارئ.",posts:[{topic:"1. العناية الشخصية والـDeodorants",title:"1. العناية الشخصية والـDeodorants",caption:`دي مناسبة جدًا للدكتور كموديل لأن المنتج صغير وسهل يتصور بطريقة Premium.
1. "مش كل Deodorant مناسب لكل شخص"
د. أحمد ماسك 2–3 منتجات، والجرافيك حواليه يوضح الفرق بينهم.
2. "اختار الـDeodorant حسب احتياجك"
الدكتور ماسك المنتج، وحواليه Tags:
Sensitive Skin / Long Lasting / Freshness
3. "لو بتستخدم Deodorant كل يوم... اختاره صح"
صورة الدكتور ماسك المنتج + 3 نقاط سريعة.
4. "3 اختيارات... أنت محتاج أنهي واحد؟"
الدكتور ماسك 3 منتجات، وكل منتج له استخدام مختلف.
5. "وصل جديد في قسم العناية الشخصية"
Product Launch مع الدكتور كأنه بيقدم المنتج للجمهور.`},{topic:"2. Skincare",title:"2. Skincare",caption:`1. "روتينك محتاج 3 حاجات بس"
الدكتور ماسك المنتجات الثلاثة، والجرافيك يعمل Routine حوله.
2. "بشرتك دهنية؟ اختاري من هنا"
الدكتور ماسك منتج مناسب + منتجات تانية في الخلفية.
3. "منتجك خلص؟ عندنا بدائل"
الدكتور ماسك المنتج الأصلي، والجرافيك يظهر البدائل حواليه.
4. "لو هتشتري منتج واحد بس..."
الدكتور ماسك المنتج، والجرافيك يكمل الرسالة.
5. "اختارنا لك من رف العناية"
الدكتور واقف قدام منتجات العناية وماسك Best Pick.`},{topic:"3. Sunscreen",title:"3. Sunscreen",caption:`1. "لسه بتختار واقي الشمس بالسعر؟"
الدكتور ماسك 2–3 أنواع والجرافيك يعمل Comparison.
2. "واقي الشمس المناسب ليك موجود هنا"
الدكتور ماسك المنتج + نوع البشرة بجانبه.
3. "3 اختيارات من صيدلية النصر"
Budget / Mid-range / Premium.
4. "لو واقي الشمس بيسيب طبقة بيضا..."
الدكتور ماسك المنتج المناسب، والجرافيك يوضح المشكلة والحل.`},{topic:"4. Hair Care",title:"4. Hair Care",caption:`1. "شعرك محتاج إيه؟"
الدكتور ماسك 3 منتجات: تساقط / قشرة / جفاف.
2. "اختار الشامبو حسب احتياج شعرك"
الدكتور في المنتصف والمنتجات حوالينه.
3. "روتين شعر كامل من صيدلية النصر"
3 منتجات + الدكتور ماسك واحد منهم.
4. "مش كل شامبو ينفع لكل شعر"
الدكتور ماسك منتجين والجرافيك يعمل Split.
5. "لو بتدور على منتج لشعرك... ابدأ من هنا"
Product Recommendation بشكل Salesy لكن محترم.`},{topic:"5. Vitamins & Supplements",title:"5. Vitamins & Supplements",caption:`1. "قبل ما تختار فيتامينك..."
الدكتور ماسك مجموعة مكملات والجرافيك يوضح إن الاختيار حسب الاحتياج.
2. "مكملات موجودة في صيدلية النصر"
Product Showcase والدكتور ماسك الـHero Product.
3. "اختيارات مختلفة لنفس الاحتياج"
الدكتور ماسك 3 منتجات مع مقارنة بسيطة.
4. "اختار حسب احتياجك وميزانيتك"
3 Products = 3 Price Points.`},{topic:"6. Baby Care",title:"6. Baby Care",caption:`1. "كل احتياجات البيبي في مكان واحد"
الدكتور ماسك Baby Product، وحواليه باقي المنتجات.
2. "شنطة البيبي ناقصها إيه؟"
الدكتور ماسك شنطة صغيرة والجرافيك يطلع منها المنتجات.
3. "اختيارات للأم الجديدة"
الدكتور ماسك مجموعة Baby Care.
4. "Baby Care تحت ميزانية محددة"
دي Sales جدًا: Bundle جاهز.`},{topic:"7. First Aid",title:"7. First Aid",caption:`1. "شنطة الإسعافات بتاعتك جاهزة؟"
الدكتور ماسك First Aid Kit.
2. "5 حاجات لازم تكون موجودة في بيتك"
كل منتج يظهر حوالين الدكتور.
3. "جهز شنطة الإسعافات من صيدلية النصر"
نبيع Bundle كامل.
4. "للبيت ولا العربية؟"
الدكتور ماسك شنطتين، والجرافيك يوضح محتويات كل واحدة.`},{topic:"8. Medical Devices",title:"8. Medical Devices",caption:`1. "الجهاز ده موجود عندك؟"
الدكتور ماسك جهاز طبي والجرافيك يشرح استخدامه.
2. "قبل ما تشتري جهاز طبي..."
الدكتور ماسك الجهاز + 3 نقاط اختيار.
3. "اختار الجهاز المناسب لاحتياجك"
Comparison بين جهازين.
4. "مستلزمات مهمة للبيت"
الدكتور مع مجموعة Medical Supplies.`},{topic:"9. Offers",title:"9. Offers",caption:`"اختيارات الأسبوع من صيدلية النصر"
الدكتور ماسك الـHero Product + Offer.
"Deal الأسبوع"
الدكتور ماسك المنتج والجرافيك كله متمحور حول السعر/العرض.
"لو كنت مستني العرض... جه وقته"
الدكتور ماسك المنتج.
"Bundle الأسبوع"
الدكتور ماسك منتج والمنتجات التانية حواليه.
"منتجات تحت X جنيه"
الدكتور ماسك منتج والجرافيك يعرض باقي الاختيارات.
"وصل جديد"
الدكتور هو اللي يقدم المنتج للجمهور.`}]},shereen_month9:{id:"shereen_month9",client:"أ/ شيرين سمير · استشارات واستثمار عقاري",title:"أفكار وبوستات شهر 9 🏢",badge:"أفكار وبوستات",type:"approved_posts",hook:"الاستراتيجية الاستشارية المتكاملة لشهر سبتمبر: 12 فكرة ريلز استثمارية، 25 بوست وكاروسيل، ميكس الخلاصة، تصنيف الـ 5 ركائز، وبنك الصور والسلاسل الأسبوعية.",posts:[{topic:"أفكار الريلز الاستثمارية (12 ريل)",title:"12 فكرة ريلز استثمارية مع الـ Pillar والـ Angle الإخراجي",caption:`1. رأس الحكمة بعد كل التطوير ده... الاستثمار فيها لسه يستاهل؟
• Pillar: Investment + Market Analysis
• Angle: مش مجرد "رأس الحكمة فرصة"، لكن إيه اللي يخلي فرصة معينة أقوى من غيرها؟

2. لو معاك 5 مليون جنيه... هتشتري ولا تستثمر؟
• Pillar: Investment
• Angle: الفرق الجوهري بين شراء وحدة للسكن وشراء وحدة بهدف تحقيق عائد استثماري.

3. 3 حاجات لو مش موجودين في المشروع... أنا ممكن أقولك بلاش تشتري
• Pillar: Personal Brand + Trust
• Angle: معايير شيرين الصارمة قبل ترشيح أي مشروع للمستثمر.

4. ليه نفس المنطقة فيها وحدات سعرها بيزيد ووحدات تانية لأ؟
• Pillar: Investment Education
• Angle: الموقع داخل المشروع، نوع الوحدة، حجم الطلب، سابقة أعمال المطور، والتوقيت.

5. لو المطور بيقولك "أعلى عائد"... تسأله إيه؟
• Pillar: Myth Busting
• Angle: الفرق بين Claim تسويقي وبين عائد حقيقي يمكن تحليله بالأرقام والبيانات.

6. رأس الحكمة ولا الساحل القديم؟ القرار مش بالاسم
• Pillar: Comparison
• Angle: مقارنة دقيقة حسب الهدف الفعلي: مصيف، سكن، استثمار، أو إعادة بيع (Resale).

7. هل التقسيط الطويل دايمًا في مصلحتك؟
• Pillar: Investment + Financial Awareness
• Angle: متبصش للـ Installment فقط، بص على السعر الإجمالي وشروط السداد والتوقيت.

8. إيه اللي بيحصل للعقار لما المنطقة حواليه تبدأ تتطور؟
• Pillar: Market Education
• Angle: البنية التحتية، الخدمات، الفنادق العالمية، وشبكات الطرق وتأثيرها المباشر على جاذبية المنطقة.

9. اشتري في أول Launch ولا تستنى؟
• Pillar: Investment Strategy
• Angle: مميزات ومخاطر الشراء في المراحل المبكرة بدون وعود غير واقعية بعائد مضمون.

10. 5 دقايق مع شيرين قبل ما تدفع الـ EOI
• Pillar: Objection Handling + Lead Generation
• Angle: إيه المعلومات والشروط القانونية والمالية اللي لازم تكون واضحة قبل دفع أي مبلغ حجز مبدئي.

11. مشروع عليه طلب كبير... هل ده معناه إنه استثمار كويس؟
• Pillar: Investment Analysis
• Angle: الشهرة والطلب الجماهيري لا يعني بالضرورة جودة الاستثمار (Popularity ≠ Investment Quality).

12. لو أنا مكانك وبدور على عقار للاستثمار في 2026... هبدأ منين؟
• Pillar: Personal Brand + Authority
• Angle: طريقة التفكير والخطوات العملية المحسوبة، مش مجرد ترشيح مشروع بعينه.`},{topic:"أفكار البوستات والكاروسيل الأساسية (10 بوستات)",title:"10 أفكار بوستات وكاروسيل لتحليل السوق وبناء الثقة",caption:`1. Carousel · 7 حاجات أقارن بينهم قبل ما أقولك المشروع ده مناسب ليك
• Slides: الهدف · الموقع · المطور · السعر · خطة السداد · موعد الاستلام · الـ Resale Potential.
• الهدف الاستراتيجي: Authority + Saves.

2. Carousel · رأس الحكمة في 2026... إيه اللي اتغير فعلًا؟
• Slides: التطوير الفعلي · البنية التحتية · المشروعات الكبرى · قطاع الضيافة والفنادق · الاستثمار المباشر · الخلاصة.
• الهدف: محتوى موثق بأحدث البيانات الميدانية والمصادر الرسمية.

3. Carousel · قبل ما تقول "السعر غالي"... قارن الـ 5 حاجات دول
• Slides: سعر المتر · الموقع وتميزه · نوع الوحدة وتصميمها · قوة المطور · مرونة خطة السداد.
• الهدف: Education + Saves لتصحيح مفهوم السعر مقابل القيمة.

4. Static · العقار الأرخص مش دايمًا هو الصفقة الأفضل
• المضمون: بوست تحليلي يشرح أن تقييم الصفقة العقارية لا يقاس بالسعر المنخفض فقط، بل بالقيمة الاستثمارية والعائد المستدام.

5. Static · ليه الـ Location داخل نفس المنطقة بيفرق؟
• المضمون: صورة خريطة مبسطة مع شرح مختصر للفروقات الجوهرية (القرب من الشاطئ، المحاور السريعة، الخدمات، والمناطق الحيوية).

6. Before / After · من أرض فاضية لوجهة استثمارية... التطوير بيغير إيه؟
• المضمون: استعراض صور موثقة لمنطقة أو مشروع محدد وشرح مراحل التطور وتأثيرها على القيمة السوقية وإعادة البيع.

7. Infographic · الساحل الشمالي في أرقام
• المضمون: إحصائيات وأرقام رسمية موثقة (المساحة الإجمالية، طول الساحل، عدد المشروعات، شبكات الطرق، والوجهات العالمية الجديدة).

8. Static · 5 أسئلة اسألهم لنفسك قبل ما تقول "أنا عايز أشتري في رأس الحكمة"
• المضمون: أسئلة مباشرة وسريعة لتحديد الجدية والهدف الاستثماري والميزانية المتاحة قبل الشراء.

9. Carousel · ROI مش مجرد رقم مكتوب في بروشور
• Slides: يعني إيه ROI؟ · بيتحسب بناءً على إيه؟ · إيه البيانات المطلوبة لحسابه؟ · إمتى الرقم يكون مجرد توقع تسويقي؟ · إزاي تقرأه صح وتضمن واقعيته؟
• الهدف: ترسيخ مكانة شيرين كمستشارة استثمار وخبير مالي عقاري موثوق.

10. Static / Project Spotlight · مشروع الشهر (SALT Marina)
• المضمون: تحليل موضوعي غير إعلاني (الموقع، المطور، أنواع الوحدات، خطط السداد، موعد الاستلام، ولمين يناسب المشروع بالتحديد).`},{topic:"ميكس الخلاصة المعتمد",title:"ميكس الـ 12 محتوى الموصى به للمرحلة الحالية (6 ريلز + 6 بوستات)",caption:`🎬 خطة الـ 6 ريلز الأساسية:
• ريل 1: رأس الحكمة بعد كل التطوير ده... الاستثمار فيها لسه يستاهل؟
• ريل 2: 3 حاجات لو مش موجودين في المشروع... أنا ممكن أقولك بلاش تشتري.
• ريل 3: ليه نفس المنطقة فيها وحدات سعرها بيزيد ووحدات تانية لأ؟
• ريل 4: هل التقسيط الطويل دايمًا في مصلحتك؟
• ريل 5: رأس الحكمة ولا الساحل القديم؟ القرار مش بالاسم.
• ريل 6: لو أنا مكانك وبدور على عقار للاستثمار في 2026... هبدأ منين؟

📑 خطة الـ 6 بوستات الأساسية:
• بوست 1 (Carousel): 7 حاجات أقارن بينهم قبل ما أرشحلك أي مشروع.
• بوست 2 (Carousel): رأس الحكمة في 2026... إيه اللي اتغير فعلًا؟
• بوست 3 (Carousel): قبل ما تقول السعر غالي... قارن الـ 5 حاجات دول.
• بوست 4 (Static): العقار الأرخص مش دايمًا هو الصفقة الأفضل.
• بوست 5 (Carousel): ROI مش مجرد رقم مكتوب في بروشور.
• بوست 6 (Project Spotlight): تحليل شامل وموضوعي لمشروع محدد بالأرقام والبيانات.`},{topic:"استراتيجية الكاروسيل المتقدمة (15 كاروسيل)",title:"15 كاروسيل استثماري متكامل لزيادة التفاعل والحفظ والوعي",caption:`1. Carousel · ليه كل الناس بتتكلم عن رأس الحكمة؟
• السلايدز: 1. الغلاف · 2. الموقع · 3. حجم المشروع · 4. خطة التطوير · 5. البنية التحتية · 6. ليه المستثمرين مهتمين؟ · 7. هل أي مشروع هناك فرصة؟ · 8. الخلاصة.
• الهدف: Education + Reach.

2. Carousel · مش كل مشروع في رأس الحكمة يعتبر استثمار ناجح
• السلايدز: الموقع داخل المنطقة · المطور · سعر الوحدة · خطة التنفيذ · الخدمات · هدفك من الشراء · آخر سلايد: "المنطقة وحدها مش كفاية".

3. Carousel · قبل ما تشتري في الساحل... اسأل نفسك الـ 6 أسئلة دول
• السلايدز: هستخدمها كام شهر؟ · سكن ولا استثمار؟ · هأجرها؟ · مين المطور؟ · الاستلام إمتى؟ · هل السعر مناسب لقيمتها؟

4. Carousel · الساحل الشمالي بقى مختلف... تعرف ليه؟
• السلايدز: (قبل: مجرد مصيف شهور الصيف ⬅ بعد: مدينة ساحلية متكاملة طوال العام) + تحليل الطرق، الخدمات، الاستثمار، المشروعات، الفنادق، والمارينا.

5. Static · المنطقة المشهورة... مش شرط تكون الأنسب ليك
• المضمون: "اختار المشروع اللي يناسب هدفك... مش اللي الناس كلها بتتكلم عنه."

6. Carousel · 5 أخطاء بتخلي ناس كتير تختار المشروع الغلط
• السلايدز: الشراء بالاسم فقط · الانخداع بحملة إعلانية · اختيار أطول فترة تقسيط دون حساب التكلفة · إهمال سابقة أعمال المطور · عدم وضوح الهدف المالي.

7. Before / After · إزاي التطوير بيغير قيمة المنطقة؟
• السلايدز: صور مقارنة حقيقية قبل التطوير وبعده مع شرح أثر البنية التحتية وشبكات الطرق في مضاعفة سعر المتر.

8. Carousel · لو هدفك الاستثمار... متبصش على البحر الأول
• السلايدز: المطور وسابقة أعماله · الموقع الاستراتيجي · حجم الطلب الفعلي · الخدمات والتشغيل · خطة الدولة · سعر السوق العادل.

9. Carousel · إيه الفرق بين مدينة العلمين ورأس الحكمة؟
• السلايدز: تحليل متوازن بدون تفضيل عشوائي: طبيعة كل مدينة، الخدمات، نوعية الوحدات، ولمين تناسب كل وجهة منهم؟

10. Carousel · مصيف ولا استثمار؟
• السلايدز: جدول مقارنة دقيق يشمل (الهدف، متوسط العائد، مدة الاحتفاظ، نوع الوحدة المناسبة، وأهم معيار للاختيار).

11. Static · الاستثمار العقاري مش سباق
• المضمون: "أفضل وقت للشراء... هو الوقت اللي يناسب هدفك وإمكانياتك المالية."

12. Carousel · إزاي أعرف إن المشروع ده مناسب ليا؟ (Checklist)
• السلايدز: كبسولة المعايير: ✅ ميزانيتي · ✅ هدفي · ✅ المطور وسابقة أعماله · ✅ الموقع والمحاور · ✅ خطة السداد المناسبة · ✅ موعد الاستلام.

13. Carousel · صح ولا غلط؟ (سلايدز تفاعلية)
• السلايدز: ❌ كل مشروع في الساحل استثمار ناجح · ❌ التقسيط الأطول هو الأفضل دائمًا · ❌ المنطقة أهم من اسم المطور · ❌ لازم تشتري دلوقتي فورًا. (مع توضيح أسباب الخطأ في السلايد الأخير).

14. Infographic · خريطة الساحل الشمالي في دقيقة
• السلايدز: تصميم خريطة تفاعلية مبسطة توضح مناطق (العلمين، رأس الحكمة، سيدي عبد الرحمن، الضبعة) وأبرز ميزة استثمارية لكل منطقة.

15. Carousel · مش كل خبر في السوق... معناه إنك تشتري
• السلايدز: خطوات المستثمر الواعي: اسمع الخبر ⬅ افهم تأثيره الفعلي ⬅ حدد هدفك ⬅ قيّم المشروع ⬅ خد قرارك. آخر سلايد: "المستثمر الذكي مش بيتحرك مع التريند... بيتحرك بالمعلومة."`},{topic:"خطة الإطلاق (أقوى 8 بوستات)",title:"ترشيح أقوى 8 بوستات للبدء من الصفر وتحقيق أسرع نمو وثقة",caption:`🚀 في حال بدء الحساب من الصفر، هذا هو الترتيب الاستراتيجي الموصى به:
1. ليه كل الناس بتتكلم عن رأس الحكمة؟ (كاروسيل تثقيفي يجذب الوصول والتفاعل الواسع).
2. مش كل مشروع في رأس الحكمة يعتبر استثمار ناجح (كسر وهم المنطقة وبناء الهيبة المعرفية).
3. قبل ما تشتري في الساحل... اسأل نفسك الـ 6 أسئلة دول (توجيه العميل للتفكير المنطقي قبل الشراء).
4. 5 أخطاء بتخلي ناس كتير تختار المشروع الغلط (محتوى يلامس مخاوف المستثمر ويحميه من التسرع).
5. خريطة الساحل الشمالي في دقيقة (إنفوجرافيك مرئي يحقق أعلى معدلات حفظ ومشاركة).
6. مصيف ولا استثمار؟ (جدول مقارنة حاسم يفرز اهتمامات وتوجهات المتابعين).
7. إزاي أعرف إن المشروع ده مناسب ليا؟ Checklist (قائمة عملية قابلة للحفظ والتطبيق الفوري).
8. مش كل خبر في السوق... معناه إنك تشتري (ترسيخ مبدأ اتخاذ القرارات بناءً على البيانات لا الشائعات).`},{topic:"تصنيف أنواع المحتوى الـ 5",title:"الهيكل الاستراتيجي لتقسيم محتوى الصفحة على 5 ركائز أساسية",caption:`1. بوستات الأماكن (Location Spotlight):
• تسليط الضوء على منطقة محددة، بنيتها التحتية، محاورها الرئيسية، ولماذا أصبحت وجهة للمستثمرين.

2. بوستات المشاريع (Project Spotlight):
• تحليل موضوعي لأحد المشروعات بعيداً عن الطابع الإعلاني (الموقع، المطور، نوع الوحدات، ولمين يناسب).

3. بوستات اللايف ستايل (Lifestyle & Living):
• استعراض جودة الحياة وتفاصيل اليوم داخل المشروعات الفاخرة وأثر البيئة المحيطة على استقرار وراحة الأسرة.

4. بوستات تحليل السوق (Market Analysis):
• قراءة التغيرات الاقتصادية، حركة أسعار العقارات، قرارات المطورين، وحركة الاستثمار المباشر.

5. بوستات تعليمية (Educational & Authority):
• تفكيك مصطلحات السوق، حسابات العائد على الاستثمار ROI، شروط العقود، وطرق قراءة الماستر بلان وفحص الجدية.`},{topic:"بنك محتوى الصور (20 فكرة)",title:"20 فكرة بصرية للمنشورات مع زوايا الطرح الاستشارية",caption:`1. مكان الأسبوع: صورة بانورامية لرأس الحكمة / سيدي عبد الرحمن / العلمين مع تحليل المقومات.
2. Project Spotlight: صورة المشروع وتحليله لمن يناسب بعيداً عن أسلوب الإعلانات.
3. صورة من البحر: "مش كل إطلالة على البحر تعتبر استثمار ناجح" وشرح معايير الطلب الحقيقي.
4. صورة Drone: "الموقع ممكن يكون أهم من الوحدة نفسها" وشرح تموضع المبنى والمسافات.
5. بوست Google Maps: مقارنة بصرية بين رأس الحكمة والعلمين والضبعة ومن تناسب كل وجهة.
6. صورة Club House: "الخدمات دي شكلها حلو... بس هل هتفرق معاك؟" وتوضيح تكاليف الصيانة والتشغيل.
7. صورة Master Plan: "إزاي تقرأ الماستر بلان؟" وفهم الكثافة البنائية وتوزيع المساحات الخضراء.
8. صورة Entrance: "أول حاجة ببص عليها وأنا داخلة أي مشروع" ومعايير الانطباع الأول والأمان.
9. صورة من الطريق: محاور الضبعة، العلمين، وطريق الفوكا مع شرح أثر شرايين الطرق على قيمة العقار.
10. صورة مشروع تحت الإنشاء: "جاهز للاستلام ولا تحت الإنشاء؟" ومقارنة العائد والمخاطر.
11. صورة Amenities: "كل الخدمات دي... هتستخدمها فعلاً؟" وتحديد الخدمات الضرورية والترفيهية.
12. صورة Pool: "وجود حمام سباحة مش معناه إن المشروع أحسن" ومعايير جودة التنفيذ والتشغيل.
13. صورة Marina: "المارينا دي هتزود قيمة المشروع؟" وتأثير المراسي الدولية على إعادة البيع.
14. صورة Night View: "المشروع بيتغير بالليل زي النهار؟" وجودة الإضاءة وأنظمة الأمان والحياة الليلية.
15. صورة وحدة: "مش كل تشطيب فاخر يستحق فرق السعر" وحساب القيمة المضافة الحقيقية للتشطيب.
16. صورة Layout: "إزاي تختار الـ Layout الصح؟" وتوزيع المساحات الداخلية واستغلال الممرات.
17. صورة Villa: "مين يناسبه فيلا؟ ومين الأفضل له شقة أو تاون هاوس؟" ومقارنة السيولة والصيانة.
18. صورة Penthouse: "هل البنتهاوس مناسب لكل الناس؟" ومميزات الخصوصية مقابل تكاليف الرووف.
19. صورة Townhouse: "الفرق بين التاون هاوس والتوين هاوس والستاند ألون" وفروقات الأسعار والمساحات.
20. صورة من موقع التنفيذ: "ليه متابعة التنفيذ أهم من الإعلان؟" وكيفية فحص وتيرة البناء على أرض الواقع.`},{topic:"السلاسل الأسبوعية المتخصصة",title:'سلسلتا "دقيقة في مشروع" و"من قلب السوق"',caption:`🏢 السلسلة الأولى: "دقيقة في مشروع" (Project In a Minute)
• الفكرة: منشور أسبوعي ثابت يعتمد على صورة سينمائية واحدة للمشروع، وتحتها بطاقة تعريفية سريعة وخالية من المبالغات:
  - اسم المشروع
  - المطور العقاري وسابقة أعماله
  - الموقع والمحاور القريبة
  - المساحة الإجمالية للمشروع
  - أنواع الوحدات المتاحة
  - لمن يناسب المشروع (سكن، مصيف، أو استثمار)
  - أبرز ميزة تنافسية حقيقية
  - هل الأنسب له الاستثمار أم السكن؟
  (ملاحظة هامة: يتم استعراض المشروعات دون ذكر أسعار غير ثابتة لضمان استدامة وصلاحية المحتوى).

🗺️ السلسلة الثانية: "من قلب السوق" (Market Pulse)
• الفكرة: تغطية أسبوعية متعمقة لمنطقة جغرافية واعدة في السوق المصري:
  - المناطق المستهدفة: رأس الحكمة · سيدي عبد الرحمن · العلمين الجديدة · الضبعة · سهل حشيش · الجلالة · القاهرة الجديدة · الشيخ زايد.
  - المحاور التحليلية الثابتة لكل منطقة:
    1. الموقع الجغرافي والامتداد العمراني المعتمد.
    2. أهم الطرق والمحاور الرابطة وشبكات المواصلات الحديثة.
    3. أبرز المميزات الاستثمارية ونسب النمو المتوقعة.
    4. أنسب نوع استخدام (سكني دائم / مصيفي موسمي / استثماري تجاري وإداري).
    5. الشريحة المستهدفة ومن تناسبه هذه المنطقة تحديداً.`}]}},$={categories:{medical:{id:"medical",path:"01_Medical_Sector.dir",name:"Healthcare & Medical Sector",nameAr:"القطاع الطبي والرعاية الصحية",icon:"fa-solid fa-stethoscope",accentColor:"#10B981",accentClass:"emerald",bgGlow:"rgba(16, 185, 129, 0.25)",tag:"01_HEALTHCARE_MEDICAL",shortDesc:"سلاسل جراحة التجميل، الوعي النفسي، رعاية الأم والطفل، وباقات الفحص الشامل.",folderCountLabel:"4 عملاء معتمدين",clients:[{id:"dr-omar",name:"د/ عمر أبو الدهب",subtitle:"جراحة التجميل والترميم ونحت القوام",category:"medical",icon:"fa-solid fa-user-doctor",tag:"جراحة التجميل والترميم",color:"#06B6D4",desc:"",deliverables:[{id:"omar_episodes",type:"approved_posts",title:"سلسلة نحت القوام (5 فيديوهات)",desc:"",badge:"5 فيديوهات"},{id:"omar_qa",type:"approved_posts",title:"أكتر أسئلة التجميل (10 مواضيع)",desc:"",badge:"10 مواضيع"},{id:"omar_month9",type:"approved_posts",title:"أفكار وبوستات شهر 9",desc:"",badge:"أفكار شهر 9"},{id:"omar_plan",type:"sheet_plan",title:"بلان محتوى شهر 9",desc:"",badge:"بلان شهر 9",sheetUrl:"https://docs.google.com/spreadsheets/d/1B7L69xjkMu3by2NZOMgtxxLVx5EW0u3TQB-gkgvZpH8/edit?gid=0#gid=0"}]},{id:"dr-maysa",name:"د/ مايسا",subtitle:"استشارات الوعي النفسي والعلاقات الإنسانية",category:"medical",icon:"fa-solid fa-heart-pulse",tag:"استشارات وعلاقات",color:"#14B8A6",desc:"",deliverables:[{id:"maysa_podcast",type:"episodes",title:"بودكاست الوعي النفسي والعلاقات (3 حلقات)",desc:"",badge:"بودكاست 3 حلقات"},{id:"maysa_month9",type:"approved_posts",title:"أفكار وبوستات شهر 9",desc:"",badge:"10 محاور معتمدة"},{id:"maysa_plan",type:"sheet_plan",title:"بلان شهري 8 و 9",desc:"",badge:"بلان شهرين",sheetUrl:"https://docs.google.com/spreadsheets/d/1prUaLHKUNTu_kfQjGAdemS_UAq-P_UVHkQ3DY7z-KiQ/edit?gid=0#gid=0"}]},{id:"al-nasr-pharmacy",name:"صيدلية النصر",subtitle:"رعاية صحية وتجميلية بإشراف د. أحمد العربي",category:"medical",icon:"fa-solid fa-prescription-bottle-medical",tag:"صيدلية وتجميل",color:"#10B981",desc:"",deliverables:[{id:"nasr_pharma_reels",type:"approved_posts",title:"ريلز بدائل الأدوية والكوزماتكس",desc:"",badge:"7 ريلز طبية"},{id:"nasr_mother_child",type:"approved_posts",title:"سلسلة الأم والطفل (5 ريلز)",desc:"",badge:"5 ريلز أمهات"},{id:"nasr_month9",type:"approved_posts",title:"أفكار وبوستات شهر 9",desc:"",badge:"أفكار وبوستات"},{id:"nasr_plan",type:"sheet_plan",title:"بلان شهري 8 و 9",desc:"",badge:"بلان شهرين",sheetUrl:"https://docs.google.com/spreadsheets/d/1gb9NtxIfeLvVv5x68zht6le6F0uddIMNCzzJNXwUW5w/edit?gid=0#gid=0"}]},{id:"al-raed-lab",name:"معمل الرائد",subtitle:"معامل الرائد للتحاليل الطبية والتشخيص المخبري",category:"medical",icon:"fa-solid fa-flask-vial",tag:"تحاليل طبية",color:"#3B82F6",desc:"",deliverables:[{id:"raed_plan",type:"sheet_plan",title:"باقات وعروض معمل الرائد",desc:"",badge:"باقات الفحص",sheetUrl:"https://docs.google.com/spreadsheets/d/1XwDE1QyTnVPC4dkfiAFBHH42ePxeFgw6diOuc6oSFUo/edit?gid=0#gid=0"}]}]},commercial:{id:"commercial",path:"02_Commercial_Retail.dir",name:"Commercial & Retail Sector",nameAr:"القطاع التجاري والتجزئة والأزياء",icon:"fa-solid fa-cart-shopping",accentColor:"#0EA5E9",accentClass:"cyan",bgGlow:"rgba(14, 165, 233, 0.25)",tag:"02_COMMERCIAL_RETAIL",shortDesc:"عروض الهايبر ماركت والمدارس، مهرجانات الصيف، ومجموعات الأزياء والعبايات الراقية.",folderCountLabel:"3 براندات معتمدة",clients:[{id:"hyper-elrehab",name:"هايبر الرحاب",subtitle:"هايبر ماركت وتجزئة ومستلزمات البيت",category:"commercial",icon:"fa-solid fa-basket-shopping",tag:"هايبر ماركت وتجزئة",color:"#0EA5E9",desc:"",deliverables:[{id:"rehab_posts",type:"approved_posts",title:"أفكار وبوستات عروض شهر 9",desc:"",badge:"عروض 12 قسماً"},{id:"rehab_plan",type:"sheet_plan",title:"بلان عروض ومحتوى شهر 9",desc:"",badge:"بلان شهر 9",sheetUrl:"https://docs.google.com/spreadsheets/d/10ujTHzbdoyQdkmVkRrUeenYRxZLMote6wP2DPzykQ9k/edit?gid=0#gid=0"}]},{id:"hyper-baraka",name:"هايبر بركه",subtitle:"سلسلة التجزئة والسوبرماركت والعروض الكبرى",category:"commercial",icon:"fa-solid fa-cart-flatbed",tag:"سلسلة تجزئة",color:"#38BDF8",desc:"",deliverables:[{id:"baraka_plan",type:"sheet_plan",title:"بلان عروض ومواسم هايبر بركه",desc:"",badge:"بلان 3 شهور",sheetUrl:"https://docs.google.com/spreadsheets/d/10BN3AZWixbe82V3NNDuu7xBG-AF9hWsn2t4gv4FFHRA/edit?gid=0#gid=0"}]},{id:"signorita",name:"سينيوريتا",subtitle:"أزياء نسائية فاخرة وعبايات خليجية راقية",category:"commercial",icon:"fa-solid fa-gem",tag:"أزياء وعبايات",color:"#EC4899",desc:"",deliverables:[{id:"signorita_reel",type:"script",title:"Reel 2 — عيد ميلادنا… وهداياه ليكي 🎁",desc:"",badge:"ريل المسابقة"},{id:"signorita_plan",type:"sheet_plan",title:"بلان محتوى سينيوريتا",desc:"",badge:"بلان المحتوى",sheetUrl:"https://docs.google.com/spreadsheets/d/1gnW8azZyWCAGtMajmAASn5qTMhR8lpaQDKqbSDkw6PY/edit?gid=0#gid=0"}]}]},food:{id:"food",path:"03_Food_Dining.dir",name:"Food & Dining Sector",nameAr:"قطاع المطاعم والأغذية والمشروبات",icon:"fa-solid fa-utensils",accentColor:"#F59E0B",accentClass:"amber",bgGlow:"rgba(245, 158, 11, 0.25)",tag:"03_FOOD_DINING",shortDesc:"ريلز الشاورما والبروستد، تحديات البرجر والشارع، العصائر الطبيعية والحلويات، ومحتوى الأكلات الشعبية.",folderCountLabel:"4 براندات معتمدة",clients:[{id:"badr-elsham",name:"بدر الشام · سوهاج",subtitle:"مأكولات سورية وشاورما ومشويات وبروستد",category:"food",icon:"fa-solid fa-bowl-food",tag:"مطاعم سورية",color:"#F59E0B",desc:"",deliverables:[{id:"badr_reel1",type:"script",title:"تجهيز تورتة الشاورما 🎂",desc:"",badge:"ريل 01"},{id:"badr_reel2",type:"script",title:"البروستد المقرمش 🍗",desc:"",badge:"ريل 02"},{id:"badr_reel3",type:"script",title:"التندوري السوري 🌶️",desc:"",badge:"ريل 03"},{id:"badr_reel4",type:"script",title:"فتة شاورما الفراخ (نسخة الـ 3 علامات) ⭐",desc:"",badge:"ريل 04"},{id:"badr_sheet1",type:"sheet_plan",title:"محتوى شهر 8 (18 بوست + 12 ريل)",desc:"",badge:"المحتوى المعتمد",sheetLinks:[{label:"18 بوست + 12 ريل شهر 8 (شهد)",url:"https://docs.google.com/spreadsheets/d/1H1WjuZfsbN592jRZjPwkthzUV0Y0_eWhfENJyMHPDPk/edit?gid=0#gid=0"},{label:"النسخة الأخيرة (بوستات) شهر 8",url:"https://docs.google.com/spreadsheets/d/1zRoRQMq9S_n1neToMF3vYWYFh3ZvX09Z3G9x8mbn-58/edit?gid=0#gid=0"}]},{id:"badr_sheet2",type:"sheet_plan",title:"بلان بدر الشام لشهر 8",desc:"",badge:"بلان شهر 8",sheetUrl:"https://docs.google.com/spreadsheets/d/1zRoRQMq9S_n1neToMF3vYWYFh3ZvX09Z3G9x8mbn-58/edit?gid=0#gid=0"},{id:"badr_trends",type:"trends_library",title:"بنك أفكار وتريندات الريلز (23 مرجع)",desc:"",badge:"23 تريند معتمد"}]},{id:"pold",name:"مطعم بولد · Pold",subtitle:"ساندوتشات وبرجر جورميه فاخر",category:"food",icon:"fa-solid fa-burger",tag:"برجر وساندوتشات",color:"#F97316",desc:"",deliverables:[{id:"pold_reel1",type:"script",title:"ريل آراء الناس في الشارع 🎤",desc:"",badge:"ريل 01"},{id:"pold_reel2",type:"script",title:"ريل رحلة الأوردر من المطبخ للعميل 🛵",desc:"",badge:"ريل 02"},{id:"pold_reel3",type:"script",title:"كواليس تجهيز الساندوتشات الجديدة 👨‍🍳",desc:"",badge:"ريل 03"},{id:"pold_reel4",type:"script",title:"مش كل اللي بيتقال عليه بولد… بولد 👑",desc:"",badge:"ريل 04"},{id:"pold_trends",type:"trends_library",title:"أفكار وتريندات ريلز بولد 🔥",desc:"",badge:"تريندات وسلوجانز"},{id:"pold_plan",type:"sheet_plan",title:"بلان محتوى مطعم بولد",desc:"",badge:"بلان المحتوى",sheetUrl:"https://docs.google.com/spreadsheets/d/1gY77SDdslAlTWySLk3HgdrPZNL-vQpZbZe7LWkc5FHo/edit?gid=0#gid=0"}]},{id:"koshary-sondos",name:"كشري سندس",subtitle:"طهطا · أكلات شعبية أصيلة",category:"food",icon:"fa-solid fa-bowl-rice",tag:"أكلات مصرية شعبية",color:"#EF4444",desc:"",deliverables:[{id:"sondos_posts",type:"approved_posts",title:"بوستات كشري سندس",desc:"",badge:"4 بوستات معتمدة"}]},{id:"elkhalat-pure",name:"الخلاط بيور طهطا",subtitle:"عصائر طبيعية 100% وحلويات وقعدة مريحة",category:"food",icon:"fa-solid fa-blender",tag:"عصائر طبيعية وحلويات",color:"#84CC16",desc:"",deliverables:[{id:"khalat_reel1",type:"script",title:"اسكريبت الريل الأول: ليه الخلاط وليه بالذات بيور",desc:"",badge:"ريل 01"},{id:"khalat_reel2",type:"script",title:"اسكريبت الريل الثاني: أنا عارف أنا عايز إيه",desc:"",badge:"ريل 02"},{id:"khalat_reel3",type:"script",title:"اسكريبت الريل الثالث: اختارلي حاجة على ذوقك",desc:"",badge:"ريل 03"},{id:"khalat_reel4",type:"script",title:"اسكريبت الريل الرابع: لو بتحب المانجا اسمع دي",desc:"",badge:"ريل 04"},{id:"khalat_reel5",type:"script",title:"اسكريبت الريل الخامس: عروض افتتاح الخلاط بيور",desc:"",badge:"ريل 05"},{id:"khalat_pdf_test",type:"script",title:"سكريبت ريل الخلاط (test)",desc:"",badge:"ريل تجريبي"},{id:"khalat_launch",type:"launch_plan",title:"Store Launch Plan 2 الخلاط",desc:"",badge:"خطة افتتاح"},{id:"khalat_august",type:"sheet_plan",title:"بلان الخلاط بيور شهر 8",desc:"",badge:"بلان شهر 8",sheetUrl:"https://docs.google.com/spreadsheets/d/1r2rpXAXBFQiT6Rk2L7R3-1KHP6TJ1ZmoPQ6tov6ynL4/edit?gid=0#gid=0"},{id:"khalat_pdf",type:"pdf_deck",title:"كامبين افتتاح الخلاط بيور",desc:"",badge:"ملف الكامبين"}]}]},realestate:{id:"realestate",path:"04_Brand_Strategy.dir",name:"Brand Strategy & Real Estate Sector",nameAr:"قطاع استراتيجية البراند والاستثمار العقاري",icon:"fa-solid fa-building-columns",accentColor:"#A855F7",accentClass:"purple",bgGlow:"rgba(168, 85, 247, 0.25)",tag:"04_STRATEGY_REALESTATE",shortDesc:"استراتيجيات بناء الهوية والعروض التقديمية، وسلاسل الاستشارات العقارية.",folderCountLabel:"ملف استراتيجي معتمد",clients:[{id:"shereen-samir",name:"أ/ شيرين سمير",subtitle:"مستشارة استثمار وتسويق عقاري",category:"realestate",icon:"fa-solid fa-building",tag:"استشارات عقارية",color:"#C084FC",desc:"",deliverables:[{id:"shereen_reels",type:"approved_posts",title:"12 سكريبت ريلز عقاري 🎬",desc:"",badge:"12 سكريبت"},{id:"shereen_month9",type:"approved_posts",title:"أفكار وبوستات شهر 9 🏢",desc:"",badge:"أفكار وبوستات"},{id:"shereen_plan",type:"sheet_plan",title:"بلان محتوى شهر 9 📊",desc:"",badge:"بلان شهر 9",sheetUrl:"https://docs.google.com/spreadsheets/d/12AD4HrJMEWcFwbARD2hzW91RwAynPJDxSIi_x--Kzhs/edit?gid=0#gid=0"}]}]}}};typeof window<"u"&&(window.SCRIPT_DATABASE=K,window.WORK_HIERARCHY_DATA=$);typeof ee<"u"&&ee.exports&&(ee.exports={SCRIPT_DATABASE:K,WORK_HIERARCHY_DATA:$});const U=d=>{if(!d)return[];if(d.sheetLinks&&d.sheetLinks.length>0)return d.sheetLinks;if(d.sheetUrl)return[{label:"Open in Google Sheets",url:d.sheetUrl}];const s=K?K[d.id]:null;return s!=null&&s.sheetLinks&&s.sheetLinks.length>0?s.sheetLinks:s!=null&&s.sheetUrl?[{label:"Open in Google Sheets",url:s.sheetUrl}]:[]},G=d=>d?d.type==="sheet_plan"||d.type==="xlsx"||!!d.sheetUrl||!!(d.sheetLinks&&d.sheetLinks.length>0)||U(d).length>0:!1,ne=[{key:"medical",label:"Healthcare",labelAr:"القطاع الطبي",icon:"fa-solid fa-stethoscope",color:"#10B981"},{key:"commercial",label:"Commercial & Retail",labelAr:"العلامات التجارية",icon:"fa-solid fa-cart-shopping",color:"#0EA5E9"},{key:"food",label:"Food & Dining",labelAr:"المطاعم والأغذية",icon:"fa-solid fa-utensils",color:"#F59E0B"},{key:"realestate",label:"Brand Strategy",labelAr:"استراتيجية البراند",icon:"fa-solid fa-chess-knight",color:"#8B5CF6"}];function mt({isOpen:d,onClose:s,categoryKey:i="medical",onOpenDeliverable:r}){var de,ce,pe,he,xe,ge,me;const[n,l]=u.useState(i),[p,g]=u.useState("folder"),[m,t]=u.useState(null),[R,E]=u.useState(!1),[A,T]=u.useState(""),[_,j]=u.useState("grid"),[k,H]=u.useState("all");u.useEffect(()=>{i&&(l(i),g("folder"),t(null),T(""),H("all"))},[i,d]),u.useEffect(()=>{const a=f=>{f.key==="Escape"&&d&&s()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[d,s]);const S=$.categories[n]||$.categories.medical,C=m?(de=S.clients)==null?void 0:de.find(a=>a.id===m):null,z=ne.find(a=>a.key===n),o=(z==null?void 0:z.label)||S.name,x=(C==null?void 0:C.color)||S.accentColor||"#38BDF8",h=u.useMemo(()=>{if(!A.trim())return null;const a=A.trim().toLowerCase(),f=[];return Object.entries($.categories).forEach(([y,b])=>{var v;(v=b.clients)==null||v.forEach(N=>{const D=N.name.toLowerCase().includes(a)||N.tag.toLowerCase().includes(a)||N.subtitle&&N.subtitle.toLowerCase().includes(a),M=(N.deliverables||[]).filter(P=>P.title.toLowerCase().includes(a)||P.badge&&P.badge.toLowerCase().includes(a));(D||M.length>0)&&f.push({client:N,category:b,catKey:y,matchedDeliverables:M.length>0?M:N.deliverables||[]})})}),f},[A]),c=u.useMemo(()=>!C||!C.deliverables?[]:k==="all"?C.deliverables:C.deliverables.filter(a=>k==="script"?a.type==="script":k==="sheet"?G(a):k==="posts"?a.type==="approved_posts":k==="pdf"?a.type==="pdf_deck"||a.type==="pdf":k==="episodes"?a.type==="episodes":!0),[C,k]),F=(a,f)=>{f&&l(f),t(a.id),g("client"),T(""),H("all")},B=()=>{g("folder"),t(null),T(""),H("all")},W=a=>{l(a),g("folder"),t(null),T(""),H("all")},O=a=>a<=1?"grid grid-cols-1 max-w-xl mx-auto gap-4":a===2?"grid grid-cols-1 sm:grid-cols-2 gap-4":a===3?"grid grid-cols-1 sm:grid-cols-3 gap-4":a===4?"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4":"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",te=a=>{switch(a){case"script":return{label:"Video Script",color:"#F43F5E",icon:ye,bg:"rgba(244, 63, 94, 0.14)"};case"sheet_plan":case"xlsx":return{label:"Content Plan",color:"#10B981",icon:L,bg:"rgba(16, 185, 129, 0.14)"};case"pdf_deck":case"pdf":return{label:"Presentation Deck",color:"#8B5CF6",icon:X,bg:"rgba(139, 92, 246, 0.14)"};case"approved_posts":return{label:"Approved Posts",color:"#0EA5E9",icon:je,bg:"rgba(14, 165, 233, 0.14)"};case"episodes":return{label:"Podcast Series",color:"#EC4899",icon:se,bg:"rgba(236, 72, 153, 0.14)"};case"launch_plan":return{label:"Launch Plan",color:"#F97316",icon:Ve,bg:"rgba(249, 115, 22, 0.14)"};case"trends_library":return{label:"Trends Library",color:"#F59E0B",icon:Y,bg:"rgba(245, 158, 11, 0.14)"};default:return{label:"Deliverable",color:"#38BDF8",icon:X,bg:"rgba(56, 189, 248, 0.14)"}}},re=u.useMemo(()=>{if(!c||c.length===0)return[];const a=[{key:"scripts",title:"اسكريبتات الفيديو الإعلانية (Video Scripts)",icon:ye,color:"#F43F5E",badge:"Video Scripts",matcher:b=>b.type==="script"},{key:"plans",title:"خطط وجداول المحتوى الشهري (Content Plans & Calendars)",icon:L,color:"#10B981",badge:"Content Plans",matcher:b=>G(b)},{key:"episodes",title:"سلاسل البودكاست والفيديوهات (Podcast & Video Series)",icon:se,color:"#EC4899",badge:"Podcast Series",matcher:b=>b.type==="episodes"},{key:"trends",title:"بنك الأفكار والتريندات المعتمدة (Trends & References)",icon:Y,color:"#F59E0B",badge:"Trends Library",matcher:b=>b.type==="trends_library"},{key:"posts",title:"البوستات والمحتوى المعتمد (Approved Posts & Copy)",icon:je,color:"#0EA5E9",badge:"Approved Posts",matcher:b=>b.type==="approved_posts"},{key:"decks",title:"العروض والاستراتيجيات (Presentations & Decks)",icon:X,color:"#8B5CF6",badge:"Strategy Decks",matcher:b=>b.type==="pdf_deck"||b.type==="pdf"},{key:"other",title:"مخرجات وملفات إضافية (Other Deliverables)",icon:X,color:"#38BDF8",badge:"Deliverable",matcher:()=>!0}],f=[],y=new Set;for(const b of a){const v=c.filter(N=>{const D=N.id||N.title;return y.has(D)?!1:b.matcher(N)});v.length>0&&(v.forEach(N=>y.add(N.id||N.title)),f.push({...b,items:v}))}return f},[c]),le=(a,f,y="")=>{var P;const b=te(a.type),v=b.icon,N=G(a),D=N?U(a):[],M=(P=D[0])==null?void 0:P.url;return e.jsxs("div",{className:`bg-slate-900/50 hover:bg-slate-900/80 border ${N?"border-emerald-500/25 hover:border-emerald-400 hover:shadow-emerald-950/50":"border-white/10 hover:border-sky-500/40 hover:shadow-sky-950/40"} rounded-xl p-4 cursor-pointer transition-all flex flex-col justify-between group shadow-sm ${y}`,onClick:()=>{N&&M?window.open(M,"_blank","noopener,noreferrer"):r(a,C,S)},children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2.5",children:[e.jsxs("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1",style:{background:b.bg,color:b.color},children:[e.jsx(v,{className:"w-3 h-3"}),e.jsx("span",{children:a.badge||b.label})]}),e.jsx("span",{className:"text-[10px] text-slate-500 font-medium",children:b.label})]}),e.jsxs("div",{className:"flex items-center gap-2.5 mb-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0",style:{background:b.bg,color:b.color},children:e.jsx(v,{className:"w-4 h-4"})}),e.jsx("h4",{className:`text-sm font-bold text-white m-0 transition-colors leading-snug ${N?"group-hover:text-emerald-300":"group-hover:text-sky-300"}`,dir:"rtl",style:{textAlign:"right",width:"100%"},children:a.title})]})]}),e.jsx("div",{className:"pt-2.5 border-t border-white/5 flex items-center justify-between text-xs gap-2",children:N?D.length>1?e.jsx("div",{className:"flex items-center gap-1.5 w-full flex-wrap",children:D.map((I,V)=>e.jsxs("button",{type:"button",className:"text-[11px] font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/30 px-2 py-1.5 rounded-lg flex items-center gap-1 transition-all shadow-sm cursor-pointer flex-1 justify-center min-w-[110px]",onClick:Ae=>{Ae.stopPropagation(),window.open(I.url,"_blank","noopener,noreferrer")},title:I.label,children:[e.jsx(L,{className:"w-3 h-3 text-emerald-200 shrink-0"}),e.jsx("span",{className:"truncate",children:I.label||`فتح شيت ${V+1} ↗`})]},V))}):e.jsxs("button",{type:"button",className:"w-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/30 px-3 py-2 rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer",onClick:I=>{I.stopPropagation(),M&&window.open(M,"_blank","noopener,noreferrer")},title:"فتح في Google Sheets",children:[e.jsx(L,{className:"w-3.5 h-3.5 text-emerald-200"}),e.jsx("span",{children:"فتح في Google Sheets ↗"})]}):e.jsxs("span",{className:"text-sky-400 group-hover:text-sky-300 transition-colors flex items-center gap-1 font-medium ml-auto",children:[e.jsx("span",{children:"Details"}),e.jsx(Q,{className:"w-3 h-3"})]})})]},a.id||f)},Be=(a,f)=>{var M;const y=te(a.type),b=y.icon,v=G(a),D=(M=(v?U(a):[])[0])==null?void 0:M.url;return e.jsxs("div",{className:`w-full bg-slate-900/60 hover:bg-slate-900/90 border ${v?"border-emerald-500/25 hover:border-emerald-400 hover:shadow-emerald-950/40":"border-white/12 hover:border-amber-500/40 hover:shadow-sky-950/40"} rounded-xl p-4 sm:p-5 cursor-pointer transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group shadow-md`,onClick:()=>{v&&D?window.open(D,"_blank","noopener,noreferrer"):r(a,C,S)},children:[e.jsxs("div",{className:"flex items-center gap-3.5",dir:"rtl",style:{textAlign:"right"},children:[e.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 shadow-inner",style:{background:y.bg,color:y.color},children:e.jsx(b,{className:"w-5 h-5"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsxs("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1",style:{background:y.bg,color:y.color},children:[e.jsx(b,{className:"w-3 h-3"}),e.jsx("span",{children:a.badge||y.label})]}),e.jsx("span",{className:"text-[10px] text-slate-400 font-medium",children:v?"جدول معتمد مباشر":"مكتبة مرجعية معتمدة"})]}),e.jsx("h4",{className:`text-sm sm:text-base font-bold text-white m-0 transition-colors ${v?"group-hover:text-emerald-300":"group-hover:text-amber-300"}`,children:a.title})]})]}),e.jsx("div",{className:"flex items-center gap-2.5 shrink-0 self-end sm:self-center",children:v?e.jsxs("button",{type:"button",className:"text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/30 px-3.5 py-2 rounded-lg flex items-center gap-2 transition-all shadow-sm cursor-pointer",onClick:P=>{P.stopPropagation(),D&&window.open(D,"_blank","noopener,noreferrer")},children:[e.jsx(L,{className:"w-3.5 h-3.5 text-emerald-200"}),e.jsx("span",{children:"فتح في Google Sheets ↗"})]}):e.jsxs("span",{className:"text-xs font-bold text-sky-400 group-hover:text-sky-300 transition-colors flex items-center gap-1.5 bg-sky-500/10 border border-sky-500/20 px-3 py-1.5 rounded-lg",children:[e.jsx("span",{children:"Details"}),e.jsx(Q,{className:"w-3.5 h-3.5"})]})})]},a.id||f)};return d?e.jsx(oe,{children:e.jsxs("div",{className:"finder-modal-overlay open",id:"finderModalOverlay",role:"dialog","aria-label":"Work Explorer","data-lenis-prevent":"true",children:[e.jsx(w.div,{className:"finder-modal-backdrop",id:"finderModalBackdrop",onClick:s,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}),e.jsx("div",{className:`finder-modal-dialog ${R?"finder-modal-dialog--fullscreen":""}`,"data-lenis-prevent":"true",children:e.jsxs(w.div,{className:"finder-window flex flex-col min-h-0 h-full",id:"finderWindow","data-lenis-prevent":"true",style:{"--sector-accent":x,...R?{width:"99vw",height:"96vh",maxWidth:"none"}:{}},initial:{opacity:0,scale:.96,y:15},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.96,y:15},transition:{type:"spring",damping:25,stiffness:320},children:[e.jsxs("div",{className:"finder-titlebar shrink-0 flex items-center justify-between px-3 sm:px-4 py-2 bg-slate-950/90 border-b border-white/10","data-lenis-prevent":"true",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("div",{className:"finder-traffic-lights",children:[e.jsx("button",{className:"t-btn t-btn--red",onClick:s,title:"Close"}),e.jsx("button",{className:"t-btn t-btn--yellow",onClick:s,title:"Minimize"}),e.jsx("button",{className:"t-btn t-btn--green",onClick:()=>E(!R),title:"Fullscreen"})]})}),e.jsx("div",{className:"flex-1 max-w-xs sm:max-w-sm mx-2 sm:mx-4",children:e.jsxs("div",{className:"relative flex items-center",children:[e.jsx(ze,{className:"w-3.5 h-3.5 text-slate-400 absolute left-3 pointer-events-none"}),e.jsx("input",{type:"text",value:A,onChange:a=>T(a.target.value),placeholder:"Search work...",className:"w-full bg-slate-900/90 border border-white/10 rounded-lg py-1 pl-8 pr-7 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 transition-all text-left"}),A&&e.jsx("button",{onClick:()=>T(""),className:"absolute right-2.5 text-slate-400 hover:text-white",children:e.jsx(ie,{className:"w-3 h-3"})})]})}),e.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2",children:[e.jsxs("div",{className:"hidden sm:flex items-center bg-slate-900 border border-white/10 rounded-md p-0.5",children:[e.jsx("button",{onClick:()=>j("grid"),className:`p-1 rounded text-xs transition-colors ${_==="grid"?"bg-sky-500/20 text-sky-300":"text-slate-400 hover:text-white"}`,title:"Grid",children:e.jsx(Ie,{className:"w-3.5 h-3.5"})}),e.jsx("button",{onClick:()=>j("list"),className:`p-1 rounded text-xs transition-colors ${_==="list"?"bg-sky-500/20 text-sky-300":"text-slate-400 hover:text-white"}`,title:"List",children:e.jsx(Oe,{className:"w-3.5 h-3.5"})})]}),e.jsx("button",{className:"w-7 h-7 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors",onClick:s,title:"Close",children:e.jsx(ie,{className:"w-4 h-4"})})]})]}),e.jsxs("div",{className:"px-3 sm:px-5 py-2 bg-slate-950/60 border-b border-white/5 flex items-center justify-between text-xs text-slate-300 shrink-0","data-lenis-prevent":"true",children:[e.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 truncate",children:[e.jsxs("button",{onClick:()=>{g("folder"),t(null),T("")},className:"hover:text-sky-300 transition-colors font-medium flex items-center gap-1.5 text-slate-400 shrink-0",children:[e.jsx(Ge,{className:"w-3.5 h-3.5 text-sky-400"}),e.jsx("span",{children:"Folders"})]}),e.jsx(ve,{className:"w-3 h-3 text-slate-600 shrink-0"}),e.jsx("button",{onClick:B,className:`transition-colors font-medium truncate ${p==="folder"?"text-white":"text-slate-400 hover:text-white"}`,children:o}),p==="client"&&C&&e.jsxs(e.Fragment,{children:[e.jsx(ve,{className:"w-3 h-3 text-slate-600 shrink-0"}),e.jsx("span",{className:"font-bold text-sky-300 truncate",dir:"rtl",children:C.name})]})]}),p==="client"&&e.jsxs("button",{onClick:B,className:"text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition-colors shrink-0 ml-2",children:[e.jsx($e,{className:"w-3 h-3"}),e.jsx("span",{children:"Back"})]})]}),e.jsx("div",{className:"md:hidden flex items-center gap-1.5 px-3 py-2 bg-slate-950/90 border-b border-white/5 overflow-x-auto shrink-0","data-lenis-prevent":"true",children:ne.map(a=>{const f=n===a.key;return e.jsxs("button",{onClick:()=>W(a.key),className:`px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${f?"bg-sky-500/20 text-white border border-sky-500/40 shadow-sm":"bg-white/5 text-slate-400 hover:text-white"}`,children:[e.jsx("i",{className:a.icon,style:{color:a.color,fontSize:"0.75rem"}}),e.jsx("span",{children:a.label})]},a.key)})}),e.jsxs("div",{className:"finder-body flex-1 min-h-0 h-full flex flex-col md:flex-row overflow-hidden","data-lenis-prevent":"true",children:[e.jsxs("aside",{className:"hidden md:flex w-52 bg-slate-950/80 border-r border-white/5 p-3 flex-col shrink-0 overflow-y-auto min-h-0","data-lenis-prevent":"true",style:{overflowY:"auto",WebkitOverflowScrolling:"touch",overscrollBehavior:"contain"},children:[e.jsx("div",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-2",children:"SECTORS"}),e.jsx("nav",{className:"space-y-1",children:ne.map(a=>{var v;const f=n===a.key,y=$.categories[a.key],b=((v=y==null?void 0:y.clients)==null?void 0:v.length)||0;return e.jsxs("button",{onClick:()=>W(a.key),className:`w-full text-left px-2.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-between ${f?"bg-sky-500/15 text-white border border-sky-500/30 shadow-sm":"text-slate-400 hover:bg-white/5 hover:text-slate-200 border border-transparent"}`,children:[e.jsxs("div",{className:"flex items-center gap-2 truncate",children:[e.jsx("i",{className:a.icon,style:{color:a.color}}),e.jsx("span",{className:"truncate",children:a.label})]}),e.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:b})]},a.key)})})]}),e.jsxs("main",{className:"finder-main-panel flex-1 min-h-0 h-full overflow-y-auto bg-slate-950/30 flex flex-col",id:"finderMainPanel","data-lenis-prevent":"true",style:{overflowY:"auto",WebkitOverflowScrolling:"touch",overscrollBehavior:"contain"},children:[!A&&e.jsxs("div",{className:"p-3.5 sm:p-5 border-b border-white/5 shrink-0",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider",style:{background:`${x}18`,color:x},children:p==="client"?C==null?void 0:C.tag:S.tag}),e.jsx("span",{className:"text-xs text-slate-400",children:p==="client"?`${((ce=C==null?void 0:C.deliverables)==null?void 0:ce.length)||0} Deliverables`:`${((pe=S.clients)==null?void 0:pe.length)||0} Clients`})]}),e.jsx("h3",{className:"text-base sm:text-lg font-bold text-white mt-1 mb-0",dir:p==="client"?"rtl":"ltr",children:p==="client"?C==null?void 0:C.name:o})]})}),p==="client"&&e.jsx("div",{className:"flex items-center gap-1.5 mt-3 pt-2.5 border-t border-white/5 overflow-x-auto",children:[{id:"all",label:"All"},{id:"script",label:"Reels"},{id:"sheet",label:"Plans"},{id:"posts",label:"Posts"},{id:"pdf",label:"Decks"},{id:"episodes",label:"Podcasts"}].map(a=>e.jsx("button",{onClick:()=>H(a.id),className:`px-2.5 py-1 rounded-md text-xs transition-colors whitespace-nowrap ${k===a.id?"bg-sky-500/20 text-sky-300 font-bold border border-sky-400/30":"bg-white/5 text-slate-400 hover:text-white"}`,children:a.label},a.id))})]}),e.jsx("div",{className:"p-3.5 sm:p-5 pb-20 flex-1","data-lenis-prevent":"true",children:A&&h?e.jsxs("div",{children:[e.jsxs("div",{className:"text-xs text-slate-400 mb-3",children:["Search Results (",h.length,"):"]}),h.length===0?e.jsx("div",{className:"text-center py-12 text-slate-500 text-xs",children:"No matching results found"}):e.jsx("div",{className:O(h.length),children:h.map(({client:a,category:f,catKey:y,matchedDeliverables:b},v)=>e.jsxs("div",{className:"bg-slate-900/50 border border-white/10 rounded-xl p-3.5 hover:border-sky-500/40 transition-colors flex flex-col justify-between",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{dir:"rtl",className:"text-right",children:[e.jsx("h4",{className:"text-white font-bold text-sm",children:a.name}),e.jsx("span",{className:"text-[11px] text-slate-400",children:f.name})]}),e.jsxs("button",{onClick:()=>F(a,y),className:"text-xs text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1",children:[e.jsx("span",{children:"Open"}),e.jsx(Q,{className:"w-3 h-3"})]})]}),e.jsx("div",{className:"flex flex-wrap gap-1.5 pt-2 border-t border-white/5",dir:"rtl",children:b.map((N,D)=>{var V;const M=G(N),I=(V=(M?U(N):[])[0])==null?void 0:V.url;return e.jsxs("button",{onClick:()=>{M&&I?window.open(I,"_blank","noopener,noreferrer"):r(N,a,f)},className:`text-xs px-2.5 py-1 rounded transition-colors text-right truncate max-w-[220px] flex items-center gap-1.5 ${M?"bg-emerald-500/15 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 font-bold":"bg-white/5 hover:bg-sky-500/20 text-slate-300 hover:text-white"}`,title:M?"فتح في Google Sheets":N.title,children:[M&&e.jsx(L,{className:"w-3 h-3 text-emerald-400 shrink-0"}),e.jsx("span",{className:"truncate",children:N.title})]},D)})})]},v))})]}):p==="folder"?_==="grid"?e.jsx("div",{className:O(((he=S.clients)==null?void 0:he.length)||0),children:(xe=S.clients)==null?void 0:xe.map((a,f)=>{const y=a.color||x,b=a.deliverables?a.deliverables.length:0;return e.jsxs("div",{className:"bg-slate-900/50 hover:bg-slate-900/80 border border-white/10 hover:border-sky-500/40 rounded-xl p-4 cursor-pointer transition-all flex flex-col justify-between group",onClick:()=>F(a),children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded",style:{background:`${y}18`,color:y},children:a.tag}),e.jsxs("span",{className:"text-[11px] text-slate-400 font-mono",children:[b," Files"]})]}),e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center text-base shrink-0 transition-transform group-hover:scale-105",style:{background:`${y}20`,color:y},children:e.jsx("i",{className:a.icon||"fa-solid fa-folder"})}),e.jsxs("div",{className:"min-w-0",dir:"rtl",style:{textAlign:"right",width:"100%"},children:[e.jsx("h4",{className:"text-sm font-bold text-white m-0 truncate group-hover:text-sky-300 transition-colors",children:a.name}),e.jsx("p",{className:"text-xs text-slate-400 m-0 truncate",children:a.subtitle||a.tag})]})]})]}),e.jsx("div",{className:"pt-2.5 border-t border-white/5 flex items-center justify-end text-xs text-sky-400 group-hover:text-sky-300 transition-colors",children:e.jsxs("span",{className:"flex items-center gap-1 font-medium",children:[e.jsx("span",{children:"Explore"}),e.jsx(Q,{className:"w-3 h-3"})]})})]},a.id||f)})}):e.jsx("div",{className:"bg-slate-900/40 border border-white/10 rounded-xl overflow-hidden",children:e.jsxs("table",{className:"w-full text-left text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-900/80 text-slate-400 border-b border-white/5 font-semibold",children:[e.jsx("th",{className:"p-3",children:"Client"}),e.jsx("th",{className:"p-3",children:"Category"}),e.jsx("th",{className:"p-3",children:"Files"}),e.jsx("th",{className:"p-3 text-right",children:"Action"})]})}),e.jsx("tbody",{className:"divide-y divide-white/5",children:(ge=S.clients)==null?void 0:ge.map((a,f)=>{var y;return e.jsxs("tr",{className:"hover:bg-sky-500/10 transition-colors cursor-pointer",onClick:()=>F(a),children:[e.jsxs("td",{className:"p-3 font-semibold text-white flex items-center gap-2",dir:"rtl",children:[e.jsx("span",{style:{color:a.color||x},children:e.jsx("i",{className:a.icon||"fa-solid fa-folder"})}),e.jsx("span",{children:a.name})]}),e.jsx("td",{className:"p-3 text-slate-400",children:a.tag}),e.jsx("td",{className:"p-3 text-slate-500 font-mono",children:((y=a.deliverables)==null?void 0:y.length)||0}),e.jsx("td",{className:"p-3 text-right",children:e.jsx("span",{className:"text-sky-400 hover:underline",children:"Open"})})]},f)})})]})}):_==="grid"?re.length>1?e.jsx("div",{className:"space-y-6",children:re.map(a=>{const f=a.items.length,y=a.icon;return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-white/5",dir:"rtl",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-6 h-6 rounded-md flex items-center justify-center text-xs",style:{background:`${a.color}22`,color:a.color},children:e.jsx(y,{className:"w-3.5 h-3.5"})}),e.jsx("h4",{className:"text-xs font-bold text-slate-200 tracking-wide m-0",children:a.title})]}),e.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400 font-semibold",children:[f," ",f===1?"ملف":"ملفات"]})]}),f===1?Be(a.items[0],0):e.jsx("div",{className:f===2?"grid grid-cols-1 sm:grid-cols-2 gap-4":f===3?"grid grid-cols-1 sm:grid-cols-3 gap-4":f===4?"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4":"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:a.items.map((b,v)=>le(b,v))})]},a.key)})}):e.jsx("div",{className:c.length===1?"grid grid-cols-1 max-w-xl mx-auto gap-4":c.length===2?"grid grid-cols-1 sm:grid-cols-2 gap-4":c.length===3?"grid grid-cols-1 sm:grid-cols-3 gap-4":c.length===4?"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4":"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:c.map((a,f)=>{const y=c.length%3===1&&f===c.length-1;return le(a,f,y?"sm:col-span-2 lg:col-span-3":"")})}):e.jsx("div",{className:"bg-slate-900/40 border border-white/10 rounded-xl overflow-hidden",children:e.jsxs("table",{className:"w-full text-left text-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-slate-900/80 text-slate-400 border-b border-white/5 font-semibold",children:[e.jsx("th",{className:"p-3",children:"Deliverable"}),e.jsx("th",{className:"p-3",children:"Type"}),e.jsx("th",{className:"p-3",children:"Tag"}),e.jsx("th",{className:"p-3 text-right",children:"Action"})]})}),e.jsx("tbody",{className:"divide-y divide-white/5",children:c.map((a,f)=>{var M;const y=te(a.type),b=y.icon,v=G(a),D=(M=(v?U(a):[])[0])==null?void 0:M.url;return e.jsxs("tr",{className:`transition-colors cursor-pointer ${v?"hover:bg-emerald-500/10":"hover:bg-sky-500/10"}`,onClick:()=>{v&&D?window.open(D,"_blank","noopener,noreferrer"):r(a,C,S)},children:[e.jsxs("td",{className:"p-3 font-semibold text-white flex items-center gap-2",dir:"rtl",children:[e.jsx(b,{className:"w-3.5 h-3.5 shrink-0",style:{color:v?"#10B981":y.color}}),e.jsx("span",{children:a.title})]}),e.jsx("td",{className:"p-3 text-slate-400",children:v?"Google Sheets":y.label}),e.jsx("td",{className:"p-3",children:e.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded font-mono",style:{background:v?"rgba(16, 185, 129, 0.15)":y.bg,color:v?"#34D399":y.color},children:a.badge||"Document"})}),e.jsx("td",{className:"p-3 text-right",children:v?e.jsxs("button",{type:"button",className:"text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/30 px-2.5 py-1 rounded-md inline-flex items-center gap-1 cursor-pointer transition-all shadow-sm",onClick:P=>{P.stopPropagation(),D&&window.open(D,"_blank","noopener,noreferrer")},children:[e.jsx(L,{className:"w-3 h-3 text-emerald-100"}),e.jsx("span",{children:"فتح الشيت ↗"})]}):e.jsx("span",{className:"text-sky-400 hover:underline font-medium",children:"View Details"})})]},f)})})]})})}),e.jsxs("div",{className:"px-4 py-2 bg-slate-950 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 shrink-0 mt-auto",children:[e.jsx("span",{children:p==="client"?`${c.length} Deliverables`:`${((me=S.clients)==null?void 0:me.length)||0} Clients`}),e.jsx("span",{className:"font-mono text-[10px]",children:"shahd.ic · Explorer"})]})]})]})]})})]})}):null}function ut(d){if(!d)return"empty";const s=d.trim();return/الفكرة العامة/i.test(s)||/المشهد التمثيلي/i.test(s)||/محاور الحوار/i.test(s)||/للمصور والمونتير/i.test(s)||/بودكاست/i.test(s)&&(/الانترو/i.test(s)||/النهاية/i.test(s))?"podcast":/(^|\n)[ \t]*(hook|intro|body|conclusion|conclusion line|end\s*line|cta|editor|for editor|الهوك|المقدمة|صلب الموضوع|الخاتمة)[ \t]*(:|\n|$)/i.test(s)?"reel":s.split(`
`).map(r=>r.trim()).filter(Boolean).length>=2?"post_ideas":"general"}const bt=[{key:"concept",match:/^(الفكرة العامة|فكرة الحلقة):?/i,title:"الفكرة العامة للحلقة"},{key:"dramaticScene",match:/^(المشهد التمثيلي|مشهد تمثيلي|مشهد البداية)/i,title:"المشهد التمثيلي الافتتاحي"},{key:"directorNotes",match:/^(للمصور والمونتير|ملاحظات المخرج والمونتير|توجيهات التصوير والمونتاج):?/i,title:"توجيهات التصوير والمونتاج"},{key:"intro",match:/^(الانترو|المقدمة|انترو الحلقة):?/i,title:"انترو البودكاست وبداية الحوار"},{key:"discussionPillars",match:/^(محاور الحوار|أثناء الحوار|محاور النقاش|الأسئلة):?/i,title:"محاور وأسئلة النقاش الأساسية"},{key:"ending",match:/^(النهاية|خاتمة الحلقة|الختام):?/i,title:"ختام الحلقة والرسالة الجوهرية"},{key:"interactiveCta",match:/^(CTA التفاعلي|الدعوة التفاعلية|سؤال التفاعل):?/i,title:"سؤال التفاعل والكومنتات"},{key:"commercialCta",match:/^(CTA البيعي|CTA التجاري|الدعوة للعمل|الدعوة التجارية):?/i,title:"الدعوة للاستشارة وحجز الجلسات"}];function ft(d){const s=d.split(`
`).map(n=>n.trim()).filter(Boolean),i={title:"",sections:[]};let r=null;for(let n=0;n<s.length;n++){const l=s[n],p=bt.find(g=>g.match.test(l));if(p){r={key:p.key,title:l,lines:[]},i.sections.push(r);continue}r?r.lines.push(l):!i.title&&(l.includes("بودكاست")||l.includes("حلقة"))&&(i.title=l)}return i}function yt({scriptText:d}){const s=ft(d);return e.jsxs("div",{className:"space-y-4",dir:"rtl",style:{textAlign:"right"},children:[s.title&&e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(236, 72, 153, 0.16), rgba(168, 85, 247, 0.08))",border:"1.5px solid rgba(236, 72, 153, 0.35)",borderRadius:"14px",padding:"14px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"10px",boxShadow:"0 4px 20px rgba(236, 72, 153, 0.12)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"10px",background:"rgba(236, 72, 153, 0.22)",display:"flex",alignItems:"center",justifyContent:"center",color:"#F472B6"},children:e.jsx(se,{className:"w-5 h-5"})}),e.jsx("h4",{style:{margin:0,color:"#FFFFFF",fontSize:"1.1rem",fontWeight:800},children:s.title})]}),e.jsx("span",{style:{fontSize:"0.76rem",fontWeight:800,color:"#F472B6",background:"rgba(236, 72, 153, 0.15)",border:"1px solid rgba(236, 72, 153, 0.3)",padding:"3px 10px",borderRadius:"6px"},children:"سكريبت حلقة بودكاست تفصيلي"})]}),s.sections.map((i,r)=>{if(i.key==="concept")return e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(217, 119, 6, 0.04))",border:"1.5px solid rgba(245, 158, 11, 0.3)",borderRadius:"14px",padding:"16px 20px",boxShadow:"0 4px 16px rgba(245, 158, 11, 0.08)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[e.jsx(_e,{className:"w-4 h-4 text-amber-400"}),e.jsx("span",{style:{color:"#FBBF24",fontSize:"0.82rem",fontWeight:800},children:"الفكرة العامة للحلقة (Core Concept)"})]}),e.jsx("p",{style:{margin:0,color:"#FEF9C3",fontSize:"1.02rem",fontWeight:600,lineHeight:1.85},children:i.lines.join(" ")})]},r);if(i.key==="dramaticScene")return e.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",border:"1.5px solid rgba(99, 102, 241, 0.28)",borderRadius:"14px",padding:"18px 20px",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.3)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px",flexWrap:"wrap",gap:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Ye,{className:"w-4 h-4 text-indigo-400"}),e.jsx("span",{style:{color:"#A5B4FC",fontSize:"0.84rem",fontWeight:800},children:i.title||"المشهد التمثيلي الافتتاحي"})]}),e.jsx("span",{style:{fontSize:"0.74rem",color:"#CBD5E1",background:"rgba(99, 102, 241, 0.15)",border:"1px solid rgba(99, 102, 241, 0.3)",padding:"2px 8px",borderRadius:"6px"},children:"⏱️ 20–30 ثانية تمثيل واقعي"})]}),e.jsx("div",{className:"space-y-2.5",children:i.lines.map((n,l)=>{const p=/^المشهد:/i.test(n),g=/^آخر لقطة:/i.test(n),m=/^Cut\.?$/i.test(n.trim()),t=/^["«]/i.test(n)||/["»]$/i.test(n),R=/(هي تسأله|يرد|تسكت|بعدها تلاحظ|المهم:)/i.test(n);return p?e.jsxs("div",{style:{background:"rgba(99, 102, 241, 0.12)",border:"1px solid rgba(99, 102, 241, 0.25)",borderRadius:"8px",padding:"8px 12px",color:"#E0E7FF",fontSize:"0.9rem",fontWeight:700,display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Ce,{className:"w-3.5 h-3.5 text-indigo-400 shrink-0"}),e.jsx("span",{children:n})]},l):m?e.jsx("div",{style:{display:"flex",justifyContent:"center",margin:"10px 0"},children:e.jsx("span",{style:{background:"rgba(239, 68, 68, 0.15)",border:"1px solid rgba(239, 68, 68, 0.35)",color:"#FCA5A5",fontWeight:800,fontSize:"0.76rem",padding:"4px 14px",borderRadius:"20px",display:"inline-flex",alignItems:"center",gap:"6px"},children:"🎬 Cut مفاجئ إلى د. مايسا وزوجها بالأستوديو"})},l):g?e.jsxs("div",{style:{background:"rgba(245, 158, 11, 0.08)",border:"1px dashed rgba(245, 158, 11, 0.3)",borderRadius:"8px",padding:"10px 14px",color:"#FDE68A",fontSize:"0.9rem",fontWeight:650},children:[e.jsx("span",{style:{color:"#F59E0B",fontWeight:800,display:"block",marginBottom:"2px",fontSize:"0.76rem"},children:"📸 توجيه اللقطة الختامية:"}),n.replace(/^آخر لقطة:?/i,"").trim()]},l):t?e.jsx("div",{style:{margin:"6px 0 6px 20px",background:"linear-gradient(135deg, rgba(236, 72, 153, 0.14), rgba(168, 85, 247, 0.08))",borderRight:"3px solid #EC4899",borderRadius:"8px",padding:"8px 14px",color:"#FFFFFF",fontSize:"0.98rem",fontWeight:750,display:"inline-block",boxShadow:"0 2px 8px rgba(0,0,0,0.2)"},children:n},l):R?e.jsx("p",{style:{margin:"6px 0 2px 0",color:"#94A3B8",fontSize:"0.88rem",fontWeight:600},children:n},l):e.jsx("p",{style:{margin:"4px 0",color:"#CBD5E1",fontSize:"0.94rem",lineHeight:1.75},children:n},l)})})]},r);if(i.key==="directorNotes")return e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.95))",border:"1.5px dashed rgba(56, 189, 248, 0.35)",borderRadius:"14px",padding:"16px 20px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"},children:[e.jsx(Ke,{className:"w-4 h-4 text-sky-400"}),e.jsx("span",{style:{color:"#38BDF8",fontSize:"0.82rem",fontWeight:800},children:"🎥 توجيهات المخرج والمونتير (Director & Camera Brief)"})]}),e.jsx("div",{className:"space-y-2",children:i.lines.map((n,l)=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"8px",background:"rgba(255, 255, 255, 0.025)",border:"1px solid rgba(255, 255, 255, 0.05)",borderRadius:"8px",padding:"8px 12px"},children:[e.jsx("span",{style:{color:"#38BDF8",fontWeight:800,fontSize:"0.8rem",marginTop:"2px"},children:"•"}),e.jsx("span",{style:{color:"#E2E8F0",fontSize:"0.9rem",lineHeight:1.65},children:n})]},l))})]},r);if(i.key==="intro")return e.jsxs("div",{style:{background:"rgba(14, 165, 233, 0.07)",border:"1.5px solid rgba(56, 189, 248, 0.28)",borderRadius:"14px",padding:"18px 20px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"14px"},children:[e.jsx(Se,{className:"w-4 h-4 text-sky-400"}),e.jsx("span",{style:{color:"#38BDF8",fontSize:"0.82rem",fontWeight:800},children:"🎙️ انترو البودكاست وبداية الحوار (Intro & Dialogue Hook)"})]}),e.jsx("div",{className:"space-y-2.5",children:i.lines.map((n,l)=>{const p=/^(د\.\s*مايسا|مايسا):/i.test(n),g=/^(الزوج|جوزها):/i.test(n),m=/^(ثم|بعد المشهد|وبعدها):/i.test(n);return p?e.jsxs("div",{style:{background:"rgba(236, 72, 153, 0.09)",border:"1px solid rgba(236, 72, 153, 0.25)",borderRadius:"10px",padding:"10px 14px"},children:[e.jsx("span",{style:{color:"#F472B6",fontSize:"0.78rem",fontWeight:800,display:"block",marginBottom:"4px"},children:"🎙️ د. مايسا (Host):"}),e.jsx("p",{style:{margin:0,color:"#FFFFFF",fontSize:"0.98rem",fontWeight:650,lineHeight:1.8},children:n.replace(/^(د\.\s*مايسا|مايسا):?/i,"").trim()})]},l):g?e.jsxs("div",{style:{background:"rgba(56, 189, 248, 0.09)",border:"1px solid rgba(56, 189, 248, 0.25)",borderRadius:"10px",padding:"10px 14px"},children:[e.jsx("span",{style:{color:"#38BDF8",fontSize:"0.78rem",fontWeight:800,display:"block",marginBottom:"4px"},children:"🎙️ الزوج (Co-Host):"}),e.jsx("p",{style:{margin:0,color:"#F0F9FF",fontSize:"0.98rem",fontWeight:650,lineHeight:1.8},children:n.replace(/^(الزوج|جوزها):?/i,"").trim()})]},l):m?e.jsx("div",{style:{color:"#94A3B8",fontSize:"0.84rem",fontWeight:600,padding:"2px 6px"},children:n},l):e.jsx("p",{style:{margin:"4px 0",color:"#E2E8F0",fontSize:"0.94rem",lineHeight:1.75},children:n},l)})})]},r);if(i.key==="discussionPillars"){const n=[],l=[],p=[];let g=!1;return i.lines.forEach(m=>{/^(مهم جدًا|ملاحظة هامة|توجيه):?/i.test(m)&&(g=!0),g?p.push(m):/(\?|؟)$/.test(m.trim())||l.length>0?l.push(m):n.push(m)}),e.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.75)",border:"1.5px solid rgba(168, 85, 247, 0.3)",borderRadius:"14px",padding:"18px 20px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px",flexWrap:"wrap",gap:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Xe,{className:"w-4 h-4 text-purple-400"}),e.jsx("span",{style:{color:"#C084FC",fontSize:"0.84rem",fontWeight:800},children:"💬 محاور وأسئلة النقاش الأساسية (Discussion Pillars)"})]}),l.length>0&&e.jsxs("span",{style:{fontSize:"0.74rem",color:"#C084FC",background:"rgba(168, 85, 247, 0.15)",border:"1px solid rgba(168, 85, 247, 0.3)",padding:"2px 8px",borderRadius:"6px",fontWeight:700},children:[l.length," محاور للنقاش"]})]}),n.length>0&&e.jsx("div",{style:{color:"#94A3B8",fontSize:"0.86rem",marginBottom:"12px",fontStyle:"italic"},children:n.join(" ")}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2.5",children:l.map((m,t)=>e.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.07)",borderRadius:"10px",padding:"12px 14px",display:"flex",alignItems:"flex-start",gap:"10px",transition:"all 0.2s ease"},className:"hover:border-purple-500/40 hover:bg-white/5",children:[e.jsx("span",{style:{background:"rgba(168, 85, 247, 0.18)",color:"#D8B4FE",fontWeight:800,fontSize:"0.75rem",padding:"2px 7px",borderRadius:"6px",shrink:0,marginTop:"2px"},children:String(t+1).padStart(2,"0")}),e.jsx("p",{style:{margin:0,color:"#F1F5F9",fontSize:"0.92rem",fontWeight:600,lineHeight:1.65,flex:1},children:m})]},t))}),p.length>0&&e.jsxs("div",{style:{marginTop:"14px",background:"linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(217, 119, 6, 0.04))",border:"1px solid rgba(245, 158, 11, 0.3)",borderRadius:"10px",padding:"12px 16px"},children:[e.jsxs("span",{style:{color:"#FBBF24",fontSize:"0.78rem",fontWeight:800,display:"flex",alignItems:"center",gap:"6px",marginBottom:"4px"},children:[e.jsx(Y,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"توجيه حواري حاسم لإثارة التفاعل:"})]}),e.jsx("p",{style:{margin:0,color:"#FEF9C3",fontSize:"0.9rem",lineHeight:1.7},children:p.join(" ").replace(/^(مهم جدًا:?)/i,"").trim()})]})]},r)}return i.key==="ending"?e.jsxs("div",{style:{background:"rgba(168, 85, 247, 0.08)",border:"1.5px solid rgba(168, 85, 247, 0.28)",borderRadius:"14px",padding:"18px 20px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"},children:[e.jsx(Qe,{className:"w-4 h-4 text-purple-400"}),e.jsx("span",{style:{color:"#C084FC",fontSize:"0.82rem",fontWeight:800},children:"✨ ختام الحلقة والرسالة الجوهرية (The Ending)"})]}),e.jsx("div",{className:"space-y-2.5",children:i.lines.map((n,l)=>{const p=/^(د\.\s*مايسا|مايسا):/i.test(n),g=/^(الزوج|جوزها):/i.test(n),m=/(تنظر للكاميرا|ثم تنظر|ثم:)/i.test(n);return p?e.jsxs("div",{style:{background:"rgba(236, 72, 153, 0.08)",borderRight:"3px solid #EC4899",borderRadius:"8px",padding:"10px 14px"},children:[e.jsx("span",{style:{color:"#F472B6",fontSize:"0.76rem",fontWeight:800,display:"block",marginBottom:"2px"},children:"د. مايسا:"}),e.jsx("p",{style:{margin:0,color:"#FFFFFF",fontSize:"0.98rem",fontWeight:650,lineHeight:1.75},children:n.replace(/^(د\.\s*مايسا|مايسا):?/i,"").trim()})]},l):g?e.jsxs("div",{style:{background:"rgba(56, 189, 248, 0.08)",borderRight:"3px solid #38BDF8",borderRadius:"8px",padding:"10px 14px"},children:[e.jsx("span",{style:{color:"#38BDF8",fontSize:"0.76rem",fontWeight:800,display:"block",marginBottom:"2px"},children:"الزوج:"}),e.jsx("p",{style:{margin:0,color:"#F0F9FF",fontSize:"0.98rem",fontWeight:650,lineHeight:1.75},children:n.replace(/^(الزوج|جوزها):?/i,"").trim()})]},l):m?e.jsx("div",{style:{color:"#94A3B8",fontSize:"0.82rem",fontStyle:"italic",padding:"2px 4px"},children:n},l):e.jsx("p",{style:{margin:"4px 0",color:"#E2E8F0",fontSize:"0.94rem",lineHeight:1.75},children:n},l)})})]},r):i.key==="interactiveCta"?e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(5, 150, 105, 0.05))",border:"1.5px solid rgba(16, 185, 129, 0.35)",borderRadius:"14px",padding:"16px 20px",boxShadow:"0 4px 16px rgba(16, 185, 129, 0.1)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"10px"},children:[e.jsx(Fe,{className:"w-4 h-4 text-emerald-400"}),e.jsx("span",{style:{color:"#34D399",fontSize:"0.82rem",fontWeight:800},children:"📣 سؤال التفاعل والكومنتات (Engagement CTA)"})]}),e.jsx("div",{className:"space-y-2",children:i.lines.map((n,l)=>/^On Screen:?/i.test(n)?e.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"rgba(16, 185, 129, 0.2)",border:"1px solid rgba(16, 185, 129, 0.4)",color:"#A7F3D0",fontSize:"0.82rem",fontWeight:700,padding:"4px 12px",borderRadius:"20px",marginTop:"4px"},children:e.jsxs("span",{children:["📱 على الشاشة: ",n.replace(/^On Screen:?/i,"").trim()]})},l):e.jsx("p",{style:{margin:0,color:"#ECFDF5",fontSize:"1rem",fontWeight:700,lineHeight:1.75},children:n},l))})]},r):i.key==="commercialCta"?e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(16, 185, 129, 0.08))",border:"1.5px solid rgba(245, 158, 11, 0.35)",borderRadius:"14px",padding:"16px 20px",boxShadow:"0 4px 16px rgba(245, 158, 11, 0.1)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[e.jsx(ae,{className:"w-4 h-4 text-amber-400"}),e.jsx("span",{style:{color:"#FBBF24",fontSize:"0.82rem",fontWeight:800},children:"🎯 الدعوة للاستشارة وحجز الجلسات (Booking CTA)"})]}),e.jsx("p",{style:{margin:0,color:"#FEF9C3",fontSize:"0.96rem",fontWeight:650,lineHeight:1.75},children:i.lines.join(" ")})]},r):null})]})}function jt(d){if(!d)return null;const s={},i=[{key:"hook",match:/^(hook|الـ\s*hook|الهوك|الافتتاحية)$/i},{key:"intro",match:/^(intro|المقدمة|الانترو)$/i},{key:"body",match:/^(body|صلب الموضوع|المحتوى)$/i},{key:"conclusion",match:/^(conclusion line|conclusion|end\s*line|الخاتمة|الخلاصة|الرسالة)$/i},{key:"cta",match:/^(cta|الدعوة للاتخاذ إجراء|الدعوة لاتخاذ إجراء|الدعوة)$/i},{key:"editor",match:/^(for editor.*|ملاحظة للمونتير|ملاحظات للمونتير)$/i}];let r=d.split(`
`).map(p=>p.trim()).filter(Boolean),n="header";s[n]=[];let l=!1;for(let p of r){const g=i.find(m=>m.match.test(p));g?(n=g.key,s[n]||(s[n]=[]),l=!0):s[n].push(p)}return l?s:null}function vt({scriptText:d}){const s=jt(d);return s?e.jsxs("div",{className:"space-y-3.5",dir:"rtl",style:{textAlign:"right"},children:[s.header&&s.header.length>0&&e.jsx("div",{style:{background:"rgba(255, 255, 255, 0.03)",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",paddingBottom:"10px",marginBottom:"12px"},children:s.header.map((i,r)=>e.jsx("span",{style:{fontSize:"0.86rem",color:"#94A3B8",fontWeight:700,display:"block"},children:i},r))}),s.hook&&s.hook.length>0&&e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(245, 158, 11, 0.14), rgba(217, 119, 6, 0.05))",border:"1.5px solid rgba(245, 158, 11, 0.35)",borderRadius:"12px",padding:"14px 18px",boxShadow:"0 4px 16px rgba(245, 158, 11, 0.12)"},children:[e.jsxs("span",{style:{color:"#FBBF24",fontSize:"0.8rem",fontWeight:800,display:"flex",alignItems:"center",gap:"6px",marginBottom:"6px"},children:[e.jsx(Y,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"الافتتاحية والهوك (The Hook):"})]}),e.jsxs("p",{style:{margin:0,color:"#FEF08A",fontSize:"1.04rem",fontWeight:750,lineHeight:1.75},children:['"',s.hook.join(" "),'"']})]}),s.intro&&s.intro.length>0&&e.jsxs("div",{style:{background:"rgba(14, 165, 233, 0.09)",border:"1px solid rgba(56, 189, 248, 0.25)",borderRadius:"12px",padding:"14px 18px"},children:[e.jsxs("span",{style:{color:"#38BDF8",fontSize:"0.78rem",fontWeight:800,display:"flex",alignItems:"center",gap:"6px",marginBottom:"6px"},children:[e.jsx(Se,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"المقدمة (Intro):"})]}),e.jsx("div",{style:{color:"#F0F9FF",fontSize:"0.96rem",lineHeight:1.85,fontWeight:500},children:s.intro.map((i,r)=>e.jsx("p",{style:{margin:r>0?"6px 0 0 0":0},children:i},r))})]}),s.body&&s.body.length>0&&e.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.75)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"12px",padding:"16px 18px"},children:[e.jsx("span",{style:{color:"#94A3B8",fontSize:"0.78rem",fontWeight:800,display:"block",marginBottom:"8px"},children:"📝 صلب الموضوع والسيناريو (Body):"}),e.jsx("div",{className:"space-y-2",children:s.body.map((i,r)=>{const n=/^[•\-\*]/i.test(i),l=/^\d+[\.\)]/i.test(i)||/^(أولاً|ثانياً|ثالثاً|رابعاً):/i.test(i);return n||l?e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"8px",background:"rgba(255, 255, 255, 0.025)",border:"1px solid rgba(255, 255, 255, 0.05)",borderRadius:"8px",padding:"8px 12px"},children:[e.jsx("span",{style:{color:"#38BDF8",fontWeight:800,fontSize:"0.82rem",marginTop:"2px"},children:l?"✓":"•"}),e.jsx("span",{style:{color:"#E2E8F0",fontSize:"0.94rem",lineHeight:1.7},children:i.replace(/^[•\-\*]\s*/,"")})]},r):e.jsx("p",{style:{margin:"6px 0",color:"#CBD5E1",fontSize:"0.96rem",lineHeight:1.85},children:i},r)})})]}),s.conclusion&&s.conclusion.length>0&&e.jsxs("div",{style:{background:"rgba(168, 85, 247, 0.09)",border:"1px solid rgba(168, 85, 247, 0.25)",borderRadius:"12px",padding:"14px 18px"},children:[e.jsxs("span",{style:{color:"#C084FC",fontSize:"0.78rem",fontWeight:800,display:"flex",alignItems:"center",gap:"6px",marginBottom:"4px"},children:[e.jsx(_e,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"الرسالة الجوهرية (End Line / Conclusion):"})]}),e.jsxs("p",{style:{margin:0,color:"#F5F3FF",fontSize:"0.98rem",fontWeight:700,lineHeight:1.75},children:['"',s.conclusion.join(" "),'"']})]}),s.cta&&s.cta.length>0&&e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(5, 150, 105, 0.05))",border:"1.5px solid rgba(16, 185, 129, 0.32)",borderRadius:"12px",padding:"14px 18px",boxShadow:"0 4px 16px rgba(16, 185, 129, 0.12)"},children:[e.jsxs("span",{style:{color:"#34D399",fontSize:"0.78rem",fontWeight:800,display:"flex",alignItems:"center",gap:"6px",marginBottom:"4px"},children:[e.jsx(Fe,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"الدعوة لإجراء (Call to Action / CTA):"})]}),e.jsx("p",{style:{margin:0,color:"#ECFDF5",fontSize:"0.96rem",fontWeight:650,lineHeight:1.75},children:s.cta.join(" ")})]}),s.editor&&s.editor.length>0&&e.jsxs("div",{style:{background:"rgba(245, 158, 11, 0.05)",border:"1px dashed rgba(245, 158, 11, 0.3)",borderRadius:"10px",padding:"14px 16px"},children:[e.jsxs("span",{style:{color:"#F59E0B",fontSize:"0.76rem",fontWeight:800,display:"flex",alignItems:"center",gap:"6px",marginBottom:"4px"},children:[e.jsx(qe,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"توجيهات المونتاج والإخراج (Editor Notes):"})]}),e.jsx("div",{style:{color:"#FDE68A",fontSize:"0.88rem",lineHeight:1.7},children:s.editor.map((i,r)=>e.jsx("p",{style:{margin:r>0?"4px 0 0 0":0},children:i},r))})]})]}):null}function kt({scriptText:d}){const s=d.split(`
`).map(i=>i.trim()).filter(Boolean);return e.jsxs("div",{className:"space-y-3",dir:"rtl",style:{textAlign:"right"},children:[e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 12px",background:"rgba(255, 255, 255, 0.02)",borderRadius:"8px",border:"1px solid rgba(255, 255, 255, 0.06)",marginBottom:"6px"},children:e.jsxs("span",{style:{fontSize:"0.78rem",fontWeight:700,color:"#94A3B8",display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Ne,{className:"w-3.5 h-3.5 text-sky-400"}),e.jsxs("span",{children:["بنك أفكار المحتوى والصيغ المعتمدة (",s.length," صيغة وفكرة)"]})]})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2.5",children:s.map((i,r)=>{const n=String(r+1).padStart(2,"0"),l=/^["«]/i.test(i)||i.includes('"'),p=i.includes("—")||i.includes(" - "),g=/(\?|؟)$/.test(i);let m=i,t=null;if(p){const R=i.split(/[—\-]/);R.length>=2&&(m=R[0].trim(),t=R.slice(1).join("—").trim())}return e.jsx("div",{style:{background:"rgba(15, 23, 42, 0.75)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"10px",padding:"12px 14px",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"8px",transition:"all 0.2s ease"},className:"hover:border-sky-500/40 hover:bg-slate-900/90",children:e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"8px"},children:[e.jsx("span",{style:{background:g?"rgba(56, 189, 248, 0.15)":"rgba(255, 255, 255, 0.06)",color:g?"#38BDF8":"#CBD5E1",fontWeight:800,fontSize:"0.74rem",padding:"2px 6px",borderRadius:"6px",shrink:0,marginTop:"2px"},children:n}),e.jsxs("div",{style:{flex:1},children:[e.jsx("p",{style:{margin:0,color:l?"#FEF08A":"#F8FAFC",fontSize:"0.94rem",fontWeight:650,lineHeight:1.6},children:m}),t&&e.jsx("p",{style:{margin:"4px 0 0 0",color:"#94A3B8",fontSize:"0.84rem",lineHeight:1.55},children:t})]})]})},r)})})]})}function wt({scriptText:d}){const s=d.split(`

`).map(i=>i.trim()).filter(Boolean);if(s.length<=1){const i=d.split(`
`).map(r=>r.trim()).filter(Boolean);return e.jsx("div",{style:{background:"rgba(15, 23, 42, 0.7)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"12px",padding:"16px 18px"},dir:"rtl",children:i.map((r,n)=>e.jsx("p",{style:{margin:n>0?"8px 0 0 0":0,color:"#E2E8F0",fontSize:"0.96rem",lineHeight:1.85},children:r},n))})}return e.jsx("div",{className:"space-y-3",dir:"rtl",style:{textAlign:"right"},children:s.map((i,r)=>e.jsx("div",{style:{background:"rgba(15, 23, 42, 0.7)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"12px",padding:"14px 18px"},children:e.jsx("p",{style:{margin:0,color:"#E2E8F0",fontSize:"0.96rem",lineHeight:1.85,whiteSpace:"pre-line"},children:i})},r))})}function J({scriptText:d}){if(!d)return null;const s=ut(d);return s==="podcast"?e.jsx(yt,{scriptText:d}):s==="reel"?e.jsx(vt,{scriptText:d}):s==="post_ideas"?e.jsx(kt,{scriptText:d}):e.jsx(wt,{scriptText:d})}function Ct({isOpen:d,onClose:s,deliverable:i,client:r,category:n}){var C,z;const[l,p]=u.useState(0),[g,m]=u.useState(0);if(u.useEffect(()=>{p(0),m(0)},[i,d]),u.useEffect(()=>{const o=x=>{x.key==="Escape"&&d&&s()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[d,s]),!d||!i)return null;const t=K[i.id]||null,E=(i.type==="pdf_deck"||i.type==="pdf")&&t&&t.images&&t.images.length>0,A=(C=i.sheetLinks)!=null&&C.length?i.sheetLinks:i.sheetUrl?[{label:"Open in Google Sheets",url:i.sheetUrl}]:t!=null&&t.sheetUrl?[{label:"Open in Google Sheets",url:t.sheetUrl}]:[],T=i.type==="sheet_plan"||i.type==="xlsx"||A.length>0||!!(t&&(t.type==="sheet_plan"||t.type==="xlsx"||t.sheetUrl)),_=(z=t==null?void 0:t.tables)!=null&&z.length?t.tables:t!=null&&t.headers&&(t!=null&&t.rows)?[{title:i.title,headers:t.headers,rows:t.rows}]:[],j=(n==null?void 0:n.accentColor)||(r==null?void 0:r.color)||"#38BDF8",k=o=>{p(x=>x===o?null:o)},H=A[g]||A[0]||null,S=(H==null?void 0:H.url)||i.sheetUrl||(t==null?void 0:t.sheetUrl)||"";return e.jsx(oe,{children:e.jsxs("div",{className:"work-modal open",id:"workModal",role:"dialog","aria-modal":"true",children:[e.jsx(w.div,{className:"work-modal__backdrop",id:"workModalBackdrop",onClick:s,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}),e.jsx("button",{className:"work-modal__close",id:"workModalClose","aria-label":"Close modal",onClick:s,children:e.jsx(ie,{className:"w-5 h-5 text-white"})}),e.jsx(w.div,{className:"work-modal__container","data-lenis-prevent":"true",style:{overflowY:"auto",WebkitOverflowScrolling:"touch",overscrollBehavior:"contain",background:"var(--surface-card, #0a1120)",borderColor:"var(--border, rgba(255, 255, 255, 0.12))"},initial:{opacity:0,scale:.96,y:15},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.96,y:15},transition:{type:"spring",damping:26,stiffness:320},children:e.jsx("div",{className:"work-modal__content","data-lenis-prevent":"true",children:E?e.jsxs("div",{style:{width:"100%",maxWidth:"1100px",margin:"0 auto",padding:"20px 16px 36px 16px",boxSizing:"border-box"},children:[e.jsxs("div",{style:{marginBottom:"18px",padding:"14px 18px",background:"rgba(15, 23, 42, 0.75)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"14px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"},children:[e.jsxs("div",{dir:"rtl",className:"text-right",children:[e.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:j,background:`${j}18`,border:`1px solid ${j}35`,padding:"3px 10px",borderRadius:"6px",display:"inline-block",marginBottom:"6px"},children:r?r.name:t.client||""}),e.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:800,color:"#F8FAFC",margin:0,lineHeight:1.4},children:t.title||i.title})]}),e.jsxs("span",{className:"text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-1.5",children:[e.jsx(Ze,{className:"w-3.5 h-3.5 text-sky-400"}),e.jsxs("span",{children:[t.images.length," Slides"]})]})]}),t.images.map((o,x)=>{const h=o.startsWith("http")?o:`/shahd.ic/${o.replace(/^\//,"")}`;return e.jsxs("div",{style:{marginBottom:"18px",borderRadius:"12px",overflow:"hidden",border:"1px solid rgba(255, 255, 255, 0.1)",background:"#040914",boxShadow:"0 10px 30px rgba(0,0,0,0.6)",position:"relative",aspectRatio:"16/9",width:"100%"},children:[e.jsxs("div",{className:"absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-md border border-white/10 z-10",children:[x+1," / ",t.images.length]}),e.jsx("img",{src:h,alt:`Slide ${x+1}`,style:{width:"100%",height:"100%",objectFit:"contain",display:"block"},loading:"eager",decoding:"async"})]},x)})]}):T?e.jsx("div",{style:{maxWidth:"640px",margin:"0 auto",padding:"40px 20px 48px 20px",textAlign:"center"},children:e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(6, 78, 59, 0.25))",border:"1.5px solid rgba(16, 185, 129, 0.35)",borderRadius:"20px",padding:"38px 28px",boxShadow:"0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(16, 185, 129, 0.1)",display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"},children:[e.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"16px",background:"rgba(16, 185, 129, 0.15)",border:"1px solid rgba(16, 185, 129, 0.35)",display:"flex",alignItems:"center",justifyContent:"center",color:"#10B981"},children:e.jsx(L,{className:"w-8 h-8"})}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",background:`${j}18`,border:`1px solid ${j}30`,padding:"4px 14px",borderRadius:"8px"},children:[e.jsx("span",{style:{fontSize:"0.8rem",fontWeight:700,color:j},children:(r==null?void 0:r.name)||(t==null?void 0:t.client)||"Client Work"}),e.jsx("span",{style:{color:"rgba(255, 255, 255, 0.2)"},children:"•"}),e.jsx("span",{style:{fontSize:"0.8rem",color:"#94A3B8"},children:i.badge||"Google Sheets"})]}),e.jsx("h3",{style:{fontSize:"1.45rem",fontWeight:800,color:"#FFFFFF",margin:"0",lineHeight:1.4},dir:"rtl",children:i.title}),e.jsx("div",{style:{width:"100%",maxWidth:"420px",display:"flex",flexDirection:"column",gap:"12px",marginTop:"12px"},children:A.map((o,x)=>e.jsxs("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",className:"hover:scale-102 active:scale-98 transition-all flex items-center justify-between gap-3 cursor-pointer shadow-lg shadow-emerald-950/40",style:{background:"#059669",color:"#FFFFFF",fontSize:"1rem",fontWeight:800,padding:"14px 24px",borderRadius:"12px",textDecoration:"none",width:"100%",boxSizing:"border-box"},children:[e.jsx(L,{className:"w-5 h-5 text-emerald-100 shrink-0"}),e.jsx("span",{className:"truncate",style:{flex:1,textAlign:"center"},children:o.label&&o.label!=="Open in Google Sheets"?o.label:"فتح في Google Sheets ↗"}),e.jsx(ae,{className:"w-4 h-4 text-emerald-200 shrink-0"})]},x))})]})}):e.jsxs("div",{className:"work-modal__info",style:{maxWidth:"1080px",margin:"0 auto",padding:"24px 18px 42px 18px"},children:[e.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.75)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"16px",padding:"16px 20px",marginBottom:"20px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"},children:[e.jsxs("div",{dir:"rtl",className:"text-right",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"},children:[e.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,color:j,background:`${j}18`,border:`1px solid ${j}30`,padding:"2px 8px",borderRadius:"6px"},children:(r==null?void 0:r.name)||"Client Work"}),e.jsx("span",{style:{fontSize:"0.78rem",color:"#94A3B8"},children:i.badge||i.title})]}),e.jsx("h3",{style:{fontSize:"1.28rem",fontWeight:800,color:"#FFFFFF",margin:0,lineHeight:1.3},children:i.title})]}),S&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[A.length>1&&e.jsx("div",{style:{display:"flex",gap:"4px",background:"rgba(255,255,255,0.05)",padding:"3px",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.08)"},children:A.map((o,x)=>e.jsx("button",{onClick:()=>m(x),style:{padding:"5px 12px",borderRadius:"6px",fontSize:"0.78rem",fontWeight:700,cursor:"pointer",border:"none",background:g===x?"rgba(56, 189, 248, 0.2)":"transparent",color:g===x?"#38BDF8":"#94A3B8",transition:"all 0.2s ease"},children:o.label||`Sheet 0${x+1}`},x))}),e.jsxs("a",{href:S,target:"_blank",rel:"noopener noreferrer",className:"hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer",style:{background:"#059669",color:"#FFFFFF",fontSize:"0.86rem",fontWeight:700,padding:"10px 20px",borderRadius:"10px",textDecoration:"none",boxShadow:"0 4px 16px rgba(5, 150, 105, 0.35)"},children:[e.jsx(L,{className:"w-4 h-4"}),e.jsx("span",{children:"Open in Google Sheets"}),e.jsx(ae,{className:"w-3.5 h-3.5"})]})]})]}),e.jsxs("div",{className:"work-modal__desc",id:"workModalDesc",children:[(t==null?void 0:t.branchInfo)&&e.jsxs("div",{dir:"rtl",style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"12px",padding:"12px 16px",marginBottom:"16px",display:"flex",flexWrap:"wrap",gap:"12px",alignItems:"center",fontSize:"0.85rem",color:"#94A3B8",textAlign:"right"},children:[t.branchInfo.location&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Ce,{className:"w-3.5 h-3.5 text-sky-400"}),e.jsx("span",{style:{color:"#E2E8F0"},children:t.branchInfo.location})]}),t.branchInfo.specialty&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(Ne,{className:"w-3.5 h-3.5 text-amber-400"}),e.jsx("span",{style:{color:"#FDE68A"},children:t.branchInfo.specialty})]})]}),(t==null?void 0:t.campaignLine)&&e.jsxs("div",{dir:"rtl",style:{background:"rgba(56, 189, 248, 0.08)",border:"1px solid rgba(56, 189, 248, 0.25)",borderRadius:"12px",padding:"12px 16px",marginBottom:"16px",textAlign:"right"},children:[e.jsx("span",{style:{color:"#38BDF8",fontWeight:700,fontSize:"0.78rem",display:"block",marginBottom:"2px"},children:"شعار الحملة (Campaign Line):"}),e.jsx("div",{style:{color:"#FFFFFF",fontSize:"1.02rem",fontWeight:800},children:t.campaignLine})]}),(t==null?void 0:t.goal)&&!(t!=null&&t.days)&&e.jsxs("div",{dir:"rtl",style:{background:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.22)",borderRadius:"12px",padding:"12px 16px",marginBottom:"16px",textAlign:"right"},children:[e.jsx("span",{style:{color:"#34D399",fontWeight:700,fontSize:"0.78rem",display:"block",marginBottom:"2px"},children:"الهدف التسويقي (Objective):"}),e.jsx("div",{style:{color:"#ECFDF5",fontSize:"0.94rem",lineHeight:1.7},children:t.goal})]}),(t==null?void 0:t.hook)&&e.jsxs("div",{dir:"rtl",style:{background:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.22)",borderRadius:"12px",padding:"14px 18px",marginBottom:"18px",textAlign:"right"},children:[e.jsx("span",{style:{color:"#FBBF24",fontWeight:700,fontSize:"0.82rem",display:"block",marginBottom:"4px"},children:"استراتيجية وهدف المحتوى (Strategic Focus):"}),e.jsx("div",{style:{color:"#FEF9C3",fontSize:"0.96rem",lineHeight:1.8,fontWeight:500},children:t.hook})]}),T&&e.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(5, 150, 105, 0.14), rgba(16, 185, 129, 0.05))",border:"1.5px solid rgba(16, 185, 129, 0.3)",borderRadius:"14px",padding:"16px 20px",marginBottom:"20px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"14px"},children:[e.jsxs("div",{dir:"rtl",style:{textAlign:"right",maxWidth:"650px"},children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"},children:e.jsx("span",{style:{color:"#34D399",fontWeight:800,fontSize:"0.88rem"},children:"جدول ومخطط محتوى مباشر (Live Google Sheet)"})}),e.jsx("p",{style:{margin:0,color:"#A7F3D0",fontSize:"0.88rem",lineHeight:1.6},children:"المحتوى والجدول الزمني متاح مباشرة على Google Sheets لسهولة الفلترة والاطلاع الفوري."})]}),S&&e.jsxs("a",{href:S,target:"_blank",rel:"noopener noreferrer",style:{background:"#059669",color:"#FFFFFF",fontSize:"0.88rem",fontWeight:800,padding:"10px 20px",borderRadius:"10px",textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"8px",boxShadow:"0 4px 16px rgba(5, 150, 105, 0.35)",transition:"all 0.2s ease"},className:"hover:scale-105 active:scale-95 cursor-pointer",children:[e.jsx(L,{className:"w-4 h-4"}),e.jsx("span",{children:"Open in Google Sheets ↗"})]})]}),_.length>0&&e.jsx("div",{style:{marginBottom:"22px"},children:_.map((o,x)=>{var h,c;return e.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.65)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"14px",padding:"16px 18px",marginBottom:"16px"},children:[o.title&&e.jsx("h4",{style:{color:"#7DD3FC",fontSize:"1rem",fontWeight:800,margin:"0 0 12px 0",textAlign:"right"},dir:"rtl",children:o.title}),e.jsx("div",{style:{overflowX:"auto",borderRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.06)"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",textAlign:"right",direction:"rtl",fontSize:"0.88rem"},children:[e.jsx("thead",{children:e.jsx("tr",{style:{background:"rgba(14, 165, 233, 0.12)",borderBottom:"1px solid rgba(56, 189, 248, 0.2)"},children:(h=o.headers)==null?void 0:h.map((F,B)=>e.jsx("th",{style:{padding:"12px 14px",color:"#BAE6FD",fontWeight:700,whiteSpace:"nowrap"},children:F},B))})}),e.jsx("tbody",{children:(c=o.rows)==null?void 0:c.map((F,B)=>e.jsx("tr",{style:{background:B%2===0?"rgba(255,255,255,0.015)":"rgba(255,255,255,0.035)",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:F.map((W,O)=>e.jsx("td",{style:{padding:"12px 14px",color:O===1?"#FFFFFF":"#CBD5E1",fontWeight:O===1?600:400,lineHeight:1.6},children:W},O))},B))})]})})]},x)})}),(t==null?void 0:t.scenes)&&e.jsxs("div",{style:{marginTop:"4px"},children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"14px"},children:[t.duration&&e.jsxs("span",{className:"bg-white/5 text-slate-300 border border-white/10 px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5",children:[e.jsx(ke,{className:"w-3.5 h-3.5 text-sky-400"}),e.jsxs("span",{children:["Duration: ",t.duration]})]}),t.audio&&e.jsxs("span",{className:"bg-amber-500/10 text-amber-200 border border-amber-500/20 px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5",children:[e.jsx(Ue,{className:"w-3.5 h-3.5 text-amber-400"}),e.jsx("span",{dir:"rtl",children:t.audio})]})]}),t.concept&&e.jsxs("div",{dir:"rtl",style:{background:"rgba(15, 23, 42, 0.7)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"12px",padding:"14px 18px",marginBottom:"16px",color:"#CBD5E1",fontSize:"0.92rem",lineHeight:1.75,textAlign:"right"},children:[e.jsx("strong",{style:{color:"#38BDF8",display:"block",marginBottom:"4px",fontSize:"0.85rem"},children:"الفكرة العامة (Core Concept):"}),t.concept]}),e.jsx("div",{className:"deliverable-accordion space-y-3",style:{"--item-accent":j},children:t.scenes.map((o,x)=>{const h=l===x,c=String(x+1).padStart(2,"0"),F=o.num||`المشهد ${c}`,B=o.dialogue?o.dialogue.slice(0,65)+"...":o.visual?o.visual.slice(0,65)+"...":"";return e.jsxs("article",{className:`accordion-item ${h?"is-active":""}`,style:{background:"rgba(15, 23, 42, 0.75)",borderColor:h?"rgba(56, 189, 248, 0.35)":"rgba(255, 255, 255, 0.08)",borderRadius:"14px",overflow:"hidden",transition:"border-color 0.25s ease"},children:[e.jsxs("button",{type:"button",className:"accordion-item__trigger","aria-expanded":h,onClick:()=>k(x),style:{padding:"14px 18px",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",background:h?"rgba(255, 255, 255, 0.04)":"transparent",border:"none",cursor:"pointer",transition:"background 0.2s ease"},children:[e.jsxs("div",{className:"accordion-item__start",style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("span",{className:"accordion-item__num-badge",style:{background:h?"rgba(56, 189, 248, 0.2)":"rgba(255, 255, 255, 0.06)",color:h?"#38BDF8":"#CBD5E1",fontWeight:800,padding:"4px 8px",borderRadius:"8px",fontSize:"0.8rem"},children:c}),e.jsxs("div",{className:"accordion-item__meta",dir:"rtl",style:{textAlign:"right"},children:[e.jsx("h4",{className:"accordion-item__title",style:{fontSize:"0.96rem",fontWeight:700,color:h?"#38BDF8":"#F8FAFC",margin:0,transition:"color 0.2s ease"},children:F}),!h&&B&&e.jsx("span",{className:"accordion-item__preview",style:{color:"#94A3B8",fontSize:"0.8rem",display:"block",marginTop:"3px"},children:B})]})]}),e.jsxs("div",{className:"accordion-item__end",style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsxs("span",{className:"accordion-item__status-pill",style:{background:"rgba(255, 255, 255, 0.05)",color:"#94A3B8",borderColor:"rgba(255, 255, 255, 0.08)",fontSize:"0.74rem",padding:"3px 8px",borderRadius:"6px"},children:["Scene ",c]}),e.jsx("span",{className:"accordion-item__chevron",children:e.jsx(Z,{className:`w-4 h-4 text-slate-400 transition-transform duration-300 ${h?"rotate-180 text-sky-400":""}`})})]})]}),h&&e.jsx(w.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.25},className:"accordion-item__content",style:{display:"block",padding:"0",borderTop:"1px solid rgba(255, 255, 255, 0.08)"},dir:"rtl",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/5",dir:"rtl",children:[e.jsxs("div",{style:{padding:"18px 20px",textAlign:"right"},children:[e.jsx("span",{style:{color:"#7DD3FC",fontSize:"0.76rem",fontWeight:700,display:"block",marginBottom:"8px"},children:"🎙️ الحوار والأداء الصوتي (Dialogue / VO):"}),e.jsx("p",{style:{margin:0,color:"#FFFFFF",fontSize:"1rem",fontWeight:500,lineHeight:1.9},children:o.dialogue||"—"})]}),e.jsxs("div",{style:{padding:"18px 20px",textAlign:"right",background:"rgba(0, 0, 0, 0.18)"},children:[o.visual&&e.jsxs("div",{style:{marginBottom:o.sfx||o.textOnScreen?"12px":"0"},children:[e.jsx("span",{style:{color:"#38BDF8",fontSize:"0.76rem",fontWeight:700,display:"block",marginBottom:"4px"},children:"🎬 اللقطة والتوجيه البصري (Video):"}),e.jsx("p",{style:{margin:0,color:"#94A3B8",fontSize:"0.9rem",lineHeight:1.75},children:o.visual})]}),o.textOnScreen&&e.jsxs("div",{style:{marginTop:"10px",background:"rgba(168, 85, 247, 0.08)",border:"1px solid rgba(168, 85, 247, 0.22)",borderRadius:"8px",padding:"8px 12px"},children:[e.jsx("span",{style:{color:"#C084FC",fontSize:"0.74rem",fontWeight:700,display:"block",marginBottom:"2px"},children:"النص على الشاشة (On-Screen Text):"}),e.jsx("p",{style:{margin:0,color:"#F3E8FF",fontSize:"0.88rem",fontWeight:600},children:o.textOnScreen})]}),o.sfx&&e.jsxs("div",{style:{marginTop:"10px",background:"rgba(245, 158, 11, 0.07)",border:"1px solid rgba(245, 158, 11, 0.2)",borderRadius:"8px",padding:"8px 12px"},children:[e.jsx("span",{style:{color:"#F59E0B",fontSize:"0.74rem",fontWeight:700,display:"block",marginBottom:"2px"},children:"🔊 المؤثرات الصوتية (SFX):"}),e.jsx("p",{style:{margin:0,color:"#FDE68A",fontSize:"0.86rem",lineHeight:1.6},children:o.sfx})]})]})]})})]},x)})}),t.cta&&e.jsxs("div",{dir:"rtl",style:{marginTop:"16px",background:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.22)",borderRadius:"12px",padding:"14px 18px",textAlign:"right"},children:[e.jsx("span",{style:{color:"#34D399",fontWeight:700,fontSize:"0.8rem",display:"block",marginBottom:"4px"},children:"دعوة لاتخاذ إجراء (CTA):"}),e.jsx("div",{style:{color:"#ECFDF5",fontSize:"0.94rem",lineHeight:1.75},children:t.cta})]}),t.notes&&e.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"10px",padding:"12px 16px",marginTop:"14px",textAlign:"right"},dir:"rtl",children:[e.jsx("span",{style:{color:"#94A3B8",fontWeight:700,fontSize:"0.8rem",display:"block",marginBottom:"2px"},children:"ملاحظات الإنتاج (Production Notes):"}),e.jsx("span",{style:{color:"#CBD5E1",fontSize:"0.88rem",lineHeight:1.6},children:t.notes})]})]}),(t==null?void 0:t.trends)&&t.trends.length>0&&e.jsxs("div",{style:{marginBottom:"22px"},children:[e.jsx("h4",{style:{color:"#38BDF8",fontSize:"1rem",fontWeight:800,margin:"0 0 14px 0",textAlign:"right"},dir:"rtl",children:"مكتبة الأفكار والمراجع المعتمدة (Trends & References):"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:t.trends.map((o,x)=>e.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.7)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"12px",padding:"14px 16px",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"10px"},children:[e.jsxs("div",{dir:"rtl",style:{textAlign:"right"},children:[o.num&&e.jsxs("span",{style:{fontSize:"0.75rem",fontWeight:800,color:"#F59E0B",background:"rgba(245, 158, 11, 0.15)",padding:"2px 8px",borderRadius:"6px",display:"inline-block",marginBottom:"6px"},children:["Ref ",o.num]}),e.jsx("h5",{style:{margin:0,color:"#F8FAFC",fontSize:"0.92rem",fontWeight:700,lineHeight:1.6},children:o.title})]}),o.link&&e.jsx("div",{style:{display:"flex",justifyContent:"flex-start"},children:e.jsxs("a",{href:o.link,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.8rem",fontWeight:700,color:"#E1306C",background:"rgba(225, 48, 108, 0.12)",border:"1px solid rgba(225, 48, 108, 0.3)",padding:"6px 12px",borderRadius:"8px",textDecoration:"none",transition:"all 0.2s ease"},className:"hover:scale-105 active:scale-95 cursor-pointer",children:[e.jsx("i",{className:"fa-brands fa-instagram"}),e.jsx("span",{children:"Open Instagram Reel ↗"})]})})]},x))})]}),(t==null?void 0:t.episodes)&&t.episodes.length>0&&e.jsxs("div",{style:{marginBottom:"22px"},children:[e.jsx("h4",{style:{color:"#EC4899",fontSize:"1rem",fontWeight:800,margin:"0 0 14px 0",textAlign:"right"},dir:"rtl",children:"حلقات البودكاست وسلسلة الفيديوهات (Podcast & Video Series):"}),e.jsx("div",{className:"deliverable-accordion",style:{"--item-accent":"#EC4899"},children:t.episodes.map((o,x)=>{const h=l===x,c=String(x+1).padStart(2,"0");return e.jsxs("article",{className:`accordion-item ${h?"is-active":""}`,style:{background:"rgba(15, 23, 42, 0.65)",borderColor:"rgba(255,255,255,0.08)",marginBottom:"10px",borderRadius:"12px"},children:[e.jsxs("button",{type:"button",className:"accordion-item__trigger","aria-expanded":h,onClick:()=>k(x),style:{padding:"14px 18px"},children:[e.jsxs("div",{className:"accordion-item__start",children:[e.jsx("span",{className:"accordion-item__num-badge",style:{background:"rgba(236, 72, 153, 0.18)",color:"#F472B6"},children:c}),e.jsxs("div",{className:"accordion-item__meta",dir:"rtl",style:{textAlign:"right"},children:[e.jsx("h4",{className:"accordion-item__title",style:{fontSize:"0.98rem",fontWeight:700,color:"#F8FAFC"},children:o.title}),o.hook&&e.jsx("span",{className:"accordion-item__preview",style:{color:"#94A3B8",fontSize:"0.82rem"},children:o.hook})]})]}),e.jsxs("div",{className:"accordion-item__end",children:[e.jsx("span",{className:"accordion-item__status-pill",style:{background:"rgba(236, 72, 153, 0.1)",color:"#F472B6",borderColor:"rgba(236, 72, 153, 0.25)"},children:"Podcast Episode"}),e.jsx("span",{className:"accordion-item__chevron",children:e.jsx(Z,{className:`w-4 h-4 text-slate-400 transition-transform duration-300 ${h?"rotate-180":""}`})})]})]}),h&&e.jsxs(w.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"accordion-item__content",style:{display:"block",padding:"18px 20px",borderTop:"1px solid rgba(255,255,255,0.06)"},dir:"rtl",children:[o.hook&&e.jsxs("div",{style:{background:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",borderRadius:"10px",padding:"10px 14px",marginBottom:"14px",textAlign:"right"},children:[e.jsx("span",{style:{color:"#F472B6",fontWeight:700,fontSize:"0.82rem",display:"block",marginBottom:"2px"},children:"الهوك والافتتاحية:"}),e.jsx("span",{style:{color:"#FDF2F8",fontSize:"0.94rem",lineHeight:1.7},children:o.hook})]}),o.script&&e.jsx(J,{scriptText:o.script})]})]},x)})})]}),(t==null?void 0:t.concepts)&&t.concepts.length>0&&e.jsxs("div",{style:{marginBottom:"22px"},children:[e.jsx("h4",{style:{color:"#38BDF8",fontSize:"1rem",fontWeight:800,margin:"0 0 14px 0",textAlign:"right"},dir:"rtl",children:"الأفكار الإبداعية التجريبية (Creative Concepts):"}),e.jsx("div",{className:"space-y-4",children:t.concepts.map((o,x)=>e.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.75)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"14px",padding:"18px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px",flexWrap:"wrap",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"0.8rem",fontWeight:700,color:"#38BDF8",background:"rgba(56, 189, 248, 0.15)",padding:"3px 10px",borderRadius:"6px"},children:o.badge||o.num}),o.duration&&e.jsxs("span",{className:"text-xs text-slate-400 flex items-center gap-1",children:[e.jsx(ke,{className:"w-3.5 h-3.5 text-sky-400"}),e.jsx("span",{children:o.duration})]})]}),e.jsx("h4",{style:{color:"#FFFFFF",fontSize:"1.05rem",fontWeight:800,margin:"0 0 8px 0",textAlign:"right"},dir:"rtl",children:o.title}),o.style&&e.jsx("p",{style:{color:"#94A3B8",fontSize:"0.88rem",margin:"0 0 14px 0",textAlign:"right"},dir:"rtl",children:o.style}),o.scenes&&e.jsx("div",{className:"space-y-3 mt-3",children:o.scenes.map((h,c)=>e.jsxs("div",{style:{background:"rgba(255, 255, 255, 0.02)",border:"1px solid rgba(255, 255, 255, 0.06)",borderRadius:"10px",padding:"12px 14px",textAlign:"right"},dir:"rtl",children:[e.jsx("span",{style:{color:"#7DD3FC",fontSize:"0.82rem",fontWeight:700,display:"block",marginBottom:"4px"},children:h.num}),h.visual&&e.jsxs("p",{style:{margin:"3px 0",color:"#CBD5E1",fontSize:"0.88rem",lineHeight:1.6},children:[e.jsx("strong",{style:{color:"#94A3B8"},children:"البصريات:"})," ",h.visual]}),h.dialogue&&e.jsxs("p",{style:{margin:"3px 0",color:"#FFFFFF",fontSize:"0.92rem",lineHeight:1.7},children:[e.jsx("strong",{style:{color:"#7DD3FC"},children:"الحوار:"})," ",h.dialogue]}),h.sfx&&e.jsxs("p",{style:{margin:"3px 0",color:"#FDE68A",fontSize:"0.84rem"},children:[e.jsx("strong",{style:{color:"#F59E0B"},children:"SFX:"})," ",h.sfx]})]},c))})]},x))})]}),(t==null?void 0:t.reels)&&e.jsx("div",{style:{marginTop:"4px"},children:e.jsx("div",{className:"deliverable-accordion",style:{"--item-accent":j},children:t.reels.map((o,x)=>{const h=l===x,c=String(x+1).padStart(2,"0"),F=o.answer||o.script||"";return e.jsxs("article",{className:`accordion-item ${h?"is-active":""}`,style:{background:"rgba(15, 23, 42, 0.6)",borderColor:"rgba(255,255,255,0.08)",marginBottom:"10px",borderRadius:"12px"},children:[e.jsxs("button",{type:"button",className:"accordion-item__trigger","aria-expanded":h,onClick:()=>k(x),style:{padding:"14px 18px"},children:[e.jsxs("div",{className:"accordion-item__start",children:[e.jsx("span",{className:"accordion-item__num-badge",style:{background:"rgba(255,255,255,0.06)",color:"#CBD5E1"},children:c}),e.jsxs("div",{className:"accordion-item__meta",dir:"rtl",style:{textAlign:"right"},children:[e.jsx("h4",{className:"accordion-item__title",style:{fontSize:"0.98rem",fontWeight:700,color:"#F8FAFC"},children:o.title}),o.hook&&e.jsx("span",{className:"accordion-item__preview",style:{color:"#94A3B8",fontSize:"0.82rem"},children:o.hook})]})]}),e.jsxs("div",{className:"accordion-item__end",children:[e.jsx("span",{className:"accordion-item__status-pill",style:{background:"rgba(255,255,255,0.05)",color:"#94A3B8",borderColor:"rgba(255,255,255,0.08)"},children:"Reel Script"}),e.jsx("span",{className:"accordion-item__chevron",children:e.jsx(Z,{className:`w-4 h-4 text-slate-400 transition-transform duration-300 ${h?"rotate-180":""}`})})]})]}),h&&e.jsx(w.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"accordion-item__content",style:{display:"block",padding:"18px",borderTop:"1px solid rgba(255,255,255,0.06)"},dir:"rtl",children:e.jsx(J,{scriptText:F})})]},x)})})}),(t==null?void 0:t.posts)&&e.jsx("div",{style:{marginTop:"4px"},children:e.jsx("div",{className:"deliverable-accordion",style:{"--item-accent":j},children:t.posts.map((o,x)=>{const h=l===x,c=String(x+1).padStart(2,"0"),F=o.title||o.topic||`Post ${c}`,B=o.topic?o.topic.length>25?o.topic.slice(0,24)+"...":o.topic:i.badge||"Post";return e.jsxs("article",{className:`accordion-item ${h?"is-active":""}`,style:{background:"rgba(15, 23, 42, 0.6)",borderColor:"rgba(255,255,255,0.08)",marginBottom:"10px",borderRadius:"12px"},children:[e.jsxs("button",{type:"button",className:"accordion-item__trigger","aria-expanded":h,onClick:()=>k(x),style:{padding:"14px 18px"},children:[e.jsxs("div",{className:"accordion-item__start",children:[e.jsx("span",{className:"accordion-item__num-badge",style:{background:"rgba(255,255,255,0.06)",color:"#CBD5E1"},children:c}),e.jsxs("div",{className:"accordion-item__meta",dir:"rtl",style:{textAlign:"right"},children:[e.jsx("h4",{className:"accordion-item__title",style:{fontSize:"0.98rem",fontWeight:700,color:"#F8FAFC"},children:F}),o.caption&&e.jsxs("span",{className:"accordion-item__preview",style:{color:"#94A3B8",fontSize:"0.82rem"},children:[o.caption.split(`
`)[0].slice(0,70),"..."]})]})]}),e.jsxs("div",{className:"accordion-item__end",children:[e.jsx("span",{className:"accordion-item__status-pill",style:{background:"rgba(255,255,255,0.05)",color:"#94A3B8",borderColor:"rgba(255,255,255,0.08)"},children:B}),e.jsx("span",{className:"accordion-item__chevron",children:e.jsx(Z,{className:`w-4 h-4 text-slate-400 transition-transform duration-300 ${h?"rotate-180":""}`})})]})]}),h&&e.jsxs(w.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"accordion-item__content",style:{display:"block",padding:"18px",borderTop:"1px solid rgba(255,255,255,0.06)"},dir:"rtl",children:[o.direction&&e.jsxs("div",{style:{background:"rgba(56,189,248,0.06)",border:"1px dashed rgba(56,189,248,0.25)",borderRadius:"8px",padding:"8px 12px",marginBottom:"12px",color:"#BAE6FD",fontSize:"0.85rem",fontWeight:600,textAlign:"right"},children:["الهدف والتوجيه: ",o.direction]}),e.jsx(J,{scriptText:o.caption})]})]},x)})})}),(t==null?void 0:t.days)&&e.jsxs("div",{style:{marginTop:"4px"},children:[t.strategy&&e.jsxs("div",{dir:"rtl",style:{background:"rgba(15, 23, 42, 0.7)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"12px",padding:"16px 18px",marginBottom:"16px",color:"#E2E8F0",fontSize:"0.94rem",lineHeight:1.8,textAlign:"right"},children:[e.jsx("strong",{style:{color:"#F59E0B",display:"block",marginBottom:"4px",fontSize:"0.85rem"},children:"Launch Strategy:"}),t.strategy]}),e.jsx("div",{className:"deliverable-accordion",style:{"--item-accent":j},children:t.days.map((o,x)=>{var F;const h=l===x,c=String(x+1).padStart(2,"0");return e.jsxs("article",{className:`accordion-item ${h?"is-active":""}`,style:{background:"rgba(15, 23, 42, 0.6)",borderColor:"rgba(255,255,255,0.08)",marginBottom:"10px",borderRadius:"12px"},children:[e.jsxs("button",{type:"button",className:"accordion-item__trigger","aria-expanded":h,onClick:()=>k(x),style:{padding:"14px 18px"},children:[e.jsxs("div",{className:"accordion-item__start",children:[e.jsx("span",{className:"accordion-item__num-badge",style:{background:"rgba(255,255,255,0.06)",color:"#CBD5E1"},children:c}),e.jsxs("div",{className:"accordion-item__meta",dir:"rtl",style:{textAlign:"right"},children:[e.jsx("h4",{className:"accordion-item__title",style:{fontSize:"0.98rem",fontWeight:700,color:"#F8FAFC"},children:o.dayName}),o.goal&&e.jsx("span",{className:"accordion-item__preview",style:{color:"#94A3B8",fontSize:"0.82rem"},children:o.goal})]})]}),e.jsxs("div",{className:"accordion-item__end",children:[e.jsx("span",{className:"accordion-item__status-pill",style:{background:"rgba(255,255,255,0.05)",color:"#94A3B8",borderColor:"rgba(255,255,255,0.08)"},children:o.badge||`Day ${c}`}),e.jsx("span",{className:"accordion-item__chevron",children:e.jsx(Z,{className:`w-4 h-4 text-slate-400 transition-transform duration-300 ${h?"rotate-180":""}`})})]})]}),h&&e.jsxs(w.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"accordion-item__content",style:{display:"block",padding:"18px",borderTop:"1px solid rgba(255,255,255,0.06)"},dir:"rtl",children:[o.goal&&e.jsxs("div",{style:{background:"rgba(14, 165, 233, 0.08)",border:"1px solid rgba(56, 189, 248, 0.2)",borderRadius:"10px",padding:"10px 14px",marginBottom:"14px",textAlign:"right"},children:[e.jsx("span",{style:{color:"#7DD3FC",fontWeight:700,fontSize:"0.82rem",display:"block",marginBottom:"2px"},children:"الهدف:"}),e.jsx("span",{style:{color:"#F0F9FF",fontSize:"0.92rem",lineHeight:1.7},children:o.goal})]}),o.mainContent&&e.jsxs("div",{style:{background:"rgba(2, 6, 23, 0.5)",border:"1px solid rgba(255, 255, 255, 0.06)",borderRadius:"12px",padding:"16px",marginBottom:"12px",textAlign:"right"},children:[e.jsx("strong",{style:{color:"#F8FAFC",fontSize:"0.96rem",display:"block",marginBottom:"8px"},children:o.mainContent.type||o.mainContent.title||"محتوى اليوم"}),o.mainContent.concept&&e.jsx("p",{style:{margin:"0 0 12px 0",color:"#94A3B8",fontSize:"0.9rem",lineHeight:1.7},children:o.mainContent.concept}),(F=o.mainContent.scenes)==null?void 0:F.map((B,W)=>e.jsxs("div",{style:{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"8px",padding:"12px 14px",marginBottom:"8px"},children:[e.jsx("span",{style:{color:"#38BDF8",fontSize:"0.8rem",fontWeight:700,display:"block",marginBottom:"4px"},children:B.num}),B.visual&&e.jsxs("p",{style:{margin:"3px 0",color:"#CBD5E1",fontSize:"0.88rem",lineHeight:1.65},children:[e.jsx("strong",{style:{color:"#94A3B8"},children:"اللقطة:"})," ",B.visual]}),B.text&&e.jsxs("p",{style:{margin:"3px 0",color:"#FEF08A",fontSize:"0.9rem",lineHeight:1.7},children:[e.jsx("strong",{style:{color:"#F59E0B"},children:"النص:"})," ",B.text]})]},W))]})]})]},x)})})]}),!(t!=null&&t.scenes)&&!(t!=null&&t.episodes)&&!(t!=null&&t.reels)&&!(t!=null&&t.posts)&&!(t!=null&&t.days)&&_.length===0&&!(t!=null&&t.trends)&&!(t!=null&&t.concepts)&&((t==null?void 0:t.script)||(t==null?void 0:t.answer))&&e.jsx("div",{style:{marginTop:"4px"},dir:"rtl",children:e.jsx(J,{scriptText:t.script||t.answer})}),!t&&!S&&e.jsx("div",{dir:"rtl",style:{fontSize:"0.95rem",lineHeight:1.8,color:"#CBD5E1",marginTop:"8px",background:"rgba(15, 23, 42, 0.6)",padding:"20px 22px",borderRadius:"14px",border:"1px solid rgba(255, 255, 255, 0.08)",textAlign:"right"},children:e.jsx("p",{style:{color:"#94A3B8",margin:0,lineHeight:1.8},children:i.desc||"Approved strategic deliverable document."})})]})]})})})]})})}function Nt(){const[d,s]=u.useState(!1),[i,r]=u.useState({isOpen:!1,categoryKey:"medical"}),[n,l]=u.useState({isOpen:!1,deliverable:null,client:null,category:null}),[p,g]=u.useState(()=>{try{return localStorage.getItem("shahd_theme")||"light"}catch{return"light"}}),m=u.useRef(null);u.useEffect(()=>{document.documentElement.setAttribute("data-theme",p),p==="dark"?(document.documentElement.classList.add("dark"),document.body.classList.add("dark")):(document.documentElement.classList.remove("dark"),document.body.classList.remove("dark"));try{localStorage.setItem("shahd_theme",p)}catch{}},[p]);const t=()=>{g(_=>_==="light"?"dark":"light")};u.useEffect(()=>{if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)try{let j=function(S){m.current&&m.current.raf(S),H=requestAnimationFrame(j)};const k=new De({duration:1.15,easing:S=>Math.min(1,1.001-Math.pow(2,-10*S)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:.92,touchMultiplier:1.5,smoothTouch:!1});m.current=k,window.__lenis=k;let H;return H=requestAnimationFrame(j),()=>{H&&cancelAnimationFrame(H),m.current&&(m.current.destroy(),m.current=null,window.__lenis=null)}}catch(j){console.warn("Lenis could not be initialized:",j)}},[]),u.useEffect(()=>{var j,k;i.isOpen||n.isOpen?(document.body.style.overflow="hidden",document.body.classList.add("modal-open"),(j=m.current)==null||j.stop()):(document.body.style.overflow="",document.body.classList.remove("modal-open"),(k=m.current)==null||k.start())},[i.isOpen,n.isOpen]);const R=_=>{r({isOpen:!0,categoryKey:_||"medical"})},E=()=>{r(_=>({..._,isOpen:!1}))},A=(_,j,k)=>{l({isOpen:!0,deliverable:_,client:j,category:k})},T=()=>{l({isOpen:!1,deliverable:null,client:null,category:null})};return e.jsxs("div",{className:"app-root",children:[e.jsx(nt,{onLoaded:()=>s(!0)}),e.jsx(st,{theme:p}),e.jsx(it,{}),e.jsx(at,{}),e.jsx(ot,{isLoaded:d,theme:p,onToggleTheme:t}),e.jsxs("main",{id:"main-content",children:[e.jsx(rt,{onOpenFolder:R}),e.jsx(lt,{}),e.jsx(ct,{}),e.jsx(ht,{}),e.jsx(xt,{})]}),e.jsx(gt,{}),e.jsx(mt,{isOpen:i.isOpen,categoryKey:i.categoryKey,onClose:E,onOpenDeliverable:A}),e.jsx(Ct,{isOpen:n.isOpen,deliverable:n.deliverable,client:n.client,category:n.category,onClose:T})]})}tt.createRoot(document.getElementById("root")).render(e.jsx(Te.StrictMode,{children:e.jsx(Nt,{})}))});export default _t();
