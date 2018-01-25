// content.js

chrome.runtime.onMessage.addListener
(
    function(request, sender, sendResponse)
    {
        if( request.message === "clicked_browser_action" )
        {
            var url = window.location.href;
            chrome.runtime.sendMessage({"message": "open_new_tab", "url": url});
        }
    }
);