
if (
  window.location.href.substring(0, 71) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam" ||
    window.location.href.substring(0, 67) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/quotes/quote.seam"
) {
  let interval = setInterval(function () {
    if ($('[class^="input__item"]').length >= 34) {
      clearInterval(interval);
      /////////////////////////changed languages///////////////////////////
      setInterval(function () {
        var customfields = document.querySelectorAll(
          'div[class="input__item custom_field"]'
        );
        var count1 = 0;
        var count2 = 0;
        var count3 = 0;
        var count4 = 0;
        var count5 = 0;
        var count6 = 0;
        var count8 = 0;

        var firstelstatus;
        var firstelusestatus;
        for (var i = 0; i < customfields.length; i++) {
          if (
            customfields[i].querySelector("div").textContent ==
            "PM Verification"
          ) {
            if (count5 == 0) {
              count5++;
            } else {
              customfields[i].remove();
            }
          }
          if (
            customfields[i].querySelector("div").textContent == "Working Days"
          ) {
            if (count8 == 0) {
              count8++;
            } else {
              customfields[i].remove();
            }
          }
          if (
            customfields[i].querySelector("div").textContent == "Client Review"
          ) {
            if (count6 == 0) {
              count6++;
            } else {
              customfields[i].remove();
            }
          }
          if (
            customfields[i].querySelector("div").textContent ==
            "Estimated Start Date"
          ) {
            if (count1 == 0) {
              count1++;
            } else {
              customfields[i].remove();
            }
          }
          if (
            customfields[i].querySelector("div").textContent ==
              "number of video files" ||
            customfields[i].querySelector("div").textContent ==
              "number of pages"
          ) {
            if (count2 == 0) {
              count2++;
            } else {
              customfields[i].remove();
            }
          }
          if (customfields[i].querySelector("div").textContent == "Status") {
            if (count3 == 0) {
              count3++;
              firstelstatus = customfields[i];
            } else {
              firstelstatus.remove();
            }
          }
          if (
            customfields[i].querySelector("div").textContent == "Use Status"
          ) {
            if (count4 == 0) {
              count4++;
              firstelusestatus = customfields[i];
            } else {
              firstelusestatus.remove();
              statushandler();
            }
          }
          if (customfields[i].querySelector("div").textContent == "Pricelist") {
            customfields[i].querySelector(
              'div[ng-class="[inline?' +
                "'" +
                "nd-inline" +
                "'" +
                ":" +
                "''" +
                ']"]'
            ).className = "";
          }
          if (customfields[i].querySelector("div").textContent == "key") {
            customfields[i].style.display = "none";
          }
        }
      }, 1000);
    }
  }, 100);
}
