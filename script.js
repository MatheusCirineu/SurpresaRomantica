function createHeart(event) {
  // Criar o elemento coração
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Posição onde o clique ocorreu
  const x = event.clientX;
  const y = event.clientY;

  // Ajustar a posição do coração para onde o usuário clicou
  heart.style.left = `${x - 25}px`; // -25px para centralizar o coração no clique (meia largura do coração)
  heart.style.top = `${y - 25}px`; // -25px para centralizar o coração no clique (meia altura do coração)

  // Tamanho fixo para todos os corações
  heart.style.width = "50px";
  heart.style.height = "50px";

  // Adicionar o coração ao container de corações
  document.getElementById("hearts").appendChild(heart);

  // Remover o coração depois de 4 segundos (duração da animação)
  setTimeout(() => heart.remove(), 4000);
}

// Adicionar o evento de clique no body
document.body.addEventListener("click", createHeart);
