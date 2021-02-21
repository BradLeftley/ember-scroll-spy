import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | anchor', function(hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function(assert) {
    await render(hbs`{{anchor}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#anchor}}
        template block text
      {{/anchor}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
