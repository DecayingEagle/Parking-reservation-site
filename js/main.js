const parking_Spot_A_cords = ["245,78,290,146"
,"290,78,335,146" 
,"335,78,380,146" 
,"380,78,415,146" 
,"425,78,470,146" 
,"470,78,514,146" 
,"514,78,559,146" 
,"559,78,604,146" 
,"604,78,649,146" 
,"649,78,694,146"
,"694,78,740,146" 
,"245,262,291,330"
,"291,262,335,330"
,"335,262,380,330"
,"380,262,415,330"
,"425,262,470,330"
,"470,262,514,330"
,"514,262,559,330"
,"559,262,604,330"
,"604,262,649,330"
,"649,262,694,330"
,"694,262,740,330"
,"245,331,291,398"
,"291,331,335,398"
,"335,331,380,398"
,"380,331,415,398"
,"425,331,470,398"
,"470,331,514,398"
,"514,331,559,398"
,"559,331,604,398"
,"604,331,649,398"
,"649,331,694,398"
,"694,331,740,398"];

var parkingSelected;
var parkingslotPick;

var map1 = document.getElementById("parkingA");
//var map2 = document.getElementById(parkingB);

//map1.onclick() = function () {
    
//}
var map1 = document.querySelector("map");

map1.addEventListener("click", eventHandler, false);

function eventHandler(e) {
  e.preventDefault();
  if (e.target != e.currentTarget) {
    var clicked = e.target.coords;
    console.log(clicked);
  }
  
  for (let i = 0; i < parking_Spot_A_cords.length; i++) {
    if (clicked == parking_Spot_A_cords[i]) {
      parkingSelected = i;
      break;
    }
  }

  if (parkingSelected == 0 || parkingSelected == 1) {
    console.log("EL" + (parkingSelected + 1));
    parkingslotPick = "EL" + (parkingSelected + 1);
  } else{
    console.log("A" + (parkingSelected - 1));
    parkingslotPick = "A" + (parkingSelected - 1);
  }
  e.stopPropagation();
}