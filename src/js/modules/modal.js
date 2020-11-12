import closeModals from './closeModals.js';

const modal = overlayElem => {
  const modalCloseElem = document.querySelectorAll('.modal__close');
  const consultationBtn = document.querySelectorAll(
    '[data-modal=consultation]'
  );
  const buyBtn = document.querySelectorAll('.button_mini');
  const modalConsultation = document.querySelector('#consultation');
  const modalOrder = document.querySelector('#order');
  const modalOrderDescr = modalOrder.querySelector('.modal__descr');

  modalCloseElem.forEach(close =>
    close.addEventListener('click', event => closeModals(overlayElem, event))
  );

  consultationBtn.forEach(item => {
    item.addEventListener('click', () => {
      overlayElem.style.display = 'block';
      modalConsultation.style.display = 'block';
    });
  });

  buyBtn.forEach(item => {
    item.addEventListener('click', e => {
      overlayElem.style.display = 'block';
      modalOrderDescr.textContent = e.target.parentElement.parentElement.querySelector(
        '.catalog-item__subtitle'
      ).textContent; //показ марки устройства в модалке
      modalOrder.style.display = 'block';
    });
  });
};

export default modal;
