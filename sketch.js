var car
var wall
var car2,car1
var speed
var weight
function setup() {
  createCanvas(1200,400);
speed = random(75,125)
weight = random(400,1500)
wall = createSprite(1000,200,60,400)
wall.shapeColor="orange"
car = createSprite(50,100,50,50)
car.shapeColor="blue"

car.velocityX = speed
car1=  createSprite(50,200,50,50)
car1.shapeColor="blue"

car1.velocityX = speed-50
car2= createSprite(50,300,50,50)
car2.shapeColor="blue"

car2.velocityX = speed+50
}

function draw() {
  
  background("black");  
  
  if(wall.isTouching(car2)){
car2.velocityX=0
var deformation = random(150,250)
if(deformation>180){
  car2.shapeColor="red"
}

if(deformation<180 &&  deformation>100){
  car2.shapeColor="red"
}
if(deformation<100){
  car2.shapeColor="red"

}

  }

  if(wall.isTouching(car)){
    car.velocityX=0
    var deformati = random(50,150)
    if(deformati>180){
      car.shapeColor="yellow"
    }
    if(deformati<180 &&  deformati>100){
      car.shapeColor="yellow"
    }
    if(deformati<100){
      car.shapeColor="yellow"
    
    }
    
      }
    
      if(wall.isTouching(car1)){
        car1.velocityX=0
        var deformatio = 70 || 200
        if(deformatio>180){
          car1.shapeColor="green"
        }
        if(deformatio<180 &&  deformatio>100){
          car1.shapeColor="green"
        }
        if(deformatio<100){
          car1.shapeColor="green"
        
        }
        
          }
        
              
  drawSprites();
}