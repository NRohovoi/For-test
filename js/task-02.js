const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
const toCreateNewList = [];

const toAddNewItem = ingredients.map(el => {
  const newItem = document.createElement('li');
  newItem.textContent = el;
  newItem.classList = ('item');
  toCreateNewList.push(newItem)
});
ingredientsList.append(...toCreateNewList)