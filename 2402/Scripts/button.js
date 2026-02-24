function minhaFuncao() {
    var auxiliar = prompt('Digite um número entre um e seis: ')
    switch(parseInt(auxiliar)){
        case 1: 
            auxiliar = "um" ; 
            break;
        case 2: auxiliar = "dois"; break;
        case 3: auxiliar = "tres"; break;
        case 4: auxiliar = "quatro"; break;
        case 5: auxiliar = "cinco"; break;
        case 6: auxiliar = "seis"; break;
        default:
            alert("Escolha um número de 1 a 6!!!!!");
        return;  
    }

    const imagens = [
        { src: "Images/aviva.jpg", alt: "Agua-viva" },
        { src: "Images/eu.jpg", alt: "Antilope" },
        { src: "Images/flor.jpg", alt: "Flor" },
        { src: "Images/gato.jpg", alt: "Gato" },
        { src: "Images/leao.jpg", alt: "Leão" },
        { src: "Images/tigre.jpg", alt: "Tigre" }
    ];


    const indiceAleatorio = Math.floor(Math.random() * imagens.length);

    document.getElementById(auxiliar).innerHTML = `<img src="${imagens[indiceAleatorio].src}" alt="${imagens[indiceAleatorio].alt}">`;
}

function limpar(){
    window.location.reload();
}