const refs = {
  input: document.querySelector('#controls').firstElementChild,
  create: document.querySelector('button[data-create]'),
  destroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes')
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};
const destroyBoxes = () => {
  refs.input.value = "";
  refs.boxes.innerHTML = "";
};
refs.destroy.addEventListener('click', () => destroyBoxes.call());
const createBox = (amount) => {
  const elToAdd = [];
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${30 + 10 * i}px`;
    newDiv.style.height = `${30 + 10 * i}px`;
    newDiv.style.background = getRandomHexColor();
    elToAdd.push(newDiv);
  }
  return elToAdd;
};
refs.create.addEventListener('click', () => {
  const addBox = createBox(refs.input.value);
  console.log(addBox)
  refs.boxes.append(...addBox)
})