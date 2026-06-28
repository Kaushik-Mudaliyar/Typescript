// In typescript, Let's understand how to create an array

// Understanding by creating different arrays
// see if we are providing a specific type then when we are defining the array if we give other type it will throw error.
const chaiFlavors: string[] = ["Masala", "Elaichi", "Adrak"];
const chaiPrice: number[] = [20, 25, 30];

// We can add type by one more way
const rating: Array<number> = [4.5, 2.0, 5.0];

// As we know when handling api's, the data comes in array of objects. To handle this we can do this.
// To make array of objects we can do this
// First make the type for the object data and define it..
type Chai = {
  type: string;
  price: number;
};

// Then use it like Chai[] and then define the object with the data and its value
const menu: Chai[] = [
  { type: "masala", price: 10 },
  { type: "elachi", price: 20 },
];

// We can also make our array readonly. Means once defined we cannot able to further change it..
const cities: readonly string[] = ["Gujarat", "Tamil Nadu", "Bengaluru"];

// but when we try to change it then it throws error saying it is a readonly array.
// cities.push("Punjab")

// If you want to declare two dimensional array then you can do it like this
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// let's learn about tuples
// Tuples is like an array because the typescript boils down to javascript only

// We can define tuples like this..
// Here we are clearly saying that we have two values inside the array in which first one is string and the other one is number..
let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];
// One more important thing is that if we just change the place like if i give [20, "Masala"] then it throws error..
// chaiTuple = [10,"elaichi"]

// we can also defined it like this. That there will boolean which is optional if it comes good and not comes still good.
let userInfo: [string, number, boolean?];
userInfo = ["kaushik", 1234];
userInfo = ["kaushik", 1234, true];

// We can also make the tuples readonly like this..
const location: readonly [number, number] = [28.64, 42.42];

// We can also make named tuples in typescript
const chaiItems: [name: string, price: number] = ["Masala", 25];

// Let's understand now about the enums in typescript..
// enum is used to restrict the user to have some options only. Like in airoplane there are three types of seats which are available : aisle, middle, window. But if the user can select also the pilot seat then. That's where we use enums, which helps to provide that there are three options only. Select from it..
// Let's understand with example
// like this we create an enum
enum AirlineSeat {
  AISLE,
  MIDDLE,
  WINDOW,
}

// like this we consume the enum
const userSeat = AirlineSeat.AISLE;

// In enum there are auto increment values..
enum Status {
  PENDING = 100,
  SERVED,
  CANCELLED,
}
// Here if someone provide value of PENDING = 100 and then not providing value to the next values like SERVED and CANCELLED.. Then it automatically takes value as 101, 102

// You need to keep it in mind. Whether to use it or not.
// We avoid this kind of situation. And only pass the PENDING, SERVED, CANCELLED only.

// One more interesting place where enums are used are at the constants file in backend. We create many constants over there. There we use enums.
// Let's understand with example:

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

// we can use it in function very easily.
function makeChai(type: ChaiType) {
  console.log(`Make ${type}`);
}

// like this we pass only two values as an argument
makeChai(ChaiType.MASALA);

// If we try to pass other then it will throw error.
// makeChai("masala")

// Usually in enums there are consistent type like only string values or number values only.
// But when you create a enum with two different type it is possible but it is not a standard practice at all
enum RandomEnum {
  ID = 1,
  NAME = "chai",
}

// We can also make it constant as well
// enum is by default constant so it is not necessary to write constant as well.
// But in some codebasde it is written for that we are learning it..
const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

// const s = Sugars.HIGH

// We need to be cautios while using tuple
let t: [string, number] = ["chai", 10];
// Here we can push values inside the tuple where only two types are assigned..
// And it creates a whole mess and we need to debug too much to get it..
// Be careful using tuple
// t.push("extra")
