
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
console.log("Hey!");

// Create an array that contains the words in the sentence
let theWordArray = ["The","walrus","danced","through","the","trees","in","the","light"
, "of","the","moon"];

function addExcitement (theWordArray) { //is referring to above array.
    // Each time the for loop executes, you're going to add one more word to this string.
    let output = ""; //referencing an empty string.
    let exclamation = "!";

    for (let i = 0; i < theWordArray.length; i++) {
        output += " " + theWordArray[i]; //the "space" in quotations will add a space between words in the array.
        //if you just have the quotations together like "" then the words will be all smushy.
        if (i % 3 === 0) {
            output += exclamation;
            exclamation += "!";
            console.log(output);
        }
        else {
            console.log(output);
        }  
    }
}
addExcitement(theWordArray)