// listen for the input element to give values 
// and then send a message to the content script. 

const inputElement = document.getElementsByTagName('input')[0];

inputElement.addEventListener("change", () => {
    // send a message to the content script saying what value the input has.
    chrome.tabs.query({"active": true, currentWindow: true}, (tabs) => {
        // tab[0] is the current tab that their on 
       chrome.tabs.sendMessage(tabs[0].id, {"font": inputElement.value});
    }) 
})