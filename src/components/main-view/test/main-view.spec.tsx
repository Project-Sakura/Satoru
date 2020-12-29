import { newSpecPage } from '@stencil/core/testing';
import { MainView } from '../main-view';

describe('main-view', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MainView],
      html: `<main-view></main-view>`,
    });
    expect(page.root).toEqualHtml(`
      <main-view>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </main-view>
    `);
  });
});
