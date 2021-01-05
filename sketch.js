
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ball;
var ground,groundSprite;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();   // need clarification
	world = engine.world;		// need clarification

	//Create the Bodies Here.
	//box1 = new Dusbin(720,620,20,100);
	//box2 = new Paper(100,20,100)
	//box2 = new Dusbin(635,660,150,20);
	//box3 = new Dusbin(550,620,20,100);
	dustbin=new Dustbin(600,600,20,100)
	//dustbin1 = new Dustbin(400,600,20,100)
	ball = new Paper(200,450,40);
	//groundSprite = new Ground(400,420,800,20)
	ground = new Ground(400,680,800,20);
	
	
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background("lightGrey");

  //groundSprite.x = ground.position.x
  //groundSprite.y = ground.position.y
 // box1.display();
  //box2.display();
  //box3.display();
  dustbin.display()
  ball.display();
//  dustbin1.display();
  ground.display();

//	if (ball.position == dustbin.bottom.position){

//	}
/*	
if(ball.collide(dustbin.bottom)){
	ball.visible = false
}
*/

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-60});
	  //  Matter.Body.setStatic(ball,false);
	}
 }
