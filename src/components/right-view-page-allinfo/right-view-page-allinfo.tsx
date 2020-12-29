import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'right-view-page-allinfo',
  styleUrl: 'right-view-page-allinfo.css',
  shadow: true,
})
export class RightViewPageAllinfo {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
