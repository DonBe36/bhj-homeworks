const modalMain = document.getElementById("modal_main");
const modalClose = document.getElementsByClassName("modal__close");
const modalSuccess = document.getElementById("modal_success");
const showSucccess = document.getElementsByClassName("show-success");


window.onload = function () {
    modalMain.classList.add("modal_active");
};

modalClose.item(0).onclick = function () {
    modalMain.classList.remove("modal_active");
};
showSucccess.item(0).onclick = function () {
    modalSuccess.classList.add("modal_active");
    modalMain.classList.remove("modal_active");
};
modalClose.item(2).onclick = function () {
    modalSuccess.classList.remove("modal_active");
};