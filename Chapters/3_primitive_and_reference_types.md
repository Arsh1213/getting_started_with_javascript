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

> __NOTE:__ Don't worry if you feel that you have been thrown into the deep end of the pool and you know nothing about swimming. As you progress in your journey of become a programmer, frustration will be your partner and [imposter syndrome](https://en.wikipedia.org/wiki/Impostor_syndrome) will be your spouse. In this chapter and the subsequent ones, we will slowly go through the details of each of the elements mentioned above, and some more.    

## Data Types and Mutation

JavaScript data types are categorized under two themes - __Primitive__ and __Reference__. There is a profound reason behind this categorization. In this section, we shall explore _why, or on what basis, the data types are categorized_.

### Mutation

Bring your mind back to JavaScript if the topic reminds you of _X Men_ - the theme of several blockbuster Hollywood movies. In context of programming, __mutation__ implies the phenomenon of changing or overriding the originally defined values and capabilities of entities involved in a program. When mentioned as a property of data types, we use the terms __mutable__ and __immutable__, depending on whether the concerned data types can be mutated or not. The core concept of mutation is common accross all programming languages, although the specifics of applicability may vary depending on the context.

To get a feel of mutation in JavaScript, consider the following illustration from the JavaScript interpreter embedded within the Chrome browser:

<table>
  <thead>
  </head>
  <tbody>
    <tr>
      <td>
        <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/immutableNumber.png"/>
      </td>
      <td>
        <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/mutableObject.png"/>      
      </td>
    </tr>
    <tr>
      <td>
        <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/immutableText.png"/>
      </td>
      <td>
        <img src="https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/mutableText.png"/>      
      </td>
  </tr>  
  </tbody>
</table>


