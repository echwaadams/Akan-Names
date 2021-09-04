
var dayOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

function validation () {
    var year = document.getElementById('birthYear').value;
    var month = document.getElementById('birthMonth').value;
    var day = document.getElementById('birthDate').value;
    var gender = document.getElementById('gender').value

    if((day <= 0) || (day > 31)) {
        alert('Please enter valid dates!')
    }
    else if ((month <= 0) || (month > 12)) {
        alert('Please enter valid months!')
    }
}


    


