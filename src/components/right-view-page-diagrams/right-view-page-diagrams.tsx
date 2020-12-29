import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'right-view-page-diagrams',
  styleUrl: 'right-view-page-diagrams.css',
  shadow: true,
})
export class RightViewPageDiagrams {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
