function Call_Loop(){
    var dog = {name: "Singer", bred:"Wiemy", previousNames: ["1", "2" ]};
    document.getElementById("Loop").innerHTML= dog.previousNames[1];
}
function String_Length() {
    var str= "Elizabeth";
    var n= str.length;
    document.getElementById("Length").innerHTML= n;
}

var Instruments=["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content="";
var Y;
function for_Loop() {
    for (Y=0; Y<Instruments.length; Y++) {
    Content+=Instruments[Y]+"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}
function array_Function() {
    var activities=[];
    activities[0]= "playing tennis";
    activities[1]= "playing golf";
    activities[3]= "working out";
    document.getElementById("Array").innerHTML= "Today I am going to be"+
        activities[1]+".";
}
function constant_Function() {
    const Vehicle={make:"Ford", model:"Explorer", color:"Green", type:"automatic"};
    Vehicle.color="Red";
    Vehicle.price="$15000";
    Vehicle.type="manual"
    document.getElementById("Constant").innerHTML= "The color of the"+
    Vehicle.make+"was"+Vehicle.color+"and it was an"+Vehicle.type;
}
function let_Function() {
    var X= 66;
    document.write(X);
    {
        let X=22;
        document.write("<br>"+ X);
    }
    document.write("<br>"+ X);
    document.getElementById("Let").innerHTML= X;
}

function getPie(){
    return Math.PI;//This returns the value of pie.
}

function showPie(){
  document.getElementById("return").innerHTML= getPie();
}
let dog={
    breed: "Pitbull",
    color: "Black",
    age: "3",
    description: function() {
        return "The dog is a"+this.breed+this.color+this.age;
    }
};
document.getElementById("dog").innerHTML=dog.description();

var text="";
var i;
for (i=0;i<10;i++){
    if (i===3){break;}
    text+="The number is"+ i + "<br>";
}
document.getElementById("break").innerHTML= text;

var text="";
var i;
for (i=0;i<10;i++){
    if (i===3) {continue;}
    text+= "The number is" + i+"<br>";
}
document.getElementById("continue").innerHTML= text;





















