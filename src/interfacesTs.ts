// Interfaces in typescript
// The interface are similar to the type
// It is used to define the structure of the object by defining its type.

// Let's create an interface to understand it. It is very similar of defining types
interface Chai {
  flavor: string;
}

const c: Chai = {
  flavor: "masala",
};

// 70 to 80 percent the interface and type are interchangeable
// The interface does not generate additional code of javascript

// We can also create readonly property in interface
interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = {
  id: 1,
  name: "chaicodecafe",
};

// like if I try to change the id then it will throw error
// s.id = 2

// Interface makes the object's structure, it does not fill data in it.

// We can also create interfaces for functions.
// Let's understand it by the example:
interface DiscountCalculator {
  // here we are telling it that we get a price from the arguments as number and the return type of the function will also be number
  (price: number): number;
}

// As we see now like this we can use the interface for functions.
const apply50: DiscountCalculator = (price) => price * 0.5;

// And mostly we use interface to define the type of the functions.

// Let's take another example:
// we are defining the interface Teamachine which has two methods and the return type is void which means it does not return anything
interface TeaMachine {
  start(): void;
  stop(): void;
}

// Now we are creating a machine and putting TeaMachine as its type
// So now here we need to make two methods which we have already defined in the TeaMachine
// Like this we can build interface for the function..
const machine: TeaMachine = {
  start() {
    console.log("starting the machine");
  },
  stop() {
    console.log("stoping the machine");
  },
};

// index signature in typescript

// Let's understand with an example
// Here as we can see that we are declaring an array with a flavor and its type is string and the output will be of number
// What it is doing is that it is making a signature of the data which will eventually come
interface chaiRating {
  [flavor: string]: number;
}

// You can understand more after consuming it.
// Let's take ratings and its type will be chaiRating.
// Now what we can do is that we can write string which is masala and pair it with rating which is 4.5
// It is confusing we know. Mostly people avoid but we need to know about it.
const ratings: chaiRating = {
  masala: 4.5,
  ginger: 4.0,
};

// Unique features in interface

// Many times we use libraries in our application. We can use both our code as well as the code coming from a library
// suppose there is User data which is coming from the library
interface User {
  name: string;
}

// and also the User data which we are creating
interface User {
  age: number;
}

// What the interface do here is that it merges both the User interface and make it a single one.
// Let's understand by using it.
// As we see, we need to pass both the name as well as age to the u1, other wise it will throw error.
const u1: User = {
  name: "Kaushik",
  age: 22,
};

// Sometimes interface are extendable as well

// Like this we sometimes extends the interface as well.
interface A {
  a: string;
}
interface B {
  b: string;
}
interface C extends A, B {
  c: string;
}
