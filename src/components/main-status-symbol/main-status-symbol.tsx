import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'main-status-symbol',
  styleUrl: 'main-status-symbol.css',
  shadow: true,
})
export class MainStatusSymbol {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
