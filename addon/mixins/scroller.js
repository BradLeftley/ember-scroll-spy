import Mixin from '@ember/object/mixin';

export default Mixin.create({
  bindScrolling: function() {
    document.addEventListener(
      'scroll',
      () => {
        return this.scrolled();
      },
      true
    );
  },

  unbindScrolling: function() {
    document.removeEventListener(
      'scroll',
      () => {
        return this.scrolled();
      },
      false
    );
  }
});