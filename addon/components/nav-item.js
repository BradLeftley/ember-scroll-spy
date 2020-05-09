import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
    viewportHandler: service('viewport-handler'),
    tagName: 'a',
    attributeBindings: ['href'],
    classNameBindings: ['active'],
    
    init(){
        this._super(...arguments);
        const linkId = this.linkId;
        this.set(`viewportHandler.${linkId}`, false);
        this.set('viewportHandler.current', null);

        //Check if in viewport then set 
        this.set('active', this.viewportHandler.current === linkId);

        this.addObserver(`viewportHandler.current`,function() {
            this.set('active', this.viewportHandler.current === linkId);
        });
      },
      willDestroy() {
        this._super();
        this.removeObserver(`viewportHandler.${this.linkId}`);
      }
});
