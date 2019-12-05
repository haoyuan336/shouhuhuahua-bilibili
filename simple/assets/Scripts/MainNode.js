import global from "./global";
import {LayerNameMap} from './Config'
cc.Class({
    extends: cc.Component,

    properties: {
       healthGameLayerPrefab: cc.Prefab,
       chooseLevelLayerPrefab: cc.Prefab,
       chooseTowerLayerPrefab: cc.Prefab
    },
    onLoad () {
        this._currentLayer = undefined;
        this.node.on("show-health-game-layer", ()=>{
            let node = cc.instantiate(this.healthGameLayerPrefab);
            node.parent = this.node;
            this._currentLayer = node;
        });
        this.node.on("show-choose-level-layer", ()=>{
            let node = cc.instantiate(this.chooseLevelLayerPrefab);
            node.parent = this.node;
            if (this._currentLayer){
                this._currentLayer.runAction(cc.sequence(
                    cc.fadeOut(0.5),
                    cc.callFunc(()=>{
                        this._currentLayer.destroy();
                        this._currentLayer = node;
                    })
                ))
            }else{
                this._currentLayer = node;
            }
        });

        const layerMap = {
            'choose-tower': this.chooseTowerLayerPrefab,
            'choose-level': this.chooseLevelLayerPrefab
        }
        this.node.on("show-layer", (layerName, data)=>{
            let node = cc.instantiate(layerMap[layerName]);
            node.parent = this.node;
            node.emit("init-data", data);
            if (this._currentLayer){
                this._currentLayer.runAction(cc.sequence(
                    cc.fadeOut(0.5),
                    cc.callFunc(()=>{
                        this._currentLayer.destroy();
                        this._currentLayer = node;
                    })
                ))
            }else{
                this._currentLayer = node;
            }
        });

    },
    start () {
        
        global.controler.setMianNode(this.node);
    },

    update (dt) {},
});
