if(window.location.href.indexOf("https://desk.ngsub.tv/xtrf/faces/workflowResource/browse.seam")>-1){
    let interval = setInterval(()=>{
        if(window.location.href.includs("overallview")){
            clearInterval(interval);
        }else{
            document.querySelector("h1").remove();
            let content = document.querySelector("div[class='content']");
            let pm = document.querySelector('div[class="name"]').textContent;
            content.innerHTML = '<iframe style="position:fixed;" width="95%" height="87%" src="https://xtrfsubscriptions.ngsub.tv:7903/overallview?pm='+pm+'" title="overallview"></iframe>';
            url.searchParams.set('overallview', true);
        }
    },500);
}
