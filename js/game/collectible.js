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
    }
 
}

export default Collectible

