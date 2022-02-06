# 1 Predicate Calculus

- A *predicate* is a boolean function `P: X -> {false,true}`, called a *predicate on X*.
- Mostly our `X` will be a *state space* defined by a set of program variables:
  `X = Τ.1xΤ.2x...` viewed as a Cartesian product of the variable types.
- Examples of predicates are:
  1. `(x >= y): ZxZ -> {false,true}` with `(3,2) |-> true`, `(2,2) |-> true`, `(1,2) |-> false`, ...
  2. `(x==2 ∧ x==3): ZxZ -> {false,true}` with `(2,3) |-> true`, `(x,y) |-> false` for all `(x,y) != (2,3)`
  3. `true: X -> {false,true}` defined by constantly `true`
  3. `false: X -> {false,true}` defined by constantly `false`
- Given predicates `P, Q: X -> {false,true}`, five operators of predicates are defined:
  1. `∧` (*conjunction*): `P∧Q` is the predicated: `(P∧Q): X -> {false,true}`, so that `(P∧Q)(x)=true` iff `P(x)=true` and `Q(x)=true`.
  2. `∨` (*disjunction*): `P∨Q` ...
  3. `≡` (*equivalence*): `P≡Q` ...                                   , so that `(p≡Q)(x)=true` iff `P(x)=Q(x)`.
  4. `⇒` (*implication*): `P⇒Q` ...                                   , so that `(P⇒Q)(x)=false` iff `P(x)=true` and `Q(x)=false`.
  5. `¬` (*negation*):    `¬P`  ...                                   , so that `(¬P)(x)=true`  iff `P(x)=false`.
- Conventions:
  1. We also write `Q⇐P` for `P⇒Q`.
  2. To avoid parentheses, we enforces the following priorities: `¬` > `∧` > `∨` > `⇒` > `≡`.
  3. Operators are left-binding.
- We are often interested in predicates _*hold*_ everywhere. Denote by `[P]` iff the proposition `P` is `true` for all states.
  1. `[P≡Q]` means `P`, `Q` denote the same function.
  2. Following above, `Q` may be *substituted* for any occurrence of `P` in in an expression `R` without changing the value of `R`.
  3. Common Laws are ...
    - *idempotence*: `[P∨P ≡ P]`, `[P∧P ≡ P]`
    - *commutativity*: `[P∧Q ≡ Q∧P]`, `[P∨Q ≡ Q∨P]`, `[P≡Q ≡ Q≡P]`
    - *associativity*: `[(P∧Q)∧R ≡ P∧(Q∧R)]`, `[(P∨Q)∨R ≡ P∨(Q∨R)]`,  `[(P≡Q)≡R ≡ P≡(Q≡R)]`
    - *distributivity, absorption, false-true rules, de morgan, negation, implication, equivalence*.
  4. When `[P⇒Q]` holds, we say `P` is *stronger* than `Q`, `Q` is *weaker* than `P`; `true` is the *weakest* predicate; `false` is the `strongest`.
    - `[P⇒true]` for all `P`
    - `[false⇒P]` for all `P`
    - Equation in `Y`: `[Y⇒P]` has `P` as the *weakest* solution, `false` the *strongest*.
    - Equation in `Y`: `[P⇒Y]` has `P` as the *strongest* solution, `true` the *weakest*.
- *Substitution* of expression `E` for variable `x` in an expression `Q` is denoted as `Q(x := E)`, `Q(x,y := E,F)`.
  * Substition has a higher priority than all other operators.
- *Existential quantification*: `(∃i : 0 <= i < n : P.i)` denotes `P.0 ∨ ... ∨ P.(n-1)`
  * General form is `(∃i : R : P)`, where `i` is a variable called the *bound variable* or *dummy variable*, `R` is a predicate called the *range* of the quantification, and `P` is called the *term*.
  * Some properties:
    1. `[(∃i : false : P) ≡ false]`
    2. `[(∃i : i==x : P) ≡ P(i := x)]` (*one-point*)
    3. `[(∃i : R∧S : P) ≡ (∃i : R : P∧S)]` (*trading*)
    4. ...
  * *Universal quantification*: `(∀i : R : P)`
  * Some properties:
    1. `[(∀i : false : P) ≡ true]`
    2. `[(∀i : i==x : P) ≡ P(i := x)]` (*one-point*)
    3. `[(∀i : R∧S : P) ≡ (∃i : R : S⇒P)]` (*trading*)
    4. ...
  * `[P]` can also be written as `(∀x : x∈X : P)`, where `X` is the state space.
