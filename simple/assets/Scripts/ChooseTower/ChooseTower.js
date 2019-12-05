cc.Class({
    extends: cc.Component,

    properties: {
       label: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on("init-data", (num)=>{
            this.label.string = this.label.string + (num + 1);
        });
    },

    start () {

    },

    // update (dt) {},
});
