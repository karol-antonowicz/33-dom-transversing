
// CONSTRUCTOR FUNCTION - CREATS AN OBJECT FOR US //



var Car = function (maxSpeed, driver){     // constructor functions z duzej litery!!! //

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed,time){ 
        console.log(speed * time);
    };
    this.logDriver = function() {
        console.log("driver name is " + this.driver); 
    };

}  

var myCar1 = new Car(70, "Piotr");
var myCar2 = new Car(75, "Karol");
var myCar3 = new Car(80, "Filip");
var myCar4 = new Car(90, "Jasiu");
var myCar5 = new Car(800, "Bartosz");
var myCar6 = new Car(1, "Michal");

// pokazuje jakie odleglosci przebeda samochody przy maksymalnej predkosci w ciagu 2h //

myCar1.logDriver(); 
myCar1.drive(myCar1.maxSpeed, 2);
myCar2.logDriver();            
myCar2.drive(myCar2.maxSpeed, 2);
myCar3.logDriver(); 
myCar3.drive(myCar3.maxSpeed, 2);
myCar4.logDriver(); 
myCar4.drive(myCar4.maxSpeed, 2);
myCar5.logDriver(); 
myCar5.drive(myCar5.maxSpeed, 2);
myCar6.logDriver(); 
myCar6.drive(myCar6.maxSpeed, 2);
