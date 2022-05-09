if (location.href.includes("https://desk.ngsub.tv/xtrf/faces/dashboard2/dashboard.seam")) {
  let overall_dashboard_interval = setInterval(function () {
    let h1 = document.querySelectorAll("h1")[1];
    if (h1) {
      clearInterval(overall_dashboard_interval);
      ///////////////////////////////////////////////////////////////////////
      let a = document.createElement("a");
      a.href = "https://desk.ngsub.tv/xtrf/faces/workflowResource/browse.seam";
      a.textContent = "OverallView";
      a.style.color = "blue";
      a.style.textDecoration = "underline";
      // a.style.display = "block";
      a.style.marginTop = "5px"
      a.style.marginLeft = "50px"
      a.style.fontSize = "1em";
      h1.appendChild(a);
      ///////////////////////////////////////////////////////////////////////
    }
  }, 500);
}
