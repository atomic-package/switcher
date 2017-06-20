/**
 * Switcher ToggleItem View Class
 * @public
 * @param option
 **/
let _created_trigger_item_num: number = 0;

export class TriggerItem {
  private selectCallBackFunction: Function = () => {};
  private resetCallBackFunction: Function = () => {};

  private _SELECT_CLASS_NAME = 'active';

  constructor(
    public id: number,
    public parentId: number,
    public idName: string,
    public className: string,
    public itemNumber: number,
    public isSelected: boolean,
    public node: any
  ) {
    this.id = this.createTriggerItemId();
    this.setEventListener();
  }

  /**
   * Static Function
   **/
  static fromData(data: any): TriggerItem {
    return new TriggerItem(
      data.id ? data.id : 1,
      data.parentId ? data.parentId : 1,
      data.node && data.node.id ? data.node.id : null,
      data.node && data.node.className ? data.node.className : null,
      data.itemNumber ? data.itemNumber : 1,
      data.isSelected ? data.isSelected : false,
      data.node ? data.node : null
    );
  }

  /**
   * Private Function
   **/
  private createTriggerItemId(): number {
    return ++_created_trigger_item_num;
  }

  private setEventListener(): void {
    this.node.addEventListener('click', (e) => {
      e.preventDefault();

      this.select(this.selectCallBackFunction);
    }, false);
  }

  private resetSelected() {

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
  public select(fn?, isFirst?): void {
    this.selectCallBackFunction = fn;

    if(!isFirst) {
      fn(this);
    }
  }

  public reset(fn?, isFirst?): void {
    this.resetCallBackFunction = fn;
  }

  public resetItem() {
    this.removeSelectClass();
  }

  public selectItem() {
    this.addSelectClass();
  }

}

export default TriggerItem;
