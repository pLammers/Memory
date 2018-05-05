const defaultColor = 'darkgrey';

let pastElementOne = null;
let pastElementTwo = null;
let elementCount = 0;

function onClickMemoryElement(element) {

    if(element === pastElementOne) return;

    element.style.backgroundColor = element.dataset.background;
    if(gameIsWon()) won();

    if (pastElementOne !== null && pastElementTwo !== null) {
        if (pastElementOne.dataset.background === pastElementTwo.dataset.background) {
            pastElementOne.style.display = 'none';
            pastElementTwo.style.display = 'none';
            elementCount -= 2;
        } else {
            pastElementOne.style.backgroundColor = defaultColor;
            pastElementTwo.style.backgroundColor = defaultColor;
        }
        pastElementOne = null;
        pastElementTwo = null;
    }

    if (!pastElementOne) {
        pastElementOne = element;
    } else {
        pastElementTwo = element;
    }
}

function setElementCount(count){
    elementCount = count;
}

function gameIsWon(){
    if(elementCount <= 2) return true;

    return false;
}

function won(){
    alert("Congratulations! You did it!");
    location.reload();
}