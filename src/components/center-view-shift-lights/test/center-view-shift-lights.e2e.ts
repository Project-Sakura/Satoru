import { newE2EPage } from '@stencil/core/testing';

describe('center-view-shift-lights', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<center-view-shift-lights></center-view-shift-lights>');

    const element = await page.find('center-view-shift-lights');
    expect(element).toHaveClass('hydrated');
  });
});
