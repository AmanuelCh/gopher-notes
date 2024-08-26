# Constraints

Sometimes you need the logic in your generic function to know *something* about the types it operates on. The example we saw in the intro section didn't need to know *anything* about the types in the slice, so we used the built-in `any` constraint:

```go
func splitAnySlice[T any](s []T) ([]T, []T) {
    mid := len(s)/2
    return s[:mid], s[mid:]
}
```

Constraints are just interfaces that allow us to write generics that only operate within the constraint of a given interface type. In the example above, the `any` constraint is the same as the empty interface because it means the type in question can be *anything*.

## Creating a custom constraint

Let's take a look at the example of a `concat` function. It takes a slice of values and concatenates the values into a string. This should work with *any type that can represent itself as a string*, even if it's not a string under the hood. For example, a `user` struct can have a `.String()` that returns a string with the user's name and age.

```go
type stringer interface {
    String() string
}

func concat[T stringer](vals []T) string {
    result := ""
    for _, val := range vals {
        // this is where the .String() method is used. That's why we need a more specific
        // constraint instead of the any constraint
        result += val.String()
    }
    return result
}
```

## Interface type lists

When generics were released, a new way of writing interfaces was also released at the same time!

We can now simply list a bunch of types to get a new interface/constraint.

```go
// Ordered is a type constraint that matches any ordered type.
// An ordered type is one that supports the <, <=, >, and >= operators.
type Ordered interface {
    ~int | ~int8 | ~int16 | ~int32 | ~int64 |
        ~uint | ~uint8 | ~uint16 | ~uint32 | ~uint64 | ~uintptr |
        ~float32 | ~float64 |
        ~string
}
```
