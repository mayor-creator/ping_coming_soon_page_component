let emailInput = document.querySelector("input");
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let invalid = document.getElementById("error_message");

/*
emailInput.addEventListener("input", function () {
    let valid = emailRegex.test(emailInput.value);
    console.log(valid);
    if (valid) {
        document.getElementById("email_address").style.border = "0.0625rem solid hsl(223, 87%, 63%)";
        invalid.hidden = true;
    } else {
        document.getElementById("email_address").style.border = "0.0625rem solid hsl(354, 100%, 66%)";
        invalid.hidden = false;
    }
    //Please provide a valid email address
});*/

let form = document.querySelector(".wrapper");
form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let valid = emailRegex.test(emailInput.value);
    if (emailInput.value === null || emailInput.value === "") {
        document.getElementById("email_address").style.border = "0.0625rem solid hsl(354, 100%, 66%)";
        invalid.innerHTML = "Whoops! It looks like you forgot to add your email";
        invalid.hidden = false;
    } else if (!valid) {
        document.getElementById("email_address").style.border = "0.0625rem solid hsl(354, 100%, 66%)";
        invalid.innerHTML = "Please provide a valid email address";
        invalid.hidden = false;
    } else {
        document.getElementById("email_address").style.border = "0.0625rem solid hsl(223, 87%, 63%)";
        invalid.hidden = true;
    }
});