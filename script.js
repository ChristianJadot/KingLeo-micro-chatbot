//  bot say hello
//  bot say how are you?
// ! LOOP while(no "yes" / no "no")
// user answer
// bot say "I didn't understand, can you please try again"
//! end loop----------


let welcomeMessages = ["Hi there buddy! How are You today?","Hey You! How's it going?","Well helo there! Tell me, How have you been?"];

const randomIndex = Math.round(Math.random()*welcomeMessages.length);

console.log(welcomeMessages[randomIndex]);


let endMessages = ["Try again please, my robot-ears aren't what they used to be!","I do not understand! Please repeat!","What kind of language are you speaking? In English please!"];

const randomIndex2 = Math.round(Math.random()*endMessages.length);

console.log(endMessages[randomIndex2]);


var historyOfMessages = []

var lastUserMessage = "";




function myFunction(event) {
    var x = event.which || event.keyCode;
    var shiftKeyPressed = event.shiftKey;
    console.log(shiftKeyPressed);
    if (x==13){
        lastUserMessage = document.getElementById('userBox').value;
        historyOfMessages.push(lastUserMessage);
        document.getElementById('userBox').value = "";
        newChatBox = document.createElement("textArea");
        newChatBox.setAttribute("type", "text");
        newChatBox.setAttribute("id", "bulle");
        newChatBox.style.display = "block";
        newChatBox.style.textAlign = "right";
        // newChatBox.setAttribute("value", lastUserMessage);
        newChatBox.value = lastUserMessage;
        newChatBox.disabled = true;
        document.getElementById('containerBulles').appendChild(newChatBox);
        console.log(lastUserMessage);
    }
  }

  