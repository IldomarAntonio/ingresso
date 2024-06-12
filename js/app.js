let ingressosDisponiveis = {
    pista: 100,
    superior: 200,
    inferior: 400
};

function atualizarQuantidade() {
    document.getElementById('qtd-pista').textContent = ingressosDisponiveis.pista;
    document.getElementById('qtd-superior').textContent = ingressosDisponiveis.superior;
    document.getElementById('qtd-inferior').textContent = ingressosDisponiveis.inferior;
}

function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    if (!qtd || qtd < 1) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }

    if (qtd > ingressosDisponiveis[tipoIngresso]) {
        alert("Quantidade insuficiente disponível.");
        return;
    }

    ingressosDisponiveis[tipoIngresso] -= qtd;
    atualizarQuantidade();
    alert("Compra realizada com sucesso!");
}

window.onload = atualizarQuantidade;
