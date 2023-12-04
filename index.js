// First select it then add a class.toggle(active) to it toggle.onclick, then set the class in css and chnage the left property to the class.indicate  width the same for body with box-shadow (inset 0px 2px 60px, 0px 2px 8px, 0px, -4px, 8px) then change the properties for toggle.active.indidcate background(#eaeaea, #f9f9f9)

const toggle = document.getElementById("toggle");
const body = document.querySelector("body")
toggle.onclick = function (){
    toggle.classList.toggle("active");
    body.classList.toggle("active");
    toggle.classList.toggle("active.active2")
}
