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
Where to write JavaScript code
What are the right tools for writing code
Some trivial examples of JavaScript code
Some generic techniques for program flow and control

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
    JavaScript file even before the content of the page, i.e., the html 
    is loaded. However, such activities of the browser often makes the 
    page load painfully slow, and is thus not recommended unless absolutely
    necessary. As a best practice, load javascript files after the content 
    has been loaded, by placing them near the end of the "body" tag. -->
    <script type="text/javascript" src="dependency/fusioncharts/js/fusioncharts.js"></script
  </head>
  <body>
    <h1>JavaScript Demo</h1>
    <button>See Current Time</button>
    <>
  </body>
</html>
```
