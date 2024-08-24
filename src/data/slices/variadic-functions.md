# Variadic Functions

Many functions, especially those in the standard library, can take an arbitrary number of *final* arguments. This is accomplished by using the "`...`" syntax in the function signature. A variadic function receives the variadic arguments as a slice.

```go
func sum(nums ...int) int {
    // nums is just a slice
    for i := 0; i < len(nums); i++{
        num := nums[i]
    }
}

func main() {
    total := sum(1, 2, 3)
    fmt.Println(total)
    // prints "6"
}
```

The familiar [fmt.Println()](https://pkg.go.dev/fmt#Println) and [fmt.Sprintf()](https://pkg.go.dev/fmt#Sprintf) are variadic! `fmt.Println()` prints each element with space [delimiters](https://www.dictionary.com/browse/delimited) and a newline at the end.

```go
func Println(a ...interface{}) (n int, err error)
```

## Spread Operator

The spread operator allows us to pass a slice *into* a variadic function. The spread operator consists of three dots following the slice in the function call.

```go
func printStrings(strings ...string) {
	for i := 0; i < len(strings); i++ {
		fmt.Println(strings[i])
	}
}

func main() {
    names := []string{"bob", "sue", "alice"}
    printStrings(names...)
}
```

## Append

The built-in append function is used to dynamically add elements to a slice:

```go
func append(slice []Type, elems ...Type) []Type
```

If the underlying array is not large enough, `append()` will create a new underlying array and point the slice to it. Notice that `append()` is variadic, the following are all valid:

```go
slice = append(slice, oneThing)
slice = append(slice, firstThing, secondThing)
slice = append(slice, anotherSlice...)
```

## Slice of Slices

Slices can hold other slices, effectively creating a [matrix](https://en.wikipedia.org/wiki/Matrix_(mathematics)), or a 2D slice.

```go
rows := [][]int{}
```

## Range

Go provides syntactic sugar to iterate easily over elements of a slice:

```go
for INDEX, ELEMENT := range SLICE {
}
```

For example:

```go
fruits := []string{"apple", "banana", "grape"}
for i, fruit := range fruits {
    fmt.Println(i, fruit)
}
// 0 apple
// 1 banana
// 2 grape
```
