import GameObject from "../engine/gameObject.js"
import Renderer from "../engine/renderer.js"

class Enemy extends GameObject
{
    constructor(x, y, w, h, color, img)
    {
        super(x,y);
        this.addComponent(new Renderer(color, w, h, img));
    }
}

export default Enemy
