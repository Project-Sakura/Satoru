import { newE2EPage } from '@stencil/core/testing';

describe('right-view-page-allinfo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<right-view-page-allinfo></right-view-page-allinfo>');

    const element = await page.find('right-view-page-allinfo');
    expect(element).toHaveClass('hydrated');
  });
});
