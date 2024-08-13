const showPopup = document.querySelector(".popup__container");
const addData = document.querySelector(".subheader__button-edit");
const saveData = document.querySelector(".popup__save-button");
const closeButton = document.querySelector(".popup__button-close");
const popupEditProfile = document.querySelector(".popup__form");

function showPop() {
  console.log("casa")
  showPopup.style.display = "block";
}
addData.addEventListener("click", showPop);

function closeData(){
  showPopup.style.display = "none";
}
closeButton.addEventListener("click", closeData);

function saveForm(event){
  event.preventDefault();

  const yourName = document.querySelector(".subheader__subtitle");
  const editDescript =document.querySelector(".popup__text-name");
  yourName.textContent = editDescript.value;

  const job = document.querySelector(".subheader__descriptionjac");
  const editJob = document.querySelector(".popup__text-description");
  job.textContent = editJob.value;
  closeData();
}
popupEditProfile.addEventListener("submit", saveForm);