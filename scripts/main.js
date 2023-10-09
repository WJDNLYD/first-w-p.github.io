let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/p1.png") {
    myImage.setAttribute("src", "images/p2.png");
  } else {
    myImage.setAttribute("src", "images/p1.png");
  }
};