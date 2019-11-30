class Controller {
    constructor(){
        this._mainNode = undefined;
    }
    setMianNode(target){
        this._mainNode = target;
        this._mainNode.emit("show-health-game-layer");
    }
    
    healthGameShowEnd(){
        this._mainNode.emit("show-choose-level-layer");
    }
}
export default Controller;