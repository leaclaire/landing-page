var leapYearReport = function(){
    var months ={
        January:31,
        February:29,
        March:31,
        April:30,
        May:31,
        June:30,
        July:31,
        August:31,
        September:30,
        October:31,
        November:30,
        December:31
    }
    monthArray = Object.keys(months)
    var i=0;
    for (x in months) {
       console.log("Your income for " + monthArray[i] + " is " + 84420 * months[x]);
       i++;
      }
    }
    var incomeOverTime = function(sellingPrice,time){
        if(time==7){
            console.log("Your weekly income will be " + sellingPrice * 7 *1876);
        }else if(time=="yearly"){
            console.log("Your yearly income will be " + sellingPrice * 366 * 1876);
        }
    }
    
    // incomeOverTime(45,"weekly");
    
    var shedReports = function(){
    var display = document.getElementById("display")
    var sheds ={
        A:510,
        B:308,
        C:486,
        D:572
     }
     shedArray = Object.keys(sheds)
     var i=0;
     for (x in sheds) {
        console.log("Your production in " + shedArray[i] + " is " + sheds[x] + " litres per day");
        display.innerHTML = "<p> This will display </p>"
        i++;
       }
    }
   