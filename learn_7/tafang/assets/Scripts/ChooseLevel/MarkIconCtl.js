cc.Class({
    extends: cc.Component,

    properties: {
        content: cc.Node,
        markIconPrefab: cc.Prefab
    },
    onLoad() {

    },
    start() {
        let children = this.content.children;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            for (let j = 0; j < 5; j++) {
                let node = cc.instantiate(this.markIconPrefab);
                node.parent = child;
                node.x = 0;
                node.y = 0;
                node.scale = 0.8;
                let preAngle = Math.PI * 2 / 8;
                let dir = cc.v2(0, 1).rotate(preAngle * (5 - 1) * 0.5 - preAngle * j).normalize();
                let endPos = dir.mul(55);
                node.angle = - dir.signAngle(cc.v2(0, 1)) * 180 / Math.PI;
                node.x = endPos.x - 110;
                node.y = endPos.y;
            }
        }
    },

    update(dt) {
        let children = this.content.children;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            let childPos = child.convertToWorldSpaceAR(cc.v2(0, 0));
            let dis = 500 - Math.abs((cc.view.getVisibleSize().width * 0.5 - childPos.x + 100));
            let rate = dis / 500;
            if (rate < 0){
                rate = 0;
            }
            if (rate > 0.8){
                rate = 0.8;
            }
            for (let j = 0; j < child.children.length; j++) {
                let node = child.children[j];
                if (node.name === 'MarkIcon') {
                    node.scaleY = rate;
                }

            }
        }
    },
});
