import {conectaApi} from "./conectaAPI.js"

const lista = document.querySelector("[data-lista]");

listaVideos();

export default function constroiCard(url, imagem, titulo, descricao) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>`;
    return video;
}

async function listaVideos() {
    try {
        const dadosAPI = await conectaApi.conexaoAPI();
        console.log(dadosAPI);
            dadosAPI.forEach(dados => { lista
                .appendChild(constroiCard(dados.url, dados.imagem, dados.titulo, dados.descricao));        
        });
    } catch (error) {
        lista.innerHTML = `<h2 class="mensagem__titulo>Não foi possível carregar a lista de videos.</h2>`
    }
}