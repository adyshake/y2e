// content.js

chrome.runtime.onMessage.addListener
(
    function(request, sender, sendResponse)
    {
        if( request.message === "clicked_browser_action" )
        {
            $( "title").text("YouTube")
            $( "body" ).empty()
            $( "body" ).append("<br><br><br><br>")
            $( "body" ).append("<div align='center'></div>")
            $( "div" ).append("<iframe title='Youtube Video Player' width='640' height='390' frameborder='0' allowfullscreen style='border: 1px solid black'></iframe>");
            
            var url = window.location.href;
            var watch_id_path =  url.split("/")[3]
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
            
            $( "iframe").attr({
                'src': final_url,
            });
        }  
    }
);
