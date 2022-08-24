chrome.action.onClicked.addListener((tab) => {
    console.log(tab)
    if (tab.url.includes("thelocal.de")) {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['remove_paywall.js']
        });
    }
});
