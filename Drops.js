class Drops{
         constructor(x,y,r) {
      
            var options ={
                restitution:0.4
            }
            
            this.r=r;
            this.counter = 0;
            this.body = bodies.circle(x, y, this.r,options);       
            world.add(World, this.body);    
        }
        display() {
      
            var pos = this.body.position;
            var angle = this.body.angle;
      
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            noStroke();
            fill("Blue");
            ellipseMode(RADIUS);
            ellipse(0, 0, this.r,this.r);
            pop();
        }
      };