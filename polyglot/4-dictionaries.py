from typing import Dict

# dictionaries
d = {
    'name': 1,
    'name!': 1,
    (1, 2): 3,
}

assert d['name'] == 1
assert d.get('name?', -1) == -1
assert 'name' in d
assert d[(1, 2)] == 3

assert d.get('name!', -1) == 1
del d['name!']
assert d.get('name!', -1) == -1

d.setdefault('name!', 0) # JAVA's putIfAbsent
assert d['name!'] == 0

# from entries
assert dict(foo=1, bar=2) == dict([
    ('foo', 1), # tuple
    ('bar', 2), # tuple
])

# merge
assert dict(x=1, y=2, z=3) == {
    **{ 'x': 1, 'y': 0 },  # unpacking operator
    **{ 'y': 2, 'z': 3 },
}

map: Dict[str, int] = { 'foo': 1, 'bar': 2 }

# iteration
for k, v in map.items():
    assert type(k) is str
    assert type(v) is int

assert [*map.keys()] == ['foo', 'bar']
assert [*map.values()] == [1, 2]
