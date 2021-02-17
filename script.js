

//welcome messages + random message
let welcomeMessages = ["Hi there buddy! How are You today?", "Hey You! How's it going?", "Well helo there! Tell me, How have you been?"];

const randomIndex = Math.round(Math.random() * (welcomeMessages.length - 1));

//bot cannot understand + randomiser

let endMessages = ["Try again please, my robot-ears aren't what they used to be!", "I do not understand! Please repeat!", "What kind of language are you speaking? In English please!"];

const randomIndex2 = Math.round(Math.random() * (endMessages.length - 1));



// yes + randomiser

let YesAnwsers = ["Well that's good to hear! Keep it up!", "Nice! Enjoying the good life right!", "That's the way to do it!"];

const randomIndex3 = Math.round(Math.random() * (YesAnwsers.length - 1));


//no + randomiser 

let NoAnwsers = ["Don't worry to much. It will become better.", "Sometime life sucks but i won't stay that way I promise.", "I'm sorry I hope it gets better soon."];

const randomIndex4 = Math.round(Math.random() * (NoAnwsers.length - 1));

// goodbye

let byeMessage = "See you around";

// bot answers

// if counter
var counter = 0;
var lastRobotMessage = "";

function robotAnswers() {

   var isPositive = 0;

      /*  if (lastUserMessage.includes("yes")){
            isPositive++;

        };
        if(lastUserMessage.includes("no")){
            isPositive--;
        }
*/

positiveWords = ["yes", "good","lovely","top","nice","very good","great"];
negativeWords = ["no", "bad","not","not so good","awefull","shit","shitty"];

positiveWords.forEach(element => {
            if(lastUserMessage.includes(element)){
            isPositive++;
 }})
negativeWords.forEach(element => {
            if(lastUserMessage.includes(element)){
            isPositive--;
        }
});


    if (isPositive>0){
       lastRobotMessage = YesAnwsers[randomIndex3]
    }else if (isPositive<0){
        lastRobotMessage = NoAnwsers[randomIndex4]
    }else{ counter++;
         if (counter <= 3){
        lastRobotMessage = endMessages[randomIndex2]}
        else {lastRobotMessage = byeMessage}
    };

    Robotbubble = document.createElement("PRE");
    Robotbubble.classList.add("robot-answers");
    Robotbubble.innerHTML = lastRobotMessage;
    RobotbubbleParent = document.createElement("DIV");
    RobotbubbleParent.classList.add("robot-message");
    RobotbubbleParent.appendChild(Robotbubble);
    avatar= document.createElement("IMG");
    avatar.classList.add("robot-avatar");
    avatar.src = "images/robot-avatar-happy.png";
    avatar.alt="Avatar KingLeo";
    avatar.width="50";
    avatar.height="50";

    RobotbubbleParent.appendChild(avatar);
    document.getElementById('old-messages').prepend(RobotbubbleParent);

    $('#old-messages').scrollTo(50000000);

}





function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  


  async function waitAndAnswer(){
      for (var i = 0 ; i<10;i++){
        document.getElementById('loading').innerHTML = "KingLeo is thinking.";
        await sleep(100);
        document.getElementById('loading').innerHTML = "KingLeo is thinking..";
        await sleep(100);
        document.getElementById('loading').innerHTML = "KingLeo is thinking...";
        await sleep(100);  
    }
      document.getElementById('loading').innerHTML = "";
      robotAnswers();
  }

  

async function Welcome(){
    for (var i = 0 ; i<10;i++){
        document.getElementById('loading').innerHTML = "KingLeo is thinking.";
        await sleep(100);
        document.getElementById('loading').innerHTML = "KingLeo is thinking..";
        await sleep(100);
        document.getElementById('loading').innerHTML = "KingLeo is thinking...";
        await sleep(100);  
    }
    document.getElementById('loading').innerHTML = "";
    lastRobotMessage = welcomeMessages[randomIndex];
    Robotbubble = document.createElement("PRE");
    Robotbubble.classList.add("robot-answers");
    Robotbubble.innerHTML = lastRobotMessage;
    RobotbubbleParent = document.createElement("DIV");
    RobotbubbleParent.classList.add("robot-message");
    
    
    avatar= document.createElement("IMG");
    avatar.classList.add("robot-avatar");
    avatar.src = "images/robot-avatar-happy.png";
    avatar.alt="Avatar KingLeo";
    avatar.width="50";
    avatar.height="50";

    RobotbubbleParent.appendChild(avatar);
    RobotbubbleParent.appendChild(Robotbubble);
    document.getElementById('old-messages').appendChild(RobotbubbleParent);
}


Welcome();

    
   
  


var historyOfMessages = []
var lastUserMessage = "";


function userSpeak(event) {
    var x = event.which || event.keyCode;
    var shiftKeyPressed = event.shiftKey;
    if (x == 13 && shiftKeyPressed == true) // Shift-Enter 
    { null; }
    else if (x == 13) { // Just Enter
        // assign the user textArea to a variable "userBox"
        userBox = document.getElementById('text');
        // get the value of it and assign that text to "lastUserMessage"
        lastUserMessage = userBox.value;
        // push this value into "historyOfMessages"
        historyOfMessages.push(lastUserMessage);


        // Clear the userBox
        $('#text').val('');

        // BUBBLE CREATION with some properties
        //      we create a "pre" element and we add a "user-answers"
        newChatBox = document.createElement("PRE");
        newChatBox.classList.add("user-answers");
        //      we put the message in it 
        newChatBox.innerHTML = lastUserMessage;
        //      we create the div element and we add to it the class "user-message"
        newChatBoxParent = document.createElement("DIV");
        newChatBoxParent.classList.add("user-message");
        //      AND HERE WE PUT THE PRE INSIDE THE DIV
        newChatBoxParent.appendChild(newChatBox);
        // newChatBox.disabled = true;
        // get the number of lines to set the height of the bubble
        // I think lines 100 to 104 is facultative
        nbOfLines = (lastUserMessage.split('\n').length - 1) * 16.8;
        nbOfLinesToString = nbOfLines.toString() + "px";
        // set the height of the bubble
        newChatBox.style.height = nbOfLinesToString;
        // add this bubble to the html document
        // BUT HERE SOMETHING IMPORTANT WE PUT THE TWO NESTED ELEMENT PREVIOUSLY CREATED INSIDE THE ELEMENT "old-messages"
        document.getElementById('old-messages').prepend(newChatBoxParent);
        waitAndAnswer()
        $('#old-messages').scrollTo(50000000);

    }
}

document.getElementById('submit').addEventListener('click', () => {

    console.log("send");

    userBox = document.getElementById('text');
    // get the value of it and assign that text to "lastUserMessage"
    lastUserMessage = userBox.value;
    // push this value into "historyOfMessages"
    historyOfMessages.push(lastUserMessage);


    // Clear the userBox
    $('#text').val('');

    // BUBBLE CREATION with some properties
    newChatBox = document.createElement("PRE");
    newChatBox.classList.add("user-answers");
    newChatBox.innerHTML = lastUserMessage;
    newChatBoxParent = document.createElement("DIV");
    newChatBoxParent.classList.add("user-message");
    newChatBoxParent.appendChild(newChatBox);
    // newChatBox.disabled = true;
    // get the number of lines to set the height of the bubble
    nbOfLines = (lastUserMessage.split('\n').length) * 16.8;
    nbOfLinesToString = nbOfLines.toString() + "px";
    // set the height of the bubble
    newChatBox.style.height = nbOfLinesToString;
    // add this bubble to the html document
    document.getElementById('old-messages').appendChild(newChatBoxParent);
    waitAndAnswer()
    $('#old-messages').scrollTo(50000000);

})










// function robotAnswers() {

//     var positiveWords = /(can't complain)|(great)|(not bad)|(not so bad)|(good)|(top)|(fine)|(very good)|(yes)/g;
//     var negativeWords = /not so good|not/g; //bad|not( so good)?|shitty|shit|not good|no|not



//     isPositive = lastUserMessage.match(positiveWords) == null ? [] : lastUserMessage.match(positiveWords).length;
//     isNegative = lastUserMessage.match(negativeWords) == null ? [] : lastUserMessage.match(negativeWords).length;


//     console.log(lastUserMessage.match(positiveWords));
//     console.log(lastUserMessage.match(negativeWords));

//     if (isPositive >= isNegative && isPositive > 0) {
//         console.log(YesAnwsers[randomIndex3])
//     }
//     else if (isNegative > isPositive) {
//         console.log(NoAnwsers[randomIndex3])
//     }
//     else {
//         counter++;
//         if (counter <= 3) { console.log(endMessages[randomIndex2]) }
//         else { console.log("I don't have time for this !") }
//     };
// }

