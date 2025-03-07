const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
  ctx.reply("Готов сбежать от армии?", {
    reply_markup: {
      inline_keyboard: [[{ text: "Играть", callback_game: {} }]],
    },
  });
});

bot.on("callback_query", (ctx) => {
  if (ctx.callbackQuery.game_short_name === "army_club") return;
  if (ctx.callbackQuery.data) {
    const choice = ctx.callbackQuery.data;
    if (choice === "run") ctx.reply("Ты решил бежать! Удачи!");
    else if (choice === "hide") ctx.reply("Ты спрятался. Надеюсь, тебя не найдут!");
  }
});

module.exports = async (req, res) => {
  try {
    await bot.handleUpdate(req.body);
    res.status(200).send("OK");
  } catch (error) {
    console.error(error);
    res.status(500).send(`Error: ${error.message}`);
  }
};