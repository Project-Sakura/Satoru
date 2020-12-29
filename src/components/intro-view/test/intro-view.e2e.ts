import { newE2EPage } from '@stencil/core/testing';

describe('intro-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<intro-view></intro-view>');

    const element = await page.find('intro-view');
    expect(element).toHaveClass('hydrated');
  });
});
