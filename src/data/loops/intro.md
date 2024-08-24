# Loops in Go

The basic loop in Go is written in standard C-like syntax:

```go
for INITIAL; CONDITION; AFTER{
  // do something
}
```

- `INITIAL` is run once at the beginning of the loop and can create variables within the scope of the loop.
- `CONDITION` is checked before each iteration. If the condition doesn't pass then the loop breaks.
- `AFTER` is run after each iteration.

For example:

```go
for i := 0; i < 10; i++ {
  fmt.Println(i)
  // Prints 0 through 9
}
```

What makes Go different from other languages is that "`for`" is the only looping keyword in the language. Go accomplishes this by using the for keyword in four formats:

- A complete, C-style for
- A condition-only for
- An infinite for
- for-range
