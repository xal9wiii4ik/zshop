const burgerOpen = document.querySelector('.burger--open')
const burgerModal = document.querySelector('.burger')
const burgerClose = document.querySelector('.burger--close')
const header = document.querySelector('header')


burgerOpen.addEventListener('click', evt => {
  evt.preventDefault();
  burgerModal.classList.toggle('burger--active')
})

burgerClose.addEventListener('click', evt => {
  evt.preventDefault();
  burgerModal.classList.toggle('burger--active')
})
