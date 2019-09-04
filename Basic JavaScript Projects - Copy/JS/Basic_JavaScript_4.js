function my_Dictionary() {
    var Car={
        Make: "Ford",
        Color: "Red",
        Model: "Explorer",
        Year: 2017,
    
    };
    delete Car.Color;
    document.getElementById("Dictionary").innerHTML=Car.Color;
}