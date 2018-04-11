# Objects and Arrays

> __NOTE to Readers__: From this chapter onward, there will be less textual explanation that what you have seen before in this book. Instead, you are expected to learn from the code and the comments. Building this habit will serve you extremely well, no matter you are writing code or writing about code. As an author, I will give my best to make the code self-explanatory in terms of structure, names, and comments.

## Objects

JavaScript being a so-called "object-oriented" language, the concept of objects are central to good understanding of JavaScript code. 

One way to look at objects is to interpret with its literal meaning. In that sense, objects are everything in the physical world as well as within programs that has:
  - __`Properties`__: These are nothing but characteristics. For example, an object `human` can have properties like `num_of_limbs`, `num_of_sense_organs`, etc. Properties does not makes sense without values, and so every property in an object has a value. For our `human` object, the property `num_of_limbs` should be given value `4`, and the property `num_of_sense_organs` should have the value `5`.
  - __`Methods`__: These are actions or defined procedures that bestows behaviour on an object. The `human` object can have methods like `move()`, `eat()`, `sleep()`, and `code()`. Methods are basically functions associated with the objects, and the usual rues of defining functions applies to methods too.
  
> __`Properties`__ and __`Methods`__ of objects can either be defined as their __`own`__, or can be __`inherited`__. Think of the analogy where human babies can be programmatically represented as objects. They develop certain characteristics (properties) and skills (methods) that are different from their parents, and are therefore their own! On the other hand, they also inherit a vast amount of characteristics and skills from their parents.

In JavaScript, the most common ways to initialize an object are:

```javascript
// Using braces {}
var emptyObject = {}

// Using the "new" keyword
var anotherEmptyObject = new Object(); // Explanation for this is available in the next chapter

// Most common way to write objects
var human = {num_of_limbs : 4, num_of_sense_organs : 5}
```

Objects can be _nested_ and _heterogenous_, i.e., an object can have multiple levels of other objects and arrays as values.

```javascript
/*
The general syntax of object is: 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var some_object = { // Indentation not part of syntax, but contributes to readability
                    property_1 : value_1,
                    property_2 : value_2,
                    .
                    .
                    .
                    // Don't put "," (comma) at the end of last property's value
                    property_n : value_n  
                  };
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

// Notice the indentation; good indentation is similar to good handwriting!
var human = {
              states : ["alive", "dead", "not_born_yet"],
              gender : ["transgender", "female", "male"],
              senses : {
                          num : 5,
                          names : [                  // This is an array
                                    {eyes : 2},      // The array has objects as items.
                                    {ears : 2},
                                    {nose : 1},
                                    {tongue : 1},
                                    {skin : "not_quantifiable"}                                      
                                  ]
                        }
            };
            
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Although you can write properties of objects just like any other ordinary word,
if you use any of the JavaScript keywords as a property, you must place it within
quotes, like you would write a string literal. The example below demonstrates the 
concept.

Off course, you can wrap any other non-conflicting property within the quotes.
However, when the object containing such a property is printed on the console,
the property within quotes is treated just like any other property.
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

var book = {
            topic : "JavaScript", // normal property without quotes
            "for" : "beginners", // keyword used within ""
           };
            
```

```
EXERCISE
========
In an object, a property and its value is demarcated by " : " (spaceCOLONspace).
What happens when you erroneously put "=" instead of " : "?
Try it out in the console and think about the error.
```
