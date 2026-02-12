const botao = document.getElementById("btnCarta");
const mensagem = document.getElementById("mensagem");
const container = document.querySelector(".coracoes-container");
const clicar = document.querySelector(".clique");
const conmemora = document.getElementById("Conmemoracao")
const conmemoracao = document.getElementById('conmemorar');
const foto = document.querySelector(".img");

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

conmemora.addEventListener("click",() =>{

    if(conmemoracao.style.display ==="block"){
      conmemoracao.style.display = "none";
      foto.style.animationPlayState = 'running'
      conmemora.textContent = "💖";
    }else{
      conmemoracao.style.display ="block";
      conmemora.textContent ="😍😍"
      foto.style.animationPlayState = 'paused'
    }

})

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




