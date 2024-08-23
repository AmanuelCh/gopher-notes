# Named Return Values

Return values may be given names, and if they are, then they are treated the same as if they were new variables defined at the top of the function. Named return values are best thought of as a way to document the purpose of the returned values. According to the [tour of go](https://tour.golang.org/):

> A return statement without arguments returns the named return values. This is known as a "naked" return. Naked return statements should be used only in short functions. They can harm readability in longer functions.

```go
func getCoords() (x, y int){
  // x and y are initialized with zero values

  return // automatically returns x and y
}
```

Is the same as:

```go
func getCoords() (int, int){
  var x int
  var y int
  return x, y
}
```

In the first example, `x` and `y` are the return values. At the end of the function, we could simply write `return` to return the values of those two variables, rather that writing `return x,y`.

## Named Return Values - Implicit Returns

Even though a function has named return values, we can still explicitly return values if we want to.

```go
func getCoords() (x, y int){
  return x, y // this is explicit
}
```

Using this explicit pattern we can even overwrite the return values:

```go
func getCoords() (x, y int){
  return 5, 6 // this is explicit, x and y are NOT returned
}
```

Otherwise, if we want to return the values defined in the function signature we can just use a naked `return` (blank return):

```go
func getCoords() (x, y int){
  return // implicitly returns x and y
}
```
