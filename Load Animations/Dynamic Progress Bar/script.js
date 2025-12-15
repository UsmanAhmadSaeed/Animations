let i = 0;
function move() {
  if (i == 0) {
    i = 1;
    let color = document.getElementsByClassName("color")[0];
    let loadNumber = document.getElementsByClassName("load-number")[0];
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        color.style.width = width + "%";
        loadNumber.innerText = width + "%";
      }
    }
  }
}

function execute() {
    setInterval(move, 800)
}

execute()