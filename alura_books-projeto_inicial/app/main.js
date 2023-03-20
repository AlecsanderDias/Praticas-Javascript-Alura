async function getLivros(endPoint) {
    const respostaEndPoint = await fetch(endPoint);
    let respostaLivros = await respostaEndPoint.json();
    let livrosComDesconto = aplicaDesconto(respostaLivros);
    criaElementosLivro(livrosComDesconto);
    botaoFiltrar(livrosComDesconto);
}

const endPoint = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getLivros(endPoint);
let elementoTotalDisponiveis = document.getElementById("valor_total_livros_disponiveis");
