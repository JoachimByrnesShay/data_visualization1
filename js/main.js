console.log('main.js successfully loads')


function thisModal(elem) {
    console.log(elem);
    const startTime = Date.now();


    let modal = elem.querySelector('.modal');
    // modal.innerHTML = 'Im a modal buddy';
    // // modal.style.display = 'block';
    // // elem.addEventListener("mouseleave", () => modal.style.display = 'none');
    modal.classList.add('showModal')
    modal.addEventListener("animationend", () => {
        // element.style['display'] = 'none';
        modal.classList.remove('showModal')
    })
    modal.addEventListener('animationcancel', (e) => {

        modal.classList.remove('showModal')
    });
    // modal.setAnimationListener(null);
    // // })
    modal.addAnimationListener('animationstart', (e) => {
        e.preventDefault();

        e.stopImmediatePropagation();
    });

}

// window.onresize = () => {
        //     alert('hi')
        // }