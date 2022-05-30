if (
  window.location.href.substring(0, 58) ==
  "https://desk.ngsub.tv/xtrf/faces/dashboard2/dashboard.seam"
) {
  setInterval(function () {
    ///////////////////////// change dashboard color //////////////////
    var tables = $('[class^="x-card__header__heading ng-binding"]');
    for (var i = 0; i < tables.length; i++) {
      if (tables[i].textContent == "Projects Due Today+Overdue") {
        tables[i].style = "color:#990000";
      }
      if (tables[i].textContent == "Projects Due Today") {
        tables[i].style = "color:#f54242";
      }
      if (tables[i].textContent == "Jobs Due Today+Overdue") {
        tables[i].style = "color:#351c75";
      }
      if (tables[i].textContent == "Open Projects") {
        tables[i].style = "color:#38761d";
      }
      if (tables[i].textContent == "Quotes From The Last 30 Days") {
        tables[i].style = "color:#741b47";
      }
      if (tables[i].textContent == "Jobs Assigned To Me") {
        tables[i].style = "color:#0000ff";
      }
      if (tables[i].textContent == "Unassigned Jobs") {
        tables[i].style = "color:#666666";
      }
      if (tables[i].textContent == "Jobs Pending Evaluation") {
        tables[i].style = "color:#bf9000";
      }
    }
  }, 500);
}
