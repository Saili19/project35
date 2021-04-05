var balloon,balloonImage1,balloonImage2;
var database,position;


function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10;
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10;
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale = balloon.scale+0.01;
    
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10;
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale = balloon.scale-0.01;
    //write code to move air balloon in down direction
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function updateHeight(x,y){ 
   database.ref('Balloon/Height').set({
     'x': height.x + x,
     'y': height.y + y
   })
}

function readHeight(data){
     height = data.val();
     balloon.x = Height.x;
     balloon.y = Height.y;
}
