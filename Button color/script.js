let redButton = document.getElementById('red');
let greenButton = document.getElementById('green');
let yellowButton = document.getElementById('yellow');

redButton.addEventListener('click', ()=> {
    redButton.style.backgroundColor = 'red';
    greenButton.style.backgroundColor = 'red';
    yellowButton.style.backgroundColor = 'red';
})
greenButton.addEventListener('click', ()=> {
    greenButton.style.backgroundColor = 'green';
    redButton.style.backgroundColor = 'green';
    yellowButton.style.backgroundColor = 'green';
})
yellowButton.addEventListener('click', ()=> {
    yellowButton.style.backgroundColor = 'yellow';
    redButton.style.backgroundColor = 'yellow';
    greenButton.style.backgroundColor = 'yellow';
})