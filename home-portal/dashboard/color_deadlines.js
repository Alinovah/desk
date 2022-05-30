if (
  window.location.href.substring(0, 58) ==
  "https://desk.ngsub.tv/xtrf/faces/dashboard2/dashboard.seam"
) {
  setInterval(function () {
    //////////////////////////change deadline color////////////////////
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

    var tables = $('[class^="x-card__header__heading ng-binding"]');
    var iframes = document.getElementsByTagName("iframe");

    for (var i = 0; i < tables.length; i++) {
      if (
        tables[i].textContent == "Projects Due Today+Overdue" ||
        tables[i].textContent == "Projects Due Today"
      ) {
        var dashboardtable1 = iframes[i].contentDocument;
        var table1rows = dashboardtable1.getElementsByTagName("tr");
        for (var k = 2; k < table1rows.length; k++) {
          var table1deadline = table1rows[k].getElementsByTagName("td");
          var deadlines1 = table1deadline[6];
          var deadline = deadlines1.textContent;
          day = deadline.substring(8, 10);
          month = deadline.substring(5, 7);
          year = deadline.substring(0, 4);
          var secondDate = new Date(year, month, day);
          var diffDays = Math.round((secondDate - firstDate) / oneDay);
          if (diffDays <= 1) {
            for (var j = 0; j < table1deadline.length; j++) {
              table1deadline[j].style = "color:#ff9500";
            }
          }
          if (diffDays < 0) {
            for (var j = 0; j < table1deadline.length; j++) {
              table1deadline[j].style = "color:#fc0303";
            }
          }
        }
      }
      if (
        tables[i].textContent == "Jobs Assigned To Me" ||
        tables[i].textContent == "Jobs Assigned To Kfir" ||
        tables[i].textContent == "Jobs Assigned To Lee" ||
        tables[i].textContent == "Jobs Assigned To Yuval" ||
        tables[i].textContent == "Jobs Assigned To Dani"
      ) {
        if (iframes[i] == undefined) {
        } else {
          var table2rows =
            iframes[i].contentDocument.getElementsByTagName("tr");
          for (var k = 2; k < table2rows.length; k++) {
            var table2deadline = table2rows[k].getElementsByTagName("td");
            var deadlines2 = table2deadline[5];
            var status = table2deadline[7];
            if (status == null) {
            } else {
              console.log(status.textContent);
              if (status.textContent == "Accepted") {
                status.style = "color:#d1cb1f";
              } else if (status.textContent == "Started") {
                status.style = "color:#0d9125";
              }
            }
            var deadline = deadlines2.textContent;
            day = deadline.substring(8, 10);
            month = deadline.substring(5, 7);
            year = deadline.substring(0, 4);
            var secondDate = new Date(year, month, day);
            var diffDays = Math.round((secondDate - firstDate) / oneDay);
            if (diffDays <= 1) {
              deadlines2.style = "color:#ff9500";
            }
            if (diffDays < 0) {
              deadlines2.style = "color:#fc0303";
            }
          }
        }
      }
      if (tables[i].textContent == "Open Projects") {
        var dashboardtable3 = iframes[i].contentDocument;
        var table3rows = dashboardtable3.getElementsByTagName("tr");
        for (var k = 2; k < table3rows.length; k++) {
          var table3deadline = table3rows[k].getElementsByTagName("td");
          var deadlines3 = table3deadline[7];
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
      if (tables[i].textContent == "Jobs Due Today+Overdue") {
        var dashboardtable5 = iframes[i].contentDocument;
        var table5rows = dashboardtable5.getElementsByTagName("tr");
        for (var k = 2; k < table5rows.length; k++) {
          var table5deadline = table5rows[k].getElementsByTagName("td");
          var deadlines5 = table5deadline[5];
          var deadline = deadlines5.textContent;
          day = deadline.substring(8, 10);
          month = deadline.substring(5, 7);
          year = deadline.substring(0, 4);
          var secondDate = new Date(year, month, day);
          var diffDays = Math.round((secondDate - firstDate) / oneDay);
          if (diffDays <= 1) {
            for (var j = 0; j < table5deadline.length; j++) {
              table5deadline[j].style = "color:#ff9500";
            }
          }
          if (diffDays < 0) {
            for (var j = 0; j < table5deadline.length; j++) {
              table5deadline[j].style = "color:#fc0303";
            }
          }
        }
      }
      if (tables[i].textContent == "Unassigned Jobs") {
        if (iframes[i] == undefined) {
        } else {
          var dashboardtable6 = iframes[i].contentDocument;
          var table6rows = dashboardtable6.getElementsByTagName("tr");
          for (var k = 2; k < table6rows.length; k++) {
            var table6deadline = table6rows[k].getElementsByTagName("td");
            var deadlines6 = table6deadline[5];
            var deadline = deadlines6.textContent;
            day = deadline.substring(8, 10);
            month = deadline.substring(5, 7);
            year = deadline.substring(0, 4);
            var secondDate = new Date(year, month, day);
            var diffDays = Math.round((secondDate - firstDate) / oneDay);
            if (diffDays <= 1) {
              deadlines6.style = "color:#ff9500";
            }
            if (diffDays < 0) {
              deadlines6.style = "color:#fc0303";
            }
          }
        }
      }
    }
  }, 500);
}
