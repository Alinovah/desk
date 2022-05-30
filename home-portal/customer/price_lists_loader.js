if(window.location.href.indexOf("https://desk.ngsub.tv/xtrf/faces/customer/browsePriceList")>-1){
  var content = document.querySelector('div[class="content-wrapper"]');
  var user_raw = document.querySelector("div[class='email']").innerHTML;
  var user = encodeURI(user_raw);
  content.innerHTML = '<iframe style="position:fixed;" width="90%" height="90%" src="https://xtrfsubscriptions.ngsub.tv:7899/calcprice?user='+user+'" title="pricelists"></iframe>';
}
