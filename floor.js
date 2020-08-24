class Ground {
    constructor(x, y, w, h){
        this.body = Bodies.rectangle(x, y, w, h);
        this.width = w;
        this.height = h;
    }
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    // fill("lightblue");
    fill("blue");
    rect(pos.x, pos.y, this.width, this.height);
}
}