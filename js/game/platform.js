import GameObject from "../engine/gameobject.js"
import Renderer from "../engine/renderer.js"
import Physics from "../engine/physics.js"
import HorizontalTileRenderer from "../engine/horizontalTileRenderer.js"
class Platform extends GameObject
{
    constructor(x,y, w, h, colour, img)
    {
        super(x,y);
        this.renderer = new HorizontalTileRenderer(colour, w, h, img);
        this.addComponent(this.renderer);
        this.addComponent(new Physics({x:0, y:0},{x:0, y:0},{x:0, y:0}));
        this.tag = "platform";
    }
}

export default Platform

