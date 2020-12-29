import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'center-view-inner-content',
  styleUrl: 'center-view-inner-content.css',
  shadow: true,
})
export class CenterViewInnerContent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
