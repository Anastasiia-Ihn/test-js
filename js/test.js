// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// console.log(getSubstring('Hello world', 0))
// console.log(getSubstring('Hello world', 3))
// console.log(getSubstring('Hello world', 5))
// console.log(getSubstring('Hello world', 8))
// console.log(getSubstring('Hello world', 11) )

// 33

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//     if(message.length <= maxLength) {
//         result = message;
//     } else if (message.length > maxLength) {
//         result = (message.slice(0, maxLength) + '...');
//     }
//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16))
// console.log(formatMessage("Curabitur ligula sapien", 23))
// console.log(formatMessage("Vestibulum facilisis purus nec", 20))
//   console.log(formatMessage(  'Nunc sed turpis a felis in nunc fringilla', 41) )
// console.log(formatMessage('Vestibulum facilisis purus nec', 30))


// 34

// function normalizeInput(input) {
//   const normalizedInput = (input.toLowerCase()); // Change this line

//   return normalizedInput;
// }console.log(normalizeInput("This ISN'T a SpaM"))
// console.log(normalizeInput('Big SALES'))


// 35

// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }
// console.log(checkForName("Egor Kolbasov", "Egor"))


// 36

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//     message = message.toLowerCase();
//       result = message.includes('spam') || message.includes('sale');

    
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("Latest technology news"))
// console.log(checkForSpam("Get best sale offers now!"))
// console.log(checkForSpam('Trust me, this is not a spam message'))

