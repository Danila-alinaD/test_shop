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
    banner1Title: 'Нові колекції',
    banner1Text: 'Відкрийте для себе унікальні товари',
    banner2Title: 'Спеціальні пропозиції',
    banner2Text: 'Знижки до 50% на обрані товари',
    banner3Title: 'Якість та стиль',
    banner3Text: 'Тільки найкраще для вас',
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
    banner1Title: 'Новые коллекции',
    banner1Text: 'Откройте для себя уникальные товары',
    banner2Title: 'Специальные предложения',
    banner2Text: 'Скидки до 50% на выбранные товары',
    banner3Title: 'Качество и стиль',
    banner3Text: 'Только лучшее для вас',
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
            <div class="product-price">${p[lang].price} ₴</div>
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
    const totalPrice = p[lang].price * quantity;
    return `
      <div class="cart-item">
        <div class="cart-item-content">
          <img src="${p.images[0]}" alt="${p[lang].name}" class="cart-item-image">
          <div class="cart-item-info">
            <h3>${p[lang].name}</h3>
            <div class="cart-item-price">
              <div class="price">${p[lang].price} ₴</div>
              <span class="quantity">× ${quantity}</span>
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

function add(id){
  cart.push(id);
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

function removeFromCart(id) {
  // Видаляємо перший знайдений елемент з кошика
  const index = cart.indexOf(id);
  if (index > -1) {
    cart.splice(index, 1);
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
}

// Функція пошуку міст/сел
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
  
  clearTimeout(citiesSearchTimeout);
  citiesSearchTimeout = setTimeout(() => {
    if (dropdown) {
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
}

// Функція вибору міста
function selectCity(cityName, cityRegion) {
  const cityInput = document.getElementById('novaCity');
  const cityRegionInput = document.getElementById('cityRegion');
  const dropdown = document.getElementById('citiesDropdown');
  
  if (cityInput) cityInput.value = cityName;
  if (cityRegionInput) cityRegionInput.value = cityRegion;
  if (dropdown) {
    dropdown.classList.remove('show');
    dropdown.innerHTML = '';
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
          <input type="text" id="novaWarehouse" name="warehouse" required 
                 placeholder="${hasOnlyColoring ? 'Введіть номер або адресу відділення (поштомат недоступний для розмальовок)' : t('checkoutWarehousePlaceholder')}">
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
        <button type="submit" class="submit-order-btn">
          <span>${t('checkoutSubmit')}</span>
        </button>
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
    const price = p[lang].price * quantity;
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
    
    // Перевіряємо, чи клік був поза обгорткою з полем вводу та списком
    if (dropdown && dropdown.classList.contains('show') && cityWrapper) {
      if (!cityWrapper.contains(e.target)) {
        dropdown.classList.remove('show');
        dropdown.innerHTML = '';
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
  
  // ⚙️ НАЛАШТУВАННЯ - ЗАМІНІТЬ ЦІ ДВА РЯДКИ НА ВАШІ ДАНІ!
  const BOT_TOKEN = '8350738357:AAFQKOU61cuServhRPWQuVaUKTRpcAXG8Vs'; // Токен від @BotFather
  const CHAT_ID = '5591532260'; // Ваш Chat ID від @userinfobot
  
  // Групуємо товари
  const cartItems = {};
  cart.forEach(id => {
    cartItems[id] = (cartItems[id] || 0) + 1;
  });
  
  // Формуємо повідомлення для Telegram
  let message = `🛒 <b>НОВЕ ЗАМОВЛЕННЯ</b>\n\n`;
  message += `👤 <b>Ім'я:</b> ${data.name}\n`;
  message += `👤 <b>Прізвище:</b> ${data.surname}\n`;
  message += `📞 <b>Телефон:</b> ${data.phone}\n`;
  message += `🏙️ <b>Місто/Село:</b> ${data.city}\n`;
  message += `📍 <b>Область:</b> ${data.region || 'Не вказано'}\n`;
  message += `🏢 <b>Відділення НП:</b> ${data.warehouse}\n`;
  message += `\n📦 <b>Товари:</b>\n`;
  
  Object.keys(cartItems).forEach((id, index) => {
    const p = products.find(x => x.id == id);
    const quantity = cartItems[id];
    const totalPrice = p[lang].price * quantity;
    message += `${index + 1}. ${p[lang].name} × ${quantity} = ${totalPrice} ₴\n`;
  });
  
  const total = Object.keys(cartItems).reduce((sum, id) => {
    const p = products.find(x => x.id == id);
    return sum + (p[lang].price * cartItems[id]);
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
    
    // Показуємо індикатор завантаження
    const submitBtn = form.querySelector('.submit-order-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>${t('checkoutSending')}</span>`;
    submitBtn.disabled = true;
    
    fetch(apiUrl, {
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
    .then(data => {
      if (data.ok) {
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
        throw new Error(data.description || 'Помилка відправки');
      }
    })
    .catch(error => {
      console.error('Помилка:', error);
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      alert(t('checkoutError'));
    });
  } else {
    alert(t('checkoutConfigError'));
  }
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