const refs = {
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
  body: document.querySelector('body')
}
refs.button.addEventListener('click', onButtonClick)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
function onButtonClick() {
  const color = getRandomHexColor();
  console.log(color);
  refs.span.textContent = color;
  refs.body.style.backgroundColor = color;
}