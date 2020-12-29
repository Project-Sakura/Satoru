import { newSpecPage } from '@stencil/core/testing';
import { LeftViewInfo } from '../left-view-info';

describe('left-view-info', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LeftViewInfo],
      html: `<left-view-info></left-view-info>`,
    });
    expect(page.root).toEqualHtml(`
      <left-view-info>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </left-view-info>
    `);
  });
});
