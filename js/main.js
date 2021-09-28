/** show modal, call via onClick in html **/
function activateModal(elem) {
    /* select the modal within the ChartContent-barChart element (elem, passed as 'this') which has been clicked */
    let modal = elem.querySelector('.Modal');

    modal.classList.add('is-displayed');

    /* cleanly remove is-displayed state class from modal when animation ends */
    modal.addEventListener("animationend", () => {
        modal.classList.remove('is-displayed');
    });

    /* smoothen user experience when user moves cursor back to bar too quickly (before animation finishes) after triggering animation by mousing off*/
    modal.addEventListener('animationcancel', () => {
        modal.classList.remove('is-displayed');
    });

}