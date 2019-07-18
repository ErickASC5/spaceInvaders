let playerX = 0, playerY = 0, w = 0, h = 0;
let bounceplayerY = false, bounceplayerX = false;
let ymove = 1, playerXmove = 1;
function setup(){
    createCanvas(600,600);
    playerX = 0;
    playerY = 0;
}

function draw(){

    if(playerY <= 19){
    bounceplayerY = false;
}
if(playerY >= 580){
    bounceplayerY = true;
}
if(keyIsDown(DOWN_ARROW)){
    playerY += ymove;
}

if(keyIsDown(UP_ARROW)){
    playerY -= ymove;
}

if(playerX <= 30){
    bounceplayerX = false;
}
if(playerX >= 565){
    bounceplayerX = true;
}
if(keyIsDown(RIGHT_ARROW)){
    playerX += playerXmove;
}
if(keyIsDown(LEFT_ARROW)){
    playerX -= playerXmove;
}
    background(220);
    rect(playerX,y,30,30);
}
/*
function mouseClicked(){
    playerX = random(15,585);
    playerY = random(15,585);
}
*/