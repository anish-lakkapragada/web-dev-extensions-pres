const inputElement = document.querySelectorAll("input")[0]; 

inputElement.addEventListener("change", () => {
    // send this to the content script
    chrome.tabs.query({"active": true, currentWindow: true}).then(tabs => {
        chrome.tabs.sendMessage(tabs[0].id, { "font": inputElement.value }); 
    });
})