import { newSpecPage } from '@stencil/core/testing';
import { CenterViewRevLimiterGlow } from '../center-view-rev-limiter-glow';

describe('center-view-rev-limiter-glow', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CenterViewRevLimiterGlow],
      html: `<center-view-rev-limiter-glow></center-view-rev-limiter-glow>`,
    });
    expect(page.root).toEqualHtml(`
      <center-view-rev-limiter-glow>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </center-view-rev-limiter-glow>
    `);
  });
});
