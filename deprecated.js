/////////////////////////// append reset button ////////////////////
  //var controls = $('[class^="controls ng-scope"]')[0];
  //var button = document.createElement("button");
  //button.textContent = "Reset Process";
  //button.className  = "btn ng-scope";
  //button.id  = "resetprocessbutton";
  //button.onclick = resetprocess;
  //controls.appendChild(button);
////////////////////////// END /////////////////////////////////// 

//////////////////////////reset process///////////////////////
async function resetprocess(){
      var customfields=document.querySelectorAll('div[class="input__item custom_field"]');
      var key = "";
      for(var k=0;k<customfields.length;k++){
        if(customfields[k].querySelector('div').textContent=='key'){
          key = customfields[k].querySelector('span').textContent;
        }
      }
      var pid = window.assistedProjectId;
      var url = "https://desk.ngsub.tv/home-api/v2/projects/"+pid+"/jobs";
      const myHeaders = new Headers({'X-AUTH-ACCESS-TOKEN': key});
      const myRequest = new Request(url, {
            method: 'GET',
            headers: myHeaders
            });
      var jsondata;
      fetch(myRequest)
            .then(response => response.json())
            .then(data => jsondata=data);
      setTimeout(function() {
         var ids=[];
         var statuss=[];
         var jsonkeys = Object.keys(jsondata);
         for(var a=0;a<jsonkeys.length;a++){
           ids.push(jsondata[jsonkeys[a]]["id"]);
           statuss.push(jsondata[jsonkeys[a]]["status"]);
         }
         for(var d=0;d<ids.length;d++){
           var id=ids[d];
           var url = "https://desk.ngsub.tv/home-api/v2/jobs/"+id+"/status";
           var flag = 0;
           if(statuss[d]=="OPEN"){
             flag = 0;
           }else if(statuss[d]=="CANCELLED"){
             flag = 1;
           }else if(statuss[d]=="STARTED"){
             flag = 2;
           }else if(statuss[d]=="ACCEPTED"){
             flag = 1;
           }else if(statuss[d]=="READY"){
             flag = 3;
           }else{
             flag = 0;
           }
           if(flag==0){
           }else if(flag==1){
              changestatus(url);
           }else if(flag==2){
              changestatus2(url);
           }else if(flag==3){
              changestatus3(url);
           }
         }
       resetprocesss2(); 
       }, 1000);
    }
////////////////////////// END /////////////////////////////////// 


///////////////////// reset process functions /////////////////////////
function changestatus(url){
  console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);
    xhr.setRequestHeader("accept", "*/*");
    xhr.setRequestHeader("X-AUTH-ACCESS-TOKEN", "WmjKM4LznJhaXfcIoPODbmXx1Y");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
       }};
    var data = '{"status":"OPEN"}';   
    xhr.send(data);
  }
function changestatus2(url){
    console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);
    xhr.setRequestHeader("accept", "*/*");
    xhr.setRequestHeader("X-AUTH-ACCESS-TOKEN", "WmjKM4LznJhaXfcIoPODbmXx1Y");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            setTimeout(function() {
            var xhr = new XMLHttpRequest();
            xhr.open("PUT", url);
            xhr.setRequestHeader("accept", "*/*");
            xhr.setRequestHeader("X-AUTH-ACCESS-TOKEN", "WmjKM4LznJhaXfcIoPODbmXx1Y");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
               if (xhr.readyState === 4) {
                  console.log(xhr.status);
                  console.log(xhr.responseText);
               }};
            var data = '{"status":"OPEN"}';   
            xhr.send(data);
          }, 500);
       }};
    var data = '{"status":"ACCEPTED"}';   
    xhr.send(data);
  }
  function changestatus3(url){
    console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url);
    xhr.setRequestHeader("accept", "*/*");
    xhr.setRequestHeader("X-AUTH-ACCESS-TOKEN", "WmjKM4LznJhaXfcIoPODbmXx1Y");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            setTimeout(function() {
            var xhr = new XMLHttpRequest();
            xhr.open("PUT", url);
            xhr.setRequestHeader("accept", "*/*");
            xhr.setRequestHeader("X-AUTH-ACCESS-TOKEN", "WmjKM4LznJhaXfcIoPODbmXx1Y");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
               if (xhr.readyState === 4) {
                  console.log(xhr.status);
                  console.log(xhr.responseText);
                  setTimeout(function() {
                    var xhr = new XMLHttpRequest();
                    xhr.open("PUT", url);
                    xhr.setRequestHeader("accept", "*/*");
                    xhr.setRequestHeader("X-AUTH-ACCESS-TOKEN", "WmjKM4LznJhaXfcIoPODbmXx1Y");
                    xhr.setRequestHeader("Content-Type", "application/json");
                    xhr.onreadystatechange = function () {
                       if (xhr.readyState === 4) {
                          console.log(xhr.status);
                          console.log(xhr.responseText);
                       }};
                    var data = '{"status":"OPEN"}';   
                    xhr.send(data);
                  }, 500);
               }};
            var data = '{"status":"ACCEPTED"}';   
            xhr.send(data);
          }, 500);
       }};
    var data = '{"status":"STARTED"}';   
    xhr.send(data);
  }
////////////////////////// END /////////////////////////////////// 

////////////////////////// reset process 2 ////////////////////
function resetprocesss2(){
  console.log("clicked");
  setTimeout(function() {
    console.log("after timeout");
    var closewindow = $('[class^="close x-icon --close ng-scope"]')[0];
    if(closewindow!=undefined){
      eventFire(closewindow, 'click');
    }
    var firstjob = document.querySelector('div[class="content ng-scope clickable"]');
    eventFire(firstjob, 'click');
    setTimeout(function() {
      var select = document.querySelector('div[class="very-simple-dropdown dropdown--small status-selector status ng-isolate-scope vsd-normal status__open"]');
      eventFire(select, 'click');
      setTimeout(function() {
        var accepted = document.querySelector('div[value="ACCEPTED"]');
        eventFire(accepted, 'click');
        var accepted = document.querySelector('div[value="ACCEPTED"]');
        eventFire(accepted, 'click');
        setTimeout(function() {
         eventFire(select, 'click');
         setTimeout(function() {
           var open = document.querySelector('div[value="OPEN"]');
           eventFire(open, 'click');
           var closewindow = $('[class^="close x-icon --close ng-scope"]')[0];
           if(closewindow!=undefined){
             eventFire(closewindow, 'click');
           }
         }, 500);
        }, 500); 
      }, 500);
    }, 500);
  }, 2000);  
}
////////////////////////// END ////////////////////

///////////////// append build process button //////////////////////
//var button = document.createElement("button");
//button.textContent = "Build Process";
//button.className  = "btn ng-scope";
//button.id  = "buildprocessbutton";
//button.onclick = buildprocess;
//languages_el.append(button);

////////////////// buildprocess ///////////////////////////
function buildprocess(){
  //console.log("clicked");
  var pmvewrification;
  var clientreview;
  var qc;
  var customfields=document.querySelectorAll('div[class="input__item custom_field"]');
  for(var k=0;k<customfields.length;k++){
         if(customfields[k].querySelector('div').textContent=='PM Verification'){
            pmvewrification = customfields[k].querySelector('input');
         }
         if(customfields[k].querySelector('div').textContent=='Client Review'){
            clientreview = customfields[k].querySelector('input');
         }
         if(customfields[k].querySelector('div').textContent=='QC'){
            qc = customfields[k].querySelectorAll('div')[1];
         }
   }
var inputs = $('[class^="input__item"]');
for(var i=0;i<inputs.length;i++){
  if(inputs[i].querySelector("div")){
    if(inputs[i].querySelector("div").innerText=='Service'){
      var service = inputs[i];
    }
  }
}
var flag = 0;
var elements = document.querySelectorAll('div[class="nd-display ng-binding ng-scope nd-non-expand nd-none-selected"]');
var elements2 = document.querySelectorAll('div[class="nd-display ng-binding ng-scope nd-non-expand"]');
for(var e=0;e<elements.length;e++){
  console.log(elements[e].innerText);
  if(elements[e].innerText=='Change Process'){
    flag=1;
  }
}
for(var e=0;e<elements2.length;e++){
  console.log(elements2[e].innerText);
  if(elements2[e].innerText=='Change Process'){
    flag=1;
  }
}
console.log(flag);
if(flag==0){
  eventFire(document.getElementById('resetprocessbutton'),"click");
}  
selectprocess(service,pmvewrification,clientreview,qc);
}

function eventFire(el, etype) {
 if (el.fireEvent) {
   el.fireEvent('on' + etype);
 } else {
   var evObj = document.createEvent('Events');
   evObj.initEvent(etype, true, false);
   el.dispatchEvent(evObj);
 }
}

///////////////////////// END ///////////////////////////////

///////////////////////// select process ///////////////////////////////
function selectprocess(service,pmvewrification,clientreview,qc){
  var elements = document.querySelectorAll('div[class="nd-display ng-binding ng-scope nd-non-expand nd-none-selected"]');
  var elements2 = document.querySelectorAll('div[class="nd-display ng-binding ng-scope nd-non-expand"]');
  for(var e=0;e<elements.length;e++){
    if(elements[e].innerText=='Change Process'){
      flag=1;
       eventFire(elements[e],"click");
       function eventFire(el, etype) {
         if (el.fireEvent) {
           el.fireEvent('on' + etype);
         } else {
           var evObj = document.createEvent('Events');
           evObj.initEvent(etype, true, false);
           el.dispatchEvent(evObj);
         }
       }
    }
  }
  for(var e=0;e<elements2.length;e++){
    if(elements2[e].innerText=='Change Process'){
      flag=1;
       eventFire(elements2[e],"click");
       function eventFire(el, etype) {
         if (el.fireEvent) {
           el.fireEvent('on' + etype);
         } else {
           var evObj = document.createEvent('Events');
           evObj.initEvent(etype, true, false);
           el.dispatchEvent(evObj);
         }
       }
    }
  }
  console.log(flag);
  if(flag==0){
    setTimeout(function() {
     selectprocess(service,pmvewrification,clientreview,qc);
    }, 1000);
  }else{ 
var qccheck = qc.innerText;
var languages = $('[class^="nd-display ng-binding ng-scope"]');
  for(var i=0;i<languages.length;i++){
    if(languages[i].parentElement.parentElement.parentElement.querySelector('div').innerText=='Source Language'){
      var source = languages[i];
      var target = languages[i+1];
    }
  }
languages=target.textContent;
source=source.textContent;
console.log(service.querySelectorAll('div')[1].textContent);
if(service.querySelectorAll('div')[1].textContent=='Basic Translation'){
  console.log("tranlsation process");
  servicebasictranslation(pmvewrification,clientreview,qccheck,languages,source);
}else if(service.querySelectorAll('div')[1].textContent=='Basic Transcription / Translation without template'){
  console.log("transcription process");
  servicebasictranscription(pmvewrification,clientreview,qccheck,languages,source);
}else if(service.querySelectorAll('div')[1].textContent=='Translation + source'){
  console.log("Translation + source process");
  servicetranslationwithsource(pmvewrification,clientreview,qccheck,languages,source);
}
  }
}

///////////////////////// END ///////////////////////////////


///////////////////////// service basic translation ///////////////////////////////

function servicebasictranslation(pmvewrification,clientreview,qccheck,languages,source){
var p="";
var comma = (languages.match(/,/g) || []).length;
if(qccheck=="English Only"){
   if(comma==0){
     if(source=="HE"&&languages.indexOf("EN")>-1){
      qccheck="Yes";
     }else{
      qccheck="No";
     }
   }else{
     if(source=="HE"&&languages.indexOf("EN")>-1){
      qccheck=="English Only";
     }else{
      qccheck="No";
     }
   }
}
  if(pmvewrification.checked&&clientreview.checked&&qccheck=="English Only"){
    p="תמלול->תזמון->תרגום->קיוסי אוטומטי->מנהל->לקוח  (1)";
  }else if(!pmvewrification.checked&&clientreview.checked&&qccheck=="English Only"){
    p="תמלול->תזמון->תרגום->קיוסי אוטומטי->לקוח  (2)";
  }else if(pmvewrification.checked&&!clientreview.checked&&qccheck=="English Only"){
    p="תמלול->תזמון->תרגום->קיוסי אוטומטי->מנהל (3)";
  }else if(!pmvewrification.checked&&!clientreview.checked&&qccheck=="English Only"){
    p="תמלול->תזמון->תרגום->קיוסי (8)";
  }else if(pmvewrification.checked&&clientreview.checked&&qccheck=="Yes"){
    p="תמלול->תזמון->תרגום->קיוסי->מנהל->לקוח (5)";
  }else if(!pmvewrification.checked&&clientreview.checked&&qccheck=="Yes"){
    p="תמלול->תזמון->תרגום->קיוסי->לקוח (6)";
  }else if(pmvewrification.checked&&!clientreview.checked&&qccheck=="Yes"){
    p="תמלול->תזמון->תרגום->קיוסי->מנהל (7)";
  }else if(!pmvewrification.checked&&!clientreview.checked&&qccheck=="Yes"){
    p="תמלול->תזמון->תרגום->קיוסי (8)";
  }else if(pmvewrification.checked&&clientreview.checked&&qccheck=="No"){
    p="תמלול->תזמון->תרגום->מנהל->לקוח (9)";
  }else if(!pmvewrification.checked&&clientreview.checked&&qccheck=="No"){
    p="תמלול->תזמון->תרגום->לקוח (10)";
  }else if(pmvewrification.checked&&!clientreview.checked&&qccheck=="No"){
    p="תמלול->תזמון->תרגום->מנהל (11)";
  }else if(!pmvewrification.checked&&!clientreview.checked&&qccheck=="No"){
    p="תמלול->תזמון->תרגום (12)";
  }
  console.log(p);
  var process = document.querySelectorAll('div[ng-if="::(!itemLabels)"]');
  for(var f=0;f<process.length;f++){
    if(process[f].textContent==p){
      eventFire(process[f],"click");
      setTimeout(function() {
      if(document.querySelectorAll('div[class="widget ng-scope view-loading"]').length>0){
       var intervalloadingprocess = setInterval(function() {
        if(document.querySelectorAll('div[class="widget ng-scope view-loading"]').length==0){
          clearInterval(intervalloadingprocess);
          location.reload();
        }
      }, 200);
      }
      }, 500);
    }
  }
}  
  
///////////////////////// END ///////////////////////////////


///////////////////////// service basic transcription ///////////////////////////////

function servicebasictranscription(pmvewrification,clientreview,qccheck,languages,source){
  var p="";
  var comma = (languages.match(/,/g) || []).length;
  if(qccheck=="English Only"){
     if(source=="HE"&&languages.indexOf("EN")>-1){
      qccheck="Yes";
     }else{
      qccheck="No";
     }
  }
  if(pmvewrification.checked&&clientreview.checked&&qccheck=="Yes"){
    p="תמלול->תזמון->קיוסי->מנהל->לקוח (5)";
  }else if(!pmvewrification.checked&&clientreview.checked&&qccheck=="Yes"){
    p="תמלול->תזמון->קיוסי->לקוח (6)";
  }else if(pmvewrification.checked&&!clientreview.checked&&qccheck=="Yes"){
    p="תמלול->תזמון->קיוסי->מנהל (7)";
  }else if(!pmvewrification.checked&&!clientreview.checked&&qccheck=="Yes"){
    p="תמלול->תזמון->קיוסי (8)";
  }else if(pmvewrification.checked&&clientreview.checked&&qccheck=="No"){
    p="תמלול->תזמון->מנהל->לקוח (9)";
  }else if(!pmvewrification.checked&&clientreview.checked&&qccheck=="No"){
    p="תמלול->תזמון->לקוח (10)";
  }else if(pmvewrification.checked&&!clientreview.checked&&qccheck=="No"){
    p="תמלול->תזמון->מנהל (11)";
  }else if(!pmvewrification.checked&&!clientreview.checked&&qccheck=="No"){
    p="תמלול->תזמון (12)";
  }
  console.log(p);
  var process = document.querySelectorAll('div[ng-if="::(!itemLabels)"]');
  for(var f=0;f<process.length;f++){
    if(process[f].textContent==p){
      eventFire(process[f],"click");
      setTimeout(function() {
      if(document.querySelectorAll('div[class="widget ng-scope view-loading"]').length>0){
       var intervalloadingprocess = setInterval(function() {
        if(document.querySelectorAll('div[class="widget ng-scope view-loading"]').length==0){
          clearInterval(intervalloadingprocess);
          location.reload();
        }
      }, 200);
      }
      }, 500);
    }
  }
}
///////////////////////// END ///////////////////////////////

///////////////////////// service translation with source ///////////////////////////////

function servicetranslationwithsource(pmvewrification,clientreview,qccheck,languages,source){
  var p="";
  if(source!="HE"&&source!="EN"&&source!="AR"&&source!="RU"){
    p="המרה";
  }else{
    var comma = (languages.match(/,/g) || []).length;
    if(source)
    if(qccheck=="English Only"){
         if(source=="HE"&&languages.indexOf("EN")>-1){
          qccheck="English Only";
         }else{
          qccheck="No";
         }
    }
    if(pmvewrification.checked&&clientreview.checked&&qccheck=="English Only"){
      p=source+" תרגום+תמלול תמלול->תזמון->תרגום->קיוסי->מנהל->לקוח (8)";
    }else if(!pmvewrification.checked&&clientreview.checked&&qccheck=="English Only"){
      p=source+" תרגום+תמלול תמלול->תזמון->תרגום->קיוסי->לקוח (10)";
    }else if(pmvewrification.checked&&!clientreview.checked&&qccheck=="English Only"){
      p=source+" תרגום+תמלול תמלול->תזמון->תרגום->קיוסי->מנהל (9)";
    }else if(!pmvewrification.checked&&!clientreview.checked&&qccheck=="English Only"){
      p="תמלול->תזמון->תרגום->קיוסי (8)";
    }else if(pmvewrification.checked&&clientreview.checked&&qccheck=="Yes"){
      p=source+" תרגום+תמלול תמלול->תזמון->תרגום->קיוסי->מנהל->לקוח (1)";
    }else if(!pmvewrification.checked&&clientreview.checked&&qccheck=="Yes"){
      p=source+" תרגום+תמלול תמלול->תזמון->תרגום->קיוסי->לקוח (2)";
    }else if(pmvewrification.checked&&!clientreview.checked&&qccheck=="Yes"){
      p=source+" תרגום+תמלול תמלול->תזמון->תרגום->קיוסי->מנהל (3)";
    }else if(!pmvewrification.checked&&!clientreview.checked&&qccheck=="Yes"){
      p=source+" תרגום+תמלול תמלול->תזמון->תרגום->קיוסי (4)";
    }else if(pmvewrification.checked&&clientreview.checked&&qccheck=="No"){
      p=source+" תרגום+תמלול תמלול->תזמון->תרגום->מנהל->לקוח (5)";
    }else if(!pmvewrification.checked&&clientreview.checked&&qccheck=="No"){
      p=source+" תרגום+תמלול תמלול->תזמון->תרגום->לקוח (6)";
    }else if(pmvewrification.checked&&!clientreview.checked&&qccheck=="No"){
      p=source+" תרגום+תמלול תמלול->תזמון->תרגום->מנהל (7)";
    }else if(!pmvewrification.checked&&!clientreview.checked&&qccheck=="No"){
      p="תמלול->תזמון->תרגום (12)";
    }
  }
  console.log(p);
  var process = document.querySelectorAll('div[ng-if="::(!itemLabels)"]');
  for(var f=0;f<process.length;f++){
    if(process[f].textContent==p){
      eventFire(process[f],"click");
      setTimeout(function() {
      if(document.querySelectorAll('div[class="widget ng-scope view-loading"]').length>0){
      var intervalloadingprocess = setInterval(function() {
        if(document.querySelectorAll('div[class="widget ng-scope view-loading"]').length==0){
          clearInterval(intervalloadingprocess);
          location.reload();
        }
      }, 200);
      }
      }, 500);
    }
  }
}

///////////////////////// END ///////////////////////////////

//////////////////////////revert job///////////////////////

  //var controls = $('[class^="controls ng-scope"]')[0];
  //var button = document.createElement("button");
  //button.textContent = "Revert Job";
  //button.className  = "btn ng-scope";
  //button.onclick = revertjob;
  //controls.appendChild(button);

var count = 50;

function revertjob(){
  var k=0;
  var selected = document.querySelector("div[class='job ng-scope selected']");
  var clickables = selected.querySelector("div[class='content ng-scope clickable']");
  resetjob(clickables);
}

/////////////////////////////////////////////////////////////////////////////////////////////  
  function resetjob(clicked){

    var clickable=clicked;
    eventFire(clickable, 'click');
    var jobs = $('[class^="head single clickable"]');
    //console.log(jobs.length);
    if(jobs.length==0){
    var state = $('[class^="item ng-binding ng-scope ng-isolate-scope"]');
    if(state[0].textContent=="Mark as accepted"){
      ////do nothing
      setTimeout(function(){
      },2700);
      flag = flag+1;
      console.log("no change");
    }else if(state[0].textContent=="Mark as ready"){
      setTimeout(function(){
      console.log("started to accepted");
      eventFire(state[1], 'click');
      eventFire($('[class^="close x-icon --close ng-scope"]')[0], 'click');
      },900);
    }else if(state[0].textContent=="Revert to started"){
      setTimeout(function(){
      console.log("ready to started");
      eventFire(state[0], 'click');
      eventFire($('[class^="close x-icon --close ng-scope"]')[0], 'click');
      setTimeout(function(){
      eventFire(clickable, 'click');
      console.log("started to accepted");
      var state = $('[class^="item ng-binding ng-scope ng-isolate-scope"]');
      console.log(state[1].textContent);
      eventFire(state[1], 'click');
      eventFire($('[class^="close x-icon --close ng-scope"]')[0], 'click');
      },700);
      },700);
    }else{
      setTimeout(function(){
      },2700);
    }
  }
}

//////////////////////////comments placeholder///////////////////////

for(var d=0;d<document.querySelectorAll('input[ng-model="customFieldCtrl.customField.value"]').length;d++){
if(document.querySelectorAll('input[ng-model="customFieldCtrl.customField.value"]')[d].parentElement.parentElement.parentElement.parentElement.querySelector('div').textContent=="Comments"){
  var comments = document.querySelectorAll('input[ng-model="customFieldCtrl.customField.value"]')[d];
  comments.placeholder="מופיע בהצעת המחיר";
}
}

////////////////////////// END ////////////////////


///////////////// statuses handler ////////////////////////
var inputs = $('[class^="input__item"]');
for(var i=0;i<inputs.length;i++){
  if(inputs[i].querySelector("div")){
    if(inputs[i].querySelector("div").innerText=='Expected Delivery Date'||inputs[i].querySelector("div").innerText=='Client Deadline'){
      var deadline = inputs[i];
    }
  }
}

var inputscustomfields = $('[class^="input__item custom_field"]');
for(var i=0;i<inputscustomfields.length;i++){
  if(inputscustomfields[i].querySelector("div")){
    if(inputscustomfields[i].querySelector("div").innerText=='Use Status'){
      var UseStatus = inputscustomfields[i].querySelector('input').checked;
      var UseStatusEl = inputscustomfields[i];
      UseStatusEl.style.display = "none";
    }
    if(inputscustomfields[i].querySelector("div").innerText=='Status'){
      var Status = inputscustomfields[i];
    }
    if(inputscustomfields[i].querySelector("div").innerText=='Estimated Start Date'){
      var EstimatedStartDate = inputscustomfields[i];
    }
  }
}
EstimatedStartDate.append(UseStatusEl);
deadline.append(Status);
UseStatusEl.querySelector('span').style.width ="40px";
var interval3 = setInterval(function() {

var statuslist = document.querySelectorAll('div[class="nd-label ng-binding ng-scope"]');
for(var i=0;i<statuslist.length;i++){
  if(statuslist[i].textContent=='Unspecified'){
    statuslist[i].parentElement.style.display='none'
  }
}  
var inputscustomfields = $('[class^="input__item custom_field"]');
for(var i=0;i<inputscustomfields.length;i++){
  if(inputscustomfields[i].querySelector("div")){
    if(inputscustomfields[i].querySelector("div").innerText=='Use Status'){
      var UseStatus = inputscustomfields[i].querySelector('input').checked;
    }
  }
}
if(UseStatus&&currentlink.substring(0,67)=="https://desk.ngsub.tv/xtrf/faces/projectAssistant/quotes/quote.seam"){
  deadline.querySelectorAll('div')[0].style.display="none";
  deadline.querySelectorAll('div')[1].style.display="none";
  Status.style.display="block";
  Status.style.width ="10px";
  Status.style.marginBottom ="0px";
  
}else{
  deadline.querySelectorAll('div')[0].style.display="block";
  deadline.querySelectorAll('div')[1].style.display="block";
  Status.style.display="none";
}
}, 500);
////////////////////////// END ////////////////////

//////////////////////// hide categories ////////////////////////////////
document.querySelector('div[class="widget-micro"]').style.display="none";
////////////////////////// END ////////////////////

//////////////////////// disable pricelist selection ////////////////////////////////
var customfields=document.querySelectorAll('div[class="input__item custom_field"]');
for(var k=0;k<customfields.length;k++){
       if(customfields[k].querySelector('div').textContent=='Pricelist'){
            customfields[k].querySelector('div[ng-class="[inline?'+"'"+'nd-inline'+"'"+':'+"''"+']"]').className="";
       }
       if(customfields[k].querySelector('div').textContent=='key'){
          customfields[k].style.display="none";
       }
 }
///////////////////////// END ////////////////////////////


//////////////////////// Check specilazation for pricelist /////////////////////////
var pricelistinitial;
var customfields=document.querySelectorAll('div[class="input__item custom_field"]');
for(var k=0;k<customfields.length;k++){
         if(customfields[k].querySelector('div').textContent=='Pricelist'){
              pricelistinitial = customfields[k].querySelector('div[class="nd-display ng-binding ng-scope"]').textContent ;
         }
}
console.log(pricelistinitial);
if(pricelistinitial=='Unspecified'){
  pricelistinitial="מחירון_סטנדרט";
}
setInterval(function() {
var inputitems=document.querySelectorAll('div[class="input__item"]');
var specilazation;
for(var k=0;k<inputitems.length;k++){
       if(inputitems[k].querySelector('div').textContent=='Specialization'){
            specilazation = inputitems[k].querySelector('div[class="nd-display ng-binding ng-scope"]').textContent;
       }
 }
var expression = /סדר/gi;
var matches = specilazation.match(expression);


  var customfields=document.querySelectorAll('div[class="input__item custom_field"]');
  for(var k=0;k<customfields.length;k++){
         if(customfields[k].querySelector('div').textContent=='Pricelist'){
           if(matches){
               customfields[k].querySelector('div[class="nd-display ng-binding ng-scope"]').textContent ="מחירון_סדרות";
            }else{
               customfields[k].querySelector('div[class="nd-display ng-binding ng-scope"]').textContent =pricelistinitial ;
             }   
         }
   }
  

}, 200);
///////////////////////// END ////////////////////////
////////////////////////// put contact and pm on top /////////////////////

        
var client_Notes =  document.querySelector('div[class="input-wrap grid"]');
var new_grid = document.createElement("div");
new_grid.className = "input-wrap grid";
var parentNode = document.querySelector('div[class="body ng-scope"]');
parentNode.insertBefore(new_grid, client_Notes);
new_grid.style = "height:150px;"


var input_items = document.querySelectorAll('div[class="input__item"]');
var contact_person
var project_manager
for(var i=0;i<input_items.length;i++){
  if(input_items[i].querySelector('div').innerText=='Main Contact'){
    contact_person=input_items[i];
  }
  if(input_items[i].querySelector('div').innerText=='Project Manager'){
    project_manager=input_items[i];
  }
}
project_manager.parentElement.style =  "position: relative;width:100%";
if(document.querySelector('h2[class="heading x-icon x-icon--people-outline x-icon--large"]')){
  var rect = document.querySelector('h2[class="heading x-icon x-icon--people-outline x-icon--large"]').getBoundingClientRect();
}else{
  var rect = document.querySelector('h2[class="heading x-icon --people-outline --large"]').getBoundingClientRect();
}
  var pos = rect.top + window.scrollY;
  const rect2 = document.querySelector('h2[class="heading x-icon x-icon--order x-icon--large ng-scope"]').getBoundingClientRect();
  var pos2 = rect2.top + window.scrollY;
  var pos_offset = (pos-pos2-140);//(Math.round(window.devicePixelRatio)*10);
  var pos_offset2 = pos-pos2-260;
//project_manager.style = "position: absolute; top: -"+pos_offset+"px;left:0px;";
contact_person.style = "position: absolute; top: -"+pos_offset2+"px;left: 30px;";

var contact_old = contact_person.querySelector("label").innerText;
var pm_old = project_manager.querySelector("a")?  project_manager.querySelector("a").innerText:  project_manager.querySelector("label").innerText ;

var interval_contact = setInterval(function() {
var input_items = document.querySelectorAll('div[class="input__item"]');
var contact_person
var project_manager
for(var i=0;i<input_items.length;i++){
  if(input_items[i].querySelector('div').innerText=='Main Contact'){
    contact_person=input_items[i];
  }
  if(input_items[i].querySelector('div').innerText=='Project Manager'){
    project_manager=input_items[i];
  }
}

project_manager.parentElement.style =  "position: relative;width:100%";
  if(document.querySelector('h2[class="heading x-icon x-icon--people-outline x-icon--large"]')){
    var rect = document.querySelector('h2[class="heading x-icon x-icon--people-outline x-icon--large"]').getBoundingClientRect();
  }else{
    var rect = document.querySelector('h2[class="heading x-icon --people-outline --large"]').getBoundingClientRect();
  }
  var pos = rect.top + window.scrollY;
  const rect2 = document.querySelector('h2[class="heading x-icon x-icon--order x-icon--large ng-scope"]').getBoundingClientRect();
  var pos2 = rect2.top + window.scrollY;
  var pos_offset = (pos-pos2-140);//(Math.round(window.devicePixelRatio)*10);
var pos_offset2 = pos-pos2-260;
//project_manager.style = "position: absolute; top: -"+pos_offset+"px;left:0px;";
contact_person.style = "position: absolute; top: -"+pos_offset2+"px;left: 30px;";

var innerpm = project_manager.querySelector("a")?  project_manager.querySelector("a").innerText:  project_manager.querySelector("label").innerText ;
var innercontact =contact_person.querySelector("label").innerText;
  if((innerpm!=pm_old||innercontact!=contact_old)&&innercontact!=""&&contact_old!=""&&innercontact!=" "&&contact_old!=" "&&innercontact!=null&&contact_old!=null&&contact_old.charCodeAt(0)!=160&&innercontact.charCodeAt(0)!=160){
    //console.log("contact chagned");
    //console.log([innerpm,pm_old,innercontact,contact_old]);
    setTimeout(function() {
    window.scrollTo(0, 0);
    }, 500);
    contact_old = innercontact;
    pm_old = innerpm;

  var input_items = document.querySelectorAll('div[class="input__item"]');
          var contact_person
          var project_manager
          for(var i=0;i<input_items.length;i++){
            if(input_items[i].querySelector('div').innerText=='Main Contact'){
              contact_person=input_items[i];
            }
            if(input_items[i].querySelector('div').innerText=='Project Manager'){
              project_manager=input_items[i];
            }
          }
project_manager.parentElement.style =  "position: relative;width:100%";
  const rect = document.querySelector('h2[class="heading x-icon --people-outline --large"]').getBoundingClientRect();
  var pos = rect.top + window.scrollY;
  //console.log(pos);
  const rect2 = document.querySelector('h2[class="heading x-icon x-icon--order x-icon--large ng-scope"]').getBoundingClientRect();
  var pos2 = rect2.top + window.scrollY;
  //console.log(pos2);
  var pos_offset = (pos-pos2-140);//(Math.round(window.devicePixelRatio)*10);
  var pos_offset2 = pos-pos2-260;
//project_manager.style = "position: absolute; top: -"+pos_offset+"px;left:0px;";
contact_person.style = "position: absolute; top: -"+pos_offset2+"px;left: 30px;";

  }
}, 100);  

////////////////////////// END ////////////////////



////////////////////////// request price change button /////////////////////

var customfields = document.querySelectorAll('div[class="input__item custom_field"]');
var enablechange = "";
for(var i=0;i<customfields.length;i++){
  if(document.querySelectorAll('div[class="input__item custom_field"]')[i].querySelector('div').textContent=="Enable Price Change"){
    enablechange = document.querySelectorAll('div[class="input__item custom_field"]')[i];
  }
} 
var email = document.querySelector('div[class="email"]').textContent;
var intervaleditbutton = setInterval(function() {
var editbutton = document.getElementById("formWithPanels:receivablesTable:0:j_idt297");
    if(editbutton){
        if(enablechange.querySelectorAll('div')[1].innerText=="FALSE"&&email!='mor@ngsub.tv'&&email!='tal.levy@ngsub.tv'&&email!='carmel@ngsub.tv'){
          editbutton.style.display="none";
        }else{
          editbutton.style.display="block";
        }
    }
}, 100);

var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("assistedProjectId");
var url_for_approve = "http://pilk.mooo.com:7896/requestrateadjustment?id="+c;

var customfields = document.querySelectorAll('div[class="input__item custom_field"]');
for(var i=0;i<customfields.length;i++){
  if(document.querySelectorAll('div[class="input__item custom_field"]')[i].querySelector('div').textContent=="Enable Price Change"&&document.querySelectorAll('div[class="input__item custom_field"]')[i].querySelectorAll('div')[1].innerText=="FALSE"&&email!='mor@ngsub.tv'&&email!='tal.levy@ngsub.tv'&&email!='carmel@ngsub.tv'){
    var requesttext = document.createElement("TEXTAREA");
    requesttext.id = "requesttext";
    requesttext.className = "inp ng-pristine ng-valid ng-empty ng-touched";
    requesttext.style = "width: 100%; max-width: 100%; overflow: hidden; overflow-wrap: break-word; resize: none; height: 58px;";
    requesttext.style.display = "none";
    requesttext.dir="rtl";
    customfields[i].append(requesttext);
    var requestbutton = document.createElement("button");
    requestbutton.innerText = "Request Price Change";
    requestbutton.className= "btn ng-scope";
    requestbutton.onclick = requestform;
    requestbutton.id = "requestbutton";
    customfields[i].append(requestbutton);
    var cancelbutton = document.createElement("button");
    cancelbutton.innerText = "Cancel Request";
    cancelbutton.className= "btn ng-scope";
    cancelbutton.onclick = cancelrequest;
    cancelbutton.id = "cancelrequest";
    cancelbutton.style.display = "none";
    customfields[i].append(cancelbutton);
  }
}

function requestform(){
  console.log("clicked");
    var requestbutton = document.getElementById("requestbutton");
    requestbutton.innerText = "Send Request";
    requestbutton.onclick = sendrequest;
    var cancelbutton = document.getElementById("cancelrequest");
    cancelbutton.style.display = "block";
    var requesttext = document.getElementById("requesttext");
    requesttext.style.display = "block";
}

function cancelrequest(){
  console.log("clicked cancelrequest");
    var requestbutton = document.getElementById("requestbutton");
    requestbutton.innerText = "Request Price Change";
    requestbutton.onclick = requestform;
    var cancelbutton = document.getElementById("cancelrequest");
    cancelbutton.style.display = "none";
    var requesttext = document.getElementById("requesttext");
    requesttext.style.display = "none";
}

function sendrequest(){
  console.log("clicked sendrequest");
    var requestbutton = document.getElementById("requestbutton");
    requestbutton.innerText = "Request Sent!";
    requestbutton.disabled = true;
    var cancelbutton = document.getElementById("cancelrequest");
    cancelbutton.style.display = "none";
    var requesttext = document.getElementById("requesttext");
    requesttext.style.display = "none";
    var request = requesttext.value;
    sendemail(request);
}

function sendemail(request){
    ////////////////////////// send email /////////////////////
var project_id = document.querySelector('span[ng-if="project.name"]').innerText.substring(0,document.querySelector('span[ng-if="project.name"]').innerText.length-1).toString();
var pm = document.querySelector('div[class="name"]').textContent;
var email = document.querySelector('div[class="email"]').textContent;
url_for_approve = url_for_approve+"&pm="+pm+"&email="+email+"&project_id="+project_id;
var data = {
    service_id: 'service_65sfjal',
    template_id: 'template_cpglsht',
    user_id: 'user_Rmex4xmP46PWaVqzAOuCP',
    template_params: {
        'pm': pm,
        'project_id': project_id,
        'decline': "123",
        'approve':url_for_approve,
        'project_link': window.location.href,
        'reply_to': email,
        'reason': request,
        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    }
};
$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
}).done(function() {
    console.log('Your mail is sent!');
}).fail(function(error) {
    console.log('Oops... ' + JSON.stringify(error));
});


}
////////////////////////// END ////////////////////

function statushandler(){
///////////////// statuses handler ////////////////////////
var inputs = $('[class^="input__item"]');
for(var i=0;i<inputs.length;i++){
  if(inputs[i].querySelector("div")){
    if(inputs[i].querySelector("div").innerText=='Expected Delivery Date'||inputs[i].querySelector("div").innerText=='Client Deadline'){
      var deadline = inputs[i];
    }
  }
}

var inputscustomfields = $('[class^="input__item custom_field"]');
for(var i=0;i<inputscustomfields.length;i++){
  if(inputscustomfields[i].querySelector("div")){
    if(inputscustomfields[i].querySelector("div").innerText=='Use Status'){
      var UseStatus = inputscustomfields[i].querySelector('input').checked;
      var UseStatusEl = inputscustomfields[i];
      UseStatusEl.style.display = "none";
    }
    if(inputscustomfields[i].querySelector("div").innerText=='Status'){
      var Status = inputscustomfields[i];
    }
    if(inputscustomfields[i].querySelector("div").innerText=='Estimated Start Date'){
      var EstimatedStartDate = inputscustomfields[i];
    }
  }
}
EstimatedStartDate.append(UseStatusEl);
//EstimatedStartDate.prepend(Status);
//deadline.append(Status);
//insertAfter(Status, EstimatedStartDate);
EstimatedStartDate.parentNode.insertBefore(Status, EstimatedStartDate);
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
UseStatusEl.querySelector('span').style.width ="40px";
var interval3 = setInterval(function() {

var statuslist = document.querySelectorAll('div[class="nd-label ng-binding ng-scope"]');
for(var i=0;i<statuslist.length;i++){
  if(statuslist[i].textContent=='Unspecified'){
    statuslist[i].parentElement.style.display='none'
  }
}  
var inputscustomfields = $('[class^="input__item custom_field"]');
for(var i=0;i<inputscustomfields.length;i++){
  if(inputscustomfields[i].querySelector("div")){
    if(inputscustomfields[i].querySelector("div").innerText=='Use Status'){
      var UseStatus = inputscustomfields[i].querySelector('input').checked;
    }
  }
}
if(UseStatus&&currentlink.substring(0,67)=="https://desk.ngsub.tv/xtrf/faces/projectAssistant/quotes/quote.seam"){
  deadline.querySelectorAll('div')[0].style.display="none";
  deadline.querySelectorAll('div')[1].style.display="none";
  Status.style.display="block";
  Status.style.width ="10px";
  Status.style.marginBottom ="0px";
  
}else{
  deadline.querySelectorAll('div')[0].style.display="block";
  deadline.querySelectorAll('div')[1].style.display="block";
  Status.style.display="none";
}
}, 500);
}
////////////////////////// END ////////////////////

/////////////////////////Process select///////////////////////////
/*var controls = $('[class^="controls ng-scope"]')[0];
var button = document.createElement("button");
button.textContent = "Select Automatic Process";
button.className  = "btn ng-scope";
button.onclick = selectautomaticeprocess;
controls.appendChild(button);*/

// // ///////////////////////////// END ////////////////////

////////////////////////////////////
function selectautomaticeprocess(){
  if(document.getElementById('processloader')){
    document.getElementById('processloader').style.display='block';
  }else{
  var loaderprocess = document.createElement('p');
  loaderprocess.style = "padding:0;";
  var loaderprocessimg = document.createElement('img');
  loaderprocessimg.style = "padding:0;opacity:2;width:20%;height:20%;";
  loaderprocessimg.src = "https://drive.google.com/uc?id=13-ZWSQg_olXbqbfL82TcDr8SK5zgh9Jd";
  loaderprocess.appendChild(loaderprocessimg);
  loaderprocess.id = "processloader";
  document.getElementById("langs").appendChild(loaderprocess);
  }
  var languages = $('[class^="nd-display ng-binding ng-scope"]');
  for(var i=0;i<languages.length;i++){
    if(languages[i].parentElement.parentElement.parentElement.querySelector('div').innerText=='Source Language'){
      var source = languages[i];
      var target = languages[i+1];
    }
  }
  console.log("changed");
  
  var flag = 0;
  var elements = document.querySelectorAll('div[class="nd-display ng-binding ng-scope nd-non-expand nd-none-selected"]');
  for(var e=0;e<elements.length;e++){
    if(elements[e].innerText=='Change Process'){
      flag=1;
    }
  }
  if(flag==0){
    eventFire(document.getElementById('resetprocessbutton'),"click");
      function eventFire(el, etype) {
   if (el.fireEvent) {
     el.fireEvent('on' + etype);
   } else {
     var evObj = document.createEvent('Events');
     evObj.initEvent(etype, true, false);
     el.dispatchEvent(evObj);
   }
 }
 
  }
  
  console.log(target.textContent);
  resetprocess3(target.textContent);
}


function resetprocess3(languages){
  setTimeout(function() {
  var p ="";
  var flag = 0;
  var elements = document.querySelectorAll('div[class="nd-display ng-binding ng-scope nd-non-expand nd-none-selected"]');
  for(var e=0;e<elements.length;e++){
    if(elements[e].innerText=='Change Process'){
      flag=1;
       eventFire(elements[e],"click");
         function eventFire(el, etype) {
         if (el.fireEvent) {
           el.fireEvent('on' + etype);
         } else {
           var evObj = document.createEvent('Events');
           evObj.initEvent(etype, true, false);
           el.dispatchEvent(evObj);
         }
       }
       console.log("after");
    }
  }
  if(flag==0){
    setTimeout(function() {
      resetprocess3(languages);
    }, 1000);
  }else{
   console.log("before click");
   var process = document.querySelectorAll('div[ng-if="::(!itemLabels)"]');
   console.log((languages.match(/,/g) || []).length);
   var comma = (languages.match(/,/g) || []).length;
   if(comma==0){
     if(languages.indexOf("EN")>-1){
       p="תמלול->תזמון->תרגום->קיוסי";
     }else{
       p="תמלול->תזמון->תרגום";
     }
   }else{
     if(languages.indexOf("EN")>-1){
       p="תמלול->תזמון->תרגום->קיוסי אוטומטי";
     }else{
       p="תמלול->תזמון->תרגום";
     }
   }
   console.log(p);
  for(var f=0;f<process.length;f++){
    if(process[f].textContent==p){
      eventFire(process[f],"click");
    }
  }
  document.getElementById('processloader').style.display='none';
  }
  }, 3000);
}

////////////////////////// END ////////////////////



///////////////////////////// appand calc price button + PDF button /////////////////

if(currentlink.substring(0,67)=="https://desk.ngsub.tv/xtrf/faces/projectAssistant/quotes/quote.seam"){

/*var controls = $('[class^="controls ng-scope"]')[0];
var button = document.createElement("button");
button.textContent = "Calc Price";
button.className  = "btn ng-scope";
button.id  = "calcpricebutton";
button.onclick = calcprice;
controls.appendChild(button);

var controls = $('[class^="controls ng-scope"]')[0];
var button2 = document.createElement("button");
button2.textContent = "Create PDF";
button2.className  = "btn ng-scope";
button2.id  = "createpdfbutton";
button2.onclick = createpdf;
controls.appendChild(button2);

var controls = $('[class^="controls ng-scope"]')[0];
var button3 = document.createElement("button");
button3.textContent = "Create General PDF";
button3.className  = "btn ng-scope";
button3.id  = "creategeneralpdfbutton";
button3.onclick = creategeneralpdfbutton;
controls.appendChild(button3);*/

}

/////////////////////////////// END ///////////////////////////

///////////////////////////// create PDF  //////////////////////////////
async function createpdf(){
  //var url = 'https://xtrfsubscriptions.ngsub.tv:7896/updatefinancenew?pid='+window.assistedProjectId;
  //var url = 'https://xtrfsubscriptions.ngsub.tv:7896/updatefinancenew?pid='+window.assistedProjectId;
  var url = 'https://xtrfsubscriptions.ngsub.tv:7896/regularquote?pid='+window.assistedProjectId;
  
  //window.open(url);
  var popup = window.open(url, "popup", "left=0,top=0,width=0,height=0");
  setTimeout(function() {
    popup.close();
  }, 1000);
}

///////////////////////////// create General PDF  //////////////////////////////
async function creategeneralpdfbutton(){
  //https://00c6-79-178-122-16.ngrok.io/generalquote?pid=AF4ZVUR5WFFPZIWY7HPULAE7EI
  var url = 'https://xtrfsubscriptions.ngsub.tv:7896/generalquote?pid='+window.assistedProjectId;
  //window.open(url);
  var popup = window.open(url, "popup", "left=0,top=0,width=0,height=0");
  setTimeout(function() {
    popup.close();
  }, 1000);
}

async function calcprice(){
      var customfields=document.querySelectorAll('div[class="input__item custom_field"]');
      if(document.querySelector('input[ng-model="quote.volume"]')){
        var duration = document.querySelector('input[ng-model="quote.volume"]').value;
      }else{
        var duration = document.querySelector('input[ng-model="::order.volume"]').value;
      }
      var quantity = 0;
      var status = "";
      var umbrella = "";
      var key = "";
      var standardR = 0;
      var rushR = 0;
      var urgentR = 0;
      var immidiateR = 0;
      var workingdays = 0;
      for(var k=0;k<customfields.length;k++){
       if(customfields[k].querySelector('div').textContent=='Status'){
          status = customfields[k].querySelectorAll('div')[1].textContent;
       }
       if(customfields[k].querySelector('div').textContent=='Umbrella Number'){
          umbrella = customfields[k].querySelector('input').value;
       }
       if(customfields[k].querySelector('div').textContent=='key'){
          key = customfields[k].querySelector('span').textContent;
       }
       if(customfields[k].querySelector('div').textContent=='כללית - רגיל'){
          standardR = customfields[k].querySelector('input');
       }
       if(customfields[k].querySelector('div').textContent=='כללית - דחוף'){
          rushR = customfields[k].querySelector('input');
       }
       if(customfields[k].querySelector('div').textContent=='כללית - בהול'){
          urgentR = customfields[k].querySelector('input');
       }
       if(customfields[k].querySelector('div').textContent=='כללית - מיידי'){
          immidiateR = customfields[k].querySelector('input');
       }
       if(customfields[k].querySelector('div').textContent=='Working Days'){
          workingdays = customfields[k].querySelector('input');
       }
      }
      var url = "https://desk.ngsub.tv/home-api/browser?viewId=405&q.customFields.textField4=eq("+umbrella+")";
      const myHeaders = new Headers({'X-AUTH-ACCESS-TOKEN': key});
      const myRequest = new Request(url, {
            method: 'GET',
            headers: myHeaders
            });
      var jsondata;
      fetch(myRequest)
            .then(response => response.json())
            .then(data => jsondata=data);
      setTimeout(function() {
        console.log(jsondata["rows"]);
        var jsonkeys = Object.keys(jsondata["rows"]);
        for(var i=0;i<jsonkeys.length;i++){
          quantity=Number(quantity)+Number(jsondata["rows"][jsonkeys[i]]["columns"][13]);
        }
        console.log("total quantity="+quantity);
        var ids=[];
        var jsonkeys = Object.keys(jsondata["rows"]);
        ids.push("520");
        for(var a=0;a<jsonkeys.length;a++){
          ids.push(jsondata["rows"][a]["id"]);
        }
        console.log("ids="+ids);
        macrocalcprice(ids,key,quantity,myHeaders,standardR,rushR,urgentR,immidiateR,workingdays);

      }, 700);
}
////////////////////////// END ////////////////////


        ///////////// run macro calc price ///////////////
        function macrocalcprice(ids,key,quantity,myHeaders,standardR,rushR,urgentR,immidiateR,workingdays){
          console.log("in macrocalcprice")

        var url = "https://desk.ngsub.tv/home-api/macros/37/run";

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        
        xhr.setRequestHeader("accept", "application/vnd.xtrf-v1+json;charset=UTF-8");
        xhr.setRequestHeader("X-AUTH-ACCESS-TOKEN", key);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        
        xhr.onreadystatechange = function () {
           if (xhr.readyState === 4) {
              console.log(xhr.status);
              console.log(xhr.responseText);
              
              var url2 = JSON.parse(xhr.responseText)["resultUrl"];
              console.log(url2);
              
              fetch2(url2,myHeaders,standardR,rushR,urgentR,immidiateR,ids,key,quantity,workingdays);
              
           }  
           
        }  
        var data = '{"ids":['+ids+'],"async":true,"params":{"totalquantity":'+quantity+',"quoteId":"'+window.assistedProjectId+'"}}';
        xhr.send(data);
      }
function fetch2(url2,myHeaders,standardR,rushR,urgentR,immidiateR,ids,key,quantity,workingdays){
setTimeout(function() {
  var jsondata2="";
  console.log(url2);       
  var myRequest2 = new Request(url2, {
        method: 'GET',
        headers: myHeaders
        });
                fetch(myRequest2)
                .then(response => response.json())
                .then(data => jsondata2=data);
                        //.then(data => jsondata2=data);
                 console.log(myRequest2);       
        setTimeout(function() {  
                //console.log(jsondata2["status"]) ;       
                if(jsondata2["url"]==undefined){//||jsondata2["status"]=="500"||jsondata2["status"]==500) {
                 //  fetch2(url2,myHeaders,standardR,rushR,urgentR,immidiateR,ids,key,quantity,workingdays);
                   //macrocalcprice(ids,key,quantity,myHeaders,standardR,rushR,urgentR,immidiateR,workingdays);
                 //}else if(jsondata2["status"]=="204"||jsondata2["status"]==204||jsondata2["status"]=="400"||jsondata2["status"]==400) {
                   macrocalcprice(ids,key,quantity,myHeaders,standardR,rushR,urgentR,immidiateR,workingdays);
                 }else{ 
                     console.log(jsondata2["url"]);
                     console.log(jsondata2);
                    ///////////////////////////
                    var url3 = jsondata2["url"];
                    const myRequest3 = new Request(url3, {
                            method: 'GET',
                            headers: myHeaders
                            });
                    var jsondata3;
                    setTimeout(function() {
                      fetch(myRequest3)
                              .then(response => response.json())
                              .then(data => jsondata3=data);
                              //.then(data => jsondata3=data);
                      setTimeout(function() {
                          console.log(jsondata3[0]);
                          console.log(jsondata3[1]);
                          console.log(jsondata3[2]);
                          console.log(jsondata3[3]);
                          console.log(jsondata3[4]);
                          standardR.value = JSON.stringify(jsondata3[0]);
                          rushR.value = JSON.stringify(jsondata3[1]);
                          urgentR.value = JSON.stringify(jsondata3[2]);
                          immidiateR.value = JSON.stringify(jsondata3[3]);
                          workingdays.value = jsondata3[4][0];
                      },2000);    
                    },1500);
                    ///////////////////////////
                    aftercalculateprice();
                }
                },1500);    
          },1500);
}
 
 
     function aftercalculateprice(){
  function eventFire(el, etype) {
   if (el.fireEvent) {
     el.fireEvent('on' + etype);
   } else {
     var evObj = document.createEvent('Events');
     evObj.initEvent(etype, true, false);
     el.dispatchEvent(evObj);
   }
 }
    var intervalloading = setInterval(function() {
    var receivabletab = document.getElementById("formWithPanels:receivablesTab");
     if(receivabletab.style.display=="none"){
         var tabs = document.querySelectorAll('span[class="rf-tab-lbl"]');
         for(var z=0;z<tabs.length;z++){
           if(tabs[z].textContent=="Receivables"){
               eventFire(tabs[z], 'click');
           }
         }
    }else{
       clearInterval(intervalloading);
       var createreceivable = document.querySelector('input[value="Add Receivable"]');
       eventFire(createreceivable, 'click');
       var intervalloading2 = setInterval(function() {
         var savebutton = document.querySelector('input[value="Save"]');
         if(savebutton){
           eventFire(savebutton, 'click');
           clearInterval(intervalloading2);
           var flag=0;
           
           var deletezero = setInterval(function() {
             console.log(flag);
            if(flag==3){
              clearInterval(deletezero);
            }else{
              flag++;
             console.log($('td[id*=totalValueColumn]').length);
             for(var b=0;b<$('td[id*=totalValueColumn]').length;b++){
             console.log($('td[id*=totalValueColumn]')[b].querySelector('div').textContent);
             console.log($('td[id*=totalValueColumn]')[b].querySelector('div').textContent=='0.00ILS\n            ');
             if($('td[id*=totalValueColumn]')[b].querySelector('div').textContent=='0.00ILS\n            '){
              eventFire($('td[id*=deleteColumn]')[b].querySelector('a'), 'click');
             }
            }
          }
          }, 3000); 
         }else{
         }
       }, 100);
    }
  }, 100);
    }             
    
//////////////////////////// END ////////////////////////////

/////////////////////////// hide general quote for show ////////////////////

setInterval(function() {
var customfields=document.querySelectorAll('div[class="input__item custom_field"]');
var pricelist;
for(var k=0;k<customfields.length;k++){
       if(customfields[k].querySelector('div').textContent=='Pricelist'){
            pricelist = customfields[k];
       }
}
var generalPDFbutton = document.getElementById('creategeneralpdfbutton');
if(generalPDFbutton==null){
}else{
  if(pricelist.querySelectorAll('div')[1].innerText=='מחירון_סדרות'){
    generalPDFbutton.style.display="none";
  }else{
    generalPDFbutton.style.display="block";
  }
}
}, 500);
/////////////////////////////// END ///////////////////////////


  
