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
        if (
          window.location.href.substring(0, 67) ==
          "https://desk.ngsub.tv/xtrf/faces/projectAssistant/quotes/quote.seam"
        ) {
        } else {
          let order = document.getElementById("order");
          if (order == undefined) {
            order = document.getElementById("quote");
          }
          let langs = document.getElementById("langs");
          let process = document.getElementById("process");
          order.parentElement.insertBefore(langs, order);
          order.parentElement.insertBefore(process, order);
        }
      }, 1000);
    }
  }, 100);
}
