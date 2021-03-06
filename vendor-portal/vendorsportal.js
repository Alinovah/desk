var ui_G = "";
var currentlink = window.location.href;

if (currentlink.includes("https://desk.ngsub.tv/vendors/")) {
  //####################### get the ui #########################
  let getui = setInterval(async function () {
    let email_container = document.querySelector("span[class*='email']")||document.querySelector("span.email");
    if (email_container) {
      clearInterval(getui);
      let email = email_container.innerText;
      let ui_res = await fetch(
        "https://xtrfsubscriptions.ngsub.tv:7898/getui?id=" + email
      );
      let ui = await ui_res.json();
      ui_G = ui;
      console.log(ui);
      start(ui);
    }
  }, 500);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function start(ui) {
  if (ui == "Standard") {
    
    /// NG Editor button handler
    let editor_button_interval = setInterval(function () {
//   if(location.href.includes("?Editor")){
//     let url = new URL(window.location);
//     url = url.href;
//     url = url.toString().split("/").pop();
//     const jobid = url.split("-").pop();
//     console.log(jobid);
//     const nav = document.querySelector(".portal.ng-scope.main-nav-wrapper");
//     if(nav.style.display!="none"){
//       console.log(url);
//       console.log(jobid);
//       if(location.href.includes("invoices?Editor")){
//         location.href = `https://desk.ngsub.tv/vendors/#/jobs/${jobid}?Editor-${jobid}`;
//         location.reload();
//       }else{
//         openEditor(jobid);
//       }
//     }
//  }else
  if (location.href.includes("https://desk.ngsub.tv/vendors/#/jobs/")) {
    const url = new URL(window.location);
    const jobid = url.toString().split("/").pop();
    const actions_bar = document.querySelectorAll(".actions")[1];
    if (actions_bar) {
      ///////////////////////////////////////////////////////////////////////
      hideDownloadAll(actions_bar);
      const editorButton = createEditorButton(jobid);
      actions_bar.appendChild(editorButton);
      ///////////////////////////////////////////////////////////////////////
    }
  }//else if(location.href.includes("https://desk.ngsub.tv/vendors/#/welcome")||location.href.includes("https://desk.ngsub.tv/vendors/#/jobs")){
//     const nav = document.querySelector(".portal.ng-scope.main-nav-wrapper");
//     const content = document.querySelector(".content.portal.ng-scope");
//     const iframe = document.querySelector("#editor");
//     if(nav)    nav.style.display = "block";
//     if(content) content.style.display = "block";
//     if(iframe) iframe.remove();
//   }
}, 1000);
//////////////////////////////////////////////////////////////
function hideDownloadAll(actions_bar){
  const download_button = actions_bar.querySelector("a");
  download_button.style.display = "none";
}
function createEditorButton(jobid){
  let button;
  if(!document.querySelector("#editor-button")){
    button = document.createElement("button");
    button.id = "editor-button";
    button.type = "button";
    button.className = "btn ng-binding ng-scope";
    button.innerText = "NG Editor";
    button.onclick = () =>{openEditor(jobid)};
  }else{
    button = document.querySelector("#editor-button");
  }
  return button;
}
function openEditor(jobid){
  console.log(jobid);
  const nav = document.querySelector(".portal.ng-scope.main-nav-wrapper");
  const content = document.querySelector(".content.portal.ng-scope");
//   nav.style.display = "none";
//   content.style.display = "none";
  const id = document.querySelector("h1.ng-binding.ng-scope").innerText.split(":").pop().trim();
  console.log(id);
  const hash64 = btoa(id);
  console.log(hash64);
//   const iframe = document.createElement("iframe");
//     iframe.id = "editor";
//     iframe.style.border = "none";
//     iframe.style.width = "100vw";
//     iframe.style.height = "100vh";
//     iframe.style.position = "absolute";
//     iframe.src = `http://3.121.36.180:7905/${jobid}?id=${hash64}`;//`https://desk.ngsub.tv/subs-editor/${jobid}`;
//     console.log(iframe.src);
    window.open(`http://3.121.36.180:7905/${jobid}?id=${hash64}`, '_blank');
//     window.open(`http://3.121.36.180:7905/${jobid}?id=${hash64}`, '_self');
  const body = document.querySelector("body");
  // body.appendChild(iframe);
//   let old_ref = window.location.href
//   if(!old_ref.includes("?Editor")) old_ref+="?Editor-"+jobid;
//   const interval = setInterval(()=>{
//     if(location.href.includes("https://desk.ngsub.tv/vendors/#/welcome")||location.href=="https://desk.ngsub.tv/vendors/#/jobs"){
//       const nav = document.querySelector(".portal.ng-scope.main-nav-wrapper");
//       const content = document.querySelector(".content.portal.ng-scope");
//       const iframe = document.querySelector("#editor");
//       if(nav)    nav.style.display = "block";
//       if(content) content.style.display = "block";
//       if(iframe) iframe.remove();
//       clearInterval(interval);
//     }else{
//       if(window.location.href==old_ref){
//         window.location.href="#/invoices?Editor-"+jobid;
//       }else{
//         window.location.href=old_ref;
//       }
//     }
//   },10000);
//   setInterval(()=>{
//     if(window.location.href=="https://desk.ngsub.tv/vendors/#/sign-in"){
//       old_ref = "https://desk.ngsub.tv/vendors/#/sign-in";
//       location.reload();
//     } 
//   },500);
}
    
    
  } else if (ui == "Netflix") {
    let start_interval = setInterval(function () {
      let location = window.location.href;
      //############### check if inside job #################
      let inside_job_location = "https://desk.ngsub.tv/vendors/#/jobs/";
      if (location.includes(inside_job_location)) {
        //### check if job is netflix ###
        let job_type = document.querySelector(
          'dd[class="job-type ng-binding"]'
        );
        if (job_type) {
          job_type = job_type.innerText;
          if (job_type == "Netflix") {
            //### change text of submit buttons ###
            let partial_finished_button = document.querySelector(
              "span[translate='JOB.PARTLY_FINISH']"
            );
            partial_finished_button.textContent = "Save Uploaded Files";
            let finished_button = document.querySelector(
              "span[translate='JOB.FINISH']"
            );
            finished_button.textContent = "Confirm Job";
          }
        }
      }
      //############### check if main page #################
      let main_paje_location = "https://desk.ngsub.tv/vendors/#/jobs";
      if (location == main_paje_location) {
        //### get "in progress" table ###
        let table_in_progress = document.querySelector(
          "table[ng-show='jobs.inProgress.list.length']"
        );
        //### check if table already loaded ###
        if (table_in_progress) {
          //### change tables names ###
          let table_titles = document.querySelectorAll("h2");
          table_titles.forEach((title) => {
            if (title.innerText === "Jobs in progress") {
              title.innerText = "Jobs Pending Your Confirmation";
            } else if (title.innerText === "Pending Jobs") {
              title.innerText =
                "Jobs Pending Netflix Confirmation (no action is needed)";
            } else if (title.innerText === "Completed Jobs") {
              title.innerText = "Jobs Confirmed";
            }
          });
          //### get table and rows ###
          let tbody = table_in_progress.getElementsByTagName("tbody")[0];
          let thead = table_in_progress
            .getElementsByTagName("thead")[0]
            .querySelector("tr");
          let rows = tbody.getElementsByTagName("tr");
          //### add columns in header ###
          if (
            thead
              .querySelectorAll("th")
              [thead.querySelectorAll("th").length - 1].querySelector("div")
              .textContent == "Confirm"
          ) {
            //### do nothing ###
          } else {
            let th_confirm = document.createElement("th");
            let th_price = document.createElement("th");
            let div_confirm = document.createElement("div");
            let div_price = document.createElement("div");
            div_price.textContent = "Rate";
            div_confirm.textContent = "Confirm";
            th_confirm.appendChild(div_confirm);
            th_price.appendChild(div_price);
            thead.appendChild(th_price);
            thead.appendChild(th_confirm);
            let div_sum_d = document.createElement("div");
            div_sum_d.id = "divsumd";
            div_sum_d.style = "text-align:center;";
            document
              .querySelectorAll("thead")[0]
              .parentElement.parentElement.insertBefore(
                div_sum_d,
                document
                  .querySelectorAll("thead")[0]
                  .parentElement.parentElement.querySelector("h2")
              );
          }
          //### for each row ###
          //### disable click ###
          tbody.className = "disableClick";
          tbody.style.pointerEvents = "none";
          for (let i = 0; i < rows.length; i++) {
            let tds = rows[i].getElementsByTagName("td");
            //### if new checkbox already exist ###
            if (
              tds[tds.length - 1].id.indexOf("checkboxid") > -1 ||
              tds[1].textContent.trim() != "Netflix"
            ) {
              //### enable click for all ###
              for (let j = 0; j < tds.length; j++) {
                //                 tds[j].className = "enableClick";
                //                 tds[j].style.pointerEvents = "auto";
              }
            } else {
              //### enable click for all but last ###
              for (let j = 0; j < tds.length; j++) {
                tds[j].className = "enableClick";
                tds[j].style.pointerEvents = "auto";
              }
              //### add tr and checkbox ###
              let tr_rate = document.createElement("td");
              let tr = document.createElement("td");
              let input = document.createElement("input");
              input.type = "checkbox";
              input.style = "accent-color:#442094";
              tr.id = "checkboxid" + (i + 1);
              tr_rate.id = "rate" + (i + 1);
              tr.appendChild(input);
              rows[i].appendChild(tr_rate);
              rows[i].appendChild(tr);
            }
          }
        }
      }
    }, 1000);

    document
      .getElementsByTagName("html")[0]
      .addEventListener("click", simulateClick);

    //### add total sum ###
    var interval3 = setInterval(async function () {
      var table_in_progress = document.querySelector(
        "table[ng-show='jobs.inProgress.list.length']"
      );
      //if table already loaded...
      if (table_in_progress) {
        //get table and rows...
        var tr_rates = [];
        var sum = 0;
        var tr_rates = document.querySelectorAll("[id^='rate']");
        for (var i = 0; i < tr_rates.length; i++) {
          if (tr_rates[i].textContent == "") {
            getRate(tr_rates[i]);
          } else {
            var rate_in_string = tr_rates[i].textContent.substring(
              0,
              tr_rates[i].textContent.length - 1
            );
            var rate_in_number = Number(rate_in_string);
            sum = sum + rate_in_number;
          }
        }
        if (document.getElementById("divsumd")) {
          document.getElementById("divsumd").innerHTML =
            "Total unconfirmed sum <b>on this page</b> Netflix: $" +
            sum.toFixed(2);
        }
        //console.log(sum);
      }
    }, 500);

    //### hide invoice buttons ###
    setInterval(function () {
      var location = window.location.href;
      var main_paje_location = "https://desk.ngsub.tv/vendors/#/jobs";
      if (location == main_paje_location) {
        //hide invoice buttons
        var buttons = document.querySelectorAll("button");
        buttons.forEach((button) => {
          if (button.innerText === "Add New Invoice") {
            button.style.display = "none";
          }
        });
      }
      //############### check if inside invoices #################
      let inside_invoices_location = "https://desk.ngsub.tv/vendors/#/invoices";
      if (location.includes(inside_invoices_location)) {
        //### hide new invoice button ###
        document.querySelector(
          'a[ui-sref="portal.invoices.new-invoice"]'
        ).style.display = "none";
      }
    }, 100);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////

async function simulateClick(event) {
  // Send the event to the checkbox element
  var inputs = document.querySelectorAll('[id^="checkboxid"]');
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i].querySelector("input");
    var rect = input.getBoundingClientRect();
    if (
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom &&
      input.disabled != true
    ) {
      //console.log("click");
      input.checked = !input.checked;
      var id = inputs[i].id;
      //here the API call to change the job's status.
      var jobidelement =
        input.parentElement.parentElement.getElementsByTagName("td")[0];
      var jobid = jobidelement.textContent.trim();
      var position = jobid.lastIndexOf("/");
      jobid = jobid.substring(0, position);
      //console.log("job id:" + jobid);
      if (input.checked && input.disabled != true) {
        input.disabled = true;
        //API CALL WITH JOB ID
        var url =
          "https://xtrfsubscriptions.ngsub.tv:7898/vpconfirmjob?jobid=" + jobid;
        try {
          //console.log("vpconfirmjob try 1");
          var res = await fetch(url);
        } catch (err) {
          console.error(err);
          //console.log("vpconfirmjob try 2");
          var res = await fetch(url);
        }
        if (res.status >= 400) {
          //console.log("vpconfirmjob try 3");
          var res = await fetch(url);
        }
        var content = await res.text();
        //console.log(content);
        //input.parentElement.parentElement.style="display:none;"
      }
    }
  }
}

///////////////////////////////////////////////////////////////////////////////

async function getRate(tr_rate) {
  if (tr_rate.textContent != "") {
  } else {
    var jobidelement = tr_rate.parentElement.getElementsByTagName("td")[0];
    var jobid = jobidelement.textContent.trim();
    var position = jobid.lastIndexOf("/");
    jobid = jobid.substring(0, position);
    var url =
      "https://xtrfsubscriptions.ngsub.tv:7898/vpgetrate?jobid=" + jobid;
    try {
      //console.log("VPgetRate try 1");
      var res = await fetch(url);
    } catch (err) {
      console.error(err);
      //console.log("VPgetRate try 2");
      var res = await fetch(url);
    }
    if (res.status >= 400) {
      //console.log("VPgetRate try 3");
      var res = await fetch(url);
    }
    var content = await res.text();
    //console.log(res);
    tr_rate.textContent = content;
  }
}

///////////////////////////////////////////////////////////////////////////////////
