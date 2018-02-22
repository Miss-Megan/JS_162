/*Complete these exercises given the following array:*/
const myArray = ['Apple', 'Banana', 'Cherry', 'Date', 'Eggfruit', 'Fig', 'Grape']

/*Add three more fruits to myArray, and then print the array to the console.*/
myArray.push('mango', 'blueberries', 'avacado')
console.log(myArray)

/*Print the third item of the array to the console.*/
console.log(myArray[2])

/*Remove the last item of the array, and then print the array to the console.*/
console.log(myArray.pop())

/*Remove the first item of the array, and then print the array to the console.*/
myArray.shift()
console.log(myArray)

/*Create a string variable which contains each item in the array, separated by a plus sign (+). Then print the string to the console. For example:
Apple+Banana+Cherry+Date...*/
console.log(myArray.join('+'))

//Reverse the array and then print the array to the console.
console.log(myArray.reverse())

//Set the second item in the array to store the word Durian. Then print the array to the console.
myArray[1] = "Durian"
console.log(myArray)

//Print the length of the array to the console.
console.log(myArray.length)
