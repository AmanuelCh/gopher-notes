# Conditionals

`if` statements in Go don't use parentheses around the condition:

```go
if height > 4 {
    fmt.Println("You are tall enough!")
}
```

`else if` and `else` are supported as you would expect:

```go
if height > 6 {
    fmt.Println("You are super tall!")
} else if height > 4 {
    fmt.Println("You are tall enough!")
} else {
    fmt.Println("You are not tall enough!")
}
```

Here are some of the comparison operators in Go:

```go
- `==` // equal to
- `!=` // not equal to
- `<` // less than
- `>` // greater than
- `<=` // less than or equal to
- `>=` // greater than or equal to
```

## The Initial Statement of an if Block

An `if` conditional can have an "initial" statement. The variable(s) created in the initial statement are *only* defined within the scope of the `if` body.

```go
if INITIAL_STATEMENT; CONDITION {
}
```

### Why would I use this?

This is just some syntactic sugar that Go offers to shorten up code in some cases. For example, instead of writing:

```go
length := getLength(email)
if length < 1 {
    fmt.Println("Email is invalid")
}
```

We can do:

```go
if length := getLength(email); length < 1 {
    fmt.Println("Email is invalid")
}
```

Not only is this code a bit shorter, but it also removes `length` from the parent scope, which is convenient because we don't need it there - we only need access to it while checking a condition.
