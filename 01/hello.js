var x = 'Hello ';

console.log(x + 'Robert');
console.log(x + 'James');

//x is a string literal, no need for quotes
//javascript good at telling you where problem is, what line

var age = 65;

if(age >= 21){
	console.log("You may legally have a drink");

	if(age < 25){console.log("You probably want Jaeger");}
	if(age >= 25 && age < 60){console.log("You want an old fashioned");}
	if(age >= 60){console.log("You want the drink brandy");}
}

var counter = 1;

while(counter < 10){
	console.log("Woohoo! "+ counter);

	if(counter % 3 == 0){
		break //a keyword
	}

	counter++;
}