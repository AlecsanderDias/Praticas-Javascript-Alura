function aplicaDesconto(livros) {
    let desconto = 0.3;
    let livrosComDesconto = livros.map(livro => {
        return {...livro, desconto: livro.preco - (livro.preco * desconto)}
    });
    return livrosComDesconto;
}