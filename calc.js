let screen=document.querySelector("#ip");
let screenValue="";
for(var i=0;i<document.querySelectorAll(".b").length;i++)
{
   let v=i;
     document.querySelectorAll(".b")[i].addEventListener("click",function(){
        var buttonText=document.querySelectorAll(".b")[v].innerHTML;
        if(buttonText=="C")
        {
           screenValue="";
           screen.value=screenValue;
        }
        else if(buttonText=="="){
           screen.value=eval(screenValue);
           document.getElementById("footer").innerHTML="your answer is " + screen.value + "!";
        }
        else{
           screenValue+=buttonText;
           screen.value=screenValue;
        }
     });



}