function navig(){
  const nav = document.querySelector(`.nav`);
  const navs = document.querySelector(`.navs`)
  const navList = document.querySelectorAll(`.navList`);
  const menus = document.querySelectorAll(`.menu`);
	
  let h = nav.clientHeight;
  let bg = document.querySelector(".bg");
  nav.style.fontSize = `${h /5}px`;
  window.addEventListener(`resize`, () =>{
    let h = nav.clientHeight;
    nav.style.fontSize = `${h /5}px`;
  });
  
  menus.forEach((menu) =>{
    const list = menu.getAttribute("data-nav");
    let images = document.getElementById(list);
    
    menu.addEventListener(`click`, () =>{
        navs.classList.remove(`navsActivated`);
        bg.classList.remove(`bgActivated`);
        images.classList.remove(`imagesActivated`);
        nav.classList.remove(`navActivated`);
      });
  });
  
  navList.forEach((navL) =>{
    const list = navL.getAttribute("data-nav");
    let images = document.getElementById(list);
    
    navL.addEventListener(`mouseover`, ()=>hoverAnimate(list));

    navL.addEventListener(`click`, () =>{
      navs.classList.add(`navsActivated`);
      bg.classList.add(`bgActivated`);
      images.classList.add(`imagesActivated`);
      nav.classList.add(`navActivated`);
      navs.classList.add('runnin');
      navs.addEventListener('transitionend',()=>{
        navs.classList.remove('runnin');
      });
    });
  });
}
const hoverAnimate = (list) =>{
  if (!document.querySelector(`.navs`).classList.contains('runnin'))
    document.getElementById(list).scrollIntoView({behavior: "smooth", block: "start"});
}

window.onload = () => {
  navig();
};
