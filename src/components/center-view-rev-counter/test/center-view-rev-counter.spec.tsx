import { newSpecPage } from '@stencil/core/testing';
import { CenterViewRevCounter } from '../center-view-rev-counter';

describe('center-view-rev-counter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CenterViewRevCounter],
      html: `<center-view-rev-counter></center-view-rev-counter>`,
    });
    expect(page.root).toEqualHtml(`
      <center-view-rev-counter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </center-view-rev-counter>
    `);
  });
});
