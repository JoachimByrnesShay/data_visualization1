/** show modal, call via onClick in html **/
function activateModal(elem) {
    /* elem is the ChartContent-barChart element which has been clicked, select its modal only */
    let modal = elem.querySelector('.Modal');

    modal.classList.add('is-displayed');

    /* cleanly remove is-displayed state class from modal when animation ends */
    modal.addEventListener("animationend", () => {
        modal.classList.remove('is-displayed');
    });
    /** smoothens user experience if user moves cursor back to bar too quickly, without this- after modal animation starts, 
     * if user moves cursor back to chart, modal will pop up again because of this class remaining on the element*/
    modal.addEventListener('animationcancel', () => {
        modal.classList.remove('is-displayed');
    });

}