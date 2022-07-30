
document.getElementById("inputValue").addEventListener("input", function(e) {
  var x1 = document.getElementById("mySelect").selectedIndex;
  var y1 = document.getElementsByTagName("option")[x1].value
  var x2 = document.getElementById("mySelect2").selectedIndex;
  var y2 = document.getElementsByTagName("option")[x2].value
  if (y1 !== y2){
    if (y1 == "Lbs" && y2 == "Kg") {
      let lbs = e.target.value;
      document.getElementById("result").innerHTML = lbs / 2.2046;
      
    }
    else if (y1 == "Kg" && y2 == "Lbs") {
      let kg = e.target.value;
      document.getElementById("result").innerHTML = kg * 2.2046;
      
    }
    else if (y1 == "Km" && y2 == "Miles") {
      let km = e.target.value;
      document.getElementById("result").innerHTML = km / 1.609;
      
    }
    else if (y1 == "F" && y2 == "C") {
      let f = e.target.value;
      document.getElementById("result").innerHTML = (f - 32) * 5/9;
      
    }
    else if (y1 == "C" && y2 == "F") {
      let c = e.target.value;
      document.getElementById("result").innerHTML = (c * 9/5) + 32 ;
      
    }
  
    else {
      document.getElementById("result").innerHTML = "Units are difference and not convertable";
    }
  }
  else{
    document.getElementById("result").innerHTML = "Same Unit: Error";
  }





});
