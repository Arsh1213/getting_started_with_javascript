# Glimpse of Client-side JavaScript

By the term _client-side scripting_, we mean writing JavaScript code to manipulate the web pages after they have been received by the browser on the user's computer. JavaScript rules this part of the World Wide Web, and the only thing that stands between the desired manipulation and the programmer is her own ability and knowledge of JavaScript, the browser API, and the DOM. 

The possibilities of what can be done on the client-side using JavaScript is almost endless, and probably a lifetime is too short to learn everything that the Javascript ecosystem offers for client-side manipulation. The problems whose solutions are cumbersome in pure JavaScript are often solved in an elegant fashion by various JavaScript frameworks, each of which tries to add to the programmer's arsenal by providing a set of tools that are fit for certain types of DOM manipulation tasks.

In this chapter, we shall discuss some very rudimentary capabilities of JavaScript in context of the client-side scripting. Thick books have been written to cover only a fraction of client-side JavaScript, and __*there is no way you will develop even a faint idea of the entire spectrum of possibilities after reading this chapter*__. What's possible though is to fuel your curiosity and imagination, and to provide you the nudge for following your instinct.

To get the maximum out of this chapter:
  - Copy the code and run it on your computer to see the output.
  - Supplement it by going through the code carefully to understand what it does, and how it does.
  - Try to write somethng similar, or even better, extend the functionality of the code.
  - Do the exercises given with each of the examples. You are expected to consult the internet and other books.

Godspeed!

> __NOTE__: Screenshots for the examples below have been taken from the Chrome browser; actual rendering may vary depending on your chosen browser and its version.


## Example - Script a Button to Generate an Alert

In this example, we shall see how you can script an html element to produce alerts/warnings/pop-ups.
```html
<DOCTYPE html>
<html>
  <!-- This html file contains just a button.-->
  <head>
  	<meta charset="utf-8">
  	<title>Alert Example</title>
  </head>
  <body>
    <button onclick="alert('You are learning!');">Click Me!</button>
  </body>
</html>
```

  - The `button` element has an attribute `onclick`, which is technically an [Event Listener](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events).
  - We pass on a JavaScript statement containing the function `alert()` (notice the `;` at the end) as the the value of the `onclick` attribute.
  - The `alert()` function accepts a string as an argument - in our case it's `"You are learning!`.    
  - When the button is clicked, the browser executes the value for the `onclick` attribute, thus producing an alert.
  ![](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/alert.png)
  
Let's consider a practical use-case of this code-snippet. When you do Internet Banking and right-click on a certain html element, a pop-up/warning is displayed, saying that `"For security reasons, right-click is disabled"`. Bank websites, and many other web pages, use simlar techniques to create meaningful alerts. 

```
EXERCISE
========
1. What are the other possible attributes for a "button" element?
2. Apart from creating alerts, what else can you do with the "onclick" attribute?
   Is there a difference between "onclick" and "onClick"?  
3. Write code to send the user to an external webpage when a button is clicked.
4. The "alert()" function create something on the web page. In the JavaScript world, 
   the webpage is often called "window". Find out as much as you can about the "window"
   in JavaScript. 
5. What is the relationship between a "window" and "alert()"?
```

## Example - Element Manipulation in context of Revealing Content

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Reveal Content</title>
  <style type="text/css">
  /* CSS styles for this page */
    .reveal * {display: none;} /* Children of class="reveal" are not shown */
    .reveal *.handle {display: block;} /* Except for the class="handle" child */
  </style>
  <script type="text/javascript">
  // The "onload" method tells the browser what to do when the webpage has been completely loaded.
  // It is not executed before the page is fully loaded on the browser.
    window.onload = function() {
  // Find all container elements with the class "reveal"
    var elements = document.getElementsByClassName("reveal");
    for (var i = 0; i < elements.length; i++) {
      var elt = elements[i];
    // Find the "handle" element for each container
      var title = elt.getElementsByClassName("handle")[0];
    // When the element is clicked, reveal the rest of the content that was hidden initially
      title.onclick = function() {
        if (elt.className == "reveal") {
          elt.className = "revealed";
          } 
        else if (elt.className == "revealed") {
          elt.className = "reveal";
          }
        }
      }
    };
  </script>
</head>
<body>
  <div class="reveal">
    <button class="handle">Toggle me to reveal and hide text</button>
    <p>This paragraph is hidden. It appears when you click on the title.</p>
  </div>
</body>
</html>
```

![](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/revealHideTextToggle.png)
