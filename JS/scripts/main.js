var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world! This is a test page';
var myImage = document.querySelector('img');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  if(mySrc === 'images/firefox-icon.png') {
    myHeading.textContent = "This is the picture of " +  storedName + "'s dog, Sasha";
    myImage.setAttribute ('src','images/Sasha.png');
  } else {
    myHeading.textContent = 'This is the default Firefox picture';
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}


