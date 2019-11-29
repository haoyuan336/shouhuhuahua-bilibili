import global from "./global";

cc.Class({
    extends: cc.Component,

    properties: {
        tipLayer: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.tipLayer.runAction(
            cc.sequence(
                cc.delayTime(1),
                cc.fadeOut(0.5),
                cc.delayTime(1),
                cc.callFunc(() => {
                    global.controller.showHelthGameEnd();
                })))
    },

    // update (dt) {},
});
