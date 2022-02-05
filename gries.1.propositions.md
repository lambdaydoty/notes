# 1 Propositions

## Fully Parenthesized Propositions

1. `T`, `F` are propositions.
2. An *identifier* is a proposition.
3. If *b* is proposition, so is *(¬b)*.
4. If *b* and *c* are propositions, so are *(b∧c)*, *(b∨c)*, *(b⇒c)*, and *(b=c)*.

```BNF
<proposition> ::= T | F
                | <identifier>
                | ( ¬ <proposition> )
                | ( <proposition> ∧ <proposition> )
                | ( <proposition> ∨ <proposition> )
                | ( <proposition> ⇒ <proposition> )
                | ( <proposition> = <proposition> )
```

The five operators in writable form are
1. a negation *¬*: *(__not__ b)*
2. a conjunction *∧*: *(b __and__ c)*, operands *b, c* are called *conjuncts*.
3. a disjunction *∨*: *(b __or__ c)*, operands *b, c* are called *disjuncts*.
4. an implication *⇒*: *(b __imp__ c)*, *b* is called it's *anticedent*; *c* is called it's *consequent*.
5. an equality *=*: *(b __equals__ c)*

## Evalutaion of Constant Propositions

1. for proposition *e* with no operators: the *value* of *T* is *T*, *F* is *F*.
2. for proposition *e* with one operator: the *value* of *e* is given by the classic truth table.
3. for propositions *e* with more than one operator: repeatly applying the rule 2.

## Evalutaion Propositions in a State

- A __state__ *s* is a function from a set of identifiers to the set of values *T* and *F*.
- A proposition *e* is __well-defined__ in state *s* if each identifier in *e* is in the domain of *s*.

We rewrite the BNF of propositions as follows:

```BNF
<proposition>  ::=  <proposition> = <implication>  |  <implication>
<implication>  ::=  <implication> ⇒ <expression>   |  <expression>
<expression>   ::=  <expression>  ∨ <term>         |  <term>
<term>         ::=  <term>        ∧ <factor>       |  <factor>
<factor>       ::=  ¬ <factor>
                 |  T
                 |  F
                 |  <identifier>
                 |  ( <proposition> )
```

Now we can define the value of proposition *e* in state *s*: *s(e) = <e, s>* as follows:

1. `s( <proposition> ) = s( <proposition> ) = s( <implication> )`
2. `s( <proposition> ) = s( <expression> )`
3. `s( <implication> ) = s( <term> ) = s( <factor> )`


## 1.4 Precedence Rules for Operators

1. Sequences of the same operator are evaluated from left to right.
2. __not__ > __and__ > __or__ > __imp__ > __equals__.

## 1.5 Tautologies

- A __Tautology__ is a proposition that is true in every state in which it is well-defined.
- Examples:
  * *T*
  * *b ∨ ¬b*

## 1.6 Propositions as Sets of States

- A proposition *represents*, or describes, the set of states in which it is true.
- Conversely, for any set of states containing only identifiers associated with *T* or *F* we can derive a proposition that represents that state set.
- Examples:
  * *F* represents *Ø*.
  * *T* represents universe (the set of all states).
  * *(b ∧ c ∧ d) ∨ (¬b ∧ c ∧ ¬ d)* represents the set of two states:
    - *{ (b, T), (c, T), (d, T) }* and
    - *{ (b, F), (c, T), (d, F) }*.

- When we have *c ⇒ b*, we say the following equivalent descriptions:
  * Proposition *b* is __weaker__ than *c*.
  * Proposition *c* is stronger than *b*.
  * *b*'s set of states __includes** *c*'s (and possible more)
- The weakest proposition it *T* or any tautology;
- The strongest is *F*.

## 1.7 Transforming English to Propositional Form

