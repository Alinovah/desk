//////////////////////// generate masspayment ////////////////////////////////
  if(location.href.includes("https://desk.ngsub.tv/xtrf/faces/providerInvoices/browse.seam")){
  var createmasspayment_int = setInterval(function() {
    var button = document.createElement("button");
    var div = document.querySelector('div[class="x-title-bar__actions"]');
    if(!div){
    }else{
    clearInterval(createmasspayment_int);
    button.innerText = "MassPayment Payoneer";
    button.className = "dropdown-toggle x-btn --large ng-scope"
    button.style.marginLeft = "10px"
    button.onclick=()=>{createmasspayment()};
    div.appendChild(button);
    }
    }, 500);
}

async function createmasspayment(){
  var buffer_res = await fetch("https://xtrfsubscriptions.ngsub.tv:7903/createmasspayment");
  var buffer = await buffer_res.text();
  downloadBase64File("aapplication/vnd.openxmlformats-officedocument.spreadsheetml.sheet",buffer,"MassPayment.xlsx");
}

function downloadBase64File(contentType, base64Data, fileName) {
   const linkSource = `data:${contentType};base64,${base64Data}`;
   const downloadLink = document.createElement("a");
   downloadLink.href = linkSource;
   downloadLink.download = fileName;
   downloadLink.click();
}
