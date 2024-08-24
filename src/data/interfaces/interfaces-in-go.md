# Interfaces in Go

Interfaces are collections of method signatures. A type "implements" an interface if it has all of the methods of the given interface defined on it. In the following example, a "shape" must be able to return its area and perimeter. Both `rect` and `circle` fulfill the interface.

```go
type shape interface {
  area() float64
  perimeter() float64
}

type rect struct {
    width, height float64
}
func (r rect) area() float64 {
    return r.width * r.height
}
func (r rect) perimeter() float64 {
    return 2*r.width + 2*r.height
}

type circle struct {
    radius float64
}
func (c circle) area() float64 {
    return math.Pi * c.radius * c.radius
}
func (c circle) perimeter() float64 {
    return 2 * math.Pi * c.radius
}
```

When a type implements an interface, it can then be used as the interface type.

## Interface Implementation

Interfaces are implemented *implicitly*. A type never declares that it implements a given interface. Unlike in many other languages, there is no explicit declaration of intent, there is no "implements" keyword. If an interface exists and a type has the proper methods defined, then the type automatically fulfills that interface. Implicit interfaces *decouple* the definition of an interface from its implementation. You may add methods to a type and in the process be unknowingly implementing various interfaces, and *that's okay*.

### Note

Remember, interfaces are collections of method signatures. A type "implements" an interface if it has all of the methods of the given interface defined on it.

```go
type shape interface {
  area() float64
}
```

If a type in your code implements an `area` method, with the same signature (e.g. accepts nothing and returns a `float64`), then that object is said to *implement* the `shape` interface.

```go
type circle struct{
	radius int
}

func (c *circle) area() float64 {
  return 3.14 * c.radius * c.radius
}
```

This is *different from most other languages*, where you have to *explicitly* assign an interface type to an object, like with Java:

```java
class Circle implements Shape
```