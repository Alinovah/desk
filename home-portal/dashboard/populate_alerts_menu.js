if (location.href.includes("https://desk.ngsub.tv/xtrf/faces/dashboard2/dashboard.seam")) {
  let alerts_menu_interval = setInterval(function () {
    const menu = document.querySelector("#alerts-menu");
    if (menu) {
      clearInterval(alerts_menu_interval);
      ///////////////////////////////////////////////////////////////////////
      populateMenu(menu);
      ///////////////////////////////////////////////////////////////////////
    }
  }, 500);
}
//////////////////////////////////////////////////////////////
async function getDataForHeaders(){
  const url = "https://xtrfsubscriptions.ngsub.tv:7897/dashboardalerts";
  const data = {
                pm: document.querySelector("div.name").textContent
              };
  const options = {
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(data)
  };
  let res = await fetch(url,options);
  let json = await res.json();
  return json;
}
///////////////////////////////////////////////////////////////
async function populateMenu(menu){
  const data = await getDataForHeaders();
  const content = menu.querySelector("div");
  const project_overdue = data["projects overdue"];
  const jobs_overdue = data["jobs overdue"];
  const missing_receivables = data["missing receivables"];
  const missing_payables = data["missing payables"];
  if(project_overdue.length>0||jobs_overdue.length>0||missing_receivables.length>0||missing_payables.length>0){
    menu.style.display = "flex";
    if(project_overdue.length>0){
      const projects_overdue_el = document.querySelector("#projects_overdue");
      projects_overdue_el.style.display = "block";
      const ul = document.createElement("ul");
        ul.style.fontSize = "0.9em";
        ul.style.fontWeight = "normal";
        ul.style.textDecoration = "underline";
        ul.style.color = "red";
      for(let i=0;i<project_overdue.length;i++){
        let pid = project_overdue[i][2];
        let project_name = project_overdue[i][0];
        let project_deadline = project_overdue[i][1].substring(0,project_overdue[i][1].length-4);;
        let li = document.createElement("li");
        li.innerText = `${project_deadline} - ${project_name}`;
        li.style.cursor = "pointer";
        li.onclick = ()=>{window.open(`https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam?assistedProjectId=${pid}#/project`,"_blank")};
        ul.appendChild(li);
      }
      projects_overdue_el.appendChild(ul);
    }
    if(jobs_overdue.length>0){
      const jobs_overdue_el = document.querySelector("#jobs_overdue");
      jobs_overdue_el.style.display = "block";
      const ul = document.createElement("ul");
        ul.style.fontSize = "0.9em";
        ul.style.fontWeight = "normal";
        ul.style.textDecoration = "underline";
        ul.style.color = "red";
      for(let i=0;i<jobs_overdue.length;i++){
        let pid = jobs_overdue[i][6];
        let project_name = jobs_overdue[i][0];
        let job_deadline = jobs_overdue[i][2].substring(0,jobs_overdue[i][2].length-4);
        let li = document.createElement("li");
        li.innerText = `${job_deadline} - ${project_name}`;
        li.style.cursor = "pointer";
        li.onclick = ()=>{window.open(`https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam?assistedProjectId=${pid}#/project`,"_blank")};
        ul.appendChild(li);
      }
      jobs_overdue_el.appendChild(ul);
    }
    if(missing_receivables.length>0){
      const missing_receivables_el = document.querySelector("#missing_receivables");
      missing_receivables_el.style.display = "block";
      const ul = document.createElement("ul");
        ul.style.fontSize = "0.9em";
        ul.style.fontWeight = "normal";
        ul.style.textDecoration = "underline";
        ul.style.color = "red";
      for(let i=0;i<missing_receivables.length;i++){
        let pid = missing_receivables[i][1];
        let project_name = missing_receivables[i][0];
        let li = document.createElement("li");
        li.innerText = project_name;
        li.style.cursor = "pointer";
        li.onclick = ()=>{window.open(`https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam?assistedProjectId=${pid}#/project`,"_blank")};
        ul.appendChild(li);
      }
      missing_receivables_el.appendChild(ul);
    }
    if(missing_payables.length>0){
      const missing_payables_el = document.querySelector("#missing_payables");
      missing_payables_el.style.display = "block";
      const ul = document.createElement("ul");
        ul.style.fontSize = "0.9em";
        ul.style.fontWeight = "normal";
        ul.style.textDecoration = "underline";
        ul.style.color = "red";
      for(let i=0;i<missing_payables.length;i++){
        let pid = missing_payables[i][0];
        let type = missing_payables[i][1];
        let vendor = missing_payables[i][2];
        let project_name = missing_payables[i][3];
        let li = document.createElement("li");
        li.innerText = `${project_name} ${type} ${vendor}`;
        li.style.cursor = "pointer";
        li.onclick = ()=>{window.open(`https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam?assistedProjectId=${pid}#/project`,"_blank")};
        ul.appendChild(li);
      }
      missing_payables_el.appendChild(ul);
    }
  }
}
