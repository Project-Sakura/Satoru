import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'main-status-symbols-layer',
  styleUrl: 'main-status-symbols-layer.css',
  shadow: true,
})
export class MainStatusSymbolsLayer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
