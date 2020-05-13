/* eslint-disable no-debugger */
import Component from '@ember/component';
import { inject as service } from "@ember/service";
import scroller from '../mixins/scroller';
import viewport from '../utils/viewport';
import layout from '../templates/components/section-item';

export default Component.extend( scroller, {
    tagName: "section",
    viewportHandler: service('viewport-handler'),
    inViewport: service('inViewport'),
    layout,

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
