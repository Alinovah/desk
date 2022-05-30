if(window.location.href.indexOf("https://desk.ngsub.tv/xtrf/faces/workflowResource/browse.seam")>-1){
    let interval = setInterval(()=>{
        if(window.location.href.includes("overallview")){
            clearInterval(interval);
        }else{
            document.querySelector("h1").remove();
            let content = document.querySelector("div[class='content']");
            let pm = document.querySelector('div[class="name"]').textContent;
            content.innerHTML = '<iframe style="position:fixed;" width="95%" height="87%" src="https://xtrfsubscriptions.ngsub.tv:7903/overallview?pm='+pm+'" title="overallview"></iframe>';
            window.history.pushState(null,null,window.location.href+"?overallview");
        }
    },500);
}
