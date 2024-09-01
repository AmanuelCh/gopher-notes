# Standard Library

The Go standard library is a developer's dream, offering a plethora of pre-built tools and packages to handle just about any task you can imagine.

Let's dive into some of the most common and useful packages within the standard library.

### 1. `net/http`: Your Gateway to the Web

The `net/http` package is your go-to for creating web servers and interacting with web resources.

**Example: Building a Simple Web Server:**

```go
package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, you've requested: %s\n", r.URL.Path)
}

func main() {
    http.HandleFunc("/", handler) // Define a handler for the root path
    fmt.Println("Server listening on port 8080")
    http.ListenAndServe(":8080", nil) // Start the server
}
```

**Code breakdown:**

- **`handler(w http.ResponseWriter, r *http.Request)`:** This function handles requests to the server. It writes a response to the `w` object, which represents the HTTP response. `r` holds the incoming request details.
- **`http.HandleFunc("/", handler)`:** This line tells the server to use the `handler` function to respond to requests to the root path (`/`).
- **`http.ListenAndServe(":8080", nil)`:** This starts the server, listening on port `8080`.

Save this code as `server.go` and run it. Then open your browser and navigate to `http://localhost:8080/` (or any path you want). You'll see the message displayed by the `handler` function.

### 2. `os`: Interacting with the Operating System

The `os` package gives you access to system-level functionalities like working with files, environment variables, processes, and more.

**Example: Reading a File:**

```go
package main

import (
    "bufio"
    "fmt"
    "os"
)

func main() {
    file, err := os.Open("my_file.txt") // Open the file
    if err != nil {
        fmt.Println("Error opening file:", err)
        return
    }
    defer file.Close() // Close the file when the function exits

    scanner := bufio.NewScanner(file) // Create a scanner for the file
    for scanner.Scan() {
        line := scanner.Text()
        fmt.Println(line)
    }

    if err := scanner.Err(); err != nil {
        fmt.Println("Error reading file:", err)
    }
}
```

**Code breakdown:**

- **`file, err := os.Open("my_file.txt")`:** This line opens the file named `my_file.txt`.
- **`defer file.Close()`:** The `defer` keyword ensures that the file will be closed after the function finishes, even if an error occurs.
- **`scanner := bufio.NewScanner(file)`:** This creates a scanner that reads the file line by line.
- **`for scanner.Scan() { ... }`:** This loop reads each line and prints it to the console.

Create a file named `my_file.txt` with some text in it. Then run the code and you'll see the content of the file printed to the console.

### 3. `time`: Time and Date Management

The `time` package lets you work with dates, times, durations, and time zones.

**Example: Getting Current Time:**

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    now := time.Now() // Get the current time
    fmt.Println("Current time:", now)

    fmt.Println("Hour:", now.Hour())
    fmt.Println("Minute:", now.Minute())
    fmt.Println("Second:", now.Second())
}
```

**Code breakdown:**

- **`now := time.Now()`:** Gets the current time and stores it in the `now` variable.
- **`fmt.Println("Current time:", now)`:** Prints the current time in its full format.
- **`now.Hour()`, `now.Minute()`, `now.Second()`:** Access specific time components.

This code will print the current date and time along with its hour, minute, and second.

### The Power of the Standard Library

These are just a few examples of the vast capabilities of the Go standard library. Explore the documentation [https://pkg.go.dev/](https://pkg.go.dev/) for a comprehensive list of packages and their functions.
