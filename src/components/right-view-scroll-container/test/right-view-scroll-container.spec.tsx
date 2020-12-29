import { newSpecPage } from '@stencil/core/testing';
import { RightViewScrollContainer } from '../right-view-scroll-container';

describe('right-view-scroll-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RightViewScrollContainer],
      html: `<right-view-scroll-container></right-view-scroll-container>`,
    });
    expect(page.root).toEqualHtml(`
      <right-view-scroll-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </right-view-scroll-container>
    `);
  });
});
