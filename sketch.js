var paper1;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box,box1,box2;
var dustbinImg;

function preload(){

}



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("black")

	
	engine = Engine.create();
	world = engine.world;

	box1=new Box(680,655,150,15)
    box2=new Box(605,610,15,100)
	box3=new Box(750,610,15,100)
	
	paper1=new Paper(150,150,15)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
   
  

 
  box1.display();
  box2.display();
  box3.display();
  paper1.display();
  

  drawSprites();
 }
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:35,y:-35})	
	}



}