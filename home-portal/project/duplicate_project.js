let socket;
if (location.href.includes("https://desk.ngsub.tv/xtrf/faces/project/browse.seam")) {
  let duplicateprojects_interval = setInterval(function () {
    let buttons_bar = document.querySelector(
      "div[class='x-title-bar__actions']"
    );
    if (buttons_bar) {
      clearInterval(duplicateprojects_interval);
      ///////////////////////////////////////////////////////////////////////
//       const socket_script = document.createElement("script");
//       socket_script.src = "https://cdn.socket.io/socket.io-3.0.1.min.js";
//       document.querySelector("body").appendChild(socket_script);
      
      let duplicateButton = document.createElement("button");
      duplicateButton.innerText = "Duplicate X Times";
      duplicateButton.className = "dropdown-toggle x-btn --large ng-scope";
      duplicateButton.style.marginRight = "10px";
      duplicateButton.onclick = duplicateprojects;
      buttons_bar.prepend(duplicateButton);

      let div = document.createElement("div");
      let x_button = document.createElement("button");
      x_button.innerText = "X";
      x_button.id = "x-button";
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
  const submit_button = document.querySelector("#submit-duplicate");
//       socket = io.connect('https://xtrfsubscriptions.ngsub.tv:7904');
//       socket.emit("getclients");
//       socket.on("getclients",data=>{
//         console.log(data);
//         if(data!="used by , 0/0"){
//           submit_button.disabled = true;
//           submit_button.innerText = data;
//         }else{
          submit_button.disabled = false;
          submit_button.innerText = "Duplicate";
//         }
//       });
//       socket.on("messege",data=>{
//         console.log(data);
//         if(data!=0){
//           submit_button.disabled = true;
//           submit_button.innerText = data;
//         }else{
//           submit_button.disabled = false;
//           submit_button.innerText = "Duplicate";
//         }
//       });
      // socket.on("messege",data=>{
      //   // 
      //   // console.log(submit_button);
      //   // submit_button.disabled = true;
      //   // submit_button.innerText = data;
      //   console.log(data);
      // })
}

function hideduplicateform() {
  document.getElementById("add-duplicate-form").style.display = "none";
//   socket.disconnect();
}

function postDuplicateProjects() {
  document.getElementById("x-button").style.display="none";
  let duplicat_el = document.getElementById("duplicate-times");
  let duplicate = duplicat_el.value;
  if (duplicate <= 0) {
    alert("Please insert a valid number");
  } else {
    // hideduplicateform();
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
    // console.log(`value=${duplicate}&pid=${id_clean}`);
    let pm =  document.querySelector("div.name").textContent;
    fetch(
      `https://xtrfsubscriptions.ngsub.tv:7904/duplicateproject?value=${duplicate}&pid=${id_clean}&pm=${pm}`
    );
  }
}
