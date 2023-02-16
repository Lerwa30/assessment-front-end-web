function colorBtn() {
    alert('Blue')
}

function placeBtn() {
    alert('Mexico')
}


function ritualBtn() {
    alert('Playing The Legend of Zelda')
}

const faveColor = document.querySelector('#color')
faveColor.addEventListener('click', colorBtn)

const favePlace = document.querySelector('#place')
favePlace.addEventListener('click', placeBtn)

const faveRitual = document.querySelector('#ritual')
faveRitual.addEventListener('click', ritualBtn)
