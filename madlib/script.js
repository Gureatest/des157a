(function () {
    "use strict"
    console.log("reading.js");

    const myForm = document.getElementById("myform");
    const madlib = document.getElementById("madlib");
    const input = document.getElementById("input")

    myForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let pet = document.getElementById("pet").value;
        let noun1 = document.getElementById("noun1").value;
        let adjective1 = document.getElementById("adjective1").value;
        let clothing = document.getElementById("clothing").value;
        let verb1 = document.getElementById("verb1").value;
        let setting = document.getElementById("setting").value;

        let myText = "";

        if (pet == "select a pet") {
            myText = "please select a pet!"
            document.getElementById("pet").focus();
        } else if (noun1 == "") {
            myText = "please select a noun!"
            document.getElementById("noun1").focus();
        } else if (adjective1 == "") {
            myText = "please select an adjective!"
            document.getElementById("adjective1").focus();
        } else if (clothing == "select a clothing item") {
            myText = "please select a clothing item!!"
            document.getElementById("clothing").focus();
        } else if (verb1 == "") {
            myText = "please select a verb!"
            document.getElementById("verb1").focus();
        } else if (setting == "select a setting") {
            myText = "please select a setting!"
            document.getElementById("setting").focus();
        } else {
            myText = `you typed the words ${pet}, ${noun1}, ${adjective1}, ${clothing}, ${verb1}, ${setting}`;
            document.getElementById("pet").value = "select a pet";
            document.getElementById("noun1").value = "";
            document.getElementById("adjective1").value = "";
            document.getElementById("clothing").value = "select a clothing item";
            document.getElementById("verb1").value = "";
            document.getElementById("setting").value = "select a setting";
        }

        let i = 0;

        setInterval(function () {
            madlib.innerHTML += myText.charAt(i);
            i++;
        }, 50);

    });

}());

const madlib = document.getElementById("madlib");
const input = document.getElementById("input");
const reset = document.getElementById("reset");

function submitMadlib() {
    if (input.style.opacity === "1") {
        input.style.opacity = "0";
        input.style.visibility = "hidden";
        endscreen.style.opacity = "1";
        endscreen.style.visibility = "visible";
    } else {
        input.style.opacity = "1"
        endscreen.style.opacity = "0";
        input.style.visibility = "visible";
        endscreen.style.visibility = "hidden";
    }
}

submitMadlib();

function resetMadlib() {
    madlib.innerHTML = "";

    if (endscreen.style.opacity === "1") {
        input.style.opacity = "1";
        input.style.visibility = "visible";
        endscreen.style.opacity = "0";
        endscreen.style.visibility = "hidden";
    } else {
        input.style.opacity = "0";
        input.style.visibility = "hidden";
        endscreen.style.opacity = "1";
        endscreen.style.visibility = "visible";
    }
};

function home() {
    window.location.href = "../index.html";
}