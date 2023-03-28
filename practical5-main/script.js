'use strict';

function text_1() {
    const text_1 = document.getElementById('text_1');
    text_1.innerHTML = '<b>жирный</b>';
    console.log(text_1);
}

function text_2(element) {
    const text_2 = document.getElementById('text_2');
    text_2.innerHTML = '<h3>Абзай жирный</h3>';
    element.style.border = '3px solid red'; 
    console.log(element);
}

function text_4() {
    const numbers = document.getElementsByClassName('sum_operand');
    const sum = +numbers[0].value + +numbers[1].value;
    const answer = document.getElementById('answer');
    answer.innerHTML = sum;
    console.log(sum);
    
}

function text_10() {
    const num_1 = document.getElementById('num_1');
    const num_2 = document.getElementById('num_2');

    const sum = +num_1.value + +num_2.value;

    const answer = document.getElementById('answer');
    answer.innerHTML = sum;
    console.log(sum);

}


function kl_5(self) {
        
    const spans = document.getElementsByClassName('text_5');

    for (let key = 0; key < spans.length; key++) {
        console.log(spans[key]);
        const span = spans[key]
        span.innerHTML = key;
    }
    self.style.border = '3px solid black';

    /* for (let key = spans.length - 1; key >= 0  ; key--) {
        console.log(key);
        const span = spans[key]
        span.innerHTML = key;
    } */
}
