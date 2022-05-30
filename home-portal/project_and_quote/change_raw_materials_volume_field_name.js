if (
  window.location.href.substring(0, 71) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam" ||
  window.location.href.substring(0, 67) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/quotes/quote.seam"
) {
  var service = $('[class^="input ng-binding ng-scope"]')[0];
  var titles = document.querySelectorAll(
    'div[class="title ng-binding ng-scope"]'
  );
  if (service.textContent == "Raw Materials") {
    for (var i = 0; i < titles.length; i++) {
      if (titles[i].textContent == "number of video files") {
        titles[i].textContent = "Number of pages";
      }
    }
  }
}
