# Objects and Arrays

> __NOTE to Readers__: From this chapter onward, there will be less textual explanation that what you have seen before in this book. Instead, you are expected to learn from the code and the comments. Building this habit will serve you extremely well, no matter you are writing code or writing about code. As an author, I will give my best to make the code self-explanatory in terms of structure, names, and comments.

## Objects

JavaScript being a so-called "object-oriented" language, the concept of objects are central to good understanding of JavaScript code. 

One way to look at objects is to interpret with its literal meaning. In that sense, objects are everything in the physical world as well as within programs that has:
  - __`Properties`__: These are nothing but characteristics. For example, an object `human` can have properties like `num_of_limbs`, `num_of_sense_organs`, etc. Obviously properties does not makes sense without values, and so every property in an object has a value. for our `human` object, the property `num_of_limbs` should be given value `4`, and the property `num_of_sense_organs` should have the value `5`.
  - __`Methods`__: These are actions or defined procedures that bestows behaviour on an object. The `human` object can have methods like `move()`, `eat()`, `sleep()`, and `code()`. Methods are basically functions associated with the objects, and the usual rues of defining functions applies to methods too.
  
> __`Properties`__ and __`Methods`__ of objects can either be defined as their __`own`__, or can be __`inherited`__. Think of the analogy where human babies can be programmatically represented as objects. They develop certain characteristics (properties) and skills (methods) that are different from their parents, and are therefore their own! On the other hand, they also inherit a vast amount of characteristics and skills from their parents.
