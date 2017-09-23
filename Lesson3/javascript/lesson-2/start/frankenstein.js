
var frame = document.querySelector("#frame");
frame

var pieces = document.createElement("div");
var linkArrays = [
  "img/Frakenstein-Head.png",
  "img/Frankenstein-TextBox.png",
  "img/Frakenstein-Left-Arm.png"  ,
  "img/Frakenstein-Body.png",
  "img/Frakenstein-Right-Arm.png",
  "img/Frakenstein-Legs.png"
]


// pieces.innerHTML = ("<img src=\"" + src + "\">");
// frame.append(pieces);
for (var i = 0; i < linkArrays.length; i++ ){
  // var htmlBaby = "<img src=\"" + linkArrays[i] + "\">";
  var htmlBaby = "<img src=\"" + linkArrays[i] + "\">";
  var html = document.createElement("div");
  // var html = document.createElement("img");
  // html.src =linkArrays[i];
  html.style.backgroundImage = "url(" + linkArrays[i] + ")";
  html.style.backgroundSize = "cover";
  html.className = "box";
  html.style.width = "100px";
  html.style.height = "100px";
  html.style.backgroundColor = "red";
  // pieces.innerHTML = htmlBaby;
  // frame.append(pieces);
  frame.append(html);
}
