import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'intro-view',
  styleUrl: 'intro-view.css',
  shadow: true,
})
export class IntroView {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
