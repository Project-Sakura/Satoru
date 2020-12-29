import { newE2EPage } from '@stencil/core/testing';

describe('main-status-symbols-layer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<main-status-symbols-layer></main-status-symbols-layer>');

    const element = await page.find('main-status-symbols-layer');
    expect(element).toHaveClass('hydrated');
  });
});
