if (
  currentlink.substring(0, 71) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam" ||
  currentlink.substring(0, 67) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/quotes/quote.seam"
) {
  const interval = setInterval(function () {
    if ($('[class^="input__item"]').length >= 34) {
      clearInterval(interval);
      setTimeout(function () {
        ////////////////////////////

        hyperlinks();

        ////////////////////////////
      }, 1000);
    }
  }, 100);
}


////////////////////////hyperlinks function////////////////////////////////
function hyperlinks() {
  const pdffield = "";
  const pdflink = "";
  const sheetfield = "";
  const sheetlink = "";
  const elements = document.querySelectorAll(
    'div[class="input__item custom_field"]'
  );
  for (const i = 0; i < elements.length; i++) {
    if (elements[i].querySelector("div").textContent == "Quote PDF Link") {
      pdffield = elements[i].querySelector('div[class="custom-field-section"]');
      pdflink = pdffield.textContent;
    }
    if (
      elements[i].querySelector("div").textContent == "Price List Sheet Link"
    ) {
      sheetfield = elements[i].querySelector(
        'div[class="custom-field-section"]'
      );
      sheetlink = sheetfield.textContent;
    }
  }
  if (
    pdflink != "" &&
    pdflink.indexOf("http") > -1 &&
    pdffield.innerHTML !=
      '<a style="color:#035efc" href="' +
        pdflink +
        '" target="_blank" >PDF Link</a>'
  ) {
    pdffield.innerHTML =
      '<a style="color:#035efc" href="' +
      pdflink +
      '" target="_blank" >PDF Link</a>';
  }
  sheetfield.innerHTML =
    '<a style="color:#035efc" href="' +
    sheetlink +
    '" target="_blank" >Google Sheet Link</a>';
}
