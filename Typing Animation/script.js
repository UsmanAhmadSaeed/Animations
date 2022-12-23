//typing animation script
const text = document.querySelector(".text-2");

const textLoad = () => {
    setTimeout(() => {
         text.textContent = "Typing-animation";
    }, 0);
    setTimeout(() => {
        text.textContent = "Text-Typing-Animation";
    }, 4000);
    setTimeout(() => {
        text.textContent = "CSS-Typing-Animation";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);
