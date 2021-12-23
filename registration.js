console.log("this is registration page")
const registrationForm = document.getElementById("registration-form")
console.log(registrationForm)

function getSelected(select) {
    let selectdValue = [];
    for (optionIndex in select.options) {
        if (select.options[optionIndex].selected) {
            selectdValue.push(select.options[optionIndex].value);
        }
    }
    console.log(selectedValue)
    return selectdValue;

}

registrationForm.onsubmit = function(event) {
    event.preventDefault();
    console.log("Triggered");
    let name = document.getElementById("NameInput").value;
    let DOB = document.getElementById("DateOfBirthInput").value;
    let darkMode = document.getElementById("DarkModeInput").checked;
    let interests = getSelected(document.getElementById("InterestSelect"));

    const data = { name, DOB, darkMode, interests }
        // console.log(data)
};