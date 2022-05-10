if (location.href.includes("https://desk.ngsub.tv/xtrf/faces/dashboard2/dashboard.seam")) {
  let alerts_dashboard_interval = setInterval(function () {
    let h1 = document.querySelectorAll("h1")[1];
    if (h1) {
      clearInterval(alerts_dashboard_interval);
      ///////////////////////////////////////////////////////////////////////
      createMenu();
      //populateMenu();
      ///////////////////////////////////////////////////////////////////////
    }
  }, 500);
}
//////////////////////////////////////////////////////////////   
function createMenu(){
  const menu = document.createElement("div");
    menu.id = "alerts-menu";
    menu.style.position = "sticky";
    menu.style.top = "0";
    menu.style.width = "100%";
    menu.style.height = "100vh";
    menu.style.backgroundColor = "rgba(255,255,255,0.7)";
    menu.style.display = "none";
    menu.style.justifyContent= "center";
    menu.style.alignItems= "center";
  const content = document.createElement("div");
    content.dir = "rtl";
    content.style.width = "80%";
    content.style.height = "60%";
    content.style.backgroundColor = "white";
    content.style.borderRadius = "15px";
    content.style.display = "flex";
    content.style.boxShadow= "10px 10px 10px #ababab88";
    content.style.border = "1px solid black";
    content.style.flexDirection = "column";
    content.style.overflow = "scroll";
  const close_button = document.createElement("button");
    close_button.innerText = "X";
    close_button.type = "button";
    close_button.style.borderRadius = "50%";
    close_button.style.border = "1px solid black";
    close_button.style.margin = "10px";
    close_button.style.width= "fit-content";
    close_button.style.height= "fit-content";
    close_button.onclick = ()=>{document.querySelector("#alerts-menu").style.display = "none"};
  const projects_overdue = document.createElement("div");
    projects_overdue.id="projects_overdue";
    projects_overdue.innerText = "פרויקטים להגשה היום או באיחור:";
    projects_overdue.style.margin = "10px";
    projects_overdue.style.fontSize = "1.5em";
    projects_overdue.style.fontWeight = "bold";
    projects_overdue.style.display = "none";
  const jobs_overdue = document.createElement("div");
    jobs_overdue.id="jobs_overdue";
    jobs_overdue.innerText = "ג'ובים להגשה היום או באיחור:";
    jobs_overdue.style.margin = "10px";
    jobs_overdue.style.fontSize = "1.5em";
    jobs_overdue.style.fontWeight = "bold";
    jobs_overdue.style.display = "none";
  const missing_receivables = document.createElement("div");
    missing_receivables.id="missing_receivables";
    missing_receivables.innerText = "להוסיף תעריף לפרויקט:";
    missing_receivables.style.margin = "10px";
    missing_receivables.style.fontSize = "1.5em";
    missing_receivables.style.fontWeight = "bold";
    missing_receivables.style.display = "none";
  const missing_payables = document.createElement("div");
    missing_payables.id="missing_payables";
    missing_payables.innerText = "להוסיף תעריף לג'וב:";
    missing_payables.style.margin = "10px";
    missing_payables.style.fontSize = "1.5em";
    missing_payables.style.fontWeight = "bold";
    missing_payables.style.display = "none";  
  content.appendChild(close_button);
  content.appendChild(projects_overdue);
  content.appendChild(jobs_overdue);
  content.appendChild(missing_receivables);
  content.appendChild(missing_payables);
  menu.appendChild(content);
  const body = document.querySelector(".top-menu");
  body.appendChild(menu);
}
