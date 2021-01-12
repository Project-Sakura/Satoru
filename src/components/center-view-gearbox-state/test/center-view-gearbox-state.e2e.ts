import { newE2EPage } from '@stencil/core/testing';

describe('center-view-gearbox-state', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<center-view-gearbox-state></center-view-gearbox-state>');

    const element = await page.find('center-view-gearbox-state');
    expect(element).toHaveClass('hydrated');
  });
});
