import EmberObject from '@ember/object';
import ScrollerMixin from 'ember-scroll-spy/mixins/scroller';
import { module, test } from 'qunit';

module('Unit | Mixin | scroller', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ScrollerObject = EmberObject.extend(ScrollerMixin);
    let subject = ScrollerObject.create();
    assert.ok(subject);
  });
});
