let nomes = [];

document.getElementById('adicionar').addEventListener('click', function() {
    const inputNome = document.getElementById('nome');
    const nome = inputNome.value.trim();

    if (nome !== '') {
        nomes.push(nome);
        inputNome.value = '';

        atualizarLista();
    } else {
        alert('Por favor, digite um nome válido.');
    }
});

document.getElementById('sorteio').addEventListener('click', function() {
    if (nomes.length === 0) {
        alert('Adicione nomes antes de sortear!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceSorteado];

    document.getElementById('resultado').innerText = `Nome Sorteado: ${nomeSorteado}`;
});

function atualizarLista() {
    const listaNomes = document.getElementById('lista-nomes');
    listaNomes.innerHTML = '';

    nomes.forEach(function(nome) {
        const li = document.createElement('li');
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}
