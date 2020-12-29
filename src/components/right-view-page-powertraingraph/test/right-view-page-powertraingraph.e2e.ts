import { newE2EPage } from '@stencil/core/testing';

describe('right-view-page-powertraingraph', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<right-view-page-powertraingraph></right-view-page-powertraingraph>');

    const element = await page.find('right-view-page-powertraingraph');
    expect(element).toHaveClass('hydrated');
  });
});
