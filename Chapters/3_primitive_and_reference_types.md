# Primitive and Reference Types

If you have read the previous chapter [Programming 101](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Chapters/2_programming101.md), then by now you should have a decent idea about data types. In this chapter, we shall learn about the data types and structures in context of JavaScript. Most importantly, you will learn the concept of __mutability__, which is extremely important to master for writing bulletproof code.

## Data Types in JavaScript

![](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/dataTypes.png)    

To get a feel of what these data types are, and what they look like, go through the following code snippet:    

```javascript
// var means variable in JavaScript

// Examples of Number
var an_integer = 9;
var a_fraction = -0.54;

// Examples of String
var language = "JavaScript";
var initial = 'J';

// Examples of Boolean
var newbie = true;
var pro = false;

// Example of null and undefined, which are special
var proficiency = null;
var goal; // The variable named goal becomes an undefined variable

/*
Arrays and Objects can be heterogenous and nested.
You will see what it means in the following examples.
BTW, /* ... */ is suitable for long-form comments.
*/
// Example of Array
var wish_list = ["billionaire", [0, 'binary', 1], 69, {thisObject : "isAwesOme"}];
```
