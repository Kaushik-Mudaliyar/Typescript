// In typescript functions are same as javascript. But only introduced types in it.
// Here as we can see, its very easy to write function in typescript. It is similar to javascript but only types are added.

function makeChai(type: string, size: number) {
  console.log(`Make ${size} cups of ${type} chai `);
}
// Function with defined parameters. Like here we are defining that the you need to provide the type in string only and size in number only. Otherwise it shows error..
makeChai("Masala", 2);

// Let's move to another concept which is return type of the function. We can also declare what the function is returning..
// Let's understand with the below example:

// here we are defining that whatever the function does, it needs to return the number type only. Otherwise it shows us the errors.
function getChaiPrice(): number {
  return 25;
}

// If we don't know about what type of data the function will return. We do not write any type but it is not the best way to do it..
// Here if we tell the function that the return type will be string then it must provide errors.
function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

// If you want to make a function which does not return anything, then we can declared the return type as void. It means there will be nothing which is returning from the function.
function logChai(): void {
  console.log("Chai is ready");
}

// optional parameter and default parameter

// Let's first understand optional parameter
// it means that if the type is provided to the function as an argument then it needs to be a string otherwise if not provided then there will be no problem at all..
// function orderChai(type?: string) {
//   if (type) {
//     console.log(`Serve ${type} chai`);
//   }
//   console.log(`Serve chaii`);
// }

// let's understand default parameter
// it means that if the type is provided to the function as an argument then it needs to be a string and if not provided then there will be a default value we assign to it..

function orderChai(type: string = "Masala") {
  console.log(`Serve ${type} Chai..`);
}

// If we also don't write the return type it is still okay because the typescript infer by itself which type of data is returning but it is a good practice to tell it by annotating the data type which is returning..
