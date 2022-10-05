
// counter decides the next action by card 
let count = 0;

// clicked function in called when btn is clicked
clicked = ((button) => {
    
    let current = button.dataset.open
    
    // rest will be an array of cards other than current
    // add new cards here
    let rest = ["card1", "card2", "card3", "card4"] 
    rest[rest.indexOf(current)] = rest[rest.length - 1]
    rest.pop()

    // if current element contains expand attribute collapse it (count = 1)
    if (document.getElementById(current).hasAttribute("expand")){
        count = 1
    }
    
    // if current is in normal state dont perform any operation (count == -1)
    else if (document.getElementById(current).hasAttribute("normal")) {
        count = -1
    } 
    
    // and in all other cases collapse/shrink card (counter == 0)
    else {
        count = 0
    } 
    
    // counter logic implemented
    if (count%2 == 0){
        document.getElementById(current).classList.add("expand");
        document.getElementById(current).setAttribute("expand","true");
        for (let i = 0; i < rest.length; i++){
            document.getElementById(rest[i]).classList.add("faded")
            document.getElementById(rest[i]).removeAttribute("expand");
            document.getElementById(rest[i]).classList.remove("expand");
            document.getElementById(current).classList.remove("faded");
        }
    } else if (count == -1) {
        document.getElementById(current).setAttribute("normal", "true")
    } else {
        document.getElementById(current).classList.remove("expand");
        document.getElementById(current).classList.add("shrink");
        document.getElementById(current).removeAttribute("expand");
        document.getElementById(current).removeAttribute("normal");
        for (let i = 0; i < rest.length; i++){
            document.getElementById(rest[i]).classList.remove("faded")
        }
    }
    rest = ["card1", "card2", "card3", "card4"] 
    
})