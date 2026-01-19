let lang = localStorage.getItem('lang') || 'uk';
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let currentBannerSlide = 0;
let currentProductImage = 0;

const $=id=>document.getElementById(id);

// Список міст тепер в cities.js

// Об'єкт з перекладами
const translations = {
  uk: {
    searchPlaceholder: 'Пошук товарів...',
    catalogTitle: 'Каталог товарів',
    catalogBtn: '← Каталог',
    details: 'Детальніше',
    buy: 'Купити',
    cartEmpty: 'Кошик порожній',
    cartEmptyMessage: 'Кошик порожній',
    notFound: 'Товари не знайдено',
    inStock: 'Є в наявності',
    delivery: 'Доставка:',
    novaPoshtaBranch: 'Нова пошта (відділення)',
    novaPoshtaPostomat: 'Нова пошта (поштомат)',
    ukrposhta: 'Укрпошта',
    shippingToday: 'Відправка сьогодні',
    shippingNextDay: 'ПН-ПТ',
    shippingNotice: 'Замовлення, зроблені сьогодні, будуть відправлені на наступний робочий день. Субота та Неділя - вихідні.',
    free: 'Безкоштовно',
    tabDescription: 'Опис',
    tabSpecs: 'Характеристики',
    productDescription: 'Опис товару',
    material: 'Матеріал:',
    quantity: 'Кількість:',
    size: 'Розмір:',
    weight: 'Вага:',
    remove: 'Видалити',
    checkout: 'Оформити замовлення',
    total: 'Загалом:',
    copyright: '© 2026 Tutsi Shop. Всі права захищені.',
    banner1Title: 'Спеціальні пропозиції',
    banner1Text: 'Знижки на замовлення від двох розмальовок',
    banner2Title: 'Спеціальні пропозиції',
    banner2Text: 'Знижки на замовленнявід двох розмальовок',
    banner3Title: 'Спеціальні пропозиції',
    banner3Text: 'Знижки на замовлення від двох розмальовок',
    checkoutTitle: 'Оформлення замовлення',
    checkoutSubtitle: 'Заповніть форму і ми передзвонимо вам найближчим часом',
    checkoutName: 'Ім\'я *',
    checkoutNamePlaceholder: 'Введіть ваше ім\'я',
    checkoutSurname: 'Прізвище *',
    checkoutSurnamePlaceholder: 'Введіть ваше прізвище',
    checkoutPhone: 'Номер телефону *',
    checkoutOrder: 'Ваше замовлення:',
    checkoutNotice: 'Після оформлення заявки вам передзвонять для підтвердження замовлення',
    checkoutSubmit: 'Відправити заявку',
    checkoutPayWithLiqpay: 'Оплатити через LiqPay',
    checkoutSending: 'Відправка...',
    checkoutSuccess: '✅ Заявку успішно відправлено! Ми передзвонимо вам найближчим часом.',
    checkoutError: 'Помилка відправки. Спробуйте ще раз або перевірте налаштування бота.',
    checkoutEmpty: 'Кошик порожній!',
    checkoutConfigError: '⚠️ Будь ласка, налаштуйте BOT_TOKEN та CHAT_ID в коді!',
    checkoutCity: 'Місто/Село *',
    checkoutCityPlaceholder: 'Введіть назву міста або села',
    checkoutWarehouse: 'Відділення Нової Пошти *',
    checkoutWarehousePlaceholder: 'Введіть номер або адресу відділення',
    checkoutNoCities: 'Міста не знайдено',
    coloringDeliveryNotice: 'Увага! Розмальовки висилаються у тубусах 120см, тому доставка у поштомати неможлива',
    categoryColoring: 'РОЗМАЛЬОВКИ',
    categoryColoringDesc: 'Виберіть розмальовки',
    categoryStickers: 'СТІКЕРИ',
    categoryStickersDesc: 'Виберіть стікери',
    showAllProducts: 'Показати всі товари'
  },
  ru: {
    searchPlaceholder: 'Поиск товаров...',
    catalogTitle: 'Каталог товаров',
    catalogBtn: '← Каталог',
    details: 'Подробнее',
    buy: 'Купить',
    cartEmpty: 'Корзина пуста',
    cartEmptyMessage: 'Корзина пуста',
    notFound: 'Товары не найдены',
    inStock: 'В наличии',
    delivery: 'Доставка:',
    novaPoshtaBranch: 'Новая почта (отделение)',
    novaPoshtaPostomat: 'Новая почта (поштомат)',
    ukrposhta: 'Укрпошта',
    shippingToday: 'Отправка сегодня',
    shippingNextDay: 'ПН-ПТ',
    shippingNotice: 'Заказы, сделанные сегодня, будут отправлены на следующий рабочий день. Суббота и Воскресенье - выходные.',
    free: 'Бесплатно',
    tabDescription: 'Описание',
    tabSpecs: 'Характеристики',
    productDescription: 'Описание товара',
    material: 'Материал:',
    quantity: 'Количество:',
    size: 'Размер:',
    weight: 'Вес:',
    remove: 'Удалить',
    checkout: 'Оформить заказ',
    total: 'Итого:',
    copyright: '© 2026 Tutsi Shop. Все права защищены.',
    banner1Title: 'Специальные предложения',
    banner1Text: 'Скидки на заказ от двух раскрасок',
    banner2Title: 'Специальные предложения',
    banner2Text: 'Скидки на заказ от двух раскрасок',
    banner3Title: 'Специальные предложения',
    banner3Text: 'Скидки на заказ от двух раскрасок',
    checkoutTitle: 'Оформление заказа',
    checkoutSubtitle: 'Заполните форму и мы перезвоним вам в ближайшее время',
    checkoutName: 'Имя *',
    checkoutNamePlaceholder: 'Введите ваше имя',
    checkoutSurname: 'Фамилия *',
    checkoutSurnamePlaceholder: 'Введите вашу фамилию',
    checkoutPhone: 'Номер телефона *',
    checkoutOrder: 'Ваш заказ:',
    checkoutNotice: 'После оформления заявки вам перезвонят для подтверждения заказа',
    checkoutSubmit: 'Отправить заявку',
    checkoutPayWithLiqpay: 'Оплатить через LiqPay',
    checkoutSending: 'Отправка...',
    checkoutSuccess: '✅ Заявка успешно отправлена! Мы перезвоним вам в ближайшее время.',
    checkoutError: 'Ошибка отправки. Попробуйте еще раз или проверьте настройки бота.',
    checkoutEmpty: 'Корзина пуста!',
    checkoutConfigError: '⚠️ Пожалуйста, настройте BOT_TOKEN и CHAT_ID в коде!',
    checkoutCity: 'Город/Село *',
    checkoutCityPlaceholder: 'Введите название города или села',
    checkoutWarehouse: 'Отделение Новой Почты *',
    checkoutWarehousePlaceholder: 'Введите номер или адрес отделения',
    checkoutNoCities: 'Города не найдены',
    coloringDeliveryNotice: 'Внимание! Раскраски отправляются в тубах 120см, поэтому доставка в поштоматы невозможна',
    categoryColoring: 'РАСКРАСКИ',
    categoryColoringDesc: 'Выберите раскраски',
    categoryStickers: 'СТИКЕРЫ',
    categoryStickersDesc: 'Выберите стикеры',
    showAllProducts: 'Показать все товары'
  }
};

// Функція для отримання перекладу
function t(key) {
  return translations[lang]?.[key] || translations.uk[key] || key;
}

// Оновлюємо тексти на сторінці
function updatePageTexts() {
  // Оновлюємо placeholder пошуку
  const searchInput = $('search');
  if (searchInput) {
    searchInput.placeholder = t('searchPlaceholder');
  }
  
  // Оновлюємо заголовок каталогу
  const catalogTitle = document.querySelector('.page-title');
  if (catalogTitle) {
    catalogTitle.textContent = t('catalogTitle');
  }
  
  // Оновлюємо кнопку "Каталог"
  const catalogBtn = document.getElementById('catalogBtn');
  if (catalogBtn) {
    catalogBtn.textContent = t('catalogBtn');
  }
  
  // Оновлюємо футер
  const footerCopyright = document.querySelector('.footer-info p');
  if (footerCopyright) {
    footerCopyright.textContent = t('copyright');
  }
  
  // Оновлюємо банери
  const bannerTitles = document.querySelectorAll('.slide-overlay h2');
  const bannerTexts = document.querySelectorAll('.slide-overlay p');
  
  if (bannerTitles.length >= 3 && bannerTexts.length >= 3) {
    bannerTitles[0].textContent = t('banner1Title');
    bannerTexts[0].textContent = t('banner1Text');
    bannerTitles[1].textContent = t('banner2Title');
    bannerTexts[1].textContent = t('banner2Text');
    bannerTitles[2].textContent = t('banner3Title');
    bannerTexts[2].textContent = t('banner3Text');
  }
  
  // Оновлюємо блоки категорій
  const categoryBlocks = document.querySelectorAll('.category-block');
  if (categoryBlocks.length >= 2) {
    // Перший блок - розмальовки
    const coloringBlock = categoryBlocks[0];
    const coloringTitle = coloringBlock.querySelector('h2');
    const coloringDesc = coloringBlock.querySelector('p');
    if (coloringTitle) coloringTitle.textContent = t('categoryColoring');
    if (coloringDesc) coloringDesc.textContent = t('categoryColoringDesc');
    
    // Другий блок - стікери
    const stickersBlock = categoryBlocks[1];
    const stickersTitle = stickersBlock.querySelector('h2');
    const stickersDesc = stickersBlock.querySelector('p');
    if (stickersTitle) stickersTitle.textContent = t('categoryStickers');
    if (stickersDesc) stickersDesc.textContent = t('categoryStickersDesc');
  }
  
  // Оновлюємо кнопку "Показати всі товари"
  const showAllBtn = document.querySelector('.show-all-btn');
  if (showAllBtn) {
    showAllBtn.textContent = t('showAllProducts');
  }
}

// Ініціалізація теми - за замовчуванням світла
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  // Якщо є збережена тема - використовуємо її, інакше - світла (за замовчуванням)
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    updateThemeButton();
  } else {
    // За замовчуванням світла тема
    document.body.classList.remove('dark');
    updateThemeButton();
  }
}

function updateThemeButton() {
  const btn = document.querySelector('.btn-icon[onclick="toggleTheme()"]');
  if (btn) {
    btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  }
}

// Ініціалізація пошуку на всіх сторінках
function initSearch() {
  const searchInput = $('search');
  if (!searchInput) return;
  
  // Відновлюємо значення пошуку з localStorage
  const savedSearch = sessionStorage.getItem('searchQuery');
  if (savedSearch) {
    searchInput.value = savedSearch;
  }
  
  // Оновлюємо placeholder
  searchInput.placeholder = t('searchPlaceholder');
  
  // Перевіряємо чи ми на головній сторінці
  const isMainPage = window.location.pathname.includes('index.html') || 
                     window.location.pathname.endsWith('/') || 
                     window.location.pathname === '/';
  
  if (isMainPage) {
    // На головній сторінці - фільтруємо каталог при введенні
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value;
      sessionStorage.setItem('searchQuery', query);
      
      // Якщо користувач почав вводити текст, скидаємо фільтр категорій
      if (query.trim().length > 0) {
        sessionStorage.removeItem('activeCategory');
        
        // Очищаємо URL параметр category
        const url = new URL(window.location);
        url.searchParams.delete('category');
        window.history.pushState({}, '', url);
        
        // Оновлюємо блоки категорій (прибираємо активний клас)
        renderCategoryBlocks();
      }
      
      renderCatalog();
    });
  } else {
    // На інших сторінках - тільки при натисканні Enter
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = e.target.value.trim();
        if (query.length > 0) {
          sessionStorage.setItem('searchQuery', query);
          // Скидаємо фільтр категорій при переході
          sessionStorage.removeItem('activeCategory');
          window.location.href = 'index.html';
        }
      }
    });
  }
}

// Карусель банерів (7 секунд)
let carouselInterval;

function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  if (slides.length === 0) return;
  
  // Очищаємо попередній інтервал, якщо він є
  if (carouselInterval) clearInterval(carouselInterval);
  
  // Автоматична прокрутка кожні 7 секунд
  carouselInterval = setInterval(() => {
    currentBannerSlide = (currentBannerSlide + 1) % slides.length;
    showSlide(currentBannerSlide);
  }, 7000);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  
  if (slides.length === 0) return;
  
  if (n >= slides.length) currentBannerSlide = 0;
  if (n < 0) currentBannerSlide = slides.length - 1;
  
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  
  slides[currentBannerSlide].classList.add('active');
  if (dots[currentBannerSlide]) dots[currentBannerSlide].classList.add('active');
  
  // Перезапускаємо інтервал після ручного перемикання
  if (carouselInterval) clearInterval(carouselInterval);
  carouselInterval = setInterval(() => {
    currentBannerSlide = (currentBannerSlide + 1) % slides.length;
    showSlide(currentBannerSlide);
  }, 7000);
}

function changeSlide(direction) {
  const slides = document.querySelectorAll('.carousel-slide');
  currentBannerSlide += direction;
  if (currentBannerSlide >= slides.length) currentBannerSlide = 0;
  if (currentBannerSlide < 0) currentBannerSlide = slides.length - 1;
  showSlide(currentBannerSlide);
}

function currentSlide(n) {
  currentBannerSlide = n - 1;
  showSlide(currentBannerSlide);
}

// Оновлюємо лічильник кошика
function updateCartCount() {
  const cartCount = $('cartCount');
  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}

// Функція для фільтрації за категорією
function filterByCategory(category) {
  // Зберігаємо категорію в sessionStorage (скидається при закритті вкладки)
  sessionStorage.setItem('activeCategory', category);
  sessionStorage.removeItem('searchQuery'); // Очищаємо пошук
  
  // Очищаємо поле пошуку
  const searchInput = $('search');
  if (searchInput) {
    searchInput.value = '';
  }
  
  // Оновлюємо URL
  const url = new URL(window.location);
  url.searchParams.set('category', category);
  window.history.pushState({}, '', url);
  
  // Оновлюємо каталог
  renderCatalog();
  renderCategoryBlocks();
  
  // Прокручуємо до каталогу
  const catalogElement = document.getElementById('catalog');
  if (catalogElement) {
    catalogElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Функція для показу всіх товарів
function showAllProducts() {
  // Очищаємо категорію та пошук
  sessionStorage.removeItem('activeCategory');
  sessionStorage.removeItem('searchQuery');
  
  // Очищаємо поле пошуку
  const searchInput = $('search');
  if (searchInput) {
    searchInput.value = '';
  }
  
  // Очищаємо URL параметри
  const url = new URL(window.location);
  url.searchParams.delete('category');
  window.history.pushState({}, '', url);
  
  // Оновлюємо каталог та блоки
  renderCategoryBlocks();
  renderCatalog();
  
  // Прокручуємо до каталогу
  const catalogElement = document.getElementById('catalog');
  if (catalogElement) {
    catalogElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Функція для відображення блоків категорій
function renderCategoryBlocks() {
  const activeCategory = sessionStorage.getItem('activeCategory') || new URLSearchParams(window.location.search).get('category') || '';
  const blocks = document.querySelectorAll('.category-block');
  
  blocks.forEach(block => {
    block.classList.remove('active');
    const blockText = block.textContent;
    if (activeCategory === 'coloring' && (blockText.includes('РОЗМАЛЬОВКИ') || blockText.includes('РАСКРАСКИ'))) {
      block.classList.add('active');
    } else if (activeCategory === 'stickers' && (blockText.includes('СТІКЕРИ') || blockText.includes('СТИКЕРЫ'))) {
      block.classList.add('active');
    }
  });
}

function renderCatalog(){
  const box=$('catalog'); if(!box) return;
  const q=sessionStorage.getItem('searchQuery') || $('search')?.value || '';
  const activeCategory = sessionStorage.getItem('activeCategory') || new URLSearchParams(window.location.search).get('category') || '';
  
  // Нормалізуємо запит: приводимо до нижнього регістру та прибираємо зайві пробіли
  const normalizedQuery = q.toLowerCase().trim();
  
  box.innerHTML='';
  
  // Фільтруємо товари за категорією
  let filteredProducts = products;
  
  if (activeCategory === 'coloring') {
    // Розмальовки: товари з ID 1-10
    filteredProducts = products.filter(p => p.id >= 1 && p.id <= 10);
  } else if (activeCategory === 'stickers') {
    // Стікери: товари з ID 11-20
    filteredProducts = products.filter(p => p.id >= 11 && p.id <= 20);
  }
  
  // Фільтруємо товари (незалежно від регістру) - по назві та опису
  if (normalizedQuery.length > 0) {
    filteredProducts = filteredProducts.filter(p => {
      const productName = (p[lang].name || '').toLowerCase().trim();
      const productDesc = (p[lang].desc || '').toLowerCase().trim();
      return productName.includes(normalizedQuery) || productDesc.includes(normalizedQuery);
    });
  }
  
  if (filteredProducts.length === 0 && normalizedQuery.length > 0) {
    box.innerHTML = `<div style="text-align: center; padding: 60px; font-size: 20px; color: #999;">${t('notFound')}</div>`;
  } else if (filteredProducts.length === 0) {
    box.innerHTML = `<div style="text-align: center; padding: 60px; font-size: 20px; color: #999;">${t('cartEmptyMessage')}</div>`;
  } else {
    filteredProducts.forEach(p=>{
      box.innerHTML+=`
      <div class="card" onclick="window.location.href='product.html?id=${p.id}'" style="cursor: pointer;">
        <img src="${p.images[0]}" alt="${p[lang].name}">
        <div class="card-content">
          <h3>${p[lang].name}</h3>
          <div class="price">${p[lang].price} ₴</div>
          <a href="product.html?id=${p.id}" onclick="event.stopPropagation(); return true;">${t('details')}</a>
          <button onclick="event.stopPropagation(); add(${p.id}); return false;">${t('buy')}</button>
        </div>
      </div>`;
    });
  }
  
  updateCartCount();
}

// Галерея товару з каруселлю
function renderProduct(){
  const box=$('product'); if(!box) return;
  const id=new URLSearchParams(location.search).get('id');
  const p=products.find(x=>x.id==id);
  if (!p) return;
  
  currentProductImage = 0; // Скидаємо на перше фото
  
  box.innerHTML=`
    <div class="container">
      <div class="product-page">
        <!-- Ліва частина: мініатюри та основне зображення -->
        <div class="product-images-section">
          <div class="product-thumbnails">
            ${p.images.map((img, idx) => 
              `<div class="thumbnail-item ${idx === 0 ? 'active' : ''}" onclick="goToProductImage(${idx}, ${p.images.length})">
                <img src="${img}" alt="Фото ${idx + 1}">
              </div>`
            ).join('')}
          </div>
          <div class="product-main-image-wrapper">
            <div class="product-main-carousel">
              ${p.images.map((img, idx) => 
                `<div class="product-main-slide ${idx === 0 ? 'active' : ''}">
                  <img class="product-main-image" src="${img}" alt="${p[lang].name} - фото ${idx + 1}">
                </div>`
              ).join('')}
            </div>
            <button class="product-nav-btn prev" onclick="changeProductImage(-1, ${p.images.length})">‹</button>
            <button class="product-nav-btn next" onclick="changeProductImage(1, ${p.images.length})">›</button>
          </div>
        </div>
        
        <!-- Права частина: інформація про товар -->
        <div class="product-info-section">
          <h1 class="product-title">${p[lang].name}</h1>
          
          <div class="product-availability">
            <span class="availability-badge">${t('inStock')}</span>
          </div>
          
          <div class="product-price-section">
            <div class="product-price" id="productPrice_${p.id}">${p.id >= 1 && p.id <= 10 ? '300' : p[lang].price} ₴</div>
            ${p.id >= 1 && p.id <= 10 ? `<div class="product-price-info" id="productPricePerUnit_${p.id}" style="font-size: 14px; color: var(--text); opacity: 0.7; margin-top: 5px; display: none;"></div>` : ''}
            ${p.id >= 1 && p.id <= 10 ? `<div class="product-price-breakdown" style="font-size: 13px; color: var(--text); opacity: 0.6; margin-top: 10px; line-height: 1.6;">
              <div>1 шт - 300 ₴</div>
              <div>2 шт - 560 ₴</div>
              <div>3 шт - 810 ₴</div>
              <div>від 4 шт - 250 ₴ за шт</div>
            </div>` : ''}
          </div>
          
          <div class="product-quantity-section">
            <label class="quantity-label">${t('quantity')}:</label>
            <div class="quantity-selector">
              <button class="quantity-btn minus" onclick="changeQuantity(-1, ${p.id})">−</button>
              <input type="number" id="productQuantity_${p.id}" class="quantity-input" value="1" min="1" max="99" onchange="validateQuantity(${p.id})" oninput="updateProductPriceDisplay(${p.id})">
              <button class="quantity-btn plus" onclick="changeQuantity(1, ${p.id})">+</button>
            </div>
          </div>
          
          <button class="product-buy-btn" onclick="add(${p.id})">
            <span>🛒</span>
            <span>${t('buy')}</span>
          </button>
          
          <div class="product-delivery-info">
            <h3>${t('delivery')}</h3>
            <div class="delivery-option">
              <span>${t('novaPoshtaBranch')}</span>
              <span>${t('shippingNextDay')}</span>
            </div>
            ${p.id >= 1 && p.id <= 10 ? '' : `
            <div class="delivery-option">
              <span>${t('novaPoshtaPostomat')}</span>
              <span>${t('shippingNextDay')}</span>
            </div>
            `}
            <div class="delivery-option">
              <span>${t('ukrposhta')}</span>
              <span>${t('shippingNextDay')}</span>
            </div>
            <div class="delivery-notice" style="margin-top: 15px; padding: 12px; background: #e7f3ff; border-left: 4px solid #2196F3; border-radius: 8px; font-size: 14px; color: #0d47a1;">
              <strong>ℹ️ ${t('shippingNotice')}</strong>
            </div>
            ${p.id >= 1 && p.id <= 10 ? `
            <div class="delivery-notice" style="margin-top: 10px; padding: 12px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 8px; font-size: 14px; color: #856404;">
              <strong>⚠️ ${t('coloringDeliveryNotice')}</strong>
            </div>
            ` : ''}
          </div>
        </div>
      </div>
      
      <!-- Вкладки з описом та характеристиками -->
      <div class="product-tabs">
        <button class="tab-btn active" onclick="showTab('description', this)">${t('tabDescription')}</button>
        <button class="tab-btn" onclick="showTab('specs', this)">${t('tabSpecs')}</button>
      </div>
      
      <div class="product-tab-content">
        <div id="tab-description" class="tab-panel active">
          <div class="product-description">
            <p>${p[lang].desc}</p>
          </div>
        </div>
        
        <div id="tab-specs" class="tab-panel">
          <div class="product-specs">
            <div class="spec-item">
              <span class="spec-label">${t('material')}</span>
              <span class="spec-value">${p[lang].material}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">${t('quantity')}</span>
              <span class="spec-value">${p[lang].quantity || '100 шт'}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">${t('size')}</span>
              <span class="spec-value">${p[lang].size}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">${t('weight')}</span>
              <span class="spec-value">${p[lang].weight || '50 г'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  
  // Ініціалізуємо відображення ціни для розмальовок
  if (p.id >= 1 && p.id <= 10) {
    setTimeout(() => updateProductPriceDisplay(p.id), 0);
  }
}

function changeProductImage(direction, totalImages) {
  currentProductImage += direction;
  if (currentProductImage >= totalImages) currentProductImage = 0;
  if (currentProductImage < 0) currentProductImage = totalImages - 1;
  goToProductImage(currentProductImage, totalImages);
}

function goToProductImage(index, totalImages) {
  currentProductImage = index;
  const slides = document.querySelectorAll('.product-main-slide');
  const thumbnails = document.querySelectorAll('.thumbnail-item');
  
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === index);
  });
  
  thumbnails.forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === index);
  });
}

// Функція для перемикання вкладок
function showTab(tabName, buttonElement) {
  // Приховуємо всі панелі
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  
  // Прибираємо активний клас з усіх кнопок
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Показуємо вибрану панель
  const panel = document.getElementById(`tab-${tabName}`);
  if (panel) {
    panel.classList.add('active');
  }
  
  // Додаємо активний клас до кнопки
  if (buttonElement) {
    buttonElement.classList.add('active');
  }
}

function renderCart(){
  const box=$('cart'); if(!box) return;
  if(!cart.length){
    box.innerHTML=`<div style="text-align: center; padding: 60px; font-size: 20px; color: #999;">${t('cartEmptyMessage')}</div>`;
    updateCartCount();
    return;
  }
  
  // Групуємо товари за ID та рахуємо кількість
  const cartItems = {};
  cart.forEach(id => {
    cartItems[id] = (cartItems[id] || 0) + 1;
  });
  
  box.innerHTML = Object.keys(cartItems).map(id => {
    const p = products.find(x => x.id == id);
    const quantity = cartItems[id];
    const totalPrice = getProductPrice(id, quantity);
    const unitPrice = id >= 1 && id <= 10 ? (quantity >= 4 ? 250 : (totalPrice / quantity)) : p[lang].price;
    return `
      <div class="cart-item">
        <div class="cart-item-content">
          <img src="${p.images[0]}" alt="${p[lang].name}" class="cart-item-image">
          <div class="cart-item-info">
            <h3>${p[lang].name}</h3>
            <div class="cart-item-price">
              <div class="price">${unitPrice.toFixed(0)} ₴${id >= 1 && id <= 10 && quantity >= 4 ? ' за шт' : ''}</div>
              <div class="cart-quantity-selector">
                <button class="cart-quantity-btn minus" onclick="changeCartQuantity(${id}, -1)">−</button>
                <span class="cart-quantity-value">${quantity}</span>
                <button class="cart-quantity-btn plus" onclick="changeCartQuantity(${id}, 1)">+</button>
              </div>
              <strong class="total-price">= ${totalPrice} ₴</strong>
            </div>
          </div>
        </div>
        <button onclick="removeFromCart(${id})" class="remove-btn">${t('remove')}</button>
      </div>
    `;
  }).join('');
  
  updateCartCount();
}

function showQuantitySelector(productId) {
  const quantitySection = document.getElementById(`quantitySection_${productId}`);
  const buyBtn = document.getElementById(`buyBtn_${productId}`);
  
  if (quantitySection && buyBtn) {
    quantitySection.style.display = 'flex';
    buyBtn.style.display = 'none';
  }
}

// Функція для розрахунку ціни розмальовок
function getColoringPrice(quantity) {
  if (quantity === 1) return 300;
  if (quantity === 2) return 560;
  if (quantity === 3) return 810;
  if (quantity >= 4) return quantity * 250;
  return 300;
}

// Функція для отримання ціни товару з урахуванням кількості (для розмальовок)
function getProductPrice(productId, quantity) {
  const p = products.find(x => x.id == productId);
  if (!p) return 0;
  
  // Розмальовки (id 1-10) мають спеціальну цінову політику
  if (productId >= 1 && productId <= 10) {
    return getColoringPrice(quantity);
  }
  
  // Для інших товарів - стандартна ціна
  return p[lang].price * quantity;
}

// Оновлює відображення ціни на сторінці товару
function updateProductPriceDisplay(productId) {
  const input = document.getElementById(`productQuantity_${productId}`);
  const priceElement = document.getElementById(`productPrice_${productId}`);
  const pricePerUnitElement = document.getElementById(`productPricePerUnit_${productId}`);
  
  if (!input || !priceElement) return;
  
  const quantity = parseInt(input.value) || 1;
  const p = products.find(x => x.id == productId);
  if (!p) return;
  
  // Якщо це розмальовка, використовуємо спеціальну ціну
  if (productId >= 1 && productId <= 10) {
    const totalPrice = getColoringPrice(quantity);
    priceElement.textContent = `${totalPrice} ₴`;
    
    // Додаємо інформацію про ціну за штуку, якщо є елемент
    if (pricePerUnitElement) {
      if (quantity >= 4) {
        pricePerUnitElement.textContent = `(250 ₴ за шт)`;
        pricePerUnitElement.style.display = 'block';
      } else {
        pricePerUnitElement.style.display = 'none';
      }
    }
  } else {
    // Для інших товарів - стандартна логіка
    const totalPrice = p[lang].price * quantity;
    priceElement.textContent = `${totalPrice} ₴`;
    if (pricePerUnitElement) {
      pricePerUnitElement.style.display = 'none';
    }
  }
}

function changeQuantity(delta, productId) {
  const input = document.getElementById(`productQuantity_${productId}`);
  if (!input) return;
  
  let currentValue = parseInt(input.value) || 1;
  let newValue = currentValue + delta;
  
  // Обмежуємо мінімум 1 і максимум 99
  if (newValue < 1) newValue = 1;
  if (newValue > 99) newValue = 99;
  
  input.value = newValue;
  
  // Оновлюємо відображення ціни
  updateProductPriceDisplay(productId);
}

function validateQuantity(productId) {
  const input = document.getElementById(`productQuantity_${productId}`);
  if (!input) return;
  
  let value = parseInt(input.value) || 1;
  if (value < 1) value = 1;
  if (value > 99) value = 99;
  input.value = value;
  
  // Оновлюємо відображення ціни
  updateProductPriceDisplay(productId);
}

function add(id){
  // Отримуємо кількість з інпуту
  const quantityInput = document.getElementById(`productQuantity_${id}`);
  const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;
  
  // Додаємо товар вказану кількість разів
  for (let i = 0; i < quantity; i++) {
    cart.push(id);
  }
  
  localStorage.setItem('cart',JSON.stringify(cart));
  
  // Оновлюємо лічильник одразу
  updateCartCount();
  
  renderCatalog();
  renderCart();
  
  // Анімація додавання
  const cartCount = $('cartCount');
  if (cartCount) {
    cartCount.style.transform = 'scale(1.3)';
    setTimeout(() => {
      cartCount.style.transform = 'scale(1)';
    }, 200);
  }
}

function changeCartQuantity(id, delta) {
  // Якщо зменшуємо і кількість = 1, видаляємо товар
  if (delta < 0) {
    const index = cart.indexOf(id);
    if (index > -1) {
      cart.splice(index, 1);
    }
  } else {
    // Додаємо товар
    cart.push(id);
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Оновлюємо лічильник одразу
  updateCartCount();
  
  renderCart();
  renderCatalog();
  
  // Анімація зміни
  const cartCount = $('cartCount');
  if (cartCount) {
    cartCount.style.transform = 'scale(1.2)';
    setTimeout(() => {
      cartCount.style.transform = 'scale(1)';
    }, 200);
  }
}

function removeFromCart(id) {
  // Видаляємо всі екземпляри товару з кошика
  cart = cart.filter(itemId => itemId !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Оновлюємо лічильник одразу
  updateCartCount();
  
  renderCart();
  renderCatalog();
  
  // Анімація видалення
  const cartCount = $('cartCount');
  if (cartCount) {
    cartCount.style.transform = 'scale(0.8)';
    setTimeout(() => {
      cartCount.style.transform = 'scale(1)';
    }, 200);
  }
}

// ⚙️ НАЛАШТУВАННЯ API НОВОЇ ПОШТИ
// Отримайте API ключ на https://devcenter.novaposhta.ua/
const NOVA_POSHTA_API_KEY = '57059f80ce7b891a880e70cbe92ee85b'; // Замініть на ваш API ключ
const NOVA_POSHTA_API_URL = 'https://api.novaposhta.ua/v2.0/json/';

// ⚙️ НАЛАШТУВАННЯ LIQPAY
// Отримайте ключі на https://www.liqpay.ua/
const LIQPAY_PUBLIC_KEY = 'YOUR_LIQPAY_PUBLIC_KEY'; // Замініть на ваш public_key
const LIQPAY_PRIVATE_KEY = 'YOUR_LIQPAY_PRIVATE_KEY'; // Замініть на ваш private_key

// Змінна для зберігання обраного міста (CityRef)
let selectedCityRef = '';
// Змінна для зберігання назви обраного міста
let selectedCityName = '';
// Змінна для зберігання області обраного міста
let selectedRegion = null;
// Змінна для зберігання завантажених відділень
let loadedWarehouses = [];
// Змінна для зберігання всіх відділень з файлу області (кеш)
let allWarehousesFromFile = null;

// Функція пошуку міст/сел через API Нової Пошти
let citiesSearchTimeout;
function searchCities(query) {
  const dropdown = document.getElementById('citiesDropdown');
  
  if (!query || query.length < 1) {
    if (dropdown) {
      dropdown.innerHTML = '';
      dropdown.classList.remove('show');
    }
    return;
  }
  
  // Перевірка API ключа
  if (NOVA_POSHTA_API_KEY === 'YOUR_NOVA_POSHTA_API_KEY') {
    // Якщо API ключ не налаштований, використовуємо старий спосіб
    clearTimeout(citiesSearchTimeout);
    citiesSearchTimeout = setTimeout(() => {
      if (dropdown && typeof citiesList !== 'undefined') {
        const normalizedQuery = query.toLowerCase().trim();
        const filteredCities = citiesList.filter(city => 
          city.name.toLowerCase().includes(normalizedQuery) ||
          city.region.toLowerCase().includes(normalizedQuery)
        );
        
        if (filteredCities.length === 0) {
          dropdown.innerHTML = `<div class="dropdown-empty">${t('checkoutNoCities')}</div>`;
        } else {
          dropdown.innerHTML = filteredCities.slice(0, 10).map(city => {
            const cityName = city.name.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
            const cityRegion = city.region.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
            return `<div class="dropdown-item" onclick="selectCity('${cityName}', '${cityRegion}')">
              <div class="city-name">${city.name}</div>
              <div class="city-region">${city.region}</div>
            </div>`;
          }).join('');
        }
        dropdown.classList.add('show');
      }
    }, 200);
    return;
  }
  
  clearTimeout(citiesSearchTimeout);
  citiesSearchTimeout = setTimeout(() => {
    if (dropdown) {
      dropdown.innerHTML = '<div class="dropdown-empty">Пошук...</div>';
      dropdown.classList.add('show');
      
      // Запит до API Нової Пошти
      fetch(NOVA_POSHTA_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: NOVA_POSHTA_API_KEY,
          modelName: 'Address',
          calledMethod: 'searchSettlements',
          methodProperties: {
            CityName: query,
            Limit: 20
          }
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('API response (cities):', data);
        if (data.success && data.data && data.data.length > 0) {
          // API повертає масив об'єктів, де кожен об'єкт містить Addresses
          let allCities = [];
          data.data.forEach(item => {
            if (item.Addresses && Array.isArray(item.Addresses)) {
              allCities = allCities.concat(item.Addresses);
            }
          });
          
          if (allCities.length === 0) {
            dropdown.innerHTML = `<div class="dropdown-empty">${t('checkoutNoCities')}</div>`;
          } else {
            dropdown.innerHTML = allCities.slice(0, 20).map(city => {
              const cityName = city.MainDescription.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
              const cityRegion = city.Area || city.RegionDescription || '';
              // Використовуємо DeliveryCity як CityRef для getWarehouses
              // Якщо DeliveryCity порожній, використовуємо SettlementRef або Ref
              const cityRef = city.DeliveryCity || city.SettlementRef || city.Ref;
              return `<div class="dropdown-item" onclick="selectCityFromAPI('${cityName}', '${cityRegion}', '${cityRef}')">
                <div class="city-name">${city.MainDescription}</div>
                ${cityRegion ? `<div class="city-region">${cityRegion}</div>` : ''}
              </div>`;
            }).join('');
          }
        } else {
          dropdown.innerHTML = `<div class="dropdown-empty">${t('checkoutNoCities')}</div>`;
        }
      })
      .catch(error => {
        console.error('Помилка пошуку міст:', error);
        dropdown.innerHTML = `<div class="dropdown-empty">Помилка пошуку. Спробуйте ще раз.</div>`;
      });
    }
  }, 300);
}

// Функція вибору міста (старий спосіб - коли API не налаштовано)
function selectCity(cityName, cityRegion) {
  const cityInput = document.getElementById('novaCity');
  const cityRegionInput = document.getElementById('cityRegion');
  const dropdown = document.getElementById('citiesDropdown');
  
  if (cityInput) cityInput.value = cityName;
  if (cityRegionInput) cityRegionInput.value = cityRegion;
  selectedCityRef = ''; // При старому методі CityRef немає
  if (dropdown) {
    dropdown.classList.remove('show');
    dropdown.innerHTML = '';
  }
  
  // Очищаємо відділення
  const warehouseInput = document.getElementById('novaWarehouse');
  if (warehouseInput) warehouseInput.value = '';
  const warehousesDropdown = document.getElementById('warehousesDropdown');
  if (warehousesDropdown) {
    warehousesDropdown.classList.remove('show');
    warehousesDropdown.innerHTML = '';
  }
  loadedWarehouses = []; // Очищаємо збережений список
}

// Функція визначення назви області з поля Area або RegionDescription
function getRegionName(cityRegion) {
  if (!cityRegion) return null;
  
  // Прибираємо слово "область" та перетворюємо на нижній регістр
  let regionName = cityRegion.replace(/\s*область\s*/i, '').replace(/\s*обл\.?\s*/i, '').trim().toLowerCase();
  
  // Мапінг назв областей
  const regionMap = {
    'вінниц': 'вінницька',
    'волин': 'волинська',
    'дніпро': 'дніпропетровська',
    'дніпропетров': 'дніпропетровська',
    'донецьк': 'донецька',
    'житомир': 'житомирська',
    'закарпат': 'закарпатська',
    'запоріж': 'запорізька',
    'запорізьк': 'запорізька',
    'івано-франківськ': 'івано-франківська',
    'івано-франків': 'івано-франківська',
    'київськ': 'київська',
    'київ': 'київська',
    'кіровоград': 'кіровоградська',
    'луганськ': 'луганська',
    'львівськ': 'львівська',
    'львів': 'львівська',
    'миколаїв': 'миколаївська',
    'одеськ': 'одеська',
    'одеса': 'одеська',
    'полтавськ': 'полтавська',
    'полтава': 'полтавська',
    'рівненськ': 'рівненська',
    'рівне': 'рівненська',
    'сумськ': 'сумська',
    'суми': 'сумська',
    'тернопільськ': 'тернопільська',
    'тернопіль': 'тернопільська',
    'харківськ': 'харківська',
    'харків': 'харківська',
    'херсонськ': 'херсонська',
    'херсон': 'херсонська',
    'хмельницьк': 'хмельницька',
    'хмельниць': 'хмельницька',
    'черкаськ': 'черкаська',
    'черкаси': 'черкаська',
    'чернівецьк': 'чернівецька',
    'чернівці': 'чернівецька',
    'чернігівськ': 'чернігівська',
    'чернігів': 'чернігівська'
  };
  
  // Шукаємо співпадіння
  for (const [key, value] of Object.entries(regionMap)) {
    if (regionName.includes(key) || key.includes(regionName)) {
      return value;
    }
  }
  
  return regionName;
}

// Функція вибору міста з API
function selectCityFromAPI(cityName, cityRegion, cityRef) {
  const cityInput = document.getElementById('novaCity');
  const cityRegionInput = document.getElementById('cityRegion');
  const dropdown = document.getElementById('citiesDropdown');
  
  console.log('Вибрано місто:', cityName, 'Область:', cityRegion, 'CityRef:', cityRef);
  
  if (cityInput) cityInput.value = cityName;
  if (cityRegionInput) cityRegionInput.value = cityRegion;
  selectedCityRef = cityRef;
  selectedCityName = cityName;
  
  // Визначаємо область
  selectedRegion = getRegionName(cityRegion);
  console.log('Визначена область:', selectedRegion);
  
  if (dropdown) {
    dropdown.classList.remove('show');
    dropdown.innerHTML = '';
  }
  
  // Завантажуємо відділення для обраного міста/села
  loadWarehouses(cityRef, cityName);
}

// Функція отримання назви області з CityRef
function getRegionFromCityRef(cityRef, cityName) {
  // Треба спробувати отримати область з API або зберегти при виборі міста
  // Поки що спробуємо визначити по назві міста
  if (!cityName) return null;
  
  // Області України та їх обласні центри
  const regions = {
    'вінницька': 'Вінниця',
    'волинська': 'Луцьк',
    'дніпропетровська': 'Дніпро',
    'донецька': 'Донецьк',
    'житомирська': 'Житомир',
    'закарпатська': 'Ужгород',
    'запорізька': 'Запоріжжя',
    'івано-франківська': 'Івано-Франківськ',
    'київська': 'Київ',
    'кіровоградська': 'Кропивницький',
    'луганська': 'Луганськ',
    'львівська': 'Львів',
    'миколаївська': 'Миколаїв',
    'одеська': 'Одеса',
    'полтавська': 'Полтава',
    'рівненська': 'Рівне',
    'сумська': 'Суми',
    'тернопільська': 'Тернопіль',
    'харківська': 'Харків',
    'херсонська': 'Херсон',
    'хмельницька': 'Хмельницький',
    'черкаська': 'Черкаси',
    'чернівецька': 'Чернівці',
    'чернігівська': 'Чернігів'
  };
  
  // Шукаємо область по назві міста
  const cityLower = cityName.toLowerCase();
  for (const [region, center] of Object.entries(regions)) {
    if (cityLower.includes(center.toLowerCase()) || cityLower.includes(region)) {
      return region;
    }
  }
  
  return null;
}

// Функція завантаження відділень з файлу області
function loadWarehousesFromRegion(regionName) {
  return new Promise((resolve, reject) => {
    // Кешуємо завантажені області
    if (allWarehousesFromFile && allWarehousesFromFile.region === regionName) {
      console.log(`Файл області ${regionName} вже завантажений, використовуємо кеш`);
      resolve(allWarehousesFromFile.data);
      return;
    }
    
    if (!regionName) {
      reject(new Error('Назва області не вказана'));
      return;
    }
    
    // Формуємо назву файлу (переконуємося, що в нижньому регістрі)
    const filename = `city/warehouses-${regionName.toLowerCase()}.json`;
    console.log(`Завантажуємо файл області: ${filename}`);
    console.log(`Перевіряємо наявність файлу для області: ${regionName}`);
    
    // Завантажуємо файл області
    fetch(filename)
      .then(response => {
        console.log('Response status:', response.status, response.statusText);
        console.log('Response URL:', response.url);
        if (!response.ok) {
          console.error(`Файл не знайдено: ${filename}`);
          console.error('Можливо, сторінка відкрита через file:// протокол. Спробуйте запустити через локальний сервер (python3 -m http.server)');
          throw new Error(`HTTP error! status: ${response.status} ${response.statusText}. Файл: ${filename}`);
        }
        return response.json();
      })
      .then(data => {
        if (!Array.isArray(data)) {
          throw new Error('Файл не містить масив відділень');
        }
        // Кешуємо з інформацією про область
        allWarehousesFromFile = { region: regionName, data: data };
        console.log(`✅ Завантажено ${data.length} відділень з файлу ${filename}`);
        resolve(data);
      })
      .catch(error => {
        console.error(`❌ Помилка завантаження файлу ${filename}:`, error);
        reject(error);
      });
  });
}

// Функція завантаження відділень для міста з локального файлу
function loadWarehouses(cityRef, cityName) {
  const warehousesDropdown = document.getElementById('warehousesDropdown');
  const warehouseInput = document.getElementById('novaWarehouse');
  
  if (!warehousesDropdown || !warehouseInput) return;
  
  if (!cityRef) {
    console.error('CityRef не вказано');
    warehousesDropdown.innerHTML = '<div class="dropdown-empty">Помилка: не вказано місто</div>';
    return;
  }
  
  warehouseInput.value = '';
  warehousesDropdown.innerHTML = '<div class="dropdown-empty">Завантаження відділень...</div>';
  warehousesDropdown.classList.add('show');
  
  // Завантажуємо відділення через API
  fetch(NOVA_POSHTA_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      apiKey: NOVA_POSHTA_API_KEY,
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityRef: cityRef,
        Page: '1',
        Limit: '1000'
      }
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('API response (warehouses):', data);
    if (data.success && data.data && Array.isArray(data.data)) {
      let warehouses = data.data;
      
      console.log(`Завантажено ${warehouses.length} відділень для CityRef: ${cityRef}`);
      
      // Показуємо всі відділення та поштомати без фільтрації
      loadedWarehouses = warehouses;
      
      if (warehouses.length === 0) {
        warehousesDropdown.innerHTML = `<div class="dropdown-empty">Відділення не знайдено. Можна ввести номер відділення вручну.</div>`;
        warehousesDropdown.classList.remove('show');
      } else {
        // Сортуємо відділення за номером для зручності
        warehouses.sort((a, b) => {
          const numA = parseInt(a.Number) || 0;
          const numB = parseInt(b.Number) || 0;
          return numA - numB;
        });
        
        // Оновлюємо збережений список
        loadedWarehouses = warehouses;
        
        // Показуємо всі відділення
        displayWarehouses(warehouses);
        
        // Додаємо інформацію про кількість відділень
        console.log(`Завантажено ${warehouses.length} відділень`);
      }
    } else {
      warehousesDropdown.innerHTML = `<div class="dropdown-empty">Помилка: ${data.errors?.[0] || 'Невідома помилка'}</div>`;
      warehousesDropdown.classList.remove('show');
    }
  })
  .catch(error => {
    console.error('Помилка завантаження відділень:', error);
    warehousesDropdown.innerHTML = `<div class="dropdown-empty">Помилка завантаження відділень. Спробуйте ще раз.</div>`;
    warehousesDropdown.classList.remove('show');
  });
}

// Функція вибору відділення
function selectWarehouse(warehouseName) {
  const warehouseInput = document.getElementById('novaWarehouse');
  const warehousesDropdown = document.getElementById('warehousesDropdown');
  
  if (warehouseInput) warehouseInput.value = warehouseName;
  if (warehousesDropdown) {
    warehousesDropdown.classList.remove('show');
  }
}

// Функція пошуку відділень за номером або назвою
let warehousesSearchTimeout;
function searchWarehouses(query) {
  const warehousesDropdown = document.getElementById('warehousesDropdown');
  const warehouseInput = document.getElementById('novaWarehouse');
  
  if (!warehousesDropdown || !warehouseInput) return;
  
  // Якщо немає завантажених відділень, спробуємо завантажити
  if (loadedWarehouses.length === 0 && selectedCityRef) {
    loadWarehouses(selectedCityRef, '');
    return;
  }
  
  // Якщо немає завантажених відділень, дозволяємо ручний ввід
  if (loadedWarehouses.length === 0) {
    warehousesDropdown.classList.remove('show');
    return;
  }
  
  if (!query || query.length < 1) {
    // Показуємо всі відділення, якщо поле порожнє
    displayWarehouses(loadedWarehouses);
    return;
  }
  
  clearTimeout(warehousesSearchTimeout);
  
  // Якщо поле порожнє або дуже коротке, показуємо всі відділення
  if (query.length < 1) {
    displayWarehouses(loadedWarehouses);
    return;
  }
  
  // Для швидшого відгуку - зменшуємо затримку до 100мс
  warehousesSearchTimeout = setTimeout(() => {
    const normalizedQuery = query.toLowerCase().trim();
    
    // Фільтруємо відділення за номером або назвою
    const filteredWarehouses = loadedWarehouses.filter(warehouse => {
      const number = (warehouse.Number || '').toString();
      const description = (warehouse.Description || '').toLowerCase();
      // Пошук початок з введеного тексту (для швидшого пошуку за номером)
      return number.startsWith(normalizedQuery) || 
             number.includes(normalizedQuery) || 
             description.includes(normalizedQuery);
    });
    
    if (filteredWarehouses.length > 0) {
      displayWarehouses(filteredWarehouses);
    } else {
      // Якщо не знайдено - дозволяємо ручний ввід (приховуємо dropdown)
      warehousesDropdown.classList.remove('show');
    }
  }, 100);
}

// Функція відображення відділень
function displayWarehouses(warehouses) {
  const warehousesDropdown = document.getElementById('warehousesDropdown');
  if (!warehousesDropdown) return;
  
  if (warehouses.length === 0) {
    warehousesDropdown.innerHTML = `<div class="dropdown-empty">Відділення не знайдено</div>`;
    warehousesDropdown.classList.remove('show');
  } else {
    // Обмежуємо відображення до 50 найрелевантніших результатів для швидкості
    const displayList = warehouses.slice(0, 50);
    
    warehousesDropdown.innerHTML = displayList.map(warehouse => {
      const warehouseName = warehouse.Description.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');
      const warehouseNumber = warehouse.Number || '';
      return `<div class="dropdown-item" onclick="selectWarehouse('${warehouseName}')">
        <div class="city-name">${warehouse.Description}</div>
        ${warehouseNumber ? `<div class="city-region">№${warehouseNumber}</div>` : ''}
      </div>`;
    }).join('');
    
    // Якщо результатів більше 50, додаємо підказку
    if (warehouses.length > 50) {
      warehousesDropdown.innerHTML += `<div class="dropdown-empty" style="font-size: 0.85em; color: #666; padding: 8px;">
        Показано 50 з ${warehouses.length} відділень. Уточніть пошук для більш точних результатів.
      </div>`;
    }
    
    warehousesDropdown.classList.add('show');
  }
}

// Функція відкриття/закриття списку відділень
function toggleWarehousesDropdown() {
  const cityInput = document.getElementById('novaCity');
  if (!cityInput || !cityInput.value) {
    alert('Спочатку оберіть місто');
    return;
  }
  
  if (!selectedCityRef) {
    alert('Спочатку оберіть місто зі списку');
    return;
  }
  
  const warehousesDropdown = document.getElementById('warehousesDropdown');
  if (!warehousesDropdown) return;
  
  if (warehousesDropdown.classList.contains('show')) {
    warehousesDropdown.classList.remove('show');
  } else {
    // Завантажуємо відділення, якщо ще не завантажені
    if (loadedWarehouses.length === 0) {
      loadWarehouses(selectedCityRef, '');
    } else {
      // Показуємо всі відділення або відфільтровані
      const warehouseInput = document.getElementById('novaWarehouse');
      if (warehouseInput && warehouseInput.value) {
        searchWarehouses(warehouseInput.value);
      } else {
        displayWarehouses(loadedWarehouses);
      }
    }
  }
}

// Змінна для зберігання обробника кліку поза списком
let clickOutsideHandler = null;

function checkout(){
  if (!cart.length) {
    alert(t('checkoutEmpty'));
    return;
  }
  
  // Видаляємо попередній обробник, якщо він є
  if (clickOutsideHandler) {
    document.removeEventListener('click', clickOutsideHandler);
    clickOutsideHandler = null;
  }
  
  // Перевіряємо, чи в кошику тільки розмальовки (id 1-10)
  const hasOnlyColoring = cart.length > 0 && cart.every(id => id >= 1 && id <= 10);
  
  // Створюємо модальне вікно з формою
  const modal = document.createElement('div');
  modal.className = 'checkout-modal';
  modal.innerHTML = `
    <div class="checkout-modal-content">
      <span class="close-modal" onclick="closeCheckoutModal()">&times;</span>
      <div class="checkout-header">
        <h2>${t('checkoutTitle')}</h2>
        <p class="checkout-subtitle">${t('checkoutSubtitle')}</p>
      </div>
      <form id="checkoutForm" onsubmit="submitOrder(event)">
        <div class="form-group">
          <label for="customerName">${t('checkoutName')}</label>
          <input type="text" id="customerName" name="name" required placeholder="${t('checkoutNamePlaceholder')}">
        </div>
        <div class="form-group">
          <label for="customerSurname">${t('checkoutSurname')}</label>
          <input type="text" id="customerSurname" name="surname" required placeholder="${t('checkoutSurnamePlaceholder')}">
        </div>
        <div class="form-group">
          <label for="customerPhone">${t('checkoutPhone')}</label>
          <input type="tel" id="customerPhone" name="phone" required placeholder="+380XXXXXXXXX" pattern="[+]?[0-9]{10,12}">
        </div>
        <div class="form-group">
          <label for="novaCity">${t('checkoutCity')}</label>
          <div class="city-select-wrapper">
            <input type="text" id="novaCity" name="city" required 
                   placeholder="${t('checkoutCityPlaceholder')}" 
                   autocomplete="off"
                   oninput="searchCities(this.value)">
            <div id="citiesDropdown" class="dropdown-list"></div>
          </div>
          <input type="hidden" id="cityRegion" name="region">
        </div>
        <div class="form-group">
          <label for="novaWarehouse">${t('checkoutWarehouse')}</label>
          <div class="city-select-wrapper">
            <input type="text" id="novaWarehouse" name="warehouse" required 
                   placeholder="Введіть номер відділення (наприклад: №1) або адресу"
                   oninput="searchWarehouses(this.value)"
                   onclick="toggleWarehousesDropdown()">
            <div id="warehousesDropdown" class="dropdown-list"></div>
          </div>
          ${hasOnlyColoring ? `
          <div class="delivery-notice" style="margin-top: 10px; padding: 12px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 8px; font-size: 14px; color: #856404;">
            <strong>⚠️ ${t('coloringDeliveryNotice')}</strong>
          </div>
          ` : ''}
        </div>
        <div class="order-summary">
          <h3>${t('checkoutOrder')}</h3>
          <div id="orderItems"></div>
          <div class="order-total">
            <strong>${t('total')} <span id="orderTotal">0</span> ₴</strong>
          </div>
        </div>
        <div class="checkout-notice">
          <div class="notice-icon">📞</div>
          <p>${t('checkoutNotice')}</p>
        </div>
        <div class="checkout-notice" style="background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(33, 150, 243, 0.05)); border-left: 4px solid #2196F3;">
          <div class="notice-icon">📦</div>
          <p><strong>${t('shippingNotice')}</strong></p>
        </div>
        <div class="checkout-buttons">
          <button type="button" onclick="payWithLiqpay()" class="submit-order-btn liqpay-btn" style="background: linear-gradient(135deg, #2a9d8f 0%, #264653 100%); margin-bottom: 10px;">
            <span>💳 ${t('checkoutPayWithLiqpay')}</span>
          </button>
          <button type="submit" id="submitOrderBtn" class="submit-order-btn" style="background: var(--accent);">
            <span>${t('checkoutSubmit')}</span>
          </button>
        </div>
      </form>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Заповнюємо список товарів з урахуванням кількості
  const orderItems = modal.querySelector('#orderItems');
  let total = 0;
  const cartItems = {};
  cart.forEach(id => {
    cartItems[id] = (cartItems[id] || 0) + 1;
  });
  
  Object.keys(cartItems).forEach(id => {
    const p = products.find(x => x.id == id);
    const quantity = cartItems[id];
    const price = getProductPrice(id, quantity);
    total += price;
    orderItems.innerHTML += `
      <div class="order-item">
        <span>${p[lang].name} × ${quantity}</span>
        <span>${price} ₴</span>
      </div>
    `;
  });
  
  modal.querySelector('#orderTotal').textContent = total;
  
  // Додаємо обробник для закриття списку при натисканні Enter
  const cityInput = modal.querySelector('#novaCity');
  if (cityInput) {
    cityInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const dropdown = document.getElementById('citiesDropdown');
        if (dropdown && dropdown.classList.contains('show')) {
          // Якщо є відфільтровані міста, вибираємо перше
          const firstItem = dropdown.querySelector('.dropdown-item');
          if (firstItem) {
            firstItem.click();
          } else {
            // Якщо немає результатів, просто закриваємо список
            dropdown.classList.remove('show');
          }
        }
      }
    });
  }
  
  // Функція для закриття списку при кліку поза ним
  clickOutsideHandler = (e) => {
    // Перевіряємо, чи модальне вікно відкрите
    const modal = document.querySelector('.checkout-modal');
    if (!modal || !modal.classList.contains('show')) {
      return; // Якщо модальне вікно не відкрите, не обробляємо клік
    }
    
    const dropdown = document.getElementById('citiesDropdown');
    const cityWrapper = document.querySelector('.city-select-wrapper');
    const warehousesDropdown = document.getElementById('warehousesDropdown');
    const warehouseWrapper = document.querySelectorAll('.city-select-wrapper')[1];
    
    // Перевіряємо, чи клік був поза обгорткою з полем вводу та списком міст
    if (dropdown && dropdown.classList.contains('show') && cityWrapper) {
      if (!cityWrapper.contains(e.target)) {
        dropdown.classList.remove('show');
        dropdown.innerHTML = '';
      }
    }
    
    // Перевіряємо, чи клік був поза обгорткою з полем вводу та списком відділень
    if (warehousesDropdown && warehousesDropdown.classList.contains('show') && warehouseWrapper) {
      if (!warehouseWrapper.contains(e.target)) {
        warehousesDropdown.classList.remove('show');
      }
    }
  };
  
  // Додаємо обробник події на document БЕЗ capture фази
  document.addEventListener('click', clickOutsideHandler);
  
  // Показуємо модальне вікно
  setTimeout(() => modal.classList.add('show'), 10);
  
  // Закриваємо при кліку поза формою
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeCheckoutModal();
    }
  });
}

function closeCheckoutModal() {
  // Видаляємо обробник кліку поза списком
  if (clickOutsideHandler) {
    document.removeEventListener('click', clickOutsideHandler);
    clickOutsideHandler = null;
  }
  
  const modal = document.querySelector('.checkout-modal');
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.remove();
      // Очищаємо список міст
      const dropdown = document.getElementById('citiesDropdown');
      if (dropdown) {
        dropdown.classList.remove('show');
        dropdown.innerHTML = '';
      }
    }, 300);
  }
}

function submitOrder(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  // Показуємо індикатор завантаження
  const submitBtn = form.querySelector('#submitOrderBtn') || form.querySelector('.submit-order-btn:not(.liqpay-btn)');
  const originalText = submitBtn ? submitBtn.innerHTML : '';
  if (submitBtn) {
    submitBtn.innerHTML = `<span>${t('checkoutSending')}</span>`;
    submitBtn.disabled = true;
  }
  
  // Відправляємо замовлення в Telegram
  sendOrderToTelegram(data, 'заявка')
    .then(success => {
      if (success) {
        // Успішно відправлено
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        closeCheckoutModal();
        renderCart();
        renderCatalog();
        updateCartCount();
        alert(t('checkoutSuccess'));
        if (window.location.pathname.includes('cart.html')) {
          window.location.href = 'index.html';
        }
      } else {
        throw new Error('Помилка відправки в Telegram');
      }
    })
    .catch(error => {
      console.error('Помилка:', error);
      if (submitBtn) {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
      alert(t('checkoutError'));
    });
}

// Функція для відправки замовлення в Telegram
function sendOrderToTelegram(data, paymentMethod = 'заявка') {
  // ⚙️ НАЛАШТУВАННЯ - ЗАМІНІТЬ ЦІ ДВА РЯДКИ НА ВАШІ ДАНІ!
  const BOT_TOKEN = '8350738357:AAFQKOU61cuServhRPWQuVaUKTRpcAXG8Vs'; // Токен від @BotFather
  const CHAT_ID = '5591532260'; // Ваш Chat ID від @userinfobot
  
  // Групуємо товари
  const cartItems = {};
  cart.forEach(id => {
    cartItems[id] = (cartItems[id] || 0) + 1;
  });
  
  // Формуємо повідомлення для Telegram
  const paymentMethodText = paymentMethod === 'liqpay' ? '💳 ОПЛАТА ЧЕРЕЗ LIQPAY' : '🛒 НОВЕ ЗАМОВЛЕННЯ';
  let message = `${paymentMethodText}\n\n`;
  message += `👤 <b>Ім'я:</b> ${data.name}\n`;
  message += `👤 <b>Прізвище:</b> ${data.surname}\n`;
  message += `📞 <b>Телефон:</b> ${data.phone}\n`;
  message += `🏙️ <b>Місто/Село:</b> ${data.city}\n`;
  message += `📍 <b>Область:</b> ${data.region || 'Не вказано'}\n`;
  message += `🏢 <b>Відділення НП:</b> ${data.warehouse}\n`;
  if (paymentMethod === 'liqpay') {
    message += `💳 <b>Спосіб оплати:</b> LiqPay\n`;
  }
  message += `\n📦 <b>Товари:</b>\n`;
  
  Object.keys(cartItems).forEach((id, index) => {
    const p = products.find(x => x.id == id);
    const quantity = cartItems[id];
    const totalPrice = getProductPrice(id, quantity);
    message += `${index + 1}. ${p[lang].name} × ${quantity} = ${totalPrice} ₴\n`;
  });
  
  const total = Object.keys(cartItems).reduce((sum, id) => {
    return sum + getProductPrice(id, cartItems[id]);
  }, 0);
  
  message += `\n💰 <b>Загалом: ${total} ₴</b>\n`;
  message += `\n📅 ${new Date().toLocaleString('uk-UA', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  })}`;
  
  // Відправляємо через Telegram Bot API
  if (BOT_TOKEN !== 'YOUR_BOT_TOKEN' && CHAT_ID !== 'YOUR_CHAT_ID') {
    const apiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    return fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    })
    .then(response => response.json())
    .then(result => {
      if (result.ok) {
        console.log('Повідомлення в Telegram відправлено успішно');
        return true;
      } else {
        console.error('Помилка відправки в Telegram:', result);
        return false;
      }
    })
    .catch(error => {
      console.error('Помилка відправки в Telegram:', error);
      return false;
    });
  } else {
    console.warn('BOT_TOKEN або CHAT_ID не налаштовані');
    return Promise.resolve(false);
  }
}

// Функція для генерації підпису LiqPay (SHA1)
function generateLiqpaySignature(data) {
  // Створюємо рядок для підпису: private_key + data + private_key
  const stringToSign = LIQPAY_PRIVATE_KEY + data + LIQPAY_PRIVATE_KEY;
  
  // Використовуємо CryptoJS для SHA1
  if (typeof CryptoJS !== 'undefined') {
    return CryptoJS.SHA1(stringToSign).toString();
  } else if (typeof LiqPayCheckout !== 'undefined' && LiqPayCheckout.sha1) {
    return LiqPayCheckout.sha1(stringToSign);
  } else {
    console.warn('SHA1 не знайдено. Використовуйте CryptoJS або LiqPay SDK.');
    return '';
  }
}

// Функція для оплати через LiqPay
function payWithLiqpay() {
  // Перевіряємо налаштування
  if (LIQPAY_PUBLIC_KEY === 'YOUR_LIQPAY_PUBLIC_KEY' || LIQPAY_PRIVATE_KEY === 'YOUR_LIQPAY_PRIVATE_KEY') {
    alert('⚠️ Будь ласка, налаштуйте LIQPAY_PUBLIC_KEY та LIQPAY_PRIVATE_KEY в коді!');
    return;
  }
  
  // Отримуємо форму
  const form = document.getElementById('checkoutForm');
  if (!form) {
    alert('Помилка: форма не знайдена');
    return;
  }
  
  // Перевіряємо валідність форми
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  // Розраховуємо суму замовлення
  const cartItems = {};
  cart.forEach(id => {
    cartItems[id] = (cartItems[id] || 0) + 1;
  });
  
  const total = Object.keys(cartItems).reduce((sum, id) => {
    return sum + getProductPrice(id, cartItems[id]);
  }, 0);
  
  // Генеруємо унікальний ID замовлення
  const orderId = 'ORDER_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  
  // Формуємо опис замовлення
  let description = `Замовлення від ${data.name} ${data.surname}`;
  
  // Параметри для LiqPay
  const liqpayParams = {
    version: '3',
    public_key: LIQPAY_PUBLIC_KEY,
    action: 'pay',
    amount: total,
    currency: 'UAH',
    description: description,
    order_id: orderId,
    result_url: window.location.origin + '/index.html?payment=success',
    language: lang === 'uk' ? 'uk' : 'ru'
  };
  
  // Кодуємо параметри в base64
  const dataBase64 = btoa(JSON.stringify(liqpayParams));
  
  // Генеруємо підпис
  const signature = generateLiqpaySignature(dataBase64);
  
  if (!signature) {
    alert('Помилка: не вдалося згенерувати підпис. Перевірте підключення CryptoJS.');
    return;
  }
  
  // Відправляємо замовлення в Telegram перед переходом на оплату
  const liqpayBtn = form.querySelector('.liqpay-btn');
  const originalText = liqpayBtn ? liqpayBtn.innerHTML : '';
  if (liqpayBtn) {
    liqpayBtn.innerHTML = '<span>⏳ Відправка даних...</span>';
    liqpayBtn.disabled = true;
  }
  
  // Відправляємо повідомлення в Telegram
  sendOrderToTelegram(data, 'liqpay')
    .then(success => {
      // Продовжуємо з оплатою, навіть якщо Telegram не відправився
      // Створюємо форму оплати
      const paymentForm = document.createElement('form');
      paymentForm.method = 'POST';
      paymentForm.action = 'https://www.liqpay.ua/api/3/checkout';
      paymentForm.acceptCharset = 'utf-8';
      paymentForm.style.display = 'none';
      
      const dataInput = document.createElement('input');
      dataInput.type = 'hidden';
      dataInput.name = 'data';
      dataInput.value = dataBase64;
      paymentForm.appendChild(dataInput);
      
      const signatureInput = document.createElement('input');
      signatureInput.type = 'hidden';
      signatureInput.name = 'signature';
      signatureInput.value = signature;
      paymentForm.appendChild(signatureInput);
      
      // Додаємо форму на сторінку і відправляємо
      document.body.appendChild(paymentForm);
      paymentForm.submit();
      
      // Очищаємо кошик після успішної відправки форми оплати
      // (форма перенаправить на result_url після оплати)
    })
    .catch(error => {
      console.error('Помилка при відправці в Telegram:', error);
      // Все одно перенаправляємо на оплату
      const paymentForm = document.createElement('form');
      paymentForm.method = 'POST';
      paymentForm.action = 'https://www.liqpay.ua/api/3/checkout';
      paymentForm.acceptCharset = 'utf-8';
      paymentForm.style.display = 'none';
      
      const dataInput = document.createElement('input');
      dataInput.type = 'hidden';
      dataInput.name = 'data';
      dataInput.value = dataBase64;
      paymentForm.appendChild(dataInput);
      
      const signatureInput = document.createElement('input');
      signatureInput.type = 'hidden';
      signatureInput.name = 'signature';
      signatureInput.value = signature;
      paymentForm.appendChild(signatureInput);
      
      document.body.appendChild(paymentForm);
      paymentForm.submit();
    });
}

function toggleLang(){
  lang=lang==='uk'?'ru':'uk';
  localStorage.setItem('lang',lang);
  updatePageTexts();
  renderAll();
}

function toggleTheme(){
  const isDark = document.body.classList.contains('dark');
  if (isDark) {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  updateThemeButton();
}

function renderAll(){
  renderCategoryBlocks();
  renderCatalog();
  renderProduct();
  renderCart();
  updateCartCount();
  updatePageTexts();
}

// Очищаємо фільтри при закритті вкладки
window.addEventListener('beforeunload', () => {
  sessionStorage.removeItem('activeCategory');
  sessionStorage.removeItem('searchQuery');
});

document.addEventListener('DOMContentLoaded',()=>{
  // Очищаємо фільтри при завантаженні сторінки
  // Це гарантує, що після закриття вкладки фільтри скинуться
  sessionStorage.removeItem('activeCategory');
  sessionStorage.removeItem('searchQuery');
  
  // Очищаємо URL параметри категорії
  const url = new URL(window.location);
  if (url.searchParams.has('category')) {
    url.searchParams.delete('category');
    window.history.replaceState({}, '', url);
  }
  
  initTheme();
  initSearch();
  renderAll();
  initCarousel();
});