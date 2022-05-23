if (
  window.location.href.substring(0, 43) ==
    "https://desk.ngsub.tv/xtrf/faces/home.seam?" ||
  window.location.href.substring(0, 42) ==
    "https://desk.ngsub.tv/xtrf/faces/home.seam"
) {
  const loader = document.createElement("div");
  const backround = document.createElement("div");
  document.body.prepend(loader);
  document.body.prepend(backround);
  loader.innerHTML =
    '<h1 style="width:100%;height:100%; position:absolute; top:0px" ><p style="padding:0;"><img style="padding:0;opacity:2;width:100%;height:100%;" src="https://drive.google.com/uc?id=1M5gl6GsTrM9rcxUfeKvfzM0I-P8fJKw3"></p></h1>';
  loader.style =
    "background: rgba(255, 255, 255, 0);width:100%;height:100%;position:absolute ;z-index:97;";
  backround.style =
    "background: rgba(255, 255, 255, 1);width:100%;height:100%;position:absolute ;z-index:97;";
  document.body.style = "overflow: hidden;";

  setTimeout(function () {
    const logged_in = document.querySelector(".email").textContent;
    if (logged_in != "NGDesk@ngsub.tv") {
      window.location =
        "https://desk.ngsub.tv/xtrf/faces/dashboard2/dashboard.seam#/detail/";
    }else{
      loader.style.display = "none";
      backround.style.display = "none";
    }
  }, 6000);
}
