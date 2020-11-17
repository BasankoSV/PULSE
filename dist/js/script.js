import carousel from './modules/carousel.js';
import tabs from './modules/tabs.js';
import descr from './modules/descr.js';
import modal from './modules/modal.js';
import forms from './modules/forms.js';

const catalogItemContentElem = document.querySelectorAll(
  '.catalog-item__content'
);
const catalogItemContentActiveClass = 'catalog-item__content_active';
const catalogItemListElem = document.querySelectorAll('.catalog-item__list');
const catalogItemListActiveClass = 'catalog-item__list_active';
const overlayElem = document.querySelector('.overlay');

new WOW().init();
forms(overlayElem);
modal(overlayElem);
carousel();
tabs(
  catalogItemContentElem,
  catalogItemContentActiveClass,
  catalogItemListElem,
  catalogItemListActiveClass
);
descr(
  catalogItemContentElem,
  catalogItemContentActiveClass,
  catalogItemListElem,
  catalogItemListActiveClass
);

window.addEventListener('scroll', function () {
  let pageUp = document.querySelector('.pageup');
  if (this.pageYOffset > 1600) {
    pageUp.style.display = 'block';
  } else {
    pageUp.style.display = 'none';
  }
});
