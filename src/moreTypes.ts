// type assertion
let response: any = "42";

// here we are not getting any suggestion like i am using length property but it was not showing. so here what we will do is that we will tell the numeric variable externally that keep your trust in me it a string. For this we will use response as string and then we will get all the methods of string in the suggestion
// let numeric:number = response.length

// here we are forcefully telling it that it is a type string
// It is used when we load data from environmental variable
let numeric: number = (response as string).length;

// let's take another example
type Book = {
  name: string;
};

// as we know that if we store something in localstorage we need to store it in string
let bookString = "{'name':'Atomic habits'}";

// but when we want to get it and use it we need to convert it using the parse method

// let bookObject = JSON.parse(bookString)

// what happens here is that if we console the bookObject we didnt get any suggestion like it has property name inside it. So we need to forcefully tell it that you are a type Book.

let bookObject = JSON.parse(bookString) as Book;

// now we are getting the name property in our suggestion
console.log(bookObject.name);

// another example
// here we are forcefully telling it that it was type HTMLInputElment
const inputElement = document.getElementById("username") as HTMLInputElement;

// difference between unknown, any

// we are making value any type
let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;
// here as we know value is type number right but still it is not giving us any error
// This was the problem of any that it does not care which data type you are assinging it will shows the error when we run the program
value.toUpperCase();

// let's take the similar example for unknown type
let newValue: unknown;

newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.3;

// Now as we see it was showing us error that you cannot use touppercase method in it.
// for this reason unknown is good to use
// it does not allow anything without defining
// newValue.toUpperCase()

// Now if we want to make it uppercase then we can do it like this
if (typeof newValue === "string") {
  newValue.toUpperCase();
}

// try catch block

try {
} catch (error) {
  // here one problem we face is that we are telling it any but what if there is no message property inside it. So we use type guards to check and then console it.
  // catch (error: any) {
  //   console.log(error.message);
  // }
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

const data: unknown = "chai aur code";
// here also we are forcefully tellin the stringData to accept data as a string
let stringData: string = data as string;

// never type in typescript

// lets take an example

// type Role = "admin" | "user";
type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to the admin dasboard");
    return;
  }
  if (role === "user") {
    console.log("Redirecting to the user dashboard");
    return;
  }
  // see above this we already handled both the roles like user and admin
  // so the role should not be here after all the checking but it still here
  // it is useful because suppose the type which is defined is in another file and someone updated the role to "admin", "user" or "superadmin". so now the role is not never it will be "superadmin"
  // it allows to catch any missing role we haven't handle using the hover
  role;
}

// another example
// we are making a function which will never return anything like web servers which are constantly serving infinite loop
// by this way never is used
function neverReturnAnything(): never {
  while (true) {}
}
