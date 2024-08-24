# Arrays in Go

Like most programming languages, Go has arrays. However, arrays are rarely used directly in Go. All elements in the array must be of the type that’s specified. There are a few declaration styles. In the first, you specify the size of the array and the type of the elements in the array:

```go
var x [3]int
```

This creates an array of three ints. Since no values were specified, all of the elements (x[0], x[1], and x[2]) are initialized to the zero value for an int, which is (of course) 0. If you have initial values for the array, you specify them with an array literal:

```go
var x = [3]int{10, 20, 30}
```

If you have a sparse array (an array where most elements are set to their zero value), you can specify only the indices with nonzero values in the array literal:

```go
var x = [12]int{1, 5: 4, 6, 10: 100, 15}
```

This creates an array of 12 ints with the following values: [1, 0, 0, 0, 0, 4, 6, 0, 0, 0, 100, 15]

## Don't Use Arrays Directly

We said that arrays in Go are rarely used explicitly. This is because they come with an unusual limitation: Go considers the size of the array to be part of the type of the array. This makes an array that’s declared to be [3]int a different type from an array that’s declared to be [4]int. This also means that you cannot use a variable to specify the size of an array, because types must be resolved at compile time, not at runtime. What’s more, you can’t use a type conversion to directly convert arrays of different sizes to identical types. Because you can’t convert arrays of different sizes into each other, you can’t write a function that works with arrays of any size and you can’t assign arrays of different sizes to the same variable.

> Because of these restrictions, don’t use arrays unless you know the exact length you need ahead of time. For example, some of the cryptographic functions in the standard library return arrays because the sizes of checksums are defined as part of the algorithm. This is the exception, not the rule. This raises the question: why is such a limited feature in the language? The main reason arrays exist in Go is to provide the backing store for slices, which are one of the most useful features of Go.
