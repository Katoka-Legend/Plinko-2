class Ball {
    constructor(x, y, r) {
        var op = {
            'restitution' : 0.4,
            'fricton' : 1.0,
            'isStatic' : false
        }
        this.radius = r;
        // this.x = x;  
        // this.y = y;
        this.body = Bodies.circle(x ,y , this.radius,op);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
        exist = true
    }
    display() {
        push();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y, this.radius, this.radius);
        pop();
    }
}
