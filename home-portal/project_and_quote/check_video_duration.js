if (
  window.location.href.substring(0, 71) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam" ||
  window.location.href.substring(0, 67) ==
    "https://desk.ngsub.tv/xtrf/faces/projectAssistant/quotes/quote.seam"
) {
  ////////////////////////// check video duration /////////////////////////

  const interval_filecount = setInterval(function () {
    var duration = 0;
    if (
      document.querySelector('input[ng-model="::order.volume"]') != null ||
      document.querySelector('input[ng-model="quote.volume"]') != null
    ) {
      if (document.querySelector('input[ng-model="::order.volume"]') != null) {
        duration = document.querySelector(
          'input[ng-model="::order.volume"]'
        ).value;
      } else if (
        document.querySelector('input[ng-model="quote.volume"]') != null
      ) {
        duration = document.querySelector(
          'input[ng-model="quote.volume"]'
        ).value;
      }
    }
    if (
      !document.querySelector(
        'a[class="filename link ng-binding x-icon --file"]'
      )
    ) {
      //console.log("no uploads");
      flag = 0;
    } else {
      if (flag == 0) {
        flag = 1;
        var file_upload = document.querySelector(
          'a[class="filename link ng-binding x-icon --file"'
        ).href;
        console.log(file_upload);
        if (
          document
            .querySelector('a[class="filename link ng-binding x-icon --file"')
            .innerText.toLowerCase()
            .indexOf(".mp4") > -1
        ) {
          check_duration(file_upload);
        }
      }
    }

    function check_duration(link) {
      if (document.getElementById("video_container") == null) {
        var div = document.createElement("div");
        div.id = "video_container";
        document.body.append(div);
      } else {
        var div = document.getElementById("video_container");
      }

      var alert_ms = document.createElement("h3");
      div.innerHTML =
        '<video style="display: none;" id="myvid"><source src="' +
        link +
        '" type="video/mp4"></video>';

      document.querySelector(
        'button[ng-click="closeUploadPopup()"]'
      ).style.display = "none";

      getduration();

      function getduration() {
        setTimeout(function () {
          var myvid = document.getElementById("myvid");
          var vid_duration = Math.ceil(myvid.duration / 60);
          console.log(vid_duration.toString() == "NaN");
          alert_ms.innerHTML =
            '<p style="padding:0;"><img style="padding:0;opacity:2;width:10%;height:10%;" src="https://drive.google.com/uc?id=13-ZWSQg_olXbqbfL82TcDr8SK5zgh9Jd"></p>';
          document
            .querySelector('div[class="ngdialog-footer"]')
            .prepend(alert_ms);
          document.querySelector(
            'button[ng-click="closeUploadPopup()"]'
          ).style.display = "inline";
          if (vid_duration.toString() == "NaN") {
            getduration();
            console.log("not yet " + vid_duration);
          } else {
            if (vid_duration != duration) {
              alert_ms.style = "color:#ff0000 !important;opacity: 1;";
              alert_ms.innerText =
                "Note! video duration is " +
                vid_duration +
                " Min while project duration is " +
                duration +
                " Min.";
              document
                .querySelector('div[class="ngdialog-footer"]')
                .prepend(alert_ms);
              document.querySelector(
                'button[ng-click="closeUploadPopup()"]'
              ).style.display = "inline";
            } else {
              alert_ms.style = "color:#009e3a !important;opacity: 1;";
              alert_ms.innerText =
                "Confirming video duration and project duration are equal, " +
                vid_duration +
                " Min.";
              document
                .querySelector('div[class="ngdialog-footer"]')
                .prepend(alert_ms);
              document.querySelector(
                'button[ng-click="closeUploadPopup()"]'
              ).style.display = "inline";
            }
            console.log(vid_duration);
          }
        }, 1000);
      }
    }
  }, 500);
}
