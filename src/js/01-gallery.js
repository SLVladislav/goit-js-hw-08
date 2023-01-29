// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryItemsContainer = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsContainer);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div>
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
