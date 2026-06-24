// type narrowing is the best practices we can use while writing code
// Let's understand with many examples

// Here we are not conformed whether the function will get string or number. So what we will do is that we use type narrowing for specific output. Like if the user calls the function and passes string then he will get "serving masala chai" as output other wise if he sends number then he will get output that "chai order : 3". For that reason type narrowing is used
function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Serving ${kind} chai`;
  }
  return `Chai order : ${kind}`;
}

// lets take more example to understand about it

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai`;
}

// we can also write exhaustive checks
// below is the example for it

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting chai..`;
  }
  if (size === "medium" || size === "large") {
    return `serving extra chai...`;
  }
  return `Chai order #${size}`;
}

// we can also check the type using the instance of operator. lets understand with the example
class KulhadChai {
  serve() {
    return `Serving kulhad chai..`;
  }
}
class Cutting {
  serve() {
    return `Serving cutting chai..`;
  }
}

function serve(chai: KulhadChai | Cutting) {
  if (chai instanceof KulhadChai) {
    chai.serve();
  }
  chai.serve();
}

// typescript provides a superpower to us such that we can make our own types using the type keyword
// lets understand this

type ChaiOrder = {
  type: string;
  sugar: number;
};

// here we are creating a function which checks whether the obj which is passing is of type ChaiOrder which we have created above..
function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

// here we use it in the serveOrder function. let's see how

function serveOrder(item: ChaiOrder | string) {
  // here we are checking whether the item is a chaiOrder type or not. If it is true then we will return serving masala chai with 3 sugar other wise serving custom chai : elaichi
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `Serving custom chai : ${item}`;
}

// another example to understand custom types
type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(chai: Chai) {
  switch (chai.type) {
    case "masala":
      return `Serving masala chai`;
    case "ginger":
      return `Serving ginger1 chai`;
    case "elaichi":
      return `Serving elaichi chai`;
  }
}

// we can also check with a unique property of the object
// example
function brew(order: MasalaChai | GingerChai) {
  if ("spiceLevel" in order) {
    return `Masala Chai..`;
  }
  return `Ginger Chai..`;
}

// let's use unknown type
// unknown type says that when you are not sure what type of data is coming then you can use unknown instead of any but after type narrowing you need to tell me that what was the type of the data.

// let's understand these with the example

// function isStringArray(arr: unknown): arr is string[] {

// }

// By this way we can use unknow in our codebase

// It basically means that if you don't know it in start then you need to find out and at the end you need to define the type otherwise it will provide error
