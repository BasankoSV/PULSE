const tabs = (
  catalogItemContentElem,
  catalogItemContentActiveClass,
  catalogItemListElem,
  catalogItemListActiveClass
) => {
  const catalogTabs = document.querySelector('.catalog__tabs');
  const catalogTab = document.querySelectorAll('.catalog__tab');
  const catalogContent = document.querySelectorAll('.catalog__content');
  const catalogTabActiveClass = 'catalog__tab_active';
  const catalogContentActiveClass = 'catalog__content_active';

  catalogTabs.addEventListener('click', e => {
    catalogTab.forEach((item, index) => {
      item.setAttribute('data-tab', index);
      item.classList.remove(catalogTabActiveClass);
    });
    catalogContent.forEach((item, index) => {
      item.classList.remove(catalogContentActiveClass);
    });

    const tabElem = e.target.parentElement;
    tabElem.classList.add(catalogTabActiveClass);

    catalogContent[tabElem.dataset.tab].classList.add(
      catalogContentActiveClass
    );

    catalogItemListElem.forEach(item => {
      if (item.classList.contains(catalogItemListActiveClass)) {
        item.classList.remove(catalogItemListActiveClass);
      }
    });
    catalogItemContentElem.forEach(item => {
      if (!item.classList.contains(catalogItemContentActiveClass)) {
        item.classList.add(catalogItemContentActiveClass);
      }
    });
  });
};

export default tabs;
