class invis{
    constructor(x, y, w, h){
        var options = {
            isStatic:true,
            friction:3,
            density:4.2
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pox.x, pos.y, this.width, this.height);
}
}