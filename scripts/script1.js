let CreateDOMObjects = () => {
    const DOM = `
        <div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
            <div class="vw-plugin-top-wrapper"></div>
        </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', DOM);
}

let ImportScriptFile = () => {
    let script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.onload = () => {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
    };
    document.head.appendChild(script)
}

(() => {
    window.addEventListener('DOMContentLoaded', e => {
        CreateDOMObjects();
        ImportScriptFile();
        carregarPessoas();
    });
})();

 function carregarPessoas() {
    fetch("https://randomuser.me/api/?results=5").then(resultado => {
       return resultado.json()
   }).then(response => {
       for (i = 0; i < 5; i++) {           
           document.getElementById("foto" + i).setAttribute("src", response.results[i].picture.large);
           document.getElementById("nome" + i).innerHTML = response.results[i].name.first + " " + response.results[i].name.last;
           document.getElementById("localizacao" + i).innerHTML = response.results[i].location.timezone.description;               
       }
   })
}



window.onload = function() {
    fetch("https://randomuser.me/api/?results=5").then(resultado => {
       return resultado.json()
   }).then(response => {
       for (i = 0; i < 5; i++) {           
           document.getElementById("foto" + i).setAttribute("src", response.results[i].picture.large);
           document.getElementById("nome" + i).innerHTML = response.results[i].name.first + " " + response.results[i].name.last;
           document.getElementById("localizacao" + i).innerHTML = response.results[i].location.timezone.description;               
       }
   })
}