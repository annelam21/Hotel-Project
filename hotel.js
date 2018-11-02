var roomOneTotal = 0;

inputOne.onkeyup = function() { //when key is pressed while in input field, run function
  if (event.keyCode == 13) { //if 13(enter) is hit...
    addToRoomOne(); //run function
    previousGuestsRoomOne(); //run function
  }
}

function addToRoomOne() {
  if (roomOneTotal < 4)
  {
    //add guest name to list
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
    
    //remove guest
    li.onclick = function() { //when li is clicked...
      this.parentNode.removeChild(this); //find li's parent node to remove the li
      roomOneTotal--; //subtract one from variable
      document.getElementById('fullOne').innerHTML = ""; //removes "Room full!"
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
    document.getElementById('fullOne').innerHTML = ""; //removes "Room full!"
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
  //hide the room
  var callContain = document.getElementById("containerOne"); //getting everything for room 1
  callContain.style.display = 'none'; //...and hides it
  
  //removes all guests who are checked in
  var ol = document.getElementById("guestListOne");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullOne').innerHTML = ""; //removes "Room full."
  }
  roomOneTotal = 0; //reset variable
  
  //display locked text
  var callLockedTextDiv = document.getElementById('lockedRoomOne'); //getting everything for room 1
  callLockedTextDiv.style.display = 'inline'; //...and display it
}

function unlockRoomOne() {
  //display the room
  var callContain = document.getElementById('containerOne'); //getting everything for room 1
  callContain.style.display = 'inline'; //...and display it
  
  //hide the: unlock button, locked text, and br
  var callLockedTextDiv = document.getElementById('lockedRoomOne');
  callLockedTextDiv.style.display = 'none';
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
  //hide the room
  var callContain = document.getElementById("containerTwo"); //getting everything for room 2
  callContain.style.display = 'none'; //...and hides it
  
  //removes all guests who are checked in
  var ol = document.getElementById("guestListTwo");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullTwo').innerHTML = ""; //removes "Room full."
  }
  roomTwoTotal = 0; //reset variable
  
  //display locked text
  var callLockedTextDiv = document.getElementById('lockedRoomTwo'); //getting everything for room 2
  callLockedTextDiv.style.display = 'inline'; //...and display it
}

function unlockRoomTwo() {
  //display the room
  var callContain = document.getElementById('containerTwo'); //getting everything for room 2
  callContain.style.display = 'inline'; //...and display it
  
  //hide the: unlock button, locked text, and br
  var callLockedTextDiv = document.getElementById('lockedRoomTwo');
  callLockedTextDiv.style.display = 'none';
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
  //hide the room
  var callContain = document.getElementById("containerThree"); //getting everything for room 3
  callContain.style.display = 'none'; //...and hides it
  
  //removes all guests who are checked in
  var ol = document.getElementById("guestListThree");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullThree').innerHTML = ""; //removes "Room full."
  }
  roomThreeTotal = 0; //reset variable
  
  //display locked text
  var callLockedTextDiv = document.getElementById('lockedRoomThree'); //getting everything for room 3
  callLockedTextDiv.style.display = 'inline'; //...and display it
}

function unlockRoomThree() {
  //display the room
  var callContain = document.getElementById('containerThree'); //getting everything for room 3
  callContain.style.display = 'inline'; //...and display it
  
  //hide the: unlock button, locked text, and br
  var callLockedTextDiv = document.getElementById('lockedRoomThree');
  callLockedTextDiv.style.display = 'none';
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
  //hide the room
  var callContain = document.getElementById("containerFour"); //getting everything for room 1
  callContain.style.display = 'none'; //...and hides it
  
  //removes all guests who are checked in
  var ol = document.getElementById("guestListFour");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullFour').innerHTML = ""; //removes "Room full."
  }
  roomFourTotal = 0; //reset variable
  
  //display locked text
  var callLockedTextDiv = document.getElementById('lockedRoomFour'); //getting everything for room 4
  callLockedTextDiv.style.display = 'inline'; //...and display it
}

function unlockRoomFour() {
  //display the room
  var callContain = document.getElementById('containerFour'); //getting everything for room 4
  callContain.style.display = 'inline'; //...and display it
  
  //hide the: unlock button, locked text, and br
  var callLockedTextDiv = document.getElementById('lockedRoomFour');
  callLockedTextDiv.style.display = 'none';
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
  //hide the room
  var callContain = document.getElementById("containerFive"); //getting everything for room 1
  callContain.style.display = 'none'; //...and hides it
  
  //removes all guests who are checked in
  var ol = document.getElementById("guestListFive");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullFive').innerHTML = ""; //removes "Room full."
  }
  roomFiveTotal = 0; //reset variable
  
  //display locked text
  var callLockedTextDiv = document.getElementById('lockedRoomFive'); //getting everything for room 5
  callLockedTextDiv.style.display = 'inline'; //...and display it
}

function unlockRoomFive() {
  //display the room
  var callContain = document.getElementById('containerFive'); //getting everything for room 5
  callContain.style.display = 'inline'; //...and display it
  
  //hide the: unlock button, locked text, and br
  var callLockedTextDiv = document.getElementById('lockedRoomFive');
  callLockedTextDiv.style.display = 'none';
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
  //hide the room
  var callContain = document.getElementById("containerSix"); //getting everything for room 1
  callContain.style.display = 'none'; //...and hides it
  
  //removes all guests who are checked in
  var ol = document.getElementById("guestListSix");
  var olChildren = ol.childNodes;
  for (var i = olChildren.length; i > 0; i--) { //if ol has a child...
    ol.removeChild(olChildren[i - 1]); //...remove the child. Minus 1 bc index position
    document.getElementById('fullSix').innerHTML = ""; //removes "Room full."
  }
  roomSixTotal = 0; //reset variable
  
  //display locked text
  var callLockedTextDiv = document.getElementById('lockedRoomSix'); //getting everything for room 6
  callLockedTextDiv.style.display = 'inline'; //...and display it
}

function unlockRoomSix() {
  //display the room
  var callContain = document.getElementById('containerSix'); //getting everything for room 6
  callContain.style.display = 'inline'; //...and display it
  
  //hide the: unlock button, locked text, and br
  var callLockedTextDiv = document.getElementById('lockedRoomSix');
  callLockedTextDiv.style.display = 'none';
}
