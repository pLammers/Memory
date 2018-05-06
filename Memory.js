const defaultBackground = 'background.png';

let pastElementOne = null;
let pastElementTwo = null;
let elementCount = 0;

function onClickMemoryElement(element) {

    if(element === pastElementOne || element === pastElementTwo) return;
    if(gameIsWon()) won();

    if (pastElementOne !== null && pastElementTwo !== null) {
        if (pastElementOne.dataset.background === pastElementTwo.dataset.background) {
            pastElementOne.style.display = 'none';
            pastElementTwo.style.display = 'none';
            elementCount -= 2;
        } else {
            pastElementOne.style.backgroundImage = buildBackgroundUrl(defaultBackground);
            pastElementTwo.style.backgroundImage = buildBackgroundUrl(defaultBackground);
        }
        pastElementOne = null;
        pastElementTwo = null;
    }

    element.style.backgroundImage = buildBackgroundUrl(element.dataset.background);

    if (!pastElementOne) {
        pastElementOne = element;
    } else {
        pastElementTwo = element;
    }
}

function setElementCount(count){
    elementCount = count;
}

function buildBackgroundUrl(file){
    return 'url(images/'+ file + ')';
}

function gameIsWon(){
    return elementCount <= 2;
}

function won(){
    alert("Congratulations! You did it!");
    location.reload();
}