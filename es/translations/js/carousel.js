'use strict'

const row = document.querySelectorAll('.row');
const pointer = document.querySelectorAll('.pointer');
const containerCards = document.querySelector('.containerCards');

row.forEach(( perRow , i )=> {
    row[i].addEventListener('click',()=> {
        let position = i
        let newPosition = position * -50

        containerCards.style.transform = `translateX(${ newPosition }%)`

        pointer.forEach(( perPointer , i )=>{
            pointer[i].classList.remove('active')
        })
        pointer[i].classList.add('active')

        row[i].style.filter = 'brightness(50%)'

        setInterval(function(){
            row[i].style.filter = 'brightness(100%)'
        }, 200)
    })
})