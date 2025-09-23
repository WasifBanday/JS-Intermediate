function changeBackground(color) {
    document.body.style.backgroundColor = color;
}

const themebutton = document.getElementById('theme-button');

themebutton.addEventListener('click', () => { // using arrow function instead of function ...
    const currentColor = document.body.style.backgroundColor;
    if (!currentColor || currentColor == 'white') {
        changeBackground('black');
        themebutton.innerText = 'Light Mode';
    } else {
        changeBackground('white')
        themebutton.innerText = 'Dark Mode';
    }
})