# Wrapping Up

## Advanced Function Techniques in Go

Go, while known for its simplicity, offers powerful capabilities for manipulating and leveraging functions in advanced ways.

### High-Order Functions: Taking Functions as Arguments

High-order functions are functions that can accept other functions as arguments or return functions as results. This allows you to create reusable and flexible code structures.

```go
func apply(f func(int) int, x int) int {
    return f(x)
}

func square(x int) int {
    return x * x
}

result := apply(square, 5) // Pass the "square" function as an argument
fmt.Println(result)         // Output: 25
```

### First-Class Functions: Treating Functions as Data

In Go, functions are first-class citizens, meaning they can be treated like any other data type. You can assign functions to variables, pass them as arguments, and return them from other functions.

```go
func getGreeting(name string) func() string {
    return func() string {
        return "Hello, " + name + "!"
    }
}

greeting := getGreeting("Alice")
message := greeting() // Call the returned function
fmt.Println(message)      // Output: Hello, Alice!
```

### Currying: Partially Applying Functions

Currying is a technique that involves transforming a function that takes multiple arguments into a series of nested functions, each taking a single argument.

```go
func add(x int) func(int) int {
    return func(y int) int {
        return x + y
    }
}

add5 := add(5) // Partially apply the "add" function
result := add5(10) // Apply the remaining argument
fmt.Println(result) // Output: 15
```

### `defer` Statements: Scheduling Code for Later

The `defer` statement schedules a function call to be executed after the surrounding function returns. This is useful for tasks like closing files, releasing resources, or performing cleanup actions.

```go
func readFile(filename string) {
    file, err := os.Open(filename)
    if err != nil {
        // Handle the error
    }
    defer file.Close() // Close the file when the function returns
    // ... process the file content ...
}
```

### Closures: Capturing Variables from the Enclosing Scope

Closures allow functions to access variables from their surrounding scope, even after the outer function has returned. This enables you to create functions with state.

```go
func makeCounter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

counter := makeCounter()
fmt.Println(counter()) // Output: 1
fmt.Println(counter()) // Output: 2
```

### Anonymous Functions: Functions Without Names

Anonymous functions are functions that are not declared with a name. They are often used as arguments to other functions or returned as results.

```go
func apply(f func(int) int, x int) int {
    return f(x)
}

result := apply(func(x int) int { return x * 2 }, 5) // Anonymous function as argument
fmt.Println(result)                                 // Output: 10
```

### Pointers: Referencing Memory Addresses

Pointers store the memory addresses of other variables. This allows you to modify the values of variables directly, without copying them.

```go
var x int = 10
var p *int = &x // "p" points to the memory address of "x"
*p = 20        // Modifies the value of "x" through the pointer
fmt.Println(x) // Output: 20
```

### Pointer Receivers: Modifying Values Directly

Methods can have pointer receivers, allowing them to modify the values of the underlying object directly, without creating a copy.

```go
type Counter struct {
    count int
}

func (c *Counter) Increment() {
    c.count++
}

counter := Counter{0}
counter.Increment() // Increment the counter's value
fmt.Println(counter.count) // Output: 1
```

You've explored a range of advanced function techniques in Go!
