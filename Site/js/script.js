
let botaoComecar = document.getElementById("botaoComecar");

botaoComecar.addEventListener("click", function() {
    document.querySelector(".acesso-exemplos").scrollIntoView({
        behavior: "smooth"
    });
});

let linksMenu = document.querySelectorAll(".cabecalho-menu-item");

linksMenu.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        let nomeLink = this.textContent.trim();

        if (nomeLink === "Início") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        } else {
            alert(nomeLink + " estará disponível em breve!");
        }

    });

});


let imagemSimulador = document.getElementById("imagemSimulador");

imagemSimulador.addEventListener("click", function() {
    alert("Conheça o simulador do Controlizze e organize seu dinheiro!");
});

let criarConta = document.getElementById("criarConta");

criarConta.addEventListener("click", function() {
    alert("Em breve você poderá criar sua conta no Controlizze!");
});

let continuar = document.getElementById("continuar");

continuar.addEventListener("click", function(event) {
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

let botaoAjuda = document.getElementById("botaoAjuda");

botaoAjuda.addEventListener("click", function() {
    alert("Precisa de ajuda? Entre em contato com a equipe Controlizze!");
});