class Rod {
    constructor(x, y) {
    var op = {
        'isStatic': true
    }
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(x, y, 15/2, op);
    World.add(world,this.body);
    }
    display() {
        push();
        fill("white");
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y , 15, 15);
        pop();
    }
}