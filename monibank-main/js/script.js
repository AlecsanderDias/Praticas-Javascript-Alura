import validaCpf from "./validaCpf.js";
import validaIdade from "./validaIdade.js";
import exibirMensagemErro from "./mensagemErro.js";

const camposFormulario = document.querySelectorAll("[required]");

const formulario = document.querySelector('[data-formulario]');

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value,
    }
    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    window.location.href = "./abrir-conta-form-2.html";
})

camposFormulario.forEach(campo => {
    campo.addEventListener("blur", () => verificaCampo(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault());
});

function verificaCampo(campo) {
    campo.setCustomValidity('');
    if (campo.name == "cpf" && campo.value.length >= 11) {
        validaCpf(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        validaIdade(campo);
    }
    exibirMensagemErro(campo);
}