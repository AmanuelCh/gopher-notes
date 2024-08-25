# Introduction to Pointers

As we know, a variable is a named location in memory that stores a value. We can manipulate the value of a variable by assigning a new value to it or by performing operations on it. When we assign a value to a variable, we are storing that value in a specific location in memory.

```go
x := 42
// "x" is the name of a location in memory. That location is storing the integer value of 42
```

## A Pointer is a Variable

A pointer is a variable that stores the *memory address* of another variable. This means that a pointer "points to" the *location* of where the data is stored *NOT* the actual data itself.

The `*` syntax defines a pointer:

```go
var p *int
```

The `&` operator generates a pointer to its operand.

```go
myString := "hello"
myStringPtr = &myString
```

## Why are Pointers Useful?

Pointers allow us to manipulate data in memory directly, without making copies or duplicating data. This can make programs more efficient and allow us to do things that would be difficult or impossible without them.

> That said, pointers can be *very* dangerous. It's generally a better idea to have your functions accept non-pointers and return new values rather than mutating pointer inputs.

## Nil Pointers

Pointers can be very dangerous. If a pointer points to nothing (the zero value of the pointer type) then dereferencing it will cause a runtime error (a [panic](https://gobyexample.com/panic)) that crashes the program. Generally speaking, whenever you're dealing with pointers you should check if it's `nil` before trying to dereference it.