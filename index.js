function distanceFromHqInBlocks(block) {
    if (block > 42) {
        return block- 42;
    } else {
        return 42- block;
    }
}

function distanceFromHqInFeet(block) {
        return distanceFromHqInBlocks(block)* 264;
}

function distanceTravelledInFeet(start, end) {
    if (start > end) {
        return (start - end) * 264;
    } else {
        return (end - start) * 264;
    }
    
}

function calculatesFarePrice(start, end) {
    if(distanceTravelledInFeet(start, end) <= 400) {
        return 0
    } else if(distanceTravelledInFeet(start, end) <=400 || distanceTravelledInFeet(start, end)<= 2000) {
        return (528-400) * 2/100
    } else if(distanceTravelledInFeet(start, end) <= 2000 || distanceTravelledInFeet(start, end) <= 2500) {
        return 25
    } else (distanceFromHqInFeet(start, end) <= 2500) 
        return 'cannot travel that far'
}