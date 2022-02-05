# Summary

## Propositions

- *Fully Parenthesized Propositions* (with 5 operators, 2 constants)
  ```BNF
  <proposition> ::= T | F | <identifier>
                  | ( ¬ <proposition> )
                  | ( <proposition> ∧ <proposition> )
                  | ( <proposition> ∨ <proposition> )
                  | ( <proposition> ⇒ <proposition> )
                  | ( <proposition> = <proposition> )
  ```

## Evalutaion of Propositions over States

> Here, for clarity, we distinguish *expressions T, F* with their *values true, false*

- *Constant Propositions*:
  1. *T -> true*, *F -> false*
  2. *∧, ∨, ¬, ⇒, =*: via truth table
  3. composition: repeatly applying 1 and 2
- Evalutaion Propositions in a *State*.
  * A *state* is a function *s: { identifiers } => { true, false }*
  * A proposition *e* is *well-defined* in *s* if every identifiern in *e* is in the domain of *s*.
  * *<s,e> = eval_s(e) := eval(e by replacing ids with their values in s)*
- A *tautology* is a proposition *e* that is true in every state in which it is well-defined.
  > for all *s* in which *id(e) ⊂ domain(s)*, *<s, e> = true*

## Galois Connection

- A proposition *represents*, or *describes*, the set of states in which it is true. Conversely, for any set of states containing only identifiers associated with *true/false*, we can derive a proposition that represents that state set. Examples:
  * *T* represents the set of all states (*U*).
  * *F* represents the set of no states (*∅*).
  * *α: (b ∧ c ∧ d)* represents the set *A = {{ (b, true), (c, true), (d, true) }}*.
  * *β: (b ∧ c ∧ d) ∨ (¬b ∧ c ∧ ¬ d)* represents the set *B* of two states:
    - *{ (b, true), (c, true), (d, true) }* and
    - *{ (b, false), (c, true), (d, false) }*.
  * If *α => β* we say the following equivalent statements:
    1. *α* is stronger than *β*;
    2. *β* is weaker than *α*;
    3. *β*'s set of states includes *α*'s (and possible more)

*F => α => β => T*
*∅ ⊂  A ⊂  B ⊂  U*

## Reasoning using Transformations

1. The Laws of Equivalence
  - Propositions *E1* and *E2* are *equivalent* if *E1 = E2* is a tautology. In this case, *E1 = E2* is called an *equivalence*.
  - Examples of equivalences are the following *laws*:
    1. Commutative Laws: *E1 ∧ E2 = E2 ∧ E1*, ... (reordering `and`, `or`, `equals`)
    2. Associative Laws: *E1 ∧ E2 ∧ E3 = *, ... (allowing dispense with parentheses)
    3. Distributive Laws
    4. De Morgan's Laws
    5. Law of Negation
    6. Law of the Excluded Middle: *E1 ∨ ¬E1 = T*
    7. Law of Contraditction: *E1 ∧ ¬E1 = F*
    8. Law of Implication
    9. Law of Equality
    10. Laws of or-simplification
    11. Laws of and-simplification
    12. Laws of Identity
2. The Rules of Substitution and Transitivity
