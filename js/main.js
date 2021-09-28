/** show modal, call with onClick in html **/
function activateModal(elem) {
    let modal = elem.querySelector('.Modal');

    modal.classList.add('is-displayed');

    modal.addEventListener("animationend", () => {
        modal.classList.remove('is-displayed');
    });
    /** smoothens user experience if user moves cursor back to bar too quickly**/
    modal.addEventListener('animationcancel', () => {
        modal.classList.remove('is-displayed');
    });

}