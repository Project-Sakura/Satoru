import { newE2EPage } from '@stencil/core/testing';

describe('left-view-info', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<left-view-info></left-view-info>');

    const element = await page.find('left-view-info');
    expect(element).toHaveClass('hydrated');
  });
});
