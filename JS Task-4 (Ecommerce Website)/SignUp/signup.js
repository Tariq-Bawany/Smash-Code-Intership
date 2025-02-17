let signUpContinueBtn = document.getElementById("signUp-continue-button");

function signup() {
    let name = document.getElementById("signUp-name").value.trim();
    let email = document.getElementById("signUp-email-mobile").value.trim();
    let password = document.getElementById("signUp-password").value.trim();
    let confirmPassword = document.getElementById("signUp-confirm-password").value.trim();
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Reset all alerts
    document.querySelectorAll("customer-alert").forEach(alert => alert.style.display = "none");

    let isValid = true;

    // Name validation
    if (name === "") {
        document.getElementById("name-alert").style.display = "block";
        isValid = false;
    }

    // Email validation (only checks if email is empty)
    if (email === "") {
        document.getElementById("email-alert").style.display = "block"
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById("password-alert").style.display = "block"
        document.querySelector(".signUp-password-details").style.display = "none"
        isValid = false;

    } else if (confirmPassword === "") {
        document.getElementById("confirm-password-alert").style.display = "block"
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirm-password-alert").style.display = "block"
        document.getElementById("confirm-password-alert").innerHTML = `<i class="ri-error-warning-line"></i>password must match`
        isValid = false;
    }

    // Check if user already exists
    if (users.some(user => user.email === email)) {
        document.getElementById("email-alert").style.display = "block"
        document.getElementById("email-alert").innerHTML = `<i class="ri-error-warning-line"></i>User already exits`
        isValid = false
    }

    // If all validations pass, add user to local storage
    if (isValid) {
        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        // document.getElementById("signup-message").textContent = "Signup successful!";
        console.log("signUp successful");
        
        window.location.href = "/SignIn/signIn.html"; // Redirect to signIn page
        // Optionally, redirect the user to another page or clear the form
    }else{

    }
        console.log(isValid);
        console.log(JSON.parse(localStorage.getItem("users")));
        
        
    // if (users.some(user => user.username === username)) {
    //     document.getElementById("signup-message").innerText = "User already exists!";
    //     return;
    // }

    // users.push({ username, password });
    // localStorage.setItem("users", JSON.stringify(users));
    // document.getElementById("signup-message").innerText = "Signup successful!";
}

signUpContinueBtn.addEventListener("click", signup)



   
// localStorage.clear()