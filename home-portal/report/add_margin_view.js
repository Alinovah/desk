if(location.href.includes("https://desk.ngsub.tv/xtrf/faces/reports2/")||location.href.includes("https://desk.ngsub.tv/xtrf/faces/reports/")||location.href.includes("https://desk.ngsub.tv/xtrf/faces/cashFlow/")){
  let marginview = setInterval(function() {
    let ul = document.querySelectorAll("ul")[6];
    if(ul){
      clearInterval(marginview);
      let li = document.createElement("li");
      li.innerHTML = "Margin View";
      li.style.padding = "13px";
      if(location.href.includes("https://desk.ngsub.tv/xtrf/faces/cashFlow/")){
        li.style.padding = "3px";
      }
      li.onclick = (e)=>{showMargin(e.target)};
      ul.appendChild(li);
    }
  }, 500);
}

function showMargin(target){
  let lis = target.parentElement.querySelectorAll("li");
  lis.forEach((li)=>{
    li.classList.remove("active");
  });
  target.classList.add("active");
  target.style.padding = "3px";
  document.querySelector("h1").remove();
  let content = document.querySelector("div[class='content']");
  content.innerHTML = '<iframe style="position:fixed;" width="95%" height="87%" src="https://xtrfsubscriptions.ngsub.tv:7903/roireport" title="Margin View"></iframe>';
}
