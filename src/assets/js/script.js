$(document).ready(function(){

    // let slide_atual = 0
   
    // let lista_slides = ["banner-halo", "banner-lol", "banner-eldenring"]
    
    // setInterval(slide, 2000)
        

    // function slide() {

    //     console.log("slide atual", slide_atual)

    //     if (slide_atual > 0) {
    //         $("#carrossel").removeClass(lista_slides [slide_atual -1])
    //     } else if (slide_atual == 0) {
    //         $("#carrossel").removeClass(lista_slides[2])
    //     }

    //     $("#carrossel").addClass(lista_slides[slide_atual])

    //     slide_atual ++

    //     if (slide_atual > 2) {
    //         slide_atual = 0
    //     }
    // }

    $("#barras-cabecalho").click(function(){

        $("#menu").toggleClass("menu-ativo")

            // if( $("#menu").hasClass("menu-ativo")){
            //     $("#menu").removeClass("menu-ativo")
            // }
            // else {
            //     $("#menu").addClass("menu-ativo")
            // }
    })
})

function mostrarmenu() {
    let menu = document.getElementById("menu");

    console.log(getComputedStyle(menu).display);

    if (getComputedStyle(menu).display != "none") {
        menu.style.display = "none"
    } else {
        menu.style.display = "flex"
    }
}

function cadastroemail() {
    let emaildigitado = document.getElementById("campo-email").value;
        console.log(emaildigitado);
}
            // criando objeto 
function renderizarNoticias() {
    let espaco = document.getElementById("espaco-noticias")

    let listaNoticias = [
        {
            imagem:"img/photo-news.jpg",
            titulo:"Prêmio TGA",
            descricao:"Saiba tudo sobre o The Game Awards",
        },
        {
            imagem:"img/photo-news.jpg",
            titulo:"Campeonato LOL",
            descricao:"veja os resultados",
        },
        {
            imagem:"img/photo-news.jpg",
            titulo:"Preços subindo",
            descricao:"Preços de hardware sobem novamente",
        }
    ]

    template = "";
    
    for (let index = 0; index < listaNoticias.length; index++) {
        const noticia = listaNoticias[index];
        console.log(noticia)

    template += `<div class="card_news">
    <img class="card-not" src="${noticia.imagem}" alt="imagem-News...">
    <h3>${noticia.titulo}</h3>
    <p>${noticia.descricao}</p>
    </div>`
    }

    espaco.innerHTML = template
    // espaco.innerText = "Jullys Alisson"
}