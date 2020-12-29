import { newE2EPage } from '@stencil/core/testing';

describe('right-view-page-diagrams', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<right-view-page-diagrams></right-view-page-diagrams>');

    const element = await page.find('right-view-page-diagrams');
    expect(element).toHaveClass('hydrated');
  });
});
