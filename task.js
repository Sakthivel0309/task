// 1)positive or negative
function positive(){
    var d=Number(document.querySelector(".pos").value)
    var positive=""
    if(d>0){
        positive="positive number"
    }
    else{
        positive="negative number"
    }
    document.querySelector(".task1").innerHTML=positive
    }
    
    // 2)greatest number
    function greatest(){
        var d=Number(document.querySelector(".greatNum1").value)
        var e=Number(document.querySelector(".greatNum2").value)
        var greatNum=""
        if(d>e){
            greatNum=d+" is the Greatest  Number"
        }
        else{
            greatNum=e+" is the Greatest Number"
        }
        document.querySelector(".task2").innerHTML=`<b>${greatNum}</b>`
    
    }
    // 3)smallest Number
    document.querySelector(".smallNum").addEventListener("click",()=>{
        var a=Number(document.querySelector(".small1").value)
        var b=Number(document.querySelector(".small2").value)
        var c=Number(document.querySelector(".small3").value)
        document.querySelector(".task3").innerHTML=`${Math.min(a,b,c)} is the smallest Number`
    })
    // 4)odd or even
    document.querySelector(".even").addEventListener("click",()=>{
        var f=Number(document.querySelector(".oddEven").value)
        var d=""
        // ternary op
       f%2==0 ? d="Even Number":d="Odd Number"
       document.querySelector(".task4").innerHTML=d
    })
    // 5)(1 to 5) full form
    document.querySelector(".form1").addEventListener("click",()=>{
        var f=Number(document.querySelector(".fullForm").value)
        var d=["one","two","three","four","five"]
        document.querySelector(".task5").innerHTML=d[f-1]
    })
    
    
    // task----2----------------------------------------------------------
    //1) Enter the bill amount
    document.querySelector(".bill2").addEventListener("click",()=>{
        var d=Number(document.querySelector(".bill").value)
        var w=""
        if(d>2000){
           w=d-(d*(10/100))
        }
        else{
            w=d
        }
        document.querySelector(".bill3").innerHTML=`The Bill amount is ${w} `
    })
    // 2) Apply a hike of 30%
    document.querySelector(".hike").addEventListener("click",()=>{
        var a=Number(document.querySelector(".salary").value)
        var b=document.querySelector(".Experience").value
        var c=""
        if(a<30000 && b>3){
           c=a+(a*(30/100))
        }
        else{
            c="Not eligible for getting Hike"
        }
        document.querySelector(".hikeCheck").innerHTML=`The Salary is ${c}`
    })
    // 3-apply 3 percent service charges
    document.querySelector(".click").addEventListener("click",()=>{
        var a=Number(document.querySelector(".Amount").value)
        var b=document.querySelector(".Payment").value
        var c=a
        if(b=="card"){
          c+=a*(8/100)
        }
        else{
            c+=a*(5/100)
        }
        document.querySelector(".gst").innerHTML=`Final Bill Amount is ${c}`
    })
    // 4-Medical leave
    document.querySelector(".Check1").addEventListener("click",()=>{
        var a=Number(document.querySelector(".days").value)
        var b=Number(document.querySelector(".dayAttended").value)
        var b1=Number(document.querySelector(".medicalLeave").value)
        var c=''
        var averageDays=a*0.75
        if(b>averageDays || b1=="Yes"){
            c="You are Eligible for the Leave"
        }
        else{
            c="Not eligible for Leave"
        }
        document.querySelector(".Medical").innerHTML=c
        // another method --(100*attendeddays)/totaldays;
    })
    // Grade system
    document.querySelector(".gradeSystem").addEventListener("click",()=>{
        var a=Number(document.querySelector(".grade").value)
        var b=""
        if(a>=90 && a<=100){
         b="A Grade"
        }
        else if(a>=80 && a<90){
         b="B Grade"
        }
        else if(a>=70 && a<80){
            b="C Grade"
           }
        else if(a>=60 && a<70){
            b="D Grade"
           }
           else if(a>=50 && a<60){
            b="E Grade"
           }
        else{
            b="Fail Aitahh"
        }
        document.querySelector(".system").innerHTML=b
    
    })
    // task ---3----------------------------------------------------------------
    function reset(){
        document.querySelector(".El").style.backgroundColor="green"
        document.querySelector(".Er").style.backgroundColor="green"
        document.querySelector(".Sr").style.backgroundColor="green"
        document.querySelector(".Sl").style.backgroundColor="green"
        document.querySelector(".wr").style.backgroundColor="green"
        document.querySelector(".wl").style.backgroundColor="green"
        document.querySelector(".Nr").style.backgroundColor="green"
        document.querySelector(".Nl").style.backgroundColor="green"
        
    }
    document.querySelector(".north").addEventListener("click",()=>{
        reset()
        document.querySelector(".El").style.backgroundColor="red"
        document.querySelector(".Sr").style.backgroundColor="red"
        document.querySelector(".wr").style.backgroundColor="red"
        
    })
    document.querySelector(".east").addEventListener("click",()=>{
        reset()
        document.querySelector(".Sr").style.backgroundColor="red"
        document.querySelector(".wr").style.backgroundColor="red"
        document.querySelector(".Nl").style.backgroundColor="red"
        
    })
    document.querySelector(".south").addEventListener("click",()=>{
        reset()
        document.querySelector(".wr").style.backgroundColor="red"
        document.querySelector(".Nl").style.backgroundColor="red"
        document.querySelector(".El").style.backgroundColor="red"
        
    })
    document.querySelector(".west").addEventListener("click",()=>{
        reset()
        document.querySelector(".Nl").style.backgroundColor="red"
        document.querySelector(".El").style.backgroundColor="red"
        document.querySelector(".Sr").style.backgroundColor="red"
        
    })
    // task 4 js------------------------------------------------------
    document.querySelector(".bookNow").addEventListener("click",()=>{
        var carNumber=document.querySelector(".number").value
        var slot=document.querySelector(".options").value
        if(carNumber==""){
            alert("pls Enter the car Number")
        }
        else if(slot=="Slot-1" && document.querySelector(".square1").style.backgroundColor!="red"){
            document.querySelector(".square1").style.backgroundColor="red"
            document.querySelector(".Number1").innerHTML=carNumber
            alert(carNumber);
            // document.querySelector(".number").value=""
        }
        else if(slot=="Slot-2" && document.querySelector(".square2").style.backgroundColor!="red"){
            document.querySelector(".square2").style.backgroundColor="red"
            document.querySelector(".Number2").innerHTML=carNumber
            document.querySelector(".number").value=""  
        }
        else if(slot=="Slot-3" && document.querySelector(".square3").style.backgroundColor!="red"){
            document.querySelector(".square3").style.backgroundColor="red"
            document.querySelector(".Number3").innerHTML=carNumber
            document.querySelector(".number").value=""  
        }
        else if(slot=="Slot-4" && document.querySelector(".square4").style.backgroundColor!="red"){
            document.querySelector(".square4").style.backgroundColor="red"
            document.querySelector(".Number4").innerHTML=carNumber
            document.querySelector(".number").value=""  
        }
        else if(slot=="Slot-5" && document.querySelector(".square1").style.backgroundColor!="red"){
            document.querySelector(".square5").style.backgroundColor="red"
            document.querySelector(".Number5").innerHTML=carNumber
            document.querySelector(".number").value=""  
        }
    })
    
    document.querySelector(".releaseNow").addEventListener("click",()=>{
        var carNumber=document.querySelector(".number").value
        var slot=document.querySelector(".options").value
        if(carNumber==""){
            alert("pls Enter the car Number")
        }
        else if(slot=="Slot-1"){
            document.querySelector(".square1").style.backgroundColor="green"
            document.querySelector(".Number1").innerHTML=""
            document.querySelector(".number").value="" 
        }
        else if(slot=="Slot-2"){
            document.querySelector(".square2").style.backgroundColor="green"
            document.querySelector(".Number2").innerHTML=""
            document.querySelector(".number").value=""   
        }
        else if(slot=="Slot-3"){
            document.querySelector(".square3").style.backgroundColor="green"
            document.querySelector(".Number3").innerHTML=""
            document.querySelector(".number").value=""   
        }
        else if(slot=="Slot-4"){
            document.querySelector(".square4").style.backgroundColor="green"
            document.querySelector(".Number4").innerHTML="" 
            document.querySelector(".number").value=""  
        } 
        else if(slot=="Slot-5"){ 
            document.querySelector(".square5").style.backgroundColor="green"
            document.querySelector(".Number5").innerHTML=""
            document.querySelector(".number").value=""   
        }   
    })
    // task 5 js-------------------------------------
    // q--->1
    document.querySelector(".swap").addEventListener("click",()=>{
        var num1=document.querySelector(".snumber").value
        var ans=0
        while(num1!==0){
            ans=ans*10+num1%10
            num1=Math.floor(num1/10);        
        }
        document.querySelector(".swaped").innerHTML=ans
    })
    // q--->2
    document.querySelector(".singleDigit").addEventListener("click",()=>{
        var num1=Number(document.querySelector(".anumber").value)
        var num2=Number(document.querySelector(".anumber1").value)
        var num3=Number(document.querySelector(".anumber2").value)
        var d=num1+num2+num3
        var final=d.toString()
        while(final.length!=1){
            let count=0
           for(let ctr of final){
            count+=Number(ctr)
           }
           final=count.toString()
        }
        document.querySelector(".finalAnswer").innerHTML=final
    })
    // q3
    document.querySelector(".CB").addEventListener("click",()=>{
        var message="Your balance is RS.3999"
        document.querySelector(".msg").innerHTML=message
    })
    document.querySelector(".Recharge").addEventListener("click",()=>{
        document.querySelector(".msg").classList.remove("show");
        document.querySelector(".msg").classList.add("hide");
        document.querySelector(".Recharged").classList.remove("hide");
        document.querySelector(".Recharged").classList.remove("show");
    })  
    document.querySelector(".pls").addEventListener("click",()=>{
        var t=document.querySelector(".getRecharge").value
        document.querySelector(".finalMsg").innerHTML=`recharged sucess ${t}`
    })