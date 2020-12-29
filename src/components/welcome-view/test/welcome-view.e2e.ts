import { newE2EPage } from '@stencil/core/testing';

describe('welcome-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<welcome-view></welcome-view>');

    const element = await page.find('welcome-view');
    expect(element).toHaveClass('hydrated');
  });
});
