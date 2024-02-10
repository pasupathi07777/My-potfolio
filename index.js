let sliding_nav = document.querySelector(".sliding-navbar")
let x_icion
let hand_burger = document.querySelector(".hand-burger-menu")
let hand_b = document.querySelector(".i-1")
let hand_x = document.querySelector(".i-2")
let ind = 0
hand_x.style.display="none"


hand_burger.addEventListener("click", () => {
    call()

})


function call() {
    
    
    ind = ++ind

    console.log(ind)
    if(ind%2==0){
        sliding_nav.style.left="-200px"
        // hand_burger.innerHTML=""
        // hand_burger.innerHTML=' <i class="fa-solid fa-bars"></i>'
        hand_b.style.display="block"
        hand_x.style.display="none"
        

        }
    else{
        sliding_nav.style.left="0px"
        // hand_burger.innerHTML='<i class="fa-solid fa-x"></i>'
        hand_b.style.display="none"
        hand_x.style.display="block"
        

    }

}



