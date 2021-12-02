let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.querySelector('body');

const updateStyleText = () => {
  body.style.backgroundImage = `linear-gradient( to right, ${color1.value}, ${color2.value} )`;
  css.textContent = body.style.backgroundImage;
};
updateStyleText();

color1.addEventListener('input', updateStyleText);
color2.addEventListener('input', updateStyleText);
