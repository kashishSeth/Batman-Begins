class Umbrella{
    constructor(x, y, r){

    var options = {
        restitution: 1,
        friction: 0,
        isStatic:true
    }

    //create an object under the umbrella

    this.body = bodies.circle(x, y, r, options);
    this.radius = this.r;   
    world.add(World, this.body);
}
display(){
    ellipseMode(CENTER);
    noFill();
    noStroke();
    ellipse(this.body.position.x, this.body.position.y, this.radius);
}
}