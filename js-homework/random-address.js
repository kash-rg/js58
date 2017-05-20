//dummy data for street, city, state

var street = ['Winsor', 'John', 'Marlboro'];

var city = ['SF', 'New York', 'Washington'];

var state =['NY', 'CA', 'DC'];

var streetrandom = Math.random();
var cityrandom = Math.random();
var staterandom = Math.random();

if (streetrandom <= .33){
	streetrandom = street[0];
}
else if (streetrandom <= .66){
	streetrandom = street[1];
}
else {streetrandom = street[2];}


if (cityrandom <= .33){
	cityrandom = city[0];
}
else if (cityrandom <= .66){
	cityrandom = city[1];
}
else {cityrandom = city[2];}

if (staterandom <= .33){
	staterandom = state[0];
}
else if (staterandom <= .66){
	staterandom = state[1];
}
else {staterandom = state[2];}

console.log(Math.floor(Math.random()*100000)+" "+streetrandom+" Street"+", "+cityrandom+" "+staterandom);