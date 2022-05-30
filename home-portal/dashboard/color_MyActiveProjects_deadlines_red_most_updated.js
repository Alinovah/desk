if (
  window.location.href.substring(0, 58) ==
  "https://desk.ngsub.tv/xtrf/faces/dashboard2/dashboard.seam"
) {
  ///////////////// color "My Active Projects" deadline's red - most updated ////////////
  setInterval(function () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    var firstDate = new Date(yyyy, mm, dd);
    const oneDay = 24 * 60 * 60 * 1000;
    var day;
    var month;
    var year;

    var iframes = document.getElementsByTagName("iframe");
    for (var i = 0; i < iframes.length; i++) {
      if (
        iframes[
          i
        ].parentElement.parentElement.parentElement.parentElement.querySelector(
          "header"
        ).textContent == "My Active Projects"
      ) {
        var dashboardtable = iframes[i].contentDocument;
        var table3rows = dashboardtable.getElementsByTagName("tr");
        for (var k = 2; k < table3rows.length; k++) {
          var table3deadline = table3rows[k].getElementsByTagName("td");
          var deadlines3 = table3deadline[4];
          var deadline = deadlines3.textContent;
          day = deadline.substring(8, 10);
          month = deadline.substring(5, 7);
          year = deadline.substring(0, 4);
          var secondDate = new Date(year, month, day);
          var diffDays = Math.round((secondDate - firstDate) / oneDay);
          if (diffDays <= 1) {
            deadlines3.style = "color:#ff9500";
          }
          if (diffDays < 0) {
            deadlines3.style = "color:#fc0303";
          }
        }
      }
    }
  }, 1000);
}
