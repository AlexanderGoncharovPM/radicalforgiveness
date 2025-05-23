const questions = [
  {
    "id": "name",
    "text": "Введіть повне ім’я, яким ви себе називаєте",
    "type": "text",
    "example": "Олександр, Ірина"
  },
  {
    "id": "target",
    "text": "Додайте причину занепокоєння… Ім’я або об’єкт, на який спрямовані ваші претензії",
    "type": "text",
    "note": "Це може бути людина, ситуація або емоція, що викликала біль (це може будь шо, що тебе бентежить)",
    "example": "Олег, Ремонт в квартирі, моя машина, бабуся, орк…. Напиши щось одне…"
  },
  {
    "id": "your_storry",
    "text": "Розкажіть свою історію… Ситуація, що викликала моє невдоволення. Як я сприймаю її зараз:",
    "type": "textarea",
    "note": "Примітка: Розкажіть свою історію з позиції жертви . Напишіть у цьому розділі як можна більше . Постарайтеся досягти такого стану , коли протягом 1 хв нічого вже не захочеться написати . Перелічіть якості або властивості характеру вашого кривдника, які вам не подобаються і вказують на те, що він далекий від досконалості."
  },
  {
    "id": "i_am_angry",
    "text": "Розкажіть що Ви відчуваєте...",
    "type": "textarea",
    "note": "Примітка: Не соромлячись у виразах , висловіть претензії своєму кривднику, якби пишете йому гнівний лист. В цьому розділі також постарайтеся написати як можна, можливо більше",
    "example": "Я серджуся на тебе, {{target}} за те, що ти … не повністю щирий, щось<br>скриваєш, десь пропадаєш, хитрий, постійно хочеш використати, а не<br>допомогти"
  },
  {
    "id": "real_emotions",
    "text": "Твоя поведінка викликає у мене (визначте тут свої справжні емоції):",
    "type": "textarea",
    "note": "Примітка: Визначте та перерахуйте тут свої справжні емоції.",
    "example": "Через те, що ти здійснив , я відчуваю злість, напругу, невпевненість,<br>зневагу."
  },
  {
    "id": "acceptance_level",
    "text": "Визнаємо власну людську природу. Я з любов`ю визнаю і приймаю свої почуття і більше не засуджую їх. Я маю право на свої почуття . Я люблю себе за те, що відчуваю їх.",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ],
    "note": "<p><strong>Примітка:</strong> Виберіть один із варіантів відповіді відповідно до того, наскільки ваш розум готовий погодитися з даними твердженнями. Будьте чесні самі із собою. Не бійтеся ставити позначку «Не готовий».</p><br><p><strong>Примітка:</strong> Цей важливий крок допоможе вам якоюсь мірою звільнитися від переконання, що такі почуття, як гнів, мстивість, ревнощі, заздрість і навіть засмучення — погані та їх слід заперечувати у собі.</p><br><p>Які б не були ваші емоції, ви повинні відчути їх саме в тому вигляді, в якому вони виникають, бо почуття є проявами вашого істинного Я. Ваша душа хоче відчути їх повною мірою.</p><br><p>Знайте, що всі емоції досконалі, і припиніть судити себе за те, що такі чи інші емоції у вас є.</p>",
    "hints_from": [
      "real_emotions"
    ]
  },
  {
    "id": "integration_readiness",
    "text": "Спробуйте інтегрувати та прийняти свої почуття за допомогою наступного трьохкрокового процесу:<br><ol><br><li><strong>Крок 1:</strong> Відчуйте почуття повною мірою, а потім ідентифікуйте його: що це – злість, радість, смуток, страх або щось інше?</li><br><li><strong>Крок 2:</strong> Дозвольте цим почуттям бути. Дайте їм місце та простір. Намагайтеся прийняти їх. Це ваші почуття – полюбіть їх як частину себе.</li><br><li><strong>Крок 3:</strong> Визнайте в них досконалість. Неможливо піднятися до вібрацій радості, якщо ви не приймете свої почуття і не помиріться з ними.</li><br></ol><br><p><strong>Аффірмація:</strong> «Я прошу підтримки, щоб полюбити всі свої почуття, прийняти їх як частину себе, дати їм місце та простір у своєму житті»</p>",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ],
    "hints_from": [
      "real_emotions"
    ]
  },
  {
    "id": "self_love_readiness",
    "text": "Тепер відчуйте любов до себе за те, що ви відчуваєте ці почуття, тому що Ви вирішили випробувати їх, щоб направити свою енергію до зцілення.",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ],
    "hints_from": [
      "real_emotions"
    ]
  },
  {
    "id": "emotional_ownership",
    "text": "Я – господар своїх почуттів. Ніхто не може змусити мене відчувати будь-що. Мої відчуття – це відображення того, як я бачу ситуацію.",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ],
    "note": "<p><strong>Примітка:</strong> Це твердження нагадує нам про те, що ніхто не може змусити нас відчувати що б то не було. Наші емоції належать нам.</p><br><p>Коли людина відчуває, визнає, приймає та любить свої емоції без жодних додаткових умов, вона тим самим знаходить повну свободу залишити їх при собі або відпустити.</p><br><p>Усвідомлення цього робить нас сильнішими, оскільки допомагає зрозуміти, що джерело проблеми знаходиться не у зовнішньому світі, а всередині нас самих.</p><br><p>І ще — це усвідомлення є нашим першим кроком відійти від вібрацій архетипу жертви.</p><br><p>Вважаючи, що інші люди або навіть ситуації здатні викликати в нас злість, радість, смуток або страх — ми тим самим віддаємо їм усю свою силу.</p>",
    "hints_from": [
      "your_storry",
      "real_emotions"
    ]
  },
  {
    "id": "soul_growth_acceptance",
    "text": "Хоча мені не відомо, як і чому це відбувається, але я тепер розумію, що моя душа створила цю ситуацію для мого навчання та зростання.",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ]
  },
  {
    "id": "keys",
    "text": "Я бачу у своєму житті деякі ключі, – а саме що ці ситуації повторюються, а також інші «збіги» – які вказують на те, що в мене вже було багато можливостей зцілитися, яких я свого часу не помітив",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ]
  },
  {
    "id": "mission",
    "text": "Я визнаю, що моя місія, або «контракт душі», включає себе цей досвід – і на те є певні причини, які мені знати не обов'язково.",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ]
  },
  {
    "id": "expected_changes",
    "text": "Перелічіть свідчення про те, що ви хотіли, щоб {{target}} змінився: щоб ви хотіли змінити в {{target}} , свої очікування, яким би ви хотіли щоб {{target}} був, або які якості характеру {{target}}  мав, щоб змінити кривдника та ситуацію в цілому",
    "type": "textarea",
    "example": "Так, Я хотів щоб ти краще управляв проектом, розмовляв з людьми був справжнім лідером<br>Так, Я хотів щоб ти не виходив за рамки погодженого бюджету і грав по правилах<br>Так, я хотів би щоб ти був більш зрілим та проявляє повагу, не ставився би до мене зневажливо просячі зневажливі речі",
    "hints_from": [
      "i_am_angry"
    ]
  },
  {
    "id": "judgment_awareness",
    "text": "Я визнаю, що моє невдоволення цією ситуацією послужило мені сигналом, що я позбавляв себе і {{target}} любові, - що виявилося в осуді, невиправданих очікуваннях, бажанні, щоб {{target}} змінився, і в думці, нібито {{target}} недосконалий.",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ],
    "note": "<p><strong>Примітка:</strong> Зверніть увагу на те, скільки з цих суджень та очікувань ви могли б висловити (адресувати) самому собі.</p><br><p><strong>Примітка:</strong> Коли ми відчуваємо, що втрачаємо з людиною зв'язок, ми не можемо його любити. Коли ми засуджуємо людину (або себе) і стверджуємо, ніби він неправий, ми позбавляємо його (або себе) любові. Навіть тоді, коли ми стверджуємо, що людина права, ми все одно позбавляємо його любові, оскільки ставимо свою любов в залежність від його правоти.</p><br><p>Будь-які спроби змінити когось пов'язані з позбавленням любові, оскільки наше бажання змінити людину має на увазі, що він чогось неправий (і потребує змінитися).</p><br><p>Більше того, ми здатні навіть заподіяти людині шкоди, щоб підштовхнути його до змін. Адже навіть діючи з найкращих спонукань, ми своїм втручанням можемо зірвати його духовний урок, перешкодити місії, загальмувати його розвиток.</p><br><p>Все це набагато тонше, ніж ми думаємо. Наприклад, якщо ми бачимо, що людина хвора, і посилаємо їй непрошену цілющу енергію — ми тим самим складаємо судження, що з людиною щось не в порядку, і вона не повинна бути хворою. А хто дав нам право приймати таке рішення?</p><br><p>Можливо, хвороба — саме той досвід, який необхідний цій людині для духовного зростання. Дійсно, якщо людина просить про зцілення, то це цілковито інша справа — і ми маємо право зробити все від нас залежне, щоб виконати її прохання.</p><br><p>І не вважати людину недосконалою — саме це і є досконалість у людині і в усьому, що з нею відбувається.</p><br><p>Отже, у цій графі вам потрібно написати про всі якості або властивості характеру, які ви би хотіли в ньому змінити. Згадайте про ледве вловимі засудження на адресу цієї людини, які свідчать про ваше небажання прийняти її такою, якою вона є. Згадайте, як ви засуджували її поведінку.</p><br><p>Можливо, ви здивуєтеся, виявивши, що ваше обумовлене самими добрими намірами бажання допомогти людині заради її ж блага — насправді представляє собою всього лише осуд з вашої сторони.</p><br><p>Якщо хочете знати правду, саме ваш осуд створює в людині опір до змін. Вам варто відпустити цей осуд — і ймовірно, тоді людина зміниться. Смішно, чи не так?</p><br><p>Це твердження допоможе вам усвідомити, що мир і гармонія часто засновані на вашій здібності любити, що б то не було, таким, яке воно є. Принаймні, почавши звідси, ви зможете легко здійснити необхідну зміну, виходячи з глибокого внутрішнього спокою.</p>",
    "hints_from": [
      "your_storry"
    ]
  },
  {
    "id": "resonans",
    "text": "Я розумію, що засмучуюсь тільки тоді, коли хтось потрапляє в резонанс з тими аспектами моєї сутності, які я в собі заперечую, витісняю та проектую на інших людей.",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ]
  },
  {
    "id": "broke_our_history",
    "text": "Руйнуємо свою стару історію. Беручи до уваги лише факти та нічого більше , я розумію  щоб глибше пережити цей досвід , моя душа створила для мене з цієї події, історію більш значну, ніж воно насправді​ є . Тепер , коли вигадана історія виконала своє завдання, я відпускаю енергію, пов'язану з нею, відокремлюючи ФАКТИ від надуманих мною ІНТЕРПРЕТАЦІЙ.",
    "type": "textarea",
    "note": "Перерахуйте головні інтерпретації і обведіть рівень емоцій, який ви відчуваєте ЗАРАЗ.",
    "example": "Факт:  Дуже прямий<br>Інтерпретації :<br>Підйобує  60%<br>Просить зневажливі речі 70%<br>Скриває щось  70%",
    "hints_from": [
      "i_am_angry"
    ]
  },
  {
    "id": "limiting_beliefs",
    "text": "Негативні переконання , які пов'язані з цією або попередніми історіями або підживлюють мою історію (додайте, або скопіюйте з примітки, те що Вам відгукується):",
    "type": "textarea",
    "note": "<ul><br><li>у мені якась вада</li><br><li>небезпечно бути самим собою</li><br><li>мені ніколи нічого не дістається</li><br><li>мене завжди кидають</li><br><li>небезпечно висловлювати свою думку</li><br><li>краще би я народився дівчинкою / хлопчиком</li><br><li>скільки би я не намагався, вони все одно будуть незадоволені мною</li><br><li>я ніколи не буду достатньо гарним</li><br><li>життя несправедливе</li><br><li>погано / небезпечно бути сильним / успішним / багатим / товариським / іншим</li><br><li>я не заслуговую нічого гарного</li><br><li>я не гідний кохання</li><br><li>я повинен слухатися і терпіти</li><br><li>інші важливіші, ніж я</li><br><li>я самотній</li><br><li>ніхто не любитиме мене</li><br><li>ніхто не хоче мене</li><br><li>я непривабливий</li><br><li>я не цікавий</li><br><li>я аморальний</li><br><li>ніколи не буває так, як я хочу</li><br><li>у мене нічого не виходить</li><br><li>я неталановитий</li><br><li>я недостатньо розумний, щоб бути успішним</li><br><li>я не достатньо професійний</li><br><li>я гідний лише бути обслугою</li><br><li>я слабкий та вразливий</li><br><li>я нікому не потрібен</li><br><li>мене завжди враховують в останню чергу або зовсім виключають</li><br><li>я ні для кого не важливий</li><br><li>ніхто мені ніколи не допомагає</li><br></ul>",
    "example": "я повинен слухатися і терпіти ;<br>я не достаньо професійний<br>я гідний лише бути обслугою"
  },
  {
    "id": "projection_healing",
    "text": "Тепер я розумію, що моя душа сприяла створенню цих переконань для того, щоб посилити моє почуття відокремлення, щоб я міг відчути його більш глибоко для мого духовного зростання. Оскільки тепер я починаю пригадувати істину про те, хто я є насправді, я даю собі дозвіл відпустити ці почуття і тепер посилаю любов і вдячність собі і {{target}} за створення цього досвіду духовного зростання.",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ],
    "note": "Значення цього кроку полягає в тому, що він допомагає вам уникнути способу мислення жертви та побачити можливість , що людина , факт чи ситуація , що стала причиною вашої проблеми , в точності відображає ту частину вас самих, яку ви відкинули , і тепер вона волає про прийняття ."
  },
  {
    "id": "real_brain",
    "text": "Помічаємо збіги та закономірності і бачимо в них досконалість . Я визнаю, що мій Духовний Розум і в минулому створював ситуації, подібні в обставинах та почуттях з цією історією , щоб посилити емоційне переживання відокремлення , як цього й хотіла моя душа. Я бачу у своєму житті деякі ключі, що повторюються, ситуації та інші « збіги », – які вказують на те, що У МЕНЕ БУЛО БАГАТО МОЖЛИВОСТЕЙ ЗЦІЛЕННЯ, які я в свій час не помітив . Хоча мені невідомо, як і чому це відбувається, я розглядаю їх як доказ того, що душа створила і нинішню особливу ситуацію для мого навчання і зростання.",
    "type": "textarea",
    "note": "Перерахуйте схожі історії або події, коли Ви відчували те ж саме (що і п. 1.3) і відзначте загальні елементи в них",
    "example": "Мудрік використовува мене в школі<br>Тушняк ставив задачі які не входили в мої обов'язки<br>Рома обідив мою кохану<br>Батя не питає про мої успіхи<br>Міша за те що задає дурні питання<br>Санич за те що плужить<br>Артем за те що бля так пританцьовує і дивишся і нудиш своїми речами<br>Саня, що бля виникають ситуації якоїсь напруги коли ми наодинці, що ні про шо поговорити<br>Женя, за хитрий і підступну манеру розмови",
    "hints_from": [
      "real_emotions",
      "limiting_beliefs"
    ]
  },
  {
    "id": "projection_healing",
    "text": "Помічаємо проекцію та повертаємо її. Розриваємо контракт. Тепер я розумію, що засмучуюсь тільки тоді, коли хтось потрапляє в резонанс з тими моїми рисами, які я в собі заперечую, витісняю, придушую і дзеркалю на інших людей. Тепер я розумію прислів'я: «Що нас дратує в інших, те є в нас самих». Я дякую тобі {{target}} за готовність стати дзеркалом мого хибного сприйняття та  за те, що ти дав мені можливість вибачити і прийняти​ себе таким, яким я є.",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ],
    "hints_from": [
      "broke_our_history",
      "real_brain"
    ]
  },
  {
    "id": "shadow_integration",
    "text": "{{target}} відображає те, що мені потрібно полюбити і прийняти в собі. Я дякую тобі {{target}} за цей дар. Зараз я готова(ий) взяти назад свою проекцію і визнати ці риси як частину моєї тіньової сторони. Я люблю і приймаю цю частину себе. Пробачаючи {{target}} я зцілююсь і створюю для себе нову реальність .",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ],
    "hints_from": [
      "broke_our_history"
    ]
  },
  {
    "id": "dance",
    "text": "Хоча мені поки що не зрозуміло, як і навіщо це відбувається, я усвідомлюю, що ми обидва отримали те, що кожен з нас вибрав на підсвідомому рівні. Ми разом танцювали цей танець зцілення, що б привести кожного з нас в стан пробудженої свідомості.",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ]
  },
  {
    "id": "ready",
    "text": "Тепер я розумію, що ніякі дії  {{target}}  не є ні поганими, ні хорошими. Я відмовляюся від потреби звинувачувати тебе чи когось іншого, і також від потреби відчувати правоту в цій ситуації. Я ГОТОВА(ИЙ) побачити досконалість в події, так як воно є.",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ]
  },
  {
    "id": "soul_contract_release",
    "text": "Я готовий побачити те, що моя місія або контракт душі з певної причини включали в себе переживання, подібні до цих. Якщо це послужить для найвищого блага нас обох, я звільняю тебе і себе від цього контракту. Я ГОТОВИЙ І ХОЧУ РОЗІРВАТИ СВІЙ КОНТРАКТ З {{target}}. Я відпускаю зі своєї свідомості всі ці почуття ...",
    "type": "textarea",
    "note": "Перерахуйте їх з підказки",
    "example": "Я відпускаю з свого свідомості всі ці почуття : злість, напругу, невпевненість, зневагу.",
    "hints_from": [
      "real_emotions"
    ]
  },
  {
    "id": "new_story",
    "text": "Тепер я усвідомлюю , що Усе пережите мною ( історія жертви ) було точним відображенням мого нездорового сприйняття ситуації . Тепер я розумію , що можу змінити цю « реальність », просто виявивши бажання побачити у цій ситуації досконалість .",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ],
    "hints_from": [
      "your_storry",
      "i_am_angry"
    ]
  },
  {
    "id": "core_belief_reflection",
    "text": "Відтворюємо свою історію . Історія в пункті 1 була вашою історією образи, заснованої на старому баченні ситуації. Тепер постарайтеся побачити ту ж саму історію з позиції Радикального Прощення, ґрунтуючись на осяяннях, що ви відчули, поки заповнювали цю анкету.",
    "type": "textarea",
    "note": "Примітка. Це можуть бути загальні слова на кшталт того, що ви знаєте, що все абсолютно, або ж твердження, що розповідає, як саме проявилося досконалість у вашій ситуації, якщо ви дійсно це бачите (частіше за все ви не зможете цього зробити). Що марно, так це викладати інтерпретацію того, що сталося, засновану на припущеннях, що беруть початок в людському світі. Відзначте будь-які позитивні зміни в ваших почуттях з приводу цієї ситуації. Тепер я розумію...",
    "example": "Все, що сталося було не більше чим здійсненням Божественного плану . Моє Вище «Я» організувало це заради мого ж духовного зростання, та {{target}} танцював разом зі мною танець зцілення , так що насправді нічого поганого не сталося . {{target}} віддзеркалив мою тіньову сторону, яку я приховував від інших і від самого себе.<br>Це те, що:<br>Я теж бажаю від інших більше ніж іх обов'язки<br>Я теж ображав<br>Я теж не цікавлюся успіхами батька<br>Я теж іноді задаю  дурні питання<br>Я теж плужу періодично<br>У мене теж є свій стиль<br>Я теж з неохотою впускаю в своє оточення<br>Я теж часто ставлю свої інтереси вище інших",
    "hints_from": [
      "your_storry",
      "i_am_angry"
    ]
  },
  {
    "id": "stackholders_forgiveness",
    "text": "Додайте або скопіюйте з примітки ваші хибні переконання<br>Тепер я розумію , що {{target}} просто віддзеркалив моє хибне переконання в те, що:",
    "type": "textarea",
    "note": "Тим самим  {{target}}  подарував мені можливість зцілитися .  {{target}}  любить мене настільки сильно, що готовий був терпіти дискомфорт, пов'язаний із  необхідністю розіграти для мене цю неприємну ситуацію .",
    "example": "Тепер я розумію , що {{target}} просто віддзеркалив моє хибне переконання в те, що:<br>я повинен слухатися і терпіти ;<br>я не достаньо професійний<br>я гідний лише бути обслугою",
    "hints_from": [
      "limiting_beliefs"
    ]
  },
  {
    "id": "core_belief_reflection2",
    "text": "Пробачаючи {{target}} я пробачаю не тільки його, а також учасників інших подібних ситуацій , а саме :<br>Додайте або скопіюйте з примітки ваші хибні переконання",
    "type": "textarea",
    "example": "Мудріка зате що використовував мене в школі<br>Тушняка зате що  ставив задачі які не входили в мої обов'язки<br>Рому зате що  обідив мою кохану<br>Батю зате що  не питає про мої успіхи<br>Мішу а зате що задає дурні питання<br>Санича за те що плужить<br>Артема за те що бля так пританцьовує і дивиться і нудить своїми речами<br>Саню, за те що він не знає про що зі мною говорити - що бля виникають ситуації якоїсь напруги коли ми наодинці, що ні про шо поговорити<br>Женю, за хитру і підступну манеру розмови",
    "hints_from": [
      "real_brain"
    ]
  },
  {
    "id": "perfection_situation",
    "text": "Тепер я бачу , що отримав все необхідне для мого зцілення , а {{target}} отримав все необхідне для його зцілення . В цьому відношенні ситуація була досконала , і вона є свідченням того, що моїм  життям управляє дух, а також те, що я любимий»",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ]
  },
  {
    "id": "collective_forgiveness",
    "text": "Робимо остаточну Заяву. Я повністю прощаю себе, {{name}}, і приймаю себе як люблячу, великодушну та творчу особистість. Я звільняюся від будь-якої потреби чіплятися за негативні емоції та ідеї, що несуть в собі обмеження і невдоволення собою. Я відмовляюся направляти свою енергію в минуле і руйную всі перепони, що відокремлювали мене від любові і достатку, якими я володію. Я, творець своїх думок, почуттів і життя, повертаю собі право безумовно любити і підтримувати себе - таким, який я є, у всій моїй величі.",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ],
    "note": "Вимовте це висловлювання вголос і після цього , якщо є можливість , посидить хвилину із закритими очима та відчуйте сказане всім серцем"
  },
  {
    "id": "final_forgiveness",
    "text": "Тепер я віддаю себе у владу Вищої Сили, яку я називаю Абсолютом. Я впевнений в тому, що ця ситуація буде і надалі розвиватися досконалим чином, в згоді з Божественним керівництвом і духовним законом. Я визнаю свою єдність з Джерелом і відчуваю, що я знову повністю з'єднаний з ним. Я повернувся до своєї істинної природи, яка є Любов, і тепер я знову ставлюся до {{target}} з любов'ю. Я закриваю очі, щоб відчути, як через мене тече любов.",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ]
  },
  {
    "id": "self_forgiveness_declaration",
    "text": "Зараз заповнивши цю анкету, я ... повністю прощаю тебе, {{target}}, оскільки тепер бачу, що ти не зробив нічого поганого, і все, що відбулося підпорядковане Божественному порядку. Я дякую тобі, за те, що ти погодився зіграти свою роль в моєму пробудженні. І я пишаюся собою за те, що зіграв роль в твоєму пробудженні. Я визнаю і приймаю тебе таким, який ти є.",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ]
  },
  {
    "id": "spiritual_identity",
    "text": "Я визнаю, що Я є духовною істотою, що проходить уроки в людському тілі. Я люблю і схвалюю себе таким як Я є у всіх своїх людських проявах.",
    "type": "radio",
    "options": [
      "Готовий",
      "Схиляюсь",
      "Сумніваюся",
      "Не готовий"
    ]
  }
];
