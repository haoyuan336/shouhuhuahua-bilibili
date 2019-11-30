import global from "./global";

cc.Class({
    extends: cc.Component,

    properties: {
        labelNode: cc.Node
    },
    onLoad () {

    },

    start () {
        this.labelNode.runAction(cc.sequence(
            cc.delayTime(0.5),
            cc.fadeOut(0.4),
            cc.delayTime(1),
            cc.callFunc(()=>{
                global.controler.healthGameShowEnd();
            })
        ))
    },

    update (dt) {}
});
