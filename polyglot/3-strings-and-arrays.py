from typing import List
from functools import reduce

# string type
s: str = 'Hello'

assert s == 'Hello'

# string literal
greeting: str = \
'''Hello,
World!'''

assert greeting == 'Hello,\nWorld!'

# expression interpolation
assert f'1 + 1 = {1 + 1}' == '1 + 1 = 2'

# concatenation
assert 'x' + 'y' == 'xy'

# utilities
assert 'Hello'.upper() == 'HELLO'
assert 'Hello'.lower() == 'hello'
assert '-'.join(['do', 're', 'me']) == 'do-re-me'
assert 'x y  z'.split() == ['x', 'y', 'z']
assert 'Hello'.startswith('H')
assert len('Hello') == 5
assert 'Hello'[1:3] == 'el'

# bytes
b: bytes = b'\x31\x32\x33'
assert b.decode('utf-8') == '123'

# arrays
xs: List[int] = [0, 1, 2, 3]
assert xs
assert len(xs) == 4
assert xs[-1] == 3
try:
    print(xs[len(xs)])
except IndexError:
    pass

# array slice
assert xs[0:2] == [0, 1]
assert xs[1:] == [1, 2, 3]

# queues
q: List[int] = []
q.append(1) # [1]
q.append(2) # [1, 2]
q.append(3) # [1, 2, 3]
q.pop() # [1, 2]
q.insert(0, -1) # [-1, 1, 2]
q.pop(0) #[1, 2]
assert q == [1, 2]

# concatenation
assert [1, 2] + [3, 4, 5] == [1, 2, 3, 4, 5]

# replicate
assert [None] * 3 == [None, None, None]

# array iteration
for x in [0, 2, 4, 6, 8]:
    assert x % 2 == 0

# array constructors
assert list(range(0, 3)) == [0, 1, 2]
assert ['x'] * 3 == ['x', 'x', 'x']

# array iteration with indices
r03 = list(range(0, 3))
for i, x in enumerate(r03):
    assert i == x

# array reverse
assert r03[::-1] == [2, 1, 0]
assert r03 == list(range(0, 3))
r03.reverse() # in-place
r03.sort()

# array unique
dup = ['x'] * 3
assert list(set(dup)) == ['x']

# array membership
assert not 3 in list(range(0, 3))

# set operations
assert set([0, 1, 2, 2]) == {0, 1, 2}
assert {1, 2} | {2, 3} == {1, 2, 3}
assert {1, 2} & {2, 3} == {2}
assert {1, 2} - {1} == {2}
assert {1, 2} ^ {1, 2} == set() # test  for empty set

# map-filter-reduce
assert 20 == reduce(
    lambda prev, curr: prev + curr,
    [x * x for x in range(0, 6) if x % 2 == 0],
    0,
)

# universal/existential tests
assert all(x < 4 for x in range(0, 4))
assert any(x % 2 == 0 for x in range(0, 4))
