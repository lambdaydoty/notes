import math, random

assert not not True
assert not False
assert True and True
assert not (True and False)
assert not (False and False)
assert True or True
assert True or False
assert not (False or False)

assert 1 + 1 == 2
assert 2 * 3 == 6
assert 365 // 7 == 52
assert 365 % 7 == 1
q, r = divmod(365, 7)
assert q == 52
assert r == 1

assert  3.14 < (22 / 7) < 3.15
assert 2 ** 10 == 1024

assert abs(math.sqrt(2) - 1.414) < 0.01
assert math.floor(0.5) == 0

assert max(1, 2, 3) == 3
assert max([1, 2, 3]) == 3

# Integer overflow

# Float overflow

# Complex
z: complex = 1j
assert z * z * z == z.conjugate()
assert abs(z) == 1

# Random
assert random.randint(0, 10) >= 0 and random.randint(0, 10) <= 10
assert random.random() >= 0 and random.random() < 1

assert (0xFF << 8) == 0xFF00

assert int('42', 10) == 42
