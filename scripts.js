const btnContato = document.querySelector(".btn-secondary");
const cards = document.querySelectorAll(".card");

btnContato.addEventListener("click", function () {
  alert("Você pode falar comigo pelo LinkedIn ou GitHub!");
});

function mostrarCards() {
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);
  });
}

window.addEventListener("load", mostrarCards);