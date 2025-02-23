// render all cards in Product Listings
let cards = [
    {
        BestSeller : true,
        mainImage : "https://m.media-amazon.com/images/I/71daWq9PJVL._AC_SX679_.jpg",
        image2 : "https://m.media-amazon.com/images/I/71BDp1r9FSL._AC_SX679_.jpg",
        image3 : "https://m.media-amazon.com/images/I/71vvFfHKsvL._AC_SX679_.jpg",
        image4 : "https://m.media-amazon.com/images/I/8112wBUMp9L._AC_SX679_.jpg",
        name : "TrendPlain 16oz/470ml Olive Oil Sprayer for Cooking - 2 in 1 Olive Oil Dispenser for Kitchen Gadgets, Air Fryer, Salad, and BBQ - Black",
        topHighLightHeadings :["brand", "Material","Bottle type"],
        topHighLightValues :["TrendPlain", "Glass","Standard Bottle"],
        aboutThisItem :["Lifetime Assurance: We stand behind the quality of our olive oil dispenser bottle. If you're unsatisfied or face any issues, contact us anytime. We offer lifetime support to ensure you are fully satisfied with this essential kitchen essential","Dual Dispensing: This 2 in 1 oil dispenser and oil sprayer allows you to spray or pour with ease. It’s a versatile oil dispenser bottle spray and pour solution, keeping your kitchen organized and efficient","Precision Spray Nozzle: The olive oil spray bottle features a nozzle that delivers a fine mist or steady stream, offering precise control. It’s perfect for drizzling or spraying, making it an essential oil bottles for kitchen"],
        note:"Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.",
        starRating : "★★★★★",
        totalRating : 13441,
        lastMonthBought : "10k+",
        discountedPrice : 8.99,
        originalPrice : 9.99,
        expectedDelivery : "Tue, Feb 25",
        deliveryLocation : "Pakistan"
    },
    {
        BestSeller : true,
        mainImage : "https://m.media-amazon.com/images/I/71ygLu2o0OL._AC_SX466_.jpg",
        image2 : "https://m.media-amazon.com/images/I/711mMrJeTGL._AC_SX679_.jpg",
        image3 : "https://m.media-amazon.com/images/I/71UukWhRyaL._AC_SX679_.jpg",
        image4 : "https://m.media-amazon.com/images/I/81M+gSoqyGL._AC_SX679_.jpg",
        name : "Pyrex 3 Piece Measuring Cup Set, Includes 1, 2, and 4 Tempered Glass Liquid Measuring Cups, Dishwasher, Freezer, Microwave, and Oven Safe, Essential Kitchen Tools",
        topHighLightHeadings :["brand", "Material","Capacity"],
        topHighLightValues :["Pyrex", "Glass","4 Cups"],
        aboutThisItem :["3-PIECE: Includes 1-cup, 2-cup, and 4-cup measuring cups that are perfect for baking, cooking, mixing and more. Dimensions for 1 cup: 6'' diameter x 4.5'' high. Dimensions for 2 cup: 6.5'' diameter x 4.5'' high. Dimensions for 4 cup: 8'' diameter x 6'' high.",
        "EASY TO READ: Featuring bold and large measurements in both ounces and milliliters making this effortless to read.",
        "EASY GRIP HANDLES: Adding milk to your cake batter, We got you covered. All Pyrex measuring cups feature a curved spout for non-mess pouring and easy-grip handles for comfort."],
        note:"Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.",
        starRating : "★★★★★",
        totalRating : 58982,
        lastMonthBought : "10k+",
        discountedPrice : 25.99,
        originalPrice : 0,
        expectedDelivery : "Tue, Feb 25",
        deliveryLocation : "Pakistan"
    },
    
    
   
]
let productGrid = document.querySelector(".product-grid")

cards.forEach((val,i)=>{
    productGrid.innerHTML +=`
    <div class="product-card" id="card-${i}">
                <span class="best-seller" style="display:${val.BestSeller == true ? "inline-block" :"none"}">Best Seller</span>
                <img src=${val.mainImage} alt=${val.name} class="product-image">
                <h2 class="product-title">${val.name}</h2>
                <div class="rating">★★★★★ <span>(${val.totalRating})</span></div>
                <div class="last-month-buying"><b>10k+</b> bought in past month</div>
                <div class="price">$${val.discountedPrice} <span class="original-price" style="display:${val.originalPrice==0 ? "none":"inline-block"}">List:$${val.originalPrice}</span></div>
                <div class="delivery-info">
                    <div class="delivery-time">
                        Delivery <b>${val.expectedDelivery}</b>
                    </div>
                    <div class="delivery-location">Ships to ${val.deliveryLocation}</div>
                </div>
                <button class="add-to-cart">Add to Cart</button><br>
                <span class="cart-info"></span>
                <button class="remove-from-cart">Remove</button>
            </div>
    `
})


// Price range slider functionality
const priceRange = document.getElementById('priceRange');
priceRange.addEventListener('input', function() {
    const value = this.value;
    this.nextElementSibling.textContent = `$0 - $${value}`;
});


// Cart functionality
let cartCount = 0;
const cartCountElement = document.querySelectorAll('.cart-counter');
// console.log(cartCountElement);

const productCounts = {};

document.querySelectorAll('.product-card').forEach((card, index) => {
    const addButton = card.querySelector('.add-to-cart');
    const cartInfo = card.querySelector('.cart-info');
    const removeButton = card.querySelector('.remove-from-cart');
    
    addButton.addEventListener('click', function() {
        cartCount++;
        cartCountElement.forEach(counter=>{
            counter.textContent = cartCount
        })
        // cartCountElement.innerHTML = "";
        // cartCountElement.innerHTML = cartCount;
        // console.log(cartCount);
        
        
        if (!productCounts[index]) {
            productCounts[index] = 0;
        }
        productCounts[index]++;
        
        updateCartInfo(card, index);
        
        // Animation effect
        this.style.background = '#4CAF50';
        this.textContent = 'Added!';
        
        setTimeout(() => {
            this.style.background = '#ffd814';
            this.textContent = 'Add to Cart';
        }, 1000);
    });
    
    removeButton.addEventListener('click', function() {
        if (productCounts[index]) {
            cartCount -= productCounts[index];
            cartCountElement.forEach(counter=>{
                counter.textContent = cartCount
            })
            // cartCountElement.innerHTML = cartCount;
            productCounts[index] = 0;
            updateCartInfo(card, index);
        }
    });
});

function updateCartInfo(card, index) {
    const cartInfo = card.querySelector('.cart-info');
    const removeButton = card.querySelector('.remove-from-cart');
    
    if (productCounts[index] > 0) {
        cartInfo.style.display = 'inline';
        cartInfo.textContent = `${productCounts[index]} in cart`;
        removeButton.style.display = 'inline';
    } else {
        cartInfo.style.display = 'none';
        removeButton.style.display = 'none';
    }
}

// Search functionality


const searchInput = document.querySelector(".nav-search input");
const searchButton = document.querySelector('#search-button');
// console.log(searchButton);


searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const products = document.querySelectorAll('.product-title');
    
    products.forEach(product => {
        const card = product.closest('.product-card');
        if(product.textContent.toLowerCase().includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});




function productEventDelegation(e) {
    if (e.target.tagName != "BUTTON") {
        const productCardId = e.target.closest(".product-card").id; //saves productCardId 
        const indexNo = productCardId.slice(5)
        // console.log(indexNo);
        renderProductDisplay(indexNo)
    }   
    
}

productGrid.addEventListener("click",productEventDelegation)


function renderProductDisplay(index) {
    const productListPage = document.getElementById("productListPage")
    const productDetailPage = document.getElementById("productDetailPage")
    setTimeout(() => {
        productListPage.style.display = "none"
        productDetailPage.style.display ="block"
    }, 600);

    // discount & discount percentage handling
    let discount = cards[index].originalPrice - cards[index].discountedPrice
    let discountPercentage  = cards[index].originalPrice != 0 ? discount/cards[index].originalPrice *100 : 0
    
    
    let val = cards[index]
    // console.log(index);
    const productDetailContainer = document.querySelector(".product-detail-container")
    productDetailContainer.innerHTML = `
    <div class="product-images">
        <div class="main-image-container">
          <img src="${val.mainImage}" alt="Main Product Image"
            class="main-image">
        </div>
        <div class="thumbnail-list">
          <img src="${val.mainImage}" alt="Thumbnail 1" class="thumbnail">
          <img src="${val.image2}" alt="Thumbnail 2" class="thumbnail">
          <img src="${val.image3}" alt="Thumbnail 3" class="thumbnail">
          <img src="${val.image4}" alt="Thumbnail 4" class="thumbnail">
        </div>
      </div>

      <div class="product-info-actions-buttons">
        <div class="product-info">

          <h1 class="product-title">${val.name}</h1>

          <div class="rating-container">
            <div class="stars">${val.starRating}</div>
            <span>${val.totalRating} ratings</span>
            <button class="share-button">
              <i class="fas fa-share-alt"></i> Share
            </button>
          </div>

          <div class="price-container">
            $${val.discountedPrice}
            <span class="original-price" style="display:${val.originalPrice==0?"none":"inline-block"}">$${val.originalPrice}</span>
            <span class="discount">${discountPercentage.toFixed(1)}%</span>
          </div>

          <div>
            <h3>Color: Black</h3>
            <div class="color-options">
              <div class="color-option selected">
                <img src="https://images.unsplash.com/photo-1585237672814-8f85a8118bf5" alt="Black">
              </div>
              <div class="color-option">
                <img src="https://images.unsplash.com/photo-1585237672814-8f85a8118bf5" alt="White">
              </div>
            </div>
          </div>
          <div class="product-details">
            <h2>Product Details</h2>
            <div class="details-section">
              <h3>Top highlights</h3>
              <table>
                <tr>
                    <th>${val.topHighLightHeadings[0]}</th>
                    <td>${val.topHighLightValues[0]}</td>
                </tr>
                <tr>
                    <th>${val.topHighLightHeadings[1]}</th>
                    <td>${val.topHighLightValues[1]}</td>
                </tr>
                <tr>
                    <th>${val.topHighLightHeadings[2]}</th>
                    <td>${val.topHighLightValues[2]}</td>
                </tr>
              </table>
            </div>
  
            <div class="details-section">
              <h3>About this item</h3>
              <ul>
                <li>${val.aboutThisItem[0]}</li>
                <li>${val.aboutThisItem[1]}</li>
                <li>${val.aboutThisItem[2]}</li>
              </ul>
            </div>
  
            <div class="details-section">
              <p><b>Note:</b> ${val.note}</p>
            </div>
          </div>

          
        </div>
        <div class="action-buttons-details">
          <div class="action-buttons">
            <button class="detail-add-to-cart">Add to Cart</button>
            <div class="detail-cart-info"></div>
            <button class="detail-remove-button">Remove from Cart</button>
            <button class="buy-now">Buy Now</button>
          </div>
          <div class="action-details">
            <table>
              <tr>
                <td>Ships from</td>
                <td>Amazon</td>
              </tr>
              <tr>
                <td>Sold by</td>
                <td class="action-details-hover">${val.topHighLightValues[0]}</td>    
              </tr>
              <tr>
                <td>Returns</td>
                <td class="action-details-hover">30-day refund/replacement</td>
              </tr>
              <tr>
                <td>Payment</td>
                <td class="action-details-hover">Secure transaction</td>
              </tr>
            </table>
          </div>
          <div class="see-more">
            <i class="fa-solid fa-chevron-down"></i>
            <span>see more</span>
          </div>
        </div>
      </div>
    `

    
}

// Go back to product list when back button is clicked
const backButton =document.getElementById("backButton");
backButton.addEventListener('click', () => {
    productDetailPage.style.display = 'none';
    productListPage.style.display = 'flex';
});

export {cartCount}