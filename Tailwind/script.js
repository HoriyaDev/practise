const btn1  = document.getElementById("burger")
const navBar = document.getElementById("navbar")


const burgerBtn = () => {
    if (navBar.style.display === 'block') {
      navBar.style.display = 'none';
    } else {
      navBar.style.display = 'block';
    }
  };
  
  


btn1.addEventListener("click" ,burgerBtn )

