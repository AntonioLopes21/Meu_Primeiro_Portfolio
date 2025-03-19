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
        document.querySelector('header').style.backgroundColor = "#3E3F5B"
        document.querySelector('header').style.color = "#8AB2A6"
        document.querySelector('.btn-linkedin').style.border = "2px solid #3E3F5B"
        document.querySelector('.btn-github').style.border = "2px solid #3E3F5B"
        document.querySelector('body').style.backgroundColor = "#F5ECE0"
        document.querySelector('body').style.color = "black";
        document.querySelector('footer').style.backgroundColor = "#3E3F5B"
    }

    alterarTema = !alterarTema
})

function alterarFiltro() {
    
    imagemFiltro.src = "img/filtro-sol.png";
}
