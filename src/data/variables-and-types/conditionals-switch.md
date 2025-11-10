# Switch Statements

Go's `switch` statements provide a cleaner way to write multiple conditional checks. Unlike many other languages, Go's switch statements have some unique characteristics that make them more convenient to use.

## Basic Switch

A basic switch statement evaluates cases from top to bottom, stopping when a case succeeds:

```go
switch day {
case "Monday":
    fmt.Println("Start of the work week")
case "Friday":
    fmt.Println("Almost the weekend!")
case "Saturday", "Sunday":
    fmt.Println("It's the weekend!")
default:
    fmt.Println("It's a regular day")
}
```

## No Break Required

One of the nicest features of Go's switch statements is that they break automatically. You don't need to add a `break` statement at the end of each case:

```go
switch grade {
case "A":
    fmt.Println("Excellent!")
case "B":
    fmt.Println("Good job!")
case "C":
    fmt.Println("Passed")
default:
    fmt.Println("Keep trying")
}
```

## Multiple Values in a Case

You can test multiple values in a single case by separating them with commas:

```go
switch day {
case "Saturday", "Sunday":
    fmt.Println("It's the weekend!")
case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday":
    fmt.Println("It's a weekday")
}
```

## Switch on Any Type

Unlike some languages that only allow switching on integers, Go allows you to switch on values of any type:

```go
switch name {
case "Alice":
    fmt.Println("Hello Alice!")
case "Bob":
    fmt.Println("Hello Bob!")
default:
    fmt.Println("Hello stranger!")
}
```

## Switch Without a Condition

A switch without a condition is the same as `switch true`. This can be a cleaner way to write long if-else chains:

```go
score := 85

switch {
case score >= 90:
    fmt.Println("Grade: A")
case score >= 80:
    fmt.Println("Grade: B")
case score >= 70:
    fmt.Println("Grade: C")
case score >= 60:
    fmt.Println("Grade: D")
default:
    fmt.Println("Grade: F")
}
```

This is equivalent to writing multiple `if-else` statements but is often more readable.

## The Fallthrough Keyword

If you need a case to fall through to the next case (like in C or Java), you can use the `fallthrough` keyword:

```go
switch num {
case 1:
    fmt.Println("One")
    fallthrough
case 2:
    fmt.Println("Two or less")
    fallthrough
default:
    fmt.Println("Default case")
}
// If num is 1, this prints:
// One
// Two or less
// Default case
```

Note that `fallthrough` must be the last statement in a case block.

## Break in Switch

While Go's switch statements break automatically, you can still use `break` explicitly to exit a switch early:

```go
switch command {
case "start":
    if !isReady {
        fmt.Println("Not ready to start")
        break
    }
    fmt.Println("Starting...")
case "stop":
    fmt.Println("Stopping...")
}
```
