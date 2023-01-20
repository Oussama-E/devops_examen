/* istanbul ignore file */
try {
    const { isEmpty } = require("./services/validations");
    const { isValide}=  require("./services/validations");
    const gamerTagInput = document.getElementById("gamerTagInput");
    const checkButton = document.getElementById("gamerTagCheckButton");
    const feedbackMessage = document.getElementById("gamerTagFeedback");

    var gamerTagValue;
    var feedbackMessageText;

    gamerTagInput.addEventListener("change", (event) => {
        gamerTagValue = event.target.value;
    });

    checkButton.addEventListener("click", () => {
        // TODO: Add the logic to display the correct feedback message (error and validation)
        feedbackMessageText = isEmpty(gamerTagValue)
            if(feedbackMessageText== true ) return "Gamer tag cannot be empty"
        feedbackMessageText = isValide(gamerTagValue)
            if(feedbackMessageText) return "Gamer tag is valid";
        feedbackMessage.textContent = feedbackMessageText;
    });
} catch (err) {
    console.error(JSON.stringify(err));
}
