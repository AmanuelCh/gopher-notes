# Omitting Conditions 

Loops in Go can omit sections of a for loop. For example, the `CONDITION` (middle part) can be omitted which causes the loop to run forever.

```go
for INITIAL; ; AFTER {
  // do something forever
}
```

you’ll leave off the initialization if it is based on a value calculated before the loop:

```go
i := 0
for ; i < 10; i++ {
  fmt.Println(i)
}
```

or you’ll leave off the increment because you have a more complicated increment rule
inside the loop:

```go
for i := 0; i < 10; {
  fmt.Println(i)
  if i % 2 == 0 {
    i++
  } else {
    i+=2
  }
}
```
