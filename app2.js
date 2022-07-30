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
    console.log(y1);
    console.log(y3);

    var x2 = document.getElementById("select2").selectedIndex;
    var y2 = document.getElementsByTagName("option")[x2].value
    var x4 = document.getElementById("select4").selectedIndex;
    var y4 = document.getElementsByTagName("option")[x4].value
    console.log(y2);
    console.log(y4);
    // if (y1 !== y2){
    //   if (y1 == "Lbs" && y2 == "Kg") {
    //     let lbs = e.target.value;
    //     document.getElementById("result").innerHTML = lbs / 2.2046;
        
    //   }
    //   else if (y1 == "Kg" && y2 == "Lbs") {
    //     let kg = e.target.value;
    //     document.getElementById("result").innerHTML = kg * 2.2046;
        
    //   }
    //   else if (y1 == "Km" && y2 == "Miles") {
    //     let km = e.target.value;
    //     document.getElementById("result").innerHTML = km / 1.609;
        
    //   }
    //   else if (y1 == "F" && y2 == "C") {
    //     let f = e.target.value;
    //     document.getElementById("result").innerHTML = (f - 32) * 5/9;
        
    //   }
    //   else if (y1 == "C" && y2 == "F") {
    //     let c = e.target.value;
    //     document.getElementById("result").innerHTML = (c * 9/5) + 32 ;
        
    //   }
    
    //   else {
    //     document.getElementById("result").innerHTML = "Units are difference and not convertable";
    //   }
    // }
    // else{
    //   document.getElementById("result").innerHTML = "Same Unit: Error";
    // }
  
  
  
  
  
  });
  

