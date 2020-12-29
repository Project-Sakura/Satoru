import { newE2EPage } from '@stencil/core/testing';

describe('center-view-rev-markers', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<center-view-rev-markers></center-view-rev-markers>');

    const element = await page.find('center-view-rev-markers');
    expect(element).toHaveClass('hydrated');
  });
});
