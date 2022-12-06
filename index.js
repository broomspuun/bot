const {Telegraf, Markup } = require('telegraf');
require('dotenv').config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start(async (ctx) =>{
    try{
    ctx.replyWithHTML('Привет, добро пожаловать в бота, в нем ты узнаешь:', Markup.inlineKeyboard(
        [
        [Markup.button.callback('Победы ЯрГУ', 'btn_1')],
        [Markup.button.callback('Подать документы', 'btn_2')],
        [Markup.button.callback('Наука', 'btn_3')],
        [Markup.button.callback('Факультеты', 'btn_4')],
        [Markup.button.callback('Сложность учёбы', 'btn_5')],
        [Markup.button.callback('Для иногородних', 'btn_6')],
        [Markup.button.callback('Студенческая жизнь', 'btn_7')],
        [Markup.button.callback('Моё хобби в ЯрГУ', 'btn_8')],
        [Markup.button.callback('Расскажи мне что-то про ВУЗ', 'btn_9')],
        [Markup.button.callback('Факультеты', 'btn_10')]
        ]
    )) 
    }
    catch(e){
        console.error(e)
    }
})

bot.help((ctx) => ctx.reply(text.commands));

function addActionBot(name,src,text)
{
    bot.action(name , (ctx)=>{
        try{
            ctx.answerCbQuery()
            if(src!== false){
                ctx.replyWithPhoto({source:src})
            }
            ctx.replyWithHTML(text,{disable_web_page_preview: true})
        }
        catch(e)
        {
    
        }
    
    })
}

bot.action('btn_8' , (ctx)=>{
    try{
        ctx.editMessageText('Про хобби:', { 
            reply_markup : Markup.inlineKeyboard(
            [
            [Markup.button.callback('Спортивное направление', 'btn_11')],
            [Markup.button.callback('Вокальное направление', 'btn_12')],
            [Markup.button.callback('Чирлидинг', 'btn_13')],
            ]
        )}) 
    }
    catch(e)
    {

    }

})

addActionBot('btn_1',false,'Что-то про победы')
addActionBot('btn_2',false,'Что-то про подачу документов')
addActionBot('btn_3',false,'Что-то про науку')
addActionBot('btn_4',false,'Что-то про факультеты')
addActionBot('btn_5',false,'Что-то про сложность учёбы')
addActionBot('btn_6',false,'Что-то для иногородних')
addActionBot('btn_7',false,'Что-то про студенческую жизнь')
addActionBot('btn_9',false,'Что-то про ВУЗ')
addActionBot('btn_10',false,'Что-то про факультеты')
addActionBot('btn_11',false,'Что-то про спорт')
addActionBot('btn_12',false,'Что-то про вокал')
addActionBot('btn_13',false,'Что-то про чирлидинг')

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM')); 