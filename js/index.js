const place = document.querySelector('.hall-place');
let cost=800;
let totalPrice=0;
const totalPriceTag = document.querySelector('.payment');
// const selectPlace = document.querySelector('.btn-sit-place');
place.addEventListener('click', function(evt) {
    if(evt.target.classList.contains('btn-sit-place')){
    evt.target.classList.toggle('active')
    totalPrice = place.querySelectorAll('.active').length*cost;
    totalPriceTag.textContent = totalPrice
    }
})
const date = document.querySelectorAll('.btn-select')
date.forEach(function(element){
    element.onclick = function(){
        element.classList.toggle('current')
    }
})

const navMenu = document.querySelector('.nav-menu');
const burger = document.querySelector('.burger-btn')
burger.addEventListener('click', ()=>{
navMenu.classList.toggle('open')
})