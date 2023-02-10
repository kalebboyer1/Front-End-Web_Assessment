function mouse(evt){
	evt.preventDefault()
	alert("Beautiful, am I right?")
}

let img1 = document.querySelector('#img1')
img1.addEventListener('click', mouse)


let restaurants = ["Pier 49 Pizza", "Art City Trolley", "La Casita"]

let random = Math.floor(Math.random() * restaurants.length);
console.log(random, restaurants[random]);

function randrestbtn(evt){
    evt.preventDefault()
   confirm(restaurants[random])
}

let restaurant = document.querySelector("#restaurant")
restaurant.addEventListener('click', randrestbtn)