
# try-catch-finally
foo: int = 1
try:
    raise Exception('test')
except TypeError:
    assert False
except SyntaxError:
    assert False
except Exception as e:
    assert isinstance(e, Exception)
    assert str(e) == 'test'
    foo += 1
finally:
    foo **= 2

assert foo == 4

# threads
"""TODO"""

# asyncio
import asyncio
from typing import Awaitable

async def main () -> None:
    print('main:', 'start...')
    await asyncio.sleep(1)
    print('main:', '1 sec.')

asyncio.run(main())
