import { newSpecPage } from '@stencil/core/testing';
import { CenterViewGearboxState } from '../center-view-gearbox-state';

describe('center-view-gearbox-state', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CenterViewGearboxState],
      html: `<center-view-gearbox-state></center-view-gearbox-state>`,
    });
    expect(page.root).toEqualHtml(`
      <center-view-gearbox-state>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </center-view-gearbox-state>
    `);
  });
});
