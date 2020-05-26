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

function And1(){
    document.getElementById('and1').style.display='block';
    document.getElementById('and2').style.display='none';
}

function And2(){
    document.getElementById('and2').style.display='block';
    document.getElementById('and1').style.display='none';
}

function showIt(){
    document.getElementById('timer1').style.visibility="visible";
}
setTimeout("showIt();", 3000);