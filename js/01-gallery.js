import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const parentEl = document.querySelector('.gallery');

function createElGallery() {
   const markup = galleryItems.map(
        (item) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
        </a>
        </div>`).join("");
    
    parentEl.insertAdjacentHTML("beforeend", markup);
};

createElGallery();