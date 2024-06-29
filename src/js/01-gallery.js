// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems as images } from './gallery-items';
// Change code below this line

function createItem({preview, original, description}){
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  };

function createGallery(images){
    const gallery = images.map(item => createItem(item)).join('');
    document.querySelector('.gallery').innerHTML = gallery;
};

createGallery(images)
new SimpleLightbox('.gallery a', {});
