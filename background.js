// background.js

chrome.browserAction.onClicked.addListener(function(tab)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
});

chrome.runtime.onMessage.addListener
(
    function(request, sender, sendResponse)
    {
        if( request.message === "open_new_tab" )
        {
            var watch_id_path =  request.url.split("/")[3]
            var watch_id
            if(watch_id_path.length > 19)
            {
                watch_id = watch_id_path.slice(8, 19)
            }
            else
            {
                watch_id = watch_id_path.slice(8)
            }
            var final_url = "https://www.youtube.com/embed/"+watch_id
            chrome.tabs.update({"url": final_url});
        }
    }
);