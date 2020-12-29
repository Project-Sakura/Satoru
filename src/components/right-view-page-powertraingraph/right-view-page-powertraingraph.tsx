import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'right-view-page-powertraingraph',
  styleUrl: 'right-view-page-powertraingraph.css',
  shadow: true,
})
export class RightViewPagePowertraingraph {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
