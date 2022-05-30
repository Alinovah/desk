if (
  window.location.href.substring(0, 71) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam" ||
  window.location.href.substring(0, 67) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/quotes/quote.seam"
) {
  let interval = setInterval(function () {
        if ($('[class^="input__item"]').length >= 34) {
            clearInterval(interval);
            if (
              document.querySelector('textarea[ng-model="order.customerNotes"]') &&
              document.querySelector('textarea[ng-model="order.internalNotes"]')
            ) {
              document.querySelector('textarea[ng-model="order.customerNotes"]').dir =
                "rtl";
              document.querySelector('textarea[ng-model="order.internalNotes"]').dir =
                "rtl";
            }
            if (
              document.querySelector('textarea[ng-model="quote.customerNotes"]') &&
              document.querySelector('textarea[ng-model="quote.internalNotes"]')
            ) {
              document.querySelector('textarea[ng-model="quote.customerNotes"]').dir =
                "rtl";
              document.querySelector('textarea[ng-model="quote.internalNotes"]').dir =
                "rtl";
            }
        }
  },1000);
}
