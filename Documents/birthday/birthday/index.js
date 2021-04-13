let daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let namesOfMale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
let namesOfFemale =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",]
var getUserInput = function(){
    let inputYear = document.getElementById("birthYear").value
    let intYear = parseInt(inputYear)
    let inputMonth = document.getElementById("birthMonth").value
    let intMonth = parseInt(inputMonth)
    let inputDay = document.getElementById("birthDay").value
    let intDay = parseInt(inputDay)
    let input = document.getElementById("gender").value
    if(intDay <= 0 || intDay> 31){
        alert("Enter correct day")
    }
    if(intMonth <=0 || intMonth>12){
        alert("Enter correct month")
    }
    let day = new Date(intYear+"-"+intMonth+"-"+inputDay).getDay()
    console.log(day)
}