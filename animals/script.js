function clicked() {
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
        txt.innerHTML = "???";
        url = "url('assets/images/" + animals[currentIndex] + ".svg')";
        img.style.backgroundImage = url;
        clicks = 0;
    }
}

let clicks = -1;
let animals = [
    "ant","badger","BEAVER","BISON","BUFFALO","CAMEL","CAT","CHICKEN",
    "COW","DUCK","MONKEY","MOUSE","OCTOPUS","ORANGUTAN","OTTER","OX",
    "PARROT","PENGUIN","RABBIT","RAM","RHINOCEROS","SEAL","SHEEP","SKUNK",
    "SLOTH","SNAIL","SNAKE","TIGER","TURKEY","WHALE","WORM"
];

animals.forEach( (value,i) =>{
    var random = Math.floor(Math.random() * animals.length);
    var tmp = animals[random];
    animals[random] = value;
    animals[i] = tmp;
});

let currentIndex = Math.floor(Math.random() * animals.length);

let img = document.getElementById("image");
let txt = document.getElementById("text");