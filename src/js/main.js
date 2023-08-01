// DOM (Chamada do HTML)
const form = document.querySelector("#form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const checkboxTerms = document.querySelector("#checkbox-terms");
const mainButton = document.querySelector("#main-button");
// DOM (Chamada do HTML)

console.log(form, firstName, lastName, email, address, password, passwordConfirmation, checkboxTerms, mainButton);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verificar se o nome está vazio
    if (firstName.value === "") {
        alert("Por favor, preencher o seu primeiro nome");
        return;
    }

    // Verificar se o sobrenome está vazio
    if (lastNameName.value === "") {
        alert("Por favor, preencher o seu último nome");
        return;
    }

    // Verificar se o e-mail está vazio e se passa na validação
    if(email.value === "" || !isEmailValid(email.value)) {
        alert("Preencher o seu e-mail");
        return;
    }

    // Caso todos os campos estejam preenchidos , envie o formulário
    form.submit();
});

function isEmailValid(email) {

    const emailRegex = new RageExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}