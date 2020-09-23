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
    case 8:
      console.log("A7")
      break;
    case 9:
      console.log("A8")
      break;
    case 10:
      console.log("A9")
      break;
    case 11:
      console.log("A10")
      break;
    case 12:
      console.log("A11")
      break;
    case 13:
      console.log("A12")
      break;
    case 14:
      console.log("A13")
      break;
    case 15:
      console.log("A14")
      break;
    case 16:
      console.log("A15")
      break;
    case 17:
      console.log("A16")
      break;
    case 18:
      console.log("A17")
      break;
    case 19:
      console.log("A18")
      break;
    case 20:
      console.log("A19")
      break;
    case 21:
      console.log("A20")
      break;
    case 22:
      console.log("A21")
      break;
    case 23:
      console.log("A22")
      break;
    case 24:
      console.log("A23")
      break;
    case 25:
      console.log("A24")
      break;
    case 26:
      console.log("A25")
      break;
    case 27:
      console.log("A26")
      break;
    case 28:
      console.log("A27")
      break;
    case 29:
      console.log("A28")
      break;
    case 30:
      console.log("A29")
      break;
    case 31:
      console.log("A30")
      break;
    case 32:
      console.log("A31")
      break;

    default:
      console.warn("no element found?!?")
      break;
  }
  e.stopPropagation();
}


