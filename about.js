console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your response has been submitted');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


function imgCompliment() {
	
	alert('Have you been working out?')
}

let image = document.querySelector('img')

image.addEventListener('mouseover', imgCompliment)