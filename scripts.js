const isPalindrome = (word) => {
	//Remove non-alphanumeric characters
	let updatedWord = word.replace(/[^0-9a-z]/gi, '');
	//Convert string to lowercase
	let lowerWord = updatedWord.toString().toLowerCase();
	//Split string into array for reversal
	let splitWord = lowerWord.split("");
	//Reverse the array
	let reversedArray = splitWord.reverse();
	//Join the array to make reversed string
	let reversedWord = reversedArray.join("");

	//Compare reversed string with supplied string
	if(reversedWord === lowerWord) {
		return true;
	} else {
		return false;
	}
}

const formatDate = (date) => {
	//Split the provided by / - to get Month , Day & Year
	let splitDate = date.split("/");
	let month = splitDate[0];
	let day = splitDate[1];
	let year = splitDate[2];

	//Prepend zero (0) if the day is single digit
	if(day.length == 1) {
		day = '0' + day;
	}

	//Prepend zero (0) if the month is single digit
	if(month.length == 1) {
		month = '0' + month;
	}

	//Concat above derived params to provide the date in required format
	let formattedDate = year + month + day;
	return formattedDate.toString();
}
