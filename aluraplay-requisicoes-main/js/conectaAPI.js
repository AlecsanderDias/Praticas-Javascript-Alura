async function conexaoAPI() {
    const conexao = await fetch("http://localhost:3000/videos");
    const dadosConexao = await conexao.json();
    return dadosConexao;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if(!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo")
    }
    const dadosConexao = await conexao.json();
    return dadosConexao;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const dadosConexao = await conexao.json();
    return dadosConexao;
}

export const conectaApi = {
    conexaoAPI,
    criaVideo,
    buscaVideo,
}