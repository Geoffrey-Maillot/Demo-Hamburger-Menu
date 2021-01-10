const bodyElement = document.querySelector(`body`)
const menuElement = document.getElementById(`menu`)
const iconElement = document.getElementById(`header__icon`)

iconElement.addEventListener(`click`, (e) => {
  
  menuElement.classList.toggle(`visible`);
  iconElement.classList.toggle(`visible-icon`)
  bodyElement.classList.toggle(`hidden-scroll`)
  
})
