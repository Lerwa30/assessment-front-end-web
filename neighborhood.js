function randomFood() {
    const restaurants = ["Reign of Thai", "Ray's Pizza", "Carolina's"];
    const random = Math.floor(Math.random() * restaurants.length);
    alert(restaurants[random])
}


const foodBtn = document.querySelector('#food-btn');
foodBtn.addEventListener('click', randomFood)