if(location.href.includes("https://desk.ngsub.tv/xtrf/faces/providerInvoices/browse.seam")){
  var downloadinvoices = setInterval(function() {
    var button = document.createElement("button");
    var div = document.querySelector('div[class="x-title-bar__actions"]');
    if(!div){
    }else{
    clearInterval(downloadinvoices);
    button.innerText = "Download Invoice";
    button.className = "dropdown-toggle x-btn --large ng-scope"
    button.style.marginLeft = "10px"
    button.onclick=()=>{downloadInvoice()};
    div.appendChild(button);
    }
    }, 500);
}


async function downloadInvoice(){
  var checkboxes = document.querySelectorAll('input[id^="select-"]');
  var ids = [];
  for (var i=0;i<checkboxes.length;i++){
    if(checkboxes[i].checked){
      ids.push(checkboxes[i].id);
    }
  }
  
  var ids_clean = [];
  for (var i=0;i<ids.length;i++){
    if(ids[i]=="select-all"){
    }else{
      ids_clean.push(ids[i].substring(ids[i].indexOf("-")+1,ids[i].length));
    }
  }
  var url = "https://desk.ngsub.tv:7903/getinvoice";  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("accept", "application/vnd.xtrf-v1+json;charset=UTF-8");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        var links = xhr.responseText;
        if(!links.includes("missing")){
        if(ids_clean.length==2){
          links = JSON.parse(links);
          downloadBase64File("application/pdf",links[0],links[1].toString());
        }else{
          downloadBase64File("application/zip",links,"invoices.zip");
        }
      }else{
        var error = JSON.parse(links)[1];
        var row = document.querySelector("input[id='select-"+error+"']").parentElement.parentElement;
        var id = "";
        var ths = document.querySelectorAll("th");
        var index_invoice_number = 0;
        for(var i=0;i<ths.length;i++){
          if(ths[i].querySelector("span")){
            if(ths[i].querySelector("span").innerText.trim()=="Internal Number"){
              index_invoice_number=i;
            }
          }
        };
        var tds = row.querySelectorAll("td");
        id = tds[index_invoice_number].querySelector("div").querySelector("div").innerText
        console.log(id);
        alert(`Invoice `+id+` is missing the file. Pleaser change status back to "Sent".`);
      }
    }  
  }  
  ids_clean.unshift(ids_clean.length);
  console.log(ids_clean);
  xhr.send(JSON.stringify(ids_clean));
}

function downloadBase64File(contentType, base64Data, fileName) {
   const linkSource = `data:${contentType};base64,${base64Data}`;
   const downloadLink = document.createElement("a");
   downloadLink.href = linkSource;
   downloadLink.download = fileName;
   downloadLink.click();
}
