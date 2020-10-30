const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var umbrella,drop;
var thunderboltGroup;
var thunderboltImage;
var walkingManImage;
var thunderbolt1Image,thunderbolt2Image,thunderbolt3Image,thunderbolt4Image;
var walkingImage1,walkingImage2,walkingImage3,walkingImage4,walkingImage5,walkingImage6,walkingImage7,walkingImage8;

function preload(){
   // thunderBoltImages
    thunderbolt1Image=loadImage("images/thunderbolt/thunderbolt1.png");
    thunderbolt2Image=loadImage("images/thunderbolt/thunderbolt2.png");
    thunderbolt3Image=loadImage("images/thunderbolt/thunderbolt3.png");
    thunderbolt4Image=loadImage("images/thunderbolt/thunderbolt4.png");
    //Walking with umbrella images
    walkingImage1=loadImage("images/Walking Frame/walking_1.png");
    walkingImage2=loadImage("images/Walking Frame/walking_2.png");
    walkingImage3=loadImage("images/Walking Frame/walking_3.png");
    walkingImage4=loadImage("images/Walking Frame/walking_4.png");
    walkingImage5=loadImage("images/Walking Frame/walking_5.png");
    walkingImage6=loadImage("images/Walking Frame/walking_6.png");
    walkingImage7=loadImage("images/Walking Frame/walking_7.png");
    walkingImage8=loadImage("images/Walking Frame/walking_8.png");
    
}

function setup(){
   createCanvas(400,800);
   engine = Engine.create();
   world = engine.world;
   thunderboltGroup=createGroup();
    image(walkingImage1,600,10);
    image(walkingImage2,600,10);
    image(walkingImage3,600,10);
    image(walkingImage4,600,10);
    image(walkingImage5,600,10);
    image(walkingImage6,600,10);
    image(walkingImage7,600,10);
    image(thunderbolt1Image,100,50);
    image(thunderbolt2Image,100,50);
    image(thunderbolt3Image,100,50);
    image(thunderbolt4Image,100,50);

    var umbrella = createSprite(100,200,30,40);

}


function draw(){
  background("black");
    //umbrella.display();
    //drop.display();
    drawSprites();
}   

function spawnThunderbolts() {
    if(World.frameCount % 10 === 0) {
        var thunderbolt = createSprite(400,365,10,40);
          
          //generate random thunderbolts
        var rand = randomNumber(1,4);
        thunderbolt.addImage("thunderbolt" + rand);
          
          //assign lifetime to the thunderbolts           
        thunderbolt.lifetime = 70;
        thunderboltGroup.add(thunderbolt);
        }
      }
