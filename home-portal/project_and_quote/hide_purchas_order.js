if (
  window.location.href.substring(0, 71) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam" ||
  window.location.href.substring(0, 67) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/quotes/quote.seam"
) {
  var interval_purchas_order = setInterval(function () {
    if (
      document.querySelector('div[class="section purchase-order cf ng-scope"]')
    ) {
      document.querySelector(
        'div[class="section purchase-order cf ng-scope"]'
      ).style.display = "none";
    }
  }, 1000);
}
