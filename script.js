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
    console.log(x);
    var shiftKeyPressed = event.shiftKey;
    if (x==13 && shiftKeyPressed == true){null;}
        else if (x==13){
            userBox = document.getElementById('userBox');
            lastUserMessage = userBox.value;
            historyOfMessages.push(lastUserMessage);

        

        userBox.value="hello you"; //userBox.defaultValue;
        
        newChatBox = document.createElement("textArea");
        newChatBox.setAttribute("type", "text");
        newChatBox.setAttribute("id", "bulle");
        newChatBox.style.display = "block";
        newChatBox.style.overflow = "hidden";
        newChatBox.style.textAlign = "right";
        newChatBox.value = lastUserMessage;
        newChatBox.disabled = true;
        nbOfLines = lastUserMessage.split('\n').length * 16.8; 
        nbOfLinesToString = nbOfLines.toString()+"px";
        userBox.setSelectionRange(10,0,"backward");


        newChatBox.style.height = nbOfLinesToString;

        document.getElementById('containerBulles').appendChild(newChatBox);
        
    }
  }

  