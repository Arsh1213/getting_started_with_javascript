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
// Find the "Behind the scenes" for this statement in the next chapter
var anotherEmptyObject = new Object(); 

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

### Most Common Actions for Object Manipulation

The code snippets below demonstrates some of the most common actions that are applicable for JavaScript objects. To fit the purpose of illustration, we shall use an empty object `var human = {};`.
  - __`The Big Bang Moment`__ 
      ![](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/emptyObjectBigBang.png)
      
  - __`Add properties and values`__
      ```javascript
      // General syntax
      object.property = value; // The value might be anything permissible in JavaScript
      ```
      ![](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/addProperty.png)
      
      > __Find out what happens when you try to add a property that already exists in the object.__
      
  - __`Query values of properties`__
      ```javascript
      // Genral syntax
      
      // For console mode
      object.property;
      
      // When used in full-fledged programs
      var propVal = object.property; // Value of property gets stored in the variable
      console.log(propVal); // Optional; only if you want the value to be printed on the console
      ```
      ![](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/queryProperty.png)
      .......................................................................................................
      ![](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/queryNestedValueForArray.png)
      
      > __Find out what happens when you query a property that does not exist.__
      
  - __`Set/Modify values of properties`__
      ```javascript
      // General syntax
      
      /*
      Remember that for modifying a property's value, the property must exist.
      If not, the code will be interpreted as "a new property and its value must be added".
      */
      object.property = newValue;
      ```
      ![](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/modifyProperty.png)
      
      > __Observe in the output there are lines like `states : Array(4)`, followed by lines like `0: "unborn"`, `1: "alive"`, etc. What do they mean? Keep your eyes and ears open for such information that the console often provides.__      
      
  - __`Delete properties`__
      ```javascript
      // General syntax
      delete object.property;
      ```
      ![](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/deleteProperty.png)


```
EXERCISE
========

1. Although not explicitly demonstrated above, you can also write code to test existence 
   of properties and also to enumerate properties. Find out how.

2. Is any of the actions mentioned above any different for inherited properties versus own 
   properties? Prepare your own comparative analysis.

3. We discussed a bit about properties, but what about methods? Can we perform those actions 
   on methods associated with an object? Does the results differ for inherited versus own 
   methods (for example, toString() is a method that every object inherits)?
```


### Objects as Associative Arrays for Programmatic Manipulation

The value of a property in a JavaScript object can be accessed using any one of the following notations:
  - __`object.property;`__
  - __`object["property"];`__

The first method is the generalised syntax using the `.` (dot) notation, and you are quite familiar with it. When you use this notation, the name of the property is accessed as an __*identifier*__. As with identifiers, they have to be handled manually as they are not amenable to programmatic manipulation. This poses a severe bottleneck for programmatic manipulation of objects and their properties.

> You can learn more about __identifiers__ and other syntactic details of JavaScript from this [page on W3Schools](https://www.w3schools.com/js/js_syntax.asp).

Such limitations can be dealt with by using the second notation, which is essentially the `[]` (array) notation. In this notation, __*the property name is expressed as a string, which is a javaScript data type and is therefore amenable to programmatic manipulation*__. In this sense, JavaScript objects are similar to __associative arrays__ or __hash maps__ in other programming languages. 

See the example below that clarifies the difference between the two approaches.

<table>
  <tr>
    <td><strong>The limitation of the . notation</strong></td>
    <td><strong>How to make properties amenable to programmatic manipulation</strong></td>
  </tr>
  <tr>
    <td>
      <img src=""/>
    </td>
    <td>
      <img src=""/>
    </td>
  </tr>
</table>
