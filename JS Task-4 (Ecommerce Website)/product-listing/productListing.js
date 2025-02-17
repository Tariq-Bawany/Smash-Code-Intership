// Price range slider functionality
const priceRange = document.getElementById('priceRange');
priceRange.addEventListener('input', function() {
    const value = this.value;
    this.nextElementSibling.textContent = `$0 - $${value}`;
});


// Cart functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');
const productCounts = {};

document.querySelectorAll('.product-card').forEach((card, index) => {
    const addButton = card.querySelector('.add-to-cart');
    const cartInfo = card.querySelector('.cart-info');
    const removeButton = card.querySelector('.remove-from-cart');
    
    addButton.addEventListener('click', function() {
        cartCount++;
        cartCountElement.textContent = cartCount;
        
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
            cartCountElement.textContent = cartCount;
            productCounts[index] = 0;
            updateCartInfo(card, index);
        }
    });
});

function updateCartInfo(card, index) {
    const cartInfo = card.querySelector('.cart-info');
    const removeButton = card.querySelector('.remove-from-cart');
    
    if (productCounts[index] > 0) {
        cartInfo.style.display = 'block';
        cartInfo.textContent = `${productCounts[index]} in cart`;
        removeButton.style.display = 'block';
    } else {
        cartInfo.style.display = 'none';
        removeButton.style.display = 'none';
    }
}

// Search functionality


const searchInput = document.querySelector(".nav-search input");
const searchButton = document.querySelector('#search-button');
console.log(searchButton);


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

let cards = [
    {
        BestSeller : true,
        image : "https://m.media-amazon.com/images/I/71daWq9PJVL._AC_UL320_.jpg",
        name : "TrendPlain 16oz/470ml Olive Oil Sprayer for Cooking - 2 in 1 Olive Oil Dispenser for Kitchen Gadgets, Air Fryer, Salad, and BBQ - Black",
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
        image : "https://m.media-amazon.com/images/I/61XRVcpkxxL._AC_UL320_.jpg",
        name : "Immersion Blender Handheld Corded Hand Blender 1100W, Trigger Variable Speed 5 in 1 Stick Blender, Emulsion Blender with Chopper, Whisk and Frother for Soup, Baby Food and Smoothies",
        starRating : "★★★★★",
        totalRating : 2675,
        lastMonthBought : "10k+",
        discountedPrice : 39.99,
        originalPrice : 0,
        expectedDelivery : "Tue, Feb 25",
        deliveryLocation : "Pakistan"
    },
    {
        BestSeller : false,
        image : "https://m.media-amazon.com/images/I/71ygLu2o0OL._AC_UL320_.jpg",
        name : "Pyrex 3 Piece Measuring Cup Set, Includes 1, 2, and 4 Tempered Glass Liquid Measuring Cups, Dishwasher, Freezer, Microwave, and Oven Safe, Essential Kitchen Tools",
        starRating : "★★★★★",
        totalRating : 58972,
        lastMonthBought : "10k+",
        discountedPrice : 25.99,
        originalPrice : 0,
        expectedDelivery : "Tue, Feb 25",
        deliveryLocation : "Pakistan"
    },
    {
        BestSeller : false,
        image : "https://m.media-amazon.com/images/I/71QwoGmcfUL._AC_UL320_.jpg",
        name : "Ninja Air Fryer Pro 4-in-1 with 5 QT Capacity, Air Fry, Roast, Reheat, Dehydrate, Air Crisp Technology with 400F for hot, 120 Volts, Nonstick Basket & Crisper Plate, Grey, AF141",
        starRating : "★★★★★",
        totalRating : 3183,
        lastMonthBought : "10k+",
        discountedPrice : 89.99,
        originalPrice : 119.99,
        expectedDelivery : "Tue, Feb 25",
        deliveryLocation : "Pakistan"
    },
    {
        BestSeller : true,
        image : "https://m.media-amazon.com/images/I/81bpKKv68-L._AC_UL320_.jpg",
        name : "Alpha Grillers Instant Read Meat Thermometer for Cooking Grilling and Griddle Accessories Kitchen Essentials - Waterproof Backlight & Calibration",
        starRating : "★★★★★",
        totalRating : 72314,
        lastMonthBought : "60k+",
        discountedPrice : 15.99,
        originalPrice : 16.99,
        expectedDelivery : "Tue, Feb 25",
        deliveryLocation : "Pakistan"
    },
    {
        BestSeller : true,
        image : "https://m.media-amazon.com/images/I/81ZIPszdZ0L._AC_UL320_.jpg",
        name : "BIC Xtra-Smooth Pastel Mechanical Pencils with Erasers, Medium Point (0.7mm), 40-Count Pack, Bulk Mechanical Pencils for School or Office Supplies",
        starRating : "★★★★★",
        totalRating : 534,
        lastMonthBought : "10k+",
        discountedPrice : 8.33,
        originalPrice : 9.89,
        expectedDelivery : "Tue, Feb 25",
        deliveryLocation : "Pakistan"
    },
    {
        BestSeller : true,
        image : "https://m.media-amazon.com/images/I/71plOJQwFEL._AC_UL320_.jpg",
        name : "Phomemo Label Maker Machine, D30 Portable Handheld Bluetooth Mini Label Maker Printer, Multiple Templates for Smartphone Thermal Small Label Maker Rechargeable Easy to Use for Home Office School",
        starRating : "★★★★★",
        totalRating : 19315,
        lastMonthBought : "4k+",
        discountedPrice : 28.99,
        originalPrice : 36.99,
        expectedDelivery : "Tue, Feb 25",
        deliveryLocation : "Pakistan"
    },
    {
        BestSeller : false,
        image : "https://m.media-amazon.com/images/I/81qxJ-PgGLL._AC_UL320_.jpg",
        name : "Amazon Basics Wood-Cased #2 Pencils, Pre-sharpened, HB Lead Bulk Box, 150 Count, Yellow",
        starRating : "★★★★★",
        totalRating : 52797,
        lastMonthBought : "20k+",
        discountedPrice : 16.82,
        originalPrice : 0,
        expectedDelivery : "Tue, Feb 25",
        deliveryLocation : "Pakistan"
    },
    {
        BestSeller : false,
        image : "https://m.media-amazon.com/images/I/61mcgT64xQL._AC_UL320_.jpg",
        name : "Ddaowanx Gel Pens, 6 Pcs 0.5mm Quick Dry Black Ink Pens Fine Point Smooth Writing Pens, Cute Office School Supplies Gifts for Women",
        starRating : "★★★★★",
        totalRating : 2892,
        lastMonthBought : "20k+",
        discountedPrice : 7.99,
        originalPrice : 0,
        expectedDelivery : "Tue, Feb 25",
        deliveryLocation : "Pakistan"
    },
    {
        BestSeller : true,
        image : "https://m.media-amazon.com/images/I/81wGuZOL1fL._AC_UL320_.jpg",
        name : "Sharpie Permanent Markers Set, Quick Drying And Fade Resistant Fine Point Marker For Wood, Plastic, Paper, Metal, And More, Drawing, Coloring, And Poster Marker , Black, 12 Count",
        starRating : "★★★★★",
        totalRating : 44089,
        lastMonthBought : "50k+",
        discountedPrice : 9.98,
        originalPrice : 21.86,
        expectedDelivery : "Tue, Feb 25",
        deliveryLocation : "Pakistan"
    },
    {
        BestSeller : true,
        image : "http://m.media-amazon.com/images/I/61Y+Leafr0L._AC_UL320_.jpg",
        name : "18pack Travel Bottles for Toiletries,TSA Approved Silicone Travel size Containers for Toiletries,Leak Proof Refillable Liqus Shampoo And Conditioner Travel Essentials toiletry Bottles",
        starRating : "★★★★★",
        totalRating : 5493,
        lastMonthBought : "30k+",
        discountedPrice : 9.99,
        originalPrice : 12.99,
        expectedDelivery : "Tue, Feb 25",
        deliveryLocation : "Pakistan"
    },
    {
        BestSeller : false,
        image : "https://m.media-amazon.com/images/I/71qFujdontL._AC_UL320_.jpg",
        name : "Klearlook Universal Airplane Phone Holder, in Flight Travel Essentials Phone Holder Mount with Multi-Directional 360° Rotation, Travel Must Haves Handsfree Phone Stand for Flying, Home, Office",
        starRating : "★★★★★",
        totalRating : 4566,
        lastMonthBought : "1k+",
        discountedPrice : 9.98,
        originalPrice : 11.86,
        expectedDelivery : "Tue, Feb 25",
        deliveryLocation : "Pakistan"
    },
    {
        BestSeller : false,
        image : "https://m.media-amazon.com/images/I/61tF08WztyL._AC_UL320_.jpg",
        name : "TP-Link Ultra-Portable Wi-Fi 6 AX1500 Travel Router TL-WR1502X | Easy Public WiFi Sharing | Hotel/RV/Travel Approved | Phone WiFi Tether | USB C Powered | Multi-Mode | Tether App | Durable Design",
        starRating : "★★★★★",
        totalRating : 9388,
        lastMonthBought : "2k+",
        discountedPrice : 49.98,
        originalPrice : 59.86,
        expectedDelivery : "Tue, Feb 25",
        deliveryLocation : "Pakistan"
    },
    {
        BestSeller : false,
        image : "https://m.media-amazon.com/images/I/61NG35KnA1L._AC_UL320_.jpg",
        name : "Electric Razor for Men Foil Shaver Mini Portable Electric Shaver with 3 Blade Heads IPX7 Waterproof Wet/Dry USB-C Rechargeable LED Display Travel Razor for Face Beard Head-Black",
        starRating : "★★★★★",
        totalRating : 3,
        lastMonthBought : "50k+",
        discountedPrice : 39.98,
        originalPrice : 0,
        expectedDelivery : "Tue, Feb 25",
        deliveryLocation : "Pakistan"
    },
    {
        BestSeller : true,
        image : "https://m.media-amazon.com/images/I/51AUBUCQxFL._AC_UL320_.jpg",
        name : "Avantree Relay - Premium Airplane Bluetooth 5.3 Adapter, Supports 2 AirPods or Headphones with aptX Adaptive, 3.5mm AUX Jack Wireless Audio Transmitter for Planes, Airline, Travel, TV",
        starRating : "★★★★★",
        totalRating : 2958,
        lastMonthBought : "50k+",
        discountedPrice : 34.98,
        originalPrice : 49.86,
        expectedDelivery : "Tue, Feb 25",
        deliveryLocation : "Pakistan"
    },
]
let productGrid = document.querySelector(".product-grid")
cards.forEach((val,i)=>{
    productGrid.innerHTML +=`
    <div class="product-card">
                <span class="best-seller" style="display:${val.BestSeller == true ? "inline-block" :"none"}">Best Seller</span>
                <img src=${val.image} alt=${val.name} class="product-image">
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
                <button class="add-to-cart">Add to Cart</button>
                <div class="cart-info"></div>
                <button class="remove-from-cart">Remove from Cart</button>
            </div>
    `
})

