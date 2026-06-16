// inference in typescript means typescript inferred its datatype from itself
// Like we can see below that we are using string in the drink
let drink = "chai";

// and when we try to write like this it will provide error that the data needs to be string
// drink = 34

// Now lets learn about type annotation
// Type annotation means to tell the variable that your data type is this. Like we can see the example below
let chaiFlavour: string = "Ginger chai";
chaiFlavour = "masala chai";

// but when we try to assign other data type then it provides error
// chaiFlavour=42
