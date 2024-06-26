const colors = ['Red', 'Blue', 'Yellow', 'Orange', 'Black', 'Grey', 'Green', 'Aqua', 'Purple', '#ab6c86', '#a5746d', '#b37587', '#b8627c', '#a8757d', '#a8647a', '#b76883', '#b16d7d', '#a7657c', '#a5676d', '#ad6f6e'];

const button = document.querySelector('.button');
const color = document.querySelector('.color');

button.addEventListener('click', () => {
    const randomNumber  = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    console.log(randomNumber);
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
  const colorLength = colors.length;
    return Math.floor(Math.random()*colorLength);
}