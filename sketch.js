let bounceplayerX = false;
let shipShift = -1;
let shipSpeed = 1;
let shipPositionX = 30, shipPositionY = 15;
let playerX = 0, playerY = 0, w = 0, h = 0;
let ymove = 2, playerXmove = 2;
let bulletCollide = false, bulletFire = false;
let bulletX = playerX, bulletY = playerY;
function setup(){
   createCanvas(800,800);
   background(0);
   playerX = (width / 2) - 30;
   playerY = height - 100;
}
function draw(){
   background(0);
   if(shipPositionX <= 30){
      bounceShipX = false;
      shipShift += 1;
   }
   if(shipPositionX >= width - 670){
      bounceShipX = true;
      shipShift += 1;
   }
   if(shipShift == 3){
       shipPositionY += 50;
       shipShift = 0;
       shipSpeed += 0.25;
   }
   for(let i = 0; i < 700; i += 100){
       for(let j = 0; j < 300; j += 60){
      rect(shipPositionX + i, shipPositionY + j, 50, 50);
       }
   }
      if(bounceShipX == false){
          shipPositionX += 1 * shipSpeed;
      }
      else if(bounceShipX == true){
          shipPositionX -= 1 * shipSpeed;
      }
      if(keyIsDown(83)){
       playerY += ymove;
    }
    if(keyIsDown(87)){
       playerY -= ymove;
    }
    if(keyIsDown(68)){
       playerX += playerXmove;
    }
    if(keyIsDown(65)){
       playerX -= playerXmove;
    }
       rect(playerX, playerY, 30, 30);
       if(bulletFire == false){
       rect(playerX + 10, playerY - 10, 10, 10); 
       bulletX = playerX + 10;
       bulletY = playerY - 10;     
       }
       if(bulletFire == true){
           bulletY -= 10;
       rect(bulletX, bulletY, 10, 10);  
       }
       if(bulletY < 0){
           bulletFire = false;
       }

   }

   function keyPressed(){
    if(keyCode == 32){ // 32 is the spacebar's keyCode
        bulletFire = true;
    }
return true;
}

/*


let playerX = 300, playerY = 0, w = 0, h = 0;
let bounceplayerY = false, bounceplayerX = false;
let bounceShipY = false; bounceShipX = false;
let ymove = 1, playerXmove = 1;
let shipPositionX = 15, shipPositionY = 15;
let shipMove = 1, shipStart = 1;
let bulletStartX = playerX, bulletStartY = playerY;
let bullet = 0;
function setup(){
    createCanvas(600,600);
    playerX = 270;
    playerY = 500;
}
let ships = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
];
function draw(){

    if(shipPositionY <= 15){
    bounceShipY = false;
}
if(shipPositionY >= width - 50){
    bounceShipY = true;
}
if(keyIsDown(DOWN_ARROW)){
    playerY += ymove;
}

if(keyIsDown(UP_ARROW)){
    playerY -= ymove;
}

if(shipPositionX <= 30){
    bounceShipX = false;
}
if(shipPositionX >= width - 80){
    bounceShipX = true;
}
if(keyIsDown(RIGHT_ARROW)){
    playerX += playerXmove;
}
if(keyIsDown(LEFT_ARROW)){
    playerX -= playerXmove;
}
    background(220);

    if(keyPressed() == true){
        bullet += 600;
        bulletStartX = playerX + 10;
        bulletStartY = playerY;
}
    if(bullet > 0){
        rect(bulletStartX, bulletStartY, 10, 10);
        bulletStartX+= 1;
        bulletStartY+= 1;
        bullet-= 1;
}
    rect(playerX, playerY, 30, 30);
    rect(shipPositionX, shipPositionY, 50, 50);
    if(bounceShipX == false){
        shipPositionX += 1;
    }
    else if(bounceShipX == true){
        shipPositionX -= 1;
    }

}

function keyPressed(){
    if(keyCode == 32){ // 32 is the spacebar's keyCode
        console.log("success");
    }
return true;
}

//function mouseClicked(){
//    playerX = random(15,585);
//    playerY = random(15,585);
//}


*/