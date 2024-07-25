const aboutLink = document.getElementById("location-link")
const menu = document.getElementById("location-menu")
const click = ()=>{
   if(menu.classList.contains('hidden')){
    menu.classList.remove("hidden")
   }
   else{
    menu.classList.add("hidden")
   }

   
}

aboutLink.addEventListener("click" , click)