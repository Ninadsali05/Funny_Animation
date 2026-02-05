const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";
  result.classList.remove("hidden");

  startPetals();
});

function startPetals() {
  const petalsContainer = document.getElementById("petals");

  setInterval(() => {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerText = "🌸";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (Math.random() * 3 + 3) + "s";

    petalsContainer.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 6000);
  }, 300);
}

