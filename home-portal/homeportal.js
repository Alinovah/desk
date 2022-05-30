const BASE_URL = "https://alinovah.github.io/desk/home-portal/";
(()=>{
  //###invoices
  appendScript(`${BASE_URL}invoice/self_invoice.js`);
  appendScript(`${BASE_URL}invoice/mass_payment.js`);
  
  //###quotes
  appendScript(`${BASE_URL}quote/add_quote_management_view.js`);
  appendScript(`${BASE_URL}quote/navigate_to_quote_db_view.js`);
  appendScript(`${BASE_URL}quote/color_view_by_status.js`);
  
  //###projects
  appendScript(`${BASE_URL}project/duplicate_project.js`);
  appendScript(`${BASE_URL}project/split_project.js`);
  
  //###projects and quotes
  appendScript(`${BASE_URL}project_and_quote/loader.js`);
  appendScript(`${BASE_URL}project_and_quote/fix_stuck_after_receivable.js`);
  appendScript(`${BASE_URL}project_and_quote/color_gantt.js`);
  appendScript(`${BASE_URL}project_and_quote/rearrange_view.js`);
  appendScript(`${BASE_URL}project_and_quote/rearrange_widgets.js`);
  appendScript(`${BASE_URL}project_and_quote/close_job_if_open.js`);
  appendScript(`${BASE_URL}project_and_quote/check_video_duration.js`);
  
  //###customers
  appendScript(`${BASE_URL}customer/color_red.js`);
  
  //###reports
  appendScript(`${BASE_URL}report/add_margin_view.js`);
  
  //###dashboards
  appendScript(`${BASE_URL}dashboard/add_overallview_link.js`);
  appendScript(`${BASE_URL}dashboard/create_alerts_menu.js`); 
  appendScript(`${BASE_URL}dashboard/populate_alerts_menu.js`); 
  
  //###home
  appendScript(`${BASE_URL}home/redirect-to-dashboard.js`);
  
})();

/////////////////////// append script //////////////////////
function appendScript(url){
  let script = document.createElement("script")
  script.type = "text/javascript";
  script.src = url;
  document.querySelector("body").appendChild(script);
} 
