import{a as h,S,i as d}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function L(r,e){try{h.defaults.baseURL="https://pixabay.com/api/";const s={key:"44328072-f56b95eb73841ff5e619bc345",q:r,image_type:"photo",orientation:"horizontal",per_page:15,page:e};return(await h.get("",{params:s})).data}catch(s){console.error(s)}}function I(r){let{largeImageURL:e,webformatURL:s,tags:a,comments:t,downloads:o,likes:i,views:O}=r;return`<li class="gallery-item">
    <a class="gallery-link" href=${e}>
      <div class="img-box">
          <img class="gallery-image" src="${s}" alt="${a}" />
      </div>
      <ul class="gallery-text">
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Likes</p>
        <p class="gallery-text-count">${i}</p>
      </li>
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Views</p>
        <p class="gallery-text-count">${O}</p>
      </li>
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Comments</p>
        <p class="gallery-text-count">${t}</p>
      </li>
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Downloads</p>
        <p class="gallery-text-count">${o}</p>
      </li>
    </ul>
    </a>     
  </li>`}function w(r){return r.map(I).join("")}const b="/goit-js-hw-12/assets/icon-error-40fa32d5.svg",B="/goit-js-hw-12/assets/icon-attention-f39d3c79.svg";//!======================================================
const g=document.querySelector(".form"),u=document.querySelector(".gallery"),m=document.querySelector(".load-btn"),x=document.querySelector(".loader");//!======================================================
let n="",l=1,c=1;const P=15;//!======================================================
const C=new S(".gallery-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:500,animationSpeed:200,widthRatio:1,heightRatio:.95,disableRightClick:!0});async function k(){const r=Array.from(u.querySelectorAll("img")).map(e=>new Promise(s=>{e.onload=s}));return Promise.all(r)}function v(){x.style.display="block"}function f(){x.style.display="none"}function E(){m.classList.add("is-visible")}function y(){m.classList.remove("is-visible")}function p(){l>=c?(y(),c&&d.info({message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"1,5",messageColor:"#01090f",backgroundColor:"#d6e288",position:"bottomRight",close:!0,progressBar:!0,progressBarColor:"#9aa406",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",iconUrl:B,iconColor:"#fafafb"})):E()}function R(){const e=u.children[0].getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}//!======================================================
g.addEventListener("submit",async r=>{if(r.preventDefault(),n=r.target.elements.request.value.trim(),!n){d.error({title:"Error!",titleColor:"#fafafb",message:"Enter your Request!",messageSize:"16",messageColor:"#fafafb",backgroundColor:"#ef4040",imageWidth:432,position:"topRight",theme:"dark",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#b51b1b",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",iconUrl:b,iconColor:"#fafafb",timeout:3e3});return}l=1,v(),y();try{const e=await L(n,l);if(c=Math.ceil(e.totalHits/P),c===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"1,5",messageColor:"#fafafb",backgroundColor:"#ef4040",imageWidth:302,position:"topRight",theme:"dark",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#b51b1b",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",iconUrl:b,iconColor:"#fafafb"}),f(),p(),g.reset();return}const s=w(e.hits);u.innerHTML=s,C.refresh(),await k()}catch(e){console.log(e)}f(),p(),g.reset()});//!======================================================
m.addEventListener("click",async()=>{l++,y(),v();try{const r=await L(n,l),e=w(r.hits);u.insertAdjacentHTML("beforeend",e),C.refresh(),R()}catch{console.log("Error")}p(),f()});
//# sourceMappingURL=commonHelpers.js.map
