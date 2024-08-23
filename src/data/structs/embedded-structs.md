# Embedded Structs

Go is not an [object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming) language. However, embedded structs provide a kind of *data-only* inheritance that can be useful at times. Keep in mind, Go doesn't support classes or inheritance in the complete sense, embedded structs are just a way to elevate and share fields between struct definitions.

```go
type car struct {
  make string
  model string
}

type truck struct {
  // "car" is embedded, so the definition of a "truck" now also additionally contains all of the fields of the car struct
  car
  bedSize int
}
```

## Embedded vs Nested Struct

- An embedded struct's fields are accessed at the top level, unlike nested structs.
- Promoted fields can be accessed like normal fields except that they can't be used in [composite literals](https://golang.org/ref/spec#Composite_literals)

```go
lanesTruck := truck{
  bedSize: 10,
  car: car{
    make: "toyota",
    model: "camry",
  },
}

fmt.Println(lanesTruck.bedSize)

// embedded fields promoted to the top-level
// instead of lanesTruck.car.make
fmt.Println(lanesTruck.make)
fmt.Println(lanesTruck.model)
```
