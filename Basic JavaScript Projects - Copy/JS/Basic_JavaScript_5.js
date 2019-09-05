document.write(typeof "Word");

function my_Function() {
    document.getElementById("Test").innerHTML=0/0;
}
function my_Function2() {
    document.getElementById("Test2").innerHTML= isNaN('This is a string');
}
function my_Function3() {
    document.getElementById("Test3").innerHTML= isNaN('008');
}
function my_Function4() {
    document.getElementById("Test4").innerHTML= (2E309);
}
function my_Function5() {
    document.getElementById("Test5").innerHTML= (-2E309);
}
document.write(10>2);
document.write(10<2);
console.log (4+4);
document.write("10"+5);
console.log (6<3);
document.write(10==10);
document.write(9==8);
x=5;
y=5;
document.write(x===y);
a=9;
b="red";
document.write(a===b);
c=8;
d="8";
document.write(c===d);
e=8;
f=9;
document.write(e===f);
document.write(6>3&&8<9);
document.write(7<9&&8<3);
document.write(6>4||5>7);
document.write(5>9||4>8);

function not_Function() {
    document.getElementById("Not").innerHTML=!(5>9);
}
function not_Function1() {
    document.getElementById("Not1").innerHTML=!(5<9);
}






