let sortList = [];
let maxNumber = 10;
let secretNumber = generateRandomNumber();
let tries = 1;

function showTextInScreen(tag, text) {
    let element = document.querySelector(tag);
    element.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});
}

function showInitialMessage() {
    showTextInScreen('h1', 'Secret Number Game');
    showTextInScreen('p', 'Choose a number between 1 and 10');
}

showInitialMessage();

function verifyNumberTried() {
    let shot = document.querySelector('input').value;
    
    if (shot == secretNumber) {
        showTextInScreen('h1', 'You got it!');
        let trieWord = tries > 1 ? 'tries' : 'try';
        let successMessage = `You have discovered the secret number with ${tries} ${trieWord}!`;
        showTextInScreen('p', successMessage);
        document.getElementById('restart').removeAttribute('disabled');
    } else {
        if (shot > secretNumber) {
            showTextInScreen('p', 'The secret number is smaller!');
        } else {
            showTextInScreen('p', 'The secret number is bigger!');
        }
        tries++;
        cleanFiled();
    }
}

function generateRandomNumber() {
    let choosenNumber = parseInt(Math.random() * maxNumber + 1);
    let numberOfElementsInsideOfTheList = sortList.length;

    if (numberOfElementsInsideOfTheList == maxNumber) {
        sortList = [];
    }
    if (sortList.includes(choosenNumber)) {
        return generateRandomNumber();
    } else {
        sortList.push(choosenNumber);
        console.log(sortList)
        return choosenNumber;
    }
}

function cleanFiled() {
    shot = document.querySelector('input');
    shot.value = '';
}

function restartGame() {
    secretNumber = generateRandomNumber();
    cleanFiled();
    tries = 1;
    showInitialMessage();
    document.getElementById('restart').setAttribute('disabled', true)
}







