import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'welcome-view',
  styleUrl: 'welcome-view.css',
  shadow: true,
})
export class WelcomeView {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
