# Pointer Receivers

A receiver type on a method can be a pointer.

Methods with pointer receivers can modify the value to which the receiver points. Since methods often need to modify their receiver, pointer receivers are *more common* than value receivers.

## Pointer Receiver

```go
type car struct {
	color string
}

func (c *car) setColor(color string) {
	c.color = color
}

func main() {
	c := car{
		color: "white",
	}
	c.setColor("blue")
	fmt.Println(c.color)
	// prints "blue"
}
```

## Non-pointer Receiver

```go
type car struct {
	color string
}

func (c car) setColor(color string) {
	c.color = color
}

func main() {
	c := car{
		color: "white",
	}
	c.setColor("blue")
	fmt.Println(c.color)
	// prints "white"
}
```

## Pointer Receiver Code

Methods with pointer receivers don't require that a pointer is used to call the method. The pointer will automatically be derived from the value.

```go
type circle struct {
	x int
	y int
    radius int
}

func (c *circle) grow(){
    c.radius *= 2
}

func main(){
    c := circle{
        x: 1,
        y: 2,
        radius: 4,
    }

    // notice c is not a pointer in the calling function
    // but the method still gains access to a pointer to c
    c.grow()
    fmt.Println(c.radius)
    // prints 8
}
```
