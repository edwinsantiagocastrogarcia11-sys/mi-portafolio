

// validacion del formulario//
const inputEmail = document.getElementById("email");
const errorEmail = document.getElementById("error-email");

inputEmail.addEventListener("input", () => {
    if (! inputEmail.value.includes("@")) {
        errorEmail.textContent = "Por favor, ingresa un correo electrónico válido.";
    } else {
        errorEmail.textContent = "";
    }
});

//menu hamburguesa//
document.getElementById("menu");


