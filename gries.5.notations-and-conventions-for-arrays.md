## 3 Views of Arrays

1. *b[0], b[1], ..., b[n-1]* is considered to be *n* indepedent *subscripted variables*, each of type *integer*.
2. Array *b* is considered to be a *partial function: b* with *b[i]* denotes *function application*.
3. Picture View
```
   0         k           n
  ._________._._________.
b |_..._____|_|_..._____|

```

## Array "Modification"

Let *b* be an array, *i* an expression and *e* an expression of the type of the array elements.
Then *(b; i:e)* denotes the array taht is the same as *b* except at *i*:

- *(b; i:e)[j] = b[j]* for *j!= i***
- *(b; i:e)[i] = e*

Successive Modification

...

## Array Sectioon

- *b = b[0,n-1] = b[0;n)*
- *b[i:j] = b[i:j+1)*

