let home_editor_button_interval = setInterval(function () {
  if(location.href.includes("https://desk.ngsub.tv/xtrf/faces/projectAssistant/projects/project.seam")){
    const actions_bar = document.querySelector('[ng-click="goToProcessDesigner()"]').parentElement;
    if (actions_bar) {
      ///////////////////////////////////////////////////////////////////////
      clearInterval(home_editor_button_interval);
      const editorButton = createEditorButton();
      actions_bar.appendChild(editorButton);
      setInterval(()=>{
        const button = document.querySelector("#editor-button");
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const jobid = (window.location.href.split("/").pop()).split("=").pop();
        let id = document.querySelector('.job-id');
        if(id){
          id = id.innerText;
        }
        if(jobid&&jobid!="project"&&id){
          button.onclick = () =>{openEditor(jobid,id)};
          button.style.display = "block";
        }else{
          button.style.display = "none";
        }
      },500);
      ///////////////////////////////////////////////////////////////////////
    }
  }
 }, 1000);
//////////////////////////////////////////////////////////////

function createEditorButton(){
  let button;
  if(!document.querySelector("#editor-button")){
    button = document.createElement("button");
    button.id = "editor-button";
    button.type = "button";
    button.className = "btn ng-binding ng-scope";
    button.style.display = "none";
    button.innerText = "NG Editor";
  }else{
    button = document.querySelector("#editor-button");
  }
  return button;
}
function openEditor(jobid,id){
  const hash64 = btoa(id);
  console.log(hash64);
    window.open(`http://3.121.36.180:7905/${jobid}?id=${hash64}`, '_blank');
}

