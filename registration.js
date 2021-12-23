console.log("this is registration page")
const registrationForm = document.getElementById("registration-form")
console.log(registrationForm)
registrationForm.onsubmit = function(event) {
    event.preventDefault();
    console.log("Triggered");
};