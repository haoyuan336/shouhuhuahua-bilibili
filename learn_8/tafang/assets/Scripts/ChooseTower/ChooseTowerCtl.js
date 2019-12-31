import global from "../global";

cc.Class({
    extends: cc.Component,

    properties: {
        levelLabelNum: cc.Node
    },
    onLoad () {
        let chooseLevelNum = global.controler.getCurrentChooseLevelNum();
        this.levelLabelNum.getComponent(cc.Label).string = '选择塔在第' + (chooseLevelNum  + 1)+ '关';
    },

    start () {

    },

    // update (dt) {},
});
