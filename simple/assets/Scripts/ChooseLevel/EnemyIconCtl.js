cc.Class({
    extends: cc.Component,

    properties: {
        content: cc.Node,
        enemyIconMark: cc.Prefab
    },
    onLoad() {
    },
    start() {
        let children = this.content.children;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            for (let j = 0; j < 5; j++) {
                let markNode = cc.instantiate(this.enemyIconMark);
                markNode.parent = child;
                markNode.scale = 0.8;
                let preAngle = 2 * Math.PI / 8;

                let dir = cc.v2(0, 1).rotate(preAngle * (5 - 1) * 0.5 + preAngle * - j).normalize();
                let endPos = dir.mul(55);
                markNode.anchorY = 0;
                markNode.angle = - dir.signAngle(cc.v2(0, 1)) * 180 / Math.PI;
                markNode.x += endPos.x - 110;
                markNode.y += endPos.y;
               
            }
        }
    },
    update(dt) {
        let children = this.content.children;

        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            let childPosX = child.convertToWorldSpaceAR(cc.v2(0, 0));
            // console.log("child pos x", childPosX);
            let scale = (400 -  Math.abs(cc.view.getVisibleSize().width * 0.5 - childPosX.x +150)) / 400;
            if (scale < 0){
                scale = 0 ;
            }
            if (scale > 0.8){
                scale = 0.8;
            }
            for (let j = 0; j < child.children.length; j++) {
                let node = child.children[j];
                if (node.name === 'IconMark') {
                    // node.scale = 0.5;
                    node.scaleY = scale;
                }
            }
        }
    }
});
