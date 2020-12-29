import { newE2EPage } from '@stencil/core/testing';

describe('center-view-rev-needle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<center-view-rev-needle></center-view-rev-needle>');

    const element = await page.find('center-view-rev-needle');
    expect(element).toHaveClass('hydrated');
  });
});
