const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        DesselecionarBotao();

        botao.classList.add('selecionado');

        DesselecionarPersonagem();

        personagens[indice].classList.add('selecionado');
    })
})
function DesselecionarPersonagem() {
    const personagemselecionado = document.querySelector('.personagem.selecionado');
    personagemselecionado.classList.remove('selecionado');
}

function DesselecionarBotao() {
    const botaoselecionado = document.querySelector('.botao.selecionado');
    botaoselecionado.classList.remove('selecionado');
}

