# Syntax Basics

This page covers the core syntax you need to understand the examples in Sino.

---

# Variables

```sin
let name = "John"
const age = 20
```

- let creates a mutable variable
- const creates an immutable variable

# Functions

```sin
func add(a, b)
    return a + b
end
```

Functions are defined with func and use end to close the block.

# Lambdas

```sin
func(x) => x * 2
```

Short inline functions.

Block form:

```sin
func(x) do
    print(x)
end
```

# Tables (Objects)

```sin
let person = {
    name = "John",
    age = 20
}
```

Access fields:

```sin
print(person.name)
```

# Classes

```sin
class Person
    field name

    func Self:new(name)
        self.name = name
    end

    func greet()
        print(self.name)
    end
end
```

Create an instance:

```sin
let p = Person("John")
p:greet()
```

# Arrays

```sin
let arr = {1, 2, 3}
```

Loop over values (uses [Stdlib](/sino/docs/Standard%20Library/array#arrarray-callback-2)):

```sin
Arr:each(func(val, idx) do
    print(val)
end)
```

# Pipe Operator

```sin
data
|> transform()
|> print()
```

Passes the result of one step into the first argument of the next.

# Destructuring

```sin
let {name, age} = person
```

Rename fields:

```sin
let {name: firstName} = person
```

# Ref Types

```sin
let x := 10
let y = x

y := y^ + 5

print(x^) -- 15
```

Refs allow shared mutable values.

# Imports

```sin
import Arr from "sino.array"
```