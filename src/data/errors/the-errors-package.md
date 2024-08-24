# The Errors Package

The Go standard library provides an "errors" package that makes it easy to deal with errors. Read the godoc for the [errors.New()](https://pkg.go.dev/errors#New) function, but here's a simple example:

```go
var err error = errors.New("something went wrong")
```

### Remember

Go programs express errors with `error` values. Error-values are any type that implements the simple built-in [error interface](https://blog.golang.org/error-handling-and-go). Keep in mind that the way Go handles errors is fairly unique. Most languages treat errors as something special and different. For example, Python raises exception types and JavaScript throws and catches errors. In Go, an `error` is just another value that we handle like any other value - however, we want! There aren't any special keywords for dealing with them.
