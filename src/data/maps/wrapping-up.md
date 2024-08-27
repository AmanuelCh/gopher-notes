# Wrapping Up

## Mapping Your Data

Maps are a powerful data structure in Go for storing key-value pairs, offering a flexible and efficient way to associate data. Think of them as dictionaries, where you can quickly access values based on their unique keys.

### Maps in Go: Key-Value Pairs

Maps are declared using the `map` keyword, followed by the key type and the value type, enclosed in square brackets.

```go
ages := map[string]int{
    "Alice": 25,
    "Bob": 30,
    "Charlie": 28,
}
```

- Key: A unique identifier for accessing a specific value.
- Value: The data associated with the key.

### Accessing Values: Retrieving Data by Key

You use the key to access the corresponding value:

```go
aliceAge := ages["Alice"] // Retrieve Alice's age
fmt.Println(aliceAge)    // Output: 25
```

### Mutating Maps: Adding, Updating, and Deleting

Maps are mutable, allowing you to modify their contents:

```go
// Adding a new key-value pair:
ages["David"] = 22

// Updating a value:
ages["Alice"] = 26

// Deleting a key-value pair:
delete(ages, "Charlie")
```

### Checking for Keys: Verifying Existence

You can use the comma-ok idiom to check if a key exists in a map before accessing its value:

```go
if age, ok := ages["Bob"]; ok {
    fmt.Println("Bob's age is", age)
} else {
    fmt.Println("Bob's age is not available")
}
```

### Nested Maps: Structuring Data Hierarchically

You can create nested maps to organize data in a hierarchical way:

```go
users := map[string]map[string]string{
    "Alice": {"email": "alice@example.com", "city": "New York"},
    "Bob": {"email": "bob@example.com", "city": "London"},
}
```

### Key Types: Supporting a Variety of Keys

Maps can use various data types for their keys, including strings, integers, structs, and more.
