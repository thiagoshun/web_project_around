const buttonOpenEditProfile = document.querySelector(".subheader__button-edit");
const saveData = document.querySelector(".popup__save-button");
const popupEditProfileForm = document.querySelector(".popup__form");

function showPop() {
  const openPop = document.querySelector("#popup");
  const popContainer = openPop.querySelector(".popup__container");
  popContainer.style.display ="block";
}
buttonOpenEditProfile.addEventListener("click", showPop);

//criar variavel para cada um dos botoes
const closeEdit = document.querySelector("#buttonCloseEdit");
const closeCard = document.querySelector("#buttonClose");
//colocar o addventListner para cada um exm, L24
closeEdit.addEventListener ("click", function(){
  const openPop = document.querySelector("#popup");
  const popContainer = openPop.querySelector(".popup__container");
  popContainer.style.display ="none";
})
closeCard.addEventListener ("click", function(){
  const openPop = document.querySelector("#popupNew");
  const popContainer = openPop.querySelector(".popup__container");
  popContainer.style.display ="none";
});

function closePopupEditProfile(){
  const openPop = document.querySelector("#popup");
  const popContainer = openPop.querySelector(".popup__container");
  popContainer.style.display ="none";
}

function saveForm(event){
  event.preventDefault();

  const yourName = document.querySelector(".subheader__subtitle");
  const editDescript =document.querySelector(".popup__text-name");
  yourName.textContent = editDescript.value;

  const job = document.querySelector(".subheader__descriptionjac");
  const editJob = document.querySelector(".popup__text-description");
  job.textContent = editJob.value;
  closePopupEditProfile();
}
popupEditProfileForm.addEventListener("submit", saveForm);



//button add card button
const buttonOpenAddCardPopup = document.querySelector(".subheader__button-card");

function addCardOpenPopup() {
  //selecionao o pop que vai trabalhar
  const popupNew = document.querySelector("#popupNew");
  //pegar o pop container
  const popContainer = popupNew.querySelector(".popup__container");
  popContainer.style.display ="block";
}
buttonOpenAddCardPopup.addEventListener("click", addCardOpenPopup);
const addCardForm = document.querySelector(".popup__form-addCard");

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
function createCard(newCard){
  const cardTemplate = document.querySelector("#template").content;

  const cardElement = cardTemplate.querySelector(".gallery").cloneNode(true);
  console.log (cardElement);

  const cardName = cardElement.querySelector(".gallery__title");
  const cardLink = cardElement.querySelector(".gallery__image");
  const cardButtonLike = cardElement.querySelector(".gallery__title-button");


  //ele nao esta puxando o coraçao.
  cardButtonLike.addEventListener("click", (event) => {
    console.log (event.target);
    const image = event.target;
    console.log (image);
    if (image.classList.contains (".gallery__title-button")){
      image.classList.remove (".gallery__title-button");
      image.classList.add(".gallery__title-like");
      return ;
    }
      image.classList.remove (".gallery__title-like");
      image.classList.add(".gallery__title-button");
      return ;
  })

  cardName.textContent = newCard.name;
  cardLink.src = newCard.link;
  cardLink.alt = newCard.name;

  return cardElement;
}
//lixeira da foto da galeria
function deletePhoto() {
  const trash = document.querySelector('.trash-icon');
  if (confirm('Você tem certeza que deseja deletar esta foto?')) {
      trash.remove();
  }
}
const cardList = document.querySelector(".content");
initialCards.forEach((card) => {
  const cardElement = createCard(card);
  cardList.prepend(cardElement);
})
