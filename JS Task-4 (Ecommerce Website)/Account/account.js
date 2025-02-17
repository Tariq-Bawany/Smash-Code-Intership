// render all cards of Your Accounts
let dashboardContainer = document.querySelector(".dashboard-container")
let dashboardCards = [
    {
        name: "Your Orders",
        img: "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/order._CB660668735_.png",
        text: "Track, return, cancel an order, download invoice or buy again",
    },
    {
        name: "Login & Security",
        img: "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/security._CB659600413_.png",
        text: "Edit Login, name, and mobile number",
    },
    {
        name: "Prime",
        img: "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_prime._CB433666831_.png",
        text: "Manage your membership, view benefits, and payment settings",
    },
    {
        name: "Your Address",
        img: "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_address_book._CB613924977_.png",
        text: "Edit, remove or set default address",
    },
    {
        name: "Your Business Account",
        img: "https://m.media-amazon.com/images/G/01/AmazonBusiness/YAPATF/amazon_business_yap_atf._CB588250197_.jpg",
        text: "Sign up for free to save with business-only pricing and receive deliveries during business hours.",
    },
    {
        name: "Gift Catds",
        img: "https://m.media-amazon.com/images/G/01/x-locale/cs/contact-us/GiftCard_icon_01._CB660349069_.png",
        text: "View balance or redeem a card, and purchase a new Gift Card",
    },
    {
        name: "Your Payments",
        img: "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/payment._CB660668735_.png",
        text: "View all transactions, manage payment methods and settings",
    },
    {
        name: "Your Amazon Family",
        img: "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/account._CB660668669_.png",
        text: "Manage profiles, sharing, and permissions in one place",
    },
    {
        name: "Digital Services and Device Support",
        img: "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/digital_devices._CB660668735_.png",
        text: "Troubleshoot  device issues, manage or cancel digital subscriptions",
    },
    {
        name: "Archived Orders",
        img: "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/10_archived_orders._CB654640573_.png",
        text: "View and manage your archived orders",
    },
    {
        name: "Your Lists",
        img: "https://m.media-amazon.com/images/G/01/AmazonBusiness/YAPATF/amazon_business_yap_atf._CB588250197_.jpg",
        text: "Sign up for free to save with business-only pricing and receive deliveries during business hours.",
    },
    {
        name: "Customer Service",
        img: "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/contact_us._CB659962323_.png",
        text: "Browse self service options, help articles or contact us",
    },
    {
        name: "Your Messages",
        img: "https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/9_messages._CB654640573_.jpg",
        text: "View or respond to messages from Amazon, Sellers and Buyers ",
    },
]

dashboardCards.forEach((val, i) => {
    dashboardContainer.innerHTML += `
    <div class="card" id="dashboard-card${i}">
        <div class="card-img">
            <img src=${val.img}>
        </div>
        <div class="card-text">
            <h2>${val.name}</h2>
            <p>${val.text}</p>
        </div>
                        
    </div>
    `
})

let modalContainer = document.querySelector(".modal-container")
dashboardContainer.addEventListener('click',(events)=>{
    if(events.target.tagName == "DIV"){
        // console.log(events.target);
        let targetID = events.target.id;
        let targetCard = document.getElementById(targetID)
        let targetIndex = targetID.slice(14)
        modalContainer.innerHTML =`
            <span>The <b>${dashboardCards[targetIndex].name}</b> section has no functionality</span>
        
        `
        modalContainer.style.display = "flex"
        // after 1.8s the modal will display none
        setTimeout(() => {
            modalContainer.style.display = "none"
            
        }, 1800);
        
        
        
    }
    
    
})

