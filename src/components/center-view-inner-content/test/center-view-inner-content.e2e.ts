import { newE2EPage } from '@stencil/core/testing';

describe('center-view-inner-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<center-view-inner-content></center-view-inner-content>');

    const element = await page.find('center-view-inner-content');
    expect(element).toHaveClass('hydrated');
  });
});
