# Type Sizes

Ints, [uints](https://www.cs.utah.edu/~germain/PPS/Topics/unsigned_integer.html#:~:text=Unsigned%20Integers,negative%20(zero%20or%20positive).), [floats](https://techterms.com/definition/floatingpoint), and [complex](https://www.cloudhadoop.com/2018/12/golang-tutorials-complex-types-numbers.html#:~:text=Golang%20Complex%20Type%20Numbers,complex%20number%20is%2012.8i.) numbers all have type sizes.

```go
int  int8  int16  int32  int64 // whole numbers

uint uint8 uint16 uint32 uint64 uintptr // positive whole numbers

float32 float64 // decimal numbers

complex64 complex128 // imaginary numbers (rare)
```

The size (8, 16, 32, 64, 128, etc) indicates how many bits in memory will be used to store the variable. The default `int` and `uint` types are just aliases that refer to their respective 32 or 64 bit sizes depending on the environment of the user. The standard sizes that should be used unless the developer has a specific need are:

- `int`
- `uint`
- `float64`
- `complex128`

Some types can be converted the following way:

```go
temperatureInt := 88
temperatureFloat := float64(temperatureInt)
```

Casting a float to an integer in this way [truncates](https://techterms.com/definition/truncate) the floating point portion.

## Which Type Should I Use?

With so many types for what is essentially just a number, developers coming from languages that only have one kind of `Number` type (like JavaScript) may find the choices daunting.

### Prefer "default" types

A problem arises when we have a `uint16`, and the function we are trying to pass it into takes an `int`. We're forced to write code riddled with type casts like `int(myUint16)`. This style of development can be slow and annoying to read. When Go developers stray from the “default” type for any given type family, the code can get messy quickly. Unless you have a good reason to, stick to the following types:

- `bool`
- `string`
- `int`
- `uint32`
- `byte`
- `rune`
- `float64`
- `complex128`

### When should I use a more specific type?

When you're super concerned about performance and memory usage. That’s about it. The only reason to deviate from the defaults is to squeeze out every last bit of performance when you are writing an application that is resource-constrained. (Or, in the special case of `uint64`, you need an absurd range of unsigned integers).
