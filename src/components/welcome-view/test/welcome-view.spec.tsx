import { newSpecPage } from '@stencil/core/testing';
import { WelcomeView } from '../welcome-view';

describe('welcome-view', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WelcomeView],
      html: `<welcome-view></welcome-view>`,
    });
    expect(page.root).toEqualHtml(`
      <welcome-view>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </welcome-view>
    `);
  });
});
