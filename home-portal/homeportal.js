(()=>{
  appendScript("https://alinovah.github.io/desk/home-portal/invoice/self_invoice.js");
  appendScript("https://alinovah.github.io/desk/home-portal/project/duplicate_project.js");
  appendScript("https://alinovah.github.io/desk/home-portal/project_and_quote/fix_stuck_after_receivable.js");
  appendScript("https://alinovah.github.io/desk/home-portal/customer/color_red.js");
}).();

/////////////////////// append script //////////////////////
function appendScript(url){
  let script = document.createElement("script")
  script.type = "text/javascript";
  script.src = url";
  document.querySelector("body").appendChild(script);
}
