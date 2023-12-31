import * as catalogue from './products-catalogue.js';
async function loadProductsData() {

    return  {'products': catalogue};
  }
  
  const catalogue = loadProductsData()
  .then(catalogue => {
  
    document.addEventListener('partialsLoaded', () => {
  
      import('./cart.js');
      import('./cart-badge.js');
      import('./header.js');
      import('./footer.js');
  
      const websiteLogo = document.querySelector('.websiteLogo');
      websiteLogo.style.cursor = 'pointer';
      websiteLogo.addEventListener('click', () => window.location.href = "index.html");
    
      const productsArea = document.querySelector('.storehome__products-container');
      const pageButtonsContainer = document.querySelector('.storehome__pageindex-container');
    
      let selectedButton = null;
    
      function updatePageButtons() {  
    
        const pageCountSelect = document.querySelector('.storehome__pagestyle-selector');
        const productsPerPage = parseInt(pageCountSelect.value);
    
        const totalProducts = catalogue.products.length;
    
        pageButtonsContainer.innerHTML = '';
    
        const pageCount = Math.ceil(totalProducts / productsPerPage);
    
        for (let i = 1; i <= pageCount; i++) {
          const button = document.createElement('span');
          button.classList.add('button', 'storehome__pageindex');
          button.textContent = i;
          pageButtonsContainer.appendChild(button);
    
          button.addEventListener('click', () => {
            if (selectedButton) {
              selectedButton.classList.remove('selected');
            }
            selectedButton = button;
            selectedButton.classList.add('selected');
            showProductsByPage(i, productsPerPage);
          });
        }
    
        if (pageCount > 0) {
          selectedButton = pageButtonsContainer.querySelector('.storehome__pageindex');
          selectedButton.classList.add('selected');
          showProductsByPage(1, productsPerPage);
        }
      }
    
      function showProductsByPage(currentPage, productsPerPage) {
        productsArea.innerHTML = '';
    
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
    
        for (let i = startIndex; i < endIndex && i < catalogue.products.length; i++) {
          const item = catalogue.products[i];
          productsArea.innerHTML += `
            <div class="storehome__productcard">
                <a class="storehome__link" href="store-product.html?id=${item.code}">
                <figure class="storehome__figure">
                    <img class="storehome__img" src=${item.images[0]} alt="Bottle of ${item.name}" />
                    <figcaption class="storehome__caption">${item.name}</figcaption>
                </figure>
                </a>
                <p class="storehome__price">${item.price + ',00 ' + item.currency}</p>
                <div class="button storehome__button add-btn">Buy</div>
            </div>
          `;
        }
  
        const buyBtns = document.querySelectorAll('.add-btn');
        const cartCounter = document.querySelector('.cart-badge__counter');
        let itemCount = Number(cartCounter.textContent);
        buyBtns.forEach(btn => {
          btn.addEventListener('click', () => {
              itemCount++;
              cartCounter.textContent = itemCount;
          });
      }); 
      }
  
      const pageCountSelect = document.querySelector('.storehome__pagestyle-selector');
      pageCountSelect.addEventListener('change', updatePageButtons);
    
      updatePageButtons();
    });
  })
  
  
  