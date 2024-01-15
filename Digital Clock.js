function clock(){
    let hours=document.getElementById('hours');
    let minutes=document.getElementById('minutes');
    let seconds=document.getElementById('seconds');
    let peroid=document.getElementById('period');
// variables for systems
let h=new Date().getHours();
let m=new Date().getMinutes();
let s=new Date().getSeconds();
//for am pm we use if else condition in short form
let am_pm= h >= 12 ? "PM" : "AM";//if else condition

//now condition for 12 hours format
if(h>12){
    h=h-12;
}
//now conditions for adding 0 in first
h= (h<10) ? "0" + h : h;
m= (m<10) ? "0" + m : m;
s= (s<10) ? "0" + s : s;

hours.innerHTML=h;
minutes.innerHTML=m;
seconds.innerHTML=s;
peroid.innerHTML=am_pm;

};
setInterval(clock,1000);//setinterval is used to refresh page automatically