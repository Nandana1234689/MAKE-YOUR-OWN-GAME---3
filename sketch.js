var gamestate = "play" 
var gamestate = "end" 
var gamestate = "restart" 
var score =0
function preload() {
  bgImg = loadImage("images/bg.jpg");
 crocodileImg = loadImage("images/crocodile.png");
 duckImg = loadImage("images/duck.png")
 duck2Img = loadImage("images/duck2.png")
  babyImg = loadImage("images/baby.png")
  foodImg = loadImage("images/food.png")
  winImg=  loadImage("images/win.png")
  gi = loadImage("images/gameOver.png")
ni = loadImage("images/notice.png")

}
function setup() {

  createCanvas(1366,657)


bg = createSprite(650,328,1366,657)
bg.addImage(bgImg)
bg.scale = 1.3

duck =createSprite(1050,500,20,50);
duck.addImage(duckImg)
duck.scale = 0.3
duck.visible=false
 
baby =createSprite(900,50,20,50);
baby.addImage(babyImg)
baby.scale = 0.2

gameover=createSprite(300,100,20,50)
gameover.addImage(gi)
gameover.scale=0.5
gameover.visible=false

notice = createSprite(650,300,20,50)
notice . addImage(ni)
notice.scale=0.5

 ground = createSprite(0,320,250,10)
 ground.visible = false
 ground2 = createSprite(240,280,150,10)
 ground2.visible = false
 ground3 = createSprite(530,70,600,10)
 ground3.visible = false
 ground4 = createSprite(1290,400,300,10)
 ground4.visible = false
 ground5 = createSprite(1170,380,300,10)
 ground5.visible = false
 ground6 = createSprite(1250,100,300,10)
 ground6.visible = false
 ground7 = createSprite(210,140,10,300)
 ground7.visible = false
 ground8 = createSprite(280,250,10,80)
 ground8.visible = false





cg = createGroup ()  
fg = createGroup ()
}

function draw() {
  background(0);
  createEdgeSprites();
  if (keyCode == 115){
    notice.visible=false
    gamestate = "play"
  }
if(gamestate == "play"){

  duck .visible=true


  if(keyDown(LEFT_ARROW)){
    duck.velocityX=-2;
    duck.velocityY=0;
    duck.addImage(duckImg)
    duck.scale = 0.3
}
else if(keyDown(RIGHT_ARROW)){    
  duck.velocityX=2;
  duck.velocityY=0;
  duck.addImage(duck2Img)
  duck.scale = 0.3
} 
else if(keyDown(UP_ARROW)){   
  duck.velocityX = 0;
  duck.velocityY = -2;

}
else if(keyDown(DOWN_ARROW)){
  duck.velocityX=0;
  duck.velocityY=2;

}

if(duck.isTouching(baby)){
duck.scale=0.2
duck.depth=baby.depth
duck.depth=duck.depth+1
duck.velocityX=0;
                        duck.velocityY=0;
}

if (duck.isTouching(fg)){
     fg.destroyEach(0)
     score+= 10 
   }



if (score == 50){
    win=createSprite(300,100,20,50)
    win.addImage(winImg)
    win.scale=0.5
    gamestate = "restart"  
    duck2 = createSprite(990,70,20,50)
    duck2.addImage(duckImg)
 duck2.scale = 0.2
}

if (cg. isTouching(duck)){
  gameover.visible=true
    gamestate = "restart"   

   }

 crocodile()
 food()





}
   
  if(gamestate == "end" ){
                        duck.velocityX=0;
                        duck.velocityY=0;
                        cg.destroyEach()
                        fg.destroyEach()
      

}
  
if(gamestate == "restart" ){
  duck.velocityX=0;
  duck.velocityY=0;
  duck.visible=false
  cg.destroyEach()
  fg.destroyEach()


}



drawSprites()
fill (0)
textSize (20)
text ("Food Collected : "+score,100,30)
}
function crocodile() {
  if (frameCount % 180 === 0) {
    var a=random(1000,200)
    var b = random(250,500)
    c = createSprite(a,b,40,10);
   c.addImage(crocodileImg)
    c.x = Math.round(random(100,1000))
    c.scale = 0.5
    c.velocityX = 1
    c.lifetime=160
    cg.add(c)


    }
}
function food() {
  if (frameCount % 90 === 0) {
    var a=random(1000,200)
    var b = random(250,600)
    f = createSprite(a,b,40,10);
   f.addImage(foodImg)
    f.x = Math.round(random(100,1000))
    f.scale = 0.3
    f.velocityX = 1
    f.lifetime=250
    fg.add(f)


    }
}


