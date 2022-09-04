// Navigation Script Start
const iconContainer = document.querySelector(".icon-container")
const menuLinks = document.querySelector(".menuLinks-container")
const icon = document.querySelector("#icon")


iconContainer.addEventListener("click", () =>{
    if(icon.classList.contains("fa-bars")){
        icon.classList.add("fa-close")
        icon.classList.remove("fa-bars")

        menuLinks.classList.add("show")
        menuLinks.classList.remove("hidden")
    }

    else{
        icon.classList.add("fa-bars")
        icon.classList.remove("fa-close")

        menuLinks.classList.remove("show")
        menuLinks.classList.add("hidden")
    }
})

// Navigation Script End

// Counter Script Start

const valueDisplays = document.querySelectorAll(".num")
// console.log(valueDisplay)
const interval = 4000

window.addEventListener("scroll", ()=>{

    let content = document.querySelector(".divisionWrapper")
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.7;

    console.log(window.scrollY)
    if(window.scrollY == 1800){
        valueDisplays.forEach((valueDisplay =>{
            let startValue = 0
            let endValue = parseInt(valueDisplay.getAttribute("data-val"))
            
            let duration = Math.floor(interval / endValue)
            let counter = setInterval(function(){
                startValue += 1
                valueDisplay.textContent = startValue
                if(startValue == endValue){
                    clearInterval(counter)
                }
            }, duration)
        }))
    }



})



// valueDisplays.forEach((valueDisplay =>{
//     let startValue = 0
//     let endValue = parseInt(valueDisplay.getAttribute("data-val"))
    
//     let duration = Math.floor(interval / endValue)
//     let counter = setInterval(function(){
//         startValue += 1
//         valueDisplay.textContent = startValue
//         if(startValue == endValue){
//             clearInterval(counter)
//         }
//     }, duration)
// }))

// Counter Script End