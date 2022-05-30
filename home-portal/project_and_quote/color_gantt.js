if (
  window.location.href.substring(0, 71) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam" ||
  window.location.href.substring(0, 67) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/quotes/quote.seam"
) {
  let color_gantt_interval = setInterval(function () {
    if ($('[class^="input__item"]').length >= 34) {
      clearInterval(color_gantt_interval);
      setTimeout(function () {
        let today_indicator = document.querySelector(
          'button[ng-click="pluginScope.goToToday()"]'
        );
        if (today_indicator) {
          eventFire(today_indicator, "click");
          let dates = [];
          let dates_header = [];
          let holiday_pos = [];
          let url =
            "https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&mod=on&year=now&month=x&lg=h";
          fetch(url)
            .then((response) => response.json())
            .then((data) => holidays(data));
          function holidays(data) {
            for (let i = 0; i < data["items"].length; i++) {
              dates.push([
                data["items"][i]["title"],
                new Date(data["items"][i]["date"]),
              ]);
            }
            let today = new Date();
            let year = today.getFullYear();
            let month = today.getMonth() + 1;
            let day = today.getDay();
            let ganttheader = $('[class^="gantt-column-header ng-binding"]');
            let ganntblock = $('[class^="gantt-column gantt-foreground-col"]');
            let header_length =
              ganttheader.length -
              $(
                '[class^="gantt-column-header ng-binding gantt-column-header-first"]'
              ).length;
            let gannt_today = document.querySelector(
              'div[class="gantt-current-date-line ng-scope"]'
            );
            let today_pos;
            if (gannt_today) {
              today_pos = Math.ceil(
                Number(
                  gannt_today.style["left"].substring(
                    0,
                    gannt_today.style["left"].length - 2
                  )
                ) / 200
              );
            } else {
              today_pos = "";
            }
            for (let i = 0; i < header_length; i++) {
              dates_header.push(today.addDays(-today_pos + i + 1));
            }
            for (let i = 0; i < dates_header.length; i++) {
              if (
                dates_header[i].getDay() == 5 ||
                dates_header[i].getDay() == 6
              ) {
                ganttheader[
                  i +
                    $(
                      '[class^="gantt-column-header ng-binding gantt-column-header-first"]'
                    ).length
                ].style.backgroundColor = "#cad5e6";
                ganntblock[i].style.backgroundColor = "#e6eefa";
              }
            }
            for (let i = 0; i < dates.length; i++) {
              for (let j = 0; j < dates_header.length; j++) {
                if (
                  dates[i][1].getFullYear() == dates_header[j].getFullYear() &&
                  dates[i][1].getMonth() + 1 ==
                    dates_header[j].getMonth() + 1 &&
                  dates[i][1].getDate() == dates_header[j].getDate()
                ) {
                  if (holiday_pos.indexOf(j + 1) == -1) {
                    holiday_pos.push([j + 1, dates[i][0]]);
                  }
                }
              }
            }
            for (let i = 0; i < holiday_pos.length; i++) {
              ganttheader[
                holiday_pos[i][0] +
                  $(
                    '[class^="gantt-column-header ng-binding gantt-column-header-first"]'
                  ).length -
                  1
              ].innerText =
                ganttheader[
                  holiday_pos[i][0] +
                    $(
                      '[class^="gantt-column-header ng-binding gantt-column-header-first"]'
                    ).length -
                    1
                ].innerText +
                " - " +
                holiday_pos[i][1];
              if (
                holiday_pos[i][1] == "עֶרֶב פּוּרִים" ||
                holiday_pos[i][1] == "יוֹם העלייה" ||
                holiday_pos[i][1] == "פֶּסַח ב׳" ||
                holiday_pos[i][1] == "פֶּסַח ג׳ (חוה״מ)" ||
                holiday_pos[i][1] == "פֶּסַח ד׳ (חוה״מ)" ||
                holiday_pos[i][1] == "פֶּסַח ה׳ (חוה״מ)" ||
                holiday_pos[i][1] == "פֶּסַח ו׳ (חוה״מ)" ||
                holiday_pos[i][1] == "יוֹם הַשּׁוֹאָה" ||
                holiday_pos[i][1] == "יוֹם הַזִּכָּרוֹן" ||
                holiday_pos[i][1] == "יוֹם יְרוּשָׁלַיִם" ||
                holiday_pos[i][1] == "עֶרֶב תִּשְׁעָה בְּאָב" ||
                holiday_pos[i][1] == "תִּשְׁעָה בְּאָב" ||
                holiday_pos[i][1] == "סוּכּוֹת ב׳" ||
                holiday_pos[i][1] == "סוּכּוֹת ג׳ (חוה״מ)" ||
                holiday_pos[i][1] == "סוּכּוֹת ד׳ (חוה״מ)" ||
                holiday_pos[i][1] == "סוּכּוֹת ה׳ (חוה״מ)" ||
                holiday_pos[i][1] == "סוּכּוֹת ו׳ (חוה״מ)" ||
                holiday_pos[i][1] == "שִׂמְחַת תּוֹרָה" ||
                holiday_pos[i][1] == "שמירת בית הספר ליום העלייה" ||
                holiday_pos[i][1] == "סיגד" ||
                holiday_pos[i][1] == "חֲנוּכָּה: א׳ נֵר" ||
                holiday_pos[i][1] == "חֲנוּכָּה: ב׳ נֵרוֹת" ||
                holiday_pos[i][1] == "חֲנוּכָּה: ג׳ נֵרוֹת" ||
                holiday_pos[i][1] == "חֲנוּכָּה: ד׳ נֵרוֹת" ||
                holiday_pos[i][1] == "חֲנוּכָּה: ה׳ נֵרוֹת" ||
                holiday_pos[i][1] == "חֲנוּכָּה: ו׳ נֵרוֹת" ||
                holiday_pos[i][1] == "חֲנוּכָּה: ז׳ נֵרוֹת" ||
                holiday_pos[i][1] == "חֲנוּכָּה: ח׳ נֵרוֹת"
              ) {
                ganntblock[holiday_pos[i][0] - 1].style.backgroundColor =
                  "#fff2cc";
                ganttheader[
                  holiday_pos[i][0] +
                    $(
                      '[class^="gantt-column-header ng-binding gantt-column-header-first"]'
                    ).length -
                    1
                ].style.backgroundColor = "#d9be73";
              } else {
                ganntblock[holiday_pos[i][0] - 1].style.backgroundColor =
                  "#e6eefa";
                ganttheader[
                  holiday_pos[i][0] +
                    $(
                      '[class^="gantt-column-header ng-binding gantt-column-header-first"]'
                    ).length -
                    1
                ].style.backgroundColor = "#cad5e6";
              }
            }
          }
        }
      }, 1000);
    }
  }, 500);
}

////////////////////////////////////////
function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent("on" + etype);
  } else {
    var evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
////////////////////////////////////////
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
