import { newSpecPage } from '@stencil/core/testing';
import { MainStatusSymbolsLayer } from '../main-status-symbols-layer';

describe('main-status-symbols-layer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MainStatusSymbolsLayer],
      html: `<main-status-symbols-layer></main-status-symbols-layer>`,
    });
    expect(page.root).toEqualHtml(`
      <main-status-symbols-layer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </main-status-symbols-layer>
    `);
  });
});
