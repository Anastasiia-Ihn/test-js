// ==========================================
// При натисканні на кнопку "SHOW ME", потрібно за допомогою alert
// вивести значення, яке будемо вводити в інпут.


// const buttonEl = document.querySelector('alertButton')
// const alertInputEl = document.querySelector('alertInput')

// buttonEl.addEventListener('click', handlerFoo)
// function handlerFoo(){
//     const text = alertInputEl.value;
//     alert(text);
// }




// ================================================
// При натисканні на кнопку "Приховати" потрібно введені користувачем
// символи в інпут відображати у вигляді крапок замість звичайного
// тексту, а також змінити назву кнопки на "Показати", при повторному
// натисканні знову будемо відображати символи, а назва кнопки зміниться
// на "Приховати".

// const buttonEl = document.querySelector('#passwordButton')
// const inputEl = document.querySelector('#passwordInput')

// buttonEl.addEventListener('click', handlerChange)

// function handlerChange(){
//     if (inputEl.text === 'text') {
//         buttonEl.textContent = "Show";
//         inputEl.type = 'password';
//     } else {
//   buttonEl.textContent = "Hide";
//         inputEl.type = 'text';
// }
// }

// const button = document.querySelector('#passwordButton')
// const input = document.querySelector('#passwordInput')
// button.addEventListener('click', foo)
// function foo () {
//   if(input.type === 'text'){
//     button.textContent = "Показати";
//     input.type = 'password';
//   }else {
//     button.textContent = "Приховати";
//     input.type = 'text';
//   }
// }



// =================================3
// Кнопка "Зменшити" повинна зменшувати квадрат на 10 пікселів.
// Кнопка "Збільшити" повинна збільшувати квадрат на 10 пікселів.


// const decreaseEl = document.querySelector('#decrease')
// const increaseEl = document.querySelector('#increase')
// const boxEl = document.querySelector('#box')


// decreaseEl.addEventListener('click', onClick)
// increaseEl.addEventListener('click', onClick)

// function onClick(evt) {
//     const id = evt.currentTarget.id;
//     const width = boxEl.offsetWidth;
//     const height = boxEl.offsetHeight;

//     if (id === 'increase') {
//         boxEl.computedStyleMap.width = `${width + 10}px`
//         boxEl.computedStyleMap.height = `${height+10}px`
//     } else {
//         boxEl.computedStyleMap.width= `${height-10}px`
// }

    
// }

// const buttonDecrease = document.querySelector('#decrease');
// const buttonIncrease = document.querySelector('#increase');
// const box = document.querySelector('#box');
// buttonDecrease.addEventListener('click', onClick);
// buttonIncrease.addEventListener('click', onClick);

// function onClick(evt) {
//   const id = evt.currentTarget.id;
//   const width = box.offsetWidth;
//   const height = box.offsetHeight;

//   if (id === 'increase') {
//     box.style.width = `${width + 10}px`;
//     box.style.height = `${height + 10}px`;

//   } else {
//     box.style.width = `${width - 10}px`;
//     box.style.height = `${height - 10}px`;

//   }
// }



// task 4
// При натисканні на кнопку "SWAP ME" зробити так, щоб значення двох інпутів
// мінялися місцями. Тобто значення правого інпуту стало на місце лівого і навпаки.

// const swapButtonEl = document.getElementById('swapButton')
// const leftSwapInputEl = document.getElementById('leftSwapInput')
// const rightSwapInputEl = document.getElementById('rightSwapInput')

// swapButtonEl.addEventListener('click', onClick)

// function onClick() {
//     const firstValue = leftSwapInputEl.value;
//     leftSwapInputEl.value = rightSwapInputEl.value;
//     rightSwapInputEl.value = firstValue;
// }


// task 5
// При кліку на кнопку "Подвоїти" збільшувати значення в кожному
// елементі списку в два рази.

// const listEl = document.querySelectorAll(".listItem")
// console.log(listEl);

// const doubleEl = document.querySelector('#double')

// doubleEl.addEventListener('click', onClick)

// function onClick() {
//     listEl.forEach(el => el.textContent= el.textContent*2)
// }


// task 6

// При кліку на кнопку "Filter" потрібно видалити з списку
// позначені елементи.

// const checkboxFormEl = document.querySelector('.checkboxForm')
// const checkboxWrapperEl = document.querySelectorAll('.checkboxWrapper')



// checkboxFormEl.addEventListener('submit', onChange);

// function onChange(evt) {
//     evt.preventDefault()

//     const arrFilter = [...checkboxWrapperEl].filter(el=> el.lastElementChild.checked)
//     console.dir(arrFilter);
    
// arrFilter.forEach(el => el.remove())
// }


// task 7
// Наведено список людей. Зроби можливість сортування списку
//  за ім'ям та за прізвищем.

// const sortByNameButtonEl = document.querySelector('#sortByNameButton')
// const sortByLastNameButtonEl = document.querySelector('#sortByLastNameButton')
// const peopleEl = document.querySelectorAll('.person')
// const listEL =  document.querySelectorAll('.people')


// sortByNameButtonEl.addEventListener('click', onByNameClick)
// sortByLastNameButtonEl.addEventListener('click', onByLastNameClick)


// function onByNameClick() {
//     const arr = [...peopleEl].sort((a, b) => a.textContext.localeCompare(b.textContext))
//     listEL.innerHTML = '';
//     listEL.append(...arr);
// }

// function onByLastNameClick() {
//     const arr = [...peopleEl].sort((a, b) => {
//         const firstValue = a.textContent.split(' ')[1].toLowerCase();
//         const secondValue = b.textContent.split(' ')[1].toLowerCase();
//         return firstValue.localeCompare(secondValue)
//     });
//      listEL.innerHTML = '';
//     listEL.append(...arr);
// }
// //  правильне вирішення
// const sortByNameButton = document.querySelector("#sortByNameButton");

// const sortByLastNameButton = document.querySelector("#sortByLastNameButton");

// const people = document.querySelectorAll(".person");
// const list = document.querySelector(".people");

// sortByNameButton.addEventListener("click", onByNameClick);

// function onByNameClick(evt) {
//   const arr = [...people].sort((a, b) =>
//     a.textContent.localeCompare(b.textContent),
//   );
//   list.innerHTML = "";
//   list.append(...arr);
// }

// sortByLastNameButton.addEventListener("click", onByLastnameClick);

// function onByLastnameClick() {
//   const arr = [...people].sort((a, b) => {
//     const firstValue = a.textContent.split(" ")[1].toLowerCase();
//     const secondValue = b.textContent.split(" ")[1].toLowerCase();
//     return firstValue.localeCompare(secondValue);
//   });
//   list.innerHTML = "";
//   list.append(...arr);
// }


// task 8

// Наведено список людей. Зроби можливість фільтрації
// (пошуку) за ім'ям або за прізвищем.

// const contactsFilterEl = document.querySelector('.contactsFilter')
// const contactsEl = document.querySelector('.contacts')
// const contactEls = document.querySelectorAll('.contact')

// contactsFilterEl.addEventListener('input', onChange)

// function onChange(evt) {
//     const inputValue = evt.currentTarget.value
//     // console.log(inputValue);
//     const resultFilter = [...contactEls].filter(el => el.textContent.toLowerCase().includes(inputValue))
//     contactEls.innerHTML = ''
//     contactEls.append()
// }

// const contactsFilter = document.querySelector('.contactsFilter')

// const contacts = document.querySelector('.contacts')

// const contactAll = document.querySelectorAll('.contact')

// contactsFilter.addEventListener('input', onInput)

// function onInput(evt) {
//     const inputValue = evt.currentTarget.value;
//     // console.log(inputValue);
//     const filterRes = [...contactAll].filter(elem => elem.textContent.toLowerCase().includes(inputValue));
//     contacts.innerHTML = '';
//     contacts.append(...filterRes)
// }