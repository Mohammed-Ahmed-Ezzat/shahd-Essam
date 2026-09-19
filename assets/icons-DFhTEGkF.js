import{r as N}from"./vendor-CYOoJq99.js";/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=c=>c==null?void 0:c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function oa(c,t,M=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:ra(c),size:24,node:t,...M.length>0?{aliases:M}:{}}}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=c=>{let t="",M=!1;for(const y of c){if(y==="-"||y==="_"||y<=" "){M=t.length>0;continue}t.length===0?t+=y.toLowerCase():t+=M?y.toUpperCase():y,M=!1}return t};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=c=>{const t=ia(c);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=(...c)=>c.filter((t,M,y)=>!!t&&t.trim()!==""&&y.indexOf(t)===M).join(" ").trim();/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function J(c){return c!=null}function ca(c,t={}){var R,F;const M=t.attributeNames??{},y=b=>M[b]??b,x=c.size??c.width??q.width,A=c.size??c.height??q.height,I=((R=c.aliases)==null?void 0:R.filter(b=>typeof b=="string"&&b.trim()!=="").map(b=>`lucide-${b}`))??[],L=[...c.name?[`lucide-${c.name}`]:[],...I],_=((F=t.className)==null?void 0:F.split(" ").filter(Boolean))??[],P=t.includeDefaultClasses===!1?X(..._):X("lucide",...L,..._),T=t.absoluteStrokeWidth?Number(t.strokeWidth??q["stroke-width"])*Number(c.size??c.width??q.width)/Number(t.size??t.width??q.width):t.strokeWidth??q["stroke-width"];return["svg",{...Object.entries(q).reduce((b,[$,m])=>(b[y($)]=m,b),{}),..."color"in t&&t.color&&{[y("stroke")]:t.color},..."size"in t&&J(t.size)&&{[y("width")]:t.size,[y("height")]:t.size},..."width"in t&&J(t.width)&&{[y("width")]:t.width},..."height"in t&&J(t.height)&&{[y("height")]:t.height},[y("stroke-width")]:T,...P&&{[y("class")]:P},[y("viewBox")]:`0 0 ${x} ${A}`,...t.hasA11yProp===!1?{[y("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},c.node.map(b=>{const[$,m,B]=b,W=t.nonScalingStroke?{[y("vector-effect")]:"non-scaling-stroke",...m}:m;return B?[$,W,B]:[$,W]})]}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function la(c,t={}){return ca(c,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=c=>{for(const t in c)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},da=N.createContext({}),ua=()=>N.useContext(da),ya=N.forwardRef(({color:c,size:t,width:M,height:y,strokeWidth:x,absoluteStrokeWidth:A,nonScalingStroke:I,className:L="",children:_,iconNode:P=[],icon:T={node:P,aliases:[],size:24},...E},R)=>{const{size:F=24,strokeWidth:b=2,absoluteStrokeWidth:$=!1,nonScalingStroke:m=!1,color:B="currentColor",className:W=""}=ua()??{},O=!!_||ha(E),[H,V,U=[]]=la(T,{color:c??B,width:M??t??F,height:y??t??F,strokeWidth:x??b,absoluteStrokeWidth:A??$,nonScalingStroke:I??m,className:X(W,L),hasA11yProp:O,attributes:E});return N.createElement(H,{ref:R,...V},[...U.map(([Z,Q])=>N.createElement(Z,Q)),...Array.isArray(_)?_:[_]])});/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function d(c,t=[],M=[]){const y=typeof c=="string"?oa(c,t,M):c,x=N.forwardRef(({className:A,...I},L)=>N.createElement(ya,{ref:L,icon:y,className:A,...I}));return y.name&&(x.displayName=sa(y.name)),x}/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};ie.node;const fa=d(ie);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};se.node;const pa=d(se);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};ce.node;const va=d(ce);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};le.node;const ka=d(le);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};he.node;const Ma=d(he);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};de.node;const ga=d(de);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue={name:"clapperboard",size:24,node:[["path",{d:"m12.296 3.464 3.02 3.956",key:"qash78"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"}],["path",{d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"}]]};ue.node;const ba=d(ue);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};ye.node;const wa=d(ye);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};me.node;const xa=d(me);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};fe.node;const za=d(fe);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe={name:"film",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]};pe.node;const Ca=d(pe);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};ve.node;const _a=d(ve);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke={name:"folder",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]};ke.node;const Da=d(ke);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me={name:"images",size:24,node:[["path",{d:"m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16",key:"9kzy35"}],["path",{d:"M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2",key:"1t0f0t"}],["circle",{cx:"13",cy:"7",r:"1",fill:"currentColor",key:"1obus6"}],["rect",{x:"8",y:"2",width:"14",height:"14",rx:"2",key:"1gvhby"}]]};Me.node;const Sa=d(Me);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};ge.node;const Aa=d(ge);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be={name:"layout-grid",size:24,node:[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]};be.node;const Ia=d(be);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};we.node;const Pa=d(we);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe={name:"list",size:24,node:[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]};xe.node;const $a=d(xe);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};ze.node;const La=d(ze);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};Ce.node;const Ta=d(Ce);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};_e.node;const Ea=d(_e);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De={name:"mic-signal",size:24,node:[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M18 11a6 6 0 00-3-5.197",key:"1lvu40"}],["path",{d:"M2 11a10 10 0 015-8.662",key:"bida4p"}],["path",{d:"M22 11a10 10 0 00-5-8.662",key:"idvinr"}],["path",{d:"M6 11a6 6 0 013-5.197",key:"17n2ii"}],["path",{d:"M9 21h6",key:"1udhl7"}],["rect",{x:"10",y:"9",width:"4",height:"8",rx:"2",key:"1l8p2f"}]],aliases:["podcast"]};De.node;const Fa=d(De);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se={name:"mic",size:24,node:[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]]};Se.node;const ja=d(Se);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};Ae.node;const qa=d(Ae);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};Ie.node;const Na=d(Ie);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe={name:"quote",size:24,node:[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]};Pe.node;const Ra=d(Pe);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e={name:"rocket",size:24,node:[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]]};$e.node;const Ba=d($e);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le={name:"scissors",size:24,node:[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]};Le.node;const Wa=d(Le);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};Te.node;const Oa=d(Te);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Ee.node;const Ha=d(Ee);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};Fe.node;const Va=d(Fe);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je={name:"table",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]};je.node;const Ua=d(je);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};qe.node;const Za=d(qe);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Ne.node;const Qa=d(Ne);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re={name:"wand-sparkles",size:24,node:[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],aliases:["wand-2"]};Re.node;const Ga=d(Re);/**
 * @license lucide-react v1.46.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Be.node;const Ka=d(Be);var Y={};(function c(t,M,y,x){var A=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),I=typeof Path2D=="function"&&typeof DOMMatrix=="function",L=(function(){if(!t.OffscreenCanvas)return!1;try{var a=new OffscreenCanvas(1,1),e=a.getContext("2d");e.fillRect(0,0,1,1);var n=a.transferToImageBitmap();e.createPattern(n,"no-repeat")}catch{return!1}return!0})();function _(){}function P(a){var e=M.exports.Promise,n=e!==void 0?e:t.Promise;return typeof n=="function"?new n(a):(a(_,_),null)}var T=(function(a,e){return{transform:function(n){if(a)return n;if(e.has(n))return e.get(n);var o=new OffscreenCanvas(n.width,n.height),i=o.getContext("2d");return i.drawImage(n,0,0),e.set(n,o),o},clear:function(){e.clear()}}})(L,new Map),E=(function(){var a=Math.floor(16.666666666666668),e,n,o={},i=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(s){var l=Math.random();return o[l]=requestAnimationFrame(function r(h){i===h||i+a-1<h?(i=h,delete o[l],s()):o[l]=requestAnimationFrame(r)}),l},n=function(s){o[s]&&cancelAnimationFrame(o[s])}):(e=function(s){return setTimeout(s,a)},n=function(s){return clearTimeout(s)}),{frame:e,cancel:n}})(),R=(function(){var a,e,n={};function o(i){function s(l,r){i.postMessage({options:l||{},callback:r})}i.init=function(r){var h=r.transferControlToOffscreen();i.postMessage({canvas:h},[h])},i.fire=function(r,h,f){if(e)return s(r,null),e;var v=Math.random().toString(36).slice(2);return e=P(function(p){function k(g){g.data.callback===v&&(delete n[v],i.removeEventListener("message",k),e=null,T.clear(),f(),p())}i.addEventListener("message",k),s(r,v),n[v]=k.bind(null,{data:{callback:v}})}),e},i.reset=function(){i.postMessage({reset:!0});for(var r in n)n[r](),delete n[r]}}return function(){if(a)return a;if(!y&&A){var i=["var CONFETTI, SIZE = {}, module = {};","("+c.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{a=new Worker(URL.createObjectURL(new Blob([i])))}catch(s){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",s),null}o(a)}return a}})(),F={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(a,e){return e?e(a):a}function $(a){return a!=null}function m(a,e,n){return b(a&&$(a[e])?a[e]:F[e],n)}function B(a){return a<0?0:Math.floor(a)}function W(a,e){return Math.floor(Math.random()*(e-a))+a}function O(a){return parseInt(a,16)}function H(a){return a.map(V)}function V(a){var e=String(a).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:O(e.substring(0,2)),g:O(e.substring(2,4)),b:O(e.substring(4,6))}}function U(a){var e=m(a,"origin",Object);return e.x=m(e,"x",Number),e.y=m(e,"y",Number),e}function Z(a){a.width=document.documentElement.clientWidth,a.height=document.documentElement.clientHeight}function Q(a){var e=a.getBoundingClientRect();a.width=e.width,a.height=e.height}function We(a){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=a,e}function Oe(a,e,n,o,i,s,l,r,h){a.save(),a.translate(e,n),a.rotate(s),a.scale(o,i),a.arc(0,0,1,l,r,h),a.restore()}function He(a){var e=a.angle*(Math.PI/180),n=a.spread*(Math.PI/180);return{x:a.x,y:a.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:a.startVelocity*.5+Math.random()*a.startVelocity,angle2D:-e+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:a.color,shape:a.shape,tick:0,totalTicks:a.ticks,decay:a.decay,drift:a.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:a.gravity*3,ovalScalar:.6,scalar:a.scalar,flat:a.flat}}function Ve(a,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var n=e.tick++/e.totalTicks,o=e.x+e.random*e.tiltCos,i=e.y+e.random*e.tiltSin,s=e.wobbleX+e.random*e.tiltCos,l=e.wobbleY+e.random*e.tiltSin;if(a.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",a.beginPath(),I&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))a.fill(Ze(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(s-o)*.1,Math.abs(l-i)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var r=Math.PI/10*e.wobble,h=Math.abs(s-o)*.1,f=Math.abs(l-i)*.1,v=e.shape.bitmap.width*e.scalar,p=e.shape.bitmap.height*e.scalar,k=new DOMMatrix([Math.cos(r)*h,Math.sin(r)*h,-Math.sin(r)*f,Math.cos(r)*f,e.x,e.y]);k.multiplySelf(new DOMMatrix(e.shape.matrix));var g=a.createPattern(T.transform(e.shape.bitmap),"no-repeat");g.setTransform(k),a.globalAlpha=1-n,a.fillStyle=g,a.fillRect(e.x-v/2,e.y-p/2,v,p),a.globalAlpha=1}else if(e.shape==="circle")a.ellipse?a.ellipse(e.x,e.y,Math.abs(s-o)*e.ovalScalar,Math.abs(l-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):Oe(a,e.x,e.y,Math.abs(s-o)*e.ovalScalar,Math.abs(l-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var u=Math.PI/2*3,w=4*e.scalar,z=8*e.scalar,C=e.x,S=e.y,j=5,D=Math.PI/j;j--;)C=e.x+Math.cos(u)*z,S=e.y+Math.sin(u)*z,a.lineTo(C,S),u+=D,C=e.x+Math.cos(u)*w,S=e.y+Math.sin(u)*w,a.lineTo(C,S),u+=D;else a.moveTo(Math.floor(e.x),Math.floor(e.y)),a.lineTo(Math.floor(e.wobbleX),Math.floor(i)),a.lineTo(Math.floor(s),Math.floor(l)),a.lineTo(Math.floor(o),Math.floor(e.wobbleY));return a.closePath(),a.fill(),e.tick<e.totalTicks}function Ue(a,e,n,o,i){var s=e.slice(),l=a.getContext("2d"),r,h,f=P(function(v){function p(){r=h=null,l.clearRect(0,0,o.width,o.height),T.clear(),i(),v()}function k(){y&&!(o.width===x.width&&o.height===x.height)&&(o.width=a.width=x.width,o.height=a.height=x.height),!o.width&&!o.height&&(n(a),o.width=a.width,o.height=a.height),l.clearRect(0,0,o.width,o.height),s=s.filter(function(g){return Ve(l,g)}),s.length?r=E.frame(k):p()}r=E.frame(k),h=p});return{addFettis:function(v){return s=s.concat(v),f},canvas:a,promise:f,reset:function(){r&&E.cancel(r),h&&h()}}}function ee(a,e){var n=!a,o=!!m(e||{},"resize"),i=!1,s=m(e,"disableForReducedMotion",Boolean),l=A&&!!m(e||{},"useWorker"),r=l?R():null,h=n?Z:Q,f=a&&r?!!a.__confetti_initialized:!1,v=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,p;function k(u,w,z){for(var C=m(u,"particleCount",B),S=m(u,"angle",Number),j=m(u,"spread",Number),D=m(u,"startVelocity",Number),Ke=m(u,"decay",Number),Je=m(u,"gravity",Number),Xe=m(u,"drift",Number),te=m(u,"colors",H),Ye=m(u,"ticks",Number),ne=m(u,"shapes"),ea=m(u,"scalar"),aa=!!m(u,"flat"),re=U(u),oe=C,K=[],ta=a.width*re.x,na=a.height*re.y;oe--;)K.push(He({x:ta,y:na,angle:S,spread:j,startVelocity:D,color:te[oe%te.length],shape:ne[W(0,ne.length)],ticks:Ye,decay:Ke,gravity:Je,drift:Xe,scalar:ea,flat:aa}));return p?p.addFettis(K):(p=Ue(a,K,h,w,z),p.promise)}function g(u){var w=s||m(u,"disableForReducedMotion",Boolean),z=m(u,"zIndex",Number);if(w&&v)return P(function(D){D()});n&&p?a=p.canvas:n&&!a&&(a=We(z),document.body.appendChild(a)),o&&!f&&h(a);var C={width:a.width,height:a.height};r&&!f&&r.init(a),f=!0,r&&(a.__confetti_initialized=!0);function S(){if(r){var D={getBoundingClientRect:function(){if(!n)return a.getBoundingClientRect()}};h(D),r.postMessage({resize:{width:D.width,height:D.height}});return}C.width=C.height=null}function j(){p=null,o&&(i=!1,t.removeEventListener("resize",S)),n&&a&&(document.body.contains(a)&&document.body.removeChild(a),a=null,f=!1)}return o&&!i&&(i=!0,t.addEventListener("resize",S,!1)),r?r.fire(u,C,j):k(u,C,j)}return g.reset=function(){r&&r.reset(),p&&p.reset()},g}var G;function ae(){return G||(G=ee(null,{useWorker:!0,resize:!0})),G}function Ze(a,e,n,o,i,s,l){var r=new Path2D(a),h=new Path2D;h.addPath(r,new DOMMatrix(e));var f=new Path2D;return f.addPath(h,new DOMMatrix([Math.cos(l)*i,Math.sin(l)*i,-Math.sin(l)*s,Math.cos(l)*s,n,o])),f}function Qe(a){if(!I)throw new Error("path confetti are not supported in this browser");var e,n;typeof a=="string"?e=a:(e=a.path,n=a.matrix);var o=new Path2D(e),i=document.createElement("canvas"),s=i.getContext("2d");if(!n){for(var l=1e3,r=l,h=l,f=0,v=0,p,k,g=0;g<l;g+=2)for(var u=0;u<l;u+=2)s.isPointInPath(o,g,u,"nonzero")&&(r=Math.min(r,g),h=Math.min(h,u),f=Math.max(f,g),v=Math.max(v,u));p=f-r,k=v-h;var w=10,z=Math.min(w/p,w/k);n=[z,0,0,z,-Math.round(p/2+r)*z,-Math.round(k/2+h)*z]}return{type:"path",path:e,matrix:n}}function Ge(a){var e,n=1,o="#000000",i='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof a=="string"?e=a:(e=a.text,n="scalar"in a?a.scalar:n,i="fontFamily"in a?a.fontFamily:i,o="color"in a?a.color:o);var s=10*n,l=""+s+"px "+i,r=new OffscreenCanvas(s,s),h=r.getContext("2d");h.font=l;var f=h.measureText(e),v=Math.ceil(f.actualBoundingBoxRight+f.actualBoundingBoxLeft),p=Math.ceil(f.actualBoundingBoxAscent+f.actualBoundingBoxDescent),k=2,g=f.actualBoundingBoxLeft+k,u=f.actualBoundingBoxAscent+k;v+=k+k,p+=k+k,r=new OffscreenCanvas(v,p),h=r.getContext("2d"),h.font=l,h.fillStyle=o,h.fillText(e,g,u);var w=1/n;return{type:"bitmap",bitmap:r.transferToImageBitmap(),matrix:[w,0,0,w,-v*w/2,-p*w/2]}}M.exports=function(){return ae().apply(this,arguments)},M.exports.reset=function(){ae().reset()},M.exports.create=ee,M.exports.shapeFromPath=Qe,M.exports.shapeFromText=Ge})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Y,!1);const Ja=Y.exports;Y.exports.create;export{fa as A,Ma as C,xa as E,_a as F,Sa as I,Ia as L,qa as M,Na as P,Ra as Q,Ba as R,Va as S,Za as T,Qa as V,Ga as W,Ka as X,La as a,Ca as b,Ja as c,Ua as d,Fa as e,za as f,Oa as g,$a as h,Da as i,pa as j,Aa as k,Ta as l,Ha as m,wa as n,ka as o,Pa as p,ba as q,va as r,ja as s,ga as t,Ea as u,Wa as v};
