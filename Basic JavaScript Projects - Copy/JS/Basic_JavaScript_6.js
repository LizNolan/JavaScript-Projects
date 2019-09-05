
function Vote_Function() {
    var Age, Can_vote;
    Age=document.getElementById("Age").value;
    Can_vote=(Age>18)?"You are old enough":"You are too young";
    document.getElementById("Vote").innerHTML=Can_vote+" to vote.";
}
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge", "Viper",2020, "Red");
var Emily=new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik=new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a "+Erik.Vehicle_Color+"-colored"+Erik.Vehicle_Model+
    "manufactured in"+Erik.Vehicle_Year;
}
function Dog(Breed,Color,Age){
    this.Dog_Breed=Breed;
    this.Dog_Color=Color;
    this.Dog_Age=Age;
}
var John=new Dog("Pitbull","Black",2);
var Mike=new Dog("Lab", "Brown", 3);
function myFunction2() {
    document.getElementById("New_and_This").innerHTML=
    "John has a"+John.Dog_Breed+"-breed"+John.Dog_Color+"-colored, that is" +John.Dog_Age+
    "years old";
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML=Count ();
    function Count () {
        var Starting_point=9;
        function Plus_one () {Starting_point +=1;}
        Plus_one ();
        return Starting_point;
    }
}











