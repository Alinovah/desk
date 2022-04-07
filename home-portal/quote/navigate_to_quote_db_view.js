if(window.location.href.substring(0,67)=="https://desk.ngsub.tv/xtrf/faces/projectAssistant/quotes/quote.seam"){
let interval_redirect_quote_db = setInterval(function() {
    if($('[class^="input__item"]').length>=34){
        clearInterval(interval_redirect_quote_db);
        let input_items = document.querySelectorAll("div[class='input__item']");
        let service;
        input_items.forEach((div)=>{
          if(div.querySelector("div").innerText=="Service"){
            service = div.querySelectorAll("div")[1].innerText;
          }
        });
        if(service=="DB Quote"){
          let pid = window.assistedProjectId;
          let pm = document.querySelector("div[class='name']").textContent;
          window.location.href = `https://xtrfsubscriptions.ngsub.tv:7903/showquote?pid=${pid}&pm=${pm}` ;
        }
    }
},500);
}
