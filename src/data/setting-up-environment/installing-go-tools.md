# Installing Go Tools

To build Go code, you need to download and install the Go development tools. You
can find the latest version of the tools at the downloads page on the [Go website](https://go.dev/dl). Choose the download for your platform and install it. The `.pkg` installer for Mac
and the `.msi` installer for Windows automatically install Go in the correct location,
remove any old installations, and put the Go binary in the default executable path. If you are on a Mac, you can install Go using [Homebrew](https://brew.sh) with the command

```bash
brew install go
```

Windows developers who use [Chocolatey](https://chocolatey.org) can install Go with the command

```bash
choco install golang
```

The various Linux and BSD installers are gzipped TAR files and expand to a directory named go. Copy this directory to `/usr/local` and add `/usr/local/go/bin` to your `$PATH` so that the go command is accessible:

```bash
$ tar -C /usr/local -xzf go1.20.5.linux-amd64.tar.gz
$ echo 'export PATH=$PATH:/usr/local/go/bin' >> $HOME/.bash_profile
$ source $HOME/.bash_profile
```

You might need root permissions to write to /usr/local. If the tar command fails, rerun it with sudo tar -C /usr/local -xzf go1.20.5.linux-amd64.tar.gz. You can validate that your environment is set up correctly by opening up a terminal or command prompt and typing:

```bash
$ go version
```

If everything is set up correctly, you should see something like this printed:

```bash
go version go1.20.5 darwin/arm64
```

This tells you that this is Go version 1.20.5 on macOS. (Darwin is the operating system at the heart of macOS, and arm64 is the name for the 64-bit chips based on ARM’s designs.) On x64 Linux, you would see:

```bash
go version go1.20.5 linux/amd64
```

## Troubleshooting Your Go Installation

If you get an error instead of the version message, it’s likely that you don’t have go in your executable path, or you have another program named go in your path. On macOS and other Unix-like systems, use `which go` to see the go command being executed, if any. If nothing is returned, you need to fix your executable path. If you’re on Linux or BSD, it’s possible you installed the 64-bit Go development tools
on a 32-bit system or the development tools for the wrong chip architecture.

> Go programs compile to a single native binary and do not require any additional software to be installed in order to run them. This is in contrast to languages like Java, Python, and JavaScript, which require you to install a virtual machine to run your program. Using a single native binary makes it a lot easier to distribute programs written in Go. Developers who use Docker or Kubernetes can often package a Go app inside a scratch or distroless image.

This guide will assume you are on a Unix environment like Linux or Mac. If you're on Windows you may have to use `powershell` or do just a *bit* of Google-ing or ask in Discord to figure out how some commands translate to Windows.
If you are on Windows, I'd optionally recommend checking out [WSL (Windows Subsystem for Linux)](https://docs.microsoft.com/en-us/windows/wsl/install) so that you can work in a Unix environment on your local machine.

> Make sure to use at least Go version `1.20`.
