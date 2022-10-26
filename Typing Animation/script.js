//typing animation script
const text = document.querySelector(".typing");

const textLoad = () => {
    setTimeout(() => {
         text.textContent = "Typing-animation";
    }, 0);
    setTimeout(() => {
        text.textContenr = "Text-Typing-Animation";
    }, 40000);
    setTimeout(() => {
        text.textContenr = "CSS-Typing-Animation";
    }, 80000);
}

textLoad();
setInterval(textload, 12000);
