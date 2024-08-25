# Mutations on Maps

Maps can be mutated.

```go
m := map[string]int{
  "John": 37,
  "Mary": 21,
}
```

## Insert an element

```go
m[key] = elem

// example
m["Amanuel"] = 20

fmt.Println(m) // map[Amanuel:20 John:37 Marry:21]

```

## Get an element

```go
elem := m[key]

// example
ageJohn := m["John"]

fmt.Println(ageJohn) // 37
```

## Delete an element

```go
delete(m, key)

// example
delete(m, "John")

fmt.Println(m) // map[Amanuel:20 Marry:21]
```

## Check if a key exists

```go
elem, ok := m[key]
```

If `key` is in `m`, then `ok` is `true`. If not, `ok` is `false`.

If `key` is not in the map, then `elem` is the zero value for the map's element type.
