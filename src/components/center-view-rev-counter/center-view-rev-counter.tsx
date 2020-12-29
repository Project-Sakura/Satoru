import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'center-view-rev-counter',
  styleUrl: 'center-view-rev-counter.css',
  shadow: true,
})
export class CenterViewRevCounter {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
