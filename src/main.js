import { getImages } from "./js/pixabay-api.js";
import { createImagesList } from "./js/render-functions.js";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import imageUrlError from './img/icon-error.svg';
import imageUrlInfo from './img/icon-attention.svg';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const moreBtn = document.querySelector('.load-btn');
const loader = document.querySelector('.loader');

let userData = '';
let currentPage = 1;
const perPage = 15;
let maxPage = 1;

const lightbox = new SimpleLightbox('.gallery-item a', {
                    captions: true,
                    captionSelector: 'img',
                    captionType: 'attr',
                    captionsData: 'alt',
                    captionPosition: 'bottom',
                    captionDelay: 500,
                    animationSpeed: 200,
                    widthRatio: 1,
                    heightRatio: 0.95,
                    disableRightClick: true,
});
async function loadAllImages() {
    const imageLoadPromises = Array.from(gallery.querySelectorAll('img')).map(image => new Promise(resolve => {
        image.onload = resolve;
    }));
    await Promise.all(imageLoadPromises);
}
function showLoader() {
    loader.style.display = 'block';
}
function hideLoader() {
    loader.style.display = 'none';
}
function showLoadBtn() {
    moreBtn.classList.add('is-visible');
}
function hideLoadBtn() {
    moreBtn.classList.remove('is-visible'); 
}
function updateStatusBtn() {
    if (currentPage >= maxPage) {
        hideLoadBtn();
        iziToast.info({
                    message: "We're sorry, but you've reached the end of search results.",
                    messageSize: '16',
                    messageLineHeight: '1,5',
                    messageColor: '#01090f',
                    backgroundColor: '#d6e288',
                    position: 'bottomRight',
                    close: true,
                    progressBar: true,
                    progressBarColor: '#9aa406',
                    transitionIn: 'fadeInDown',
                    transitionOut: 'fadeOutUp',
                    iconUrl: imageUrlInfo,
                    iconColor: '#fafafb',
                });
    } else { showLoadBtn(); }
}

form.addEventListener('submit', sendUserRequest);           
async function sendUserRequest(e) {
    e.preventDefault();
    userData = e.target.elements.request.value.trim();
    currentPage = 1;

    if (userData !== '') {       
        gallery.innerHTML = '';
        showLoader();
        hideLoadBtn();        
        try {
            const data = await getImages(userData, currentPage);
            maxPage = Math.ceil(data.totalHits / perPage);
            if (data.total !== 0) {
                const markup = createImagesList(data);
                gallery.insertAdjacentHTML('beforeend', markup);
                lightbox.refresh();
                await loadAllImages();
            } else {
                console.log('Sorry, there are no images matching your search query. Please try again!');
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageSize: '16',
                    messageLineHeight: '1,5',
                    messageColor: '#fafafb',
                    backgroundColor: '#ef4040',
                    imageWidth: 302,
                    position: 'topRight',
                    theme: 'dark',
                    close: true,
                    closeOnEscape: true,
                    closeOnClick: true,
                    progressBar: true,
                    progressBarColor: '#b51b1b',
                    transitionIn: 'fadeInDown',
                    transitionOut: 'fadeOutUp',
                    iconUrl: imageUrlError,
                    iconColor: '#fafafb',
                });
            }
        } catch (err) {
            console.log(err);
        }                   
        hideLoader();
        updateStatusBtn()
        form.reset();
    } else {
        console.log('Enter your Request!');
        iziToast.error({
                        title: 'Error!',
                        titleColor: '#fafafb', 
                        message: 'Enter your Request!',
                        messageSize: '16',
                        messageColor: '#fafafb',        
                        backgroundColor: '#ef4040',
                        imageWidth: 432,
                        position: 'topRight',
                        theme: 'dark',
                        close: true,
                        closeOnEscape: true,
                        closeOnClick: true,
                        progressBar: true,
                        progressBarColor: '#b51b1b',
                        transitionIn: 'fadeInDown',
                        transitionOut: 'fadeOutUp',
                        iconUrl: imageUrlError,
                        iconColor: '#fafafb',
                        timeout: 3000,
        });
        hideLoadBtn(); 
        gallery.innerHTML = '';
    }
}

moreBtn.addEventListener('click', newRequest);   
async function newRequest() {
    hideLoadBtn();
    showLoader();
    currentPage++;
    const data = await getImages(userData, currentPage);
    gallery.insertAdjacentHTML('beforeend', createImagesList(data));
    lightbox.refresh();
    loadAllImages();
    hideLoader();
    updateStatusBtn();
};

