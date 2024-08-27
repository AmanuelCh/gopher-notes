# Wrapping Up

## Handling Errors Gracefully

Errors are an inevitable part of programming. Go provides a robust and elegant system for handling errors, making your code more reliable and resilient.

### The `error` Interface: A Standard for Error Handling

At the heart of Go's error handling system lies the `error` interface. This interface defines a single method, `Error()`, which returns a string describing the error:

```go
type error interface {
    Error() string
}
```

Any type that implements the `Error()` method satisfies the `error` interface, making it a standard way to represent errors.

### Returning Errors: Signalling Problems

Functions that might encounter errors typically return an `error` value. This signals to the caller that something went wrong.

```go
func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("division by zero") // Return an error if b is zero
    }
    return a / b, nil // Return the result and nil (no error) if successful
}
```

### Checking for Errors: Detecting and Handling Problems

The caller of a function must check for errors. You typically use an `if` statement to check if the error is `nil`, indicating success:

```go
result, err := divide(10, 0) // Call the "divide" function
if err != nil {
    fmt.Println("Error:", err) // Handle the error if it's not nil
} else {
    fmt.Println("Result:", result) // Use the result if there's no error
}
```

### Custom Errors: Providing More Context

Go's built-in `errors.New` function is useful for creating basic errors, but you can create custom errors to provide more context and information.

```go
type InsufficientFundsError struct {
    Balance int
    Amount int
}

func (e InsufficientFundsError) Error() string {
    return fmt.Sprintf("Insufficient funds: balance is %d, requested amount is %d", e.Balance, e.Amount)
}

func withdraw(balance int, amount int) (int, error) {
    if balance < amount {
        return 0, InsufficientFundsError{Balance: balance, Amount: amount} // Return a custom error
    }
    return balance - amount, nil
}
```

### The `errors` Package: Useful Error Handling Utilities

Go's `errors` package provides helpful functions for working with errors, such as:

- `errors.New`: Creates a basic error.
- `errors.Wrap`: Wraps an existing error with additional context.
- `errors.Unwrap`: Extracts the underlying error from a wrapped error.

### Formatting Error Strings: Clear and Descriptive Messages

Use `fmt.Errorf` or `fmt.Sprintf` to create error strings that are clear, concise, and informative. Include relevant details, such as the operation that failed or the specific values involved.

```go
func openFile(filename string) (io.Reader, error) {
    file, err := os.Open(filename)
    if err != nil {
        return nil, fmt.Errorf("failed to open file %s: %w", filename, err) // Wrap the error with context
    }
    return file, nil
}
```

You've now explored the core concepts of error handling in Go!
