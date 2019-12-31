import global from "../global";

cc.Class({
    extends: cc.Component,

    properties: {
       contentNode: cc.Node
    },

    

    onLoad () {
        let children = this.contentNode.children;
        const addTouchClick = (node, index)=>{
            node.addComponent(cc.Button);
            node.on('click',()=>{
                console.log('click', index);
                global.controler.enterChooseTowerLayer(index);
            })
        }
        for (let i = 0 ; i < children.length ; i ++){
            let child = children[i];
            let node = child.getChildByName("level_icon");
            addTouchClick(node,i);
        }
    },

    start () {

    },

    // update (dt) {},
});
