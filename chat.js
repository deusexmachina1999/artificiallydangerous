/*let text = "Will AI grow in the next 10 years";

text = text.toLowerCase();
if (text.includes("grow") || text.includes("growth")) {
    sayGrowth();
}
*/

console.log("Button pressed.");

function start() {
    let start = document.getElementById("chat");
    start.style.backgroundColor = "black";
    let body = document.getElementById("chat1");
    body.style.backgroundColor = "black";
}

// Work on ^

function sendMessage() {
    console.log("Button pressed.");
    // Get user input
    let input = document.getElementById("userResponse");
    let userData = input.value;
    input.value = "";
    console.log(userData)

// make somewhere to put it
    let text = document.createElement("p");

    // Make user input fill the p made
    text.innerHTML = userData;

    //change styles
    text.style.backgroundColor = "darkseagreen";
    text.style.alignSelf = "flex-end";
    // append message to the box
    let messageBox = document.getElementById("chatbot");
    chatbot.appendChild(text);

}