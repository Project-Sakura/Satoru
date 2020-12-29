import { newSpecPage } from '@stencil/core/testing';
import { CenterViewInnerContent } from '../center-view-inner-content';

describe('center-view-inner-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CenterViewInnerContent],
      html: `<center-view-inner-content></center-view-inner-content>`,
    });
    expect(page.root).toEqualHtml(`
      <center-view-inner-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </center-view-inner-content>
    `);
  });
});
