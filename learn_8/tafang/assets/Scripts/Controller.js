class Controller {
    constructor(){
        this._mainNode = undefined;
        this._currentChooseLevel = undefined;
    }
    setMianNode(target){
        this._mainNode = target;
        this._mainNode.emit("show-health-game-layer");
    }
    
    healthGameShowEnd(){
        this._mainNode.emit("show-choose-level-layer");
    }
    enterChooseTowerLayer(index){
        this._currentChooseLevel = index;
        this._mainNode.emit("show-choose-tower-layer");
    }
    getCurrentChooseLevelNum(){
        return this._currentChooseLevel;
    }
}
export default Controller;