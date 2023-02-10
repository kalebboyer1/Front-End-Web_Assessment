console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted successfully!");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function mouse(evt){
	evt.preventDefault()
	alert("Hello you're the best!")
}

let img = document.querySelector('img')
img.addEventListener('mouseover', mouse)