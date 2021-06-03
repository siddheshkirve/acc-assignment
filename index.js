
let i=0;

function accelerator(){
    if(i<120){
        document.querySelector('input').value = i+=5;
        var speed = document.querySelector('input').value;
        checkSpeed(speed);
    }
}

function brake(){
    if(i>0){
        document.querySelector('input').value = i-=5;
        var speed = document.querySelector('input').value;
        checkSpeed(speed);
    }
}

function checkSpeed(val) {
switch (true) {
  case (val == 0 && val <= 20): 
  console.log("you are on first gear");
  break;
  case (val >= 20 &&  val <= 40):
  console.log("switch to second gear");
  break;
  case (val >= 40 && val <= 60 ): 
  console.log("switch to third gear");
  break;
  case (val >= 60 && val <= 80 ): 
  console.log("switch to forth gear");
  break;
  case (val >= 80 && val <= 120 ): 
  console.log("switch to fifth gear");
  break;
}
}