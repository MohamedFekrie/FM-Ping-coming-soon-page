const emailInput = document.querySelector('input[type="email"]');
const submitInput = document.querySelector('input[type="submit"]');


submitInput.onclick = (e) => {
    e.preventDefault();
    validateInput()
}

function validateInput() {
    // Get Value From Input And Set It In The Variable
    let inputValue = '';
    inputValue = emailInput.value;
    // Make Regular Expression
    let regx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    if (!regx.test(inputValue)) { // Check if the Email Isn't Valid
        document.querySelector('form div p').classList.add('on');
        emailInput.style.borderColor = 'var(--light-red)'
    } else { // Check if the Email Is Valid
        emailInput.value = '';
        document.querySelector('form div p').classList.remove('on');
        emailInput.style.borderColor = 'hsl(223, 100%, 93%)'
    }
}
