import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'center-view',
  styleUrl: 'center-view.css',
  shadow: true,
})
export class CenterView {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
