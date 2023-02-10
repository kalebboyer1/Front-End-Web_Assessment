function mouse(evt){
	evt.preventDefault()
	alert("Beautiful, am I right?")
}

let img1 = document.querySelector('#img1')
img1.addEventListener('click', mouse)


const restaurants = ["Pier 49 Pizza", "Art City Trolley", "La Casita"]

const random = Math.floor(Math.random() * restaurants.length);
console.log(random, restaurants[random]);

function randomrestButton (evt) {
    evt.preventDefault()

   confirm(restaurants[random])
}

const randrest = document.querySelector("#randrest")
randrest.addEventListener('click', randomrestButton)