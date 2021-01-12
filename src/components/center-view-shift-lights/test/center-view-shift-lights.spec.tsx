import { newSpecPage } from '@stencil/core/testing';
import { CenterViewShiftLights } from '../center-view-shift-lights';

describe('center-view-shift-lights', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CenterViewShiftLights],
      html: `<center-view-shift-lights></center-view-shift-lights>`,
    });
    expect(page.root).toEqualHtml(`
      <center-view-shift-lights>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </center-view-shift-lights>
    `);
  });
});
