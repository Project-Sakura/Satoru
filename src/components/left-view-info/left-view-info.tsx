import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'left-view-info',
  styleUrl: 'left-view-info.css',
  shadow: true,
})
export class LeftViewInfo {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
