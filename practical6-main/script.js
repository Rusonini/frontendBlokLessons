'use strict';
// Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на 
//картинку console.log выводился ее src.

// let elems = document.getElementsByTagName('img');
// for(let i = 0; i <elems.length; i++){
//     elems[i].onclick = func;
// }
// function func(){
//     console.log(this.getAttribute('src'));
// }

//Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в 
//атрибут title запишется ее текст
// let elems = document.querySelectorAll('a');
// for( let i = 0; i<elems.length;i++){
//     elems[i].addEventListener('mouseover', func);
// }
// function func(){
//     this.innerHTML = this.innerHTML + '(' + this.href + ')';
// }
//Привяжите всем ссылкам событие - по наведению на ссылку в конец ее 
//текста дописывается ее href в круглых скобках

/* let elems = document.querySelectorAll('a');
for( let i = 0; i<elems.length;i++){
    elems[i].addEventListener('mouseover', func);
}
function func(){
    this.innerHTML = this.innerHTML + '(' + this.href + ')';
    this.removeEventListener('mouseover', func);
} */



//Домашнее задание

//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"

/* const n1 = document.getElementsByTagName('input');

for (const input of n1) {
    input.onblur = fun
    
}
const test = document.getElementById('test');
function fun() {
    test.innerHTML = this['value'];
    console.log(this);
} */

// Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
//при нажатии на любой из них, но только по первому нажатию. Повторное 
//нажатие на инпут не должно вызывать реакции.

/* const n1 = document.getElementsByTagName('input');
for (let i = 0; i < n1.length; i++) {
    n1[i].onclick = fun;
    console.log(i);
}
function fun() {
    alert(this.value)
    this.onclick = null;
} 
console.log('n1'); */


// Даны абзацы с числами. По нажатию на абзац в нем должен появится 
//квадрат числа, которое он содержит.

/* function numbers() {

    const num = this.innerHTML;
    const result = num ** num;

    console.log(result);

    this.innerHTML = result;
}

const elems = document.getElementsByTagName('p');

for (let i = 0; i < elems.length; i++) {
    
    elems[i].onclick = numbers;
    
} */

/* console.log(numbers); */

// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной.

const inputs = document.getElementsByTagName('input');
for (const input of inputs) {
    input.addEventListener('focusout', () => {
        const dataLength = input.getAttribute('data-length');
        const valueLength = input.value.length; 
        if (valueLength === +dataLength) {
            input.style.border = '2px solid green';
        } else {
            input.style.border = '2px solid red';
        }
    });
}
/* 
for (const i of input) {
    input.onblur = fun
    console.log(input);
}
function fun() {
    alert('u')
    console.log(this);
} 
 */