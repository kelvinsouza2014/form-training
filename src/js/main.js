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
    if (lastName.value === "") {
        alert("Por favor, preencher o seu último nome");
        return;
    }

    // Verificar se o e-mail está vazio e se passa na validação
    if (email.value === "" || !isEmailValid(email.value)) {
        alert("Preencher o seu e-mail");
        return;
    }

    if (address.value === "") {
        alert("Por favor, preencher o seu endereço");
        return;
    }

    // // Verificar se o endereço está vazio e se passa na validação
    // if (address.value === "" || !isAddressValid(address.value)) {
    //     alert("O endereço deve conter o logradouro e o bairro separado por um traço (-)");
    //     return;
    // }

    //Verificar se a senha foi preenchida
    if (!validatePassword(password.value, 6)) {
        alert("A senha precisa ter no mínimo 6 caracteres.");
        return;
    }

    // Verificar se as senhas são iguais
    if (passwordConfirmation.value != password.value) {
        alert("As senhas devem ser iguais");
        return;
    }

    // Verificar se o checkbox de termos está marcado
    if (!checkboxTerms.checked) {
        alert("Você precisa aceitar os termos antes de prosseguir.");
        return;
    }

    // Caso todos os campos estejam preenchidos , envie o formulário
    form.submit();
});

// Função de validação de e-mail
function isEmailValid(email) {
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

// // Função de validação de endereço
// function isAddressValid(address) {
//     const addressRegex = new RegExp(/^[a-zA-Z]+ +[a-zA-Z]+\,[0-9]+ +[a-zA-Z]$/);

//     if (addressRegex.test(address)) {
//         return true;
//     }

//     return false;
// }

// Função de validação de senha
function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        // Senha válida
        return true;
    }
    // Senha inválida
    return false;
}
