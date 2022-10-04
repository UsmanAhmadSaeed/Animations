let count = 0;
click_1 = (() => {
    if (count%2 == 0){
        document.querySelector(".card1").setAttribute("id", "expand")
        document.querySelector(".card2").setAttribute("id", "faded")
        document.querySelector(".card3").setAttribute("id", "faded")
        document.querySelector(".card4").setAttribute("id", "faded")
    } else {
        document.querySelector(".card1").removeAttribute("id")
        document.querySelector(".card2").removeAttribute("id")
        document.querySelector(".card3").removeAttribute("id")
        document.querySelector(".card4").removeAttribute("id")
    }
    count += 1
})

click_2 = (() => {
    if (count%2 == 0){
        document.querySelector(".card2").setAttribute("id", "expand")
        document.querySelector(".card1").setAttribute("id", "faded")
        document.querySelector(".card3").setAttribute("id", "faded")
        document.querySelector(".card4").setAttribute("id", "faded")
    } else {
        document.querySelector(".card2").removeAttribute("id")
        document.querySelector(".card1").removeAttribute("id")
        document.querySelector(".card3").removeAttribute("id")
        document.querySelector(".card4").removeAttribute("id")
    }
    count +=1
})

click_3 = (() => {
    if (count%2 == 0){
        document.querySelector(".card3").setAttribute("id", "expand")
        document.querySelector(".card1").setAttribute("id", "faded")
        document.querySelector(".card2").setAttribute("id", "faded")
        document.querySelector(".card4").setAttribute("id", "faded")
    } else{
        document.querySelector(".card3").removeAttribute("id")
        document.querySelector(".card1").removeAttribute("id")
        document.querySelector(".card2").removeAttribute("id")
        document.querySelector(".card4").removeAttribute("id")
    }
    count +=1
})

click_4 = (() => {
    if (count%2 == 0){
        document.querySelector(".card4").setAttribute("id", "expand")
        document.querySelector(".card1").setAttribute("id", "faded")
        document.querySelector(".card2").setAttribute("id", "faded")
        document.querySelector(".card3").setAttribute("id", "faded")
    } else {
        document.querySelector(".card4").removeAttribute("id")
        document.querySelector(".card1").removeAttribute("id")
        document.querySelector(".card3").removeAttribute("id")
        document.querySelector(".card2").removeAttribute("id")
    }
    count +=1
})
