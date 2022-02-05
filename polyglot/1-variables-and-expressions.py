from typing_extensions import Final

g = 1

def app () -> None:
    global g

    X: Final = 42
    y: int = 41
    Z: Final = None

    a, b = 1, -1
    a, b = b, a

    g += 1
    y += 1
    # X += 1

    print(dict(g=g, X=X, y=y, Z=Z, a=a, b=b))
    print(f"Z is None? {Z is None}")
    print(f"X is {'even' if X % 2 == 0 else 'odd'}.")

app()
