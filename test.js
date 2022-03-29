console.log("External Script Loaded");
console.log(currentlink);

let currentlink = window.location.href;
let script = document.createElement("script");
script.type = "text/javascript";

//### home portal ###
if (currentlink.includes("https://desk.ngsub.tv/xtrf/faces/")) {
  console.log("home portal");
  script.src = "https://alinovah.github.io/desk/homeportal.js";
  document.querySelector("body").appendChild(script);
}
//### vendor portal ###
if (currentlink.includes("https://desk.ngsub.tv/vendors/")) {
  console.log("vendor portal");
  script.src = "https://alinovah.github.io/desk/vendorsportal.js";
  document.querySelector("body").appendChild(script);
}


