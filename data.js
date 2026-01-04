const products = [{id:1, category:1,
    images:["img/patrul_1.jpg","img/patrul_1.jpg","img/patrul_1.jpg"],
    uk:{name:"Розмальовка Щенячий патруль", desc:"Яскрава дитяча розмальовка з улюбленими героями мультсеріалу «Щенячий патруль». Містить великі чіткі контури персонажів, які зручно розфарбовувати олівцями або фломастерами.", material:"Папір", size:"120x150", quantity:"1 шт", weight:"200 г", price:220},
    ru:{name:"Раскраска Щенячий патруль", desc:"Яркая детская раскраска с любимыми героями мультсериала «Щенячий патруль». Большие четкие контуры персонажей, которые удобно раскрашивать карандашами или фломастерами.", material:"Папір", size:"120x150", quantity:"1 шт", weight:"200 г", price:220}
    },{id:2, category:1,
    images:["img/labubu_1.jpg","img/labubu_1.jpg","img/labubu_1.jpg"],
    uk:{name:"Розмальовка Лабубу Labubu", desc:"Велика розмальовка з багатьма кумедними образами Лабубу на одному аркуші. Персонажі зображені в різних настроях, костюмах і ситуаціях — веселі, милі та трохи бешкетні. Розмальовка виглядає як велика ілюстрація, яку цікаво розфарбовувати довго й поступово, відкриваючи нові деталі. Підійде для дітей і дорослих, які люблять персонажів і творче розслаблення.", material:"Папір", size:"120x150", quantity:"1 шт", weight:"200 г", price:220},
    ru:{name:"Раскраска Лабубу Labubu", desc:"Большая раскраска с множеством забавных образов Лабубу на одном листе. Персонажи изображены в разных настроениях, костюмах и ситуациях — веселые, милые и немного забавные. Раскраска выглядит как большая иллюстрация, которую интересно раскрашивать долго и постепенно, открывая новые детали. Подходит для детей и взрослых, которые любят персонажей и творческое расслабление.", material:"Папір", size:"120x150", quantity:"1 шт", weight:"200 г", price:220}
    },{id:3, category:1,
    images:["img/auto_1.jpg","img/auto_1.jpg","img/auto_1.jpg"],
    uk:{name:"Розмальовка Автомобілі", desc:"Розмальовка з різними автомобілями: легкові машини, спортивні авто, вантажівки та міський транспорт. Чіткі контури й цікаві деталі роблять її зручною для розфарбовування олівцями або фломастерами. Чудово підійде для тих, хто любить машинки.", material:"Папір", size:"120x150", quantity:"1 шт", weight:"200 г", price:220},
    ru:{name:"Раскраска Автомобили", desc:"Раскраска с разными автомобилями: легковые машины, спортивные автомобили, грузовики и городской транспорт. Четкие контуры и интересные детали делают ее удобной для раскрашивания карандашами или фломастерами. Отлично подойдет для тех, кто любит машинки.", material:"Папір", size:"120x150", quantity:"1 шт", weight:"200 г", price:220}
    },{id:4, category:1,
    images:["img/memes_1.jpg","img/memes_1.jpg","img/memes_1.jpg"],
    uk:{name:"Розмальовка Меми", desc:"Опис товару 4", material:"Папір", size:"120x150", quantity:"1 шт", weight:"200 г", price:220},
    ru:{name:"Раскраска 4", desc:"Описание товара 4", material:"Материал", size:"Размер", quantity:"1 шт", weight:"60 г", price:400}
    },{id:5, category:1,
    images:["img/barbie_1.jpg","img/barbie_1.jpg","barbie_1.jpg"],
    uk:{name:"Розмальовка Барбі", desc:"Опис товару 5", material:"Папір", size:"120x150", quantity:"1 шт", weight:"200 г", price:220},
    ru:{name:"Раскраска 5", desc:"Описание товара 5", material:"Материал", size:"Размер", quantity:"1 шт", weight:"90 г", price:500}
    },{id:6, category:1,
    images:["img/pepa_1.jpg","img/pepa_1.jpg","img/pepa_1.jpg"],
    uk:{name:"Розмальовка Cвинка Пепа", desc:"Опис товару 6", material:"Папір", size:"120x150", quantity:"1 шт", weight:"200 г", price:220},
    ru:{name:"Раскраска 6", desc:"Описание товара 6", material:"Материал", size:"Размер", quantity:"1 шт", weight:"125 г", price:600}
    },{id:7, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Розмальовка 7", desc:"Опис товару 7", material:"Папір", size:"120x150", quantity:"1 шт", weight:"200 г", price:220},
    ru:{name:"Раскраска 7", desc:"Описание товара 7", material:"Материал", size:"Размер", quantity:"1 шт", weight:"150 г", price:700}
    },{id:8, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Розмальовка 8", desc:"Опис товару 8", material:"Папір", size:"120x150", quantity:"1 шт", weight:"200 г", price:220},
    ru:{name:"Раскраска 8", desc:"Описание товара 8", material:"Материал", size:"Размер", quantity:"1 шт", weight:"55 г", price:800}
    },{id:9, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Розмальовка 9", desc:"Опис товару 9", material:"Папір", size:"120x150", quantity:"1 шт", weight:"200 г", price:220},
    ru:{name:"Раскраска 9", desc:"Описание товара 9", material:"Материал", size:"Размер", quantity:"1 шт", weight:"80 г", price:900}
    },{id:10, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Розмальовка 10", desc:"Опис товару 10", material:"Папір", size:"120x150", quantity:"1 шт", weight:"70 г", price:220},
    ru:{name:"Раскраска 10", desc:"Описание товара 10", material:"Материал", size:"Размер", quantity:"1 шт", weight:"70 г", price:1000}
    },{id:11, category:1,
    images:["img/stikersps_1.jpg","img/stikersps_1.jpg","img/stikersps_1.jpg"],
    uk:{name:"Стікери Playstation Classic", desc:"Набір наліпок, натхненний атмосферою олдскульних ігор на PlayStation — зі швидкістю Ridge Racer, похмурим вайбом першого Killzone та футуристичною енергією Wipeout. Для тих, хто пам’ятає звук завантаження консолі й любов до епохи класичної PlayStation.", material:"ПВХ", size:"10.5х18.5", quantity:"1 шт", weight:"20 г", price:90},
    ru:{name:"Стикеры Playstation Classic", desc:"Набор наклеек, вдохновленный атмосферой олдскульных игр на PlayStation — со скоростью Ridge Racer, мрачным вайбом первого Killzone и футуристической энергией Wipeout. Для тех, кто помнит звук загрузки консоли и любовь к эпохе классической PlayStation.", material:"ПВХ", size:"10.5х18.5", quantity:"1 шт", weight:"20 г", price:90}
    },{id:12, category:1,
    images:["img/stikerssweetvibes_1.jpg","img/stikerssweetvibes_1.jpg","img/stikerssweetvibes_1.jpg"],
    uk:{name:"Стікери Sweet Vibes 6 шт", desc:"Стікери у ніжних рожевих тонах, створені для романтичного настрою та щоденного натхнення. Набір складається з 6 наліпок, які підійдуть для прикрашання щоденників, ноутбуків чи листівок і додадуть тепла у повсякденні дрібниці.", material:"ПВХ", size:"2x2", quantity:"6 шт", weight:"10 г", price:20},
    ru:{name:"Стикеры Sweet Vibes 6 шт", desc:"Стикеры в мягких розовых тонах, созданные для романтического настроения и ежедневного вдохновения. Набор состоит из 6 наклеек, которые подойдут для украшения дневников, ноутбуков или листовки и добавят тепла в ежедневные мелочи.", material:"ПВХ", size:"2x2", quantity:"6 шт", weight:"10 г", price:20}
    },{id:13, category:1,
    images:["img/stikersfallout2_1.jpg","img/stikersfallout2_2.jpg","img/stikersfallout2_3.jpg"],
    uk:{name:"Cтікери, що світяться Fallout 2 Neon", desc:"Набір яскравих наліпок, що світяться, у стилі гри Fallout 2. Наліпки з логотипами, символами та персонажами з культової постапокаліптичної рольової гри. Ідеально підійдуть для декору, прикрашення ноутбуків, телефонів та інших поверхонь.", material:"Люмінесцентна ПВХ", size:"21x10", quantity:"1 шт", weight:"65 г", price:350},
    ru:{name:"Стикеры, что светятся Fallout 2 Neon", desc:"Набор ярких наклеек, что светится, в стиле игры Fallout 2. Наклейки с логотипами, символами и персонажами из культовой постапокалиптической ролевой игры. Идеально подойдут для декора, украшения ноутбуков, телефонов и других поверхностей.", material:"Люминесцентная ПВХ", size:"21x10", quantity:"1 шт", weight:"65 г", price:350}
    },{id:14, category:1,
    images:["img/stikershikaru_1.jpg","img/stikershikaru_1.jpg","img/stikershikaru_1.jpg"],
    uk:{name:"Стікери по аніме Літо, коли помер Хікару", desc:"Стікери за мотивами аніме «Літо, коли помер Хікару», виконані з легким, трохи веселим настроєм, що контрастує з оригінальною історією. Поєднання літньої атмосфери та м’якого гумору робить їх приємним акцентом для щоденних речей і фанатів аніме.", material:"ПВХ", size:"15х10", quantity:"1 шт", weight:"35 г", price:40},
    ru:{name:"Стикеры по аниме Лето, когда умер Хикару", desc:"Стикеры за мотивами аниме «Лето, когда умер Хикару», выполненные с легким, немного веселым настроением, который контрастирует с оригинальной историей. Сочетание летней атмосферы и мягкого юмора делает их приятным акцентом для ежедневных вещей и фанатов аниме.", material:"ПВХ", size:"15х10", quantity:"1 шт", weight:"35 г", price:40}
    },{id:15, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Стікери Чернівці", desc:"Опис товару 15", material:"Матеріал", size:"Розмір", quantity:"210 шт", weight:"105 г", price:1500},
    ru:{name:"Товар 15", desc:"Описание товара 15", material:"Материал", size:"Размер", quantity:"210 шт", weight:"105 г", price:1500}
    },{id:16, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 16", desc:"Опис товару 16", material:"Матеріал", size:"Розмір", quantity:"240 шт", weight:"120 г", price:1600},
    ru:{name:"Товар 16", desc:"Описание товара 16", material:"Материал", size:"Размер", quantity:"240 шт", weight:"120 г", price:1600}
    },{id:17, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 17", desc:"Опис товару 17", material:"Матеріал", size:"Розмір", quantity:"280 шт", weight:"140 г", price:1700},
    ru:{name:"Товар 17", desc:"Описание товара 17", material:"Материал", size:"Размер", quantity:"280 шт", weight:"140 г", price:1700}
    },{id:18, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 18", desc:"Опис товару 18", material:"Матеріал", size:"Розмір", quantity:"320 шт", weight:"160 г", price:1800},
    ru:{name:"Товар 18", desc:"Описание товара 18", material:"Материал", size:"Размер", quantity:"320 шт", weight:"160 г", price:1800}
    },{id:19, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 19", desc:"Опис товару 19", material:"Матеріал", size:"Розмір", quantity:"350 шт", weight:"175 г", price:1900},
    ru:{name:"Товар 19", desc:"Описание товара 19", material:"Материал", size:"Размер", quantity:"350 шт", weight:"175 г", price:1900}
    },{id:20, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 20", desc:"Опис товару 20", material:"Матеріал", size:"Розмір", quantity:"400 шт", weight:"200 г", price:2000},
    ru:{name:"Товар 20", desc:"Описание товара 20", material:"Материал", size:"Размер", quantity:"400 шт", weight:"200 г", price:2000}
    }]; 