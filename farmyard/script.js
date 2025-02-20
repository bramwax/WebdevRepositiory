function clicked() {
    console.log("image clicked!!");

    if (clicks == -1) {
        sounds[currentIndex].play();
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
        sounds[currentIndex].play();
        txt.innerHTML = "";
        url = "url('assets/images/" + animals[currentIndex] + ".png')";
        img.style.backgroundImage = url;
        clicks = 0;

    }
}

const chicken = new Audio('assets/sounds/chicken.wav');
const cow = new Audio('assets/sounds/cow.wav');
const donkey = new Audio('assets/sounds/donkey.wav');
const goat = new Audio('assets/sounds/goat.wav');
const pig = new Audio('assets/sounds/pig.wav');
const sheep = new Audio('assets/sounds/sheep.wav');
let sounds = [chicken, cow, donkey, goat, pig, sheep]

let clicks = -1;
let animals = ["Chicken","Cow","Donkey","Goat","Pig","Sheep"];
let currentIndex = Math.floor(Math.random() * animals.length);

let img = document.getElementById("image");
let txt = document.getElementById("text");

url = "url('assets/images/" + animals[currentIndex] + ".png')";
img.style.backgroundImage = url;