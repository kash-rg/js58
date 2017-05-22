function foo(){
	console.log("Hello");
}

foo();

function bar(name){
	console.log("Hello "+ name);
}

bar('Robert');

function sum(a,b){
	console.log(a+b);
}

sum(4,5);

function yellSomething(something){
	return something.toUpperCase();
}

var chicken = yellSomething("piglet");

console.log(chicken);