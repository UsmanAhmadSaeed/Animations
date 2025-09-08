const bulbs = document.querySelectorAll(".lights span");
const switchBtn = document.getElementById("switch");

const animations = [
  "pulse 2s infinite ease-in-out",
  "blink 1.5s infinite",
  "twinkle 2.2s infinite",
  "glow 2.5s infinite ease-in-out"
];

function applyRandomEffects() {
  bulbs.forEach(bulb => {
    const randomAnim = animations[Math.floor(Math.random() * animations.length)];
    const delay = (Math.random() * -2).toFixed(1) + "s";
    const color = getComputedStyle(bulb).backgroundColor;

    bulb.style.setProperty("--glow-color", color);
    bulb.style.animation = randomAnim;
    bulb.style.animationDelay = delay;
  });
}

applyRandomEffects();
switchBtn.addEventListener("click", applyRandomEffects);
