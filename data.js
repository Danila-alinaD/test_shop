const products = [{id:1, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 1", desc:"Опис товару 1", material:"Матеріал", size:"Розмір", quantity:"100 шт", weight:"50 г", price:100},
    ru:{name:"Товар 1", desc:"Описание товара 1", material:"Материал", size:"Размер", quantity:"100 шт", weight:"50 г", price:100}
    },{id:2, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 2", desc:"Опис товару 2", material:"Матеріал", size:"Розмір", quantity:"200 шт", weight:"100 г", price:200},
    ru:{name:"Товар 2", desc:"Описание товара 2", material:"Материал", size:"Размер", quantity:"200 шт", weight:"100 г", price:200}
    },{id:3, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 3", desc:"Опис товару 3", material:"Матеріал", size:"Розмір", quantity:"150 шт", weight:"75 г", price:300},
    ru:{name:"Товар 3", desc:"Описание товара 3", material:"Материал", size:"Размер", quantity:"150 шт", weight:"75 г", price:300}
    },{id:4, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 4", desc:"Опис товару 4", material:"Матеріал", size:"Розмір", quantity:"120 шт", weight:"60 г", price:400},
    ru:{name:"Товар 4", desc:"Описание товара 4", material:"Материал", size:"Размер", quantity:"120 шт", weight:"60 г", price:400}
    },{id:5, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 5", desc:"Опис товару 5", material:"Матеріал", size:"Розмір", quantity:"180 шт", weight:"90 г", price:500},
    ru:{name:"Товар 5", desc:"Описание товара 5", material:"Материал", size:"Размер", quantity:"180 шт", weight:"90 г", price:500}
    },{id:6, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 6", desc:"Опис товару 6", material:"Матеріал", size:"Розмір", quantity:"250 шт", weight:"125 г", price:600},
    ru:{name:"Товар 6", desc:"Описание товара 6", material:"Материал", size:"Размер", quantity:"250 шт", weight:"125 г", price:600}
    },{id:7, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 7", desc:"Опис товару 7", material:"Матеріал", size:"Розмір", quantity:"300 шт", weight:"150 г", price:700},
    ru:{name:"Товар 7", desc:"Описание товара 7", material:"Материал", size:"Размер", quantity:"300 шт", weight:"150 г", price:700}
    },{id:8, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 8", desc:"Опис товару 8", material:"Матеріал", size:"Розмір", quantity:"110 шт", weight:"55 г", price:800},
    ru:{name:"Товар 8", desc:"Описание товара 8", material:"Материал", size:"Размер", quantity:"110 шт", weight:"55 г", price:800}
    },{id:9, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 9", desc:"Опис товару 9", material:"Матеріал", size:"Розмір", quantity:"160 шт", weight:"80 г", price:900},
    ru:{name:"Товар 9", desc:"Описание товара 9", material:"Материал", size:"Размер", quantity:"160 шт", weight:"80 г", price:900}
    },{id:10, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 10", desc:"Опис товару 10", material:"Матеріал", size:"Розмір", quantity:"140 шт", weight:"70 г", price:1000},
    ru:{name:"Товар 10", desc:"Описание товара 10", material:"Материал", size:"Размер", quantity:"140 шт", weight:"70 г", price:1000}
    },{id:11, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 11", desc:"Опис товару 11", material:"Матеріал", size:"Розмір", quantity:"220 шт", weight:"110 г", price:1100},
    ru:{name:"Товар 11", desc:"Описание товара 11", material:"Материал", size:"Размер", quantity:"220 шт", weight:"110 г", price:1100}
    },{id:12, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 12", desc:"Опис товару 12", material:"Матеріал", size:"Розмір", quantity:"190 шт", weight:"95 г", price:1200},
    ru:{name:"Товар 12", desc:"Описание товара 12", material:"Материал", size:"Размер", quantity:"190 шт", weight:"95 г", price:1200}
    },{id:13, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 13", desc:"Опис товару 13", material:"Матеріал", size:"Розмір", quantity:"130 шт", weight:"65 г", price:1300},
    ru:{name:"Товар 13", desc:"Описание товара 13", material:"Материал", size:"Размер", quantity:"130 шт", weight:"65 г", price:1300}
    },{id:14, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 14", desc:"Опис товару 14", material:"Матеріал", size:"Розмір", quantity:"170 шт", weight:"85 г", price:1400},
    ru:{name:"Товар 14", desc:"Описание товара 14", material:"Материал", size:"Размер", quantity:"170 шт", weight:"85 г", price:1400}
    },{id:15, category:1,
    images:["img/p_uni.jpg.webp","img/p_uni.jpg.webp","img/p_uni.jpg.webp"],
    uk:{name:"Товар 15", desc:"Опис товару 15", material:"Матеріал", size:"Розмір", quantity:"210 шт", weight:"105 г", price:1500},
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