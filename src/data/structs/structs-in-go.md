# Structs in Go

We use `structs` in Go to represent structured data. A struct type is defined with the keyword type, the name of the struct type, the keyword struct, and a pair of braces ({}). Within the braces, you list the fields in the struct. Just as you put the variable name first and the variable type second in a var declaration, you put the struct field name first and the struct field type second. It's often convenient to group different types of variables together. For example, if we want to represent a car we could do the following:

```go
type car struct {
  Make string
  Model string
  Height int
  Width int
}
```

This creates a new struct type called `car`. All cars have a `Make`, `Model`, `Height` and `Width`. In Go, you will often use a `struct` to represent information that you would have used a dictionary for in Python, or an object literal for in JavaScript. You can define a struct type inside or outside of a function. A struct type that’s defined within a function can be used only within that function.

> If you already know an object-oriented language, you might be wondering about the difference between classes and structs. The difference is simple: Go doesn’t have classes, because it doesn’t have inheritance. This doesn’t mean that Go doesn’t have some of the features of object-oriented languages it just does things a little differently.
