var dog;
var dog_img;
var dog_img2;
var foods = 19;

function preload()
{
  dog_img = loadImage("images/dogimg.png");
  dog_img2= loadImage("images/dogimg1.png");
}

function setup() {
  createCanvas(800, 700);
  
  dog= createSprite(400,550,10,10);
  dog.addImage(dog_img);
  dog.scale = 0.20;
  
}


function draw() {  

  background(46, 139, 87);

  textSize(25);
  fill("White");
  text("Food Remaining :"+foods,320,450);

  drawSprites();
  givings();

}

function givings(){
  if (keyWentDown(UP_ARROW)){
    foods = foods-1;
  }
  if (foods == 7){
    dog.addImage(dog_img2);
  }
}



