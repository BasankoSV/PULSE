const imgItem = document.querySelector('.imgItem');
const prev = document.querySelector('.arrow-prev');
const next = document.querySelector('.arrow-next');

const changeNameHundler = (sign, a, b) => {
  currentImg = +imgItem.getAttribute('src').substr(10, 1);
  nextImg =
    currentImg + Number(`${sign}1`) == a ? b : currentImg + Number(`${sign}1`);
  return (imgItem.src = `img/slide_${nextImg}.jpg`);
};

prev.addEventListener('click', () => changeNameHundler('-', 0, 3));
next.addEventListener('click', () => changeNameHundler('+', 4, 1));
