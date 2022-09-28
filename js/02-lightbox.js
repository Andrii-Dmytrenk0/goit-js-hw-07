import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map((image) => 
`<li><a class="gallery__item" href=${image.original}>
  <img
      class="gallery__image"
      src=${image.preview}
      alt=${image.description}
    />
  </a></li>`).join("");

gallery.innerHTML = markup;

let galleryLightbox = new SimpleLightbox('.gallery a', {captionsData: "alt",  captionDelay: 250,});