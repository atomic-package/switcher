/*
 * Author: Daisuke Takayama
 */
import Model from '../model/';
import View from '../component/';

/**
 * Switcher Controller Class
 * @public
 * @param option
 **/
export class Switcher {
  private model: Model;

  constructor() {
    View.fetchElements((data) => {
      this.model = Model.fromData(data);
    });
  }

  /**
   * Public Function
   **/
  public create(data: any): void {
    //this.triggerList.push(Trigger.fromData(data));
  }

  public createTarget(data: any): void {
    //this.contentsList.push(Target.fromData(data));
    //this.setTriggerTargetId();
  }

  public select(data: any): void {
    //number, id, class
    //
  }

  public resetSelected(data: any) {

  }

}

export default Switcher;
