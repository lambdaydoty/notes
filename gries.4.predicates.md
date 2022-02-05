# 4 Predicates

## 4.1 Extending the Range of States

- *Boolean(i)*: identifier *i* can be associated only with *T* or *F*.
- *Natural(i)*: identifier *i* can be associated only with a member of *{0, 1, 2, ...}*.
- *Integer(i)*: identifier *i* can be associated only with a member of *{..., -2, -1, 0, 1, 2, ...}*.

Each identifier will have a associated __type__!

- *atomic expressions*: *x < y*, ...
- *predicates*: *((x < y) ∧ c) ∨ d)*, ...
- Evaluating predicates
- Reasoning about atomic expressions
- The operators __cand__ and __cor__: extended for undefined value *U*, *T*, *F*
  * __cand__ and __cor__ are NOT commutative.
  * Associativity holds.
  * Distributivity holds.
  * De Morgan holds.
  * Excluded Middle holds.
  * __cor__ simplification
  * __cand__ simplification

## 4.2 Quantification

1. *(E i: m <= i < n: E_i)* is defined to be *E_m ∨ ... ∨ E_{n-1}*, the *existential quantification*.
2. *(Σ i: m <= i < n: s_i)* is defined to be *s_m + ... + s_{n-1}*, the *sum quantification*.
3. *(Π i: m <= i < n: s_i)* is defined to be *s_m * ... * s_{n-1}*, the *product quantification*.
4. *(A i: m <= i < n: E_i)* is defined to be *E_m ∧ ... ∧ E_{n-1}*, the *universal quantification*.
5. *(N i: m <= i < n: E_i)* is defined to be the *number* of different values *i* in range *[m, n)* for which *E_i* is true, the *counting quantification*.

with degenerated cases:

1. *(E i: m <= i < m: E_i) = F*
2. *(Σ i: m <= i < m: s_i) = 0*
3. *(Π i: m <= i < m: s_i) = 1*
4. *(A i: m <= i < m: E_i) = T*
5. *(N i: m <= i < m: E_i) = 0*

Useful results:

- *(E i: m <= i < n: E_i) = (N i: m <= i < n: E_i) >= 1*
- *(A i: m <= i < n: E_i) = (N i: m <= i < n: E_i) = n-m

1. (E i: m <= i < n: E_i) ∨ (E i: m <= i < p: E_i) = (E i: m <= i < p: E_i)**
2. (Σ i: m <= i < n: Σ_i) + (Σ i: m <= i < p: Σ_i) = (Σ i: m <= i < p: Σ_i)**
3. (Π i: m <= i < n: Π_i) * (Π i: m <= i < p: Π_i) = (Π i: m <= i < p: Π_i)**
4. (A i: m <= i < n: A_i) ∧ (A i: m <= i < p: A_i) = (A i: m <= i < p: A_i)**
5. (N i: m <= i < n: N_i) + (N i: m <= i < p: N_i) = (N i: m <= i < p: N_i)*

Exercies:

1. empty string *ε*
2. (omit)
3. (omit)
4. *(N i: 0 <= i < n: b[i]=x) = (N i: 0 <= i < m: c[i]=x)*
5. *(A k: 0 <= k < n: (N i: 0 <=i<n: b[k]=b[i]) = (N j: 0<=j<n: b[k]=c[j]))*
6. Given *b[0:n)* and *0 <= j <= k+1 < n*:
  1. All elements of *b[j,k)* is zero: *(A i: j<=i<k: b[i]=0)*
  2. No values of *b[j,k)* is zero: *(A i: j<=i<k: b[i]!=0)*
  3. Some values of *b[j,k)* is zero: *(E i: j<=i<k: b[i]=0)* or *(N i: j<=i<k: b[i]=0) > 0*
  4. All zeroes of *b[O:n)* are in *b[j:k]*: *(A i: 0<=i<n: b[i]=0 => j<=i<k+1)* or *(0<=i<n cand b[i]=0) => j<=i<k+1*

## 4.3 Free and Bound Identifiers

## 4.4 Textual Substitution

For expression *E*, regarded as a function of identifier *x*, we write *E^x_z = E(z)*

Requirements:
1. The substitution *E^x_z* must yield a syntactically correct predicate.
2. If the substitution would cause an identifier in *e* to become bound, then a suitable replacement of bound identifiers in *E* must take place before the substitution in order to avoid the conflict.

*Simultaneous substitution*

## 4.5 Quantification Over Other Range

- *(E i: R: E)*
- *(A i: R: E)*

1. *i* is an identifier
2. *R*, *E* are predicates

## 4.6 Some Theorems About Textual Substitution and States



