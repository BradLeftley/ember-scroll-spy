/* eslint-disable no-debugger */
import EmberObject from '@ember/object';

export default EmberObject.extend({
  find(target) {
    if (target) {
      const targetElement = document.getElementById(target);
      const bounding = targetElement && targetElement.getBoundingClientRect();
      const targetElementHeight =
        targetElement && targetElement.offsetHeight / 2;
      const targetElementWidth = targetElement && targetElement.offsetWidth;
      const windowInnerWidth = window.innerWidth;
      const documentClientWidth = document.documentElement.clientWidth;
      const windowInnerHeight = window.innerHeight;
      const windowDocumentClientHeight = document.documentElement.clientHeight;

      const elementViewStatus =
        bounding &&
        bounding.top >= -targetElementHeight &&
        bounding.left >= -targetElementWidth &&
        bounding.right <=
          (windowInnerWidth || documentClientWidth) + targetElementWidth &&
        bounding.bottom <=
          (windowInnerHeight || windowDocumentClientHeight) +
            targetElementHeight;

      return elementViewStatus;
    }
  }
});
