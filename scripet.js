let button = document.querySelector(".bars")
let menu = document.querySelector("ul")
let btn = document.querySelector("#close")

button.addEventListener("click",function(){
    menu.classList.add("active")
})

btn.addEventListener("click",function(){
    menu.classList.remove("active")
})

var typed = new Typed('#text',{
    strings:['Software Enginner','Web Desinger','Freelancer'],
    typeSpeed: 30,
    backSpeed: 30,
    loop: false,
    loopCount: Infinity,
})