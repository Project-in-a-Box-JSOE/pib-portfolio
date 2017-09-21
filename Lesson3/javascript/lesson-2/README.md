####Lesson 2:
So now that you know the basics of javascript,
its time to learn some practical applications of javascript.
If you haven't covered the dom manipulation



  ####Lesson 1: Discovering the Dom
  ```javascript
      var tool = document.getElementById("tool");
      console.log(tool.style.width);
      tool.style.width = "100px";
  // Anything with dots is a property
  // You can set the property "width" of the "style" to
  // Sth of this "50px"
  ```

  ####Exercise
  Let's incorporate what we learned about
  loops and variables from Lesson 1.

  Here's some interesing info:
  Given that when you use document.getElementsbyClassName()
  an array of Dom Objects are returned, print out all
  the dom objects in the following:

    <div class="singularity">item 1</div>
    <div class="singularity">item 2</div>
    <div class="singularity">item 3</div>
    <div class="singularity">item 4</div>
    <div class="singularity">item 5</div>

  ```javascript

  ```

  ####Lesson 2: An Act of Creation
  ```javascript
  var element = document.createElement("div");
  // Could be div, img, button, etc.
  element.innerHTML = "some Text";
  // Attach created node
  document.querySelector("body").append(element);
  ```

  ####Lesson 3: An Act of Creation
