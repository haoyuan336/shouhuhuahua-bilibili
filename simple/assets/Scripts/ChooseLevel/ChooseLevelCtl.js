import global from "../global";

cc.Class({
    extends: cc.Component,

    properties: {
        contentNode: cc.Node
    },
    start() {
        let children = this.contentNode.children;
        const setOnButtonClick = (target, index) => {
            target.addComponent(cc.Button);
            target.on("click", () => {
                console.log("button index", index);
                global.controler.enterChooseTowerLevel(index);
            })
        }
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            let node = child.getChildByName('level_icon');
            setOnButtonClick(node, i);

        }
    }

});
