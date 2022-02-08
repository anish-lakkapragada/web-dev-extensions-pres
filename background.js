chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({"font": "Comic Sans MS"});
}); 