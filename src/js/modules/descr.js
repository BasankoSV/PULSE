const descr = (
  catalogItemContentElem,
  catalogItemContentActiveClass,
  catalogItemListElem,
  catalogItemListActiveClass
) => {
  const catalogItemLink = document.querySelectorAll('.catalog-item__link');
  const catalogItemBack = document.querySelectorAll('.catalog-item__back');

  const toggleActive = (index, event) => {
    event.preventDefault();
    catalogItemContentElem[index].classList.toggle(
      catalogItemContentActiveClass
    );
    catalogItemListElem[index].classList.toggle(catalogItemListActiveClass);
  };

  catalogItemLink.forEach((item, index) => {
    item.addEventListener('click', event => toggleActive(index, event));
  });

  catalogItemBack.forEach((item, index) => {
    item.addEventListener('click', event => toggleActive(index, event));
  });
};

export default descr;
