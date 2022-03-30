if(window.location.href.substring(0,51)=='https://desk.ngsub.tv/xtrf/faces/customer/form.seam'){  
  let interval2 = setInterval(function() {
    let spans = document.querySelectorAll("span");
    for(var i=0;i<spans.length;i++){
      if(spans[i].textContent=='Main Data'||spans[i].textContent=='Invoicing'||spans[i].textContent=="Identification Data"){
        spans[i].parentElement.style.backgroundColor = "#ffa8a8";
      }
    }
    let label = document.querySelectorAll("label");
    for(var i=0;i<label.length;i++){
      if(label[i].textContent=="Tax No. "||label[i].textContent=="Industries"||label[i].textContent=="Categories"||label[i].textContent=="Default Payment Terms"){
        label[i].parentElement.style.backgroundColor = "#ffa8a8";
      }
    }
  }, 500);
}
