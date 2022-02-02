
var Ghost1
var G


function preload() {
 Ghost1 = loadAnimation("ghost1.png","ghost2.png","ghost3.png")
}

function setup(){
 createCanvas(800,800)
 G = createSprite(400,400,20,20)
 G.addAnimation("Ghost1",Ghost1)
 G.velocityX = -2
}

function draw(){
background("black")
drawSprites()
}