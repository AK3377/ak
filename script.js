function bmicard(){
    var b=document.getElementById("bmi");
    if(b.style.display==="block"){
        b.style.display="none"
    
    }else{
        b.style.display="block"
    }
    }
    function calculate(){
     var h=document.getElementById("cm").value;
     var w=document.getElementById("kg").value ;
     h=h/100 
     
     var result=w/(h*h)
     console.log(+result)
     result=result.toFixed(2)
    
     document.getElementById("screen1").value=result;
    
    
    
     if(result>=40){
        
        console.log("Extreme Obesity ")
        document.getElementById("screen2").value="Extreme Obesity"
    
      } else if(result>=30){
            console.log("Obese")
           
            document.getElementById("screen2").value="Obese"
      } 
    else if(result>=25){
    console.log( "Overweight ");
    document.getElementById("screen2").value="Overweight "
    }
    else if(result<=16){
        console.log( "Severely Underweight");
        document.getElementById("screen2").value="Severely Underweight"
    }
      else if(result<=18.5){
        console.log(" Underweight");
        document.getElementById("screen2").value="Underweight"
      }else{
        console.log("Normal");
        document.getElementById("screen2").value="Normal"
    }
    
     
    }
    
    
    
    function clearbuton(){
        document.getElementById("screen1").value=""
        document.getElementById("screen2").value=""
        document.getElementById("cm").value=""
        document.getElementById("kg").value=""
      
        
    }
     
    
    
    
    
    
    function bmiclose(){
        var c=document.getElementById("bmi");
        c.style.display="none"
    
    }