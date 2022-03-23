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
        ).innerText;
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
    }, 1000);
  }
}
