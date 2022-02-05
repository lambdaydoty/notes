# Rigorous Software Development

## Propositional Logic

### Syntax

The alphabet of the Logic is organized into:

1. Connectives
  1. `⊥` (*absurdum*)
  2. `¬` (*negate*)
  3. `∧` (*conjunction*)
  4. `∨` (*disjunction*)
  5. `→` (*implication*)
2. Auxiliaries `(`, `)`
3. Propositions: `P, Q, R, ... ∈ Prop`

The set of *formulas* of propositional logic is given by

```
Form ∋ A, B, C ::= P
                 | ⊥
                 | (¬A)
                 | (A∧B)
                 | (A∨B)
                 | (A→B)
```

The `P, Q, R, ...` and `⊥` are *atomic* formula.

The element of `Form` are also called *propositions*.

Conventions:

1. Outmost parentheses are usually dropped.
2. Parentheses are used to order operations, if confused, the following priority are enforced: `¬, ∧, ∨, →`
3. All binary connectives are right-associative.
4. All meta-language symbols (`P, Q, R, ..., A, B, C, ...`) bind loosely w.r.t. symbols of the syntax.

### Structural Induction

> We say `A` is a *subformula* of `B` if `A` occurs syntactically within `B`

The *strict subformulas* of `A`, written `sSubF(A)` is defined inductively as follows:

1. `sSubF(⊥) = 0`
2. `sSubF(P) = 0`
3. `sSubF(¬A) = {A} ∪ sSubF(A)`
4. `sSubF(A*B) = {A,B} ∪ sSubF(A) ∪ sSubF(B)` where `*` is any one of binary connectives.

`A` is a *subformula* of `X` if `A ∈ sSubF(X)` of `A = X`


## Semantics

- A *valuation* is a function `ρ : Prop → {T,F}`.
- Given a *valuation*, the *interpretation* `[.]_ρ : Form → {T,F}` is defined inductively as follows:
  1. `[⊥]_ρ = F`
  2. `[P]_ρ = T` iff `ρ(P) = T`
  3. `[¬A]_ρ = T` iff `[A]_ρ = F`
  4. ...
- *Formula*'s *truth table*
- A *propositional model* is a set of proposition symbols `M ⊂ Prop`.
- The *validity* relation `|=` between `2^Prop` and `Form` is defined inductively as follows:
  1. `M |= P` iff `P ∈ M`
  2. `M |= ¬A` iff `M |≠ A`
  3. `M |= A∧B` iff `M |= A` and `M |= B`
  4. `M |= A∨B` iff `M |= A` or `M |= B`
  5. `M |= A→B` iff `M |≠ A` or `M |= B`
- Comments:
  1. Atomic propositions are validated according their membership in the model.
  2. The remaining clauses assign meaning to logical connectives.
  3. The two formalisations are equivalent: 
    * Each valuation `ρ` defines a model `M = { P ∈ Prop | ρ(P) = T }`
    * Conversely, each model `M` defines a valuation `ρ(P) = T`, for `P ∈ Prop`, otherwise, `F`.
    * `M_ρ(A) |= A` iff `[A]_ρ = T`
- A formula `A` is *valid* in a model `M` (or `M` satisfy `A`) iff `M |= A`.
- A formula `A` is *refuted* by a model `M` iff `M |≠ A`.
- A formula `A` is *satisfiable* iff there exists some model `M` that satisfies it.
- A formula `A` is *refutable* iff there exists some model `M` that refutes it.
- A formula is *valid* (or a *tautology*) iff every model satisfies `A`.
- A formula is a *contradiction* iff every model refutes `A`.
- Two formula `A`, `B` is *logically equivalent* (denoted by `A ≡ B`) if `A`, `B` are valid in exactly same models.
- `≡` is an equivalence relation on `Form`.
