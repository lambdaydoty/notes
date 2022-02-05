# 2 Reasoning using Equivalence Transformations

> What we can do abount propositions?
> 1. evalutation (rarely performed)
> 2. transformation!

## 2.1 The Laws of Equivalence

- Propositions *E1* and *E2* are __equivalent__ if *E1 = E2* is a tautology. In this case, *E1 = E2* is called an __equivalence__.
- Examples of equivalents are the following *laws*:
  1. Commutative Laws: *E1 ∧ E2 = E2 ∧ E1*, ... (reordering __and__, __or__, __equals__)
  2. Associative Laws: *E1 ∧ E2 ∧ E3 = *, ... (allowing dispense with parentheses of __and__, __or)
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

## 2.2 The Rules of Substitution and Transitivity

- *Rule of Substitution*: Let *el = e2* be an equivalence and *E(p)* be a proposition, written as a function of one of its identifiers *p*. Then *E(el) = E(e2)* and *E(e2) = E(el)* are also equivalences.
- *Rule of Transitivity*: If *el = e2* and *e2 = e3* are equivalences, then so is *el = e3* (and hence *el* is equivalent to *e3*).

## 2.3 A Formal System of Axioms and Inference Rules

- *calculus*: a method or process of reasoning by computation of symbols.
- *propositional calculus*
- [Axioms] Any proposition that arises by substituting propositions for *El*, *E2* and *E3* in one of the Laws 1-12 is called a *theorem*.
- The *inference rule* is often written as:
  ```
    E1,..., En
  __-----------
        E
  ```
  which means if propositions *E1*, ..., *En* are therems, then so is *E*.
- A *theorem* in a fomal system is either an axiom or a proposition that is derived from one of the inference rules, Rule of Substitution or Rule of Transitivity.
- The relationship between the formal system and the system of evaluation:
  > For any tautology *e* in the sense of chapter 1, *e = T* is a *theorem* and vice versa.

## *`cand` and `cor`
