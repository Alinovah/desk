if(location.href.includes("https://desk.ngsub.tv/xtrf/faces/providerInvoices/browse.seam")){
  invoiceVerification();
  async function invoiceVerification(){
  var res = await fetch("https://xtrfsubscriptions.ngsub.tv:7903/invoiceverification");
  var emails = await res.json();
  var invoiceverification = setInterval(async function() {
    var link = location.href;
    if(link.includes("https://desk.ngsub.tv/xtrf/faces/providerInvoices/browse.seam?viewId=8")){
      var table = document.querySelector("table");
      var ths = table.querySelector("thead").querySelectorAll("th");
      var trs = table.querySelector("tbody").querySelectorAll("tr");
      for(var i=0;i<ths.length;i++){
        if(ths[i].innerText=="Vendor > Address > E-mail Address"){
          for(j=0;j<trs.length;j++){
            var tds = trs[j].querySelectorAll("td");
            var email = tds[i].innerText;
            if(emails.includes(email)){
              trs[j].style.backgroundColor = "#ffb3b3";
            }
          }
        }
      }
    }
  }, 500);
}
}
