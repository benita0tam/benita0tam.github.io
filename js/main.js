/*comment like this*/
//or like this 
function askQuestions (){

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName+' '+lastName
	console.log(fullName);


	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age>=18){
		console.log('User is an adult');
	} else if (age>13) {
		console.log('User is a teenager');
	} else {
		console.log('User is a child');
	}

	var faveColour = prompt('What is your favourite colour?');
	faveColour = faveColour.toLowerCase();

	if (faveColour=='red' ||
		faveColour=='green' ||
		faveColour=='blue' ||
		faveColour=='yellow') {
		$('h1').css('color',faveColour);
	}

	if(firstName.toLowerCase()=='general' &&
		lastName.toLowerCase()!='assembly'){
		alert('Hi General!');
	}
}

//when the page has loaded
$(function() {
	//when the user cliks on the image the question function will run
	$('img').on('click',askQuestions);
	//when the user clicks h3 element 
	$('h3').on('click', function(){
		//hide the next session
		$(this).next().slideToggle(250);
	});
});