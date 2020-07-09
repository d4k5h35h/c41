const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop;
var Raindrops = [];
var umbrella;



function setup() {
    createCanvas(400, 800);

    engine = Engine.create();
    world = engine.world;

   
    umbrella = new Umbrella();

}

function draw() {
    background(51);
    Engine.update(engine);
    if (frameCount % 1 === 0) {
        drop = new Raindrop();
        Raindrops.push(drop);
    }
    for (var i = 0; i < Raindrops.length; i++) {
        if (Raindrops[i] !== null) {
            umbrella.display();
            Raindrops[i].display();
        }
    }

    updatePosition();
    }


function updatePosition() {
    for (var i = 0; i < Raindrops.length; i++) {
        if (Raindrops[i] !== null) {
            if (Raindrops[i].body.position.y > 760) {
                Raindrops[i].body.position.y = 830;
                Raindrops.splice(i ,1);
            }
        }
    }
}