const APView = require('@atomic-package/common').View;

import TargetItem from './TargetItem';

/**
 * Switcher Target View Class
 * @public
 * @param option
 **/
let _created_contents_num: number = 0;

export class Target {
  constructor(
    public id: number,
    public idName: string,
    public className: string,
    public items: TargetItem[],
    public selectedNumber: number,
    public node: any
  ) {
    this.id = this.createContentsId();
    this.items = this.getItemNode(this.node);
  }

  /**
   * Static Function
   **/
  static fromData(data: any): Target {
    return new Target(
      0,
      data.node && data.node.id ? data.node.id : null,
      data.node && data.node.className ? data.node.className : null,
      data.items ? data.items : [],
      data.selectedNumber ? data.selectedNumber : 1,
      data.node ? data.node : null
    );
  }

  /**
   * Private Function
   **/
  private createContentsId(): number {
    return ++_created_contents_num;
  }

  private getChildren(node) {
    let lastChildren = [];

    if(node.children) {
      for (let i: number = 0; i < node.children.length; i++) {
        lastChildren.push(
          TargetItem.fromData({
            parentId: this.id,
            itemNumber: i + 1,
            node: APView.getFirstChildLastNode(node.children[i])
          })
        );
      }
    }
    return lastChildren;
  }

  /**
   * Public Function
   **/
  public getItemNode(node) {
    return this.getChildren(node);
  }
}

export default Target;
