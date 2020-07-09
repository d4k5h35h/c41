class Umbrella{
    constructor(){
        var options = {
            restituiton: 0.5,
            friction: 0,
            density: 1.2,
            isStatic: true
        }

        this.x = 206;
        this.y = 600;

        this.img = loadImage("manumb.png");

        this.body = Bodies.circle(this.x, this.y , 80, options);
        this.radius = 80;
        World.add(world, this.body);
    }
    display(){
        push();
        fill(255);
        ellipseMode(CENTER);
        image(this.img, this.x-125, this.y-95,250,250);
    }
}