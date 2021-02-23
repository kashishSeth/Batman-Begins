var engine1;
var World;
const engine = Matter.Engine;
const body = Matter.Body;
const bodies = Matter.Bodies;
const world = Matter.World;

var man_1;
var sprite; 
var drops = [];

function preload(){
   man_1 = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png", "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png");

}

function setup(){
   engine1 = engine.create();
   World = engine1.world;

   createCanvas(400,800);

   sprite = createSprite(200,620,5,5);
   sprite.addAnimation("man", man_1);
   sprite.scale = 0.5
   
   umbrella = new Umbrella(190,495,50); 

   var maxDrops = 100;
   for(var i = 0; i<maxDrops; i++){
       drops.push(new Drops(random(0,400), random(0,400), 5));
       console.log(drops.length);
   }
}

function draw(){
   engine.update(engine1);
   background("Black");

   for(var i = 0; i<100; i++){
      drops[i].display();
   }

   
   //umbrella.display();
    drawSprites();

    fill("White");
    text(mouseX + ", " + mouseY, mouseX,mouseY);

    umbrella.display();
}   

