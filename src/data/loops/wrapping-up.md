# Wrapping Up

## Looping Through Your Code

Loops are essential tools in programming for repeating actions or iterating over data. Go provides two primary loop structures: `for` and `for...range`.

### Introduction to Loops: Repeating Actions

Loops allow you to execute a block of code multiple times, either for a predetermined number of iterations or until a specific condition is met. This avoids repetitive code and makes your programs more dynamic.

### The `for` Loop: Go's Workhorse

The `for` loop is the most versatile loop in Go. It has a simple structure:

```go
for initialization; condition; post-iteration {
    // Code to be executed repeatedly
}
```

- Initialization: Executed once at the beginning of the loop.
- Condition: Evaluated before each iteration. The loop continues as long as the condition is true.
- Post-iteration: Executed after each iteration.

### Examples: Bringing Loops to Life

Counting to 10:

```go
for i := 0; i < 10; i++ {
    fmt.Println(i)
}
```

Iterating over a slice:

```go
numbers := []int{1, 2, 3, 4, 5}
for i := 0; i < len(numbers); i++ {
    fmt.Println(numbers[i])
}
```

### Loop Operators: Controlling Iteration

- `++` (Increment): Increases the value of a variable by 1.
- `--` (Decrement): Decreases the value of a variable by 1.
- `+=` (Add and Assign): Adds a value to a variable and assigns the result to the variable.
- `-=` (Subtract and Assign): Subtracts a value from a variable and assigns the result to the variable.

### Omitting Loop Conditions: Infinite Loops

You can omit the condition in a `for` loop to create an infinite loop:

```go
for {
    // Code that runs indefinitely
}
```

### The `continue` Keyword: Skipping to the Next Iteration

The `continue` keyword jumps to the beginning of the next iteration of the loop, skipping any remaining code in the current iteration:

```go
for i := 0; i < 10; i++ {
    if i%2 == 0 {
        continue // Skip even numbers
    }
    fmt.Println(i)
}
```

### The `break` Keyword: Exiting the Loop

The `break` keyword exits the loop completely, ending the loop's execution:

```go
for i := 0; i < 10; i++ {
    if i == 5 {
        break // Exit the loop when i is 5
    }
    fmt.Println(i)
}
```
