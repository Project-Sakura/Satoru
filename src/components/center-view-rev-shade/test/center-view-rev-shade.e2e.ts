import { newE2EPage } from '@stencil/core/testing';

describe('center-view-rev-shade', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<center-view-rev-shade></center-view-rev-shade>');

    const element = await page.find('center-view-rev-shade');
    expect(element).toHaveClass('hydrated');
  });
});
