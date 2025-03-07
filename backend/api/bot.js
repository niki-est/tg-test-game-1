const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN || "default");
console.log("Bot token:", process.env.BOT_TOKEN);

bot.command("start", (ctx) => {
  console.log("Start from:", ctx.from.id);
  ctx.reply("Готов сбежать от армии?", {
    reply_markup: {
      inline_keyboard: [[{ text: "Играть", callback_game: { game_short_name: "army_club" } }]],
    },
  });
});

bot.on("callback_query", (ctx) => {
  console.log("Callback:", ctx.callbackQuery);
  if (ctx.callbackQuery.game_short_name === "army_club") return;
  if (ctx.callbackQuery.data) {
    const choice = ctx.callbackQuery.data;
    console.log("Choice:", choice);
    if (choice === "run") ctx.reply("Ты решил бежать! Удачи!");
    else if (choice === "hide") ctx.reply("Ты спрятался. Надеюсь, тебя не найдут!");
  }
});

module.exports = async (req, res) => {
  console.log("Request body:", JSON.stringify(req.body, null, 2));
  if (!req.body) {
    console.log("No body received");
    res.status(400).send("No body");
    return;
  }
  try {
    await bot.handleUpdate(req.body);
    res.status(200).send("OK");
  } catch (error) {
    console.error("Error:", error.stack);
    res.status(500).send(`Error: ${error.message}`);
  }
};