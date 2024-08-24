# Type Assertions in Go

When working with interfaces in Go, every once-in-awhile you'll need access to the underlying type of an interface value. You can cast an interface to its underlying type using a *type assertion*.

```go
type shape interface {
	area() float64
}

type circle struct {
	radius float64
}

// "c" is a new circle cast from "s" which is an instance of a shape.
// "ok" is a bool that is true if s was a circle or false if s isn't a circle
c, ok := s.(circle)
```

## Type Switches

A *type switch* makes it easy to do several type assertions in a series. A type switch is similar to a regular switch statement, but the cases specify *types* instead of *values*.

```go
func printNumericValue(num interface{}) {
	switch v := num.(type) {
	  case int:
		  fmt.Printf("%T\n", v)
	  case string:
		  fmt.Printf("%T\n", v)
	  default:
		  fmt.Printf("%T\n", v)
	}
}

func main() {
	printNumericValue(1)
	// prints "int"

	printNumericValue("1")
	// prints "string"

	printNumericValue(struct{}{})
	// prints "struct {}"
}
```

`fmt.Printf("%T\n", v)` prints the *type* of a variable.
