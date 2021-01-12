import { newE2EPage } from '@stencil/core/testing';

describe('center-view-rev-launch-glow', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<center-view-rev-launch-glow></center-view-rev-launch-glow>');

    const element = await page.find('center-view-rev-launch-glow');
    expect(element).toHaveClass('hydrated');
  });
});
