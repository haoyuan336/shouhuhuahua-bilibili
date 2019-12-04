cc.Class({
    extends: cc.Component,

    properties: {
       contentNode: cc.Node
    },
    start(){
        let children = this.contentNode.children;
        for (let i = 0 ; i < children.length ; i ++){
            let child = children[i];
            let node = child.getChildByName('level_icon');
            node.addComponent(cc.Button);
        }
    }

});
