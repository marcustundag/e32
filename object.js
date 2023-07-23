//create a car object using es5 with Prototype
function Car(carCost,topSpeed){
    this.carCost=carCost;
    this.topSpeed=topSpeed;
    this.kms=0;
    this.drive=function(){
        console.log("Driving");
        this.kms+=8;
    }
    this.reverse=function(){
        console.log("Reversing");
        if (this.kms>=4) {
             this.kms-=4;
        }
       
    }
}
Car.prototype.carInfo=function(){
    console.log(`price: ${this.carCost} Top Speed: ${this.topSpeed} Kilometers: ${this.kms}`);
}

//create three instances of Car
const toyota=new Car(120000,90+'KPH');
for (let index = 0; index < 4; index++) {
    toyota.drive();  
}
toyota.reverse();
toyota.carInfo();
const kia=new Car(75000,60+'KPH');
for (let index = 0; index < 2; index++) {    
    kia.drive();
}
for (let index = 0; index < 4; index++) {
    kia.reverse();  
}
kia.carInfo();
const honda=new Car(150000,120+'KPH');
for (let index = 0; index < 3; index++) {
    honda.reverse();  
}
honda.carInfo();

