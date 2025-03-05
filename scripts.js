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

function baixarCurriculo(){
    let link = document.createElement('link_para_download')
    link.href = my_curriculum;
    link.download = "Curriculo_Antonio"

    link.click()
    console.log("clicando")
}
// fetch('documents/Curriculo_antonio.pdf')
//     .then(function(data) {
//         return data.blob();
//     }) .then(function(result) {
//         console.log(result)
//         imgUrl = URL.createObjectURL(result)
//         const link = `${imgUrl}`
//     })

// document.querySelector("#curriculo_para_download").innerHTML = link;

