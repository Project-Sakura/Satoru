import { newE2EPage } from '@stencil/core/testing';

describe('center-view-rev-limiter-glow', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<center-view-rev-limiter-glow></center-view-rev-limiter-glow>');

    const element = await page.find('center-view-rev-limiter-glow');
    expect(element).toHaveClass('hydrated');
  });
});
