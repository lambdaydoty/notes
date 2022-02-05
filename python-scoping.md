https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces

- A *namespace* is a MAPPING from names to objects. Examples are:
  * the set of built-in names (`abs()`, `exceptions`);
  * the global names in a *module*;
  * the local names in function invocation;
  * (in a sense) the set of attributes of an object;
- There is no relation between names in different namespaces;
- An *attribute* is any name following a dot (`real` in `z.real`, `functname` in `modname.functname`);
- *Attributes* may be read-only or writable (`modname.the_answer = 42`);
- *Namespaces* are created at different moments. For example:
  * the built-in namespace is created when the Python interpreter starts up;
  * the global namespace for a module is created when the module definition is read in;
  * the local namespace of a function is created when the function is called; (and deleted when the function returns/raises an exception)
  * the recursive invocations each have their own local namespaces;
- A *scope* is a TEXTUAL REGION of a Python program where a namespace is "directly accessible"(an *unqualified reference* to a name attempts to find the name in the namespace).
- A *scope* is determined statically, used dynamically.
  1. the *innermost scope*, which is searched first, contains the local names;
  2. the *scopes of any enclosing functions*, which are searched starting with the nearest enclosing scope, contains non-local names, non-global names;
  3. the *next-to-last scope* contains the current module's global names;
  4. the *outermost scope*, which is searched last, is the namespace containing built-in names;
