# Channels

Channels are a typed, thread-safe queue. Channels allow different goroutines to communicate with each other.

## Create a channel

Like maps and slices, channels must be created *before* use. They also use the same `make` keyword:

```go
ch := make(chan int)
```

## Send data to a channel

```go
ch <- 69
```

The `<-` operator is called the *channel operator*. Data flows in the direction of the arrow. This operation will *block* until another goroutine is ready to receive the value.

## Receive data from a channel

```go
v := <-ch
```

This reads and removes a value from the channel and saves it into the variable `v`. This operation will *block* until there is a value in the channel to be read.

## Blocking and deadlocks

A [deadlock](https://yourbasic.org/golang/detect-deadlock/#:~:text=yourbasic.org%2Fgolang,look%20at%20this%20simple%20example.) is when a group of goroutines are all blocking so none of them can continue. This is a common bug that you need to watch out for in concurrent programming.

> Empty structs are often used as `tokens` in Go programs. In this context, a token is a [unary](https://en.wikipedia.org/wiki/Unary_operation) value. In other words, we don't care *what* is passed through the channel. We care *when* and *if* it is passed.

We can block and wait until *something* is sent on a channel using the following syntax

```go
<-ch
```

This will block until it pops a single item off the channel, then continue, discarding the item.
