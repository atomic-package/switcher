/*
 * Author: Daisuke Takayama
 */
const APView = require('@atomic-package/common').View;

import Trigger from './Trigger';
import Target from './Target';

/**
 * Switcher View Class
 * @public
 * @param option
 **/
export class View {
  /**
   * Static Function
   **/
  static fetchElements(callback) {
    document.addEventListener("DOMContentLoaded", () => {
      let triggerList = APView.createFromTriggerElement(['[data-ap-switcher]'], Trigger);

      callback({
        triggerList: triggerList,
        targetList: APView.createTargetView(triggerList, Target)
      });
    });
  }
}

export default View;

