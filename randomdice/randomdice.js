const myBtn=document.getElementById("myBtn");
const label1=document.getElementById("label1");
const label2=document.getElementById("label2");
const label3=document.getElementById("label3");
const min=1;
const max=6;
let randomnum1, randomnum2, randomnum3;

buttons.onclick = function() {
    randomnum1=Math.floor(Math.random()*max)+min;
    randomnum2=Math.floor(Math.random()*max)+min;
    randomnum3=Math.floor(Math.random()*max)+min;

    label1.src = `dice${randomnum1}.png`;
    label2.src = `dice${randomnum2}.png`;
    label3.src = `dice${randomnum3}.png`;

};