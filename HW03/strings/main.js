const myString = "Hello everyone! I'm Megan"
console.log('Before:', myString)
console.log('After:', myString.toLowerCase())
console.log('After:', myString.toUpperCase())

//Write a program that replaces {your_name} with your name, and {day_of_week} with the current day for the sentence below. Then print it to the console...
sentence = (name, day) => {
console.log("Hello there " + name + ". Today is " + day + ".")
}
sentence("Megan", "Tuesday")

//Write a program that reverses a 7-letter word of your choosing and prints it to the console.
const reverse = (str) => {
return str.split('').reverse().join('')
console.log(reverse('WhatsUp?'))
}


//Write a program that only shows the last word in a sentence of your choosing and prints it to the console.
const yourString = "I'm almost finished reviewing STRIIINGS!"

console.log(yourString.split(" ").pop())


//Write a program that converts a string to title case (first letter of every word is capital) and prints it to the console.
  const titleCase = (str) => {
  	//Lowercase the string  & Split the string into an array of strings
  str = str.toLowerCase().split(' ')
  //Create the FOR loop
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1) 
  }
  //Return the output
  return str.join(' ')
  }

console.log(titleCase("mmm kaaaay, whatever dude."))