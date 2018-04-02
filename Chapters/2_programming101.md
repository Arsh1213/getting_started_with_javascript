# Programming 101

In this chapter, you will learn the following basics of programming:
  - Why programming is more about thinking and less about typing    
  - Computer architecture and memory in context of data types     
  - Compilation versus Interpretation            
  - Best practices of programming and software engineering                   

While I will try my best to present the material in an objective fashion, it might get contaminated with my biases. Feel free to discard my opinions and form your own based on your experiences.     

```
NOTE TO READER:
===============

It's tempting to skip chapters when you see large chunks of text. 

When (not if) this happens - do one simple exercise:
  1. Read the next chapters and get a feel of your understanding.
  2. Come back to this chapter, internalise the material presented here, 
and the revisit the subsequent chapters. I bet that you will experience 
the difference.

I guarantee that preparing a strong foundation by internalising the material
presented in this chapter will contribute immensely to your understanding of 
many of the "why" of programming. Remember that the questions no one raises 
are the ones that are most important in having a complete understanding.

```


## Think more, type less     

[Bill Atkinson](https://en.wikipedia.org/wiki/Bill_Atkinson), one of the main contributors to Apple's GUI, once reported his accomplishment as `"... deleted more than 21,000 lines of code..."`. As a result, the code ran much faster. Most importantly, the nice round cornered rectangular GUI objects that Apple pioneered was achieved after minor tweaks in the remaining code. Although what Bill did is more of an exception than norm, it teaches us something very important - programming has as much relation with typing, as mathematics has with chalk or pencil.    

At it's core, programming involves the following steps:
  1. __What's the problem?__ - Given a problem, translate the vague requirements into concrete statements, which is essentially defining the problem with precision. The difficulty involved in this step is often under-appreciated. For industry problems, this is perhaps the most difficult steps that require tonnes of experience.   
  2. __Does a solution exist?__ - Think about the solutions. Will a known mathematical formula be sufficient? If so, the code will be quite trivial. Usually most computational tasks are not adequately covered by mathematical formula, and that's why we need algorithms.    
  3. __Let's create/use an algorithm!__ - Try to think about a process - a sequence of steps - that will give you an accurate or reasonably good solution. Think about how much time will the process take to complete, as well as the memory required for execution. Always remember this - algorithms are precisely and unambiguously articulated sequence of instructions, and the goal of computer science is to deeply understand their efficiencies in terms of time and memory requirements. All the frightening mathematics that you see in computer science serves this singular end goal. 
  4. __Dry Run__ - Now that you have a solution, DO NOT rush to the _code-monkey mode_. Test your algorithm manually - take some inputs (normal, slightly tricky, and edge cases) based on the problem definition, and visualize how each of the steps are modifying/handling your input. Is the output you got the right one for each of the input variants you tested with? In most cases, the answer will be NO. Go back to the drawing board and troubleshoot. This technique is called "_dry run_", and is immensely helpful in your journey of becoming an ace problem solver. Never forget that computers are more dumb than you can imagine, and it is your responsibility to tell what needs to be done.     
  5. __Type-Run-Debug__ - Fire up your favourite text editor or IDE, and type in the code. Don't be a macho - use a modern IDE, as they help in avoiding the syntax errors. Execute your code. In most cases, the compiler or the interpreter will throw up some error. The compilers and interpreters are your friend - they tell on your face what's wrong with your code from the perspective of language definition. Understand the cryptic error messages and debug your program untill it runs successfully.    
  
These five steps address pure programming, which is often the case when you are a beginner or need to code for academic purposes. Software engineering is a superset of these steps, which we shall briefly discuss towards the end of this chapter.    

A big chunk of the work is done, but a programmer still needs to go miles before he sleeps! Think about the various contraints that your algorithm might face. For your solution to be reliable, it must     

The mechanisms of source code execution for interpreted and compiled programming languages are very different, and usually compiled source code executes a lot faster than the interpreted ones. The interpreted languages make up for the loss of speed by offering some facilities to develop software faster. In fact, lots of companies favour languages like Python over C++ because they think that developer's time is much more costly than processor's time. In many cases, such a philosophy saves a lot of money for the companies. However, very large scale enterprise software, safety-critical or mission-critical software, etc. are better written in statically typed languages.     


## Computer Architecture and Data Types     

There is no shame in revisiting the the basics of computers, especially when we are newbies in the world of programming computers to automatically perform tasks for us. What we are about to do is same as stalwarts like Elon Musk do - _thinking from first principles_.     

### The problem with data types...    
Most modern computers are manufactured using the [Von Neumann architecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture), which implies that data resides in the memory, and computation is performed by the processor. These dumb but useful beasts see everything as `0` and `1`; be it a beautiful piece of code or your favourite porn - they are incapable of appreciating anything beyond those two numbers. And that's a serious problem! We need to write programs for calculating salary of employees, and we also need to write programs for displaying their name on the monitor. If both salary and name are series of `0`s and `1`s in the computer's memory, how do we ask the computer to differentiate between the two? In a generalised rephrasing of the question, how do we ask the computers to differentiate between the binary equivalents of __different types of data__?     

### Who can help?
Globally, numerical quantities are expressed by the decimal number system. Standards defined by [ASCII](https://en.wikipedia.org/wiki/ASCII) and [Unicode](https://en.wikipedia.org/wiki/Unicode) gives us a way to represent non-numerical characters as decimal numbers. Thus, we have an agreed way to represent everything as decimal numbers, and convert them uniformly into binary numbers. Although such standardisation is a good first step, it still does not solves our problem. To appreciate the problem, let's take a bottom-up approach and understand what's happening at a hardware level.    

### Electrical Engineering and Programming
![](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/ABasicComputer.gif)    

```
Block diagram of a basic computer with uniprocessor CPU. 
  - Black lines indicate data flow. 
  - Red lines indicate control flow. 
  - Arrows indicate direction of flow.
```    

Don't worry if you didn't understand the details presented in the illustration above. It's crux is that there are different components of a processor that handles the instructions/logic and the data, both of which are electric currents carried by dedicated wires called _"bus"_. The electrical circuits present in a CPU responds only to voltage levels, either by transmitting current or blocking it. At this level, all we have are the analog equivalent of the binary - `-5 volt` and `+5 volt`. It is very difficult to implement an abstract human construct like data type at the hardware level. However, not all hopes are lost, as the __allocation of memory chunks of different sizes for different types of data__ can serve as a distinguishing factor!    

### Can compilers/interpreters help?
We will probe this possibility of solving our problem from the other end of the spectrum, which is essentially a top-down approach. Let's invite the compilers and the interpreters into the game and spice it up!    

Compilers and interpreters are special programs that has the grammar of the programming language embedded in it. Although compilers and interpreters are technically very different pieces of software in terms of functionality and scope, they share some common functions in terms of handling the code. For the sake of simplicity, in this discussion we will club them together and try to find solution from the common subset of their functions.

To get an intuitive feeling of the possible role of compilers/interpreters in solving this problem, think about the following:    
  - The compilers and interpreters are responsible for generating the correct sequence of `0`s and `1`s.    
  - Once generated, the circuits take it up.    
  - There is no entity between the compilers/interpreters and the processor that meddles with the machine code.     
  
If the circuits are incapable of handling abstractions, then it must be the entity producing the machine code that has the onus of responsibility to dumb down things at a level that electrical engineering can address! In fact, it only makes sense that an abstraction like distinction between data types is handled by something more abstract than the bare circuits.     

### The help arrives...    

Although not a complete list, given below are some tasks that compilers and interpreters perform when they are invoked:    

![](https://github.com/datasouvik/getting_started_with_javascript/blob/master/Assets/roleOfCompilers.png)    

What interests is the 3rd item on the list, and to some extent the 4th item too. To understand what the 3rd item means, let's write two lines of code:
```javascript
// var means variable in the JavaScript world

var name = "John";
var age = 30;
```

The above lines of JavaScript code are syntactically correct and are contained within one source file. When the JavaScript interpreter is invoked, the code readily passes the first two tests of syntactical correctness and module references. Since the code does not warrant an output, the 4th task is not performed by the interpreter. What remains is the all-important 3rd item on the list, which we shall closely inspect.    

As with most interpreted languages, the JavaScript interpreter goes through a source code file line by line. Let me take you through the same journey that the interpreter goes through, when our code is fed into it:        
  1. The first line starts with `//`, and is thus ignored by the interpreter as a comment for humans.     
  2. The second line does not have the `//` signs at it's begining, and the interpreter senses that this is a legitimate line of code.     
  3. The line is parsed for lexical sanity, which our code passes with flying colours.    
  4. Once the syntactical correctness is ensured, the interpreter starts deciphering it's meaning.     
      1. The first word it encounters is `var`, which triggers an anticipation that a variable is on the way! You can visualize variables as entities in a program that occupies a certain range of memory locations, based on the type of the value it contains.     
      2. In our first legitimate line of code, the name of the variable is `name`, and it contains a value `John`. On recieving these information, the interpreter lays out a memory map, which is roughly illustrated below:     
