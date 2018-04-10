# Conditionals, Loops, and Recursions

In this chapter you will learn:
  - Conditionals (`if-else` statements)
  - Loops (`for` and `while` loops)
  - Recursions - how it's different from loops and functions

Except the last item, you probably have already encountered others earlier in this book. In this chapter, we shall strengthen the concepts by writing slightly more complex code that demonstrates the key ideas. 


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

In a world of connected programs, where output of one function often becomes input to another, imagine what would happen if the output of `should_i_learn_js()` is passed on to a function that displays the result as HTML in a webpage! The end user sees the cryptic `null`, which does not add value to his quest of making a career choice!


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

One of the key motivators behind writing programs is to automate processes. In other words, significant amount of programming effort goes into thinking about repititions and redundancies involved in a process. Once we know what repeats, we can employ computers that are excellent at doing repititive tasks without any error. 

> __Loops__ are programming/algorithmic constructs that provide us a framework to concisely express the action that must be taken as long as the condition for repeating the task is met. 

Think of a scenario where you are watching a Formula 1 race - every time your favourite driver completes on lap, you add `1` to the number of laps completed. If the race consists of 50 laps, your algorithm to get the correct lap count would be:
  1. Let the counter be `num_of_laps`. Initially, `num_of_laps = 0`.
  2. As long as `num_of_laps` is less than or equal to `50`:
      1. Add `1` to `num_of_laps`.
  3. Stop doing the repititive task when `num_of_laps` is equal to `51`.
  4. Get the final count, i.e., the final value of `num_of_laps`.

If you observe carefully, there are __three fundamental aspects of looping algorithm__:
  1. An entity on the basis of which you determine the repititive task. In this case, it's the variable `num_of_laps`.
  2. A set of _start_, _continuation_, and _end_ conditions - we have `num_of_laps = 0`, `num_of_laps <= 50` and `num_of_laps = 51` respectively.
  3. A repititive task to be performed within the boundaries of _start_ and _end_ conditions, i.e, as long as the _continuation_ condition is satisfied. In this example, it's increasing the value of `num_of_laps` by `1`, every time a lap is completed.


### "for" loop

Let's write a JavaScript statement to implement the algorithm:

```javascript
// This is called a "for" loop
for (var num_of_laps = 0; num_of_laps <= 50; num_of_laps++) {};
```

Isn't it a very succint way of representing the concept? However, this small snippet deserves some explanation for you to clearly understand each of it's components.

  - The entity on the basis of which we loop, and the start condition, is `var num_of_laps = 0`.
  - The continuation condition is `num_of_laps <= 50`.
  - The end condition is `num_of_laps = 51`. 
  - The last repititive action is `num_of_laps++`. It means increase the value of the variable by `1`.
  - Empty braces `{}` means don't do anything, but jump directly to `num_of_laps++` - the last action.
  
Generally you will write code within the `{}` to perform repititive tasks.
For example, if you want to add `10` points for each lap completed, the code will be:
```javascript
var points = 0;
for (var num_of_laps = 0; num_of_laps <= 50; num_of_laps++) {
  points += 10; // Increase the point by 10 before incrementing the counter.
}
```

Understand the above code snippet very carefully, because it conveys the essence of the concept of `for` loops. We shall resort to our favourite technique of thinking like a computer. So assume that you are the computer, and it's your job to do what the code asks you to do. 
  - The first line is `var points = 0`. I know the routine!
      - I have to allocate a memory block for a number data type
      - Store the location as a pointer
      - Associate the block with the string `points`
      - Put `0` inside the allocated memory block
  - Ah, it's a `for` loop... Let me see what I need to do.
      - Set the variable `num_of_laps` to `0`, just like I did for the first line of code. Pretty straight forward! Oh, I see   something even after `;` - it smells like a counter! Let me confirm...
      - I was right - a counter it is! There is a _continuation_ condition `num_of_laps <= 50`. Cool, I will keep that in mind and  check this condition every time I iterate (start over again) through this loop. I know there will be a "last repititive action" after this, but I will look into it later. Let me check what else I need to do. I'm sure I will get further instructions within the `{}`.
      - Hmm... doesn't seem to be much of heavy lifting - all I need to do is:
          - Read the current value of the variable `points`. Since this is my first iteration, the value will be same as the initial value `0`.
          - Add `10` to the current value. Ok, so `0 + 10` becomes `10`. Similarly, the next time I come to this line of code, I will make the value `20`, and then `30`, and so on. I will continue doing it till I reach the end condition of the loop. Hey human reader... Yes you... You think you are smart and I'm dumb? So tell me, what will be the final value of `points` when I finish looping 50 times? 
          - Overwrite the new value in the memory location. So I erase the old value `0`, and write the new value `10`. In the next iteration, when I read the value of the variable `points`, I will get `10`.
      - No further instructions! Thanks to the programmer... Oh, I almost forgot, I need to perform the last repititive action that I skipped earlier!
          - I just have to add `1` to the current value of `num_of_points`. That's easy... I have done similar thing just now! I read that the current value of `num_of_laps` is `0`, and I add `1` to it. So the new value of `num_of_laps` is `1`. The next time I come here, I will see 1 and make it 2, and then 3, and then 4, and so on. I will have to do this till I reach the 50th lap, when I will make it `51`. When I read the value `51` and check it against the condition `num_of_laps <= 50`, it's bound to fail and I will exit the loop!


### "while" loop

Let's explore another approach which is slightly verbose:
```javascript
var num_of_laps = 0; // start condition
var points = 0;

// This is called a "while" loop
while (num_of_laps <= 50) { // continuation, or end condition
  points += 10 // Increase points by 10
  num_of_laps = num_of_laps + 1; // last repititive action
}
```

The `while` loop expresses the same idea as that of a `for` loop, but with a different syntax. Almost all `for` loop statements can be expressed as `while` loops and vice-versa. For some, the `for` loop is intuitive to grasp, while for others it's the `while` loop. However, `while` loops can be disastrous if not handled carefully, as explained in the next sub-section.

#### The danger of "while" loops
The syntax of `for` loops, with clear distinction between the different components of the `start-continue-repeat-end` paradigm, provides a safety net for the less careful programmer. But not the `while` loops! The `while` loop hands over the control to the programmer, and waits for the opportunity to devastate a program. 

`while` loops simply translate into this - "As long as a certain condition is satisfied, continue doing what I have asked for". This sort of instruction to computers can lead to never-ending or infinite loops, thus consuming large chunks of memory or even system crashes. Now let's consider an example where a careless implementation can lead to devastation.

```javascript
// Modify our function to calculate square root
function calcsqRoot(num) {
  while (typeof(num) == "number") { // The danger looms!
    if (num >= 0) {
      console.log(Math.sqrt(num));
    }
    else {
      console.log("Not a good input!");
    }
  }
}

// Next step - call the function and pass an input to it.
// calcSqRoot(your_input_here);
```

Copy the function and paste it on the browser's console. Then call the function and pass any real number as an argument to it.

Take a coffee break for 10 minutes. 

When you return to your computer and try to do something useful, tell me how it feels. Hmm... lesson learned!

### Notes on Increment/Decrement Operations

lorem ipsum

## Recursion

There are two ways of solving the problem of repitition - `iteration` and `recursion`. We have discussed `iteration` without introducing the concept formally. In this sub-section, you will learn about the core concepts of `iteration` and `recursion`, and understand how these two concepts compliment each other for writing elegant code.

> The `for` and `while` loops are agents of `iteration`, where an `iterator` is an entity that traverses the journey of loops by shifting it's association with different items of the `iterable`. 

The above definition, although correct, is quite abstract and difficult to understand. Let's consider an example that illustrates the concepts.

```javascript
// Example to understand the concept of iteration

/*
Consider an array, which is nothing but an indexed list of item.
Unlike lists, each item in an array has an index.

++++++++++++++++++++++++++++++++++
An array is an iterable entity, since we can iterate through its different elements
++++++++++++++++++++++++++++++++++

In JavaScript and many other programming languages, the starting 
index is 0 (zero). To generalise, the 'k'th item has index (k-1).
Thus if an array has N items:
  - The first item has an index 0
  - The second item has an index 1
  - The third item has an index 2
  .
  .
  .
  - The (N-1)th item has an index (N-2)
  - The Nth item has an index (N-1)
*/

function itemLengthCalculator(someArray) {
  var nameLengths = {}; // This empty object will eventually be filled with items and their lengths.
  for (var indx = 0; indx < someArray.length; indx++) { // "indx" is our iterator
    // The general syntax to access an item is "array[index_of_item]"
    var itemString = someArray[indx]; // Array is an iterable entity; "indx" iterates through each element of the array    
    // "itemString" contains a string, which has 'length' method
    var noOfCharsInString = itemString.length;   
    // Adds a property and its value to the object, or modifies for an existing property
    // The general syntax is object[property] = value
    nameLengths[itemString] = noOfCharsInString;
  }
  return nameLengths;
}


var dataVizLib = ["FusionCharts", "HighCharts", "D3"]; // An array with 3 items.

itemLengthCalculator(dataVizLib); // Call the function and pass the array "dataVizLib"

```

![]()
