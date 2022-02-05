from itertools import accumulate, chain, combinations, combinations_with_replacement, cycle, islice, permutations, product
from functools import reduce
import operator

# accumulate
assert [*accumulate(range(1, 1+6), operator.mul)] == [1, 2, 6, 24, 120, 720]
assert reduce(operator.mul, range(1, 1+6), 1) == 720

# chain
assert [*chain([1, 2, 3], [4, 5])] == [1, 2, 3, 4, 5]

# combinations
assert [*combinations('ABC', 2)] == [('A', 'B'), ('A', 'C'), ('B', 'C')]
assert [*combinations_with_replacement('ABC', 2)] == [('A', 'A'), ('A', 'B'), ('A', 'C'), ('B', 'B'), ('B', 'C'), ('C', 'C')]

# permutations, product
assert [*permutations('ABC', 2)] == [('A', 'B'), ('A', 'C'), ('B', 'A'), ('B', 'C'), ('C', 'A'), ('C', 'B')]
assert [*product('AB', 'XY')] == [('A', 'X'), ('A', 'Y'), ('B', 'X'), ('B', 'Y')]

# islice, cycle
assert [*islice(cycle([1, 2, 3]), 7)] == [1, 2, 3, 1, 2, 3, 1]
