const inputElement = document.querySelectorAll('input')[0];

inputElement.addEventListener('change', () => {
    chrome.tabs.query({"active": true}, (tabs) =>{
        chrome.tabs.sendMessage(tabs[0].id, {"font": inputElement.value});
    })
})