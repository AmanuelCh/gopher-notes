# Closing channels in Go

Channels can be explicitly closed by a *sender*:

```go
ch := make(chan int)

// do some stuff with the channel

close(ch)
```

## Checking if a channel is closed

Similar to the `ok` value when accessing data in a `map`, receivers can check the `ok` value when receiving from a channel to test if a channel was closed.

```go
v, ok := <-ch
```

ok is `false` if the channel is empty and closed.

## Don't send on a closed channel

Sending on a closed channel will cause a panic. A panic on the main goroutine will cause the entire program to crash, and a panic in any other goroutine will cause *that goroutine* to crash.

Closing isn't necessary. There's nothing wrong with leaving channels open, they'll still be garbage collected if they're unused. You should close channels to indicate explicitly to a receiver that nothing else is going to come across.

## Buffered Channels

Channels can *optionally* be buffered.

### Creating a channel with a buffer

You can provide a buffer length as the second argument to `make()` to create a buffered channel:

```go
ch := make(chan int, 100)
```

Sending on a buffered channel only blocks when the buffer is *full*.

Receiving blocks only when the buffer is *empty*.
