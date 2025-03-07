const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
  console.log("Received /start from:", ctx.from.id);
  ctx.reply("Готов сбежать от армии?", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Играть",
            callback_game: {
              game_short_name: "army_club", // Укажи short_name игры
            },
          },
        ],
      ],
    },
  });
});

bot.on("callback_query", (ctx) => {
  console.log("Callback query:", ctx.callbackQuery);
  if (ctx.callbackQuery.game_short_name === "army_club") {
    console.log("Game opened: army_club");
    return;
  }
  if (ctx.callbackQuery.data) {
    const choice = ctx.callbackQuery.data;
    console.log("Choice:", choice);
    if (choice === "run") ctx.reply("Ты решил бежать! Удачи!");
    else if (choice === "hide") ctx.reply("Ты спрятался. Надеюсь, тебя не найдут!");
  }
});

module.exports = async (req, res) => {
  console.log("Received request body:", req.body);
  try {
    await bot.handleUpdate(req.body);
    res.status(200).send("OK");
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).send(`Error: ${error.message}`);
  }
};