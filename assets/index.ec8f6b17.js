!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,l)=>{const a=new URL(e,n);if(self[t].moduleMap[a])return o(self[t].moduleMap[a]);const c=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){l(new Error(`Failed to import: ${e}`)),s(r)},onload(){o(self[t].moduleMap[a]),s(r)}});document.head.appendChild(r)})),self[t].moduleMap={}}}("/holyfans/assets/");console.log("Hello World!!"),console.log("Welcome to the world of holyness | HolyFans"),console.group("Members (Group 1 Section 3)"),console.log("Thanapat Jumnongrat    (Palm)   6288018"),console.log("Veerakit Prasertpol    (Pete)   6288035"),console.log("Supakarn Laorattanakul (Prompt) 6288087"),console.log("Thanaboon Sapmontree   (Time)   6288123"),console.groupEnd();const e=[{title:"Home",target:"/holyfans/"},{title:"Explore",target:"/holyfans/explore"},{title:"About Us",target:"/holyfans/aboutus"},{title:"Login",target:"/holyfans/login",icon:"login"}];class t extends HTMLElement{constructor(){var t;super(),this.id="header",this.classList.add("fixed","w-full","bg-white","border-b","border-gray-200","z-20");const o=document.createElement("div");o.classList.add("max-w-screen-lg","container","mx-auto","flex","flex-wrap","items-center","mt-0","p-5","justify-between");const n=document.createElement("a");n.href="./index.html";const s=document.createElement("picture"),l=document.createElement("source");l.srcset="/holyfans/assets/logo/lockup_color_horizontal.avif",l.type="image/avif";const a=document.createElement("source");a.srcset="/holyfans/assets/logo/lockup_color_horizontal.webp",a.type="image/webp";const c=document.createElement("source");c.srcset="/holyfans/assets/logo/lockup_color_horizontal.svg",c.type="image/svg+xml";const r=document.createElement("source");r.srcset="/holyfans/assets/logo/lockup_color_horizontal.png",r.type="image/png";const d=document.createElement("img");d.src="/holyfans/assets/logo/lockup_color_horizontal.png",d.alt="HolyFans",d.classList.add("h-10"),s.append(l,a,c,r,d),n.appendChild(s),o.appendChild(n);const i=document.createElement("div");i.classList.add("block","text-xl","md:hidden");const m=document.createElement("span");m.id="menu-btn",m.textContent="menu",m.classList.add("material-icons-round","cursor-pointer","p-1","border","rounded-md"),i.appendChild(m),o.appendChild(i);const p=document.createElement("nav");p.id="nav-content",p.classList.add("hidden","w-full","px-2","pt-5","md:block","md:w-auto","md:p-0","transform","ease-in");const u=document.createElement("ul");u.classList.add("flex","flex-col","divide-y","divide-gray-200","md:divide-y-0","md:flex-row","md:space-y-0","md:space-x-8","text-gray-700"),e.forEach((e=>{const t=window.location.pathname,o=document.createElement("li");o.classList.add("py-2");const n=document.createElement("a");if(n.href=e.target,n.classList.add("flex","items-center","hover:text-black"),e.icon){const t=document.createElement("span");t.textContent=e.icon,t.classList.add("material-icons-round","inline-block","mr-2"),n.append(t)}n.innerHTML+=e.title,e.target.replace(".html","").replace("index","")===t.replace(".html","").replace("index","")&&n.classList.add("font-bold","text-black"),o.appendChild(n),u.appendChild(o)})),p.appendChild(u),o.appendChild(p),this.appendChild(o),null==(t=this.querySelector("#menu-btn"))||t.addEventListener("click",(({target:e})=>{const t=e,o=document.getElementById("nav-content");o.classList.contains("hidden")?(t.textContent="close",o.classList.remove("hidden"),o.classList.add("block")):(t.textContent="menu",o.classList.add("hidden"),o.classList.remove("block"))}))}}class o extends HTMLElement{constructor(){super(),this.classList.add("absolute","bottom-0","w-screen","text-center","p-2","border-t","border-gray-200"),this.textContent="© 2021 NAKAMA"}}customElements.define("nav-bar",t),customElements.define("holy-footer",o);
