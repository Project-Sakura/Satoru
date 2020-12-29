import { newE2EPage } from '@stencil/core/testing';

describe('center-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<center-view></center-view>');

    const element = await page.find('center-view');
    expect(element).toHaveClass('hydrated');
  });
});
