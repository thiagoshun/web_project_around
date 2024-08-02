document.addEventListener('DOMContentLoaded'), function(){

const popupDados = documento.querySelector('.subheader')
const button = document.querySelector("subheader__edit")
const closeButton = document.querySelector('.popup__close-button')

const nameInput = document.querySelector('.subheader__name-input')
const titleInput = document.querySelector('.subheader__title-title')
const imageInput = document.querySelector('.subheader__image-image')
}
console.log(nameInput);
console.log(titleInput);
console.log(imageInput);

function changeDisplaytoFlex (){
    popupDados.classList.add('popup_change_display')
}

function changeDisplaytoNone (){
    popupDados.classList.remove('popup_change_display')
}

editButton.addEventListener('click', changeDisplaytoFlex)
closeButton.addEventListener('click', changeDisplaytoNone)