(function () {
    "use strict"
    console.log("reading js");

    const pictures = document.querySelectorAll(".picture");
    //selects all .picture class elements into node list

    // const concert = document.querySelector(".concert")
    const videos = document.querySelectorAll('.vid');
    //selects all .vid class elements into node list


    for (let i = 0; i < pictures.length; i++) {
        let picture = pictures[i];
        //loop to go through each picture class element so each polaroid can animate

        for (let i = 0; i < videos.length; i++) {
            let video = videos[i];

            //loop to go through the videos in each picture class element to play the video (but it doesnt work)

            // let AnimateTime;

            picture.addEventListener("click", function flipPolaroid() {

                //flips polaroid

                picture.className = "picture"
                picture.classList.add("flip");
                //animates with a css animation keyframe

                // concert.style.opacity = "0";
                video.style.display = "block";
                //brings up the video
                video.style.opacity = "1";
                //makes it visible (again)
                video.play();
                //plays video
                video.volume = 0.3;
                //sets volume so it doesnt destroy the ears of innocent people
            });


            picture.addEventListener("mouseout", function flipBackPolaroid() {

                // if (picture.classList.contains("flipBack")) {
                //     AnimateTime = setTimeout(flipBackPolaroid, 30);
                //     console.log(AnimateTime);
                // }

                // if (AnimateTime > 50) {

                //this commented section is supposed to start a timeout to determine when the animation is over (750ms) and clears the classes

                picture.classList.replace("flip", "flipBack");
                //replaces classes for reverse animation

                video.style.display = "none";
                //hides video
                // concert.style.opacity = "1";
                video.style.opacity = "0";
                //hides video..
                video.currentTime = 0;
                //resets video playtime
                video.pause();
                //pauses video
                // }
            });
        }
    }
}());