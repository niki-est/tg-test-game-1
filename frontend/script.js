const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Адаптируем размеры Canvas к разрешению
canvas.width = 400;
canvas.height = 300;

ctx.font = "16px Arial";
ctx.textAlign = "center"; // Центрируем текст
ctx.fillText("Сцена 1: Ты стоишь перед военкоматом.", canvas.width / 2, 50);
ctx.fillText("Что делать?", canvas.width / 2, 80);

const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeBtn = document.getElementsByClassName("close")[0];

function chooseOption(choice) {
  modal.style.display = "block";
  if (choice === "run") {
    modalText.innerText = "Ты решил бежать! Удачи!";
  } else if (choice === "hide") {
    modalText.innerText = "Ты спрятался. Надеюсь, тебя не найдут!";
  }
}

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};