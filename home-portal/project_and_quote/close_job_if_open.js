if (
  window.location.href.substring(0, 71) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam" ||
  window.location.href.substring(0, 67) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/quotes/quote.seam"
) {
  const interval = setInterval(function () {
    if ($('[class^="input__item"]').length >= 34) {
      clearInterval(interval);
      setTimeout(function () {
        const closewindow = $('[class^="close x-icon --close ng-scope"]')[0];
        if (closewindow != undefined) {
          eventFire(closewindow, "click");
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

        ////////////////////////////
      }, 1000);
    }
  }, 100);
}
