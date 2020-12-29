import { newSpecPage } from '@stencil/core/testing';
import { CenterViewRevShade } from '../center-view-rev-shade';

describe('center-view-rev-shade', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CenterViewRevShade],
      html: `<center-view-rev-shade></center-view-rev-shade>`,
    });
    expect(page.root).toEqualHtml(`
      <center-view-rev-shade>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </center-view-rev-shade>
    `);
  });
});
