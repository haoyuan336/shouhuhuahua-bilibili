class Controller {
    constructor(){
        this._mainNode = undefined;
    }
    setMainNode(target){
        this._mainNode = target;
        this._mainNode.emit("show-health-game-layer");
    }
    showHelthGameEnd(){
        this._mainNode.emit("show-choose-level-layer");
    }
}
export default Controller;