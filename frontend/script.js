const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
ctx.font = "16px Arial";
ctx.fillText("Сцена 1: Ты стоишь перед военкоматом.", 20, 50);
ctx.fillText("Что делать?", 20, 80);

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