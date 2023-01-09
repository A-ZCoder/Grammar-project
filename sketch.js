var rocketv1;
var moonS;
var redb1, redb2, redb3;
var fire;

var rocketv1Img;
var moonSImg;
var redCImg, greenCImg;
var fireImg;

function preload() {
rocketv1Img=loadImage("rocketimg.png")
moonSImg=loadImage("moonsurface.png")
greenCImg=loadImage("green.png")
redCImg=loadImage("red.png")
fireImg=loadImage("fire.png")
}



function setup() {
createCanvas(1200, 590)

moonS=createSprite(width/2, height/2)
moonS.addImage(moonSImg)
moonS.scale= 1

rocketv1=createSprite(width/2,350)
rocketv1.addImage(rocketv1Img)
rocketv1.scale=0.6

redb1=createSprite(570, 350)
redb1.addImage(redCImg)
redb1.scale=0.1
redb2=createSprite(600, 350)
redb2.addImage(redCImg)
redb2.scale=0.1
redb3=createSprite(630,350)
redb3.addImage(redCImg)
redb3.scale=0.1

fire=createSprite(width/2-5, 555)
fire.addImage(fireImg)
fire.mirrorY(-1)
fire.scale=0.9
fire.visible=false
}

function draw() {
background(0)

if(mousePressedOver(redb1)) {
   redb1.addImage(greenCImg)
}
if(mousePressedOver(redb2)) {
    redb2.addImage(greenCImg)
 }
 if(mousePressedOver(redb3)) {
    redb3.addImage(greenCImg)
    rocketv1.velocityY=-5
    redb1.velocityY=-5
    redb2.velocityY=-5
    redb3.velocityY=-5
    fire.visible=true
    fire.velocityY=-5
 }

drawSprites()

textSize(30)
fill("red")
text("Answer 3 questions for takeoff",430,120)

}
