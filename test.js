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
      // start(ui);
    }
  }, 500);
}
