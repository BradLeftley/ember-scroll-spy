import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | scroll-container', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function(assert) {
    await render(hbs`{{scroll-container}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#scroll-container}}
        template block text
      {{/scroll-container}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
