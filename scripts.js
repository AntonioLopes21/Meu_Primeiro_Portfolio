const image_profile = document.querySelector(".itens-direita-imagem-real")
const my_curriculum = "documents/Curriculo_antonio.pdf"

image_profile.addEventListener("mouseover", event => {
    image_profile.src = "img/meu_avatar.png";
    // console.log("identificando mouse")
})

image_profile.addEventListener("mouseout", event => {
    image_profile.src = "img/minha_imagem.png";
    // console.log("mouse fora da imagem")
})

let imagemFiltro = document.querySelector('.imagem-filtro')


let alterarTema = false;
imagemFiltro.addEventListener('click', function() {
    if(alterarTema) {
        imagemFiltro.src = "img/filtro-lua.png"
    } else {
        imagemFiltro.src = "img/filtro-sol.png"
    }

    alterarTema = !alterarTema
})

function alterarFiltro() {
    
    imagemFiltro.src = "img/filtro-sol.png";
}
