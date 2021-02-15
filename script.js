//  bot say hello
//  bot say how are you?
// ! LOOP while(no "yes" / no "no")
// user answer
// bot say "I didn't understand, can you please try again"
//! end loop----------




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

  