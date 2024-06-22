import{a as d,S as q,i as g}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function m(r,e){try{d.defaults.baseURL="https://pixabay.com/api/";const s={key:"44328072-f56b95eb73841ff5e619bc345",q:r,image_type:"photo",orientation:"horizontal",per_page:15,page:e};return(await d.get("",{params:s})).data}catch(s){console.error(s)}}function P({largeImageURL:r,webformatURL:e,tags:s,comments:i,downloads:t,likes:o,views:n}){return`<li class="gallery-item">
    <a class="gallery-link" href=${r}>
      <img
        class="gallery-image"
        src=${e}
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
        <p class="gallery-text-count">${n}</p>
      </li>
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Comments</p>
        <p class="gallery-text-count">${i}</p>
      </li>
      <li class="gallery-text-property">
        <p class="gallery-text-dscr">Downloads</p>
        <p class="gallery-text-count">${t}</p>
      </li>
    </ul> 
  </li>`}function y(r){return r.hits.map(P).join("")}const p="/goit-js-hw-12/assets/icon-error-40fa32d5.svg",v="/goit-js-hw-12/assets/icon-attention-f39d3c79.svg",h=document.querySelector(".form"),a=document.querySelector(".gallery"),f=document.querySelector(".load-btn"),b=document.querySelector(".loader");let c="",l=1;const E=15;let L=1;const w=new q(".gallery-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:500,animationSpeed:200,widthRatio:1,heightRatio:.95,disableRightClick:!0});async function x(){const r=Array.from(a.querySelectorAll("img")).map(e=>new Promise(s=>{e.onload=s}));await Promise.all(r)}function C(){b.style.display="block"}function O(){b.style.display="none"}function B(){f.classList.add("is-visible")}function u(){f.classList.remove("is-visible")}function S(){l>=L?(u(),g.info({message:"We're sorry, but you've reached the end of search results.",messageSize:"16",messageLineHeight:"1,5",messageColor:"#01090f",backgroundColor:"#d6e288",position:"bottomRight",close:!0,progressBar:!0,progressBarColor:"#9aa406",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",iconUrl:v,iconColor:"#fafafb"})):B()}function I(){const e=a.children[0].getBoundingClientRect().height;scrollBy({top:e*3,behavior:"smooth"})}h.addEventListener("submit",R);async function R(r){if(r.preventDefault(),c=r.target.elements.request.value.trim(),l=1,c!==""){a.innerHTML="",C(),u();try{const e=await m(c,l);if(L=Math.ceil(e.totalHits/E),e.total!==0){const s=y(e);a.insertAdjacentHTML("beforeend",s),w.refresh(),await x()}else console.log("Sorry, there are no images matching your search query. Please try again!"),g.error({message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"1,5",messageColor:"#fafafb",backgroundColor:"#ef4040",imageWidth:302,position:"topRight",theme:"dark",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#b51b1b",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",iconUrl:p,iconColor:"#fafafb"})}catch{console.log("Error")}O(),S(),h.reset()}else console.log("Enter your Request!"),g.error({title:"Error!",titleColor:"#fafafb",message:"Enter your Request!",messageSize:"16",messageColor:"#fafafb",backgroundColor:"#ef4040",imageWidth:432,position:"topRight",theme:"dark",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#b51b1b",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",iconUrl:p,iconColor:"#fafafb",timeout:3e3}),u(),a.innerHTML=""}f.addEventListener("click",k);async function k(){l++,u(),C();try{const r=await m(c,l),e=y(r);a.insertAdjacentHTML("beforeend",e),w.refresh()}catch{console.log("Error")}I(),x(),O(),S()}
//# sourceMappingURL=commonHelpers.js.map
