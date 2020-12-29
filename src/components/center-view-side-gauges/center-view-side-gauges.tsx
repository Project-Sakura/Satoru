import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'center-view-side-gauges',
  styleUrl: 'center-view-side-gauges.css',
  shadow: true,
})
export class CenterViewSideGauges {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
