function full_Sentence() {
    var part_1="This is";
    var part_2="my concatenate";
    var part_3="exercise";
    var whole_sentence=part_1.concat(part_2,part_3);
    document.getElementById("Liz").innerHTML=whole_sentence;
}

function slice_Method(){
    var Sentence="This is Liz's string exercise";
    var Section=Sentence.slice(7,11);
    document.getElementById("Slice").innerHTML=Section;
}
function upper_Method() {
    var str= "This is my uppercase method example";
    var res= str.toUpperCase();
    document.getElementById("Upper").innerHTML=res;
}
function search_Method() {
    var str= "This is Liz's search method example";
    var n=str.search("Liz's");
    document.getElementById("Search").innerHTML=n;
}
function string_Method() {
    var X=19;
    document.getElementById("Num").innerHTML=X.toString();
}
function precision_Method() {
    var X=8928492.2907924
    document.getElementById("Precision").innerHTML=X.toPrecision(5);
}
function fixed_Method() {
    var num= 6.897653;
    var n=num.toFixed(3);
    document.getElementById("Fix").innerHTML= n;
}
function value_Method() {
    var str= "My name is Liz";
    var res=str.valueOf();
    document.getElementById("Value").innerHTML=res;
}