// Here as we can see, we are passing the same object for the order's type in the paramater.
// It is not a good practice because if you are using the same object in more than 2 place than you can make a seperate type such that the code's readability will not be harmed.
// function makeChai(order: { type: string; sugar: number; strong: boolean }) {
//   console.log(order);
// }

// function serveChai(order: { type: string; sugar: number; strong: boolean }) {
//   console.log(order);
// }

// We can do this instead of the above code
// we can already see how it makes the code more readable
// That's where we need to seperately make a type but not everywhere if you are using only one time than it does not make sense to make the type seperately.
type Chai = {
  type: string;
  sugar: number;
  strong: boolean;
};
function makeChai(order: Chai) {
  console.log(order);
}

function serveChai(order: Chai) {
  console.log(order);
}

// There is a similar thing like type in typescript which is interface
// Let's learn about it with an example

type TeaRecipe = {
  water: number;
  milk: number;
};

// Now we are creating a class and the class will implement the tearecipe type
// Here one problem occurs that it tells that class 'MasalaChai' incorrectly implements interface 'TeaRecipe'.
// But still it works completely fine now
// class MasalaChai implements TeaRecipe {
//   water = 100;
//   milk = 50;
// }

// The problem occurs when the type of the object is different

// type CupSize = "small" | "large"

// here it throws error
// it tells that it only allows basic types but not customized types
// class Chai implements CupSize{

// }

// here comes the problem then how we can tell this class to implements the CupSize
// Here interface comes in picture
// It is similar to types. Let's convert the above example to interface to understand more

interface CupSize {
  size: "small" | "large";
}

class GingerChai implements CupSize {
  size: "small" | "large" = "small";
}

// For classes we prefer to make interface rather than types

// Interesting case

// when we create this type of union it is also not going inside the class
// type Response = { ok: true } | { ok: false };

// class myRes implements Response {
//     ok: boolean = true;
// }
// here it gives error only. We need to convert the type to interface to make it work

// Let's learn more about the union and intersection

// Here by this way we can use unions in our ts code.
// this type has a name as well which is called literal types
type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType) {
  console.log(t);
}

// Here by this way we can use intersection in our ts code
// Intersection is like you need to use both the type
// In example below the Masalachai is using both the type of base chai and extra to make a new type masalachai so they both need to there..
type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
  teaLeaves: 1,
  masala: 1,
};

// sometimes we will provide optional value
// let's understand with the example

type User = {
  username: string;
  bio?: string;
};
// it is not showing any error because as we make the bio already optional. So if the user is setting the bio it will be string and if not then no problem
const u1: User = { username: "kaushik" };
const u2: User = { username: "terminator", bio: "hello everyone" };

// Same as the optional thing we have a readonly property and if we use that property in our type then the property will only set one time and after that if you change it. It throws error.

// Let's take an example and understand this..
type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "Devnest",
  version: 1,
};

// lets try to make changes in appName
// cfg.appName = "mynewApp"

// It was throwing error that you cannot assign value to a readonly property
