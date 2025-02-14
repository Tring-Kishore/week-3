document.getElementById("signin").addEventListener("submit", function(event) {
    event.preventDefault(); 
    console.log('form starts');
    let isValid = validateEmail() & validatePassword();
    console.log(isValid);
    if (isValid) {
        let email = document.getElementById('email').value.trim();
        let localemail = localStorage.getItem('email');
        if(email != localemail)
        {
            
            alert("Invalid Email");
            return false;
        }
        let password = document.getElementById('password').value.trim();
        let localpassword = localStorage.getItem('password');
        if(password != localpassword)
        {
            alert("Invalid Password");
            return false;
        }
        alert("Login successful!");
        window.location.href = "C:/Kishore/Github/Java/week-3/index.html"
    }
});
function validateEmail() {
    let email = document.getElementById("email").value.trim();
    let emailError = document.getElementById("emailError");
    emailError.textContent = "";

    if (email === "") {
        emailError.textContent = "Email is required";
        emailError.style.color = "red";
        return false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = "Invalid email format";
        emailError.style.color = "red";
        return false;
    }
    return true;
}
function validatePassword()
{
    let pass = document.getElementById("password").value.trim();
    let errorpassword = document.getElementById("passworderror");
    errorpassword.textContent = "";
    let specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    let numberRegex = /[0-9]/;
    if (pass === "") {
        errorpassword.textContent = "Password is required";
        errorpassword.style.color = "red";
        return false;
    } if (pass.length < 6) {
        errorpassword.textContent = "Password must be at least 6 characters";
        errorpassword.style.color = "red";
        return false;
    }
    if (!specialCharRegex.test(pass)) { 
        errorpassword.textContent = "Password must contain at least one special character";
        errorpassword.style.color = "red";
        return false;
    }
    if (!numberRegex.test(pass)) { 
        errorpassword.textContent = "Password must contain at least one number";
        errorpassword.style.color = "red";
        return false;
    }

    return true;
}