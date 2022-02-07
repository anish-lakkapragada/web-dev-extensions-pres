/**
 * Lives on the browser side (not Node)
 *  - have access to the DOM
 *  - runs on the pages that your user is viewing
 * https://yt3.ggpht.com/ytc/AKedOLTvfmestRDOauidtnc3z5hlVPt8UksjaE0yzIFJ=s176-c-k-c0x00ffffff-no-rj
 */


// content script receives the message


function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
}

window.addEventListener("load", () => {
    chrome.storage.sync.get(['font'], (result) => {
        if (result.font != null) {
            addStyle(`
                * {
                    font-family: ${result.font} !important;
                }
            `);
        }
    })
})
  
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const {font} = request; 
    // inject this font onto the page. 
    chrome.storage.sync.set({"font": font});
    addStyle(`
        * {
            font-family : ${font} !important; 
        }
    `); 
})
