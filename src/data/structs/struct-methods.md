# Struct Methods in Go

While Go is **not** object-oriented, it does support methods that can be defined on structs. Methods are just functions that have a receiver. A receiver is a special parameter that syntactically goes *before* the name of the function.

```go
type rect struct {
  width int
  height int
}

// area has a receiver of (r rect)
func (r rect) area() int {
  return r.width * r.height
}

r := rect{
  width: 5,
  height: 10,
}

fmt.Println(r.area())
// prints 50
```

A receiver is just a special kind of function parameter. Receivers are important because they will allow us to define interfaces that our structs (and other types) can implement.
