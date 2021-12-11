let eidWill = "2 May 2022";








function countDown (){
    
    let eidDay = new Date(eidWill);
    let currentDay = new Date();
     
    let totaltime = (eidDay-currentDay)/1000;
    let days = Math.floor(totaltime/3600 /24);
    let hours = Math.floor((totaltime/3600)% 24 );
    let minutes = Math.floor((totaltime /60)%60);
    let seconds =Math.floor ((totaltime)%60);


    const dayDiv =document.getElementById("day");
     dayDiv.innerHTML=days;
    const hourDiv =document.getElementById("hour");
     hourDiv.innerHTML=hours;
     const minDiv =document.getElementById("minute");
     minDiv.innerHTML=minutes;
     const secDiv =document.getElementById("second");
     secDiv.innerHTML=seconds;





    console.log(days, hours ,minutes ,seconds );
    
}

countDown ();
setInterval(countDown,1000);