import{L as e,b as n}from"./index.11dae847.js";import{d as t,r as o}from"./vendor.b0230812.js";let s;t.extend(o),(async()=>{const o=new e;document.body.append(o);const d=await fetch(`${n}/tellers${window.location.search}`),l=(await d.json()).payload;console.log(l);const i={lat:l.address._latitude,lng:l.address._longitude};s=new google.maps.Map(document.getElementById("map"),{center:i,zoom:16,disableDefaultUI:!0}),new google.maps.Marker({position:i,map:s}),document.querySelector("#profile-img").src=l.img,document.querySelector("#ht-name").textContent=`${l.nameEN} (${l.nameTH})`,document.querySelector("#ht-fullBio").textContent=l.bio,document.querySelector("#subscription-price").textContent=`Subscribe for ${l.subPrice}฿ / month`,document.querySelector("#no-of-post").textContent=`${l.posts.length} posts`,l.posts.forEach((e=>{document.querySelector("#post-container").innerHTML+=`<div\n  class="bg-white w-full shadow-lg flex flex-col items-start p-5 rounded-xl"\n>\n  <div class="flex items-center space-x-5 mb-5">\n    <div class="h-12 w-12 rounded-full">\n      <img\n        src="${l.img}"\n        alt="${l.nameEN}"\n        class="rounded-full"\n      />\n    </div>\n    <div>\n      <div class="text-xl font-bold">${l.nameEN}</div>\n      <div class="text-sm font-light">${t().to(t.unix(e.dateCreated._seconds))}</div>\n    </div>\n  </div>\n\n  ${e.content?`<div>\n  ${e.content}\n</div>`:""}\n  ${e.img?`<div class="mt-5">\n  <img\n    src="${e.img}"\n    class="h-80 w-full object-cover rounded-xl"\n  />\n</div>`:""}\n</div>`})),o.classList.add("hidden")})();