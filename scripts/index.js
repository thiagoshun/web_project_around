const showPopup = document.querySelector(".popup__container");
const addDados = document.querySelector(".subheader__button-edit");
const saveDados = document.querySelector(".popup__save-button");
const closeButton = document.querySelector(".popup__button-close");
const popupEditProfile = document.querySelector(".popup__input");

function showPop() {
  showPopup.style.display = "block";
}
addDados.addEventListener("click", showPop);

function closeDados(){
  showPopup.style.display = "none";
}
closeButton.addEventListener("click", closeDados);

function saveForm(event){
  event.preventDefault();

  const yourName = document.querySelector(".subheader__subtitle");
  const editDescript =document.querySelector(".popup__text-name");
  yourName.textContent = editDescript.value;

  const job = document.querySelector(".subheader__description");
  const editJob = document.querySelector(".popup__text-description");
  job.textContent = editJob.valu;
}

popupEditProfile.addEventListener("submit", saveForm);