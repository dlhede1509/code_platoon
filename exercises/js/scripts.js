// dogYears
// birthYear
// thisYear
// totalDogYears

var dogYears = 7;
var birthYear =0 ;
var thisYear = 0;
var totalDogYears;

function calculateDogYears(birthYear, thisYear) {
	totalDogYears = (thisYear - birthYear) * dogYears; 
	console.log(totalDogYears);
}