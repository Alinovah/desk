if(window.location.href.includes("https://desk.ngsub.tv/xtrf/faces/quote/browse.seam")){
      let quoteview_interval = setInterval(function() {
      let ul = document.querySelectorAll("ul")[6];
      if(ul){
        clearInterval(quoteview_interval);
        let li = document.createElement("li");
        li.innerHTML = "Quote Management";
        li.style.padding = "13px";
        li.onclick = (e)=>{showQuoteManagement(e.target)};
        ul.appendChild(li);
      }
    }, 500);
}

if(window.location.href.includes("&quotemgm")){
  let quoteview_interval_reload = setInterval(function() {
    let ul = document.querySelectorAll("ul")[6];
    if(ul){
    clearInterval(quoteview_interval_reload);
    let lis = ul.querySelectorAll("li");
    lis.forEach((li)=>{
      if(li.innerHTML=="Quote Management"){
        li.classList.add("active");
        li.style.paddingTop = "3px";
      }else{
        li.classList.remove("active");
      }
    });
    document.querySelector("h1").remove();
    let content = document.querySelector("div[class='content']");
    let pm = document.querySelector('div[class="name"]').textContent;
    content.innerHTML = '<iframe style="position:fixed;border:0;" width="95%" height="87%" src="https://xtrfsubscriptions.ngsub.tv:7903/quote?pm='+pm+'" title="overallview"></iframe>';
    }
  }, 500);
}

function showQuoteManagement(target){
  let lis = target.parentElement.querySelectorAll("li");
  lis.forEach((li)=>{
    li.classList.remove("active");
  });
  target.classList.add("active");
      
  const url = new URL(window.location);
  url.searchParams.set('quotemgm', 'quotemgm');
  window.history.pushState({}, '', url);
  //window.location.href = window.location.href + "&quotemgm";
      
  target.style.padding = "3px";
  document.querySelector("h1").remove();
  let content = document.querySelector("div[class='content']");
  let pm = document.querySelector('div[class="name"]').textContent;
  content.innerHTML = '<iframe style="position:fixed;border:0;" width="95%" height="87%" src="https://xtrfsubscriptions.ngsub.tv:7903/quote?pm='+pm+'" title="overallview"></iframe>';
}
