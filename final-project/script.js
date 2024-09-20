
document.addEventListener("DOMContentLoaded", function(){
    const dropdown = document.getElementById("link1")
    dropdown.onclick = function () {
        const content = document.querySelector(".dropdown")
        content.classList.toggle("drop")
    }
})
document.addEventListener("DOMContentLoaded", function(){
    const dropdown2 = document.getElementById("link2")
    dropdown2.onclick = function () {
        const content2 = document.querySelector(".dropdown2")
        content2.classList.toggle("drop")
    }
})
document.addEventListener("DOMContentLoaded", function(){
    const dropdown3 = document.getElementById("link3")
    dropdown3.onclick = function () {
        const content3 = document.querySelector(".dropdown3")
        content3.classList.toggle("drop")
    }
})

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger")
    hamburger.onclick = function() {
        const nav = document.querySelector("nav")
        nav.classList.toggle("active")
    }
})