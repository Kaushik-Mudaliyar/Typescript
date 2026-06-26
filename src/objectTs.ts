// Here we learn more about the objects in typescript

/**
 * Here we can see how we are defining the object, the typescript by default infer the values like name, price and isHot to be string, number and boolean.
 */

// const tea = {
//     name:"Ginger tea",
//     price:20,
//     isHot: true
// }

/**
 * As we know we can do this as well that we annotate the data which will be stored in the object
 * When we declare this way, it provides some error and which are good like you cannot assign other data type to the string in name etc.
 * By this way we can use the type to make the object more robust code..
 */

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Elaichi Chai",
  price: 30,
  isHot: true,
};

/**
 * We can do the same stuff by defining type using the type keyword as well
 */
type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 20,
  ingredients: ["ginger", "milk", "water"],
};

// In typescript objects there is one more intersting thing like when you define the types of the data and while creating the data if you add one more field, it does not have any problem at all.
// Let's see this with an example

type Cup = {
  size: string;
};
// Here we are setting the size to string and all the things work properly.
let smallCup: Cup = { size: "200ml" };

// creating a bigcup with an extra field material
let bigCup = { size: "400ml", material: "steel" };

// now when we assign this object to the smallCup it does not show any error and takes it as a object
smallCup = bigCup;

// let's take another example to understand more
type Brew = {
  brewTime: number;
};

// creating a coffee which has two field
const coffee = { brewTime: 5, beans: "Arabica" };

// it does not show any error because in typescript it only checks whether the defined type is coming or not otherwise if you add more fields to it, it does not probelm
const chaiBrew: Brew = coffee;

// typescript provides error when you have not provided the defined type field
// let's understand it with example
type User = {
  username: string;
  password: string;
};

// here the ts shows error if the field is missing but if you have more fields in other variable. Then it does not have any problem..
const u1: User = { username: "kaushik", password: "1234" };

// There is one more concept in typescript which is type splitting and it is considered as a good practice
// let's understand with an example

type Item = {
  name: string;
  quantity: number;
};
type Address = {
  Street: string;
  pin: number;
};

// when i create a new type where i need to use this then it will be helpful for more readable code and provide clarity as well.
type Order = {
  id: string;
  items: Item[];
  address: Address;
};

// Interesting takes and methods in objects in typescript

// Partial in typescript
// let's understand with an example

// type Chai = {
//   name: string;
//   price: number;
//   isHot: boolean;
// };

// the partial is used to update the chai object partially. Because when we use types in a variable then we need to provide all the value otherwise the typescript will show error.
// To avoid this the partial is introduced, it basically uses the same type Chai but only takes value which is needed
// const updateChai = (updates: Partial<Chai>) => {
//   console.log("updating chai with ", updates);
// };
// like as we see, we have only provided price to this updateChai method and still the typescript is not throwing error..
// updateChai({ price: 20 });
// we can update the name as well as isHot as well
// updateChai({ name: "ginger Chai" });
// updateChai({ isHot: false });

// but one thing which needs to be carefully done is that if we give empty object then it will take it so we need to be cautious using it..
// updateChai({})

// Let's understand about the required in typescript
// suppose I am creating the type with optional values
type ChaiOrder = {
  name?: string;
  quantity?: number;
};

// Now if we use the required and then the chaiorder type what it does was when we provide the information to the placeOrder it will ask both the name and quantity otherwise it will throw error
const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

// if we are not giving both the fields which are defined then it throws error
placeOrder({ name: "ginger chai", quantity: 1 });

// Pick in typescript
// it is used when the datatype has more fields which are not useful for the newer type so what we can do is that we can pick certain fields like name and price and when we are providing the name and price it is satisfied..
// It is similar to the partial as well. In partial we can use any field inside the object but in pick we are picking the fields we needed in the type

// Let's understand this with an example
type Chai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};
// created another type where we are just picking two things from the chai type which are name and price
type BasicChaiInfo = Pick<Chai, "name" | "price">;

// the chai info is satisfied with the name and price
const chaiInfo: BasicChaiInfo = {
  name: "Lemon tea",
  price: 30,
};

// Omit in typescript
// omit is just opposite of the pick in typescript
// what it basically does is that it omits some fields from the previous type which we are telling it
// let's understand with the example
// creating a chai new type where there is secretingredients which should not be public
type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
};

// what we will do is that we can create a public one where we does omit the secretIngredients field

// we can achieve it using the omit in typescript
type PublicChai = Omit<ChaiNew, "secretIngredients">;
