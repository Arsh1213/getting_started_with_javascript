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
BTW, this is an example of long-form comment.
*/
// Example of Array
var wish_list = ["billionaire", [0, 'binary', 1], 69, {thisObject : "isAwesOme"}];
var another_array = [0,1,2,
                     3,4,5,
                     6,7,8];
                     
// Example of Object
// Also, example of well indented code
var data_point = {
                  x_axis : {
                            label : "Year", 
                            values : ["1990", "1995", "2000", "2005", "2010", "2015", "2012"],
                            },
                  y_axis : {
                            label : "Revenue (in million USD)",
                            values : [0, 25, 50, 75, 100, 125, 150, 175, 200, 250, 300, 350, 400],
                            },
                 };
```

> __NOTE:__ Don't worry if you feel that you have been thrown into the deep end of the pool and you know nothing about swimming. As you progress in your journey of become a programmer, frustration will be your partner and [imposter syndrome](https://en.wikipedia.org/wiki/Impostor_syndrome) will be your spouse. In his chapter and the subsequent ones, we will slowly go through the details of each of the elements mentioned above, and some more.    

