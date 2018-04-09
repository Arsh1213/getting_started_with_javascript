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
      I should learn JavaScript if I satisfy <strong>both</strong> the following conditions:
      <ul>
        <li>I have some amount of aptitude to think methodically and logically</li>
        <li>I have an interest in the World Wide Web.</li>
      </ul>
      Otherwise I should learn something else apart from JavaScript.
    </td>
    <td>
      <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/ifelsedecisioncode.png" />
    </td>
  </tr>
</table>

When there are more than two conditions to consider, you can chain the `if-else` statements to include all of them.
```javascript
if (condition1 is true) {
  takeAction1
} 
else if (condition2 is true) {
  takeAction2
}
else if (condition3 is true) {
  takeAction3
}
.
.
.
else {
  takeActionN
}
```

> __Switch-Case Statements__: Instead of using chained `if-else` statements, you can also use another powerful method - the `switch-case` statements. Although not covered as part of this book, you can learn about it from the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) or [W3Schools](https://www.w3schools.com/js/js_switch.asp).

### NOTE on the Importance of "else" 

It is often observed that programmers omit the `else` statements - they only include the `if` statement and think that else statement is not required. It's an awfully bad practice, and you must never develop that habit. The most important reason behind including the `else` statement is that you control the outcome of the program when the `if` condition is not true. For example, see what happens when you omit the `else` statement in the `should_i_learn_js()` function:

![](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/shouldIlearnJS_returnsNull.png)

Our function returned `null`, because the default value of the variable `focusOnJavaScript` was `null`, and when the conditions failed to pass the `if` statement, our program had no specific instructions for assigning any meaningful value to the variable `focusOnJavaScript`.

In a world of connected programs, where output of one function often becomes input to another, imagine what would happen if the output of `should_i_learn_js()` is passed on to a function that displays the result as HTML in a webpage! The end . user sees the cryptic `null`, which does not add value to his quest of making a solid decision!


### Example of Nested Conditional Statements

When required, you can nest the conditional statements, as illustrated below:

```javascript
// Another layer of information is added to this object
var infoMatrix = {
  programmingAptitude : {
    goodAtLogic : false,
    loveComputers : true
  },
  interestInWeb: false
};

// Nested if-else block added
function should_i_learn_js(infoMatrix) {
  // The initial decision on whether to learn JavaScript or not!
  var focusOnJavaScript = null;
  // The following if-else block determines whether you should learn JavaScript 
  if (infoMatrix.programmingAptitude.loveComputers == true) {
    if (infoMatrix.programmingAptitude.goodAtLogic == true) {
      focusOnJavaScript = "Yes";
    }
    else {
      focusOnJavaScript = "May be!";
    }
  }
  else {
    focusOnJavaScript = "No";
  }
  return focusOnJavaScript;
};

// Call the function
should_i_learn_js(infoMatrix);
```

<table>
  <tr>
    <td><img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/nestedifelse.png"></td>
  </tr>
</table>


## Loops

One of the key motivators behind writing programs is to automate processes. In other words, significant amount of programming effort goes into thinking about the repitions and redundancies involved in a process. Once we know what repeats, we can employ computers that are excellent at doing repititive tasks without any error. 

Loops are programming/algorithmic constructs that provide us a framework to concisely express the action that must be taken as long as the condition for repeating the task is met. Think of a scenario where you are watching a Formula 1 race - every time your favourite driver completes on lap, you add `1` to the number of laps completed. If the race consists of 50 laps, your algorithm to get the correct lap count would be:
  1. Let the counter be `num_of_laps`. Initially, `num_of_laps = 0`.
  2. As long as `num_of_laps` is less than or equal to `50`:
      1. Add `1` to `num_of_laps`.
      2. Stop incrementing the counter when `num_of_laps` is equal to `50`.
  3. Get the final count, i.e. the final value of `num_of_laps`

