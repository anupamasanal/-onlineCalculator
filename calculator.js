// function display(a) {

//   document.getElementById('res').value += a;
// }
// function clearr() {
//   document.getElementById('res').value = "";
//   document.getElementById('btn').disabled=false;
// }
// function operclickk(a) {
//   num1 = document.getElementById('res').value;
//   document.getElementById('res').value = " ";
//   op = a;
//   document.getElementById('btn').disabled=false;
// }
// shf=0;
// function ress() {
//   var num2 = document.getElementById('res').value;
  
//   if (op == '+') {
//     var result = eval(num1) + eval(num2);
//   }
//   else if (op == '-') {
//     var result = eval(num1) - eval(num2);
//   }
//   else if (op == 'x') {
//     var result = eval(num1) * eval(num2);
//   }
//   else if (op == '/') {
//     var result = eval(num1) / eval(num2);
//   }
//   else {
//     return 0;
//   }
//   document.getElementById('res').value = result;
//   // document.getElementById('btn').disabled=true;
//   if(shf == 0){  
//     document.getElementById('btn').disabled=true;

// }
// else{
//   // document.getElementById('btn').disabled=false;
//     shf =0;
// }

// }
function display(a)
{
    document.getElementById("res").value=document.getElementById("res").value+a;

}
function operclickk(a)
{

    num1=document.getElementById("res").value;
   
    document.getElementById("res").value=""
     op=a;
}
function clearr()
{
    document.getElementById("res").value=""
}
function ress(){
    num2=document.getElementById("res").value;
 if(num1==" "){
    var result=document.getElementById("res").value
 }
 else{
    if(op=='+'){
        var result=eval(num1)+eval(num2)
    

    // result=""
}
else if(op=='-')
{
        var result=eval(num1)-eval(num2)
    
}
else if(op=='/')
{
    var result=eval(num1)/(num2)
    
}
else 
{
    var result=eval(num1)*(num2)
    
}
 }
    document.getElementById("res").value=result;
    num1=" "
   
}