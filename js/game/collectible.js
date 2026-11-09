import GameObject from "../engine/gameObject.js"
import Renderer from "../engine/renderer.js"
import Physics from "../engine/physics.js"

class Collectible extends GameObject
{
    constructor(x, y, w, h, color, img)
    {
        super(x,y);
        this.addComponent(new Renderer(color, w, h, img));
        this.addComponent(new Physics({x:0, y:0},{x:0, y:0},{x:0, y:0}));
        this.tag = "collectible";
        this.directionTime = 1;
        this.elapsedTime=0;
        this.direction = -1;
        this.originalWidth = w;
        this.originalX = x;
    }
    
    update(deltaTime)
    {
        let physics = this.getComponent(Physics);
        let renderer = this.getComponent(Renderer);
        this.elapsedTime +=deltaTime;
        renderer.width +=this.direction;
        this.x = this.originalX + ((this.originalWidth-renderer.width)/2)
        if(renderer.width == 0 || renderer.width == this.originalWidth)
        {
            this.direction *=-1;
        }
        
        if(this.elapsedTime > this.directionTime)
        {
            physics.velocity.y *=-1;
            this.elapsedTime = 0;
        }  
        super.update(deltaTime);
    }
 
}

export default Collectible

