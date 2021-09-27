console.log('main.js successfully loads');

function thisModal(elem) {
    console.log('thisModal function called');
    let modal = elem.querySelector('.modal');
    modal.classList.add('showModal');
    modal.addEventListener("animationend", () => {
        modal.classList.remove('showModal');
    });
    modal.addEventListener('animationcancel', () => {
        modal.classList.remove('showModal');
    });
}