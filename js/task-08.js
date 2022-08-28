const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormChange);
function onFormChange(e) {
    e.preventDefault();
    if (e.currentTarget.email.value === "" || e.currentTarget.password.value === "") {
        return alert('Plese enter all the field')
    }
    const userData = { email: e.currentTarget.email.value, password: e.currentTarget.password.value };
    console.log(userData);
    e.currentTarget.reset();
}
