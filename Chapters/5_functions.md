# Functions

In this chapter you will learn:
  - Conditionals (`if-else` statements)
  - Loops (`for` and `while` loops)
  - Functions - how to combine and apply them to solve different problems
  - Recursions, and how it is different from loops

Except the last item, you probably have already encountered others earlier in this book. In this chapter, we shall strengthen the concepts by writing slightly more complex code that demonstrates the key ideas. From this chapter onward, there will be less textual explanation that what you have seen before in this book. Instead, you are expected to learn from the code and the comments. Building this habbit will serve you extremely well, no matter you are writing code or writing about code. As an author, I will give my best to make the code self-explanatory in terms of structure, names, and comments.

## Conditionals

In real life, the process of making decisions involves considering each of the factors that influence the final outcome. Programming is no different, as we often need our programs to carefully consider each of the possiblities that might have an effect on which course of action to take. For example, let us consider an abstracted view of picking up the right career choice for ourselves:

<table>
  <tr>
    <td><strong>How a rational mind decides a career</strong></td>
    <td><strong>How a program can mimic the process</strong></td>
  </tr>
  <tr>
    <td>
      I should learn JavaScript if I satisfy bothe the following conditions:
      <ul>
        <li>I have some amount of aptitude to think methodically and logically<li>
        <li>I have an interest in the World Wide Web.</li>
      </ul>
      Otherwise I should learn something else apart from JavaScript.
    </td>
    <td>
      <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/ifelsedecisioncode.png" />
    </td>
  </tr>
</table>
