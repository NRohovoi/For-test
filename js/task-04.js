const refs = {
    plus: document.querySelector('#counter').lastElementChild,
    minus: document.querySelector('#counter').firstElementChild,
    span: document.querySelector('#value'),
};

refs.plus.addEventListener('click', onPlusButton);
refs.minus.addEventListener('click', onMinusButton);
let newValue = 0;

function onPlusButton() {
    newValue += 1;
    refs.span.textContent = newValue;
};
function onMinusButton() {
     newValue -= 1;
     refs.span.textContent = newValue;
}

