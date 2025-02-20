function flip(num, bit) {

    click.play();

    const elem = document.getElementById(num.toString() + bit.toString());

    // update (flip) the appropriate bit - variable and interface...
    if (binInput[num][bit] == 0) {
        binInput[num][bit] = 1;
        elem.style.backgroundImage = "url(assets/images/one.svg)";
    } else {
        binInput[num][bit] = 0;
        elem.style.backgroundImage = "url(assets/images/zero.svg)";
    }


    // recalculate denary equivalent - variable and interface...
    denInput[num] = binDen(binInput[num]);
    
    // recalculate addition and update variables...
    let solution = binAdd(binInput[0],binInput[1]);
    binCarry    = solution[0];
    binSolution = solution[1];
    denSolution = solution[2];
    overflow    = solution[3];

    // update interface: binary solution & carry
    for (let i = 0; i < 8; i++) {
        let cElem = "c" + i;
        if (binCarry[i] == 1) {
            document.getElementById(cElem).style.opacity = "1";
        } else {
            document.getElementById(cElem).style.opacity = "0";            
        }

        let sElem = "2" + i;
        if (binSolution[i] == 1) {
            document.getElementById(sElem).style.backgroundImage = "url(assets/images/one.svg)";
        } else {
            document.getElementById(sElem).style.backgroundImage = "url(assets/images/zero.svg)";      
        }
    }
  
    // update interface: denary values
    dnA.innerHTML = denInput[0];
    dnB.innerHTML = denInput[1];
    dnC.innerHTML = denSolution;

    // update interface: overflow
    if (overflow) {
        ofl.style.opacity = "1";
        exb.style.opacity = "1";
        error.play();
    } else {
        ofl.style.opacity = "0";
        exb.style.opacity = "0";
    }

}

document.body.addEventListener('click', function (event) {
    if (event.target.classList.contains('click')) {
        let clicked = event.target.id;
        flip(parseInt(clicked[0]),parseInt(clicked[1]));
    }
  });

let binInput    = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
let denInput    = [0,0]
let binCarry    = [0,0,0,0,0,0,0,0];
let binSolution = [0,0,0,0,0,0,0,0];
let denSolution = 0;
let overflow    = false;

const click = new Audio('assets/sounds/click_2.wav');
const error = new Audio('assets/sounds/error.wav');

//  page elements
const ofl = document.getElementById("warning");
const exb = document.getElementById("flow");
const dnA = document.getElementById("denaryA");
const dnB = document.getElementById("denaryB");
const dnC = document.getElementById("denaryC");