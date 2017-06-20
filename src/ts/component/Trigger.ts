const APView = require('@atomic-package/common').View;

import TriggerItem from './TriggerItem';

/**
 * Switcher Trigger View Class
 * @public
 * @param option
 **/
let _created_trigger_num: number = 0;

export class Trigger {
  constructor(
    public id: number,
    public className: string,
    public idName: string,
    public items: TriggerItem[],
    public selectedNumber: number,
    public target: any,
    public node: any
  ) {
    this.id = this.createTriggerId();
    this.items = this.getItemNode(this.node);
  }

  /**
   * Static Function
   **/
  static fromData(data: any): Trigger {
    return new Trigger(
      0,
      data.className ? data.className : null,
      data.id ? data.id : null,
      data.items ? data.items : [],
      data.selectedNumber ? data.selectedNumber : 1,
      data.dataset.apSwitcher ? data.dataset.apSwitcher : null,
      data ? data : null
    );
  }

  /**
   * Private Function
   **/
  private createTriggerId(): number {
    return ++_created_trigger_num;
  }

  private getChildren(node) {
    let lastChildren = [];

    for(let i: number = 0; i < node.children.length; i++) {
      lastChildren.push(
        TriggerItem.fromData({
          parentId: this.id,
          itemNumber: i + 1,
          node: APView.getFirstChildLastNode(node.children[i])
        })
      );
    }
    return lastChildren;
  }

  /**
   * Public Function
   **/
  public getItemNode(node) {
    return this.getChildren(node);
  }

  public resetSelectedClassName() {

  }
}

export default Trigger;
