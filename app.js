const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {  //event listener that activates when user clicks button
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor; //how we access background of the webpage
    h1.innerText = newColor;
})

const makeRandColor = () => {  //function that generates a random color
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`; //string template literal for the random rgb color
}

