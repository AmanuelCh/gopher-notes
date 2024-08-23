# Functions Intro

Functions in Go can take zero or more arguments. To make Go code easier to read, the variable type comes *after* the variable name. For example, the following function:

```go
func sub(x int, y int) int {
  return x - y
}
```

Accepts two integer parameters and returns another integer. Here, "`func sub(x int, y int) int`" is known as the **function signature**.

## Multiple Parameters

When multiple arguments are of the same type, the type only needs to be declared after the last one, assuming they are in order. For example:

```go
func add(x, y int) int {
  return x + y
}
```

If they are not in order they need to be defined separately.
