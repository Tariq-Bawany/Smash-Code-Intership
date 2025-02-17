let signInContinueBtn =document.getElementById("signIn-continue-button")
console.log(signInContinueBtn);

function login() {
    let email = document.getElementById("signIn-email-mobile").value.trim();
    let password = document.getElementById("signIn-password").value.trim();
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // reset settings
    document.getElementById("invalid-credentials").style.display = "none";
    document.getElementById("email-alert").style.display = "none";
    document.getElementById("password-alert").style.display = "none";

    let isValid =true;
    if (email === "") {
        document.getElementById("email-alert").style.display = "block";
        isValid =false;
    }
    if (password === "") {
        document.getElementById("invalid-credentials").style.display = "none";
        document.getElementById("password-alert").style.display = "block";
        isValid =false;
    }
    let validUser = users.find(user => user.email === email && user.password === password);
    // console.log(validUser);
    
    

    if (validUser) {
        // document.getElementById("login-message").innerText = "Login successful!";
        document.querySelector(".modal").textContent = "Login Successful!"
        document.querySelector(".modal").style.top = "10%"
        localStorage.setItem("loggedInUser", JSON.stringify(validUser));
        
        setTimeout(() => {
            window.location.href = "/index.html";
            
        }, 2500);
    } else {
        // document.getElementById("login-message").innerText = "Invalid credentials!";
        console.log("Invalid");
        document.getElementById("password-alert").style.display = "none";
        document.getElementById("invalid-credentials").style.display = "block"
        
    }
}

signInContinueBtn.addEventListener("click",login)