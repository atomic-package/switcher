/**
 * Switcher TargetItem View Class
 * @public
 * @param option
 **/
let _created_contents_item_num: number = 0;

export class TargetItem {
  private _SELECT_CLASS_NAME = 'show';

  constructor(
    public id: number,
    public parentId: number,
    public idName: string,
    public className: string,
    public itemNumber: number,
    public isSelected: boolean,
    public node: any
  ) {
    this.id = this.createContentsItemId();
  }

  /**
   * Static Function
   **/
  static fromData(data: any): TargetItem {
    return new TargetItem(
      0,
      data.parentId ? data.parentId : 1,
      data.node && data.node.id ? data.node.id : null,
      data.node && data.node.className ? data.node.className : null,
      data.itemNumber ? data.itemNumber : 1,
      data.isSelected ? data.isSelected : false,
      data.node ? data.node : null
    );
  }

  private createContentsItemId(): number {
    return ++_created_contents_item_num;
  }

  private removeSelectClass() {
    if(this.node.classList.contains(this._SELECT_CLASS_NAME)) {
      this.node.classList.remove(this._SELECT_CLASS_NAME);
    }
  }

  private addSelectClass() {
    if(!this.node.classList.contains(this._SELECT_CLASS_NAME)) {
      this.node.classList.add(this._SELECT_CLASS_NAME);
    }
  }

  /**
   * Public Function
   **/
  public resetItem() {
    this.removeSelectClass();
  }

  public selectItem() {
    this.addSelectClass();
  }

}

export default TargetItem;
