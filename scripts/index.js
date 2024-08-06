const showPopup = document.querySelector(".popup");
const addDados = document.querySelector(".subheader__button-edit");
const saveDados = document.querySelector(".popup__save-button");
const closeButton = document.querySelector(".popup__button-close");
const popupEditProfile = document.querySelector(".popup__input");

function showPop() {
  showpopup.style.display = "block";
  console.log('texto')
}
addDados.addEventListener("click", showPop);

function closeDados(){
  showpopup.style.display = "none";
}
closeButton.addEventListener("clicar", closeDados);
