import { newE2EPage } from '@stencil/core/testing';

describe('right-view-scroll-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<right-view-scroll-container></right-view-scroll-container>');

    const element = await page.find('right-view-scroll-container');
    expect(element).toHaveClass('hydrated');
  });
});
