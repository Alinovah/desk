if (
  window.location.href.substring(0, 71) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam" ||
  window.location.href.substring(0, 67) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/quotes/quote.seam"
) {
  let flag = 0;
  const interval = setInterval(()=>{
    const inputs = $('[class^="input__item"]');
    if(inputs.length>34){
      clearInterval(interval);
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].querySelector("div")) {
          if (
            inputs[i].querySelector("div").innerText == "Expected Delivery Date" ||
            inputs[i].querySelector("div").innerText == "Client Deadline"
          ) {
            var input1 = inputs[i].querySelector("input");
          }
          if (inputs[i].querySelector("div").innerText == "Volume (Minute)") {
            var input5 = inputs[i].querySelector("input");
          }
        }
      }
      var inputscustomfields = $('[class^="input__item custom_field"]');
      for (var i = 0; i < inputscustomfields.length; i++) {
        if (inputscustomfields[i].querySelector("div")) {
          if (
            inputscustomfields[i].querySelector("div").innerText ==
              "number of video files" ||
            inputscustomfields[i].querySelector("div").innerText ==
              "Number of pages"
          ) {
            var input6 = inputscustomfields[i].querySelector("input");
          }
          if (
            inputscustomfields[i].querySelector("div").innerText ==
            "Umbrella Number"
          ) {
            var input9 = inputscustomfields[i].querySelector("input");
          }
          if (
            inputscustomfields[i].querySelector("div").innerText == "Use Status"
          ) {
            var UseStatus = inputscustomfields[i].querySelector("input");
            var UseStatusEl = inputscustomfields[i];
          }
        }
      }

      var for_disable = document.createElement("div");
      for_disable.id = "for_disable";
      document.body.prepend(for_disable);
      if (document.querySelector('input[ng-model="quote.volume"]')) {
        document.querySelector('input[ng-model="quote.volume"]').placeholder =
          "כדאי קודם כול לבחור שפות...";
      } else {
        if(document.querySelector('input[ng-model="::order.volume"]')){
          document.querySelector('input[ng-model="::order.volume"]').placeholder =
            "כדאי קודם כול לבחור שפות...";
        }
      }
      var intervalId = window.setInterval(function () {
        var one = document.getElementById("nd-ms-3cnt");
        one.style.zIndex = 5;
        one.style.position = "relative";
        one.style.top = 0;

        var one = document.getElementById("nd-ms-2cnt");
        one.style.zIndex = 5;
        one.style.position = "relative";
        one.style.top = 0;

        var one = document.getElementById("nd-ms-1cnt");
        one.style.zIndex = 5;
        one.style.position = "relative";
        one.style.top = 0;

        var div_to_disable = document.querySelector(
          'div[class="process-container project-process ng-scope"]'
        );
        const rect = div_to_disable.getBoundingClientRect();
        var pos = rect.top + window.scrollY;
        const rect2 = document
          .querySelector('span[ng-if="project.name"]')
          .getBoundingClientRect();
        var pos2 = rect2.top; // + window.scrollY;
        var pos_offset = pos - pos2 - 52.984375 - 116 + 230;
        //console.log([pos,pos2,pos_offset]);
        var left_pos = rect.left;

        var languages = $('[class^="nd-display ng-binding ng-scope"]');
        for (var i = 0; i < languages.length; i++) {
          if (
            languages[i].parentElement.parentElement.parentElement.querySelector(
              "div"
            ).innerText == "Source Language"
          ) {
            var source = languages[i];
            var target = languages[i + 1];
          }
        }

        if (source.textContent == "Select Language...") {
          source.style = "background:#f5b8b8";
        }
        if (source.textContent != "Select Language...") {
          source.style = "background:#ffffff";
        }
        if (target.textContent == "Select Languages...") {
          target.style = "background:#f5b8b8";
        }
        if (target.textContent != "Select Languages...") {
          target.style = "background:#ffffff";
        }

        if (input1.value == "") {
          input1.style = "background-color: #f5b8b8 !important";
        } else {
          input1.style = "background-color:#ffffff !important";
        }

        if (input5.value == "") {
          input5.style = "background-color: #f5b8b8 !important";
        } else {
          input5.style = "background-color:#ffffff !important";
        }
        if (input6.value == "") {
          input6.style = "background-color: #f5b8b8 !important";
        } else {
          input6.style = "background-color:#ffffff !important";
        }
        if (input9.value == "") {
          input9.style = "background-color: #f5b8b8 !important";
        } else {
          input9.style = "background-color:#ffffff !important";
        }

        for (
          var c = 0;
          c <
          document.querySelectorAll('div[class="nd-display ng-binding ng-scope"]')
            .length;
          c++
        ) {
          if (
            document.querySelectorAll(
              'div[class="nd-display ng-binding ng-scope"]'
            )[c]
          ) {
            var specilazation = document.querySelectorAll(
              'div[class="nd-display ng-binding ng-scope"]'
            )[c];
            if (specilazation.innerText == "___") {
              specilazation.style =
                "background-color: #f5b8b8 !important; color: #949494 !important";
            } else {
              specilazation.style = "background-color:#ffffff !important";
            }
          }
        }
      }, 100);
    }
  },500);
}
