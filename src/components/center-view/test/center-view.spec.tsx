import { newSpecPage } from '@stencil/core/testing';
import { CenterView } from '../center-view';

describe('center-view', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CenterView],
      html: `<center-view></center-view>`,
    });
    expect(page.root).toEqualHtml(`
      <center-view>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </center-view>
    `);
  });
});
