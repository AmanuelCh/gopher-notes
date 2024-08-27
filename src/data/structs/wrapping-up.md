# Wrapping Up

## Structuring Your Data

Go's structs are powerful tools for organizing and representing complex data. Think of them as blueprints for creating custom data types that hold multiple pieces of related information.

### Struct Basics: Defining Custom Data Types

Imagine you need to represent a person. You'll likely want to store their name, age, and maybe their favorite color. A struct allows you to do just that, grouping related data together under a single name. Here's how to define a struct:

```go
type Person struct {
    Name string
    Age int
    FavoriteColor string
}
```

This defines a struct named `Person` with three fields: `Name`, `Age`, and `FavoriteColor`.

### Creating and Accessing Struct Instances: Bringing Structs to Life

You create instances (objects) of a struct by using the struct name followed by curly braces:

```go
alice := Person{
    Name: "Alice",
    Age: 30,
    FavoriteColor: "Blue",
}
```

Now you have a `Person` instance called `alice`. You can access its fields using the dot (.) operator:

fmt.Println(alice.Name) // Output: "Alice"
fmt.Println(alice.Age)   // Output: 30

### Nested Structs: Organizing Complex Data

Sometimes you need to group related data even further. Nested structs allow you to create structures within structures:

```go
type Address struct {
    Street string
    City   string
    Zip    string
}

type Person struct {
    Name       string
    Age        int
    FavoriteColor string
    Address    Address // Nested Address struct
}

func main() {
    bob := Person{
        Name:       "Bob",
        Age:        25,
        FavoriteColor: "Green",
        Address: Address{
            Street: "123 Main St",
            City:   "Anytown",
            Zip:    "12345",
        },
    }
    fmt.Println(bob.Address.Street) // Output: "123 Main St"
}
```

### Struct Methods: Adding Behavior to Your Data

Methods are functions that are associated with a specific struct type. They allow you to define behavior that is specific to your data.

```go
type Person struct {
    Name       string
    Age        int
    FavoriteColor string
    Address    Address 
}

func (p Person) Greet() string {
    return "Hello, my name is " + p.Name + "!"
}

func main() {
    alice := Person{Name: "Alice"}
    greeting := alice.Greet()
    fmt.Println(greeting) // Output: "Hello, my name is Alice!"
}
```

### Anonymous Structs: Creating Structs on the Fly

Sometimes you need a temporary struct that you don't want to define explicitly. You can create an anonymous struct directly:

```go
person := struct {
    Name string
    Age int
}{
    Name: "Bob",
    Age: 25,
}
fmt.Println(person.Name) // Output: "Bob"
```

### Embedded Structs: Sharing Properties with Ease

Embedded structs allow you to inherit the fields and methods of another struct. This helps you avoid code duplication and create reusable components:

```go
type Address struct {
    Street string
    City   string
    Zip    string
}

type Employee struct {
    Person
    Title string
}

func main() {
    john := Employee{
        Person: Person{
            Name:       "John",
            Age:        35,
            FavoriteColor: "Red",
            Address: Address{
                Street: "456 Elm St",
                City:   "Sometown",
                Zip:    "67890",
            },
        },
        Title: "Software Engineer",
    }
    fmt.Println(john.Name)         // Output: "John"
    fmt.Println(john.Title)       // Output: "Software Engineer"
    fmt.Println(john.Address.City) // Output: "Sometown"
}
```

You've now explored the fundamentals of Go structs. In the next steps, you'll learn about pointers, interfaces, and other advanced techniques that will empower you to work with structs even more effectively. Happy coding!
