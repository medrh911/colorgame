f=-1
f1=0
l=0
l1=0
s=1


function ge() {
    t=document.getElementById("h1")
y=10
function time() {
    t.textContent=y
    y--
    
    if (y < 0) {
        clearInterval(timerInterval); // Stop the timer
        t.textContent = "Time's up!";
        for (let i = 0; i < 3; i++) {
            
            
        
            $("body").fadeOut().fadeIn().css("background-color","red");
            wrong.play()
            
    
       
            
        }
        
        $(".dice").fadeOut()
        $("h2").fadeOut()
        document.querySelector("h3").innerHTML="reset Now!!"
    }
    
}

var timerInterval = setInterval(time, 1000);
    
    $("#b1").fadeOut()
    
    f=f+1
    a=0
    
    a1=""
    a=Math.floor(Math.random()*3)+1
    r2=Math.floor(Math.random()*3)+1
    
    var r1=r2+".jpg"
            i1=document.querySelectorAll("input")[0];
            i1.setAttribute("src",r1)
    r3=Math.floor(Math.random()*3)+1
    
            
    while (r3==r2) {
        r3=Math.floor(Math.random()*3)+1
    
        
    }
    
    var r1=r3+".jpg"
            i1=document.querySelectorAll("input")[1];
            i1.setAttribute("src",r1)
            
    r4=Math.floor(Math.random()*3)+1
    
    while ((r4==r2)||(r4==r3)) {
        r4=Math.floor(Math.random()*3)+1
    
    
        
    }
    

    //1==red
    //2==yellow
    //3==blue
    var r1=r4+".jpg"
            i1=document.querySelectorAll("input")[2];
            i1.setAttribute("src",r1)
    if (a==1) {
        a1="red"
        r=Math.floor(Math.random()*3)+1
        
        if(r==1){
            $(document).ready(function () {
            $("h2").css("color","red");
            
            
            
           
            
        })

        
    }
    if(r==2){
        $(document).ready(function () {
        $("h2").css("color","yellow");
        
        
       
        
    })
}
    if(r==3){
        $(document).ready(function () {
        $("h2").css("color","blue");
        
        
       
        
    })
    
}
    





}
if (a==2) {
    a1="yellow"
    r=Math.floor(Math.random()*3)+1
    if(r==1){
        $(document).ready(function () {
        $("h2").css("color","red");
        
        
       
        
    })
    
}
if(r==2){
    $(document).ready(function () {
    $("h2").css("color","yellow");
    
    
   
    
})}
if(r==3){
    $(document).ready(function () {
    $("h2").css("color","blue");
    
    
   
    
})



}




}
if (a==3) {
    a1="blue"
    r=Math.floor(Math.random()*3)+1
    if(r==1){
        $(document).ready(function () {
        $("h2").css("color","red");
        
        
       
        
    })
    
}
if(r==2){
    $(document).ready(function () {
    $("h2").css("color","yellow");
    
    
   
    
})}
if(r==3){
    $(document).ready(function () {
    $("h2").css("color","blue");
    
    
   
    
})

}






}
    document.querySelector("h2").innerHTML=a1
    if (f!=f1) {
        for (let i = 0; i < 3; i++) {
            
            
        
            $("body").fadeOut().fadeIn().css("background-color","red");
            wrong.play()
    
       
            
        }
        $(".dice").fadeOut()
        $("h2").fadeOut()
        document.querySelector("h3").innerHTML="reset Now!!"
        
        
    }
}

function de1() {
        
    f1=f1+1
    
    if(r2==a){
        s=s+1
        document.querySelector("h1").innerHTML="level "+s
    }
    
    
    else{
        
        for (let i = 0; i < 3; i++) {
            
            
        
            $("body").fadeOut().fadeIn().css("background-color","red");
            wrong.play()
    
       
            
        }
        $(".dice").fadeOut()
        $("h2").fadeOut()

        
    }
        
    
}


function de2() {
    f1=f1+1
    if(r3==a){
        s=s+1
        document.querySelector("h1").innerHTML="level "+s
    }
    else{
        
        for (let i = 0; i < 3; i++) {
            
            
        
            $("body").fadeOut().fadeIn().css("background-color","red");
            wrong.play()
    
       
            
        }
        $(".dice").fadeOut()
        $("h2").fadeOut()

        
    }
    
}
function de3() {
    f1=f1+1
    if(r4==a){
        s=s+1
        document.querySelector("h1").innerHTML="level "+s
    }
    else{
        
        for (let i = 0; i < 3; i++) {
            
            
        
            $("body").fadeOut().fadeIn().css("background-color","red");
            wrong.play()
    
       
            
        }
        $(".dice").fadeOut()
        $("h2").fadeOut()

        
    }
        
    
}


