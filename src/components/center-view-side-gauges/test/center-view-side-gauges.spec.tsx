import { newSpecPage } from '@stencil/core/testing';
import { CenterViewSideGauges } from '../center-view-side-gauges';

describe('center-view-side-gauges', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CenterViewSideGauges],
      html: `<center-view-side-gauges></center-view-side-gauges>`,
    });
    expect(page.root).toEqualHtml(`
      <center-view-side-gauges>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </center-view-side-gauges>
    `);
  });
});
