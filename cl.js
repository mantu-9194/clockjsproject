function clock(){
    var hours = document.getElementById("hour");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("ampm");

    var time = new Date();
    var  hrs=time.getHours();
    var  mins=time.getMinutes();
    var  secs=time.getSeconds();
    var  am_pm="AM";





    if(hrs==0)
    {
        hrs=12;
    }
    if(hrs>12){
        hrs=hrs-12;
        am_pm="PM"
    }
    if(hrs<10){
        hrs="0"+hrs;
    }
    
    
    if(mins<10){
        mins="0"+mins


    }

    if(secs<10){
        secs="0"+secs;
    }

     
     hours.innerText=hrs;
     minutes.innerText=mins;
     seconds.innerText=secs;
     am.innerText=am_pm;
     
     



}
setInterval(clock,1000)


function setTime(){

    var x=document.getElementById("morning").value;
    var y = document.getElementById("afternoon").value;
    var z = document.getElementById("evening").value;
    var w = document.getElementById("night").value;

    var hour = new Date().getHours();

    if(y==hour){

        document.getElementById('box9').style.backgroundImage="url(wake_up.PNG)"
        document.getElementById('box8').innerText='Good Morning';
        document.getElementById("box3").innerText="Have Breakfast";
    }

    if(w==hour){
        document.getElementById("box9").style.backgroundImage="url(lunch.png)"
    
        document.getElementById("box8").innerText="Good Afternoon";
        document.getElementById("box3").innerText="Have Lunch !!";
    }

    if(z==hour){
        document.getElementById("box9").style.backgroundImage="url(lunch_image.png)"
        document.getElementById("box8").innerText="Good evening";
        document.getElementById("box3").innerText="Have tea !!";
    }  
    
    if(x==hour){
        document.getElementById("box9").style.backgroundImage="url(night22.png)"
        document.getElementById("box8").innerText="Good Night";
        document.getElementById("box3").innerText="Lets Sleep !!";
    }  
    
   
}



