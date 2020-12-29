import { newSpecPage } from '@stencil/core/testing';
import { RightViewPageDiagrams } from '../right-view-page-diagrams';

describe('right-view-page-diagrams', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RightViewPageDiagrams],
      html: `<right-view-page-diagrams></right-view-page-diagrams>`,
    });
    expect(page.root).toEqualHtml(`
      <right-view-page-diagrams>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </right-view-page-diagrams>
    `);
  });
});
