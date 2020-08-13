    class Paper {
    constructor(x, y, diameter) {
    var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.body = Matter.Bodies.circle(x, y, diameter, options);
        this.width = diameter
        
        World.add(world, this.body);
        }
        display(){
        var pos =this.body.position;
        strokeWeight(4)
        stroke("purple")
        fill(255);
        ellipse(pos.x,pos.y,this.diameter)
        }
    }