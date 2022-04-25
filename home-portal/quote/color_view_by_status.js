if(window.location.href.includes("https://desk.ngsub.tv/xtrf/faces/quote/browse.seam?viewId=176")||window.location.href.includes("https://desk.ngsub.tv/xtrf/faces/quote/browse.seam?viewId=64")){
      let quoteview_interval = setInterval(function() {
      let ul = document.querySelectorAll("ul")[6];
      if(ul){
        let header_cells = document.querySelectorAll('span[ng-bind-html*="column.internalHeader"]');
        let status_cell = 0;
        for(let i=0;i<header_cells.length;i++){
          if(header_cells[i].innerText=="Custom Fields > Quote Status"){
            status_cell = i;
            status_cell++;
            break;
          }
        }
        let trs = document.querySelectorAll(".x-table__row");
        trs.forEach((row)=>{
          let tds = row.querySelectorAll("td");
          let status = tds[status_cell].innerText;
          const colors ={
            "בהכנה":"#d9d9d9",
            "–":"#d9d9d9",
            "נשלח ללקוח":"#ff9c9c",
            "אושר":"#6bdb80",
            "הומר לפרויקט":"#ffff99",
          }
          tds[status_cell].closest("tr").style.backgroundColor = colors[status];
        });
      }
    }, 500);
}
