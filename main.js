$(document).on('ready', function() {
	var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

	console.log("Problem 1.")
	for(i=0;i<animals.length -1; i++){
		console.log(animals[i])
	}

	console.log("Problem 2.")
	for(i=0;i<animals.length; i+= 2){
		console.log(animals[i])
	}	

	console.log("Problem 3.")
	rev = animals.reverse()
	for(i=0;i<animals.length; i++){
		console.log(rev[i])
	}
	

	// Didn't know reverse changed original, reverting it back.
	animals.reverse()

	console.log("Problem 4.")
	for(i=0;i<animals.length; i++){

		if(i===0 || i===4){console.log(animals[i])}
		else{console.log(animals[i]);console.log(animals[i])}
	}

});