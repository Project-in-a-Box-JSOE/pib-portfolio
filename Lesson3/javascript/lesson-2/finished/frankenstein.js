
var frame = document.querySelector("#frame");
frame

var pieces = document.createElement("div");
var linkArrays = [
  "", // Empty
  "img/Frankenstein-Head.png",
  "img/Frankenstein-TextBox.png",
  "img/Frankenstein-LeftArm.png"  ,
  "img/Frankenstein-Body.png" ,
  "img/Frankenstein-RightArm.png",
  "", // Empty
  "img/Frankenstein-Legs.png",
  ""
]

var n = 3;  // Grid Row and Length as a box
var html = ""; // Initialize once. // <<-- FACT CHECK -->
for (var i = 0; i < n; i++ ){
  var htmlContainer = document.createElement("div");
  for (var j = 0; j < n; j++ ){
    var index = (i * n + j);
    // var htmlBaby = "<img src=\"" + linkArrays[i] + "\">";
    var htmlBaby = "<img src=\"" + linkArrays[index] + "\">";
    html = document.createElement("div");
    html.className = "box";
    html.style.backgroundImage = "url(" + linkArrays[index] + ")";
    html.style.backgroundSize = "cover";
    html.style.width = "200px";
    html.style.height = "200px";
    html.style.backgroundColor = "#B1AFAE";
    html.style.display = "inline-block";
    // pieces.innerHTML = htmlBaby;
    // frame.append(pieces);

    /* Attach a Listener */  /* Attaching a function */
    html.addEventListener("click", function(event){
      // var elem = document.getElementsByClassName("box")[2];
      var d = event.target;
      var appendage = (d.style.backgroundImage);
      appendage = appendage.replace("url(\"img/Frankenstein-", "");
      appendage = appendage.replace(".png\")", "");

      // var textBox = document.getElementById("textBox");
      // textBox.innerHTML = ("You Clicked My " + appendage);
      /* Text */
      if ( appendage == ""){
        alert("You Clicked Empty Space");
      }
      else {
        alert("You Clicked My " + appendage);
      }

       // Grab
      /**** Concept of State ****/
    });

    htmlContainer.append(html);
  } // End of Second Loop
  frame.append(htmlContainer);
} // End of First Loop


/* Solutions
 * Using Matrix Specific Conditions
 * 9 x 9 grid, but it only prints how many times?
 *
 *
 */

var leftHand = document.getElementsByClassName("box")[3];
var rightHand= document.getElementsByClassName("box")[5];

document.getElementById("dance").addEventListener("click", function(){

  var temp = leftHand.style.backgroundImage;
  leftHand.style.backgroundImage = rightHand.style.backgroundImage;
  rightHand.style.backgroundImage = temp;
 //  .style.backgroundImage;
 //  .style.backgroundImage;
 if (leftHand.classList.contains("flipped")){
   leftHand.classList.remove("flipped");
   rightHand.classList.remove("flipped");
 }
 else {
   leftHand.setAttribute("class", "flipped");
   rightHand.setAttribute("class", "flipped");
  //  leftHand.classList.remove("flipped");
  //  rightHand.classList.remove("flipped");
 }


   html.style.backgroundImage = "url(" + linkArrays[index] + ")";

 });
