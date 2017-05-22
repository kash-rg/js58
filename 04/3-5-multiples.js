
var sum = 0;
var threshold = 1000;

for (var number = 0; number < threshold; number++){
	if(number % 3 == 0 || number % 5 == 0){
		sum = sum + number
	}
}

console.log(sum);

