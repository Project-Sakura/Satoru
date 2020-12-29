import { newSpecPage } from '@stencil/core/testing';
import { CenterViewRevNeedle } from '../center-view-rev-needle';

describe('center-view-rev-needle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CenterViewRevNeedle],
      html: `<center-view-rev-needle></center-view-rev-needle>`,
    });
    expect(page.root).toEqualHtml(`
      <center-view-rev-needle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </center-view-rev-needle>
    `);
  });
});
