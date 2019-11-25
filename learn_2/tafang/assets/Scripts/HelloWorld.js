cc.Class({
    extends: cc.Component,

    properties: {
        labelNode: cc.Node
    },
    onLoad () {
        this.labelNode.getComponent(cc.Label).string = "Hello World";
    },
    start () {

    }
});
