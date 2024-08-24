# There is No while Loop in Go

Most programming languages have a concept of a `while` loop. Because Go allows for the omission of sections of a `for` loop, a `while` loop is just a `for` loop that only has a CONDITION.

```go
for CONDITION {
  // do some stuff while CONDITION is true
}
```

For example:

```go
plantHeight := 1
for plantHeight < 5 {
  fmt.Println("still growing! current height:", plantHeight)
  plantHeight++
}
fmt.Println("plant has grown to ", plantHeight, "inches")
```

Which prints:

```go
still growing! current height: 1
still growing! current height: 2
still growing! current height: 3
still growing! current height: 4
plant has grown to 5 inches
```
