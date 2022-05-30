if(window.location.href.href.includes("https://desk.ngsub.tv/xtrf/faces/dashboard2/dashboard.seam")){
var vendorcapacity = setInterval(function() {
    var div = document.querySelector('div[ng-class="widgetCtrl.classNames"]');
    if(!div){
    }else{
      clearInterval(vendorcapacity);
      window.addEventListener('message', event => {
          if (event.origin.startsWith('https://xtrfsubscriptions.ngsub.tv')) { 
              window.open(event.data, "_blank");
          } else {
              return; 
          } 
      }); 
    }
    }, 500);
}
