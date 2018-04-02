# Programming 101

In this chapter, you will learn the following basics of programming:
  - Why programming is more about thinking and less about typing    
  - Computer architecture and memory in context of data types     
  - Compilation versus Interpretation            
  - Best practices of programming and software engineering                   

While I will try my best to present the material in an objective fashion, it might get contaminated with my biases. Feel free to discard my opinions and form your own based on your experiences.    


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

Most modern computers are manufactured using the [Von Neumann architecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture), which implies that data resides in the memory, and computation is performed by the processor. These dumb but useful beasts see everything as `0` and `1`; be it a beautiful piece of code or your favourite porn - they are incapable of appreciating anything beyond those two numbers. And that's a serious problem! We need to write programs for calculating salary of employees, and we also need to write programs for displaying their name on the monitor. If both salary and name are series of `0`s and `1`s in the computer's memory, how do we ask the computer to differentiate between the two? In a generalised rephrasing of the question, how do we ask the computers to differentiate between the binary equivalents of different types of data?     

Globally, numerical quantities are expressed by the decimal number system. Standards defined by [ASCII](https://en.wikipedia.org/wiki/ASCII) and [Unicode](https://en.wikipedia.org/wiki/Unicode) gives us a way to represent non-numerical characters as decimal numbers. Thus, we have an agreed way to represent everything as decimal numbers, and convert them uniformly into binary numbers. Although such standardisation is a good first step, it still does not solves our problem. To appreciate the problem, let's take a bottom-up approach and understand what's happening at a hardware level.    

![](https://upload.wikimedia.org/wikipedia/commons/d/d8/ABasicComputer.gif)    

```
Block diagram of a basic computer with uniprocessor CPU. 
  - Black lines indicate data flow. 
  - Red lines indicate control flow. 
  - Arrows indicate direction of flow.
```    

Don't worry if you didn't understand the detais presented in the illustration above. It's crux is that there are different components of a processor that handles the instructions/logic and the data, both of which are electric currents carried by dedicated wires called _"bus"_. The electrical circuits present in a CPU responds only to voltage levels, either by transmitting current or blocking it. At this level, all we have are the analog equivalent of the binary - `-5 volt` and `+5 volt`. However, not all hopes are lost, as the allocation of memory chunks for different types of data can serve as a distinguishing factor!

The real game is played at the level of compilers and interpreters. Think about it - the compilers and interpreters are responsible for generating the correct sequence of `0`s and `1`s. Once generated, the circuits take it up. There is no entity between the compilers/interpreters and the processor that meddles with the machine code. If the circuits are incapable of handling abstractions, then it must be the entity producing the machine code that has to deal with it! In fact, it only makes sense that an abstraction like distinction between data types is handled by something more abstract than the bare circuits.    


