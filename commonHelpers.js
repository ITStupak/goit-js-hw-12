import{a as n,S as y,i as c}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function d(o){try{n.defaults.baseURL="https://pixabay.com/api/";const r={key:"44328072-f56b95eb73841ff5e619bc345",q:o,image_type:"photo",orientation:"horizontal",per_page:"20",safesearch:!1};return(await n.get("",{params:r})).data}catch(r){console.error(r)}}function h({largeImageURL:o,webformatURL:r,tags:a,comments:s,downloads:e,likes:t,views:l}){return`<li class="gallery-item">
    <a class="gallery-link" href=${o}>
      <img
        class="gallery-image"
        src=${r}
        alt=${a}
      />
    </a>
    <ul class="gallery-text">
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Likes</p>
        <p class="gallery-text-count">${t}</p>
      </li>
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Views</p>
        <p class="gallery-text-count">${l}</p>
      </li>
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Comments</p>
        <p class="gallery-text-count">${s}</p>
      </li>
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Downloads</p>
        <p class="gallery-text-count">${e}</p>
      </li>
    </ul> 
  </li>`}function b(o){return o.hits.map(h).join("")}const u="/goit-js-hw-12/assets/icon-error-40fa32d5.svg",p=document.querySelector(".form"),i=document.querySelector(".gallery"),g=document.querySelector(".load-btn");p.addEventListener("submit",x);async function x(o){o.preventDefault();const r=o.target.elements.request.value.trim();if(r!==""){i.innerHTML="";const a=document.querySelector(".loader");a.style.display="block",g.classList.remove("is-visible");try{const s=await d(r);if(s.total!==0){const e=b(s);i.insertAdjacentHTML("beforeend",e),new y(".gallery-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh();const l=Array.from(i.querySelectorAll("img")).map(f=>new Promise(m=>{f.onload=m}));await Promise.all(l)}else console.log("Sorry, there are no images matching your search query. Please try again!"),c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"1,5",messageColor:"#fafafb",backgroundColor:"#ef4040",imageWidth:302,position:"topRight",theme:"dark",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#b51b1b",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",iconUrl:u,iconColor:"#fafafb"})}catch(s){console.log(s)}finally{a.style.display="none",g.classList.add("is-visible")}p.reset()}else console.log("Enter your Request!"),c.error({title:"Error!",titleColor:"#fafafb",message:"Enter your Request!",messageSize:"16",messageColor:"#fafafb",backgroundColor:"#ef4040",imageWidth:432,position:"topRight",theme:"dark",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#b51b1b",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",iconUrl:u,iconColor:"#fafafb",timeout:3e3})}
//# sourceMappingURL=commonHelpers.js.map
