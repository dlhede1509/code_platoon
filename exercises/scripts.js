
function calculateDogYears(birthYear, thisYear) {
	var birthYear = Number(document.getElementById("birthYear").value);
	var thisYear = Number(document.getElementById("thisYear").value);
	var dogYears = 7;
	alert((thisYear - birthYear) * dogYears);
};

function reverseNumbers(number1, number2) {
	var number1 = document.getElementById("number1").value;
	var number2 = document.getElementById("number2").value;

	var firstNumber = number1.split("").reverse("").join("");
	console.log(firstNumber);

	var secondNumber = number2.split("").reverse("").join("");
	console.log(secondNumber);

	if(Number(firstNumber) > Number(secondNumber)) {
		alert(number1);
	} else {
		alert(number2);
	};
};

function returnIndex(targetNumber, numberList) {
	var targetNumber = document.getElementById("targetNumber").value;
	var numberList = document.getElementById("numberList").value; 

	var index = numberList.split("").indexOf(targetNumber);

	alert(index);
};

function sortWords(wordList) {
	
	// split the string into an array. 
	// loop through the array to create new arrays for each new word. 
	// 
	var array = document.getElementById("wordList").value.toLowerCase().split(" ");
	console.log(array);
	
	array.sort(function(a, b) {
		return a.length - b.length || a.localeCompare(b);
	});


	alert(array);

};

// function reverseNumbers(number1, number2) {

// 	var number1 = document.getElementById("number1").value;
// 	var number2 = document.getElementById("number2").value;

// 	var splitNumber1 = number1.split("");
	
// 	var reverseNumber1 = splitNumber1.reverse("");
	
// 	var joinNumber1 = reverseNumber1.join("");
	
// 	var firstNumber = Number(joinNumber1);
	

// 	var splitNumber2 = number2.split("");
	
// 	var reverseNumber2 = splitNumber2.reverse("");
	
// 	var joinNumber2 = reverseNumber2.join("");
	
// 	var secondNumber = Number(joinNumber2);

// 	if (firstNumber > secondNumber) {
// 		alert(firstNumber); 
// 	} else {
// 		alert(secondNumber);
// 	}
// };