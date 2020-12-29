import { newSpecPage } from '@stencil/core/testing';
import { RightViewPagePowertraingraph } from '../right-view-page-powertraingraph';

describe('right-view-page-powertraingraph', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RightViewPagePowertraingraph],
      html: `<right-view-page-powertraingraph></right-view-page-powertraingraph>`,
    });
    expect(page.root).toEqualHtml(`
      <right-view-page-powertraingraph>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </right-view-page-powertraingraph>
    `);
  });
});
