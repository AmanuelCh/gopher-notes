# User Input

Imagine your program is a fun chatbot, a helpful calculator, or even a game that needs players to participate. We need a way to let them feed information into our Go programs.

Let's break down how to do this, piece by piece, using code that's as clear as a sunny day!

### 1. The "Scan" Approach: Simple and Straightforward

The `fmt` package is a Go godsend, packed with tools for input and output. The `fmt.Scanln()` function is your go-to for getting user input. It reads a line from standard input (usually your keyboard) and stores it as a string.

```go
package main

import (
    "fmt"
)

func main() {
    fmt.Print("What's your name? ") // Ask the user for their name
    var name string 
    fmt.Scanln(&name) // Read the input and store it in the "name" variable

    fmt.Println("Hello,", name, "!") // Greet the user
}
```

**Code breakdown:**

- **`fmt.Print("What's your name? ")`:** This line displays a prompt on the screen, asking the user for their name.
- **`var name string`:** We declare a variable `name` of type `string` to hold the user's input.
- **`fmt.Scanln(&name)`:** This is the magic! `Scanln` reads the input from the user (until they press Enter) and stores it in the `name` variable. The ampersand `&` is crucial here. It gives `Scanln` the memory address of `name`, so it can directly modify the variable.

When you execute this program, you'll see the prompt. Type your name and press Enter. The program will then greet you!

### 2. The "bufio" Approach: For the Big Leagues

The `bufio` package lets you work with buffered I/O, which is super helpful when dealing with a lot of input. It's like having a "buffer" to store input before processing it, which can be a performance boost.

```go
package main

import (
    "bufio"
    "fmt"
    "os"
)

func main() {
    reader := bufio.NewReader(os.Stdin) // Create a new reader for standard input

    fmt.Print("Enter a number: ")
    input, _ := reader.ReadString('\n') // Read a line until newline is encountered

    // Convert the input to an integer
    number, err := fmt.Sscan(input, &number) 
    if err != nil {
        fmt.Println("Invalid input!")
        return
    }

    fmt.Println("You entered:", number)
}
```

**Code breakdown:**

- **`reader := bufio.NewReader(os.Stdin)`:** Creates a new reader associated with the standard input (your keyboard).
- **`input, _ := reader.ReadString('\n')`:** Reads a line from the user until it encounters a newline character (`\n`). It stores the input in the `input` variable.
- **`number, err := fmt.Sscan(input, &number)`:** This line converts the string input (`input`) into an integer and stores it in the `number` variable.
- **`if err != nil { ... }`:** Error handling! If there's a problem with the conversion (like the user enters a non-numeric value), an error is returned, and the program handles it gracefully.

Type in a number and hit Enter. The program will confirm your input!

### 3. User Input: It's Not Just Text

So far, we've dealt with text input. But what if you want to get numbers, dates, or even custom types?

Fear not, Go's got your back! We can use the `fmt.Scanf()` function to directly read formatted input.

```go
package main

import (
    "fmt"
)

func main() {
    var age int
    fmt.Print("How old are you? ")
    fmt.Scanf("%d", &age) // %d tells Scanf to expect an integer

    fmt.Println("You are", age, "years old!")
}
```

**Code breakdown:**

- **`var age int`:** We declare an integer variable `age` to store the input.
- **`fmt.Scanf("%d", &age)`:** This line is where the magic happens. `Scanf` reads input and tries to match it with the format specifier `%d` (for integer). If the input is a valid integer, it is stored in the `age` variable.

Type in a number representing your age and hit Enter. The program will tell you how old you are!
