# Modules

Go programs are organized into *packages*. A package is a directory of Go code that's all compiled together. Functions, types, variables, and constants defined in one source file are visible to **all other source files within the same package (directory)**. A *repository* contains one or more *modules*. A module is a collection of Go packages that are released together.

## Go Modules

A Go repository typically contains only one module, located at the root of the repository. A file named `go.mod` at the root of a project declares the module. It contains:

- The module path
- The version of the Go language your project requires
- Optionally, any external package dependencies your project has

The module path is just the import path prefix for all packages within the module. Here's an example of a `go.mod` file:

```go
module github.com/AmanuelCh/linkpreview

go 1.22

require github.com/google/examplepackage v1.3.0
```

Each module's path not only serves as an import path prefix for the packages within but *also indicates where the go command should look to download it*. For example, to download the module `golang.org/x/tools`, the go command would consult the repository located at [https://golang.org/x/tools](https://golang.org/x/tools).

> An "import path" is a string used to import a package. A package's import path is its module path joined with its subdirectory within the module. For example, the module `github.com/google/go-cmp` contains a package in the directory `cmp/`. That package's import path is `github.com/google/go-cmp/cmp`. Packages in the standard library do not have a module path prefix.

## Do I Need to Put my Package on GitHub?

You don't *need* to publish your code to a remote repository before you can build it. A module can be defined locally without belonging to a repository. However, it's a good habit to keep a copy of all your projects on a remote server, like GitHub.

## Go Path

Your machine will contain many version control *repositories* (managed by Git, for example). Each repository contains one or more *packages*, but will typically be a single *module*. Each package consists of one or more *Go source files* in a single directory. The path to a package's directory determines its *import path* and where it can be downloaded from if you decide to host it on a remote version control system like Github or Gitlab.

> The `$GOPATH` environment variable will be set by default somewhere on your machine (typically in the home directory, `~/go`). Since we will be working in the new "Go modules" setup, you *don't need to worry about that*. If you read something online about setting up your `GOPATH`, that documentation is probably out of date. These days you should *avoid* working in the `$GOPATH/src` directory. Again, that's the old way of doing things and can cause unexpected issues, so better to just avoid it.

## Get into your Workspace

Navigate to a location on your machine where you want to store some code. For example, I store all my code in `~/workspace`, then organize it into subfolders based on the remote location. For example,

> `~/workspace/github.com/AmanuelCh/linkpreview` = [https://github.com/AmanuelCh/linkpreview](https://github.com/AmanuelCh/linkpreview)

That said, you can put your code wherever you want.