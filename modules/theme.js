//const toggleContainer = document.querySelector(".toggle-switch-container")
const toggle = document.getElementById("switch")
const body = document.querySelector("body")

toggle.addEventListener("click", ()=> {
    toggle.classList.toggle("dark-theme")
    body.classList.toggle("dark")
})