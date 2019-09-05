var X=10
function Add_numbers_1 () {
    document.write(20+X+"<br>");
}
function Add_numbers_2 () {
    document.write (X+100);
}
Add_numbers_1 ();
Add_numbers_2 ();

function get_Date() {
    if (new Date().getHours()<18) {
        document.getElementById("Liz").innerHTML="How are you?";
    }
}

if (9<10) {
    alert("My name is Liz");
}




function Age_Function() {
    Age=document.getElementById("Liz2").value;
    if (Age>33) {
        Say="You are older than me";
    }
    else {
        Say="You are younger than me";
    }
    document.getElementById("Liz2").innerHTML= Say;
}