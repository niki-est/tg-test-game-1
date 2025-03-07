const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Адаптируем размеры Canvas к разрешению
canvas.width = 400;
canvas.height = 300;

const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeBtn = document.getElementsByClassName("close")[0];

function chooseOption(choice) {
  modal.style.display = "block";
  if (choice === "run") {
    modalText.innerText = "Ты решил бежать! Удачи!";
  } else if (choice === "hide") {
    modalText.innerText = "Ты спрятался. Но они найдут тебя!";
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