if(window.location.href.substring(window.location.href.length-63,window.location.href.length)=="paFinancePanel%3AformWithPanels%3AreceivablesTab&action=#/quote"){
  console.log("bad url");
  var redirect = window.location.href.substring(0,window.location.href.length-69);
  console.log(redirect);
  window.location = redirect;
}
if(window.location.href.substring(window.location.href.length-65,window.location.href.length)=="paFinancePanel%3AformWithPanels%3AreceivablesTab&action=#/project"){ 
   console.log("bad url");
   var redirect = window.location.href.substring(0,window.location.href.length-71);
   console.log(redirect);
   window.location = redirect;
}   
if(window.location.href.substring(window.location.href.length-62,window.location.href.length)=="paFinancePanel%3AformWithPanels%3AreceivablesTab&action=#/project"){ 
   console.log("bad url");
   var redirect = window.location.href.substring(0,window.location.href.length-68);
   console.log(redirect);
   window.location = redirect;
}   
