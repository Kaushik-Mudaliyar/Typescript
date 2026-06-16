// Here, we discuss about the union and any
// First thing to know is that use unions only when necessary don't overuse it

// When we use unions?
// Let's take an example to understand this like suppose you are counting the subscribers and at starting you count like 10,100.... but when the count hits 1 million subscribers how much zeroes you would add so what we do is that we use '1M' instead of all the zeroes. So we use unions when there is a need of it.

// Here if i assign string or number it does not give any error to me.
// This is how we can use unions in typescript
let subs: number | string = 10;

// In union we can create our own data type as well like below
let apiRequestStatus: "pending" | "success" | "error" = "pending";

// Here the user can only give pending, success or error to the api status
// If someone is new to the team and suppose he wrote done there then it will give error and also it provides the suggestion as well that you can only assign pending success and error to it. That's why unions are used in typescript
// apiRequestStatus = "done" -> error

// let's take one more example
// let's book a ticket in airoplane

// see how useful it was because the person can either book aisle, window or middle
// That's why unions are used in typescript
let airlineSeats: "aisle" | "window" | "middle" = "aisle";

// any in typescript
// we need to avoid any in typescript
// All the seniors tell this that you need to avoid any in typescript but sometimes we need to use any.

// defining orders array
const orders = ["12", "20", "28", "42"];

// defining currentOrder
// and when we hover over it, it shows any
// this means that we do not care about the datatype and it is not a good thing to do
let currentOrder: string | undefined;

for (const order of orders) {
  if (order == "28") {
    currentOrder = order;
    break;
  }
}

// here as we can see that it shows the value will be either string or undefined
// so it is also not a good practice because suppose if between these i reassigned the value currentOrder = 42 then it will say it is a number dataType
// currentOrder = 42

console.log(currentOrder);
