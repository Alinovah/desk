console.log("External Script Loaded");
var ui_G = "";
var currentlink = window.location.href;
console.log(currentlink);
//####################### vendor portal #########################
if (currentlink.includes("https://desk.ngsub.tv/vendors/")) {
  console.log("vendor portal");
  //####################### get the ui #########################
  let getui = setInterval(async function () {
    let email_container = document.querySelector("span[class*='email']");
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
              //### do nothing ###
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
  }
}
