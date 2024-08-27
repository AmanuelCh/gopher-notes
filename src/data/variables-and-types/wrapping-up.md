# Wrapping Up

## Building Blocks of Data: Variables and Types in Go

In the world of programming, data is king. Go provides a set of powerful building blocks for representing and manipulating data, known as variables and types. Let's explore how to create and use these crucial elements:

### Fundamental Types: The Foundation of Data

Go offers a variety of basic data types to represent different kinds of information. Here are some of the most commonly used ones:

- `int`: Integer numbers (e.g., 10, -5, 0).
- `float64`: Floating-point numbers (e.g., 3.14, 2.718).
- `string`: Textual data (e.g., "Hello", "World!").
- `bool`: Boolean values (true or false).

### Declaring Variables: Giving Data a Name

In Go, you declare variables using the `var` keyword. Let's see how it works:

```go
var name string = "Alice" // Declare a string variable named "name" and assign the value "Alice"
var age int = 30 // Declare an integer variable named "age" and assign the value 30
```

### Type Inference: Go's Smart Shortcut

Go often infers the type of a variable based on the value assigned to it. This is known as type inference:

```go
name := "Bob" // The type of "name" is inferred to be "string"
age := 25    // The type of "age" is inferred to be "int"
```

### Constants: Unchanging Values

Sometimes you need values that stay the same throughout your program. Constants are declared using the `const` keyword:

```go
const PI float64 = 3.14159 // Define a constant named "PI" with the value 3.14159
```

### Type Sizes: Understanding Memory Usage

Go provides information about the size of its data types. This helps optimize memory usage and understand how much space your data will occupy. You can check type sizes using the `unsafe` package, but generally, it's best to rely on the default type sizes provided by Go.

### Making Decisions: Conditionals and `if` Statements

You can control the flow of your program using conditional statements (like `if` statements):

```go
if age >= 18 {
    fmt.Println("You are an adult.")
} else {
    fmt.Println("You are not an adult yet.")
}
```

### Formatting Strings: Making Your Output Elegant

Go provides a powerful formatting mechanism for strings:

```go
name := "Alice"
age := 30
message := fmt.Sprintf("My name is %s, and I am %d years old.", name, age)
fmt.Println(message) // Output: "My name is Alice, and I am 30 years old."
```

Now you have a grasp of the fundamental building blocks of Go's data handling system! In the next steps, you'll explore how to work with functions, data structures, and more. With this foundation, you're well on your way to building sophisticated Go programs. Happy coding!
