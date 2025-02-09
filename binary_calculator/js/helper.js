// ------------------------------ >> Helper functions
function denBin(integer) {
    binary = [];
    while (integer > 0) {
        binary.unshift(integer % 2);
        integer = integer / 2 | 0;
    }
    while (binary.length < 8) {
        binary.unshift(0);
    }
    return binary;
}

function binDen(binary) {
    denary = 0;
    power = 128;
    for (var i = 0; i < binary.length; i++) {
        if (binary[i] == 1) {
            denary = denary + power;
        }
        power = power / 2 | 0;
    }
    return denary
}

function binAdd(binOne, binTwo) {
    let binSol = [], denSol = 0, overflow = false ;
    let carry = [0,0,0,0,0,0,0,0];
    for (let i = 7; i > -1; i--) {
        sum = carry[i] + binOne[i] + binTwo[i];
        if (sum == 0) {
            binSol.unshift(0);
        } else if (sum == 1) {
            binSol.unshift(1);            
        } else {
            if (sum == 2) {
                binSol.unshift(0);
            } else {
                binSol.unshift(1);
            }
            carry[i-1] = 1;
            
            if (i == 0) {
                overflow = true;
            }
        }
    }
    return [carry, binSol, binDen(binSol), overflow];
}
