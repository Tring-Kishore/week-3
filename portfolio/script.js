const name = document.getElementsByClassName('name')[0];
const email = document.getElementsByClassName('email')[0];
const phone = document.getElementsByClassName('phone')[0];
const message = document.getElementsByClassName('error')[0];

function validation(event) {
    event.preventDefault();

    let username = name.value.trim();
    let emailid = email.value.trim();
    let phoneno = phone.value.trim();

    if (username.length < 3) {
        message.style.color = "red";
        message.innerHTML = "The name should be at least 3 characters long.";
        return false;
    }
    if (!emailid.includes('@') || !emailid.includes('.')) {
        message.style.color = "red";
        message.innerHTML = "Please enter a valid email.";
        return false;
    }

    if (phoneno.length !== 10 || isNaN(Number(phoneno))) {
        message.style.color = "red";
        message.innerHTML = "Please enter a valid 10-digit phone number.";
        return false;
    }
    message.style.color = "greenyellow";
    message.innerHTML = "Form Submitted Successfully!";
    return true;
}

// Attach validation function to submit button
document.querySelector(".submit-button").addEventListener("click", validation);
