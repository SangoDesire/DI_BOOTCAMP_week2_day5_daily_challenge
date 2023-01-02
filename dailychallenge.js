//DAILY CHALLENGE WEEK 2 day5 

//Prompt the user for a number to begin counting down bottles.
//In the song, everytime a bottle drops,
//the subtracted number should go up by 1.
// The song should end with “0 bottle of beer on the wall” or 
//“no bottle of beer on the wall”.
//Note: Make sure you get the grammar correct.
//For 1 bottle, you pass“ it” around.
//For more than one bottle, you pass“ them” around

let beer = parseInt(prompt("Please, enter a number to begin counting down bottles"))
console.log("We start the song at " + beer + " bottles ")
let numberbottles = beer
for (let i = 1; i <= numberbottles; i++) {
    beer -= i;
    if (beer < 0) {
        console.log("Take _" + i + "_ down, pass it around ")
        console.log("we have now 0 bottle ")

        break

    }
    console.log("Take _" + i + "_ down, pass it around ")
    console.log("we have now " + beer + " bottles ")

}