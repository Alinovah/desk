const BASE_URL = "https://alinovah.github.io/desk/home-portal/";
(()=>{
  //###invoices
  appendScript(`${BASE_URL}invoice/self_invoice.js`);
  appendScript(`${BASE_URL}invoice/mass_payment.js`);
  
  //###quotes
  appendScript(`${BASE_URL}quote/add_quote_management_view.js`);
  appendScript(`${BASE_URL}quote/navigate_to_quote_db_view.js`);
  
  //###projects
  appendScript(`${BASE_URL}project/duplicate_project.js`);
  
  //###projects and quotes
  appendScript(`${BASE_URL}project_and_quote/loader.js`);
  appendScript(`${BASE_URL}project_and_quote/fix_stuck_after_receivable.js`);
  
  //###customers
  appendScript(`${BASE_URL}customer/color_red.js`);
  
  //###reports
  appendScript(`${BASE_URL}report/add_margin_view.js`);
  
})();

/////////////////////// append script //////////////////////
function appendScript(url){
  let script = document.createElement("script")
  script.type = "text/javascript";
  script.src = url;
  document.querySelector("body").appendChild(script);
}
