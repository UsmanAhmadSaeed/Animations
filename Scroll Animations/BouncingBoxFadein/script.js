function roll() {
    var roll = document.querySelectorAll(".squaremvmt");


    for (var i = 0; i<windowHeight; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = roll[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            roll[i].classList.add("squaremvmt");
        } else {
            roll[i].classList.remove("squaremvmt");
        }
    }
}

window.addEventListener(scroll, roll)

