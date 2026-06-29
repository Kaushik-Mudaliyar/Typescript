// Generics in typescript
// Generics are templates and makes our code reusable

// Let's understand generics with examples:

// This is how to make generics as we can see below
// We are creating a function wrapInArray which takes a type T and then you send an argument of the same type T and the return type of the function will be the type T array.
// I know it is looking very much complex but it was easy.
// It just creates a function which can take many different types of data type and can also provide the same data types array
function wrapInArray<T>(item: T): T[] {
  return [item];
}

// We can consume it like this and pass different types of data to it
wrapInArray("hello");
wrapInArray(10);

// It is mostly used in designing the  libraries and  framework. In the source code of prisma and dribble they uses generics at many places

// Let's take another example:
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

// Here the pair function is not telling that you need to take same data type, we can take different data type as well, which is interesting
pair("masala", 20);

// We can also make generic types and generic interfaces as well.
// Let's create a generic interface
// By this way we can create a generic interface
interface Box<T> {
  content: T;
}

// By this way we can consume the generic interface
const numberBox: Box<number> = {
  content: 29,
};

// Generics are mostly used in api responses and form states in react

// let's take an example
// We can handle the api response
interface ApiPromise<T> {
  status: number;
  data: T;
}

// we are telling that the data will be an object with a property flavor of type string.
// And then while defining the data we need to give an object and the flavor property to it.
const res: ApiPromise<{ flavor: string }> = {
  status: 201,
  data: {
    flavor: "masala",
  },
};
