const image_profile = document.querySelector(".itens-direita-imagem-real");
const imagemFiltro = document.querySelector(".imagem-filtro");

let alterarTema = false;

// Função para atualizar as imagens ao passar o mouse
function configurarEventosMouse(imgNormal, imgHover) {
    image_profile.addEventListener("mouseover", () => {
        image_profile.src = imgHover;
    });

    image_profile.addEventListener("mouseout", () => {
        image_profile.src = imgNormal;
    });
}

configurarEventosMouse("img/minha_imagem.png", "img/meu_avatar.png");

imagemFiltro.addEventListener("click", function () {
    alterarTema = !alterarTema;

    if (alterarTema) {
        imagemFiltro.src = "img/filtro-lua.png";
        image_profile.src = "img/minha_imagem.png";

        document.querySelectorAll(".links").forEach((link) => link.style.color = "");
        document.querySelectorAll(".destaques").forEach((destaque) => destaque.style.color = "");

        document.querySelector("header").style.backgroundColor = "#272727";
        document.querySelector("header").style.color = "#F6F6F6";
        document.querySelector(".btn-linkedin").style.backgroundColor = "transparent";
        document.querySelector(".btn-linkedin").style.border = "2px solid #22D4FD";
        document.querySelector(".btn-github").style.backgroundColor = "transparent";
        document.querySelector(".btn-github").style.border = "2px solid #22D4FD";
        document.querySelector("body").style.backgroundColor = "#050404";
        document.querySelector("body").style.color = "#F6F6F6";
        document.querySelector("footer").style.backgroundColor = "#272727";
        document.querySelector(".btn_curriculo_para_download").style.backgroundColor = "";
        document.querySelector(".btn_curriculo_para_download").style.color = "";

        // Atualizar eventos de hover no modo escuro
        configurarEventosMouse("img/minha_imagem.png", "img/meu_avatar.png");
        document.querySelector('.itens-direita-imagem-real').style.filter = ""


    } else {
        imagemFiltro.src = "img/filtro-sol.png";
        image_profile.src = "img/minha_imagem_tema_claro.png";

        document.querySelectorAll(".links").forEach((link) => link.style.color = "rgb(61, 66, 206)");
        document.querySelectorAll(".destaques").forEach((destaque) => destaque.style.color = "rgb(173, 10, 46)");

        document.querySelector("header").style.backgroundColor = "#3E3F5B";
        document.querySelector("header").style.color = "#8AB2A6";
        document.querySelector(".btn-linkedin").style.backgroundColor = "#3E3F5B";
        document.querySelector(".btn-linkedin").style.border = "2px solid #3E3F5B";
        document.querySelector(".btn-github").style.backgroundColor = "#3E3F5B";
        document.querySelector(".btn-github").style.border = "2px solid #3E3F5B";
        document.querySelector("body").style.backgroundColor = "#F5ECE0";
        document.querySelector("body").style.color = "black";
        document.querySelector("footer").style.backgroundColor = "#3E3F5B";
        document.querySelector(".btn_curriculo_para_download").style.backgroundColor = "#3E3F5B";
        document.querySelector(".btn_curriculo_para_download").style.color = "#F6F6F6";

        // Atualizar eventos de hover no modo claro
        configurarEventosMouse("img/minha_imagem_tema_claro.png", "img/meu_avatar_tema_claro.png");
        document.querySelector('.itens-direita-imagem-real').style.filter = "drop-shadow(0px 0px 0.625rem #3E3F5B)"
    }
});
