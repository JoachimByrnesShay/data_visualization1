/** show modal, call via onClick in html **/
function activateModal(elem) {
    /* select the modal within the ChartContent-barChart element (elem, passed as 'this') which has been clicked */
    let modal = elem.querySelector('.Modal');

    modal.classList.add('is-displayed');

    /* cleanly remove is-displayed state class from modal when animation ends */
    modal.addEventListener("animationend", () => {
        modal.classList.remove('is-displayed');
    });

    /* smoothen user experience when animation is not finished and user moves cursor back to bar too quickly (mousing back on too quickly after mousing off after click)*/
    modal.addEventListener('animationcancel', () => {
        modal.classList.remove('is-displayed');
    });

}