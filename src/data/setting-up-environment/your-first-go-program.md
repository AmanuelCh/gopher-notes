# Your First Go Program

Once inside your personal workspace, create a new directory and enter it:

```bash
mkdir hellogo
cd hellogo
```

Inside the directory declare your module's name:

```bash
go mod init {REMOTE}/{USERNAME}/hellogo
```

Where `{REMOTE}` is your preferred remote source provider (i.e. `github.com`) and `{USERNAME}` is your Git username. If you don't use a remote provider yet, just use `example.com/username/hellogo`. Print your `go.mod` file:

```bash
cat go.mod
```

Inside `hellogo`, create a new file called `main.go`. Conventionally, the file in the `main` package that contains the `main()` function is called `main.go`. Paste the following code into your file:

```go
package main

import "fmt"

func main() {
	fmt.Println("hello world")
}
```

Run the code

```bash
go run main.go
```

The `go run` command is used to quickly compile and run a Go package. The compiled binary is *not* saved in your working directory. Use `go build` instead to compile production executables. I rarely use `go run` other than to quickly do some testing or debugging.

## Further Reading

Execute `go help run` in your shell and read the instructions.