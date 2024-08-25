# Maps

Maps are similar to JavaScript objects, Python dictionaries, and Ruby hashes. Maps are a data structure that provides key -> value mapping. The zero value of a map is `nil`. We can create a map by using a literal or by using the `make()` function:

```go
ages := make(map[string]int)
ages["John"] = 37
ages["Mary"] = 24
ages["Mary"] = 21 // overwrites 24
```

```go
ages := map[string]int{
  "John": 37,
  "Mary": 21,
}
```

The `len()` function works on a map, it returns the total number of key/value pairs.

```go
ages := map[string]int{
  "John": 37,
  "Mary": 21,
}
fmt.Println(len(ages)) // 2
```
