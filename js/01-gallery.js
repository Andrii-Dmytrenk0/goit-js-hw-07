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

parentEl.addEventListener('click', imgClick);

function imgClick(evt) {
    evt.preventDefault();

    if (evt.target.classList.contains('parentEl')) return;

    const bigImage = evt.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${bigImage}" width="800" height="600">
`);
    
    instance.show()

    document.addEventListener('keydown', onColoseModal);

    function onColoseModal(event) {
        if (event.key !== 'Escape') {
            return;
        }

        instance.close();
        document.removeEventListener('keydown', onColoseModal);
    }
};







