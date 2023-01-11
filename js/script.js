const btn = document.getElementById('btn')
const nav = document.getElementById('menu')
const btn2= document.getElementById('registerbutton')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  //nav.classList.toggle('flex')
  nav.classList.toggle('hidden');

})