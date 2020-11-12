// не нравится мне это решение! на досуге переделать!
const carousel = () => {
  const imgItem = document.querySelectorAll('div.carousel__inner > div > img');
  const prev = document.querySelector('.arrow-prev');
  const next = document.querySelector('.arrow-next');

  const changeNameHundler = (sign, a, b) => {
    let currentImg;
    imgItem.forEach((item, index) => {
      if (!item.hasAttribute('hidden')) currentImg = index;
    });
    let nextImg =
      currentImg + Number(`${sign}1`) == a
        ? b
        : currentImg + Number(`${sign}1`);
    currentImg = nextImg;

    imgItem.forEach((item, index) => {
      if (index != currentImg) item.setAttribute('hidden', '');
      else item.removeAttribute('hidden');
    });
  };

  prev.addEventListener('click', () => changeNameHundler('-', -1, 2));
  next.addEventListener('click', () => changeNameHundler('+', 3, 0));
};

export default carousel;

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
