import Service from '@ember/service';

export default Service.extend({
    current: null,
    init() {
      this._super(...arguments);
      this.set('current', null);
    },
   
    updateViewPortActivity(status, areaName) {
      if(status === true) {
         this.set('current', areaName);
       } 
     }
});
