/*let text = "Will AI grow in the next 10 years";

text = text.toLowerCase();
if (text.includes("grow") || text.includes("growth")) {
    sayGrowth();
}
*/

console.log("Button pressed.");

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
    text.style.alignSelf = "flex";
    text.style.color = "black";
    text.style.width = "fit-Content";
    text.style.padding = "5px";
    text.style.borderRadius = "5px";
    text.style.border = "2px solid darkolivegreen";
    // append message to the box
    let messageBox = document.getElementById("addHere");
    addHere.appendChild(text);

}