var roomOneTotal = 0;

inputOne.onkeyup = function() { //when key is pressed while in input field, run function
  if (event.keyCode == 13) { //if 13 (aka enter) is hit...
    addToRoomOne(); //run function
    previousGuestsRoomOne(); //run function
  }
}
function addToRoomOne() {
  if (roomOneTotal < 4)
  {
    var li = document.createElement("li"); //create list element
    var newText = document.createTextNode(inputOne.value); //create text node from user's input
    li.appendChild(newText);
    var ol = document.getElementById('guestListOne'); //get ol
    ol.appendChild(li);
      
    //timestamp guest
    var time = new Date(); //create new date object
    var showTime = " " + "(" + (time.getMonth() + 1) +"/"+ time.getDate() +"/"+ time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ")"; //gets date and time (Jan is 0, Dec is 11)
    var textTime = document.createTextNode(showTime);
    var spanElem = document.createElement('span'); //create span element
    spanElem.appendChild(textTime);
    li.appendChild(spanElem);
      
    li.onclick = function() { //when li is clicked...
      this.parentNode.removeChild(this); //find li's parent node to remove the li
      roomOneTotal--; //subtract one from variable
      document.getElementById('fullOne').innerHTML = ""; //removes "Room full."
    }
  }
else
  {
    //tell user the room is full
    var createElem = document.getElementById('fullOne');
    var fullText = document.createTextNode("Room full! ");
    createElem.appendChild(fullText);
  }
}
function removeAllRoomOne() {
  var ol = document.getElementById("guestListOne");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullOne').innerHTML = ""; //removes "Room full."
  }
  
  roomOneTotal = 0; //reset variable
}
function previousGuestsRoomOne() { //display a list of all guests that have checked in since the script has been running
  if (roomOneTotal < 4)
  {
    var li = document.createElement("li"); //create list element
    var newText = document.createTextNode(inputOne.value); //create text node from user's input
    document.getElementById('inputOne').value = ""; //clear input box
    li.appendChild(newText);
    var ol = document.getElementById("allGuestsRoomOne");
    ol.appendChild(li);
    
    //timestamp guest
    var time = new Date(); //create new date object
    var showTime = " " + "(" + (time.getMonth() + 1) +"/"+ time.getDate() +"/"+ time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ")"; //gets date and time (Jan is 0, Dec is 11)
    var textTime = document.createTextNode(showTime);
    var spanElem = document.createElement('span'); //create span element
    spanElem.appendChild(textTime);
    li.appendChild(spanElem);
    
    roomOneTotal++; //add one to variable
  }
}

function lockRoomOne() {
  //delete all elements with class of "one" and have text saying "locked for cleaning"
  var callContain = document.getElementById("containerOne"); //getting everything for room 1
  callContain.style.display = 'none'; //...and hides it
  
  //display "Locked for cleaning text"
  var createElem = document.createElement("h2");
  createElem.className = "clean"; //gives h2 element a class
  createElem.id = "cleaningText";
  var newText = document.createTextNode("Room One locked for cleaning.");
  createElem.appendChild(newText);
  var callDiv = document.getElementById('roomIchi');
  callDiv.appendChild(createElem);
  
  var spacing = document.createElement('br');
  spacing.id = "break";
  callDiv.appendChild(spacing);
  
  var createButton = document.createElement('button');
  createButton.className = "locks";
  createButton.id = "unlockButton";
  createButton.onclick = function() { //this function "unlocks" the room when button is clicked
    var callContain = document.getElementById("containerOne"); //getting everything for room 1
    callContain.style.display = 'inline'; //...and display it
    
    //delete the button, "Locked for cleaning", & breaks
    var h2Elem = document.getElementById('cleaningText');
    var callDiv = document.getElementById('roomIchi');
    callDiv.removeChild(h2Elem);
    var button = document.getElementById('unlockButton');
    callDiv.removeChild(button);
    var breaks = document.getElementById('break');
    callDiv.removeChild(breaks);
  };
  var buttonText = document.createTextNode("Unlock Room");
  createButton.appendChild(buttonText);
  callDiv.appendChild(createButton);
  
  callDiv.appendChild(spacing);//adds a br
  
  //removes all guests who are checked in
  var ol = document.getElementById("guestListOne");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullOne').innerHTML = ""; //removes "Room full."
  }
  roomOneTotal = 0; //reset variable
}

var roomTwoTotal = 0;

inputTwo.onkeyup = function() { //when key is pressed while in input field, run function
  if (event.keyCode == 13) { //if 13 (aka enter) is hit...
    addToRoomTwo(); //run function
    previousGuestsRoomTwo(); //run function
  }
}
function addToRoomTwo() {
  if (roomTwoTotal < 4)
  {
    var li = document.createElement("li"); //create list element
    var newText = document.createTextNode(inputTwo.value); //create text node from user's input
    li.appendChild(newText);
    var ol = document.getElementById('guestListTwo'); //get ol
    ol.appendChild(li);
      
    //timestamp guest
    var time = new Date(); //create new date object
    var showTime = " " + "(" + (time.getMonth() + 1) +"/"+ time.getDate() +"/"+ time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ")"; //gets date and time (Jan is 0, Dec is 11)
    var textTime = document.createTextNode(showTime);
    var spanElem = document.createElement('span'); //create span element
    spanElem.appendChild(textTime);
    li.appendChild(spanElem);
      
    li.onclick = function() { //when li is clicked...
      this.parentNode.removeChild(this); //find li's parent node to remove the li
      roomTwoTotal--; //subtract one from variable
      document.getElementById('fullTwo').innerHTML = ""; //removes "Room full."
    }
  }
else
  {
    //tell user the room is full
    var createElem = document.getElementById('fullTwo');
    var fullText = document.createTextNode("Room full! ");
    createElem.appendChild(fullText);
  }
}
function removeAllRoomTwo() {
  var ol = document.getElementById("guestListTwo");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullTwo').innerHTML = ""; //removes "Room full."
  }
  
  roomTwoTotal = 0; //reset variable
}
function previousGuestsRoomTwo() { //display a list of all guests that have checked in since the script has been running
  if (roomTwoTotal < 4)
  {
    var li = document.createElement("li"); //create list element
    var newText = document.createTextNode(inputTwo.value); //create text node from user's input
    document.getElementById('inputTwo').value = ""; //clear input box
    li.appendChild(newText);
    var ol = document.getElementById("allGuestsRoomTwo");
    ol.appendChild(li);
    
    //timestamp guest
    var time = new Date(); //create new date object
    var showTime = " " + "(" + (time.getMonth() + 1) +"/"+ time.getDate() +"/"+ time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ")"; //gets date and time (Jan is 0, Dec is 11)
    var textTime = document.createTextNode(showTime);
    var spanElem = document.createElement('span'); //create span element
    spanElem.appendChild(textTime);
    li.appendChild(spanElem);
    
    roomTwoTotal++; //add one to variable
  }
}

function lockRoomTwo() {
  //delete all elements with class of "two" and have text saying "locked for cleaning"
  var callContain = document.getElementById("containerTwo"); //getting everything for room 1
  callContain.style.display = 'none'; //...and hides it
  
  //display "Locked for cleaning text"
  var createElem = document.createElement("h2");
  createElem.className = "clean"; //gives h2 element a class
  createElem.id = "cleaningText";
  var newText = document.createTextNode("Room Two locked for cleaning.");
  createElem.appendChild(newText);
  var callDiv = document.getElementById('roomNi');
  callDiv.appendChild(createElem);
  
  var spacing = document.createElement('br');
  spacing.id = "break";
  callDiv.appendChild(spacing);
  
  var createButton = document.createElement('button');
  createButton.className = "locks";
  createButton.id = "unlockButton";
  createButton.onclick = function() { //this function "unlocks" the room when button is clicked
    var callContain = document.getElementById("containerTwo"); //getting everything for room 1
    callContain.style.display = 'inline'; //...and display it
    
    //delete: the button, "Locked for cleaning", & breaks
    var h2Elem = document.getElementById('cleaningText');
    var callDiv = document.getElementById('roomNi');
    callDiv.removeChild(h2Elem);
    var button = document.getElementById('unlockButton');
    callDiv.removeChild(button);
    var breaks = document.getElementById('break');
    callDiv.removeChild(breaks);
  };
  var buttonText = document.createTextNode("Unlock Room");
  createButton.appendChild(buttonText);
  callDiv.appendChild(createButton);
  
  callDiv.appendChild(spacing);//adds a br
  
  //removes all guests who are checked in
  var ol = document.getElementById("guestListTwo");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullTwo').innerHTML = ""; //removes "Room full."
  }
  roomTwoTotal = 0; //reset variable
}

var roomThreeTotal = 0;

inputThree.onkeyup = function() { //when key is pressed while in input field, run function
  if (event.keyCode == 13) { //if 13 (aka enter) is hit...
    addToRoomThree(); //run function
    previousGuestsRoomThree(); //run function
  }
}
function addToRoomThree() {
  if (roomThreeTotal < 4)
  {
    var li = document.createElement("li"); //create list element
    var newText = document.createTextNode(inputThree.value); //create text node from user's input
    li.appendChild(newText);
    var ol = document.getElementById('guestListThree'); //get ol
    ol.appendChild(li);
      
    //timestamp guest
    var time = new Date(); //create new date object
    var showTime = " " + "(" + (time.getMonth() + 1) +"/"+ time.getDate() +"/"+ time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ")"; //gets date and time (Jan is 0, Dec is 11)
    var textTime = document.createTextNode(showTime);
    var spanElem = document.createElement('span'); //create span element
    spanElem.appendChild(textTime);
    li.appendChild(spanElem);
      
    li.onclick = function() { //when li is clicked...
      this.parentNode.removeChild(this); //find li's parent node to remove the li
      roomThreeTotal--; //subtract one from variable
      document.getElementById('fullThree').innerHTML = ""; //removes "Room full."
    }
  }
else
  {
    //tell user the room is full
    var createElem = document.getElementById('fullThree');
    var fullText = document.createTextNode("Room full! ");
    createElem.appendChild(fullText);
  }
}
function removeAllRoomThree() {
  var ol = document.getElementById("guestListThree");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullThree').innerHTML = ""; //removes "Room full."
  }
  
  roomThreeTotal = 0; //reset variable
}
function previousGuestsRoomThree() { //display a list of all guests that have checked in since the script has been running
  if (roomThreeTotal < 4)
  {
    var li = document.createElement("li"); //create list element
    var newText = document.createTextNode(inputThree.value); //create text node from user's input
    document.getElementById('inputThree').value = ""; //clear input box
    li.appendChild(newText);
    var ol = document.getElementById("allGuestsRoomThree");
    ol.appendChild(li);
    
    //timestamp guest
    var time = new Date(); //create new date object
    var showTime = " " + "(" + (time.getMonth() + 1) +"/"+ time.getDate() +"/"+ time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ")"; //gets date and time (Jan is 0, Dec is 11)
    var textTime = document.createTextNode(showTime);
    var spanElem = document.createElement('span'); //create span element
    spanElem.appendChild(textTime);
    li.appendChild(spanElem);
    
    roomThreeTotal++; //add one to variable
  }
}

function lockRoomThree() {
  //delete all elements with class of "three" and have text saying "locked for cleaning"
  var callContain = document.getElementById("containerThree"); //getting everything for room 1
  callContain.style.display = 'none'; //...and hides it
  
  //display "Locked for cleaning text"
  var createElem = document.createElement("h2");
  createElem.className = "clean"; //gives h2 element a class
  createElem.id = "cleaningText";
  var newText = document.createTextNode("Room Three locked for cleaning.");
  createElem.appendChild(newText);
  var callDiv = document.getElementById('roomSan');
  callDiv.appendChild(createElem);
  
  var spacing = document.createElement('br');
  spacing.id = "break";
  callDiv.appendChild(spacing);
  
  var createButton = document.createElement('button');
  createButton.className = "locks";
  createButton.id = "unlockButton";
  createButton.onclick = function() { //this function "unlocks" the room when button is clicked
    var callContain = document.getElementById("containerThree"); //getting everything for room 1
    callContain.style.display = 'inline'; //...and display it
    
    //delete the button, "Locked for cleaning", & breaks
    var h2Elem = document.getElementById('cleaningText');
    var callDiv = document.getElementById('roomSan');
    callDiv.removeChild(h2Elem);
    var button = document.getElementById('unlockButton');
    callDiv.removeChild(button);
    var breaks = document.getElementById('break');
    callDiv.removeChild(breaks);
  };
  var buttonText = document.createTextNode("Unlock Room");
  createButton.appendChild(buttonText);
  callDiv.appendChild(createButton);
  
  callDiv.appendChild(spacing);//adds a br
  
  //removes all guests who are checked in
  var ol = document.getElementById("guestListThree");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullThree').innerHTML = ""; //removes "Room full."
  }
  roomThreeTotal = 0; //reset variable
}

var roomFourTotal = 0;

inputFour.onkeyup = function() { //when key is pressed while in input field, run function
  if (event.keyCode == 13) { //if 13 (aka enter) is hit...
    addToRoomFour(); //run function
    previousGuestsRoomFour(); //run function
  }
}
function addToRoomFour() {
  if (roomFourTotal < 4)
  {
    var li = document.createElement("li"); //create list element
    var newText = document.createTextNode(inputFour.value); //create text node from user's input
    li.appendChild(newText);
    var ol = document.getElementById('guestListFour'); //get ol
    ol.appendChild(li);
      
    //timestamp guest
    var time = new Date(); //create new date object
    var showTime = " " + "(" + (time.getMonth() + 1) +"/"+ time.getDate() +"/"+ time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ")"; //gets date and time (Jan is 0, Dec is 11)
    var textTime = document.createTextNode(showTime);
    var spanElem = document.createElement('span'); //create span element
    spanElem.appendChild(textTime);
    li.appendChild(spanElem);
      
    li.onclick = function() { //when li is clicked...
      this.parentNode.removeChild(this); //find li's parent node to remove the li
      roomFourTotal--; //subtract one from variable
      document.getElementById('fullFour').innerHTML = ""; //removes "Room full."
    }
  }
else
  {
    //tell user the room is full
    var createElem = document.getElementById('fullFour');
    var fullText = document.createTextNode("Room full! ");
    createElem.appendChild(fullText);
  }
}
function removeAllRoomFour() {
  var ol = document.getElementById("guestListFour");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullFour').innerHTML = ""; //removes "Room full."
  }
  
  roomFourTotal = 0; //reset variable
}
function previousGuestsRoomFour() { //display a list of all guests that have checked in since the script has been running
  if (roomFourTotal < 4)
  {
    var li = document.createElement("li"); //create list element
    var newText = document.createTextNode(inputFour.value); //create text node from user's input
    document.getElementById('inputFour').value = ""; //clear input box
    li.appendChild(newText);
    var ol = document.getElementById("allGuestsRoomFour");
    ol.appendChild(li);
    
    //timestamp guest
    var time = new Date(); //create new date object
    var showTime = " " + "(" + (time.getMonth() + 1) +"/"+ time.getDate() +"/"+ time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ")"; //gets date and time (Jan is 0, Dec is 11)
    var textTime = document.createTextNode(showTime);
    var spanElem = document.createElement('span'); //create span element
    spanElem.appendChild(textTime);
    li.appendChild(spanElem);
    
    roomFourTotal++; //add one to variable
  }
}

function lockRoomFour() {
  //delete all elements with class of "four" and have text saying "locked for cleaning"
  var callContain = document.getElementById("containerFour"); //getting everything for room 1
  callContain.style.display = 'none'; //...and hides it
  
  //display "Locked for cleaning text"
  var createElem = document.createElement("h2");
  createElem.className = "clean"; //gives h2 element a class
  createElem.id = "cleaningText";
  var newText = document.createTextNode("Room Four locked for cleaning.");
  createElem.appendChild(newText);
  var callDiv = document.getElementById('roomYon');
  callDiv.appendChild(createElem);
  
  var spacing = document.createElement('br');
  spacing.id = "break";
  callDiv.appendChild(spacing);
  
  var createButton = document.createElement('button');
  createButton.className = "locks";
  createButton.id = "unlockButton";
  createButton.onclick = function() { //this function "unlocks" the room when button is clicked
    var callContain = document.getElementById("containerFour"); //getting everything for room 1
    callContain.style.display = 'inline'; //...and display it
    
    //delete the button, "Locked for cleaning", & breaks
    var h2Elem = document.getElementById('cleaningText');
    var callDiv = document.getElementById('roomYon');
    callDiv.removeChild(h2Elem);
    var button = document.getElementById('unlockButton');
    callDiv.removeChild(button);
    var breaks = document.getElementById('break');
    callDiv.removeChild(breaks);
  };
  var buttonText = document.createTextNode("Unlock Room");
  createButton.appendChild(buttonText);
  callDiv.appendChild(createButton);
  
  callDiv.appendChild(spacing);//adds a br
  
  //removes all guests who are checked in
  var ol = document.getElementById("guestListFour");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullFour').innerHTML = ""; //removes "Room full."
  }
  roomFourTotal = 0; //reset variable
}

var roomFiveTotal = 0;

inputFive.onkeyup = function() { //when key is pressed while in input field, run function
  if (event.keyCode == 13) { //if 13 (aka enter) is hit...
    addToRoomFive(); //run function
    previousGuestsRoomFive(); //run function
  }
}
function addToRoomFive() {
  if (roomFiveTotal < 4)
  {
    var li = document.createElement("li"); //create list element
    var newText = document.createTextNode(inputFive.value); //create text node from user's input
    li.appendChild(newText);
    var ol = document.getElementById('guestListFive'); //get ol
    ol.appendChild(li);
      
    //timestamp guest
    var time = new Date(); //create new date object
    var showTime = " " + "(" + (time.getMonth() + 1) +"/"+ time.getDate() +"/"+ time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ")"; //gets date and time (Jan is 0, Dec is 11)
    var textTime = document.createTextNode(showTime);
    var spanElem = document.createElement('span'); //create span element
    spanElem.appendChild(textTime);
    li.appendChild(spanElem);
      
    li.onclick = function() { //when li is clicked...
      this.parentNode.removeChild(this); //find li's parent node to remove the li
      roomFiveTotal--; //subtract one from variable
      document.getElementById('fullFive').innerHTML = ""; //removes "Room full."
    }
  }
else
  {
    //tell user the room is full
    var createElem = document.getElementById('fullFive');
    var fullText = document.createTextNode("Room full! ");
    createElem.appendChild(fullText);
  }
}
function removeAllRoomFive() {
  var ol = document.getElementById("guestListFive");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullFive').innerHTML = ""; //removes "Room full."
  }
  
  roomFiveTotal = 0; //reset variable
}
function previousGuestsRoomFive() { //display a list of all guests that have checked in since the script has been running
  if (roomFiveTotal < 4)
  {
    var li = document.createElement("li"); //create list element
    var newText = document.createTextNode(inputFive.value); //create text node from user's input
    document.getElementById('inputFive').value = ""; //clear input box
    li.appendChild(newText);
    var ol = document.getElementById("allGuestsRoomFive");
    ol.appendChild(li);
    
    //timestamp guest
    var time = new Date(); //create new date object
    var showTime = " " + "(" + (time.getMonth() + 1) +"/"+ time.getDate() +"/"+ time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ")"; //gets date and time (Jan is 0, Dec is 11)
    var textTime = document.createTextNode(showTime);
    var spanElem = document.createElement('span'); //create span element
    spanElem.appendChild(textTime);
    li.appendChild(spanElem);
    
    roomFiveTotal++; //add one to variable
  }
}

function lockRoomFive() {
  //delete all elements with class of "five" and have text saying "locked for cleaning"
  var callContain = document.getElementById("containerFive"); //getting everything for room 1
  callContain.style.display = 'none'; //...and hides it
  
  //display "Locked for cleaning text"
  var createElem = document.createElement("h2");
  createElem.className = "clean"; //gives h2 element a class
  createElem.id = "cleaningText";
  var newText = document.createTextNode("Room Five locked for cleaning.");
  createElem.appendChild(newText);
  var callDiv = document.getElementById('roomGo');
  callDiv.appendChild(createElem);
  
  var spacing = document.createElement('br');
  spacing.id = "break";
  callDiv.appendChild(spacing);
  
  var createButton = document.createElement('button');
  createButton.className = "locks";
  createButton.id = "unlockButton";
  createButton.onclick = function() { //this function "unlocks" the room when button is clicked
    var callContain = document.getElementById("containerFive"); //getting everything for room 1
    callContain.style.display = 'inline'; //...and display it
    
    //delete the button, "Locked for cleaning", & breaks
    var h2Elem = document.getElementById('cleaningText');
    var callDiv = document.getElementById('roomGo');
    callDiv.removeChild(h2Elem);
    var button = document.getElementById('unlockButton');
    callDiv.removeChild(button);
    var breaks = document.getElementById('break');
    callDiv.removeChild(breaks);
  };
  var buttonText = document.createTextNode("Unlock Room");
  createButton.appendChild(buttonText);
  callDiv.appendChild(createButton);
  
  callDiv.appendChild(spacing);//adds a br
  
  //removes all guests who are checked in
  var ol = document.getElementById("guestListFive");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullFive').innerHTML = ""; //removes "Room full."
  }
  roomFiveTotal = 0; //reset variable
}

var roomSixTotal = 0;

inputSix.onkeyup = function() { //when key is pressed while in input field, run function
  if (event.keyCode == 13) { //if 13 (aka enter) is hit...
    addToRoomSix(); //run function
    previousGuestsRoomSix(); //run function
  }
}
function addToRoomSix() {
  if (roomSixTotal < 4)
  {
    var li = document.createElement("li"); //create list element
    var newText = document.createTextNode(inputSix.value); //create text node from user's input
    li.appendChild(newText);
    var ol = document.getElementById('guestListSix'); //get ol
    ol.appendChild(li);
      
    //timestamp guest
    var time = new Date(); //create new date object
    var showTime = " " + "(" + (time.getMonth() + 1) +"/"+ time.getDate() +"/"+ time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ")"; //gets date and time (Jan is 0, Dec is 11)
    var textTime = document.createTextNode(showTime);
    var spanElem = document.createElement('span'); //create span element
    spanElem.appendChild(textTime);
    li.appendChild(spanElem);
      
    li.onclick = function() { //when li is clicked...
      this.parentNode.removeChild(this); //find li's parent node to remove the li
      roomSixTotal--; //subtract one from variable
      document.getElementById('fullSix').innerHTML = ""; //removes "Room full."
    }
  }
else
  {
    //tell user the room is full
    var createElem = document.getElementById('fullSix');
    var fullText = document.createTextNode("Room full! ");
    createElem.appendChild(fullText);
  }
}
function removeAllRoomSix() {
  var ol = document.getElementById("guestListSix");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullSix').innerHTML = ""; //removes "Room full."
  }
  
  roomSixTotal = 0; //reset variable
}
function previousGuestsRoomSix() { //display a list of all guests that have checked in since the script has been running
  if (roomSixTotal < 4)
  {
    var li = document.createElement("li"); //create list element
    var newText = document.createTextNode(inputSix.value); //create text node from user's input
    document.getElementById('inputSix').value = ""; //clear input box
    li.appendChild(newText);
    var ol = document.getElementById("allGuestsRoomSix");
    ol.appendChild(li);
    
    //timestamp guest
    var time = new Date(); //create new date object
    var showTime = " " + "(" + (time.getMonth() + 1) +"/"+ time.getDate() +"/"+ time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ")"; //gets date and time (Jan is 0, Dec is 11)
    var textTime = document.createTextNode(showTime);
    var spanElem = document.createElement('span'); //create span element
    spanElem.appendChild(textTime);
    li.appendChild(spanElem);
    
    roomSixTotal++; //add one to variable
  }
}

function lockRoomSix() {
  //delete all elements with class of "six" and have text saying "locked for cleaning"
  var callContain = document.getElementById("containerSix"); //getting everything for room 1
  callContain.style.display = 'none'; //...and hides it
  
  //display "Locked for cleaning text"
  var createElem = document.createElement("h2");
  createElem.className = "clean"; //gives h2 element a class
  createElem.id = "cleaningText";
  var newText = document.createTextNode("Room Six locked for cleaning.");
  createElem.appendChild(newText);
  var callDiv = document.getElementById('roomRoku');
  callDiv.appendChild(createElem);
  
  var spacing = document.createElement('br');
  spacing.id = "break";
  callDiv.appendChild(spacing);
  
  var createButton = document.createElement('button');
  createButton.className = "locks";
  createButton.id = "unlockButton";
  createButton.onclick = function() { //this function "unlocks" the room when button is clicked
    var callContain = document.getElementById("containerSix"); //getting everything for room 1
    callContain.style.display = 'inline'; //...and display it
    
    //delete the button, "Locked for cleaning", & breaks
    var h2Elem = document.getElementById('cleaningText');
    var callDiv = document.getElementById('roomRoku');
    callDiv.removeChild(h2Elem);
    var button = document.getElementById('unlockButton');
    callDiv.removeChild(button);
    var breaks = document.getElementById('break');
    callDiv.removeChild(breaks);
  };
  var buttonText = document.createTextNode("Unlock Room");
  createButton.appendChild(buttonText);
  callDiv.appendChild(createButton);
  
  callDiv.appendChild(spacing);//adds a br
  
  //removes all guests who are checked in
  var ol = document.getElementById("guestListSix");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullSix').innerHTML = ""; //removes "Room full."
  }
  roomSixTotal = 0; //reset variable
}