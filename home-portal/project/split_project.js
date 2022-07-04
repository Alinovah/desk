if (location.href.includes("https://desk.ngsub.tv/xtrf/faces/project/browse.seam")) {
  let splitprojects_interval = setInterval(function () {
    let buttons_bar = document.querySelector(
      "div[class='x-title-bar__actions']"
    );
    if (buttons_bar) {
      clearInterval(splitprojects_interval);
      ///////////////////////////////////////////////////////////////////////
      let splitButton = document.createElement("button");
      splitButton.innerText = "Split Project";
      splitButton.className = "dropdown-toggle x-btn --large ng-scope";
      splitButton.style.marginRight = "10px";
      splitButton.onclick = postSplitProject;
      buttons_bar.prepend(splitButton);
      ///////////////////////////////////////////////////////////////////////
    }
  }, 500);
}

async function postSplitProject() {
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
    console.log(`&pid=${id_clean}`);
    let pm =  document.querySelector("div.name").textContent;
    const number_of_files_res = await fetch(
      `https://xtrfsubscriptions.ngsub.tv:7904/getnumberoffiles?pid=${id_clean}`
    );
    const number_of_files = await number_of_files_res.text();
    console.log(number_of_files);
    for(let i=0;i<parseFloat(number_of_files);i++){
      const iframe = document.createElement("div");
      iframe.innerHTML = `<iframe style="position:fixed;" width="95%" height="87%" src="https://desk.ngsub.tv/xtrf/faces/project/duplicate.seam?id=${id_clean}" title="overallview"></iframe>`;
      document.body.appendChild(iframe);
    }
    setTimeout(function() {
      fetch(
        `https://xtrfsubscriptions.ngsub.tv:7904/splitproject?pid=${id_clean}&pm=${pm}`
      );
    }, 60000);
}

// if (location.href.includes("https://desk.ngsub.tv/xtrf/faces/project/browse.seam")) {
//   let splitprojects_interval = setInterval(function () {
//     let buttons_bar = document.querySelector(
//       "div[class='x-title-bar__actions']"
//     );
//     if (buttons_bar) {
//       clearInterval(splitprojects_interval);
//       ///////////////////////////////////////////////////////////////////////
//       let splitButton = document.createElement("button");
//       splitButton.innerText = "Split Project";
//       splitButton.className = "dropdown-toggle x-btn --large ng-scope";
//       splitButton.style.marginRight = "10px";
//       splitButton.onclick = splitProjectFunction;
//       buttons_bar.prepend(splitButton);
//       ///////////////////////////////////////////////////////////////////////
//     }
//   }, 500);
// }

// async function splitProjectFunction() {
// //       socket = io.connect('https://xtrfsubscriptions.ngsub.tv:7904');
// //       socket.emit("getclients");
// //       socket.on("getclients",data=>{
// //         console.log(data);
// //         if(data!="used by , 0/0"){
// //           alert(`Currently being used! `+data);
// //         }else{
//           postSplitProject();
// //         }
// //       });
// //       socket.on("messege",data=>{
// //         console.log(data);
// //       });
// }


// function postSplitProject() {
//     let checkboxes = document.querySelectorAll('input[id^="select-"]');
//     var id = "";
//     for (var i = 1; i < checkboxes.length; i++) {
//       if (checkboxes[i].checked) {
//         id = checkboxes[i].id;
//         break;
//       }
//     }
//     let id_clean = "";
//     if (id == "select-all") {
//     } else {
//       id_clean = id.substring(id.indexOf("-") + 1, id.length);
//     }
//     console.log(`&pid=${id_clean}`);
//     let pm =  document.querySelector("div.name").textContent;
//     fetch(
//       `https://xtrfsubscriptions.ngsub.tv:7904/splitproject?pid=${id_clean}&pm=${pm}`
//     );
// }

