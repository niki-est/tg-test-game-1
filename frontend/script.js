const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Отрисовка сцены
ctx.font = "16px Arial";
ctx.fillText("Сцена 1: Ты стоишь перед военкоматом.", 20, 50);
ctx.fillText("Что делать?", 20, 80);

function chooseOption(choice) {
  if (window.TelegramGameProxy) {
    TelegramGameProxy.sendMessage(choice); // Отправка выбора боту
  } else {
    console.log("Выбор: " + choice); // Для теста вне Telegram
  }
}

// Инициализация Telegram Games
if (window.TelegramGameProxy) {
  TelegramGameProxy.init();
  console.log("Игра запущена в Telegram!");
}