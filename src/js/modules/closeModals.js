const closeModals = (overlayElem, event) => {
  overlayElem.style.display = 'none';
  event.target.parentElement.id &&
    (event.target.parentElement.style.display = 'none');
};

export default closeModals;
