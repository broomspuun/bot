const { Telegraf, Markup } = require('telegraf');
require('dotenv').config()


const btn_win = [Markup.button.callback('Победы ЯрГУ🏆', 'btn_win')]
const btn_doc = [Markup.button.callback('Подать документы📂', 'btn_doc')]
const btn_sci = [Markup.button.callback('Наука📚', 'btn_sci')]
const btn_fac = [Markup.button.callback('Факультеты🏛', 'btn_fac')]
const btn_hrd = [Markup.button.callback('Сложность учёбы🚧', 'btn_hrd')]
const btn_aln = [Markup.button.callback('Для иногородних🚴🏻', 'btn_aln')]
const btn_slf = [Markup.button.callback('Студенческая жизнь👨‍🎓', 'btn_slf')]
const btn_hby = [Markup.button.callback('Моё хобби в ЯрГУ🏀', 'btn_hby')]
const btn_abt = [Markup.button.callback('Расскажи мне что-то про ВУЗ📋', 'btn_abt')]
const btn_stp = [Markup.button.callback('Стипендии💰', 'btn_stp')]
const back = [Markup.button.callback('Главное меню🔎', 'back')]


const menu = [btn_win,
    btn_doc,
    btn_sci,
    btn_fac,
    btn_hrd,
    btn_aln,
    btn_slf,
    btn_hby,
    btn_abt,
    btn_stp]


const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start(async (ctx) => {
    try {
        await ctx.reply('Выбери, что тебя интересует: ', Markup.inlineKeyboard(menu))
    }
    catch (e) {
        console.error(e)
    }
})

addAction('back', `Выбери, что тебя интересует: `, menu)

function addAction(nameButton, text, array) {
    bot.action(`${nameButton}`, async (ctx) => {
        try {
            await ctx.deleteMessage()
            await ctx.replyWithHTML(`${text}`, Markup.inlineKeyboard(array))
        }
        catch (e) {
            console.error(e)
        }
    })
}

function addActionPhoto(nameButton, text, photo, array) {
    bot.action(`${nameButton}`, async (ctx) => {
        try {
            await ctx.deleteMessage()
            await ctx.sendPhoto({ source: photo }, {caption: text, parse_mode: "HTML" ,
                reply_markup: Markup.inlineKeyboard(array).reply_markup
            })
        }
        catch (e) {
            console.error(e)
        }
    })
}




//        ПОБЕДЫ ЯРГУ
addAction('btn_win', `ЯрГУ это 😎

⭐ <b>Первая лига</b>, по мнению Гильдии экспертов в сфере профессионального образования. Наивысшие оценки:
📍 в рейтинге по индексу Хирша;
📍 рейтинге мониторинга эффективности вузов;
📍 рейтинге «Оценка качества обучения»;
📍 рейтинге «Международное признание».
Наивысшие оценки в предметных областях: «Юриспруденция», «Психологические науки», Политические науки и регионоведение».
⭐ <b>16 место</b> в Локальном рейтинге вузов Центрального федерального округа
⭐ <b>ТОП-20</b> ВУЗов по зарплате выпускников в IT-сфере💰
⭐ <b>ТОП-30</b> ВУЗов по разработке ПО в РФ
⭐ <b>36 место</b> среди лучших вузов России в сфере информационных технологий
⭐ <b>37 место</b> среди лучших вузов России в естественно-математической сфере`,
    [btn_doc,
        btn_hby,
        back])
//        ПОБЕДЫ ЯРГУ

//        ПОДАТЬ ДОКУМЕНТЫ
addAction(`btn_doc`, `Подать документы :`,
    [[Markup.button.callback('Приёмная комиссия⛩', 'btn_doc_com')],
    [Markup.button.callback('Как можно подать документы?📂', 'btn_doc_how')],
    [Markup.button.callback('Госуслуги💈', 'btn_doc_gos')],
    [Markup.button.callback('Онлайн ЯрГУ📲', 'btn_doc_onl')],
        back])
addAction('btn_doc_com', `Наша приёмная комиссия находится по адресу:
г. Ярославль, ул. Кирова, д. 8/10

Позвони нам!☎
(4852) 30-32-10

`, [[Markup.button.callback('⏪⏪⏪', 'btn_doc')],
    back])
addAction('btn_doc_how', `Узнать, как ещё можно подать документы, ты можешь на <a href="https://www.uniyar.ac.ru/Abitur/abiturientu-2021/podat-zayavleniye-asp-2021.php">сайте ЯрГУ💻</a>`, [
    [Markup.button.callback('⏪⏪⏪', 'btn_doc')],
    back])
addAction('btn_doc_gos', `Ты можешь подать документы через ГОСУСЛУГИ📄
Переходи по <a href="https://www.gosuslugi.ru/vuzonline">ссылке</a> и действуй по шагам!`, [
    [Markup.button.callback('⏪⏪⏪', 'btn_doc')],
    back])
addAction('btn_doc_onl', `Ты можешь подать документы через внутреннюю систему ЯрГУ. Для этого перейди по <a href="https://www.uniyar.ac.ru/Abitur/informatsiya-o-mestakh-priyema-dokumentov-neobkhodimykh-dlya-postupleniya/informatsiya-o-vozmozhnosti-podachi-dokumentov-dlya-postupleniya-na-obuchenie-v-elektronnoy-forme.php">ссылке</a> и действуй дальше!💯`, [
    [Markup.button.callback('⏪⏪⏪', 'btn_doc')],
    back])
//        ПОДАТЬ ДОКУМЕНТЫ



//        НАУКА         
addAction('btn_sci', `Ты найдёшь свой научный интерес! Или уже нашёл?🤗
В любом случае, ты сможешь писать статьи на интересующую тебя тематику и публиковаться (вау!), принимать участие в конференциях. круглых столах и обсуждениях! Пссс, можно кататься в другие города БЕСПЛАТНО🤫
Для крутых - стипуха-а-а-а😎`, [btn_doc, btn_stp, [Markup.button.callback('Cтуденческие научные сообщества по факультетам👩🏾‍🔬', 'btn_sci_com')], back])
addAction('btn_sci_com', `Щёлк!🤝И узнай больше из групп ВК!
<a href="https://vk.com/sno_biofac">СНО Факультета биологии и экологии</a>
<a href="https://vk.com/snopsyyar">СНО Факультета психологии</a>
<a href="https://vk.com/student.research.hist.uniyar">СНО Исторического факультета</a>
<a href="https://vk.com/clubsnoyaroslavl">СНО Юридического факультета</a>
<a href="https://vk.com/ifl_sno">СНО Института иностранных языков</a>
<a href="https://vk.com/snofspn">СНО Факультета социально-политических наук</a>
<a href="https://vk.com/snoffk">СНО Факультета филологии и коммуникации</a>
<a href="https://vk.com/snomath">СНО Математического факультета</a>
<a href="https://vk.com/yarsu_pf_sss">СНО Физического факультета</a>
<a href="https://vk.com/ekonomcno">СНО Экономического факультета</a>`, [[Markup.button.callback('⏪⏪⏪', 'btn_sci')],back])
//        НАУКА



//        ФАКУЛЬТЕТЫ
addAction('btn_fac', `Про факультеты: `, [[Markup.button.callback('Учёт индивидуальных достижений🥇', 'btn_fac_ind')],
[Markup.button.callback('Без ЕГЭ по олимпиадам🥶', 'btn_fac_olp')],
[Markup.button.callback('Биологии и экологии🧬', 'btn_fac_bio')],
[Markup.button.callback('ИВТ👨🏻‍💻', 'btn_fac_ivt')],
[Markup.button.callback('Исторический🔱', 'btn_fac_ist')],
[Markup.button.callback('Математический👨‍🎓', 'btn_fac_mat')],
[Markup.button.callback('Юридический👨‍⚖️', 'btn_fac_yur')],
[Markup.button.callback('Физический☢️', 'btn_fac_phy')],
[Markup.button.callback('Экономический👨🏻‍⚖️', 'btn_fac_eco')],
[Markup.button.callback('Филологии и коммуникации💁‍♀️', 'btn_fac_fil')],
[Markup.button.callback('Психологии🔮', 'btn_fac_psy')],
[Markup.button.callback('Социально-политических наук🏛', 'btn_fac_pol')],
[Markup.button.callback('Институт иностранных языков🧿', 'btn_fac_yaz')],
    back])
addAction('btn_fac_ind', `У нас очень большой список доп.баллов за твои достижения! Ознакомься на <a href="https://www.uniyar.ac.ru/Abitur/abiturientu-2023/bakalavriat/dostizheniya-2023.php">сайте</a> и возвращайся - расскажем ещё!`, [[Markup.button.callback(`⏪⏪⏪`)], back])
addAction('btn_fac_olp', 'Оххх, да тебе повезло! Вкратце и не расскажешь, залетай <a href="https://www.uniyar.ac.ru/Abitur/abiturientu-2023/obshchie-fayly/Приложение%20Д.pdf">сюда</a>!', [[Markup.button.callback(`⏪⏪⏪`)], back])


addActionPhoto('btn_fac_bio', `Проходные баллы в прошлом году📊`, './img/bio.png', [[Markup.button.callback(`⏪⏪⏪`, 'btn_fac')], back])
addActionPhoto('btn_fac_ivt', `Проходные баллы в прошлом году📊`, './img/ivt.png', [[Markup.button.callback(`⏪⏪⏪`, 'btn_fac')], back])
addActionPhoto('btn_fac_ist', `Проходные баллы в прошлом году📊`, './img/ist.png', [[Markup.button.callback(`⏪⏪⏪`, 'btn_fac')], back])
addActionPhoto('btn_fac_mat', `Проходные баллы в прошлом году📊`, './img/mat.png', [[Markup.button.callback(`⏪⏪⏪`, 'btn_fac')], back])
addActionPhoto('btn_fac_yur', `Проходные баллы в прошлом году📊`, './img/yur.png', [[Markup.button.callback(`⏪⏪⏪`, 'btn_fac')], back])
addActionPhoto('btn_fac_phy', `Проходные баллы в прошлом году📊`, './img/phy.png', [[Markup.button.callback(`⏪⏪⏪`, 'btn_fac')], back])
addActionPhoto('btn_fac_eco', `Проходные баллы в прошлом году📊`, './img/eco.png', [[Markup.button.callback(`⏪⏪⏪`, 'btn_fac')], back])
addActionPhoto('btn_fac_fil', `Проходные баллы в прошлом году📊`, './img/fil.png', [[Markup.button.callback(`⏪⏪⏪`, 'btn_fac')], back])
addActionPhoto('btn_fac_psy', `Проходные баллы в прошлом году📊`, './img/psy.png', [[Markup.button.callback(`⏪⏪⏪`, 'btn_fac')], back])
addActionPhoto('btn_fac_pol', `Проходные баллы в прошлом году📊`, './img/pol.png', [[Markup.button.callback(`⏪⏪⏪`, 'btn_fac')], back])
addActionPhoto('btn_fac_yaz', `Проходные баллы в прошлом году📊`, './img/yaz.png', [[Markup.button.callback(`⏪⏪⏪`, 'btn_fac')], back])
bot.launch()
//        ФАКУЛЬТЕТЫ


//        ЧТО-ТО ИНТЕРЕСНОЕ
addActionPhoto('btn_abt', `В 2022 году Ректор ЯрГУ Александр Русаков стал сенатором от Ярославской области в Совете Федерации! Почётно!`, './img/rektor.png', [back])
//        ЧТО-ТО ИНТЕРЕСНОЕ

//        СТИПЕНДИИ
addAction('btn_stp', `В ЯрГУ 100% можно получать стипендии💵
Одна из них это ПГАС. Макс. сумма - 19 000 р.💶, меньше - 15 000 р.💶, мин. сумма - 13 000 р.💶 На Повышенную государственную академическую стипендию может подаваться любой студент у которого хорошо или отлично с оценками за сессию.  Она выплачивается студентам за значимые достижения в учебной, научной, спортивной, общественной и культурно-массовой деятельности.`,
    [
        [Markup.button.callback('Именная стипендия А. Собчака👴🏻', 'btn_stp_sbc')],
        [Markup.button.callback('ПСМ📈', 'btn_stp_psm')],
        [Markup.button.callback('А что еще❓', 'btn_stp_any')],
        back
    ])
addActionPhoto('btn_stp_sbc', ` `, './img/sbc.png', [[Markup.button.callback(`⏪⏪⏪`, 'btn_stp')], back])
addAction('btn_stp_psm', `Если будешь транслировать в соц.сетях своё активное научное студенчество, то можешь получить стипендию "ПСМ: Потенциал, Стремление, Молодость" (от ООО «Завод ПСМ»)
<a href="https://vk.com/wall-108604898_5976">смотри скорее, кто выиграл!</a>`, [[Markup.button.callback(`⏪⏪⏪`, 'btn_stp')], btn_doc, back])
addAction('btn_stp_any', `Использую в Вк хэштег #стипендии@medianos
и найдёшь интересные стипендии!`, [[Markup.button.callback(`⏪⏪⏪`, 'btn_stp')], back])
//        СТИПЕНДИИ

//        СЛОЖНОСТЬ УЧЁБЫ
addAction('btn_hrd', `🤔Сложно ли у нас учиться?
🧐Мои однокурсники подсчитали, что среднее количество пар в день равняется 3
✍️Это 4,5-5 часов учёбы в день.
🕝В остальное время ты свободен!
👇Об обширной научной жизни ЯрГУ узнай по кнопке ниже!
`, [btn_sci, back])
//        СЛОЖНОСТЬ УЧЁБЫ

//        ДЛЯ ИНОГОРОДНИХ
addAction('btn_aln', `❤️‍🔥Эй, друг, ты из другого города! Будем рады видеть! Что хочешь узнать?`, [
    [Markup.button.callback('Общежитие🏩', 'btn_aln_obs')],
    [Markup.button.callback('Проездной💳', 'btn_aln_prz')],
    btn_doc,
    back
])
addActionPhoto('btn_aln_obs', `<a href="https://yandex.ru/maps/-/CCUnY8TjhC">Посёлок Тверицы, ул. Союзная, 141</a>. Находится рядом с 7 корпусом (ул. Союзная, 144, там бывает ИВТ, матфак)

📌 кухня для приготовления пищи🥧
📌 раздельные душевые (м/ж)💦
📌 стиральные машины🌪
📌 комнаты 2-3 человека🧔🏻‍♂️ 🧔🏼‍♂️ 🧔🏽‍♂️
📌 комната для спортивных занятий🎳
📌 2 теннисных стола🏓
📌 спортплощадка с полем для футбола⚽️
📌 волейбольные площадки🏐

📌 Летом 400-500 рублей/месяц📉
📌 Зимой 700-800 рублей/месяц📉

Узнать больше об общежитии в <a href="https://vk.com/obshagayargu">группе в ВК</a>
` , './img/obs.jpg', [
    [Markup.button.callback('Как доехать?🗺', 'btn_aln_obs_how')],
    [Markup.button.callback('Общажное веселье🎉', 'btn_aln_obs_enj')],
    [Markup.button.callback(`⏪⏪⏪`, 'btn_aln')],
    back
])
addAction('btn_aln_obs_how', `⛩Общежитие (ул. Союзная, 141) находится рядом с 7 корпусом (ул. Союзная, 144). Главный корпус ЯрГУ находится в центре города - ул. Советская, д. 14/2
🚌Через дорогу от него ты можешь сесть на автобус 22С 
♻️Этот студенческий автобус курсирует от центра к 7 корпусу и обратно
Из центра ты сможешь добраться к любому корпусу`, [
    [Markup.button.callback('Проездной💳', 'btn_aln_prz')],
    [Markup.button.callback(`⏪⏪⏪`, 'btn_aln_obs')],
    back])
addActionPhoto('btn_aln_obs_enj', `Святилище общажников - ретрозал🎪
🎷  дискотеки📀
🎷  творческие вечера🎭
🎷  ночное ориентирование🚣‍♀️
🎷  киновечер📺
🎷  настольные игры и многое другое!🎲

В качалке можешь создать тело мечты💪
А в теннисном турнире взять своё первенство🥇
`, './img/obs2.png', [
    [Markup.button.callback('Как доехать?🗺', 'btn_aln_obs_how')],
    btn_slf,
    [Markup.button.callback(`⏪⏪⏪`, 'btn_aln_obs')],
    back
])
addActionPhoto('btn_aln_prz', `💳Проездной выдается  один раз на весь период обучения (месячные тарифы с неограниченным количеством поездок).
Не распространяется на студентов очно-заочной и полностью заочной формы обучения.

Оформить электронный проездной билет можно в центральных кассах по адресу: улица Советская, дом 64.
-Проездной на один вид транспорта - 550 рублей.
-Проездной на два вида транспорта - 700 рублей.

Необходимо иметь при себе:
-Паспорт
-Справка из учебной организации
-Деньги
-Заявление на обработку персональных данных
-Ранее оформленный проездной билет (при наличии)
`, './img/prz.jpg', [
    btn_slf,
    [Markup.button.callback(`⏪⏪⏪`, 'btn_aln')],
    back
])
//        ДЛЯ ИНОГОРОДНИХ

//        СТУДЕНЧЕСКАЯ ЖИЗНЬ
addAction('btn_slf', `Даже и не знаю, чего в Демиде больше - учёбы или внеучебной жизни, ха-ха!😆
У нас есть
- Волонтёрский корпус (бесплатно поможешь, поездишь, поешь😂 дерзнёшь - стипуху ПГАС получишь)
- Медиацентр ЯрГУ (стань журналистом или фотографом)
- ТочкаКипения...твоих мозгов 🧠 (место создания стартапов💡, проведения языковых клубов, мастер-классов по бизнесу, блокчейну, надпрофессиональным навыкам, soft-skills, SMM и всему-всему, ух, много!)
- Хакатон-клуб (у твоей команды есть 48 часов на решение кейса от компании твоей мечты - трудоустроишься? :))
- Собственная Лига КВН, ну, кто ещё такой похвастается в городе!
-«Союз студентов» ЯрГУ им. П.Г. Демидова (почувствуй себя реальным организатором областных мероприятий)
- Мафия по классическим правилам ССт ЯрГУ (стань отважным шерифом этого города)
- Школа Проектного Управления (учим тебя вместе со Сбером и экономом подходам к управлению проектами)
- Академия Женского Предпринимательства (девчонки, Светлана Бубнова и эконом приглашают в бизнес-мир, не упускай момент!)
- Студенческая весна (поёшь, танцуешь, играешь в театре или что-то иное? Давай к нам на сцену - возьмём первенство в ежегодном фестивале вместе с тобой!)
- Центр университетского телевидения ЯрГУ (да-да, ТЕЛЕВИДЕНИЯ)
- Неделя первокурсника (знакомим тебя с активной студенческой жизнью, дружище!)
- ШПАтель: школа правовой активности (рассмотришь нормативно-правовые аспекты весело и не по-академически)

И кааааак тебе всё это? Круто, да!`, [btn_doc,
    btn_hby,
    back])
//        СТУДЕНЧЕСКАЯ ЖИЗНЬ

//        МОЁ ХОББИ
addAction('btn_hby', `В ЯрГУ ты можешь продолжать заниматься своими увлечениями и хобби или открыть для себя нечто новое, например, черлидинг!           Выбирай скорее!`, [
    [Markup.button.callback('Вокальное направление📢', 'btn_hby_vkl')],
    [Markup.button.callback('Спортивное направление🤾', 'btn_hby_spt')],
    [Markup.button.callback('Чирлидинг👯', 'btn_hby_chr')],
    [Markup.button.callback('Хор👩‍👩‍👦‍👦', 'btn_hby_hor')],
    back
])
addActionPhoto('btn_hby_vkl', `👄Поешь? И мы поём По средам с  с 16:30 до 18:00 в Центре Патриотического Воспитания (ул. Советская, д.19/11)`, './img/vkl.png', [
    [Markup.button.callback(`⏪⏪⏪`, 'btn_hby')],
    back
])
addActionPhoto('btn_hby_hor', `🙋Неожиданно, да?! Попробуешь себя в хоровом пении? У нас потрясающий хормейстер! Ждёт тебя по вторникам и четвергам в 18.00 на репетиции в главном корпусе (Советская 14/2)`, './img/hor.png', [
    [Markup.button.callback(`⏪⏪⏪`, 'btn_hby')],
    back
])
addActionPhoto('btn_hby_spt', `Посмотри-ка на это разнообразие! Чем занимаешься? Я в волейбол играю!😏`, './img/spt.png', [
    [Markup.button.callback(`⏪⏪⏪`, 'btn_hby')],
    back
])
addActionPhoto('btn_hby_chr', `👯‍♀️Заморское направление для тех, кто готов красиво выступать на соревнованиях!`, './img/chr.png', [
    [Markup.button.callback(`⏪⏪⏪`, 'btn_hby')],
    back
])
//        МОЁ ХОББИ

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM')); 