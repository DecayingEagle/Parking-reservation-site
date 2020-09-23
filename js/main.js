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
,"694,78,739,146"];

var parkingSelected;

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
    }
  }

  switch (parkingSelected) {
    case 0:
      console.log("EL1")
      break;
    case 1:
      console.log("EL2")
      break;
    case 2:
      console.log("A1")
      break;
    case 3:
      console.log("A2")
      break;
    case 4:
      console.log("A3")
      break;
    case 5:
      console.log("A4")
      break;
    case 6:
      console.log("A5")
      break;
    case 7:
      console.log("A6")
      break;

    default:
      console.warn("no element found?!?")
      break;
  }
  e.stopPropagation();
}


