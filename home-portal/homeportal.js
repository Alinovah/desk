
(()=>{let home_portal_script = document.createElement("script");
home_portal_script.type = "text/javascript";
home_portal_script.src = "https://alinovah.github.io/desk/home-portal/test.js";
document.querySelector("body").appendChild(home_portal_script);})();


//////////////////////// generate masspayment ////////////////////////////////
  if(location.href.includes("https://desk.ngsub.tv/xtrf/faces/providerInvoices/browse.seam")){
  let createselfinvoice_interval = setInterval(function() {
    let button = document.createElement("button");
    let div = document.querySelector('div[class="x-title-bar__actions"]');
    if(!div){
    }else{
    clearInterval(createselfinvoice_interval);
    button.innerText = "Self Invoice";
    button.className = "dropdown-toggle x-btn --large ng-scope"
    button.style.marginLeft = "10px"
    button.onclick=()=>{createselfinvoice()};
    div.appendChild(button);
    }
    }, 500);
}


async function createselfinvoice(){
  let buffer_res = await fetch("https://xtrfsubscriptions.ngsub.tv:7903/createselfinvoice");
  let buffer = await buffer_res.text();
  downloadBase64File("aapplication/vnd.openxmlformats-officedocument.spreadsheetml.sheet",buffer,"SelfInvoice.xlsx");
}

function downloadBase64File(contentType, base64Data, fileName) {
   const linkSource = `data:${contentType};base64,${base64Data}`;
   const downloadLink = document.createElement("a");
   downloadLink.href = linkSource;
   downloadLink.download = fileName;
   downloadLink.click();
}

//////////////////////// Duplicate Project Handler //////////////////////////
if (location.href.includes("https://desk.ngsub.tv/xtrf/faces/project/browse.seam")) {
  let duplicateprojects_interval = setInterval(function () {
    let buttons_bar = document.querySelector(
      "div[class='x-title-bar__actions']"
    );
    if (buttons_bar) {
      clearInterval(duplicateprojects_interval);
      ///////////////////////////////////////////////////////////////////////

      let duplicateButton = document.createElement("button");
      duplicateButton.innerText = "Duplicate X Times";
      duplicateButton.className = "dropdown-toggle x-btn --large ng-scope";
      duplicateButton.style.marginRight = "10px";
      duplicateButton.onclick = duplicateprojects;
      buttons_bar.prepend(duplicateButton);

      let div = document.createElement("div");
      let x_button = document.createElement("button");
      x_button.innerText = "X";
      x_button.style = "margin:10px;width: 25px;align-self: flex-end;";
      x_button.onclick = hideduplicateform;
      div.appendChild(x_button);
      div.id = "add-duplicate-form";
      div.style =
        "padding-bottom:30px;padding-left:30px;flex-direction: column;transform: translate(-50%, 0%);display:none;justify-content:center;width: 500px; position: fixed; top:50%; left:50%; background-color:#ffffff;z-index:1;box-shadow: 0 0 9px 0";
      document.body.appendChild(div);
      let h2 = document.createElement("h2");
      h2.innerText = "Duplicate Project";
      h2.style = "margin-bottom: 20px;margin-top: -30px;width: fit-content; ";
      div.appendChild(h2);
      let container = document.createElement("table");
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      div.appendChild(container);
      tr = document.createElement("tr");
      td = document.createElement("td");
      td.innerText = "Times:";
      tr.appendChild(td);
      td = document.createElement("td");
      let input = document.createElement("input");
      input.id = "duplicate-times";
      input.type = "number";
      td.appendChild(input);
      tr.appendChild(td);
      container.appendChild(tr);
      let submit = document.createElement("button");
      submit.innerText = "Duplicate";
      submit.id = "submit-duplicate";
      submit.style = "align-self: flex-end;";
      submit.onclick = postDuplicateProjects;
      container.appendChild(submit);

      ///////////////////////////////////////////////////////////////////////
    }
  }, 500);
}

async function duplicateprojects() {
  document.getElementById("add-duplicate-form").style.display = "flex";
}

function hideduplicateform() {
  document.getElementById("add-duplicate-form").style.display = "none";
}

function postDuplicateProjects() {
  let duplicat_el = document.getElementById("duplicate-times");
  let duplicate = duplicat_el.value;
  if (duplicate <= 0) {
    alert("Please insert a valid number");
  } else {
    hideduplicateform();
    let checkboxes = document.querySelectorAll('input[id^="select-"]');
    var id = "";
    for (var i = 1; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        id = checkboxes[i].id;
        break;
      }
    }
    let id_clean = "";
    if (id == "select-all") {
    } else {
      id_clean = id.substring(id.indexOf("-") + 1, id.length);
    }
    fetch(
      `https://xtrfsubscriptions.ngsub.tv:7897/duplicateproject?value=${duplicate}&pid=${id_clean}`
    );
  }
}
