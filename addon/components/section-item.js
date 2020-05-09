/* eslint-disable no-debugger */
import Component from '@ember/component';
import { inject as service } from "@ember/service";
import scroller from '../mixins/scroller';
import viewport from '../utils/viewport';

export default Component.extend( scroller, {
    tagName: "section",
    viewportHandler: service('viewport-handler'),
    inViewport: service('inViewport'),

    didInsertElement: function() {
      if (!this.viewport) {
        this.set('viewport', viewport.create());
      }
      this.bindScrolling();
    },
    willDestroyElement: function() {
      this.unbindScrolling();
    },
    scrolled: function() {
      this.viewportHandler.updateViewPortActivity(
        this.viewport.find(this.id),
        this.id
      );
        // this.viewportHandler.updateViewPortActivity(true, this.id);
    }
});
