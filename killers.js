class killers{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(random(-1400, 1400), random(-1200, 500), 40, options);
        this.radius = 40;
        World.add(world, this.body)
    }
display(){
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y);
    rotate(this.body.angle)
    ellipseMode(CENTER);
    fill("green");
    ellipse(0, 0, this.radius);
    pop()

}
}