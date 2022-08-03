console.log("app2.js loaded");


$("#select1").change(function() {
    if ($(this).data('options') == undefined) {
      /*Taking an array of all options-2 and kind of embedding it on the select1*/
      $(this).data('options', $('#select2 option').clone());
    }
    var id = $(this).val();
    var options = $(this).data('options').filter('[value=' + id + ']');
    $('#select2').html(options);
  });


$("#select3").change(function() {
    if ($(this).data('options') == undefined) {
      /*Taking an array of all options-2 and kind of embedding it on the select1*/
      $(this).data('options', $('#select4 option').clone());
    }
    var id = $(this).val();
    var options = $(this).data('options').filter('[value=' + id + ']');
    $('#select4').html(options);
  });




  
document.getElementById("inputValue").addEventListener("input", function(e) {
    var x1 = document.getElementById("select1").selectedIndex;
    var y1 = document.getElementsByTagName("option")[x1].value
    var x3 = document.getElementById("select3").selectedIndex;
    var y3 = document.getElementsByTagName("option")[x3].value
    // console.log(y1);
    // console.log(y3);


    var x2b = document.getElementById("select2").selectedIndex
    var x4b = document.getElementById("select4").selectedIndex
    console.dir(x2b);
    console.log(x4b);

if (y1 == "weight" && y3 == "weight") {
    if ( x2b == 1 && x4b == 0) {
      let lbs = e.target.value;
      document.getElementById("result").innerHTML = lbs / 2.2046; 
  }
  
    else if ( x2b == 0 && x4b == 1 ) {
      let kg = e.target.value;
      document.getElementById("result").innerHTML = kg * 2.2046;  
  }
    else if ( x2b == x4b ){
      document.getElementById("result").innerHTML = "Units are SAME and not convertable";
  }
}





else if (y1 == "distance" && y3 == "distance"){
    if ( x2b == 0 && x4b == 1) {
      let miles = e.target.value;
      document.getElementById("result").innerHTML = miles * 1.609;

  }
    else if ( x2b == 1 && x4b == 0) {
      let km = e.target.value;
      document.getElementById("result").innerHTML = km / 1.609;
      
  }
    else if ( x2b == x4b ){
      document.getElementById("result").innerHTML = "Units are SAME and not convertable";
  }
}




else if (y1 == "temp" && y3 == "temp"){
    if ( x2b == 0 && x4b == 1) {
      let f = e.target.value;
      document.getElementById("result").innerHTML = (f - 32) * 5/9;

  }
    else if ( x2b == 1 && x4b == 0) {
      let c = e.target.value;
      document.getElementById("result").innerHTML = (c * 9/5) + 32 ;
      
  }
    else if ( x2b == x4b ){
      document.getElementById("result").innerHTML = "Units are SAME and not convertable";
  }
}


else if ( y1 !== y3 ) {
      document.getElementById("result").innerHTML = "Catergories are difference and NOT convertable";
}


}
)
