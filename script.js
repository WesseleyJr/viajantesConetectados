document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.form-compartilhar form');
    const resultadosPesquisa = document.querySelector('.resultados-pesquisa');

    function criarCard(local, experiencia, nome) {
        const novoCard = document.createElement('div');
        novoCard.classList.add('item-resultado');
        novoCard.setAttribute('data-local', local);

        novoCard.innerHTML = `
            <h2 class="local-card">${local}</h2>
            <p class="descricao-meta">${experiencia}</p>
            <h4 class="nome-card">${nome}</h4>
        `;
        
        resultadosPesquisa.insertBefore(novoCard, resultadosPesquisa.firstChild);
    }

    function carregarDadosIniciais() {
        dados.forEach((dado) => {
            criarCard(dado.Local, dado.Experiência, dado.Nome);
        });
    }

    carregarDadosIniciais();

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const local = document.getElementById('local').value;
        const experiencia = document.getElementById('experiencia').value;

        if (nome === '' || local === '' || experiencia === '') {
            alert('Por favor, preencha todos os campos antes de compartilhar.');
            return;
        }

        criarCard(local, experiencia, nome);
        form.reset();
    });

    document.getElementById('btn-buscar').addEventListener('click', function(event) {
        event.preventDefault();

        const busca = document.getElementById('input-busca').value.toLowerCase();
        const cards = document.querySelectorAll('.item-resultado');

        cards.forEach(function(card) {
            const local = card.getAttribute('data-local').toLowerCase();

            if (local.includes(busca) || busca === '') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
