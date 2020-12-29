import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'right-view-scroll-container',
  styleUrl: 'right-view-scroll-container.css',
  shadow: true,
})
export class RightViewScrollContainer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
