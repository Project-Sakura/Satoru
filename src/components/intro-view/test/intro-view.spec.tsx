import { newSpecPage } from '@stencil/core/testing';
import { IntroView } from '../intro-view';

describe('intro-view', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IntroView],
      html: `<intro-view></intro-view>`,
    });
    expect(page.root).toEqualHtml(`
      <intro-view>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </intro-view>
    `);
  });
});
