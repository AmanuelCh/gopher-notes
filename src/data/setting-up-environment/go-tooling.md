# Go Tooling

All of the Go development tools are accessed via the go command. In addition to `go version` and `go run`, there’s a compiler (`go build`), code formatter (`go fmt`), dependency manager (`go mod`), test runner (`go test`), a tool that scans for common coding mistakes (`go vet`), and more.

## Go Build

`go build` compiles go code into an executable program. Ensure you are in your hellogo repo, then run:

```bash
go build
```

Run the new program:

```bash
./hellogo
```

## Go Install

Ensure you are in your `hellogo` repo, then run:

```bash
go install
```

Navigate out of your project directory:

```bash
cd ../
```

Go has installed the `hellogo` program globally. Run it with:

```bash
hellogo
```

> If you get an error regarding "hellogo not found" it means you probably don't have your Go environment setup properly. Specifically, `go install` is adding your binary to your `GOBIN` directory, but that may not be in your `PATH`. You can read more about that here in the [go install docs](https://pkg.go.dev/cmd/go#hdr-Compile_and_install_packages_and_dependencies).

## Go fmt

One of the chief design goals for Go was to create a language that allowed you to write code efficiently. This meant having simple syntax and a fast compiler. It also led Go’s authors to reconsider code formatting. Most languages allow a great deal of flexibility in the way code is formatted. Go does not. Enforcing a standard format makes it a great deal easier to write tools that manipulate source code. This simplifies the compiler and allows the creation of some clever tools for generating code. There is a secondary benefit as well. Developers have historically wasted extraordinary amounts of time on format wars. Since Go defines a standard way of formatting code, Go developers avoid arguments over brace style and tabs versus spaces. For example, Go programs use tabs to indent, and it is a syntax error if the opening brace is not on the same line as the declaration or command that begins the block.

> Many Go developers think the Go team defined a standard format as a way to avoid developer arguments and discovered the tooling advantages later. However, Russ Cox, the development lead for Go, has publicly stated that better tooling was his original motivation.

The Go development tools include a command, `go fmt`, which automatically fixes the whitespace in your code to match the standard format. However, it can’t fix braces on the wrong line. Run it with the following:

```bash
go fmt ./...
```

Using `./...` tells a Go tool to apply the command to all the files in the current
directory and all subdirectories

> Remember to run `go fmt` before you compile your code, and, at the very least, before you commit source code changes to your repository! If you forget, make a separate commit that does only `go fmt ./...` so you don’t hide logic changes in an avalanche of formatting changes.
