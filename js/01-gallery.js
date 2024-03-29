import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    img =>
      `<div class="gallery__item">
  <a class="gallery__link" href=${img.original}>
    <img
      class="gallery__image"
      src=${img.preview}
      data-source=${img.original}
      alt="${img.description}"
    />
  </a>
</div>`,
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

galleryEl.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();

  if (event.target.nodeName === 'IMG') {
    basicLightbox
      .create(`<img src="${event.target.dataset.source}" width="1000">`)
      .show();
  }
}
