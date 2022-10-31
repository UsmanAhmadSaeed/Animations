function swoop(text, infinite) {
    let TextToAnimate = document.getElementById(text)
    let TTAString = TextToAnimate.innerHTML
    TextToAnimate.innerHTML = ''

    for (var x = 0; x < TTAString.length; x++) {
        if (TTAString[x] === ' ') {
            TextToAnimate.innerHTML += '<span>' + '&nbsp;' + '</span>'
        } else {
            TextToAnimate.innerHTML += '<span>' + TTAString[x] + '</span>'
        }
    }
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }
    async function elanimate(text) {
        text = text.getElementsByTagName('span')
        for (i = 0; i < text.length; i++) {
            text[i].classList.add('animate')
            await sleep(100)
        }
        await sleep(300)
        for (i = 0; i < text.length; i++) {
            text[i].classList.add('animate2')
            await sleep(100)
        }
        await sleep(300)
        for (i = 0; i < text.length; i++) {
            text[i].classList.add('animate3')
            await sleep(100)
        }
        if (infinite === true) {
            await sleep(1000)
            for (i = 0; i < text.length; i++) {
                text[i].classList.remove('animate')
                text[i].classList.remove('animate2')
                text[i].classList.remove('animate3')
            }
        } else {
            return
        }
        elanimate(TextToAnimate, infinite)
    }
    elanimate(TextToAnimate, infinite)
}
swoop('animatethis', true) // id of text to animate, true = infinite
