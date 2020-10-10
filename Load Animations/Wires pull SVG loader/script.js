const paths = document.querySelectorAll(".path");
const loader = document.getElementById("loader");
let removeTime = 1; //in seconds

paths.forEach((path) =>{
	let totalLen = path.getTotalLength();
	let pathElement = path;
	pathElement.setAttribute("stroke-dasharray", totalLen);
	pathElement.setAttribute("stroke-dashoffset", totalLen);
});

let p = document.getElementById("main");

//after animation end remove lines
main.addEventListener('animationend', () => {
	loader.style.transition= `all ${removeTime}s`
	
	//optional if you want to remove the clip path
	
	/* paths.forEach((path) =>{
		let totalLen = path.getTotalLength();
		let pathElement = path;
		pathElement.style.transition = `all ${removeTime}s`;
		pathElement.setAttribute("stroke-dasharray", ` 0 ${totalLen}`);
		pathElement.style.opacity= 0;
	}); */
	
	loader.style.clipPath = "polygon(0 0, -10% 50%, 0 100%, 0 100%, 0 0)"
});