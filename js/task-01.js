const categoriesList = document.querySelectorAll('#categories>li');
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach(el => {
    console.log(`Categories: ${el.firstElementChild.textContent}, Elements: ${el.lastElementChild.children.length}`)
})
