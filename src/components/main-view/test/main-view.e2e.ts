import { newE2EPage } from '@stencil/core/testing';

describe('main-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<main-view></main-view>');

    const element = await page.find('main-view');
    expect(element).toHaveClass('hydrated');
  });
});
