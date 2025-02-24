function clicked() {
    console.log("image clicked!!");

    if (clicks == -1) {
        url = "url('assets/images/" + animals[currentIndex] + ".svg')";
        img.style.backgroundImage = url;

        clicks = 0;
    } else if (clicks == 0) {
        txt.innerHTML = animals[currentIndex];
        clicks++;
    } else {
        if (currentIndex == animals.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        txt.innerHTML = "";
        url = "url('assets/images/" + animals[currentIndex] + ".svg')";
        img.style.backgroundImage = url;
        clicks = 0;

    }
}

let clicks = -1;
let animals = [
    "ant","badger","beaver","bison","buffalo","camel","cat","chicken",
    "cow","duck","monkey","mouse","octopus","orangutan","otter","ox",
    "parrot","penguin","rabbit","ram","rhinoceros","seal","sheep","skunk",
    "sloth","snail","snake","tiger","turkey","whale","worm"
];
let currentIndex = Math.floor(Math.random() * animals.length);

let img = document.getElementById("image");
let txt = document.getElementById("text");