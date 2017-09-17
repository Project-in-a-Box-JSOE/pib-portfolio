Intro To Javascript - Part 2
================================
If HTML are the skeletal structure, and CSS are the clothes, then
Javascript are the meat and muscles of web development. Understanding some key concepts
and methods will allow you to flex your Javascript muscles and do cool things.

*Note, this is not a comprehensive lesson in programming.  Programming concepts are ingrained*


#### Concepts
* [Jumpstart](#jumpstart)
* [Variables](#variable)
* [Loops And Conditionals](#loop)
* [Functions](#function)


Without javascript, a website can only sit still and look pretty.
With javascript, you are able to *do*.

<a name="jumpstart"></a>
#### Lesson 1: Moving Those Muscles.  Let's Hack
Its an unspoken rule for programmers learning programming
to print out a line symbolizing a machine's break into the real world. <br/>
So let's go to the Chrome Developer's Tool.
First, right click anywhere on the page, and then
click on the "Inspect".  
Then, once the developer tools pops up,  
you can click on the "Console" tab.  


```
console.log("I'm Alive!  Hello World")
```
This will be your best friend for debugging.
This function will allow you to print information
to help you understand how your code is working.

#### Variables<a name="variable"></a>
In javascript, you don't need to explicitly name what type of variable you want to use.
For Ex:
var i = 0;
var message = "Hello World";
console.log(i + message); // This automatically casts your integer "i" into a string, and creates "0Hello World".


#### Loops And Conditionals<a name="loop"></a>
Loops allow a programmer to not repeat lines.
Imagine if you needed to print "I'm Alive!" 1000 times.
Without Loops, that would be 1000 lines of code.  With a loop, it would look
like this:
```
for (var i = 0; i < 1000; i++){  
  console.log("I'm Alive! Its the" + i + "nth  
  print");
}
```

Lets break this down, in javascript, this  
for loop will take in 3 parameters that control  
how long to run the loop.  
First, we create a counter and set it to 0.  
Second, we state the *Condition* that the counter   must be less than 1000.
Third, we have the increment, where you set how you control the function.  By putting i++, we are telling the program to increment i by 1 for each
iteration of the loop.

In Summary, this should loop 1000 times, starting
at i = 0, and then ending at i = 999, where at the end it will reach 1000 and not run the code block within the sections
``` for (_____)
  {
    // Code Block Here
  } ```
and
```

Now to Dive into code.  Remember how HTML are just nodes of data?
When you have classes of similar elements, you can use javascript to grab
the data and print it out.
You can do cool things, such as display each node's inner text, or even create HTML nodes and attach them.  


Printing out html node information.
Enter this into the console in the developer tools.
```
var nodes = document.getElementsbyClassName("box");
var arrayLength = array.length() // .length() is a function call as a property of arrays
for (int i = 0; i < arrayLength; i++ ){
  console.log(nodes[i]);
}
```




<a name="function"></a>
___
___
#### Functions
Functions
