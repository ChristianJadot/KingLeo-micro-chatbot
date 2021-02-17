//a function with a random out of three "Welcome Message"

function welcomeMessages() { 
    let welcomeMessages = ["Hi there buddy!", "Hey You!", "Well helo there!"];
    return welcomeMessages[Math.round(Math.random() * (welcomeMessages.length - 1))];
}

function howAreYouMessages(){
    let welcomeMessages = ["How are You today?", "How's it going?", "Tell me, How have you been?"];
    return welcomeMessages[Math.round(Math.random() * (welcomeMessages.length - 1))];

}

//a function with a random out of three "Welcome Message"


// a function that return a "not understood" message 
function notUnderstood() {
    let notUnderstood = ["Try again please, my robot-ears aren't what they used to be!", "I do not understand! Please repeat!", "What kind of language are you speaking? In English please!"];
    return notUnderstood[Math.round(Math.random() * (notUnderstood.length - 1))];
}

//  a function that returns a random out of three "anwser to an positive message"

function YesAnwsers() {
    let YesAnwsers = ["Well that's good to hear! Keep it up!", "Nice! Enjoying the good life right!", "That's the way to do it!"];
    return YesAnwsers[Math.round(Math.random() * (YesAnwsers.length - 1))];
}

// a function that returns a random out of three "anwser to an negative message"

function NoAnwsers() {
    let NoAnwsers = ["Don't worry to much. It will become better.", "Sometime life sucks but i won't stay that way I promise.", "I'm sorry I hope it gets better soon."];
    return NoAnwsers[Math.round(Math.random() * (NoAnwsers.length - 1))];
}


// goodbye message 

let byeMessage = "See you around";




// some variables which will be used in the robotAnswers function
var counter = 0;
var lastRobotMessage = "";

// !--------------------------------------------- DECLARATION OF THE ROBOTANSWER FUNCTION --------------------------------------------------


function robotAnswers() {

// this variable will determine if the response look positive or not
   var isPositive = 0;


positiveWords = ["yes", "good","lovely","top","nice","very good","great", "fine"];
negativeWords = ["no", "bad","not","not so good","awefull","shit","shitty", "tired"];

// Here we parse the last user message to find positive/negative words, in consequence of that we change the isPositive value
positiveWords.forEach(element => {
            if(lastUserMessage.toLowerCase().includes(element)){
            isPositive++;
 }})
negativeWords.forEach(element => {
            if(lastUserMessage.toLowerCase().includes(element)){
            isPositive--;
        }
});



// if isPositive is > 0 the robot answer with a positive sentence, < 0 a negative sentence, == 0 a "not understood" sentence. If counter >= than 3, the robot say goodbye
    if (isPositive>0){
       lastRobotMessage = YesAnwsers();
    }else if (isPositive<0){
        lastRobotMessage = NoAnwsers();
    }else{ counter++;
         if (counter <= 3){
        lastRobotMessage = notUnderstood()}
        else {lastRobotMessage = byeMessage;
            document.getElementById("text").disabled = true;}
    };


// ---------- script to create the BUBBLE

//  1 we create a "pre" that contain the last robot message and an a DIV of class "robot-answers", then we put the PRE inside the DIV
    Robotbubble = document.createElement("DIV");
    Robotbubble.classList.add("robot-answers");
    RobotbubbleSub = document.createElement("PRE");
    RobotbubbleSub.innerHTML = lastRobotMessage;
    Robotbubble.appendChild(RobotbubbleSub);


/*
<div class="robot-message">
                    <img class="robot-avatar" src="images/robot-avatar-happy.png" alt="Avatar KingLeo" width="50" height="50">
                    <div class="robot-answers">
                                              <pre> le text </pre>
                    </div>
</div>
*/

// 2 we create a DIV with the class "robot-message" that will contain the robot message and an avatar
    RobotbubbleParent = document.createElement("DIV");
    RobotbubbleParent.classList.add("robot-message");

// 3 we create the avatar with an img element with some properties
    avatar= document.createElement("IMG");
    avatar.classList.add("robot-avatar");
    avatar.src = "images/robot-avatar-happy.png";
    avatar.alt="Avatar KingLeo";
    avatar.width="50";
    avatar.height="50";

// 4 we put first the avatar in the div, then the message and last, all of this in the section of id "old-messages"
    RobotbubbleParent.appendChild(avatar);
    RobotbubbleParent.appendChild(Robotbubble);
    document.getElementById('old-messages').prepend(RobotbubbleParent);

}

//!------------ END OF THE FUNCTION ROBOTANSWER


//* this function can be used inside an "async" function to defer/delay actions in time
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

//* this function create the "KingLeo is thinking..." animation and then call the robotAnswers() function
  async function waitAndAnswer(){
      for (var i = 0 ; i<10;i++){
        document.getElementById('loading').innerHTML = "KingLeo is thinking.  "+makeid(5);
        await sleep(100);
        document.getElementById('loading').innerHTML = "KingLeo is thinking.. "+makeid(5);
        await sleep(100);
        document.getElementById('loading').innerHTML = "KingLeo is thinking..."+makeid(5);
        await sleep(100);  
    }
      document.getElementById('loading').innerHTML = "";
      robotAnswers();
  }


  //* this function is for fun, create random strings to simulate the robot is writing something
  function makeid(length) {
    var result           = '';
    var characters       = '¹&~#.0*/-+^ç=';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 


  
//! ---------------------- DECLARATION OF THE WELCOME FUNCTION ----------------------------

// this function is used to initialize everything and will be called when the web page will be openened

async function Welcome(){

    // first we simulate the robot is thinking...

    for (var i = 0 ; i<10;i++){
        document.getElementById('loading').innerHTML = "KingLeo is thinking.  "+makeid(5);
        await sleep(100);
        document.getElementById('loading').innerHTML = "KingLeo is thinking.. "+makeid(5);
        await sleep(100);
        document.getElementById('loading').innerHTML = "KingLeo is thinking..."+makeid(5);
        await sleep(100);  
    }
    document.getElementById('loading').innerHTML = "";

    // then we put a random Welcome message in a bubble with the avatar and we put everything inside the old-messages element
    lastRobotMessage = welcomeMessages();
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

    await sleep(450);

    for (var i = 0 ; i<5;i++){
        document.getElementById('loading').innerHTML = "KingLeo is thinking.  "+makeid(5);
        await sleep(100);
        document.getElementById('loading').innerHTML = "KingLeo is thinking.. "+makeid(5);
        await sleep(100);
        document.getElementById('loading').innerHTML = "KingLeo is thinking..."+makeid(5);
        await sleep(100);  
    }
    document.getElementById('loading').innerHTML = "";

    lastRobotMessage = howAreYouMessages();
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
    document.getElementById('old-messages').prepend(RobotbubbleParent);
}

//!------------ END OF THE FUNCTION WELCOME()



// start 
Welcome();

    
   
  

// we declare this variable outside of any function because it must be accessed from any of them
var lastUserMessage = "";



//! -----------------------------------------USER SPEAK FUNCTION DECLARATION---------------------------------
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

    }
}
// !-----------------------------------------END OF THE FUNCTION DECLARATION---------------------------------





// this function is the same as the userSpeak() function, but will be called when the user click on the send button
document.getElementById('submit').addEventListener('click', () => {

    userBox = document.getElementById('text');
    // get the value of it and assign that text to "lastUserMessage"
    lastUserMessage = userBox.value;



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
    // nbOfLines = (lastUserMessage.split('\n').length) * 16.8;
    // nbOfLinesToString = nbOfLines.toString() + "px";
    // set the height of the bubble

    // newChatBox.style.height = nbOfLinesToString;
    // add this bubble to the html document
    document.getElementById('old-messages').prepend(newChatBoxParent);
    waitAndAnswer()

})


