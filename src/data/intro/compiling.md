# Compiling

Go is a compiled programming language. To define the term "compiled", computers need machine code, they don't understand English or even uncompiled computer programs. For example, the code

```go
package main

import "fmt"

func main(){
  fmt.Println("hello world")
}
```

means *nothing* to a computer. We need to convert our high-level (Go) code into machine language, which is really just a set of instructions that some specific hardware can understand. In your case, your CPU. The Go compiler's job is to take Go code and produce machine code. On Windows, that would be a `.exe` file. On Mac or Linux, it would be any executable file.

## Computers Need Machine Code

A computer's [CPU](https://en.wikipedia.org/wiki/Central_processing_unit) only understands its own *instruction set*, which we call "machine code". Instructions are basic math operations like addition, subtraction, multiplication, and the ability to save data temporarily. For example, an [ARM processor](https://en.wikipedia.org/wiki/ARM_architecture) uses the *ADD* instruction when supplied with the number `0100` in binary. Go, C, and Rust are all languages where the code is first converted to machine code by the compiler before it's executed.

![compiler](https://www.astateofdata.com/wp-content/uploads/2019/09/code-compiler-machine-code.png)


## How Fast is Go ?

Generally speaking, compiled languages run much faster than interpreted languages or VM-powered languages, and Go is no exception. Go is one of the fastest programming languages, beating JavaScript, Python, and Ruby handily in most benchmarks. However, Go code doesn't *run* quite as fast as its compiled Rust and C counterparts. That said, it *compiles* much faster than they do, which makes the developer experience super productive. Unfortunately, there are no swordfights on Go teams...

![xkcd compiling](https://imgs.xkcd.com/comics/compiling.png)
