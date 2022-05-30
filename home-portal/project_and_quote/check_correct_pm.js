if (
  window.location.href.substring(0, 71) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam" ||
  window.location.href.substring(0, 67) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/quotes/quote.seam"
) {
  let interval = setInterval(function () {
    if ($('[class^="input__item"]').length >= 34) {
      clearInterval(interval);

//       setTimeout(function () {
        var inputs = document.querySelectorAll("div[class='input__item']");
        var pm = "";
        for (var i = 0; i < inputs.length; i++) {
          var title = inputs[i].querySelector("div").innerText;
          if (title == "Project Manager") {
            pm = inputs[i].querySelectorAll("div")[1];
          }
        }
        var pm_name = pm.querySelector("a").innerText;
        var name = document.querySelector("div[class='name']").textContent;
        if (!(pm_name == name)) {
          if(document.querySelector(".email").textContent=='dani.berger@ngsub.tv'){
            console.log("redirect");
            window.location.href = "https://desk.ngsub.tv/xtrf/faces/dashboard2/dashboard.seam"
            }else{
            alert(
              `The PM set for this project is ${pm_name} and the logged in user is ${name}.\n If the project is yours, change the PM at "People".`
            );
          }
        }
//       }, 3000);
    }
  }, 100);
}
