# Return Values

## Passing Variables by Value

Variables in Go are passed by value (except for a few data types we haven't covered yet). "Pass by value" means that when a variable is passed into a function, that function receives a *copy* of the variable. The function is unable to mutate the caller's data.

```go
func main(){
    x := 5
    increment(x)

    fmt.Println(x)
    // still prints 5, because the increment function received a copy of x
}

func increment(x int){
    x++
}
```

## Ignoring Return Values

A function can return a value that the caller doesn't care about. We can explicitly ignore variables by using an underscore. For example:

```go
func getPoint() (x int, y int) {
  return 3, 4
}

// ignore y value
x, _ := getPoint()
```

Even though `getPoint()` returns two values, we can capture the first one and ignore the second.

### Why would you ignore a return value?

There could be many reasons. For example, maybe a function called `getCircle` returns the center point and the radius, but you really only need the radius for your calculation. In that case, you would ignore the center point variable. This is crucial to understand because the Go compiler will throw an error if you have unused variable declarations in your code, so you *need* to ignore anything you don't intend to use.
