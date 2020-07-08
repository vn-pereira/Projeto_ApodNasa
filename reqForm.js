         //requsição do formmulário

let dataEscolha = document.getElementById('calendario');
let botao = document.getElementById('botaoEnviar');

botao.addEventListener("click", function() {
    
    let requisicao = new XMLHttpRequest(); // criando o obj que faz a requisição
    let novaUrl = 'https://api.nasa.gov/planetary/apod?api_key=iVkNoOjEOuexT2chsygtVGsKxwFgH1SoWzoPkBOz&date='+ dataEscolha.value;
    console.log(novaUrl);
    requisicao.open("GET", novaUrl);

    requisicao.addEventListener("load", function(event) {
        let respostaApi = JSON.parse(requisicao.responseText);
        event.preventDefault();

        let data = document.getElementById('data');
            data.innerText = `Data ${respostaApi.date}`;
            console.log("oi");        

            let foto = document.getElementById('imagem');
            foto.src = respostaApi.url;
        
            let rodape = document.getElementById('rodape');
            rodape.innerText = `Image Credit & Copyright: ${respostaApi.copyright}`;

            let legenda = document.getElementById('legenda');
            legenda.innerText = respostaApi.explanation;
        
    });
    requisicao.send();
}); 

