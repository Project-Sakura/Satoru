import { newSpecPage } from '@stencil/core/testing';
import { MainStatusSymbol } from '../main-status-symbol';

describe('main-status-symbol', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MainStatusSymbol],
      html: `<main-status-symbol></main-status-symbol>`,
    });
    expect(page.root).toEqualHtml(`
      <main-status-symbol>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </main-status-symbol>
    `);
  });
});
