const botao = document.getElementById("btnCarta");
const mensagem = document.getElementById("mensagem");
const container = document.querySelector(".coracoes-container");
const clicar = document.querySelector(".clique");
const sim = document.getElementById("OPCAO1");
const nao = document.getElementById("OPCAO2");
const conmemoracao = document.getElementById('conmemorar');
const conmemoracao2 = document.getElementById('conmemorar2');

botao.addEventListener("click", () => {

    if (mensagem.style.display === "block") {
        mensagem.style.display = "none";
         clicar.style.animationPlayState = 'running';
        botao.textContent = "Abrir Carta 💌";
    } else {
        mensagem.style.display = "block";
        botao.textContent = "Fechar Carta 💖";
        clicar.style.animationPlayState = 'paused';
        soltarCoracoes();
    }
});

function soltarCoracoes() {
    for (let i = 0; i < 15; i++) {
        const coracao = document.createElement("span");
        coracao.classList.add("coracao");
        coracao.innerHTML = "💕";

        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.animationDuration = 2 + Math.random() * 2 + "s";

        container.appendChild(coracao);

        setTimeout(() => {
            coracao.remove();
        }, 4500);
    }
}

sim.addEventListener('click', () => {
  if (sim.checked) {
    nao.checked = false;
    conmemoracao.style.display = 'block';
    conmemoracao2.style.display = 'none';
  }else{
     conmemoracao.style.display = 'none'
  }
});

nao.addEventListener('click', () => {
  if (nao.checked) {
    sim.checked = false;
    conmemoracao2.style.display = 'block';
     conmemoracao.style.display = 'none';
  }else{
    conmemoracao2.style.display = 'none';
  }
});


