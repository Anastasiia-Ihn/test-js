// // 8
// function add(a, b, c) {
//     const result = a + b + c;
//     console.log(`Addition result equals ${result}`)
// }

// add(10, 20, 30)
// add(15, 27, 10)

// 9
// function add(a, b, c) {
//     return a + b + c;
// }

// console.log(add(10, 20, 30))
// console.log(add(15, 27, 10))

// 10
// function makeMessage(name, price) {
  
//    const message = `You picked ${name}, price per item is ${price} credits`;
//     return message;
// }

// console.log(makeMessage('Radar', 6150))

// 11
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//     const totalPrice = orderedQuantity * pricePerItem;
//     return totalPrice
// }

// console.log(calculateTotalPrice(5, 100))
// console.log(calculateTotalPrice(1, 3500))

// 12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//     const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//     return message;
// }
// console.log(makeOrderMessage(2, 100, 50))
// console.log(makeOrderMessage(4, 300, 100))

// 13
// function isAdult(age) {
//     const passed = (age >= 18);
//     return passed
// }
// console.log(isAdult(20))
// console.log(isAdult(15))
    
// 14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//     const isMatch = password === SAVED_PASSWORD;
    
// return isMatch}
// if (typeof (isValidPassword) === 'function'){
//       console.log('true');
// }
//  else {
//   console.log('false');
// }

// console.log(isValidPassword("mangodab3st"))

// 15

// function checkAge(age) {
//     let message
//     if (age >= 18) {
//         message = "You are an adult";
//     }
//         else {
//         message = "You are an minor";
//     }
//      return message;
// }
// console.log(checkAge(20))
// console.log(checkAge(10))

// 16

// function checkStorage(available, ordered) {
//     let message
//     if (ordered >= available) {
//         message = "Not enough goods in stock!";
//     }
//     else { message = "Order is processed, our manager will contact you."; }
//     return message; }

// console.log(checkStorage(100, 50))


// 18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//    const totalPrice = pricePerDroid * orderedQuantity;
//     let message
//     if (totalPrice > customerCredits){
//         message = "Insufficient funds!";
//     } else {
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//     }return message
// }

// console.log(makeTransaction(3000, 5, 23000))
// console.log(makeTransaction(1000, 3, 15000))
// console.log(makeTransaction(2000, 8, 10000))

// 19

// function checkPassword(password) {
//     let message;
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     if (password === null && password!==ADMIN_PASSWORD) {
//         message = "Canceled by user!";
//     } else if (password === ADMIN_PASSWORD) {
//         message = "Welcome!";
//     } else {
//         message = "Access denied, wrong password!";
//     }return message
// }
// console.log(checkPassword("mangohackzor"))

// 20

// function checkStorage(available, ordered) {
//     let message;
//     if (ordered === 0) {
//         message = "There are no products in the order!";
//     } else if (ordered > available) {
//         message = "Your order is too large, there are not enough items in stock!"
//     } else {
//         message = "The order is accepted, our manager will contact you"
//     }return message
// }
// console.log(checkStorage(100, 50))
// console.log(checkStorage(100, 130))

// 21
// function isNumberInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     return isInRange
// }
// console.log(isNumberInRange(10, 30, 17))
// console.log(isNumberInRange(10, 30, 37))

// 22
// function checkIfCanAccessContent(subType) {
//     const canAccessContent = subType === 'pro' || subType === 'vip';
//     return canAccessContent
// }

// console.log(checkIfCanAccessContent("pro"))


// 23
// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange;
//      return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17))
// console.log(isNumberNotInRange(10, 30, 5))

// 24
// function getDiscount(totalSpent) {
//      const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//     let discount;
//     if (totalSpent === 50000 || totalSpent > 50000) { discount = GOLD_DISCOUNT; }
//     else if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//     }    else if (totalSpent >= 5000 && totalSpent < 20000){
//         discount = BRONZE_DISCOUNT;
        
//     } else { discount = BASE_DISCOUNT; }
//     return discount
    
// }console.log(getDiscount(137000))
// console.log(getDiscount(13000))
// console.log(getDiscount(4500))

// 25
// function checkStorage(available, ordered) {
//     let message;
//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
// return message}

// console.log(checkStorage(100, 50))

// 26
// function checkPassword(password) {
//     const ADMIN_PASSWORD ='angul4r1sl1f3';
//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
//     return message;
// } console.log(checkPassword("jqueryismyjam"))
// console.log(checkPassword("angul4r1sl1f3"))

// 27
// function getSubscriptionPrice(type) {
//     let price;
//     switch (type) {
//    case 'starter':
//             price = 0;
//             break;
//         case 'professional':
//             price = 20;
//             break;

//         case  'organization':
//             price = 50;
//             break;
// }
//      return price;
// } console.log(getSubscriptionPrice('professional'))
//     console.log(getSubscriptionPrice("organization"))

// 28

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'mangohackzor';
//     let message;
//     switch (password) {
//         case null:
//             message = "Canceled by user!";
//             break;
//         case ADMIN_PASSWORD:
//             message = "Welcome!";
//             break;
//         default :
//             message = "Access denied, wrong password!";
        
//     }return message;
// }
// console.log(checkPassword("mangohackzor"))
// console.log(checkPassword(null))
// console.log(checkPassword("polyhax"))

// // 29
// function getShippingCost(country) {
//     let message;
//     let price;
//     switch (country) {
//         case 'China':
//             price = 100;
//             message = `Shipping to ${country} will cost ${price} credits`;
//             break;
//         case 'Chile':
//             price = 250;
//              message = `Shipping to ${country} will cost ${price} credits`;
//             break;
//         case 'Australia':
//             price = 170;
//              message = `Shipping to ${country} will cost ${price} credits`;
//             break;
//         case 'Jamaica':
//             price = 120;
//              message = `Shipping to ${country} will cost ${price} credits`;
//             break;
//         default: message = "Sorry, there is no delivery to your country";
//     } return message;
// }
// console.log(getShippingCost("Australia"))
// console.log(getShippingCost("Germany"))
// console.log(getShippingCost("China"))

// 30
// function getNameLength(name) {
//     const message = `Name ${name} is ${name.length} characters long`;
//     return message; }
// console.log(getNameLength("Poly"))

// 31
// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length  - 1];



// 32
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
//   const normalizedInput = (input.toLowerCase());

//   return normalizedInput;
// }console.log(normalizeInput("This ISN'T a SpaM"))
// console.log(normalizeInput('Big SALES'))


// 35

// function checkForName(fullName, name) {
//  const result = fullName.includes(name);
//   return result;
// }
// console.log(checkForName("Egor Kolbasov", "Egor"))


// 36

// function checkForSpam(message) {
//   let result;
//
//     message = message.toLowerCase();
//       result = message.includes('spam') || message.includes('sale');

    
//
//   return result;
// }

// console.log(checkForSpam("Latest technology news"))
// console.log(checkForSpam("Get best sale offers now!"))
// console.log(checkForSpam('Trust me, this is not a spam message'))


// ---
// Напишіть код, який перевіряє, чи користувач має право на знижку
// на товар.Користувач має право на знижку, якщо він є студентом
// або пенсіонером, або вік його між 12 і 18 роками(включно).

// const pensioner = true;
// const student = false;
// const age = 65;
// let discount = false;
// if (pensioner || student||(age >= 12 && age <= 18)) {
//     discount = true;
// }
// console.log(discount)

// ----
// Напишіть код, який перевіряє, чи можна отримати водійські права.
// Користувач може отримати водійські права, якщо йому виповнилося
// 18 років і він має право на працевлаштування.

// const age = 23;
// const right = true;
// let isRight = false;
// if (age >= 18 && right) {
//     isRight = true;
// }console.log(isRight)
// ----
// Напишіть код, який перевіряє, чи можна відкрити двері.
// Двері можна відкрити, якщо ключ у власника або у його
// друга, або двері не закриті на замок.

// const hasKey = false;
// const isFriend = false;
// const isDoorClose = true
// let canOpenDoor = false;

// if (hasKey || isFriend || !isDoorClose) {
//     canOpenDoor = true;
// }
// console.log(canOpenDoor)

// -----
// Напишіть код, який перевіряє, чи є введене користувачем значення
// числом, і виводить його квадрат, якщо це число.Якщо значення
// не є числом, виведіть повідомлення про невірний ввід.
// Вводити значення користувач буде за допомогою prompt()

// const answer = prompt('Введіть число');
// const numbValue = Number(answer)

// console.log(numbValue)
// if (isNaN(numbValue)) {
//     alert('невалідне значення')
// }
// else {const squerNumb = Math.pow(numbValue, 2)
// alert (`Результат обчислень: ${squerNumb}`)}

// ----
// Напишіть код, який перевіряє, чи введене користувачем значення є рядком
// і не містить символ $. Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.
// Вводити значення користувач буде за допомогою prompt()

// const answer = prompt('Введіть рядок без символа $');
// if (typeof answer === 'string' && !answer.includes('$')) {
//     console.log(`Довжина рядка: ${answer.length}`);
// } else {
//     console.log('Не вірно введене значення');
// }
// -----
// Напишіть код, який перевіряє (за допомогою тернарного оператору),
// чи введене користувачем значення є парним числом і виводить
// відповідне повідомлення на екран за допомогою alert.
// Вводити значення користувач буде за допомогою prompt()

// const answer = prompt('Введіть число:');
// const message = answer % 2 === 0 ? 'Число парне' : 'Число непарне';
// alert (message);


//------
// За допомогою циклу for потрібно виконати
// підрахунок кількості символів в рядку


// const str = "Hello, world!";
// let count = 0;
// for (let i = 0; i < str.length; i += 1) {
//     count += 1;
   
// }
// console.log(count);

// ------
//3. Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню
// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i--){
//     if (i % 2 === 0) {
//         console.log(`Парне число ${i} `);
    
//     }
// }


//----
//4. За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно
// const max = 50;
// const min = 0;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         continue;
//     } else {
//         total += i;
//     }
// }
// console.log(total);

// ----
// За допомогою циклу do...while написати програму, яка буде запитувати
// користувача ввести пароль доти, доки він не введе вірний пароль.

// const ADMIN_PASSWORD = "cvbh0m3nj"
// let userPassword;
// do  {
//  userPassword = prompt('Введіть пароль');
// } while (userPassword
//     !== ADMIN_PASSWORD)
// console.log(`ви ввели вірний пароль`);

// -----
// За допомогою циклу do...while написати програму, яка буде запитувати
// користувача ввести число доти, доки він не введе число, яке більше 10.

// let number;
// do {
//     number = prompt('Введіть число');
// } while (number <= 10);
// console.log('ви ввели вірне число');

// ------
// Напишіть скрипт, котрий отримає від користувача число (кількість хвилин) і виведе в консоль
// рядок у форматі годин і хвилин, тобто, якщо користувач вказав число 70, в консолі отримаємо "01:10"

// 2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line



//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
 
// } console.log(checkPassword('mangohackzor'));
// console.log(checkPassword('jqueryismyjam'));

//----------
// function checkStorage(available, ordered) {
//   // Change code below this line
 

//   if (ordered === 0) {
//    return "Your order is empty!";
//   } if (ordered > available) {
//     return"Your order is too large, not enough goods in stock!";
//   }

//   return  "The order is accepted, our manager will contact you";
//   // Change code above this line
// }
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(100, 50));

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);

// ---------------
// 9
// function getExtremeElements(array) {
   
//     return [array[0], array[array.length - 1]];
// }
// console.log( getExtremeElements(['apple', 'peach', 'pear', 'banana']));


//-----10
// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//     words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));

// 11
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     return (message.split(" ").length * pricePerWord);


//    // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));


// 12
// function makeStringFromArray(array, delimiter) {
//   let string;
  
//     string = array.join(delimiter);
//   return string;
// }console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], '') );

// 13

// function slugify(title) {
  
//     return title.toLowerCase().split(" ").join("-")
   
// }console.log(slugify("Arrays for begginers"));


// 14
//  const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// 15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// 16
// function makeArray(firstArray, secondArray, maxLength) {
//     const newArray = firstArray.concat(secondArray);
//     return newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray;
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

// 17
// const start = 3;
// const end = 7;

// for (let i = start ; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// 18
// function calculateTotal(number) {
//     let addNumber = 0;
//     for (let i = 1; i <= number; i += 1) {
  
//         addNumber += i;
//     }
//     return addNumber
// }

// console.log(calculateTotal(7));

// 19

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (const item of order) {
//      total += item
// }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// 21
// function findLongestWord(string) {

//     let wordArray = string.split(" ");
//     let longestWord = "";
   
//     for (const word of wordArray) {
       
        
//         if (word.length > longestWord.length) {
//             longestWord = word;

           

//         }
//     } return longestWord
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

// 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
  
// for (let i = min; i <= max; i += 1) {
//       numbers.push(i)
// }
  
//   return numbers;
// }
// console.log(createArrayOfNumbers(14, 17));

// 23
// function filterArray(numbers, value) {

//   let newArr = [];
  
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) newArr.push(numbers[i]);
//   } return newArr;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// 24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit);
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));

// 25
// function getCommonElements(array1, array2) {
 
//   let newArray = [];

//   for (let i = 0; i < array1.length; i += 1) {
    
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray

// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// 26
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const item of order) {
//     total += item;
  
// }  return total;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// 27
// function filterArray(numbers, value) {

//   const filteredNumbers = [];

// for (const number of numbers) {
//    if (number > value) {
//       filteredNumbers.push(number);
//     }
// }
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// 28
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;
// console.log(a, b, c, d, e);

// 29


// function getEvenNumbers(start, end) {

//   let newArr = [];

//   for (let i = start; i <= end; i += 1) {
//    if (i % 2 === 0) {
   
//       newArr.push(i)
//     }
//   }return newArr
//   }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(6, 12));


// 30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break
//   }
// }


// 31
// function findNumber(start, end, divisor) {
//   // Change code below this line
 

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return  i;
    
//     }
//   }
// }


// 32
// function includes(array, value) {
//   for (const item of array) {
//   if (item === value)
//   return true
// }return false
// }

// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));1


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// console.log(book);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations);

//------------------------------------------------
// обєкти
//
//

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[numberOfTags - 1];

// -----------------------------------
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line
// console.log(apartment['rating']);


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.log(apartment.name);

//


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";
// console.log(apartment.area);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };


//    const keys = [];
// const values = [];
// for (const key in apartment) {
//     console.log(key);
//     console.log(apartment[key]);
//     keys.push(key);
//     values.push(apartment[key])
    
// }

// console.log(keys);
// console.log(values);


// const temps = [14, -4, 25, 8, 11];

// // В консолі буде масив
// console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// // В консолі буде набір окремих чисел
// console.log(...temps);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps]
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(9, 2, 3);
// multiply(1, 2, 3, 4);
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const accessType = book.isPublic ? "публічному" : "закритому";
// const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;
// console.log(message);
// console.log(accessType);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key])
//   console.log(values);
// }
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
    
//       propCount += 1;
    
//   }

//   return propCount;
//   // Change code above this line
// }console.log(countProps({}));

// 15
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(Object.values(apartment));

// 16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// 17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   console.log(color);
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb)
// }
// console.log(rgbColors);

// 18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

// for (const product of products) {
//   if (product.name.includes(productName)) {
//     return product.price;
//   }
// }return null;

//   // Change code above this line
// }console.log(getProductPrice("Radar"));

// 19/


// function getAllPropValues(propName) {
//   // Change code below this line
//   const values = [];

//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//      values.push(product[propName])
    
//    }
//   } return values;


//   // Change code above this line
// }console.log(getAllPropValues("price"));

// 20/
// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let total = 0;

//   for (const product of products) {
//   if (product.name.includes(productName)) {
//     return total = product.price * product.quantity;
//   }
// }return total =0


//   // Change code above this line
// }
// console.log(calculateTotalPrice("Radar"));

// 21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {yesterday, today, tomorrow} = highTemperatures

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const { today: { low: lowToday, high:highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, tomorrow: { low: lowTomorrow, high:highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }} = forecast;

// 26
// function calculateMeanTemperature(forecast) {
//   const { today:{ low: todayLow, high: todayHigh }, tomorrow:{ low: tomorrowLow, high: tomorrowHigh}
// } = forecast;
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// 27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore =Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);

// 28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(bestScore);console.log(worstScore);
 

// 29
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};console.log(finalSettings);

// 30
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   // const { completed, category, priority } = data;
  
//   return { ...{ completed, category, priority },...data }
//   // Change code above this line
// }

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));

// 31
// function add(...args) {
//   let sum = 0;

// for (const arg of args) {
 
//     sum += arg;
  
// }return sum;

// }console.log(add(12, 4, 11, 48));

// 32
// function addOverNum(firstElement, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (firstElement < arg) {
//        total += arg;
//     }
   
//   }

//   return total;
//   // Change code above this line
// }console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// 33
// function findMatches(firstArray, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     if (firstArray.includes(arg)) {
//       matches.push(arg);
//   }
  
// }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// 34
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   // Change code above this line
//   removeBook(bookName) {
//    return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`
//   }
// };
// console.log(bookShelf.updateBook('Sands of dune', 'Dune'));

// 35
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     this.books.splice(this.books.indexOf(oldName), 1, newName)
//   }
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

// 36
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
 
  // getPotions() {
  // return this.potions
  // },

  // addPotion(potionName) {
  //    return this.potions.push(potionName)
  //  },

  // removePotion(potionName) {
  //   return this.potions.splice(this.potions.includes(potionName), 1)
  // },

//   updatePotionName(oldName, newName) {
// return this.potions.splice(this.potions.indexOf(oldName), 1, newName)
//   },
// }
// console.log(atTheOldToad.removePotion("Dragon breath"));

// 41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
  
//   }, 

//    addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
   
   
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
    
   
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());
//  console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));

//addPotion(newPotion) {
  //     for (const item of this.potions) {
  //           if (item.name === newPotion.name) {
  //               return `Error! Potion ${newPotion.name} is already in your inventory!`;
  //           }
  //       }
  //       const newProduct = {
  //           ...newPotion,
  //       };

  //   this.potions.push(newPotion);
  // },
  // removePotion(potionName) {
  //   for (let i = 0; i < this.potions.length; i += 1) {
  //     const potion = this.potions[i];
  //     if (potionName === potion.name) {
  //       this.potions.splice(i, 1);
  //     }
  //   }
  // },
  // updatePotionName(oldName, newName) {
  //   let resalt = `Potion ${oldName} is not in inventory`;
  //   for (let i = 0; i < this.potions.length; i += 1) {
  //     const potion = this.potions[i];

  //     if (oldName === potion.name) {
  //       potion.name = newName;
  //       resalt = `Found ${oldName} change to ${newName} `;
  //     }
  //   }
  //   return console.log(resalt);
  // },



  // 
  // 
  // 
  // практика
  
// 1
// Напишіть функцію, яка створює масив з вказаною довжиною і заповнює його вказанним значення.
// Наприклад функція fillArray(3, 'a') повертає масив ['a', 'a', 'a'].
  
// function fillArray(num, string) {
//   let arr = [];
//  for (let i = 0; i < num; i +=1) {
//    arr.push(string);
//   }
//   return arr;
// }
// console.log(fillArray(3, 'a'));

// 2
// Напиши скрипт, який порівняє два масива і виведе у консоль результат чи усі елементи у них однакові


// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// function qwery (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (const element of arr1) {
//     if (!arr2.includes(element)) {
//       return false
//     }
//       return true
//   }
// } console.log(qwery(arr1, arr2));
// console.log(qwery(arr3, arr4));
// console.log(qwery(arr5, arr6));
// console.log(qwery(arr7, arr8));


// 3

// Написати функцію, котра створить новий масив в якому 
// не буде значень, які приводяться до false


// const array = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];

// function foo(arr) {
//   let arrNew = [];
//   for (const element of arr) {
//     if (!element) continue;
//     arrNew.push(element);

//   } return arrNew;
// }
// console.log(foo(array));

// 4
// Напишіть функцію caclculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
//   let sum = 0;
//   let count = 0;
//   for (const element of args) {
//     if (typeof element !== "number") continue;
//     sum += element;
//     count += 1;
//   } return sum/count;
// }
// console.log(caclculateAverage(1, 2, 8, "t", "go",9));


// 5
// Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key. 
// Функція буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.

// const user = {
//     name: 'Igor',
//     car:  'Mercedes',
//     carColor: 'black'
// }

// // function checkKeyInObject(obj, nameKey) {
// //   for (const key in obj) {
// //     if (nameKey === key) {
// //     return true
// //     }
// //   }
// //   return false
// // }
// // console.log(checkKeyInObject(user, "carfe"))

// function checkKeyInObject(obj, key) {
// //  return Object.keys(obj).includes(key)
//   return obj.hasOwnProperty(key)
// }console.log(checkKeyInObject(user, "car"))


// 6
// Створіть об'єкт calculator із трьома методами:
//read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
//sum() - повертає суму збережених значень
//mult() - перемножує збережені значення та повертає результат

// const calculator = {
//   read(a, b) {
//     this.value1 = a;
//   this.value2 = b},
//   sum() {return this.value1 + this.value2 },
//   mult() {return this.value1 * this.value2},
// };

// calculator.read(5, 8)

// console.log(calculator.sum());
// console.log(calculator.mult());

// 7
// Напишіть функцію updateObject, яка приймає об'єкт і ключі (ключів може бути довільна кількість) 
//які необхідно видалити з об'єкту.
//Функція повертає новий об'єкт без зазначених параметрів.
//Очікуваний результат ({a: 1, b: 2}, 'b') => {a: 1}

// function updateObject(obj, ...keys) {
//   const newObj = { ...obj };
//   for (const key of keys) {
//     delete newObj[key]
//   } return newObj;
// }
// console.log(updateObject({a: 1, b: 2, c:8}, 'b'));

// 8
// Напишіть функцію getPropertyValues(), яка приймає масив об'єктів 
// та ключ, і повертає масив значень цього ключа у кожному об'єкті

// const myArr = [
//   {name: "John", age: 30},
//   {name: "Jane", age: 25},
//   {name: "Bob", age: 40},
// ];

// function getPropertyValues(arr, key) {
//   let value = [];
//   for (const element of arr) {
//     value.push(element[key]);
//   }

//   return value
// }
// console.log(getPropertyValues(myArr, 'age'));


// 9
//  Напишіть функцію, яка приймає як параметр об'єкт
//і повертає масив значень у форматі [[key, value], [key, value], ...]
// де key і value - відповідно ключ і значення переданного об'екту.


// const user = {
//   name: "John",
//   surName: "Stones",
//   age: 20,
//   hobby: "tenis",
//   haveCar: true,
//   merried: false,
// };

// function foo(obj) {
//   return Object.entries(obj)
// }
// console.log(foo(user))

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//  for (const item of this.potions) {
//   if (item.name === newPotion.name) {
//      return `Error! Potion ${newPotion.name} is already in your inventory!`; 
//   }
//     }
   
//     this.potions.push(newPotion);
// return this.potions
// },

//   // addPotion(newPotion) {
//   //   if (this.potions.includes(newPotion)) {
//   //     return `Error! Potion ${newPotion} is already in your inventory!`;
//   //   }

//   //   this.potions.push(newPotion);
//   // },

// removePotion(potionName) { 
//   for (let i = 0; i < this.potions.length; i+=1) {
//     const potion = this.potions[i];
//     if (potionName === potion.name) {
//       this.potions.splice(i, 1);
//     }
      
//   }
// },


//   // removePotion(potionName) {
//   //   const potionIndex = this.potions.indexOf(potionName);

//   //   if (potionIndex === -1) {
//   //     return `Potion ${potionName} is not in inventory!`;
//   //   }

//   //   this.potions.splice(potionIndex, 1);
//   // },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.addPotion({ name: "Dragon breath7", price: 700 }));
// console.log(atTheOldToad.removePotion("Speed potion"));