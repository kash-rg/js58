// Given an array with these elements in it:

// var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];
// Write a function that returns the largest element in an array.

var numberList = [1,5,2,20,7,90,3];

var max = 0;

for (i = 0; i < numberList.length-1; i++){
	if (numberList[i] > max)
		{max = numberList[i]}
}

console.log(max);

// Write a function that checks whether an element occurs in an array. Make the function return true or false. For example:
// function inArray(array, element) { ... }

function inArray(array, element){

found = false;

	for (i=0; i < array.length && found == false; i++){
		if (array[i] == element){
			found = true;}
		;}

 	return found;}

if(inArray(numberList, 3)) { console.log("It exists!") }

// Write a function that returns the elements on odd positions in an array. For the list given above, it would print 5, 20, 90

function odd(array){
	for (i=0; i < array.length;i++){
		if(i % 2 != 0){
			console.log(array[i])
		;}
	;}
;}

odd(numberList);

// Write a function that computes the running total of an array. (IE: What is the sum of all of the values in an array)

function total(array){
	sum = 0;
	for (i=0; i<array.length;i++){
		sum += array[i];
	}

	console.log(sum)
;}

total(numberList);

// Write a function that tests whether a string is a palindrome. For example "racecar" would return true, but "cat" would not.

function palindrome(string){
	answer = true;
	for (i=0; i<string.length; i++){
		if(string[i] != string[string.length-1-i]){
			answer = false;
		}
	;}
	console.log("The string "+string+ " is a palindrome?: "+answer);
}

palindrome("racecar");
palindrome("budlight");

// You can do all of these in 1 javascript file.



