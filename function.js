function Age(){
    var inputAge = document.getElementById('age').value;
    var todayDate = new Date();
    var todayYear = todayDate.getFullYear();
    var userYear = todayYear - inputAge;
    document.getElementById('year').value = userYear;
}

function Year(){
    var inputYear = document.getElementById('year').value;
    var todayDate = new Date();
    var todayYear = todayDate.getFullYear();
    var userAge = todayYear - inputYear;
    document.getElementById('age').value = userAge;
}