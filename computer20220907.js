var text = document.getElementById("text");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var button0 = document.getElementById("button0");
var addition = document.getElementById("addition");
var subtraction = document.getElementById("subtraction");
var multiplication = document.getElementById("multiplication");
var division = document.getElementById("division");
var equal = document.getElementById("equal");
var summand = 0;  //被加數
var addend = 0;   //加數
var state = '';
var numberClear = '';
var detect = 1;  //偵測有沒有再按數字鍵
var judge = 1;  //偵測有沒有再「加、減、乘、除」鍵

text.addEventListener("input", function () {          //限制只能輸入數字和小數點
    text.value = text.value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,);
})

button1.addEventListener("click", function () {   //讓第二次的數字鍵按下，再清空前一次的數字
    if (numberClear === 'change') {
        text.value = "";
        text.value = "1";
        numberClear = '';
        detect = 1;
    }
    else {
        text.value += "1";
    }
})
button2.addEventListener("click", function () {

    if (numberClear === 'change') {
        text.value = "";
        text.value = "2";
        numberClear = '';
        detect = 1;

    }
    else {
        text.value += "2";
    }

})
button3.addEventListener("click", function () {
    if (numberClear === 'change') {
        text.value = "";
        text.value = "3";
        numberClear = '';
        detect = 1;
    }
    else {
        text.value += "3";
    }

})
button4.addEventListener("click", function () {

    if (numberClear === 'change') {
        text.value = "";
        text.value = "4";
        numberClear = '';
        detect = 1;
    }
    else {
        text.value += "4";
    }

})
button5.addEventListener("click", function () {
    if (numberClear === 'change') {
        text.value = "";
        text.value = "5";
        numberClear = '';
        detect = 1;
    }
    else {
        text.value += "5";
    }
})
button6.addEventListener("click", function () {
    if (numberClear === 'change') {
        text.value = "";
        text.value = "6";
        numberClear = '';
        detect = 1;
    }
    else {
        text.value += "6";
    }
})
button7.addEventListener("click", function () {
    if (numberClear === 'change') {
        text.value = "";
        text.value = "7";
        numberClear = '';
        detect = 1;
    }
    else {
        text.value += "7";
    }
})
button8.addEventListener("click", function () {
    if (numberClear === 'change') {
        text.value = "";
        text.value = "8";
        numberClear = '';
        detect = 1;
    }
    else {
        text.value += "8";
    }
})
button9.addEventListener("click", function () {
    if (numberClear === 'change') {
        text.value = "";
        text.value = "9";
        numberClear = '';
        detect = 1;
    }
    else {
        text.value += "9";
    }
})
button0.addEventListener("click", function () {
    if (numberClear === 'change') {
        text.value = "";
        text.value = "0";
        numberClear = '';
        detect = 1;
    }
    else {
        text.value += "0";
    }
})

addition.addEventListener("click", function () {  //「加」鈕
    continuousSum();

    judge = 2;
})
subtraction.addEventListener("click", function () {   //「減」鈕
    continuousSubtraction();
    judge = 3;

})
multiplication.addEventListener("click", function () {   //「乘」鈕
    continuousMultiplication();
    state = '*';
    numberClear = 'change';
})
division.addEventListener("click", function () {    //「除」鈕
    continuousDivision();
    state = '/';
    numberClear = 'change';
})
function continuousSum() {
    var float = Number(text.value);
    if (state === '+' && detect === 1) {
        operation();
        //state = '';  //避免operation這個函式自動跑2次以上
    }
    else {
        summand = float;
    }
    state = '+';
    numberClear = 'change';
}
function continuousSubtraction() {
    var float = Number(text.value);
    if (state === '-' && detect === 1) {

        operation();
        //state = '';  //避免operation這個函式自動跑2次以上
    }
    else {
        summand = float;
    }
    state = '-';
    numberClear = 'change';
}
function continuousMultiplication() {
    var float = Number(text.value);
    if (state === '*' && detect === 1) {

        operation();
    }
    else {
        summand = float;
    }
}
function continuousDivision() {
    var float = Number(text.value);
    if (state === '/' && detect === 1) {

        operation();
    }
    else {
        summand = float;
    }
}


equal.addEventListener("click", function () {   //「等於」鈕        



    text.value = operation();


})
function operation() {
    var float = Number(text.value);

    if (state === "+") {
        summand = summand + float;

    }
    if (state === "-") {
        summand = summand - float;
    }
    if (state === "*") {
        summand = summand * float;
    }
    if (state === "/") {
        summand = summand / float;
    }

    state = '';
    detect = 2;
    return summand;
}


