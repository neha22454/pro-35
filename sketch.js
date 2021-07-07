var dog,happyDog;
var database;
var foodS,foodStock;

function preload()
{
	dogImg=loadImage("images/dogImg.png")
  dogImg1=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500,500);

  dog=createSprite(800,200,150,150)
  dog.addImage(dogImg)
  dog.scale=0.15

foodStock=database.ref('Food')
foodStock.on("value",readStock)
  
}


function draw() {  
background(46,139,87)
textSize(15)
text("press UP_ARROW key to Feed Drago Milk")
fill("green")
stroke("white")

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg1)
}
  drawSprites();
  

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  if(x<=0){
    x=0;
  } else{
    x=x-1;
  }

  

  database.ref('/').update({

  Food:x

  })

  
}





