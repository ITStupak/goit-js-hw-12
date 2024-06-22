import{a as d,S as q,i as g}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function m(r,t){try{d.defaults.baseURL="https://pixabay.com/api/";const s={key:"44328072-f56b95eb73841ff5e619bc345",q:r,image_type:"photo",orientation:"horizontal",per_page:15,page:t};return(await d.get("",{params:s})).data}catch(s){console.error(s)}}function P({largeImageURL:r,webformatURL:t,tags:s,comments:a,downloads:e,likes:o,views:i}){return`<li class="gallery-item">
    <a class="gallery-link" href=${r}>
      <img
        class="gallery-image"
        src=${t}
        alt=${s}
      />
    </a>
    <ul class="gallery-text">
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Likes</p>
        <p class="gallery-text-count">${o}</p>
      </li>
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Views</p>
        <p class="gallery-text-count">${i}</p>
      </li>
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Comments</p>
        <p class="gallery-text-count">${a}</p>
      </li>
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Downloads</p>
        <p class="gallery-text-count">${e}</p>
      </li>
    </ul> 
  </li>`}function y(r){return r.hits.map(P).join("")}const p="/goit-js-hw-12/assets/icon-error-40fa32d5.svg",v="/goit-js-hw-12/assets/icon-attention-f39d3c79.svg",h=document.querySelector(".form"),n=document.querySelector(".gallery"),f=document.querySelector(".load-btn"),b=document.querySelector(".loader");let c="",l=1;const I=15;let L=1;const w=new q(".gallery-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:500,animationSpeed:200,widthRatio:1,heightRatio:.95,disableRightClick:!0});async function x(){const r=Array.from(n.querySelectorAll("img")).map(t=>new Promise(s=>{t.onload=s}));await Promise.all(r)}function C(){b.style.display="block"}function O(){b.style.display="none"}function R(){f.classList.add("is-visible")}function u(){f.classList.remove("is-visible")}function S(){l>=L?(u(),g.info({message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"1,5",messageColor:"#01090f",backgroundColor:"#d6e288",position:"bottomRight",close:!0,progressBar:!0,progressBarColor:"#9aa406",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",iconUrl:v,iconColor:"#fafafb"})):R()}h.addEventListener("submit",B);async function B(r){if(r.preventDefault(),c=r.target.elements.request.value.trim(),l=1,c!==""){n.innerHTML="",C(),u();try{const t=await m(c,l);if(L=Math.ceil(t.totalHits/I),t.total!==0){const s=y(t);n.insertAdjacentHTML("beforeend",s),w.refresh(),await x()}else console.log("Sorry, there are no images matching your search query. Please try again!"),g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"1,5",messageColor:"#fafafb",backgroundColor:"#ef4040",imageWidth:302,position:"topRight",theme:"dark",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#b51b1b",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",iconUrl:p,iconColor:"#fafafb"})}catch(t){console.log(t)}O(),S(),h.reset()}else console.log("Enter your Request!"),g.error({title:"Error!",titleColor:"#fafafb",message:"Enter your Request!",messageSize:"16",messageColor:"#fafafb",backgroundColor:"#ef4040",imageWidth:432,position:"topRight",theme:"dark",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#b51b1b",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",iconUrl:p,iconColor:"#fafafb",timeout:3e3}),u(),n.innerHTML=""}f.addEventListener("click",U);async function U(){u(),C(),l++;const r=await m(c,l);n.insertAdjacentHTML("beforeend",y(r)),w.refresh(),x(),O(),S()}
//# sourceMappingURL=commonHelpers.js.map
