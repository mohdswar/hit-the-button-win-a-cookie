const cookieElement = document.querySelector('#koko');
// const cookElement = document.querySelector('#cook')
const h1Element = document.querySelector('h1');



const reac = (event) => {
    if (event.target.id === 'koko') {
        h1Element.textContent = '🍪 you have it';
    }
}


cookieElement.addEventListener('click', reac);



