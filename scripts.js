document.querySelector(".logo").addEventListener("click",()=>{
    document.querySelector("#greeting").classList.toggle("gradient-switch");
    document.querySelector(".logo").classList.toggle("gradient-switch");
    document.querySelector("#submit").classList.toggle("gradient-switch");
    document.querySelector("#learnMoreButton").classList.toggle("gradient-switch");
    let icons = document.querySelectorAll(".fa");
    for(let i = 0; i < icons.length; i++){
        icons[i].classList.toggle("gradient-color");
    }
})

document.querySelector("#submit").addEventListener("click",()=>{
    alert("Thanks for the message. I'll get back to you.");
})

document.querySelector("#learnMoreButton").addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/indira-cepero-villa-9a802678/");
})