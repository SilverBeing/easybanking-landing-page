//Function for the change of the navigation bar toggler icon//
const burgerIcon = () =>{
    const openIcon = document.querySelector(".open");
    const closeIcon = document.querySelector(".close");
    const menu = document.querySelector(".navigation")

    
    openIcon.addEventListener("click", () => {
      closeIcon.style = "display:block";
      openIcon.style = "display:none";
      menu.style = "display:block";
    })
    closeIcon.addEventListener("click", () => {
      closeIcon.style = "display:none";
      openIcon.style = "display:block";
      menu.style = "display:none";

    })
}

burgerIcon();
