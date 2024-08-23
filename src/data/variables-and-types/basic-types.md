# Basic Types

Go's basic variable types are:

```go
bool

string

int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr

byte // alias for uint8

rune // alias for int32
     // represents a Unicode code point

float32 float64

complex64 complex128
```

`String`s and `int`s should be fairly self-explanatory.  A `bool` is a boolean variable, meaning it has a value of `true` or `false`.  The [floating point](https://en.wikipedia.org/wiki/Floating-point_arithmetic) types (`float32` and `float64`) are used for numbers that are not integers -- that is, they have digits to the right of the decimal place, such as `3.14159`.  The `float32` type uses 32 bits of precision, while the `float64` type uses 64 bits to be able to more precisely store more digits.  Don't worry too much about the intricacies of the other types for now.

## Declaring a Variable

Variables are declared using the `var` keyword. For example, to declare a variable called `number` of type `int`, you would write:

```go
var number int
```

To declare a variable called `pi` to be of type `float64` with a value of `3.14159`, you would write:

```go
var pi float64 = 3.14159
```

The value of an initialized variable with no assignment will be its [zero value](https://tour.golang.org/basics/12).

## Short Variable Declaration

Inside a function (even the main function), the `:=` short assignment statement can be used in place of a `var` declaration.

```go
var empty string
```

Is the same as

```go
empty := ""
```

The `:=` operator infers the type of the new variable based on the value.

```go
numCars := 10 // inferred to be an integer

temperature := 0.0 // temperature is inferred to be a floating point value because it has a decimal point

var isFunny = true // isFunny is inferred to be a boolean
```

Outside of a function (in the [global/package scope](https://dave.cheney.net/2017/06/11/go-without-package-scoped-variables)), every statement begins with a keyword (`var`, `func`, and so on) and so the `:=` construct is not available.