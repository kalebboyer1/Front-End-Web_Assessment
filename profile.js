function mouse(evt){
	evt.preventDefault()
	alert("My Favorite Color is Red")
}

let color = document.querySelector('#color')
color.addEventListener('click', mouse)


function mouse(evt){
	evt.preventDefault()
	alert("My Favorite Place is Phuket, Thailand")
}

let place = document.querySelector('#place')
place.addEventListener('click', mouse)


function mouse(evt){
	evt.preventDefault()
	alert("My Favorite Ritual is fireworks on July 4th")
}

let ritual = document.querySelector('#ritual')
ritual.addEventListener('click', mouse)


// let buttons = document.getElementsByTagName("button");
// for(let i = 0; i < buttons.length; i++){
//     buttons [i].classList.add("btn");
// }


function mouse(evt){
	evt.preventDefault()
    const image = evt.target;
    if(image.id === 'img1'){
	alert("Wouldn't you like to be here?")
} else if(image.id === 'img2'){
    alert("Or would you prefer to be here?")
}
}



let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')

img1.addEventListener('mouseover', mouse)
img2.addEventListener('mouseover', mouse)