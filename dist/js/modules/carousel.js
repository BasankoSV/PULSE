// не нравится мне это решение! на досуге переделать!
const carousel = () => {
  const animateClassLeft = 'animate__slideInLeft';
  const animateClassRight = 'animate__slideInRight';
  const imgItem = document.querySelectorAll('div.carousel__inner > div > img');
  const prev = document.querySelector('.arrow-prev');
  const next = document.querySelector('.arrow-next');

  const changeImgHundler = (sign, a, b, animation) => {
    let currentImg;
    imgItem.forEach((item, index) => {
      item.classList.remove(animateClassLeft);
      item.classList.remove(animateClassRight);
      if (!item.hasAttribute('hidden')) currentImg = index;
    });
    let nextImg =
      currentImg + Number(`${sign}1`) == a
        ? b
        : currentImg + Number(`${sign}1`);
    currentImg = nextImg;

    imgItem.forEach((item, index) => {
      if (index != currentImg) {
        item.setAttribute('hidden', '');
      } else {
        item.removeAttribute('hidden');
        item.classList.add(animation);
      }
    });
  };

  prev.addEventListener('click', () =>
    changeImgHundler('-', -1, 2, animateClassLeft)
  );
  next.addEventListener('click', () =>
    changeImgHundler('+', 3, 0, animateClassRight)
  );
};

export default carousel;

// animate__slideInRight;
// animate__slideInLeft;

/* рабочий вариант, замена символа в имени файла картинки 
  const carousel = () => {
  const imgItem = document.querySelector('.imgItem');
  const prev = document.querySelector('.arrow-prev');
  const next = document.querySelector('.arrow-next');

  const changeNameHundler = (sign, a, b) => {
    let currentImg = +imgItem.getAttribute('src').substr(10, 1);
    let nextImg =
      currentImg + Number(`${sign}1`) == a
        ? b
        : currentImg + Number(`${sign}1`);
    return (imgItem.src = `img/slide_${nextImg}.jpg`);
  };

  prev.addEventListener('click', () => changeNameHundler('-', 0, 3));
  next.addEventListener('click', () => changeNameHundler('+', 4, 1));
}; 
*/
