const TelegramBot = require("node-telegram-bot-api");
const token = "552905592:AAFCbkNfdc2zn7ABBv7T1dKAg7RJuXOhC78";
const bot = new TelegramBot(token, {polling: true});

grandMenu();

bot.on('message', msg=>{
    bot.sendMessage(msg.chat.id, "ranger");
})

bot.onText(/\/start/, msg=>{
    bot.sendMessage(msg.chat.id, "Головне меню", replyKeyBoard("main"));
})

function grandMenu() {
    bot.on("message", (msg)=>{
        switch (msg.text) {
            case 'Повернутись до головного': 
                bot.sendMessage(msg.chat.id, "Головна", replyKeyBoard("main"));
                break;
            case "Меню":
                bot.sendMessage(msg.chat.id, "Меню", inlineKeyBoard("menu"));
                break;
            case "Teetto :)":
                teetto(msg);
                break;
            case "Profile":
                profile(msg);
                break;
            case "All stats":
                allStats(msg);
                break;
            case "Send proffer":
                proffer(msg);
                break;
            case "Stats":
                stats(msg);
                break;
            case "Last image":
                lastImg(msg);
                break;
            case "Edit contact":
                bot.sendMessage(msg.chat.id, "Enter new contact");
                editContact(msg);
                break;
        }
    })
}


function replyKeyBoard(param) {
    let keys;
    let keyboard;
    if (param == "main") {
        keys = JSON.stringify({
            keyboard: [
                [
                    {text: "Корзина"}
                ], [
                    {text: "Меню"}
                ], [
                    {text: "Профіль"}
                ], [
                    {text: "Звязок з нами"}
                ]
            ],
            resize_keyboard: true
        });
        keyboard = {reply_markup: JSON.parse(keys)};
    }
    if (param == "onmain") {
        keys = JSON.stringify({
            keyboard: [
              [
                {text: "Повернутись до головного"}
              ]
            ],
            resize_keyboard: true
        });
        keyboard = {reply_markup: JSON.parse(keys)};
    }
    return keyboard;
} 
function inlineKeyBoard(param, food) {
    let keys;
    let keyboard;
    if (param == "cart") {
      keys = {
        inline_keyboard: [
          [{text: 'Очистити', callback_data: "Очистити"}, {text: 'Замовити', callback_data: 'Замовити'}],
        ]
      }
      keyboard = {
        reply_markup: JSON.stringify(keys)
      }
    }
    if (param == "sushi") {
      keys = {
        inline_keyboard: [
          [{text: 'Очистити', callback_data: "Очистити"}, {text: 'Замовити', callback_data: 'Замовити'}],
        ]
      }
      keyboard = {
        reply_markup: JSON.stringify(keys)
      }
    }
    if (param == "menu") {
      keys = {
        inline_keyboard: [
          [{text: 'Суші', callback_data: "Суші"}, {text: 'Піца', callback_data: 'Піца'}],
          [{text: 'Салати', callback_data: "Салати"}, {text: 'Супи', callback_data: 'Супи'}],
          [{text: 'Напої', callback_data: "Напої"}, {text: 'Десерти', callback_data: 'Десерти'}]
        ]
      }
      keyboard = {
        reply_markup: JSON.stringify(keys)
      }
    }
    if (param == "pageKeys") {
      keys = {
        inline_keyboard: [
          [{text: '-1', callback_data: JSON.stringify({name: '-1', isMinus: true})}, {text: 'Кількість', callback_data: ' '},{text: '+1', callback_data: JSON.stringify({name: '+1', isPlus: true})}],
          [{text: 'Додати до корзини', callback_data: ' '}]
        ]
      }
      keyboard = {
        reply_markup: JSON.stringify(keys)
      }
    }
  
    return keyboard;
}