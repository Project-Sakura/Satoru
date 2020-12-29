import { newE2EPage } from '@stencil/core/testing';

describe('center-view-rev-counter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<center-view-rev-counter></center-view-rev-counter>');

    const element = await page.find('center-view-rev-counter');
    expect(element).toHaveClass('hydrated');
  });
});
