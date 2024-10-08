# Custom Package

Let's write a package to import and use in our project.

First navigate to a folder where we created [our first Go program](/setting-up-environment/your-first-go-program). Then create a sibling directory at the same level as the `hellogo` directory:

```bash
mkdir mystrings
cd mystrings
```

Initialize a [module](/setting-up-environment/modules):

```bash
go mod init {REMOTE}/{USERNAME}/mystrings
```

Then create a new file `mystrings.go` in that directory and paste the following code:

```go
// by convention, we name our package the same as the directory
package mystrings

// Reverse reverses a string left to right
// Notice that we need to capitlize the first letter of the function
// If we don't then we won't be able access this function outside of the
// mystrings package
func Reverse(s string) string {
  result := ""
  for _, v := range s {
    result = string(v) + result
  }
  return result
}
```

Note that there is no `main.go` or `func main()` in this package.

`go build` won't build an executable from a library package. However, `go build` will still compile the package and save it to our local build cache. It's useful for checking for compile errors.

Run:

```bash
go build
```

## Using the custom package

Let's use our new `mystrings` package in `hellogo`

Modify hellogo's `main.go` file:

```go
package main

import (
	"fmt"

	"{REMOTE}/{USERNAME}/mystrings"
)

func main() {
	fmt.Println(mystrings.Reverse("hello world"))
}
```

Don't forget to replace {REMOTE} and {USERNAME} with the values you used before. Then edit hellogo's `go.mod` file to contain the following:

```go
module example.com/username/hellogo

go 1.20

replace example.com/username/mystrings v0.0.0 => ../mystrings

require (
	example.com/username/mystrings v0.0.0
)
```

Now build and run the new program:

```bash
go build
./hellogo
```
