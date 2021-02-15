//  bot say hello
//  bot say how are you?
// ! LOOP while(no "yes" / no "no")
// user answer
// bot say "I didn't understand, can you please try again"
//! end loop----------

//welcome messages + random message
let welcomeMessages = ["Hi there buddy! How are You today?","Hey You! How's it going?","Well helo there! Tell me, How have you been?"];

const randomIndex = Math.round(Math.random()*welcomeMessages.length);


console.log(welcomeMessages[randomIndex]);

//bot cannot understand + randomiser

let endMessages = ["Try again please, my robot-ears aren't what they used to be!","I do not understand! Please repeat!","What kind of language are you speaking? In English please!"];

const randomIndex2 = Math.round(Math.random()*endMessages.length);



// yes + randomiser

let YesAnwsers = ["Well that's good to hear! Keep it up!","Nice! Enjoying the good life right!","That's the way to do it!"];

const randomIndex3 = Math.round(Math.random()*YesAnwsers.length);


//no + randomiser 

let NoAnwsers =["Don't worry to much. It will become better.","Sometime life sucks but i won't stay that way I promise.","I'm sorry I hope it gets better soon."];

const randomIndex4 = Math.round(Math.random()*NoAnwsers.length);

// goodbye

let byeMessage = "See you around";

// bot answers

function robotAnswers() {
  
    if ( lastUserMessage.search(/\b(good|fine|top|very good)\b/i)) {
        console.log(YesAnwsers[randomIndex3])
    }
    else if ( lastUserMessage.search(/\b(bad|not|shitty|shit)\b/i)) {
        console.log(NoAnwsers[randomIndex3])}
    
    else  {console.log(endMessages[randomIndex2])};


}    




var historyOfMessages = []


var lastUserMessage = "";




var historyOfMessages = []
var lastUserMessage = "";




function userSpeak(event) {
    var x = event.which || event.keyCode;
    var shiftKeyPressed = event.shiftKey;
    if (x==13 && shiftKeyPressed == true) // Shift-Enter 
    {null;}
        else if (x==13){ // Just Enter
            // assign the user textArea to a variable "userBox"
            userBox = document.getElementById('userBox');
            // get the value of it and assign that text to "lastUserMessage"
            lastUserMessage = userBox.value;
            // push this value into "historyOfMessages"
            historyOfMessages.push(lastUserMessage);

        
            // Clear the userBox
            $('#userBox').val('');
        
            // BUBBLE CREATION with some properties
            newChatBox = document.createElement("textArea");
            newChatBox.setAttribute("type", "text");
            newChatBox.setAttribute("id", "bulle");
            newChatBox.style.display = "block";
            newChatBox.style.overflow = "hidden";
            newChatBox.style.textAlign = "right";
            newChatBox.value = lastUserMessage;
            newChatBox.disabled = true;
            // get the number of lines to set the height of the bubble
            nbOfLines = (lastUserMessage.split('\n').length-1) * 16.8; 
            nbOfLinesToString = nbOfLines.toString()+"px";
            // set the height of the bubble
            newChatBox.style.height = nbOfLinesToString;
            // add this bubble to the html document
            document.getElementById('containerBulles').appendChild(newChatBox);
            robotAnswers();

    }
  }

  