const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var sling;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var base1;
var polygon;
var polygon_img;
var ground;
function preload()
{
	polygon_img=loadImage("polygon.png")
}


function setup() {
	
	createCanvas(900,400);

	
	engine = Engine.create();
	world = engine.world;
	
	base1=new Ground(450,300,250,10)
	ground=new Ground(450,395,900,10)

	//1st floor
	box1=new Box(352,180,40,40)
	box2=new Box(392,180,40,40)
	box3=new Box(432,180,40,40)
	box4=new Box(472,180,40,40)
	box5=new Box(512,180,40,40)
	//2nd floor
	box6=new Box(352,220,40,40)
	box7=new Box(392,220,40,40)
	box8=new Box(432,220,40,40)
	box9=new Box(512,220,40,40)
	//3rd floor
	box10=new Box(352,260,40,40)
	box11=new Box(392,260,40,40)
	box12=new Box(432,260,40,40)
	//4th floor
	box13=new Box(352,300,40,40)
	box14=new Box(392,300,40,40)
	//top floor
	box15=new Box(352,340,40,40)

	polygon=Bodies.circle(50,200,20)
	World.add(world,polygon);
	sling=new Slingshot(this.polygon,{x:150,y:220})

	Engine.run(engine)

	
}


function draw() {
	background("cyan")
	Engine.update(engine)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  sling.display();
  base1.display();
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40)
  

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}