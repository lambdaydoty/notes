from typing import Tuple, List, Callable, Generator
from functools import reduce
import operator

# define
def add3 (x: int, y: int = 0, z: int = 0) -> int:
    return x + y + z

trip: Tuple[int, int, int] = (1, 2, 3)

# invoke
assert add3(*trip) == 6
assert add3(1, 2, 3) == 6
assert add3(1, 2) == 3
assert add3(1) == 1

# variadic
def add (*trip: int) -> int:
    s: int = 0
    for x in trip:
        s += x
    return s

assert add(*[1, 2, 3]) == 6
assert add(1, 2, 3) == 6
assert add(1, 2) == 3
assert add(1) == 1
assert add() == 0

# named parameters
def equal (x: float, y: float, eps: float = 0.01) -> bool:
    return abs(x - y) < eps

assert equal(3.16 ** 2, 10, eps=0.1)

xs: List[int] = [1, 2, 3, 4]
# anonymous function
assert reduce(lambda x, y: x + y, xs, 0) == 10

# closure
def make_counter () ->  Callable[[], int]:
    i: int = 0
    def counter () -> int:
        nonlocal i
        i += 1
        return i
    return counter

counter = make_counter()
counter() # -> 1
counter() # -> 2
assert counter() == 3

# generator
def make_fibonacci (n: int) -> Generator[int, None, None]:
    a: int = 0
    b: int = 1
    for i in range(n):
        a, b = b, a + b
        yield a

assert [*make_fibonacci(8)] == [1, 1, 2, 3, 5, 8, 13, 21]

# invoke operator like function
assert operator.itemgetter(0)(xs) == 1 # xs[0]
assert reduce(operator.add, xs, 0) == 10 # x + y

