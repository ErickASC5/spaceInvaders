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
let ships = [
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1]
];
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
        if(ships[i / 100][j / 60] == 1){
      rect(shipPositionX + i, shipPositionY + j, 50, 50);
        }
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
   for(let i = 0; i < 700; i += 100){
       for(let j = 0; j < 300; j += 60){
        if(bulletFire == true && bulletX <= shipPositionX + i + 50 && bulletX >= shipPositionX + i && bulletY <= shipPositionY + j + 50 && bulletY >= shipPositionY + j){
            if(ships[i / 100][j / 60] == 1){
                ships[i/100][j/60] = 0;
                bulletFire = false;
            }
        }
    }
   }

   }

   function keyPressed(){
    if(keyCode == 32){ // 32 is the spacebar's keyCode
        bulletFire = true;
    }
return true;
}