//MODAL MENU
document.querySelector("label.agregar-btn").addEventListener("click", () => {
    document.querySelector(".div-modal").style.cssText = "display: grid;"
})
document.querySelector(".close-modal-button").addEventListener("click", () => {
    document.querySelector(".login-box").classList.remove("animate__fadeInDown")
    document.querySelector(".login-box").classList.add("animate__fadeOutDown")
    setTimeout(() => {
        document.querySelector(".login-box").classList.remove("animate__fadeOutDown")
        document.querySelector(".login-box").classList.add("animate__fadeInDown")
        document.querySelector(".div-modal").style.cssText = "display:none;"
    }, 300);
})
document.querySelector(".div-modal .fondo").addEventListener("click", () => {
    document.querySelector(".login-box").classList.remove("animate__fadeInDown")
    document.querySelector(".login-box").classList.add("animate__fadeOutDown")
    setTimeout(() => {
        document.querySelector(".login-box").classList.remove("animate__fadeOutDown")
        document.querySelector(".login-box").classList.add("animate__fadeInDown")
        document.querySelector(".div-modal").style.cssText = "display:none;"
    }, 300);
})