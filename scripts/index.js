//const showPopup = document.querySelector(".popup__container");
const addData = document.querySelector(".subheader__button-edit");
const saveData = document.querySelector(".popup__save-button");
const closeButton = document.querySelector(".popup__button-close");
const popupEditProfile = document.querySelector(".popup__form");


function showPop() {
  const openPop = document.querySelector("#popup");
  const popContainer = openPop.querySelector(".popup__container");
  popContainer.style.display ="block";

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


//button add card button
const addCardButton = document.querySelector(".subheader__button-edit");

function addCard() {
  //selecionao o pop que vai trabalhar
  const popupNew = document.querySelector("#popupNew");
  //pegar o pop container
  const popContainer = popupNew.querySelector(".popup__container");
  popContainer.style.display ="block";
}
addCardButton.addEventListener("click", addCard);
//----------------------------------------------------------------------
/*const showAddCard = document.querySelector(".subheader__button");
const addCard = document.querySelector(".subheader__button-card");

function addCardNew(){
  console.log("card")
  showPop.style.display = "block";
}
addCard.addEventListener("click", addCardNew);
*/


//add card
//array
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];


//criar cartao
function createCard (newCard){
const cardTemplate = document.querySelector("#cards-template").contente;

const cardElement = cardTemplate.querySelector (".newCard").cloneNode(true);
console.log (cardElement);

const cardName = cardElement.querySelector(".");
const cardLink = cardElement.querySelector(".");
}


//add like
const galleryLike = document.querySelectorAll("#gallery__title-heart");

console.log(galleryLike);
function likes(event){
  let like = event.target;
  if (like.classList.contains("gallery__title-heart")) {
    like.classList.remove("gallery__title-heart");
    like.classList.add("gallery__title-like")
  }
}
gallery.forEach((like) => like.addEventListener("click", likes));