if (
  window.location.href.substring(0, 71) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam" ||
  window.location.href.substring(0, 67) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/quotes/quote.seam"
) {
  let backround = document.createElement("div");
  let loader = document.createElement("div");
  loader.innerHTML =
    '<h1 style="width:100%;height:100%; position:absolute; top:300px" ><p style="padding:0;"><img style="padding:0;opacity:2;width:20%;height:20%;" src="https://drive.google.com/uc?id=13-ZWSQg_olXbqbfL82TcDr8SK5zgh9Jd"></p></h1>';

  backround.className = "center";
  backround.id = "loader";
  loader.className = "center";
  loader.style =
    "background: rgba(255, 255, 255, 0);width:100%;height:100%;position:absolute ;z-index:97;";
  backround.style =
    "background: rgba(255, 255, 255, .7);width:100%;height:100%;position:absolute ;z-index:97;";
  let sheet = window.document.styleSheets[0];
  sheet.insertRule(
    ".center{  display: flex;  text-align: center;  justify-content: center;  align-items: center;  min-height: 100vh;}",
    sheet.cssRules.length
  );
  document.body.style = "overflow: hidden;";
  document.body.prepend(loader);
  document.body.prepend(backround);

  let interval_loader = setInterval(function () {
    console.log($('[class^="input__item"]').length);
    if ($('[class^="input__item"]').length >= 34) {
      clearInterval(interval_loader);
      setTimeout(function () {
        loader.style.display = "none";
        backround.style.display = "none";
        document.body.style = "overflow: scroll;";
      }),
        3000;
    }
  }, 100);
}
