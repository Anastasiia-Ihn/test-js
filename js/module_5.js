// // 1

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };
// console.log(pizzaPalace.order("Smoked"));

// 2
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// 3
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };
// console.log(historyService.getEmails());

// 4
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;
// console.log(child);

// 5
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;


// 9
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line

// getPrice(){
//   return this.price;
// }
// changePrice(newPrice){
//   return this.price = newPrice
// }
//   // Change code above this line
// }
// console.log(getPrice(1));

// 10
// class Storage {
//     constructor([...items]) {
//     this.items = items
// }

//     getItems() {
//         return this.items;
//     }
//     addItem(newItem) {
//         return this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
         
//     return this.items=this.items.filter(item => item !== itemToRemove)
// }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// 11
// class StringBuilder {

//     constructor(initialValue) {
//         this.value = initialValue;
// }
//     getValue() {
//         return this.value;
// }
//     padEnd(str) {
//         return this.value = this.value + str;
// }
//     padStart(str) {
//         return this.value = str + this.value;
// }
//     padBoth(str) {
//         this.value = str + this.value;
//         this.value = this.value + str
//     }

// }




// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="




// 12
// class Car {
//   // Change code below this line
// #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// getBrand(){
//   return this.#brand;
// }

//   changeBrand(newBrand){
//     return this.#brand = newBrand;
//   }
//   // Change code above this line
// }


// 16
// class Car {
//   // Change code below this line
//     static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < Car.MAX_PRICE){
//     this.#price = newPrice;}
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// 17
// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//     }
//   static checkPrice(price) {
//         if (price > Car.#MAX_PRICE) {
//             return "Error! Price exceeds the maximum"
//         } return "Success! Price is within acceptable limits"
//     }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// 18
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line
// class Admin extends User{
//     static AccessLevel= { BASIC: "basic", SUPERUSER: "superuser" };
// }

// 19-20
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

 
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     };
    
//     blacklistedEmails = [];
    
//   blacklist(email){this.blacklistedEmails.push(email)
//     };
    
//   isBlacklisted(email){
//       if (this.blacklistedEmails.includes(email)) {
//        return true
//    }return false
//   }


//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true




// практика
// 1
// Виконайте сортування масиву цін за спаданням та зростанням.
// const prices = [1000, 240, 670, 360, 89, 20];
// const sortPrices = [...prices].sort((a,b)=>a-b);
// const sortP = [...prices].sort((a,b)=>b-a)

// console.log(sortPrices);
// console.log(sortP);

// 2
// Напишіть функцію sayHi(), яка приймає в якості параметра масив імен,
// перебирає масив і додає до кожного ім'я привітання.
// Функція повертає новий масив  ["Ivan привіт!", "Maria привіт!", "Anna привіт!"]

// const names = ['Ivan', 'Maria', 'Anna'];
// function sayHi(names) {
//    return names.map((name) => `${name} привіт!`)
// }
// console.log(sayHi(names));

// 3
// Напишіть стрілочну функцію, яка буде перевіряти
// чи містить даний масив, хоча б одне число більше 20.

// const numbers = [20, 16, 11, 13, 15];
// const aaa = numbers.some(number => number > 20);
// console.log(aaa);

// 4
// Напишіть стрілочну функцію яка буд перевіряти чи всі студенти
// у нашому масиві старші 18 років.

// const students = [
//   { name: 'Alex', age: 17 },
//   { name: 'Stas', age: 18 },
//   { name: 'Mike', age: 22 },
//   { name: 'Den', age: 20 },
// ];
// const everyStudents = students.every(student => student.age > 18)
// console.log(everyStudents);

// 5
// Напишіть функцію fruitsCount(), яка буде визначати загальну кількість
// бананів, яблук і інших фруктів у масиві.
// Функція приймає в якості параметра масив фруктів і повертає об'єкт:
// ключ - назва фрукта, значення - кількість цих фруктів у масиві.
// Результат роботи функції: Object { apples: 3, bananas: 1, oranges: 1, kiwi: 1 }

// const fruits = ['apples', 'bananas', 'oranges', 'apples', 'kiwi', 'apples'];

//  const fruitsAll = fruits.reduce((acc, fruit) => {
//         if (!acc[fruit]) {
//             acc[fruit] = 1;
//             return acc;
//         }
//         acc[fruit] += 1;
//         return acc
//     }, {})


// console.log(fruitsAll);

// 6
// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// const allTopics = courses.flatMap(elem => elem.topics)
//     .filter((elem, index, arr) => arr.indexOf(elem) === index)
//     console.log(allTopics);

    // 7
    // у нас є масив користувачів, кожен з яких має поля id та name. 
//  Давайте знайдемо той де id = 1.

//  let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];
// const idUser = users.find(element => element.id === 1);
// console.log(idUser.name);

// 8

// const friends = [
//     { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
//     { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//     { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
//     { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
//     { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
//     { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
// ]
// Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців.

// const totalAge = friends.filter(elem => elem.sex === 'm')
//     .reduce((acc, elem) => acc + elem.age, 0)
//     console.log(totalAge);

// Напишіть функцію getGirlsPassports() яка поверне масив номерів паспортів дівчат.
// const numberFemale = friends.filter(elem => elem.sex === 'f')
//     .map(elem => elem.passport)
// console.log(numberFemale);


// 10
//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.
// class Rectangle {
//     constructor({height, width}) {
//         this.height = height;
//         this.width = width
//     }
//     calculateArea() {
//         return this.height * this.width;
// }
// }
// const areaRectangle = new Rectangle({height:6, width:7})
// console.log(areaRectangle);
// console.log(areaRectangle.calculateArea());

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width
//     }
//     calculateArea() {
//         return this.height * this.width;
// }
// }
// const areaRectangle = new Rectangle(6, 7)
// console.log(areaRectangle);
// console.log(areaRectangle.calculateArea());

// 11
//Напиши клас Client який створює об'єкт
//з ​​властивостями login, email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//     #login;
//     #email;
//     constructor({ login, email }) {
//         this.#login = login;
//         this.#email = email;
//     }
//     get login() {
//         return this.#login
//     };
//     set login(newLogin) {
//         this.#login = newLogin
//     };

//     get email() {
//         return this.#email
//     }

//     set email(newEmail) {
//      this.#email = newEmail
// }
// }

// const Petro = new Client({login: "tyi4fff", email:"oiiii@gmail.com"})
// console.log(Petro);
// Petro.login = 'Petia';
// Petro.email = 'hhyyhh@gmail.com'
// console.log(Petro);

// 12
// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.

// class Phone {
//     static MAX_PRICE = 40000;
//     #price;
//     constructor(price) {
//         this.#price = price;
//     }
//     get price() {
//         return this.#price;
//     }
//     set price(newPrice) {
//         if (newPrice <= Phone.MAX_PRICE) {
//             this.#price = newPrice;
//             return
//         }
//     }
// }
// const proMax = new Phone(10000)
// console.log(proMax.price);
// proMax.price = 50000

// console.log(proMax.price);

// -----------------------------------------------------
// Є об'єкт і функція для підрахунку суми чисел.
// Виведіть у консоль результат виконання функції, якщо a = 3, b = 5.

// var obj = { num: 2 };

// function add(a, b){
//   return this.num + a + b;
// }

// console.log(add.call(obj, 3, 5));
// console.log(add.apply(obj, [3, 5]));

// const qqq = add.bind(obj,3,5)
// console.log(qqq());



// --------------------------------------------------------
// Є два об'єкти, які описують деякі характеристики телефонів.
// Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
// передаючи аргументом країну-виробник телефону.
// "HUAWEI" - "China", "SAMSUNG" - "South Korea".


// const tel = {
//     regNumber: "AE8345FEDAS",
//     brand: "HUAWEI", 
//     showInfo(country) {
//         console.log(`${country} ${this.regNumber} ${this.brand}`);
//     }
// }

// const tel_2 = {
//     regNumber: "AO8518FEGHT",
//     brand: "SAMSUNG", 

// }
// tel.showInfo('China')
// tel.showInfo.call(tel_2, 'South Korea')
// tel.showInfo.apply(tel_2, ['South Korea'])
// const aaa = tel.showInfo.bind(tel_2, 'South Korea')
// aaa()

// ----------------------------------------------------------
// 1. Створіть об'єкт car з трьома властивостями
// carBrand: "Audi Q3"
// price: 23000
// метод getData() котрий буде логувати рядок :"Audi Q3 за 23000 $"

// 2. Напишіть функцію makeMessage(callback), котра отримує в якості параметра
// callback-функцію getData() і логує повідомлення "Ви замовили ${callback()}"
// const arr = {
//     carBrand: "Audi Q3",
// price: 23000,
//     getData() {
//     return `${this.carBrand} за ${this.price}$`
//     }
// }
// function makeMessage(callback){
//     console.log(`Ви замовили ${callback()}`);
// }

// makeMessage(arr.getData.bind(arr))

// -------------------------------------------------------------
// Напишіть код таким чином, щоб об'єкт apples став прототипом для об'єкта fuji.
// Перевірте чи став об'єкт apples  прототипом для об'єкта fuji.
// Додайте об'єкту fuji властивість color: 'pink'  і виведіть його у консоль.
// Виведіть у консоль значення властивості type для об'єкту fuji.
// Перевірте і виведіть у консоль чи є властивість vitamins власною властивістю об'єкту apples.
// Перевірте і виведіть у консоль чи є властивість cookingMethod власною властивістю об'єкту fuji.

// const apples = {
//     type: 'fruit',
//     cookingMethod: ['jam', 'juice', 'baked', 'dried', 'fresh'],
//     vitamins: ['A', 'B1', 'B2', 'E'],
// }
// const fuji = Object.create(apples)
// console.log(apples.isPrototypeOf(fuji));

// fuji.color = 'pink';
// console.log(fuji);

// console.log(fuji.type);
// console.log(apples.hasOwnProperty('vitamins'));

// -------------------------------------------------------
// const car = {
//     brand: 'Audi',
//     speed: 0,
//     accelerate() {
//         this.speed += 10;
//         console.log(`авто ${this.brand} прискорюється. швидкість ${this.speed}`);
//     }
// }

// const car2 = {
//     brand: 'bmw',
//     speed: 40,
//     // accelerate : car.accelerate
// }

// const bmw = car.accelerate.bind(car2)

// const car3 = {
//     brand: 'volvo',
//     speed: 70,
// }

// const volvo = car.accelerate.bind(car3)


// car.accelerate()
// car.accelerate()
// car.accelerate()

// bmw()

// volvo()
// volvo()

// ===============================================================
// const product = {
//     name: 'smartphone',
//     price: 500,
//     discount(percent) {
//         return this.price * (100-percent)/100
//     }
// };
// const client = {
//     name: 'alice',
//     discountPercent: 8,
//     purchase() {
//         const price = product.discount(this.discountPercent)
//         console.log(price);
//     }
  
// };
// client.purchase()
// const client2 = {
//     name: 'kate',
//     discountPercent: 4,
// }
// client.purchase.call(client2)
// client.purchase()

// ===================================================================
// const tesla = {
//     brand: 'tesla',
//     speed: 70,
//    }

// const audi = {
//     brand: 'audi',
//     speed: 120,
// }
// function control(maxSpeed) {
//     if (this.speed <= maxSpeed) {
//         return `перевищено`
//     }return `в межах норми`
// }
// control.call(tesla,100)
// console.log(control.call(tesla, 100));
// console.log(control.call(audi,90));

// =================================================================
// const calculator = {
//     read(a=0, b=0) {
//         this.a = a;
//         this.b = b;
//     },
//     add() {
//         return this.a + this.b
//     },
//     mult() {
//       return  this.a * this.b
//     }
// }
// calculator.read(3, 4)
// console.log(calculator);
// console.log(calculator.mult());
// console.log(calculator.add());
// console.log(0 || null);
// console.log(0 ?? null);

// ===============================
// const name = 'Na\nharis';

// // BEGIN (write your solution here)
// const idxB = name[name.length - 1];
// console.log(idxB);
// console.log(name.length - 1)
// // END

// const one = 'Naharis';
// const two = 'Mormont';
// const three = 'Sand';

// // BEGIN (write your solution here)
// console.log(`${one[2]}${two[1]}${three[3]}${two[4]}${two[2]}`)
// // END


// console.log('7' - (-8 - -2))
// console.log()

// const number = 10.1234;

// // BEGIN (write your solution here)
// console.log(Math.round(number, 2))
// // END


// const text = 'Never forget what you are, for surely the world will not';

// // BEGIN (write your solution here)
// console.log(`First: ${text[0]}`);
// console.log(`Second: ${text[text.length - 1]}`);
// const text = 'Never forget what you are, for surely the world will not';

// // BEGIN (write your solution here)
// console.log(`First: ${text[0]}\n Last: ${text[text.length-1]}`)
// // END

// const name = 'Tirion';
// console.log(name.length.toString());
// const name = 'Tirion';
// console.log(name.toUpperCase().toLowerCase());
// console.log(name.toUpperCase().toLowerCase().length.toString().length);

// const text = 'When \t\n you play a \t\n game of thrones you win or you die.';

// // BEGIN (write your solution here)
// console.log(text.slice(4, 14).trim())
// console.log(text.slice(4, 15).trim());

// const truncate = (text, length) => (text.slice(0, length)+'...')
//   // END
// console.log(truncate('kgmnkytugv tmhkthm rt', 8));

// const getHiddenCard = (numberCard, symbol = 4) => {
//     const symbAll= '*'.repeat(symbol);
//     const scrCard = `${symbAll}${numberCard.slice(-4)}`;
// return scrCard
// }
// console.log(getHiddenCard('2365459632185796',));
// let symbol=4
// console.log('*'.repeat(symbol));

// const capitalize = (str = "") => {
//     const firstLit = str.slice(0, 1).toUpperCase();
//     const newWord = str.replace(str[0], firstLit);
//     return newWord
// }
// const capitalize = (text) => `${text.slice(1)}`;


// console.log(capitalize('property'));

// const isPensioner = (age) => age >= 60;
// console.log(isPensioner(68));

// const formTel = (numbTel) => {
//     const firstSymbol = numbTel[0];
  
//     return  firstSymbol === '+';
// }

// console.log(formTel('+89632141'));
// console.log(formTel('5969632141'));

// const isLeapYear = (year) => {
// (year%400 === 0) || ( year % 4 === 0 && year % 100 !== 0)
// }
// console.log(isLeapYear(2016));

// const reverse = (s) => s.split('').reverse().join('');

// // BEGIN (write your solution here)
// const isPalindrome = (word) => {
//     const nn = word.toLowerCase();
//     console.log(nn);
//    return  reverse(nn) === nn;

// }

// const isNotPalindrome = (word) => !isPalindrome(word);
    

// console.log(isPalindrome('apa'));
// console.log(isNotPalindrome());

// Реализуйте функцию getLetter(), которая извлекает из переданной строки 
// указанный символ 
// (по порядковому номеру, а не по его индексу) и возвращает его наружу.
// Если такого символа нет, то функция возвращает пустую строку.

// const getLetter = (str, NumberSymbol) =>  str[NumberSymbol-1] || ''
// console.log(getLetter('hello every one', 1));

// const getLetter = (text, position) => text[position - 1] || '';

// const normalizeUrl = (url) => {
// if (url.startsWith('https://')){
//     return url
// }return `https://${url}`
// }

// const reverse = (s) => s.split('').reverse().join('');

// const convertText = (str) => {
//     if (str.length !== 0) {

//        return str[0] === str[0].toUpperCase() ? str : reverse(str)
//     } return "";
    
// }
// console.log(convertText('Atttt'));
// // console.log(str.lenfth);

// const printNumbers = (initialNumber) => {
//   // BEGIN (write your solution here)
//     let newStr = '';
//    for (let i = initialNumber; i <= initialNumber; i -= 1){
//        newStr += i;
// return newStr 
//     }
// };
// console.log(printNumbers(4));



// BEGIN
// const joinNumbersFromRange = (start, finish) => {
//   let i = start;
//   let result = '';

//   while (i <= finish) {
//     result = `${result}${i}`;
//     i = i + 1;
//   }

//   return result;
// };console.log(joinNumbersFromRange(4, 9));


// const countChars = (str, char) => {
//   let i = 0;
//   let count = 0;
//     const newStr = str.toLowerCase()
//   while (i < newStr.length) {
  
//     if (newStr[i] === char) {
//       // Считаем только подходящие символы
//       count = count + 1;
//     }
//     // Счетчик увеличивается в любом случае
//     i = i + 1;
//   }

//   return count;
// }; console.log(countChars('aPpaPr', 'p'));
// console.log(countChars('yuiIIIIhh', 'i'));


// const even = (str) => {
// let i =0;
// let result = '';

//    while (i < str.length) {
//     if (i % 2 !== 0) {
//       result = `${result}${str[i]}`;
//     }
//     i = i + 1;
//   }return result

// }

// console.log(even('kmkesfmekf efmekfmekf'));

// const filterString=(str,symbol)=>{
// const newStr = '';
// let i=0;
//     while (i <= str.length - 1) {
        
// if(str[i] !==symbol){
//     newStr = newStr+ str[i];
//     }i = i+ 1;
  
// } return newStr
// }
// console.log(filterString('jkjoij', 'k'));

// const hasChar =(str, letter)=> str.includes(letter)
// console.log(hasChar('ytrewq', 'w'));