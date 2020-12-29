import { newE2EPage } from '@stencil/core/testing';

describe('main-status-symbol', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<main-status-symbol></main-status-symbol>');

    const element = await page.find('main-status-symbol');
    expect(element).toHaveClass('hydrated');
  });
});
