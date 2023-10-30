(function () {
    "use strict"
    console.log("reading.js");

    const myForm = document.getElementById("myform");
    const madlib = document.getElementById("madlib");
    const input = document.getElementById("input")

    myForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let pet = document.getElementById("pet").value;
        let noun1 = document.getElementById("noun1").value;
        let adjective1 = document.getElementById("adjective1").value;
        let accessory = document.getElementById("accessory").value;
        let verb1 = document.getElementById("verb1").value;
        let setting1 = document.getElementById("setting1").value;
        let adjective2 = document.getElementById("adjective2").value;

        let reset = document.getElementById("reset");

        let myText = "";

        if (name == "") {
            myText = "please select a name!";
            document.getElementById("name").focus();
            reset.innerHTML = "back";
        } else if (pet == "select a pet") {
            myText = "please select a pet!"
            document.getElementById("pet").focus();
            reset.innerHTML = "back";
        } else if (noun1 == "") {
            myText = "please select a noun!"
            document.getElementById("noun1").focus();
            reset.innerHTML = "back";
        } else if (adjective1 == "") {
            myText = "please select an adjective!"
            document.getElementById("adjective1").focus();
            reset.innerHTML = "back";
        } else if (accessory == "select an accessory") {
            myText = "please select an accessory!"
            document.getElementById("accessory").focus();
            reset.innerHTML = "back";
        } else if (verb1 == "") {
            myText = "please select a verb!"
            document.getElementById("verb1").focus();
            reset.innerHTML = "back";
        } else if (setting1 == "") {
            myText = "please select a setting!"
            document.getElementById("setting1").focus();
            reset.innerHTML = "back";
        } else if (adjective2 == "") {
            myText = "please select another adjective!"
            document.getElementById("adjective2").focus();
            reset.innerHTML = "back";
        } else {
            myText =
                `Today is the big day!
                    The whole crew goes on a road trip to ${setting1}! 
                    Of course,
                    with ${name} the ${pet} leading. 
                    To show off their leadership,
                    ${name} is wearing a ${accessory} as a companion! 
                    Without a doubt,
                    a trip to the ${setting1} without ${noun1} would be ${adjective1}!
                    Once the crew arrived, 
                    everyone decided on what they would do.
                    Naturally,
                    ${name} decided on ${verb1}, and everyone agreed! 
                    Everyone had a grand time ${verb1}, 
                    and ${name} truly showed off their leadership in this outing. 
                    This trip was truly ${adjective2}!`;

            document.getElementById("name").value = "";
            document.getElementById("pet").value = "select a pet";
            document.getElementById("noun1").value = "";
            document.getElementById("adjective1").value = "";
            document.getElementById("accessory").value = "select an accessory";
            document.getElementById("verb1").value = "";
            document.getElementById("setting1").value = "";
            document.getElementById("adjective2").value = "";
            reset.innerHTML = "reset";
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

function changePet() {
    var animalSelect = document.getElementById("animalSelect")
    animalSelect.src = "images/" + pet.value + ".gif"
    animalSelect.style.height = "40%";
    animalSelect.style.position = "absolute";
    animalSelect.style.top = "25%";
    animalSelect.style.left = "15%";
}

function changeAccessory() {
    var accessorySelect = document.getElementById("accessorySelect")
    accessorySelect.src = "images/" + accessory.value + ".gif"
    accessorySelect.style.height = "50%";
    accessorySelect.style.position = "absolute";
    accessorySelect.style.top = "15%";
    accessorySelect.style.left = "35%";
    accessorySelect.style.zIndex = "-1";
}