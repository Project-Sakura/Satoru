import { newE2EPage } from '@stencil/core/testing';

describe('center-view-side-gauges', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<center-view-side-gauges></center-view-side-gauges>');

    const element = await page.find('center-view-side-gauges');
    expect(element).toHaveClass('hydrated');
  });
});
