(function () {
    "use strict"
    console.log("reading js");

    const picture = document.querySelector(".picture");
    // let time = setTimeout(flipPolaroid, 1000);

    picture.addEventListener("mouseover", function flipPolaroid() {
        picture.classList.add("flip");
    });

    picture.addEventListener("mouseout", function flipPolaroid() {
        picture.classList.remove("flip");
        picture.style.animation = "reverse";
        picture.classList.add("flip");

    });
        // if (pull == 1000) {
        //     clearTimeout(time);
        // } else {
        //     picture.classList.add("flipFront");
        // }

}());