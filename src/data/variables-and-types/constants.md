# Constants

Constants are declared like variables but use the `const` keyword. Constants can't use the `:=` short declaration syntax. Constants can be character, string, boolean, or numeric values. They *can not* be more complex types like slices, maps and structs, which are types we will explain later. As the name implies, the value of a constant can't be changed after it has been declared.

## Computed Constants

Constants must be known at compile time. More often than not they will be declared with a static value:

```go
const myInt = 15
```

However, constants *can be computed* so long as the computation can happen at *compile time*. For example, this is valid:

```go
const firstName = "John"
const lastName = "Doe"
const fullName = firstName + " " + lastName // John Doe
```

That said, you *cannot* declare a constant that can only be computed at run-time.
