import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

for (const item of galleryItems) {
  const img = document.createElement('img');
  img.src = item.preview;
  img.alt = item.description;
  img.className = 'gallery__image';

  const a = document.createElement('a');
  a.className = 'gallery__link';
  a.href = item.original;
  a.appendChild(img);

  const li = document.createElement('li');
  li.className = 'gallery__item';
  li.appendChild(a);

  galleryEl.appendChild(li);
}

galleryEl.addEventListener('click', (event) => {
  event.preventDefault();

  if (
    event.target.nodeName === 'IMG' &&
    event.target.parentNode.nodeName === 'A'
  ) {
    const instance = basicLightbox.create(`
    <img src="${event.target.parentNode.href}" width="800" height="600">`);
    instance.show();
  }
});
