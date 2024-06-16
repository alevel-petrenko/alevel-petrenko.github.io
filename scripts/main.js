// var myHeading = document.querySelectorAll("h1");

// myHeading.forEach((element) => {
//   element.textContent = "Hello world!";
//   // element.hidden = true;
// });

let myImage = document.querySelector("img");

// change logo
myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/chrome-icon.png")
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png")
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = function() {
    setUserName();
}

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Chrome is your, " + storedName;
  }

function setUserName() {
    let myName = prompt("Please enter your name");

    if (!myName)
        setUserName();
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Chrome is your, " + myName;
    }
}
