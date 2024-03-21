document.getElementById('head').innerHTML="Hello this is MTT computing"
document.getElementById('head').style.color="red";
function nextAlert(){
    alert('This is external js');
}
function showDateTime(){
    document.getElementById('para1').innerHTML=Date();
}

function showMessage(){
    var name = prompt('Enter your name')
    alert( "welcome, "+name+"how can I help you?")

}

function convert(){
 var number = prompt('please enter your number')
   answer= number*3650 
 alert("Today currency is "+ answer+ " MMK")

}

function calculate(){
     var num1 = prompt("First Number")
     var num2 = prompt("Second Number")
    answer= parseInt(num1)+parseInt(num2)
    alert(answer)
    }

    