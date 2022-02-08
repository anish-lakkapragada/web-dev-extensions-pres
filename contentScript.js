/*window.addEventListener("load", () =>{
    for (const image of document.querySelectorAll("img")) {
        image.src = "https://lhswebdev.github.io/images/profiles/sangmin.png";
    }
})*/

function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
}

window.addEventListener("load", () => {
    chrome.storage.sync.get(['font'], (result) => {
        if (result.font == null) {return;}
        addStyle(`
            * {
                font-family: ${result.font} !important;
            }
        `); 
    })
}); 

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    const {font} = request; 
    addStyle(`
        * {
            font-family: ${font} !important;
        }
    `); 

    chrome.storage.sync.set({"font": font});


})