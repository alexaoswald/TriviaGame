var timeleft = 10;



var timer = setInterval(function(){
  document.getElementById("seconds").innerHTML = timeleft;
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(timer);
    document.getElementById("seconds").innerHTML = "0"
  }
}, 1000);
