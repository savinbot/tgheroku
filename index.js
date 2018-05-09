const TelegramBot = require("node-telegram-bot-api");
const token = "552905592:AAFCbkNfdc2zn7ABBv7T1dKAg7RJuXOhC78";
const bot = new TelegramBot(token, {polling: true});

bot.on('message', msg=>{
    bot.sendMessage(msg.chat.id, "Hello");
})
