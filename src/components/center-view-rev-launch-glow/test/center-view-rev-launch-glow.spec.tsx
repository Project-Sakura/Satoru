import { newSpecPage } from '@stencil/core/testing';
import { CenterViewRevLaunchGlow } from '../center-view-rev-launch-glow';

describe('center-view-rev-launch-glow', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CenterViewRevLaunchGlow],
      html: `<center-view-rev-launch-glow></center-view-rev-launch-glow>`,
    });
    expect(page.root).toEqualHtml(`
      <center-view-rev-launch-glow>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </center-view-rev-launch-glow>
    `);
  });
});
