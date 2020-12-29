import { newSpecPage } from '@stencil/core/testing';
import { CenterViewRevMarkers } from '../center-view-rev-markers';

describe('center-view-rev-markers', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CenterViewRevMarkers],
      html: `<center-view-rev-markers></center-view-rev-markers>`,
    });
    expect(page.root).toEqualHtml(`
      <center-view-rev-markers>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </center-view-rev-markers>
    `);
  });
});
