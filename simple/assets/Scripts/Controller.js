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
    enterChooseTowerLevel(levelNum){
        // this._mainNode.emit("enter-choose-tower-layer", levelNum);
        this._mainNode.emit("show-layer", 'choose-tower', levelNum);
    }
}
export default Controller;