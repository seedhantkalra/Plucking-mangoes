
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var boy, boyImage;

function preload()
{
	boyImage = loadImage ("boy.png") 
}

function setup() {
	createCanvas(800, 700);

boy = createSprite(100,600);
boy.addImage(boyImage);
boy.scale=0.1;
	engine = Engine.create();
	world = engine.world;
	tree=new Tree(width-300,346,600,600);
	ground=new Ground(width/2,height-10,width,40);
	mango1=new Mango(640,130,40);
	mango2=new Mango(630,230,40);
	mango3=new Mango(600,250,40);
	mango4=new Mango(670,140,40);
	mango5=new Mango(680,180,40);
	stone=new Stone(610,500,20,20);
	chain=new Chain(stone.body,{x:50,y:540});
	
	
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  tree.display();
	ground.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	stone.display();
	chain.display();
	
	
  
  drawSprites();
 
}



function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    chain.fly();
   
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false)
	}
}

function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(stone.body,{x:235,y:420});
	  chain.attach(stone.body)
	}
}
