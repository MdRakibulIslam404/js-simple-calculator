const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
let screenValue = "";
for (const button of buttons) {
    button.addEventListener("click", function (event) {
        let buttonText = event.target.innerText;
        if (buttonText == "x") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == "=") {
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
};