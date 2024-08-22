# Compiled vs Interpreted

Compiled programs can be run without access to the original source code, and without access to a compiler. This is different than interpreted languages like Python and JavaScript. With Python and JavaScript the code is interpreted at [runtime](https://en.wikipedia.org/wiki/Runtime_(program_lifecycle_phase)) by a separate program known as the "interpreter". Distributing code for users to run can be a pain because they need to have an interpreter installed, and they need access to the original source code.

![compiled vs interpreted](https://i.imgur.com/ovHaWmS.jpg)

One of the most convenient things about using a compiled language like Go for backend services is that when we deploy our server we don't need to include any runtime language dependencies like Node or a Python interpreter. We just add the pre-compiled binary to the server and start it up!