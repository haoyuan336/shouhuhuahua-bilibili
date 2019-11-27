cc.Class({
    extends: cc.Component,

    properties: {
       healthGameLayerPrefab: cc.Prefab
    },
    onLoad () {

    },
    start () {
        let healthGameLayer = cc.instantiate(this.healthGameLayerPrefab);
        healthGameLayer.parent = this.node;
    },

    update (dt) {},
});
