# Slices Review

Slices wrap arrays to give a more general, powerful, and convenient interface to sequences of data. Except for items with explicit dimensions such as transformation matrices, most array programming in Go is done with slices rather than simple arrays.

### Slices hold references

Slices hold references to an underlying array, and if you assign one slice to another, both refer to the **same** array. If a function takes a slice argument, changes it makes to the elements of the slice *will be visible to the caller*, analogous to passing a pointer to the underlying array. A Read function can therefore accept a slice argument rather than a pointer and a count; the length within the slice sets an upper limit of how much data to read. Here is the signature of the [Read()](https://pkg.go.dev/os#File.Read) method of the `File` type in package `os`:

Referenced from [Effective Go](https://golang.org/doc/effective_go.html#slices)

```go
func (f *File) Read(buf []byte) (n int, err error)
```

### Can we compare slices ?

It is a compile-time error to use `==` to see if two slices are identical or `!=` to see if they are different. The only thing you can compare a slice with using `==` is `nil`:

```go
var x []int //x is assigned the zero value for a slice

fmt.Println(x == nil) // prints true
```

Since Go 1.21, the slices package in the standard library includes two functions to compare slices. The `slices.Equal` function takes in two slices and returns true if the slices are the same length, and all of the elements are equal. It requires the elements of the slice to be comparable. The other function, `slices.EqualFunc`, lets you pass in a function to determine equality and does not require the slice elements to be comparable.
