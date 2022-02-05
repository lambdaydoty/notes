## Top Down

1. A *java program* consists of one or more files/*compilation units* of Java source code.
2. Each *compilation unit* begins with
  - an optional `package` declaration, followed by
  - zero or more `import` declarations. (These declarations specify the namespace within which the compilation unit will define names, and the namespace from which the compilation imports names.) The optional declarations are followed by
  - zero or more *reference type definitions* (`class`, `interface`, etc.)
3. Within the definition of a *reference type*, we will have *members* such as *fields*, *methods*, and *constructors*.
4. The most important kind of member, *methods*, are blocks of Java code composed of *statements*.

## Bottom up

- The Unicode Character Set
- Case Sensitivity
- Ignoring whitespace: spaces, tabs, newlines, ...
- Comments: C-style
  1. Single-line comment `// ...`
  2. Multiline comment `/* ... */`
  3. Doc comment `/** ... */`, for `javadoc`, etc.
- Reserved words
  * `const`, `goto` not used
  * `@interface` for annotations
  * `final`, `default` multiple meaning depending on context
- Identifiers
  * convention: *camel case*
- Literals: `true`, `false`, `null`, `1`, `1.0`, `'1'`, `1L`, `"one"`, ...
- Punctuation:
  1. Separators: `()`, `{}`, `[]`, `...`, `@`, `::`, `;`, `,`, `.`
  2. Operators: `+`, `-`, `?`, `:`, `->`, `>>`, ...
- 8 Primitive Types (space, default)
  1. `boolean` (1 bit, `false`)
  2. `char` (16 bits unicode, `\u0000`) ps. Java accepts UTF-8 (a var-width encoding) literals, but internally represents them in a fixed-width encoding.
  3. `byte` (signed 8 bits, `0`) I
  4. `short` (signed 16 bits, `0`) I
  5. `int` (signed 32 bits, `0`) I
  6. `long` (signed 64 bits, `0`) I
  7. `float` (32 bits, IEEE 754, `0.0`) F
  7. `double` (64 bits, IEEE 754, `0.0`) F (at least 15 significant digits)
- Strings: the special class has built-in literal support: `"Hello!"`
- Integer types: I
  * Int literal are 32-bit values: `1234`
  * Long literal are suffixed with an L: `1234L`, `0xffL`
  * Binary Literal are prefixed with 0b: `0b0010_1111`
  * Integer arithmatic never produces overflow/underflow: `(byte)(1 + 127)`
  * Division/modulo by zero cause an `ArithmeticException`
  * Each type has a corresponding wrapper class: `Byte`, `Short`, `Integer`, `Long`, with `.MIN_VALUE`/`.MAX_VALUE` constants, `.parseInt()`, ...
- Floating-point types: F
  * Double literals: `.01`, `1.34e-6`
  * Float literals: `.01f`, `1.34e-6f`
  * Special constants: `inf=1.0/0.0`, `neginf=-1.0/0.0`, `negzero=-1.0/inf`, `NaN=0.0/0.0`, `.MIN_VALUE`/`.MAX_VALUE`/`.NEGATIVE_INFINITY`/`.POSITIVE_INFINITY`
  * Floating-point arithmatic never produces overflow/underflow, instead producing special constants
- Primitive Type Conversion:
  1. *widening conversions*:
  2. *narrowing conversions*:
  3. floatings to ints:
    * directly assignment = truncattion of the frac
    * `Math.round()`
    * `Math.floor()`
    * `Math.ceil()`
  4. !See table 2-3!
