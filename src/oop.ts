// Let's understand how the oops concepts works in the typescript. Mostly it is similar to javascript
// We are creating a class with flavour and price and not intializing any constructor.
// But as we see it still throws error that has no initializer and is not definitely assigned in the constructor. so we need to use constructor here.
// let's initialized the constructor
// Now as we see the errors are gone because we initialized the class with constructor which takes two arguments flavour and price.
// class Chai {
//   flavour: string;
//   price: number;

//   constructor(flavour: string, price: number) {
//     this.flavour = flavour;
//     this.price = price;
//   }
// }

// We are creating an ojbect of this class
// But now it throws error as we haven't passed any argument
// const masalaChai = new Chai()
// so to avoid it we pass the arguments like this
// const masalaChai = new Chai("masala", 20);
// masalaChai.flavour = "masala";

// Access modifiers in typescript
// As we know there are three types of access modifier: public, private, protected
// public - everyone can access it like we can access it inside and outside of the class as well
// private - only class can access it
// protected - only class and the class which inherits it can access it
// Let's understand by an example:

class Chai {
  public flavour: string = "Masala";
  private secretIngredients: string = "Cardamon";

  // whenever we want to show private thing outside of the class, we show it using some methods
  reveal() {
    return this.secretIngredients;
  }
}
const c = new Chai();
// and calling it we get the ingredients which was private inside of the class
// c.reveal()

class Shop {
  protected ShopName = "ChaiCorner";
}
class Branch extends Shop {
  getName() {
    return this.ShopName;
  }
}

// From this we can get the name of the branch
new Branch().getName();

// We can also define private variables inside class like we are doing in javascript
// lets take an example
class Wallet {
  #balance = 100;
  getBalance() {
    return this.#balance;
  }
}

const bal = new Wallet();
bal.getBalance();

// We can also define readonly properties
class Cup {
  readonly capacity: number = 250;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}
// we can assign the value once
const cup = new Cup(100);
// but if we reassign it will throw error
// cup.capacity = 200

// We have control gates as well which is also known as getter and setter

class ModernChai {
  // whenever we are defining private variable at that time we define getter and setter
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }
  set sugar(value: number) {
    if (value > 5) throw new Error("Too sweet");
    this._sugar = value;
  }
}
const anotherChai = new ModernChai();
// By this way we can add the value to sugar and console it as well
anotherChai.sugar = 2;
console.log(anotherChai.sugar);

// Now let's learn about static in typescript

class EkChai {
  static shopName = "chaiCodeCafe";
  constructor(public flavour: string) {}
}

// Now if we want to access the shopName then we need to access it using the class only
// console.log(EkChai.shopName)

// Many time you want to make class which do not give permission to make the object from it. For these reason what we do is to make a abstract class due to which we cannot create an object using it.

// lets understand with an example
abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make() {
    console.log("Brewing chai..");
  }
}

// All the oops conepts run same as javascript which are inheritance, polymorphism, abstraction and encapsulation

// Composition in typescript
// let's understand it with an example

// sometimes if we don't want to inherit the class we use composition
// How it works
// First create a class with method
class Heater {
  heat() {}
}

// Then create another class
class ChaiMaker {
  // Now when initialising constructor we get a private property named heater and what we do is that we make the Class as its type
  constructor(private heater: Heater) {}
  make() {
    // And now inside the make method we can use the heat method without even inheriting the Heater class
    this.heater.heat;
  }
}
