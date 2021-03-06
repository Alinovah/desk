if(location.href.includes("https://desk.ngsub.tv/xtrf/faces/activity/browse.seam?viewId=592")){
  var add_payable = setInterval(function() {
    var buttons_bar = $('[class^="x-title-bar__actions"]')[0];
    if(buttons_bar){
      clearInterval(add_payable);
      var add_payables_button = document.createElement("button");
      add_payables_button.textContent = "Add Payable";
      add_payables_button.style.marginRight = "10px";
      add_payables_button.onclick = addpayable;
      add_payables_button.className  = "dropdown-toggle x-btn --large ng-scope";
      add_payables_button.id  = "add-payable-button";
      buttons_bar.prepend(add_payables_button);
      var div = document.createElement("div");
      var x_button = document.createElement("button");
      x_button.innerText = "X";
      x_button.style = "margin:10px;width: 25px;align-self: flex-end;"
      x_button.onclick = hidepayableform;
      div.appendChild(x_button);
      div.id="add-payable-form";
      div.style = "padding-bottom:30px;padding-left:30px;flex-direction: column;transform: translate(-50%, 0%);display:none;justify-content:center;width: 500px; position: fixed; top:50%; left:50%; background-color:#ffffff;z-index:1;box-shadow: 0 0 9px 0";
      document.body.appendChild(div);
      var h2 = document.createElement("h2");
    h2.innerText = "Add Payables";
    div.appendChild(h2);
    var container = document.createElement("table");
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerText = "Calculation Unit:";
    td.style.width ="130px";
    tr.appendChild(td);
    var td = document.createElement("td");
    var select = document.createElement("select");
    select.id = "select-unit";
    td.style.paddingBottom = "10px";
    td.appendChild(select);
    tr.appendChild(td);
    container.appendChild(tr);
    div.appendChild(container);
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerText = "Rate:";
    tr.appendChild(td);
    var td = document.createElement("td");
    var input = document.createElement("input");
    input.id = "rate-payable";
    input.type = "number";
    td.appendChild(input);
    tr.appendChild(td);
    container.appendChild(tr);
    var submit = document.createElement("button");
    submit.innerText = "Add";
    submit.id = "submit-payables";
    container.appendChild(submit);
    }
  }, 500);
}

async function addpayable(){
  document.getElementById("add-payable-button").blur();
  var selected = document.querySelectorAll("tr[class='x-table__row --selected']");
  var ids = [];
  var types = [];
  var payables = [];
  var ths = document.querySelectorAll("th");
  var index_job_type = 0;
  var index_payable = 0;
  for(var i=0;i<ths.length;i++){
    if(ths[i].querySelector("span")){
      if(ths[i].querySelector("span").innerText.trim()=="Job Type"){
        index_job_type=i;
      }
      if(ths[i].querySelector("span").innerText.trim()=="Total Cost"){
        index_payable=i;
      }
    }
  };
  for(var i=0;i<selected.length;i++){
    var tds = selected[i].querySelectorAll("td");
    ids.push(tds[0].querySelector("input").id.substring(7,tds[0].querySelector("input").id.length));
    types.push(tds[index_job_type].querySelector("div").querySelector("div").innerText);
    payables.push(tds[index_payable].querySelector("div").querySelector("div").innerText);
  }
  var flag_type = true;
  var flag_payables = true;
  var type = types[0];
  for(var i=0;i<types.length;i++){
    if(types[i]!=type){
      flag_type=false;
      break;
    }
    if(parseFloat(payables[i])>0){
      flag_payables=false;
      break;
    }
  }
  // console.log(flag_type,flag_payables);
  if(flag_type&&flag_payables){
    var calcunit_raw = await fetch("https://xtrfsubscriptions.ngsub.tv:7903/getjobtypes?type="+type);
    var calcUnit = await calcunit_raw.json();
    var payableform = document.getElementById("add-payable-form");
    payableform.style.display = "flex";
    var select = document.getElementById("select-unit");
    select.innerHTML="";
    for(var i=0;i<calcUnit.length;i++){
      var option = document.createElement("option");
      option.value = calcUnit[i][0];
      option.innerText = calcUnit[i][1];
      select.appendChild(option);
    }
    document.getElementById("submit-payables").onclick = ()=>{submittedpayable(ids)};
  }else{
    if(!flag_payables){
      alert("One of the selected jobs already have a payable. Please remove first and try again.");
    }else{
      alert("Mixed Job Types. Please select jobs with the same type only.");
    }
  }
}

function hidepayableform(){
  document.getElementById("add-payable-form").style.display = "none";
}

async function submittedpayable(ids){
  hidepayableform();
  var calcunit = document.getElementById("select-unit").value;
  var rate = document.getElementById("rate-payable").value;
  var data = [calcunit,rate,ids];
  // console.log(data);
  var options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  }
  await fetch("https://xtrfsubscriptions.ngsub.tv:7903/addpayables",options);
}
