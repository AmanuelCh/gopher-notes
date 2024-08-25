# Nested Maps

Maps can contain maps, creating a nested structure. For example:

```go
map[string]map[string]int
map[rune]map[string]int
map[int]map[string]map[string]int
```

## Counting Instances

Remember that you can check if a key is already present in a map by using the second return value from the index operation.

```go
names := map[string]int{}

if _, ok := names["elon"]; !ok {
    // if the key doesn't exist yet,
    // initialize its value to 0
    names["elon"] = 0
}
```
