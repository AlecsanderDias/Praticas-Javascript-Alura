function botaoFiltrar(listaDeLivros) {
    const arrayBotoes = document.querySelectorAll(".btn");
    arrayBotoes.forEach(nomeBotao => {
        let botao = document.getElementById(nomeBotao.id);
        botao.addEventListener("click", () => {
            filtrarLivros(listaDeLivros, botao);
        });
    });
}

function filtrarLivros(lista, botao) {
    let filtro = botao.value;
    let total = '';
    let listaFiltrada = [];
    if(Boolean(filtro)) {
        listaFiltrada = lista.filter(livro => livro.categoria === filtro);
    } else {
        if (botao.id === "btnLivrosDisponiveis") {
            listaFiltrada = lista.filter(livro => livro.quantidade > 0);
            let valorTotal = listaFiltrada.reduce((acumulador, valorAtual) => acumulador + valorAtual.desconto, 0);
            total = exibirValorTotalDisponiveis(valorTotal.toFixed(2));
        } else {
            listaFiltrada = lista.sort((a, b) => a.preco - b.preco);
        }
    }
    criaElementosLivro(listaFiltrada, total);
}

function exibirValorTotalDisponiveis(valorTotal) {
    return elementoTotalDisponiveis.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`;
}