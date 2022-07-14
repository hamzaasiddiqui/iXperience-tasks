
const guessInput = document.getElementById('guess-input');
const form = document.getElementById('form');
const secondForm = document.getElementById('form-second');
const explanationDiv = document.getElementById('explanation');
const resultDiv = document.getElementById('result');
const hintDiv = document.getElementById('hint');

const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
]

const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);
explanationDiv.innerHTML = movies[randomNumber].explanation;

form.addEventListener('submit', (event => {
    event.preventDefault();

    console.log(movies[randomNumber].title);
    console.log(guessInput.value);

    let isGuessCorrect = false;

    for (let i = 0; i < 10; i++) {
        if (guessInput.value == movies[randomNumber].title) {
            isGuessCorrect = true;
            break;
        }
    }

    if (isGuessCorrect) {
        resultDiv.innerHTML = 'Congrats! Your guess is correct.';
        resultDiv.classList.add('alert');
        resultDiv.classList.add('alert-success');
    }
    else {
        resultDiv.innerHTML = 'Your guess is incorrect.';
        resultDiv.classList.add('alert');
        resultDiv.classList.add('alert-danger');
    }
}))

secondForm.addEventListener('submit', (event => {
    event.preventDefault();

    hintDiv.innerHTML = movies[randomNumber].hint;
    hintDiv.classList.add('alert');
    hintDiv.classList.add('alert-primary');
}))