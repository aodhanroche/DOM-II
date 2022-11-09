import './less/index.less'

// Your code goes here!
window.onload = function (evt) {

    window.addEventListener(`copy`, () => {
        navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
    })

    document.body.addEventListener(`click`, evt => {
        evt.target.classList.toggle(`mirror`)
    })

    window.addEventListener(`keydown`, evt => {
        if (evt.key == 6) {
            document.body.innerHTML = `You ran order 6`
        }
    })

    document.body.addEventListener(`dblclick`, evt => {
        evt.target.innerHTML = ``
    })

    document.body.addEventListener(`mousemove`, evt => {
        const { clientX, clientY } = evt
        console.log(`mouse is at ${clientX}, ${clientY}`)
    })

    const destinations = document.querySelectorAll(`.destination`)
    for (let destination of destinations) {
        destination.addEventListener(`mouseenter`, () => {
            destination.style.fontWeight = `bold`
        })
        destination.addEventListener(`mouseleave`, () => {
            setTimeout(() => {
                destination.style.fontWeight = `initial`
            }, 500)
        })
    }



}

