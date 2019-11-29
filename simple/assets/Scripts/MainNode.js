import global from "./global";

cc.Class({
    extends: cc.Component,

    properties: {
        healthGameLayerPrefab: cc.Prefab,
        chooseLevelLayerPrefab: cc.Prefab
    },
    onLoad() {
        this._currentLayer = undefined;
        this.node.on("show-health-game-layer", () => {
            this._currentLayer = cc.instantiate(this.healthGameLayerPrefab);
            this._currentLayer.parent = this.node;
        });
        this.node.on("show-choose-level-layer", () => {
            let node = cc.instantiate(this.chooseLevelLayerPrefab);
            node.parent = this.node;
            node.parent.zIndex = this._currentLayer.zIndex - 1;
            if (this._currentLayer) {
                this._currentLayer.runAction(cc.sequence(cc.fadeOut(0.4), cc.callFunc(() => {
                    this._currentLayer.destroy();
                    this._currentLayer = node;
                })));
            }else{
                this._currentLayer = node;
            }
        });
    },
    start() {
        global.controller.setMainNode(this.node);
    },

    update(dt) { }
});
