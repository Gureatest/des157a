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
        let video = videos[i];

        //loop to go through the videos in each picture class element to play the video

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

        picture.addEventListener("animationend", function () {
            picture.classList.replace("flipBack", "sway");
        });
        //reads when animation ends, and replaces classes

        let options = {
            root: null,
            threshold: 0.1,
            rootMargin: "-100px",
        };
        //observer options

        let observer = new IntersectionObserver(callback, options);
        //creates intersection observer to check when element is on screen

        function callback(entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('sway');
                    observer.unobserve(entry.target);
                }
            });
        }

        observer.observe(picture);

    }
}());