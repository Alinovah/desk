//////////////////////// generate masspayment ////////////////////////////////
  if(location.href.includes("https://desk.ngsub.tv/xtrf/faces/providerInvoices/browse.seam")){
  let createselfinvoice_interval = setInterval(function() {
    let button = document.createElement("button");
    let div = document.querySelector('div[class="x-title-bar__actions"]');
    if(!div){
    }else{
    clearInterval(createselfinvoice_interval);
    button.innerText = "Self Invoice";
    button.className = "dropdown-toggle x-btn --large ng-scope"
    button.style.marginLeft = "10px"
    button.onclick=()=>{createselfinvoice()};
    div.appendChild(button);
    }
    }, 500);
}


async function createselfinvoice(){
  let buffer_res = await fetch("https://xtrfsubscriptions.ngsub.tv:7903/createselfinvoice");
  let buffer = await buffer_res.text();
  downloadBase64File("aapplication/vnd.openxmlformats-officedocument.spreadsheetml.sheet",buffer,"SelfInvoice.xlsx");
}

function downloadBase64File(contentType, base64Data, fileName) {
   const linkSource = `data:${contentType};base64,${base64Data}`;
   const downloadLink = document.createElement("a");
   downloadLink.href = linkSource;
   downloadLink.download = fileName;
   downloadLink.click();
}
