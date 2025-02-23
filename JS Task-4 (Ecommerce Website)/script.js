import { cartCount } from "./product-listing/productListing.js";

let amazonWholeCart = document.getElementById("amazon-cart");
// console.log(amazonWholeCart);
let categoryCards = [
  {
    heading: "Get your game on",
    fullSize: true,
    Image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg",
    fullWidth: false,
  },
  {
    heading: "Gaming accessories",
    fullSize: false,
    fullWidth: false,
    itemNames: ["Headsets", "Keyboards", "Computer mice", "Chairs"],
    itemImages: ["https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"],
  },
  {
    heading: "Shop for your home essentials",
    fullSize: false,
    fullWidth: false,
    itemNames: ["Cleaning Tools", "Home Storage", "Home Decor", "Bedding"],
    itemImages: ["https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_1x._SY116_CB563137408_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_1x._SY116_CB563137408_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeDecor_1x._SY116_CB563137408_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Bedding_1x._SY116_CB563137408_.jpg"],
  },
  {
    heading: "Shop deals in Fashion",
    fullSize: false,
    fullWidth: false,
    itemNames: ["Jeans Under $50", "Tops Under $25", "Dress under $50", "Shoes Under $50"],
    itemImages: ["https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg"],
  },
  {
    heading: "New home arrivals under $50",
    fullSize: false,
    fullWidth: false,
    itemNames: ["Kitchen & dining", "Home Improvement", "Decor", "Bedding & Bath"],
    itemImages: ["https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_315_HP_NewArrivals_QuadCard_D_01_1x._SY116_CB555960040_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_316_HP_NewArrivals_QuadCard_D_02_1x._SY116_CB555960040_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_317_HP_NewArrivals_QuadCard_D_03_1x._SY116_CB555960040_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HomeLifestyle/HomeSummerFlip/Homepage/QuadCards/Home_Flip_Summer_2024_318_HP_NewArrivals_QuadCard_D_04_1x._SY116_CB555960040_.jpg"],
  },
  {
    heading: "Toys under $25",
    fullSize: true,
    fullWidth: false,
    Image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg",
  },
  {
    heading: "New year, now you",
    fullSize: true,
    fullWidth: false,
    Image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/NYNY/Fuji_New_year_now_you_Dashboard_card_1X_EN._SY304_CB538057220_.jpg",
  },
  {
    heading: "Refresh Your Space",
    fullSize: false,
    fullWidth: false,
    itemNames: ["Dining", "Home", "Kitchen", "Health & Beauty"],
    itemImages: ["https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg"],
  },
  {
    heading: "Refresh Your Space",
    fullSize: false,
    fullWidth: false,
    itemNames: ["Dining", "Home", "Kitchen", "Health & Beauty"],
    itemImages: ["https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg"],
    d_small_block: true
  },
  {
    heading: "Most Wished for in Video Games",
    fullSize: false,
    fullWidth: true,
    all_Images: ["https://m.media-amazon.com/images/I/71wpE+ZIehL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/71W5GcQ8-JL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/715w7purSbL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/71Cgu-PiP6L._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/61tWTfjqlOL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/81gTTc2IpCL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/81LLoGOJ9RL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/41ECK5cY-2L._AC_SY200_.jpg"],
    hasLandscapeImage: true,
  },
  {
    heading: "Top Picks In Pakistan",
    fullSize: false,
    fullWidth: true,
    all_Images: ["https://m.media-amazon.com/images/I/61miFN7sKAL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/71Joo4OMaJL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/51RqdBa-uaL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/61TVMGeqXGL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/614zy21bM3L._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/81az21Lp1uL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/61joErBxERL._AC_SY200_.jpg", "https://m.media-amazon.com/images/I/61joErBxERL._AC_SY200_.jpg"],
    hasLandscapeImage: false,
  },
  {
    heading: "Most-loved travel essentials",
    fullSize: false,
    fullWidth: false,
    itemNames: ["Backpacks", "Suitcase", "Accessories", "Handbags"],
    itemImages: ["https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Backpack_1x._SY116_CB566100767_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/TravelBag_1x._SY116_CB566100767_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Accessories_1x._SY116_CB566100767_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Handbags_1x._SY116_CB566100767_.jpg"],
  },
  {
    heading: "Level up your beauty routine",
    fullSize: false,
    fullWidth: false,
    itemNames: ["MakeUp", "Brushes", "Sponges", "Mirror"],
    itemImages: ["https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Make-up._SY116_CB558654384_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Make-up._SY116_CB558654384_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Sponges._SY116_CB558654384_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Mirrors._SY116_CB558654384_.jpg"],
  },
  {
    heading: "Have more fun with family",
    fullSize: false,
    fullWidth: false,
    itemNames: ["Outdoor Play Sets", "Learning Toys", "Action Figures", "Pretend Play Toys"],
    itemImages: ["https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Playground_sets._SY116_CB558654384_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_STEM_toys_or_learning_toys._SY116_CB558654384_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Action_figure._SY116_CB558654384_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Pretend_Play_Toys._SY116_CB558654384_.jpg"],
  },
  {
    heading: "Fantastic Finds for Home",
    fullSize: false,
    fullWidth: false,
    itemNames: ["Kitchen", "Home Decor", "Dining", "Smart Home"],
    itemImages: ["https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Kitchen._SY116_CB558654384_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Home_decor._SY116_CB558654384_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Dining._SY116_CB558654384_.jpg", "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_1x_Smart_home._SY116_CB558654384_.jpg"],
    d_small_none: true,
  },





]
categoryCards.forEach((val, i) => {
  if (val.fullSize == true && val.fullWidth == false) {
    amazonWholeCart.innerHTML += `
        <div class="category-card">
        <h2>${val.heading}</h2>
        <div class="category-container full-size">
          <div class="item">
            <img class="full-size-img"
              src="${val.Image}"
              alt="${val.heading}">
          </div>
        </div>
        <a href="/product-listing/productListing.html" class="see-more ">Shop Gaming</a>
      </div>
        `
  } else if (val.fullSize == false && val.fullWidth == false) {
    amazonWholeCart.innerHTML += `
        <div class="category-card ${val.d_small_block == true ? "d-small-block" : ""} ${val.d_small_none == true ? "d-small-none" : ""}">
        <h2>${val.heading}</h2>
        <div class="category-container">
          <div class="item">
            <img
              src="${val.itemImages[0]}"
              alt="${val.itemNames[0]}">
            <p>${val.itemNames[0]}</p>
          </div>
          <div class="item">
            <img
              src="${val.itemImages[1]}"
              alt="${val.itemNames[1]}">
            <p>${val.itemNames[1]}</p>
          </div>
          <div class="item">
            <img
              src="${val.itemImages[2]}"
              alt="${val.itemNames[2]}">
            <p>${val.itemNames[2]}</p>
          </div>
          <div class="item">
            <img
              src="${val.itemImages[3]}"
              alt="${val.itemNames[3]}">
            <p>${val.itemNames[3]}</p>
          </div>
        </div>
        <a href="/product-listing/productListing.html" class="see-more ">See more</a>
      </div>
       `
  } else if (val.fullSize == false && val.fullWidth == true) {
    amazonWholeCart.innerHTML += `
        <div class="category-card full-width">
        <h2>Most Wished for in Video Games</h2>
        <div class="icons">
          <i class="fa-solid fa-chevron-left"></i>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div class="single-category">
          <img src="${val.all_Images[0]}"
            alt="Image-1">
          <img src="${val.all_Images[1]}" alt="Image-2">
          <img src="${val.all_Images[2]}" alt="Image-3">
          <img src="${val.all_Images[3]}" alt="Image-4">
          <img class="${val.hasLandscapeImage == true ? "landscape-img" : ""}" src="${val.all_Images[4]}"alt="Image-5">
          <img src="${val.all_Images[5]}" alt="Image-6">
          <img src="${val.all_Images[6]}" alt="Image-7">
          <img src="${val.all_Images[7]}" alt="Image-8">
        </div>
      </div>
        `
  }
})

amazonWholeCart.addEventListener("click", (e) => {
  if (e.target.tagName == "IMG" || e.target.tagName == "A") {
    window.location.href = "/product-listing/productListing.html"
  }
})

const cartCountElement = document.querySelectorAll('.cart-counter');

// cartCountElement.forEach(counter => {
//   counter.textContent = cartCount
// })
