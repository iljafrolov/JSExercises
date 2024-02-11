//1
function Car(brand, model, startPrice, age) {
    this.brand = brand;
    this.model = model;
    this.startPrice = startPrice;
    this.age = age;
    this.endPrice = startPrice;
    //counting price
    this.countPrice = function () {
        this.endPrice = this.startPrice - (1000 * age);
    }
    //increasing price by given amount
    this.increasePrice = function (amount) {
        this.startPrice += amount;
    }
    //is the price within range a to b?
    this.isInRange = function (a, b) {
        if (this.endPrice >= a && this.endPrice <= b) {
            return true;
        } else {
            return false;
        }
    }
    //copies an object
    this.copy = function () {
        var another = new Car(this.brand, this.model, this.startPrice, this.age);
        return another;
    }
}
var auto = new Car("ford","ka",50000,10);

auto.countPrice();
console.log(auto.endPrice); //40000

auto.increasePrice(5000);
console.log(auto.startPrice); //55000

console.log(auto.isInRange(20000,30000)); 

//copying
var auto2 = auto.copy();

//changing auto's property, auto2 should remain unchanged
auto.brand = 'changed';
console.log(auto);
console.log(auto2);

