import Component from '@ember/component';
/* eslint-disable no-debugger */
import { inject as service } from "@ember/service";
import scroller from '../mixins/scroller';
import viewport from '../utils/viewport';
import layout from '../templates/components/anchor';


export default Component.extend( scroller, {
    tagName: "div",
    viewportHandler: service('viewport-handler'),
    inViewport: service('inViewport'),
    layout,

    didRender: function(){
      this.viewportHandler.updateViewPortActivity(
        this.viewport.find(this.id),
        this.id
      );
    },
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
    }
});
