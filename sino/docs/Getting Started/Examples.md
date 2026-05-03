# Examples

This page shows real examples of Sino in action.

(These use: [sino.string](/sino/docs/Standard%20Library/string) and [sino.array](/sino/docs/Standard%20Library/array))

---

# Sorting and Processing Data

```sin
import Arr from "sino.array"

class Person
    field name
    field age

    func Self:new(name, age)
        self.name = name
        self.age = age
    end
end

let people = {
    Person("Chloe", 20),
    Person("Adam", 25),
    Person("John", 19)
}

people
|> Arr:sort(func(a, b) => a.name < b.name)
|> Arr:each(func(person) => print(person.name))
```

Output:

Adam

Chloe
    
John

# Transforming Data

```sin
import Arr from "sino.array"

let numbers = {1, 2, 3, 4}

numbers
|> Arr:map(func(x) => x * 2)
|> Arr:each(func(x) => print(x))
```

Output:

2

4

6

8

# String Templating

```sin
import Str from "sino.string"

"Hello, {name}!"
|> Str:template({name = "John"})
|> print()
```

Output:

Hello, John!

# Destructuring

```sin
let person = {name = "Alice", age = 30}

let {name, age} = person

print(name)
print(age)
```

Output:

Alice

20

# Classes and Methods

```sin
class Counter
    field value

    func Self:new()
        self.value = 0
    end

    func increment()
        self.value += 1
    end
end

let c = Counter()

c:increment()
c:increment()

print(c.value)
```

Output:

2

# Using Refs

```sin
let x := 10
let y = x

y := y^ + 5

print(x^) -- 15
```