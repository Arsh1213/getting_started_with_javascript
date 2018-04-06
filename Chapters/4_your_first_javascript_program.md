# Your First JavaScript Program

If you have read the previous chapters carefully, then you should know the following:
  - Some generic programming best practices    
  - Variables    
  - Memory locations, maniplation and management     
  - Data Types - general as well as in context of JavaScript   
  - Utility of comments, and how comments are given in JavaScript    
  - Console mode of the interpreter   

The purpose of introducing you to those concepts is to prepare a strong foundation for programming. Even without writing a single line code yourself, you are in a position to think deeply about solving problems using programs, and also debug your programs analytically. 

> __Debugging__ is the activity of figuring out what's wrong with your program in terms of syntax, logic, dependencies, etc. You will debug a lot in course of your journey to become a programmer - be mentally prepared for arduous sessions. In fact, a lot of exercises you will encounter in this booklet will involve analytical debugging, which is one of the best ways to forge a deep understanding of your programs and the environment in which they execute.

In this chapter, you will learn the following:    
  - Where to write JavaScript code        
  - Some trivial examples of JavaScript code    
  - Some generic techniques for program flow and control    

## Where to write JavaScript code

Based on the situation you will be in, you might write JavaScript code in one or more of the following places:    
  - The `interactive console` of the interpreter embedded in browser    
  - A `.html` file    
  - A `.js` file    
> __NOTE__: Except when we discuss client-side JavaScript, we will write code either in the console (which is ideal for testing out concepts), or in `.js` files (which is ideal for saving the code yo wrote and refer to it later).

### Interactive Console
Although all modern browsers provide a console, in this booklet we shall follow the console provided by Google Chrome. I have no particular reason for adopting it, except that it is highly popular and has a very nice interface for other tasks involved with JavaScript programming. I would recommend that you use it too, but ultimately it's upto you to decide. 

To find the console on Google Chrome:
  1. From Chrome's Menu (the three vertical dots at the same level of the URL bar), navigate to __More Tools > Developer Tools__.    
  ![](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/chromeMenu.png)
  2. Click the __Console__ tab.
  ![](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/consoleImageChrome.png)    
  
### HTML file
There are two ways to include JavaScript code in a `.html` file - _inline_, and _pointer to another `.js` file_. Both the approaches are shown in the following snippet:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Basic JavaSript Demo Page</title>
  
    <!-- The following line of code shows you can ask the browser to load a 
    "JavaScript file" even before the content of the page, i.e., the html 
    is loaded. You can point the browser towards a JavaScript file by passing
    the path to your file as a value for the "src" attribute of the "script" tag.

    However, such activities of the browser often makes the 
    page load painfully slow, and is thus not recommended unless absolutely
    necessary. As a best practice, load javascript files after the content 
    has been loaded, by placing them near the end of the "body" tag. -->
  
    <script type="text/javascript" src="dependency/fusioncharts/js/fusioncharts.js"></script>
  
  </head>
  
  <body>
    <h3>JavaScript Demo</h3>
    <button id="time" onclick="myFunction()">See Current Time</button>
  
    <!-- The following line of code shows usage of inline JavaScript,
    which is appropriate when you code snippets are small. 
    Don't worry even if you don't understand the meaning of the code. -->
  
    <script>
      function myFunction() {
        document.getElementById("time").innerHTML = Date();
      }
    </script>
    
    <!-- The following line of code shows a best practice of loading JavaScript files 
    after the content is loaded -->
  
    <script type="text/javascript" src="dummy.js"></script>
  
  </body>
</html>
```
```
Exercise
========
Copy the above code and save it as an html file.
Comment out the lines of code where external JavaScript files are referenced.
Open the file on browser and click on the button that you see on the webpage.
Do you like what you see? Jot down what improvement you would like to have.
Go back to the html source code, read it very carefully and think about what
you see on the webpage. Can you relate parts of the code with the final outcome?
Which part of the code does what? How can you modify the behaviour of the button?
```

### JavaScript file

Outsourcing the JavaScript code to a file and the referencing it from the `.html` file using the `<script></script>` tag makes sense, because it keeps the `.html` file clean and readable. An example of such usage is given below:
```html
<DOCTYPE html>
<html>
  <!-- This html file contains just a button.
  It refernces a JavaScript file called "main.js"-->
  <head></head>
  <body>
    <script type="text/javascript" src="main.js"></script>
    <button id="time" onclick="myFunction()">See Current Time</button>
  </body>
</html>
```
> __NOTE__: Notice carefully the usage of the `<script></script>` tag in the above html - the external JavaScript file is loaded before any html content, like the button. The reason is that we want to control the behaviour of the button when it is clicked. As you can see, the `button` element has an `onclick` attribute, which is technically an __event listener__. The value of the `onclick` attribute is an entity which is not defined in the rest of the html file, but is defined in the external JavaScript file referenced from the `script` element. Therefore, for the browser to know what the value `myFunction` means, it must have it's definition readily available even before it encounters the `button` element in the html. In such cases, it is absolutely necessary to reference an external JavaScript file before the html element dependent on it is loaded. Such technicalities of client-side scripting are deeply rooted in the concept of [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

```javascript
// This is the main.js file
function myFunction() {
  document.getElementById("time").innerHTML = Date();
}
```
```
EXERCISE
========
What does DOM stands for?
Research on "DOM" and "event listeners" and prepare your own conceptual notes. 
It will be invaluable to have a good mental model of how DOM is created, and 
what are role does event listeners (and other things of the same breed, like 
"event handlers") play in the interactivity of your web pages. 
Essentially, all of front-end web development is DOM manipulation in some form 
or the other. So how exactly is DOM related to the concept of call stack? 
What is the relationship between the interpreter and the DOM?
```

#### Tools for Coding
While browser consoles are adequate as a playground, no serious coding can be done without a good text editor, or even better, an IDE (Integrated Development Environment). It is strongly recommended that you pick __any one__ of the following and master it while you learn coding:
  - [Sublime Text](https://www.sublimetext.com/)    
  - [Atom](https://atom.io/)    
  - [Visual Studio Code](https://code.visualstudio.com/)(you can also use the behemoth IDE [Visual Studio](https://www.visualstudio.com/), but that amount of firepower will rarely be required in the initial stages)    
> You can also use the online tool [JSFiddle](https://jsfiddle.net/) to test some concepts quickly or demonstrate an idea using small code snippets.


## Some Trivial Programs

### Hello World!
Keeping the tradition intact, write your first JavaScript program.
  1. Go to the browser console, type the following lines of code, and hit Enter.
      ```javascript
      console.log("Hello, World!");
      ```
  2. You will see that the console returns the string `Hello, World!`.
      ![](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/consoleLog.png)
      > `console.log()` is just like the `print` or equivalent statements found in almost all major programming languages. All it does is printing the value you have passed to it (within the parenthesis) on the console. Experiment with `console.log` as much as you want. I have done some for you - see the image above.
      
The single lines of code that you wrote just now might be trivial, but it is powerful enough to illustrate some of the key concepts in JavaScript, and programming in general. We shall disect each and every element of the code to understand what they do, and how they fit in the big picture. You will learn more about the elements in the subsequent chapters dedicated to the concepts they represent.
  1. `console` - It is a representative of the king in the JavaScript world - _Object_. Objects in JavaScript represents entities programmatically, and sometimes they are so beautifully designed that they represent physical entities. _Objects_ have _properties_ or characteristics, and they also have _methods_ or capabilities. For example, we can construct a _programmer_ object, and give a property _favouriteLanguage_ whose value is _JavaScript_. We can also give it methods or capabilities like _design()_, _writeCode()_, and _debugCode()_. 
  2. `.` - Read as "dot", this notation is extremely powerfull and pervades major programming languages like JavaScript, Python, C++, Java, C#, etc. It sits between an object and the invoked method, and denotes the association of the two. In our case, it sits between the object _console_ and its method _log_. The combination _console.log()_ is therefore an instance of the generic concept of _object.method()_, and means that the method _log()_ associated with the object _console_ is invoked when the expression is evaluated by the interpreter.
  3. `log()` - As discussed, _log_ is the name of a method associated with the object _console_. Methods are functions associated with objects that gives them capabilities to do certain things. Functions are programming constructs very similar to Mathematics, where you pass an input to it and it produces an output. In our case, you pass a value to _log_ within the _()_, and it prints the same value on the browser's console. 
  
### A Simple Function
In this example, we shall write a function to find the square root of a number you pass on to it. 
