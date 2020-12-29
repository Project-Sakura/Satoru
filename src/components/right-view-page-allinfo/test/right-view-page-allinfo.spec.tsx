import { newSpecPage } from '@stencil/core/testing';
import { RightViewPageAllinfo } from '../right-view-page-allinfo';

describe('right-view-page-allinfo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RightViewPageAllinfo],
      html: `<right-view-page-allinfo></right-view-page-allinfo>`,
    });
    expect(page.root).toEqualHtml(`
      <right-view-page-allinfo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </right-view-page-allinfo>
    `);
  });
});
