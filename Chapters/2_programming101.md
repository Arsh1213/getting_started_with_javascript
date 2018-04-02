# Programming 101

In this chapter, you will learn the following basics of programming:
  - Why programming is more about thinking and less about typing
  - Computer architecture and memory in context of program execution; compilation versus interpretation   
  - Data types, and why they are important        
  - Some best practices of programming    
  - Software engineering - it's overlap and differences with programming    
While I will try my best to present the material in an objective fashion, it might get contaminated with my own biases and subjective opinions. Feel free to discard my opinions and form your own based on your experiences.

The mechanisms of source code execution for interpreted and compiled programming languages are very different, and usually compiled source code executes a lot faster than the interpreted ones. The interpreted languages make up for the loss of speed by offering some facilities to develop software faster. In fact, lots of companies favour languages like Python over C++ because they think that developer's time is much more costly than processor's time. In many cases, such a philosophy saves a lot of money for the companies. However, very large scale enterprise software, safety-critical or mission-critical software, etc. are better written in statically typed languages.    

To understand the concept of "typed", we need to revisit the basics of computers. Most modern computers are manufactured using the [Von Neumann architecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture), which implies that data resides in the memory, and computation is performed by the processor. Oh, and minor detail - computers are dumb electrical machines which responds only to voltage levels. +5 volt corresponds to 0, and -5 volt corresponds to 1, and hence the concept of binary language or machine language.        

These dumb but useful beasts see everything as 0 and 1; be it a beautiful piece of code or your favourite porn - they are incapable of appreciating anything beyond those two numbers. In other words,
