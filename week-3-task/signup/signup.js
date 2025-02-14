document.getElementById("signup").addEventListener("submit", function(event) {
    event.preventDefault(); 
    console.log('form starts');
    let isValid = validateName() &  validateEmail() & validateLanguage() & validatePhone() & validatePassword();
    console.log(isValid);
    if (isValid) {
        let email = document.getElementById('email').value.trim();
        let password = document.getElementById("password").value.trim();
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert("Sign Up successful!");
        window.location.href = "C:/Kishore/Github/Java/week-3/signin/signin.html"
    }
});
function validateName()
{
    let name = document.getElementById("name").value.trim();
    let nameError = document.getElementById("namerror");
    nameError.textContent = "";
    if(name === "")
    {
        nameError.textContent = "Name is required";
        nameError.style.color = "red";
        return false;
    }
    else if (/\d/.test(name)) {
        nameError.textContent = "The name shouldn't contains a number";
        nameError.style.color = "red";
        return false;
    } 
    return true;
}
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
function validateLanguage()
{
    let lang = document.getElementById("language").value;
    let errorLang = document.getElementById("languageerror");
    errorLang.textContent = "";
    if(lang == 'default')
    {
        errorLang.textContent = "Select the Language Other than Default";
        errorLang.style.color = "red";
        return false;
    }
    return true;
}
function validatePhone()
{
    let phoneno = document.getElementById("phone").value.trim();
    let errorphone = document.getElementById('phoneerror');
    errorphone.textContent = "";
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneno)) {
        errorphone.textContent = "Please Enter 10 Digit Phone number";
        errorphone.style.color = "red";
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
