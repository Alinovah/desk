const BASE_URL = "https://alinovah.github.io/desk/home-portal/";
(()=>{
  //###invoices
  appendScript(`${BASE_URL}invoice/self_invoice.js`);
  appendScript(`${BASE_URL}invoice/mass_payment.js`);
  appendScript(`${BASE_URL}invoice/download_invoices.js`);
  appendScript(`${BASE_URL}invoice/color_vendors_who_didnt_send_invoices_red.js`);
  
  //###quotes
  appendScript(`${BASE_URL}quote/add_quote_management_view.js`);
  appendScript(`${BASE_URL}quote/navigate_to_quote_db_view.js`);
  appendScript(`${BASE_URL}quote/color_view_by_status.js`);
  
  //###projects
  appendScript(`${BASE_URL}project/duplicate_project.js`);
  appendScript(`${BASE_URL}project/split_project.js`);
  appendScript(`${BASE_URL}project/overallview.js`);
  appendScript(`${BASE_URL}project/add_payables.js`);
  appendScript(`${BASE_URL}project/add_new_editor_button.js`);
  
  //###projects and quotes
  appendScript(`${BASE_URL}project_and_quote/loader.js`);
  appendScript(`${BASE_URL}project_and_quote/fix_stuck_after_receivable.js`);
  appendScript(`${BASE_URL}project_and_quote/color_gantt.js`);
  appendScript(`${BASE_URL}project_and_quote/rearrange_view.js`);
  appendScript(`${BASE_URL}project_and_quote/rearrange_widgets.js`);
  appendScript(`${BASE_URL}project_and_quote/close_job_if_open.js`);
  appendScript(`${BASE_URL}project_and_quote/check_video_duration.js`);
  appendScript(`${BASE_URL}project_and_quote/hide_purchas_order.js`);
  appendScript(`${BASE_URL}project_and_quote/change_raw_materials_volume_field_name.js`);
  appendScript(`${BASE_URL}project_and_quote/rtl_textarea.js`);
  appendScript(`${BASE_URL}project_and_quote/color_empty_red.js`);
  appendScript(`${BASE_URL}project_and_quote/fix_duplicates_after_language_change.js`);
  appendScript(`${BASE_URL}project_and_quote/check_correct_pm.js`);
  
  //###customers
  appendScript(`${BASE_URL}customer/color_red.js`);
  appendScript(`${BASE_URL}customer/price_lists_loader.js`);
  
  //###reports
  appendScript(`${BASE_URL}report/add_margin_view.js`);
  
  //###dashboards
  appendScript(`${BASE_URL}dashboard/add_overallview_link.js`);
  appendScript(`${BASE_URL}dashboard/create_alerts_menu.js`); 
  appendScript(`${BASE_URL}dashboard/populate_alerts_menu.js`); 
  appendScript(`${BASE_URL}dashboard/color_tables.js`);
  appendScript(`${BASE_URL}dashboard/color_deadlines.js`);
  appendScript(`${BASE_URL}dashboard/color_MyActiveProjects_deadlines_red_most_updated.js`);
  appendScript(`${BASE_URL}dashboard/vendors_capacity.js`);
  
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
