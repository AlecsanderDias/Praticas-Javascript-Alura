export default function validaIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!maiorIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade');
        campo.style.border = "2px solid red";
    }
}

function maiorIdade(data) {
    const dataAtual = new Date();
    const dataMaiorDe18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMaiorDe18;
}