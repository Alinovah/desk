let home_remove_media_button_interval = setInterval(function () {
  if(location.href.includes("https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam")){
    const actions_bar = document.querySelector('[ng-click="goToProcessDesigner()"]').parentElement;
    if (actions_bar) {
      ///////////////////////////////////////////////////////////////////////
      clearInterval(home_remove_media_button_interval);
      const removeMediaButton = getRemoveMediaButton();
      actions_bar.appendChild(removeMediaButton);
      removeMediaButton.onclick = () =>{removeMedia()};
      /////////////////////////////////////////////////////////////////////
    }
  }
}, 1000);
//////////////////////////////////////////////////////////////

function getRemoveMediaButton(){
  let button;
  if(!document.querySelector("#remove-media-button")){
    button = document.createElement("button");
    button.id = "remove-media-button";
    button.type = "button";
    button.className = "btn ng-binding ng-scope";
    button.innerText = "Remove Media Data";
    button.style.backgroundColor="#ffc1c1";
  }else{
    button = document.querySelector("#editor-button");
  }
  return button;
}

function removeMedia(){
  console.log("remove media")
  const pid = window.assistedProjectId;
  window.open(`http://3.67.142.122:7906/removeprojectmedia/${pid}`,'_blank');
}

